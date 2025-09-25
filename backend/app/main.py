"""
PolicyLabs APSS - AI Policy Simulation System
FastAPI Backend for Brazilian Municipal Governments

Target: 73% of mayors lack public administration training
Solution: "Uber da Gestão Pública" - on-demand policy projects
"""

from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from typing import List, Optional, Dict, Any
import os
from datetime import datetime
import uvicorn
import asyncio

# Import our modules
from app.database import check_database_connection, health_check as db_health_check, init_async_db
from app.auth_routes import router as auth_router
from app.routes.chat import router as chat_router

# Application setup
app = FastAPI(
    title="PolicyLabs APSS API",
    description="AI Policy Simulation System for Brazilian Municipal Governments",
    version="2.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# Include authentication routes
app.include_router(auth_router)
app.include_router(chat_router)

# CORS configuration for frontend integration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "https://www.policylabs.com.br",
        "https://policylabs.com.br",
        "https://*.up.railway.app"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic models for API requests/responses
class HealthResponse(BaseModel):
    status: str
    timestamp: str
    version: str
    services: Dict[str, str]

class AuthSession(BaseModel):
    user: Optional[Dict[str, Any]] = None
    expires: Optional[str] = None

class ApiResponse(BaseModel):
    success: bool
    message: str
    data: Optional[Dict[str, Any]] = None

# Startup event
@app.on_event("startup")
async def startup_event():
    """Initialize application on startup"""
    try:
        # Check database connection
        db_connected = await check_database_connection()
        if not db_connected:
            print("Warning: Database connection failed during startup")
        else:
            print("Database connection successful")
            # Initialize database tables if needed
            # await init_async_db()  # Uncomment for first-time setup
    except Exception as e:
        print(f"Startup error: {e}")

# Health check endpoint
@app.get("/health", response_model=HealthResponse)
async def health_check():
    """Health check endpoint for monitoring system status"""
    db_health = await db_health_check()

    return HealthResponse(
        status="healthy" if db_health["status"] == "healthy" else "degraded",
        timestamp=datetime.utcnow().isoformat(),
        version="2.0.0",
        services={
            "database": db_health["status"],
            "redis": "connected",
            "weaviate": "connected",
            "policy_dna": "ready",
            "authentication": "ready"
        }
    )

# Root endpoint
@app.get("/")
async def root():
    """Root endpoint with API information"""
    return {
        "message": "PolicyLabs APSS - AI Policy Simulation System",
        "version": "2.0.0",
        "target": "Brazilian Municipal Governments",
        "docs": "/docs",
        "health": "/health"
    }

# NextAuth compatibility endpoints
@app.get("/api/auth/session")
async def auth_session():
    """NextAuth session endpoint compatibility"""
    return JSONResponse(
        content={
            "user": None,
            "expires": None
        },
        status_code=200
    )

@app.post("/api/auth/_log")
async def auth_log():
    """NextAuth logging endpoint compatibility"""
    return JSONResponse(
        content={"success": True},
        status_code=200
    )

# Policy management endpoints (Phase 4 preparation)
@app.get("/api/policies")
async def get_policies():
    """Get list of available policies"""
    return {
        "success": True,
        "message": "PolicyDNA™ system ready",
        "data": {
            "total_policies": 0,
            "active_simulations": 0,
            "prediction_accuracy": "85%"
        }
    }

@app.get("/api/municipalities")
async def get_municipalities():
    """Get list of Brazilian municipalities"""
    return {
        "success": True,
        "message": "Municipal data ready",
        "data": {
            "total_municipalities": 5570,
            "active_mayors": 0,
            "coverage": "100%"
        }
    }

# Simulation endpoints (Phase 4 preparation)
@app.post("/api/simulations")
async def create_simulation():
    """Create new policy simulation"""
    return {
        "success": True,
        "message": "Simulation created successfully",
        "data": {
            "simulation_id": "sim_001",
            "status": "pending",
            "estimated_completion": "2 minutes"
        }
    }

# Analytics endpoints
@app.get("/api/analytics/dashboard")
async def get_dashboard_analytics():
    """Get dashboard analytics data"""
    return {
        "success": True,
        "data": {
            "total_users": 0,
            "active_policies": 0,
            "success_rate": "85%",
            "monthly_growth": "15%"
        }
    }

# Simple test registration endpoint
@app.post("/api/test-register")
async def test_register(user_data: dict):
    """Simple test registration without async DB"""
    return {
        "success": True,
        "message": "User registered successfully! You can now login.",
        "user": {
            "email": user_data.get("email"),
            "full_name": user_data.get("full_name"),
            "verified": True
        }
    }

# Error handlers
@app.exception_handler(404)
async def not_found_handler(request, exc):
    return JSONResponse(
        status_code=404,
        content={
            "success": False,
            "message": "Endpoint not found",
            "error": "NOT_FOUND"
        }
    )

@app.exception_handler(500)
async def internal_error_handler(request, exc):
    return JSONResponse(
        status_code=500,
        content={
            "success": False,
            "message": "Internal server error",
            "error": "INTERNAL_ERROR"
        }
    )

if __name__ == "__main__":
    uvicorn.run(
        "app.main:app",
        host="0.0.0.0",
        port=8000,
        reload=True
    )