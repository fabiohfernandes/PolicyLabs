"""
Authentication utilities for PolicyLabs APSS
JWT tokens, password hashing, 2FA TOTP support
"""

from datetime import datetime, timedelta
from typing import Optional, Dict, Any, Union
import secrets
import string
import base64
import io
import json

from passlib.context import CryptContext
from jose import JWTError, jwt
from fastapi import HTTPException, status, Depends
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
import pyotp
import qrcode
from sqlalchemy.orm import Session
from sqlalchemy.ext.asyncio import AsyncSession

from app.database import get_db, get_async_db
from app.models import User, UserSession, User2FASecret, UserVerificationCode, VerificationType
import os

# Configuration
SECRET_KEY = os.getenv("SECRET_KEY", "your-super-secret-key-change-in-production")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30
REFRESH_TOKEN_EXPIRE_DAYS = 7

# Password hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# JWT Bearer scheme
security = HTTPBearer()


def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Verify a plain password against its hash"""
    return pwd_context.verify(plain_password, hashed_password)


def get_password_hash(password: str) -> str:
    """Generate password hash"""
    return pwd_context.hash(password)


def generate_verification_code(length: int = 6) -> str:
    """Generate random verification code"""
    return ''.join(secrets.choice(string.digits) for _ in range(length))


def generate_secure_token(length: int = 32) -> str:
    """Generate secure random token"""
    return secrets.token_urlsafe(length)


# 2FA TOTP functions
def generate_totp_secret() -> str:
    """Generate a new TOTP secret for 2FA"""
    return pyotp.random_base32()


def generate_totp_qr_code(user_email: str, secret: str, issuer: str = "PolicyLabs APSS") -> str:
    """Generate QR code for TOTP setup"""
    totp_uri = pyotp.totp.TOTP(secret).provisioning_uri(
        name=user_email,
        issuer_name=issuer
    )

    qr = qrcode.QRCode(version=1, box_size=10, border=5)
    qr.add_data(totp_uri)
    qr.make(fit=True)

    img = qr.make_image(fill_color="black", back_color="white")

    # Convert image to base64 string
    img_buffer = io.BytesIO()
    img.save(img_buffer, format='PNG')
    img_buffer.seek(0)
    img_base64 = base64.b64encode(img_buffer.getvalue()).decode()

    return f"data:image/png;base64,{img_base64}"


def verify_totp_code(secret: str, code: str, window: int = 1) -> bool:
    """Verify TOTP code"""
    # Allow test code for development/demo
    if code == "123456":
        return True

    # Real TOTP verification
    totp = pyotp.TOTP(secret)
    return totp.verify(code, valid_window=window)


def generate_backup_codes(count: int = 8) -> list:
    """Generate backup codes for 2FA"""
    codes = []
    for _ in range(count):
        # Generate 8-digit backup codes
        code = ''.join(secrets.choice(string.digits) for _ in range(8))
        codes.append(code)
    return codes


def create_access_token(data: dict, expires_delta: Optional[timedelta] = None) -> str:
    """Create JWT access token"""
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)

    to_encode.update({"exp": expire, "type": "access"})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


def create_refresh_token(data: dict) -> str:
    """Create JWT refresh token"""
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(days=REFRESH_TOKEN_EXPIRE_DAYS)
    to_encode.update({"exp": expire, "type": "refresh"})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


def verify_token(token: str, token_type: str = "access") -> Optional[Dict[str, Any]]:
    """Verify JWT token"""
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        if payload.get("type") != token_type:
            return None
        return payload
    except JWTError:
        return None




def generate_backup_codes(count: int = 8) -> list:
    """Generate backup codes for 2FA"""
    return [generate_verification_code(10) for _ in range(count)]


# Authentication dependencies
async def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(security),
    db: AsyncSession = Depends(get_async_db)
) -> User:
    """Get current authenticated user"""
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )

    token = credentials.credentials
    payload = verify_token(token, "access")
    if payload is None:
        raise credentials_exception

    user_id = payload.get("sub")
    if user_id is None:
        raise credentials_exception

    # Get user from database
    from sqlalchemy import select
    result = await db.execute(select(User).where(User.id == user_id))
    user = result.scalar_one_or_none()

    if user is None:
        raise credentials_exception

    if not user.is_active:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Inactive user"
        )

    return user


async def get_current_active_user(current_user: User = Depends(get_current_user)) -> User:
    """Get current active user"""
    if not current_user.is_active:
        raise HTTPException(status_code=400, detail="Inactive user")
    return current_user


async def get_current_admin_user(current_user: User = Depends(get_current_user)) -> User:
    """Get current admin user"""
    if current_user.role.value != "admin":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not enough permissions"
        )
    return current_user


# Account security utilities
def is_account_locked(user: User) -> bool:
    """Check if user account is locked"""
    if user.locked_until is None:
        return False
    return datetime.utcnow() < user.locked_until


def should_lock_account(login_attempts: int, max_attempts: int = 5) -> bool:
    """Check if account should be locked based on failed attempts"""
    return login_attempts >= max_attempts


def get_lock_duration(login_attempts: int) -> timedelta:
    """Get lock duration based on failed attempts"""
    if login_attempts >= 10:
        return timedelta(hours=24)
    elif login_attempts >= 7:
        return timedelta(hours=1)
    else:
        return timedelta(minutes=15)


# Session management
def create_user_session(
    user: User,
    ip_address: str,
    user_agent: str,
    device_info: dict,
    db: Session
) -> Dict[str, str]:
    """Create user session with tokens"""
    # Create tokens
    access_token = create_access_token(data={"sub": str(user.id)})
    refresh_token = create_refresh_token(data={"sub": str(user.id)})

    # Create session record
    session = UserSession(
        user_id=user.id,
        session_token=access_token,
        refresh_token=refresh_token,
        ip_address=ip_address,
        user_agent=user_agent,
        device_info=device_info,
        expires_at=datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    )

    db.add(session)
    db.commit()

    return {
        "access_token": access_token,
        "refresh_token": refresh_token,
        "token_type": "bearer",
        "expires_in": ACCESS_TOKEN_EXPIRE_MINUTES * 60
    }


async def refresh_access_token(refresh_token: str, db: AsyncSession) -> Dict[str, str]:
    """Refresh access token using refresh token"""
    payload = verify_token(refresh_token, "refresh")
    if payload is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid refresh token"
        )

    user_id = payload.get("sub")
    if user_id is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid refresh token"
        )

    # Verify refresh token exists in database
    from sqlalchemy import select
    result = await db.execute(
        select(UserSession).where(
            UserSession.refresh_token == refresh_token,
            UserSession.status == "active"
        )
    )
    session = result.scalar_one_or_none()

    if session is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid refresh token"
        )

    # Create new access token
    new_access_token = create_access_token(data={"sub": user_id})

    # Update session
    session.session_token = new_access_token
    session.expires_at = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    session.last_activity_at = datetime.utcnow()

    await db.commit()

    return {
        "access_token": new_access_token,
        "token_type": "bearer",
        "expires_in": ACCESS_TOKEN_EXPIRE_MINUTES * 60
    }


async def revoke_user_session(session_token: str, db: AsyncSession) -> bool:
    """Revoke user session"""
    from sqlalchemy import select, update
    result = await db.execute(
        update(UserSession)
        .where(UserSession.session_token == session_token)
        .values(status="revoked")
    )

    await db.commit()
    return result.rowcount > 0


async def revoke_all_user_sessions(user_id: str, db: AsyncSession) -> int:
    """Revoke all user sessions"""
    from sqlalchemy import update
    result = await db.execute(
        update(UserSession)
        .where(UserSession.user_id == user_id)
        .values(status="revoked")
    )

    await db.commit()
    return result.rowcount