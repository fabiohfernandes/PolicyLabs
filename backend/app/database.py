"""
Database configuration and connection for PolicyLabs APSS
PostgreSQL with async support
"""

from sqlalchemy import create_engine
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker, Session
from sqlalchemy.pool import QueuePool
import os
from typing import Generator, AsyncGenerator
import asyncio
from contextlib import asynccontextmanager

# Database configuration
DATABASE_URL = os.getenv(
    "DATABASE_URL",
    "postgresql://postgres:policylabs123@localhost:5432/policylabs"
)

# Convert to async URL for asyncpg
ASYNC_DATABASE_URL = DATABASE_URL.replace("postgresql://", "postgresql+asyncpg://")

# Create engines
engine = create_engine(
    DATABASE_URL,
    poolclass=QueuePool,
    pool_size=10,
    max_overflow=20,
    pool_pre_ping=True,
    echo=False  # Set to True for SQL logging in development
)

async_engine = create_async_engine(
    ASYNC_DATABASE_URL,
    poolclass=QueuePool,
    pool_size=10,
    max_overflow=20,
    pool_pre_ping=True,
    echo=False  # Set to True for SQL logging in development
)

# Create session makers
SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)

AsyncSessionLocal = sessionmaker(
    class_=AsyncSession,
    autocommit=False,
    autoflush=False,
    bind=async_engine
)


def get_db() -> Generator[Session, None, None]:
    """
    Dependency to get synchronous database session
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


async def get_async_db() -> AsyncGenerator[AsyncSession, None]:
    """
    Dependency to get asynchronous database session
    """
    async with AsyncSessionLocal() as session:
        try:
            yield session
        finally:
            await session.close()


@asynccontextmanager
async def get_async_db_context():
    """
    Context manager for async database session
    """
    async with AsyncSessionLocal() as session:
        try:
            yield session
        finally:
            await session.close()


def init_db():
    """
    Initialize database tables
    Only use this in development - use Alembic for production
    """
    from app.models import Base
    Base.metadata.create_all(bind=engine)


async def init_async_db():
    """
    Initialize database tables asynchronously
    Only use this in development - use Alembic for production
    """
    from app.models import Base
    async with async_engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)


def create_test_db():
    """
    Create test database for testing
    """
    test_database_url = DATABASE_URL.replace("/policylabs", "/policylabs_test")
    test_engine = create_engine(test_database_url)

    from app.models import Base
    Base.metadata.create_all(bind=test_engine)
    return test_engine


def check_database_connection_sync() -> bool:
    """
    Check if database connection is working (synchronous)
    """
    try:
        from sqlalchemy import text
        with engine.begin() as conn:
            conn.execute(text("SELECT 1"))
        return True
    except Exception as e:
        print(f"Database connection failed: {e}")
        return False


async def check_database_connection() -> bool:
    """
    Check if database connection is working (async wrapper)
    """
    return check_database_connection_sync()


def run_migrations():
    """
    Run database migrations manually
    In production, use Alembic CLI commands
    """
    try:
        # Import and run the auth migrations
        migration_file = "/app/database/auth_migrations.sql"
        if os.path.exists(migration_file):
            with open(migration_file, 'r') as f:
                migration_sql = f.read()

            with engine.begin() as conn:
                # Split by statements and execute each one
                statements = migration_sql.split(';')
                for statement in statements:
                    statement = statement.strip()
                    if statement and not statement.startswith('--'):
                        conn.execute(statement)

            print("Migrations completed successfully")
        else:
            print("Migration file not found")
    except Exception as e:
        print(f"Migration failed: {e}")


# Database health check
def health_check_sync() -> dict:
    """
    Perform database health check (synchronous)
    """
    try:
        from sqlalchemy import text
        with engine.begin() as conn:
            result = conn.execute(text("SELECT version()"))
            version = result.scalar()

            # Check connection pool status
            pool = engine.pool

            return {
                "status": "healthy",
                "version": version,
                "pool_size": pool.size(),
                "checked_in": pool.checkedin(),
                "checked_out": pool.checkedout(),
                "overflow": pool.overflow()
            }
    except Exception as e:
        return {
            "status": "unhealthy",
            "error": str(e)
        }


# Database health check
async def health_check() -> dict:
    """
    Perform database health check (async wrapper)
    """
    return health_check_sync()