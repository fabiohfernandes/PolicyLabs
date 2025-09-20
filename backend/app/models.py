"""
Database models for PolicyLabs APSS
SQLAlchemy models with PostgreSQL support
"""

from sqlalchemy import (
    Column, String, Boolean, Integer, DateTime, Text, DECIMAL, BigInteger,
    ForeignKey, Enum, func, Index
)
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.dialects.postgresql import UUID, INET, JSONB
from sqlalchemy.orm import relationship
import uuid
import enum
from datetime import datetime
from typing import Optional

Base = declarative_base()

# Enum definitions
class UserRole(enum.Enum):
    admin = "admin"
    mayor = "mayor"
    secretary = "secretary"
    citizen = "citizen"
    analyst = "analyst"

class MunicipalitySize(enum.Enum):
    small = "small"
    medium = "medium"
    large = "large"
    metropolis = "metropolis"

class PolicyStatus(enum.Enum):
    draft = "draft"
    simulation = "simulation"
    approved = "approved"
    implementing = "implementing"
    completed = "completed"
    cancelled = "cancelled"

class PolicyCategory(enum.Enum):
    education = "education"
    health = "health"
    infrastructure = "infrastructure"
    environment = "environment"
    social = "social"
    economic = "economic"
    security = "security"
    transport = "transport"

class VerificationType(enum.Enum):
    email = "email"
    phone = "phone"
    password_reset = "password_reset"
    two_fa_setup = "2fa_setup"

class SessionStatus(enum.Enum):
    active = "active"
    expired = "expired"
    revoked = "revoked"


# User model with 2FA support
class User(Base):
    __tablename__ = "users"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    email = Column(String(255), unique=True, nullable=False, index=True)
    password_hash = Column(String(255), nullable=False)
    full_name = Column(String(255), nullable=False)
    phone = Column(String(20), nullable=True)
    role = Column(Enum(UserRole, name="user_role"), nullable=False, default=UserRole.citizen)
    municipality_id = Column(UUID(as_uuid=True), ForeignKey("municipalities.id"), nullable=True)
    profile_image_url = Column(String(1000), nullable=True)

    # Account status
    is_active = Column(Boolean, default=True)
    is_verified = Column(Boolean, default=False)
    two_factor_enabled = Column(Boolean, default=False)

    # Security fields
    last_login_at = Column(DateTime(timezone=True), nullable=True)
    login_attempts = Column(Integer, default=0)
    locked_until = Column(DateTime(timezone=True), nullable=True)
    verification_token = Column(String(255), nullable=True)
    verification_token_expires = Column(DateTime(timezone=True), nullable=True)

    # Timestamps
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    # Relationships
    municipality = relationship("Municipality", back_populates="users")
    verification_codes = relationship("UserVerificationCode", back_populates="user", cascade="all, delete-orphan")
    two_fa_secret = relationship("User2FASecret", back_populates="user", uselist=False, cascade="all, delete-orphan")
    sessions = relationship("UserSession", back_populates="user", cascade="all, delete-orphan")
    login_history = relationship("UserLoginHistory", back_populates="user", cascade="all, delete-orphan")
    password_reset_tokens = relationship("PasswordResetToken", back_populates="user", cascade="all, delete-orphan")


class Municipality(Base):
    __tablename__ = "municipalities"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String(255), nullable=False)
    state = Column(String(100), nullable=False)
    region = Column(String(100), nullable=True)
    population = Column(Integer, nullable=True)
    area_km2 = Column(DECIMAL(10, 2), nullable=True)
    budget = Column(BigInteger, nullable=True)
    gdp_per_capita = Column(DECIMAL(12, 2), nullable=True)
    size = Column(Enum(MunicipalitySize), nullable=True)
    mayor_name = Column(String(255), nullable=True)
    coordinates = Column(JSONB, nullable=True)
    demographics = Column(JSONB, nullable=True)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    # Relationships
    users = relationship("User", back_populates="municipality")


class UserVerificationCode(Base):
    __tablename__ = "user_verification_codes"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    code = Column(String(10), nullable=False, index=True)
    type = Column(Enum(VerificationType, name="verification_type"), nullable=False)
    expires_at = Column(DateTime(timezone=True), nullable=False, index=True)
    used_at = Column(DateTime(timezone=True), nullable=True)
    ip_address = Column(INET, nullable=True)
    user_agent = Column(Text, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    # Relationships
    user = relationship("User", back_populates="verification_codes")


class User2FASecret(Base):
    __tablename__ = "user_2fa_secrets"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    secret = Column(String(255), nullable=False)
    backup_codes = Column(JSONB, nullable=True)  # Array of backup codes
    enabled_at = Column(DateTime(timezone=True), nullable=True)
    last_used_at = Column(DateTime(timezone=True), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    # Relationships
    user = relationship("User", back_populates="two_fa_secret")


class UserSession(Base):
    __tablename__ = "user_sessions"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    session_token = Column(String(255), nullable=False, unique=True, index=True)
    refresh_token = Column(String(255), nullable=False, unique=True, index=True)
    status = Column(Enum(SessionStatus, name="session_status"), default=SessionStatus.active, index=True)
    ip_address = Column(INET, nullable=True)
    user_agent = Column(Text, nullable=True)
    device_info = Column(JSONB, nullable=True)
    expires_at = Column(DateTime(timezone=True), nullable=False, index=True)
    last_activity_at = Column(DateTime(timezone=True), server_default=func.now())
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    # Relationships
    user = relationship("User", back_populates="sessions")


class PasswordResetToken(Base):
    __tablename__ = "password_reset_tokens"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    token = Column(String(255), nullable=False, unique=True, index=True)
    expires_at = Column(DateTime(timezone=True), nullable=False, index=True)
    used_at = Column(DateTime(timezone=True), nullable=True)
    ip_address = Column(INET, nullable=True)
    user_agent = Column(Text, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    # Relationships
    user = relationship("User", back_populates="password_reset_tokens")


class UserLoginHistory(Base):
    __tablename__ = "user_login_history"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    login_type = Column(String(50), nullable=False)  # 'password', '2fa', 'social'
    success = Column(Boolean, nullable=False)
    ip_address = Column(INET, nullable=True)
    user_agent = Column(Text, nullable=True)
    device_info = Column(JSONB, nullable=True)
    location = Column(JSONB, nullable=True)  # Country, city, etc.
    failed_reason = Column(String(255), nullable=True)  # If success = false
    created_at = Column(DateTime(timezone=True), server_default=func.now(), index=True)

    # Relationships
    user = relationship("User", back_populates="login_history")


# Create indexes for better performance
Index('idx_user_email_active', User.email, User.is_active)
Index('idx_user_verification_token', User.verification_token)
Index('idx_municipality_name_state', Municipality.name, Municipality.state)
Index('idx_session_user_status', UserSession.user_id, UserSession.status)
Index('idx_login_history_user_time', UserLoginHistory.user_id, UserLoginHistory.created_at)