"""
Authentication API routes for PolicyLabs APSS
Registration, login, 2FA, password reset endpoints
"""

from fastapi import APIRouter, HTTPException, status, Depends, Request, Response
from fastapi.security import OAuth2PasswordRequestForm
from pydantic import BaseModel, validator
from sqlalchemy.orm import Session
from sqlalchemy import select, update
from datetime import datetime, timedelta
from typing import Optional, Dict, Any
import uuid

from app.database import get_db
from app.models import (
    User, UserVerificationCode, User2FASecret, UserLoginHistory,
    PasswordResetToken, VerificationType, UserRole
)
from app.auth import (
    verify_password, get_password_hash, generate_verification_code,
    generate_secure_token, create_user_session, get_current_user,
    generate_totp_secret, generate_totp_qr_code, verify_totp_code,
    generate_backup_codes, is_account_locked, should_lock_account,
    get_lock_duration, refresh_access_token, revoke_user_session,
    revoke_all_user_sessions, create_access_token
)

router = APIRouter(prefix="/auth", tags=["Authentication"])

# Pydantic models for request/response
class UserRegistration(BaseModel):
    email: str
    password: str
    full_name: str
    phone: Optional[str] = None
    municipality_name: Optional[str] = None

    @validator('password')
    def validate_password(cls, v):
        if len(v) < 8:
            raise ValueError('Password must be at least 8 characters long')
        if not any(c.isupper() for c in v):
            raise ValueError('Password must contain at least one uppercase letter')
        if not any(c.islower() for c in v):
            raise ValueError('Password must contain at least one lowercase letter')
        if not any(c.isdigit() for c in v):
            raise ValueError('Password must contain at least one number')
        return v


class UserLogin(BaseModel):
    email: str
    password: str
    totp_code: Optional[str] = None
    remember_me: bool = False


class PasswordReset(BaseModel):
    email: str


class PasswordResetConfirm(BaseModel):
    token: str
    new_password: str

    @validator('new_password')
    def validate_password(cls, v):
        if len(v) < 8:
            raise ValueError('Password must be at least 8 characters long')
        return v


class EmailVerification(BaseModel):
    email: str
    code: str


class TwoFactorSetup(BaseModel):
    totp_code: str


class RegistrationCompletion(BaseModel):
    email: str
    totp_code: str


class TwoFactorVerify(BaseModel):
    totp_code: str


class RefreshTokenRequest(BaseModel):
    refresh_token: str


class UserResponse(BaseModel):
    id: str
    email: str
    full_name: str
    role: str
    is_verified: bool
    two_factor_enabled: bool
    created_at: datetime

    class Config:
        from_attributes = True


class LoginResponse(BaseModel):
    user: UserResponse
    access_token: str
    refresh_token: str
    token_type: str
    expires_in: int
    requires_2fa: bool = False


def get_client_info(request: Request) -> Dict[str, Any]:
    """Extract client information from request"""
    return {
        "ip_address": request.client.host,
        "user_agent": request.headers.get("user-agent", ""),
        "device_info": {
            "platform": request.headers.get("sec-ch-ua-platform", ""),
            "mobile": request.headers.get("sec-ch-ua-mobile", "") == "?1",
        }
    }


def log_login_attempt(
    user_id: uuid.UUID,
    login_type: str,
    success: bool,
    client_info: Dict[str, Any],
    failed_reason: Optional[str],
    db: Session
):
    """Log login attempt for security auditing"""
    login_record = UserLoginHistory(
        user_id=user_id,
        login_type=login_type,
        success=success,
        ip_address=client_info["ip_address"],
        user_agent=client_info["user_agent"],
        device_info=client_info["device_info"],
        failed_reason=failed_reason
    )
    db.add(login_record)
    db.commit()


@router.post("/register", response_model=Dict[str, Any])
def register(
    user_data: UserRegistration,
    request: Request,
    db: Session = Depends(get_db)
):
    """Register new user account with mandatory 2FA setup"""

    # Check if user already exists
    result = db.execute(select(User).where(User.email == user_data.email))
    if result.scalar_one_or_none():
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered"
        )

    # Create new user with 2FA enabled by default
    user = User(
        email=user_data.email,
        password_hash=get_password_hash(user_data.password),
        full_name=user_data.full_name,
        phone=user_data.phone,
        role=UserRole.citizen,  # Default role
        is_active=True,
        is_verified=False,  # Will be verified after 2FA setup
        two_factor_enabled=True  # Mandatory 2FA
    )

    db.add(user)
    db.flush()  # Get user ID

    # Generate 2FA secret and backup codes
    totp_secret = generate_totp_secret()
    backup_codes = generate_backup_codes()

    # Create 2FA secret record (not enabled until verified)
    totp_record = User2FASecret(
        user_id=user.id,
        secret=totp_secret,
        backup_codes=backup_codes,
        enabled_at=None  # Will be set after verification
    )

    db.add(totp_record)

    # Generate QR code for authenticator app
    qr_code = generate_totp_qr_code(user.email, totp_secret)

    # Generate email verification code (keeping for future use)
    verification_code = generate_verification_code()
    verification_record = UserVerificationCode(
        user_id=user.id,
        code=verification_code,
        type=VerificationType.email,
        expires_at=datetime.utcnow() + timedelta(hours=24),
        ip_address=request.client.host,
        user_agent=request.headers.get("user-agent", "")
    )

    db.add(verification_record)
    db.commit()

    return {
        "message": "Registration successful! Complete 2FA setup to activate your account.",
        "user_id": str(user.id),
        "secret": totp_secret,
        "qr_code": qr_code,
        "backup_codes": backup_codes,
        "requires_2fa_setup": True,
        "verification_code": verification_code,  # For testing - remove in production
        "note": "Scan the QR code with your authenticator app and enter the 6-digit code to complete registration"
    }


@router.post("/verify-email", response_model=Dict[str, str])
def verify_email(
    verification_data: EmailVerification,
    db: Session = Depends(get_db)
):
    """Verify email address with code"""

    # Find user by email
    user_result = db.execute(select(User).where(User.email == verification_data.email))
    user = user_result.scalar_one_or_none()

    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )

    # Find verification code
    code_result = db.execute(
        select(UserVerificationCode).where(
            UserVerificationCode.user_id == user.id,
            UserVerificationCode.code == verification_data.code,
            UserVerificationCode.type == VerificationType.email,
            UserVerificationCode.used_at.is_(None),
            UserVerificationCode.expires_at > datetime.utcnow()
        )
    )
    verification_code = code_result.scalar_one_or_none()

    if not verification_code:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid or expired verification code"
        )

    # Mark user as verified and code as used
    user.is_verified = True
    verification_code.used_at = datetime.utcnow()

    db.commit()

    return {"message": "Email verified successfully"}


@router.post("/complete-registration", response_model=Dict[str, Any])
def complete_registration(
    completion_data: RegistrationCompletion,
    db: Session = Depends(get_db)
):
    """Complete registration by verifying 2FA setup"""

    # Find user by email
    user_result = db.execute(select(User).where(User.email == completion_data.email))
    user = user_result.scalar_one_or_none()

    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )

    if user.is_verified:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Account already verified"
        )

    # Find 2FA secret for this user
    totp_result = db.execute(
        select(User2FASecret).where(User2FASecret.user_id == user.id)
    )
    totp_secret = totp_result.scalar_one_or_none()

    if not totp_secret:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="2FA setup not found. Please restart registration."
        )

    # Verify TOTP code
    if not verify_totp_code(totp_secret.secret, completion_data.totp_code):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid 2FA code"
        )

    # Complete registration
    user.is_verified = True
    totp_secret.enabled_at = datetime.utcnow()

    db.commit()

    # Generate access tokens for immediate login
    access_token_data = {
        "sub": str(user.id),
        "email": user.email,
        "exp": datetime.utcnow() + timedelta(minutes=30)
    }
    access_token = create_access_token(access_token_data)

    refresh_token_data = {
        "sub": str(user.id),
        "type": "refresh",
        "exp": datetime.utcnow() + timedelta(days=7)
    }
    refresh_token = create_access_token(refresh_token_data)

    return {
        "message": "Registration completed successfully! You are now logged in.",
        "access_token": access_token,
        "refresh_token": refresh_token,
        "token_type": "bearer",
        "expires_in": 1800,  # 30 minutes
        "user": {
            "id": str(user.id),
            "email": user.email,
            "full_name": user.full_name,
            "two_factor_enabled": True
        }
    }


@router.post("/login", response_model=LoginResponse)
def login(
    user_data: UserLogin,
    request: Request,
    db: Session = Depends(get_db)
):
    """User login with mandatory 2FA"""

    client_info = get_client_info(request)

    # Find user by email
    result = db.execute(select(User).where(User.email == user_data.email))
    user = result.scalar_one_or_none()

    if not user:
        # Don't log login attempts for non-existent users to avoid foreign key errors
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password"
        )

    # Check if account is locked
    if is_account_locked(user):
        log_login_attempt(
            user.id,
            "password",
            False,
            client_info,
            "Account locked",
            db
        )
        raise HTTPException(
            status_code=status.HTTP_423_LOCKED,
            detail="Account is temporarily locked due to failed login attempts"
        )

    # Verify password
    if not verify_password(user_data.password, user.password_hash):
        # Increment failed attempts
        user.login_attempts += 1

        if should_lock_account(user.login_attempts):
            user.locked_until = datetime.utcnow() + get_lock_duration(user.login_attempts)

        db.commit()

        log_login_attempt(
            user.id,
            "password",
            False,
            client_info,
            "Incorrect password",
            db
        )

        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password"
        )

    # Check if user is verified
    if not user.is_verified:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Please complete registration by setting up 2FA first"
        )

    # Check if 2FA is enabled (mandatory for all users)
    if not user.two_factor_enabled:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="2FA is required for all accounts. Please complete registration."
        )

    # 2FA is mandatory - always require code
    if True:
        if not user_data.totp_code:
            return LoginResponse(
                user=UserResponse(
                    id=str(user.id),
                    email=user.email,
                    full_name=user.full_name,
                    role=user.role.value,
                    is_verified=user.is_verified,
                    two_factor_enabled=user.two_factor_enabled,
                    created_at=user.created_at
                ),
                access_token="",
                refresh_token="",
                token_type="bearer",
                expires_in=0,
                requires_2fa=True
            )

        # Verify 2FA code
        totp_result = db.execute(
            select(User2FASecret).where(User2FASecret.user_id == user.id)
        )
        totp_secret = totp_result.scalar_one_or_none()

        if not totp_secret or not verify_totp_code(totp_secret.secret, user_data.totp_code):
            log_login_attempt(
                user.id,
                "2fa",
                False,
                client_info,
                "Invalid 2FA code",
                db
            )
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid 2FA code"
            )

        # Update 2FA last used
        totp_secret.last_used_at = datetime.utcnow()

    # Reset login attempts on successful login
    user.login_attempts = 0
    user.locked_until = None
    user.last_login_at = datetime.utcnow()

    db.commit()

    # Create session
    session_data = create_user_session(
        user,
        client_info["ip_address"],
        client_info["user_agent"],
        client_info["device_info"],
        db
    )

    # Log successful login
    log_login_attempt(
        user.id,
        "2fa" if user.two_factor_enabled else "password",
        True,
        client_info,
        None,
        db
    )

    return LoginResponse(
        user=UserResponse(
            id=str(user.id),
            email=user.email,
            full_name=user.full_name,
            role=user.role.value,
            is_verified=user.is_verified,
            two_factor_enabled=user.two_factor_enabled,
            created_at=user.created_at
        ),
        **session_data,
        requires_2fa=False
    )


@router.post("/refresh", response_model=Dict[str, Any])
async def refresh_token(
    token_data: RefreshTokenRequest,
    db: Session = Depends(get_db)
):
    """Refresh access token"""
    return await refresh_access_token(token_data.refresh_token, db)


@router.post("/logout")
async def logout(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Logout user and revoke session"""
    # Note: We'd need the actual session token here in a real implementation
    # For now, we'll revoke all user sessions
    await revoke_all_user_sessions(str(current_user.id), db)
    return {"message": "Logged out successfully"}


@router.post("/setup-2fa", response_model=Dict[str, Any])
def setup_2fa(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Setup 2FA for user account"""

    if current_user.two_factor_enabled:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="2FA is already enabled"
        )

    # Generate TOTP secret
    secret = generate_totp_secret()

    # Create or update 2FA secret record
    totp_record = User2FASecret(
        user_id=current_user.id,
        secret=secret,
        backup_codes=generate_backup_codes()
    )

    db.add(totp_record)
    db.commit()

    # Generate QR code
    qr_code = generate_totp_qr_code(current_user.email, secret)

    return {
        "secret": secret,
        "qr_code": qr_code,
        "backup_codes": totp_record.backup_codes,
        "message": "Scan the QR code with your authenticator app and verify with a code to enable 2FA"
    }


@router.post("/verify-2fa")
def verify_2fa_setup(
    verification_data: TwoFactorSetup,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Verify and enable 2FA"""

    # Get pending 2FA secret
    result = db.execute(
        select(User2FASecret).where(
            User2FASecret.user_id == current_user.id,
            User2FASecret.enabled_at.is_(None)
        )
    )
    totp_secret = result.scalar_one_or_none()

    if not totp_secret:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="No pending 2FA setup found"
        )

    # Verify TOTP code
    if not verify_totp_code(totp_secret.secret, verification_data.totp_code):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid TOTP code"
        )

    # Enable 2FA
    current_user.two_factor_enabled = True
    totp_secret.enabled_at = datetime.utcnow()

    db.commit()

    return {"message": "2FA enabled successfully"}


@router.post("/disable-2fa")
async def disable_2fa(
    verification_data: TwoFactorVerify,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Disable 2FA for user account"""

    if not current_user.two_factor_enabled:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="2FA is not enabled"
        )

    # Get 2FA secret
    result = db.execute(
        select(User2FASecret).where(User2FASecret.user_id == current_user.id)
    )
    totp_secret = result.scalar_one_or_none()

    if not totp_secret:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="2FA secret not found"
        )

    # Verify TOTP code
    if not verify_totp_code(totp_secret.secret, verification_data.totp_code):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid TOTP code"
        )

    # Disable 2FA
    current_user.two_factor_enabled = False
    await db.delete(totp_secret)

    db.commit()

    return {"message": "2FA disabled successfully"}


@router.post("/forgot-password")
async def forgot_password(
    reset_data: PasswordReset,
    request: Request,
    db: Session = Depends(get_db)
):
    """Request password reset"""

    # Find user
    result = db.execute(select(User).where(User.email == reset_data.email))
    user = result.scalar_one_or_none()

    if not user:
        # Don't reveal if email exists or not
        return {"message": "If the email exists, a reset link has been sent"}

    # Generate reset token
    reset_token = generate_secure_token()

    # Create reset token record
    token_record = PasswordResetToken(
        user_id=user.id,
        token=reset_token,
        expires_at=datetime.utcnow() + timedelta(hours=1),
        ip_address=request.client.host,
        user_agent=request.headers.get("user-agent", "")
    )

    db.add(token_record)
    db.commit()

    # TODO: Send password reset email
    # await send_password_reset_email(user.email, reset_token)

    return {"message": "If the email exists, a reset link has been sent"}


@router.post("/reset-password")
async def reset_password(
    reset_data: PasswordResetConfirm,
    db: Session = Depends(get_db)
):
    """Reset password with token"""

    # Find reset token
    result = db.execute(
        select(PasswordResetToken).where(
            PasswordResetToken.token == reset_data.token,
            PasswordResetToken.used_at.is_(None),
            PasswordResetToken.expires_at > datetime.utcnow()
        )
    )
    token_record = result.scalar_one_or_none()

    if not token_record:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid or expired reset token"
        )

    # Get user
    user_result = db.execute(select(User).where(User.id == token_record.user_id))
    user = user_result.scalar_one()

    # Update password
    user.password_hash = get_password_hash(reset_data.new_password)
    user.login_attempts = 0  # Reset failed attempts
    user.locked_until = None  # Unlock account

    # Mark token as used
    token_record.used_at = datetime.utcnow()

    # Revoke all existing sessions
    await revoke_all_user_sessions(str(user.id), db)

    db.commit()

    return {"message": "Password reset successfully"}


@router.get("/me", response_model=UserResponse)
async def get_current_user_info(current_user: User = Depends(get_current_user)):
    """Get current user information"""
    return UserResponse.from_orm(current_user)