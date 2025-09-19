#!/bin/bash

# PolicyLabs Setup Script
# This script sets up the complete development environment

set -e

echo "🚀 PolicyLabs Development Environment Setup"
echo "==========================================="

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker Desktop first."
    echo "Download from: https://www.docker.com/products/docker-desktop"
    exit 1
fi

# Check if Docker Compose is available
if ! docker compose version &> /dev/null; then
    echo "❌ Docker Compose is not available. Please update Docker Desktop."
    exit 1
fi

echo "✅ Docker is installed and running"

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "📝 Creating .env file from template..."
    cp .env.example .env
    echo "⚠️  Please update .env file with your OpenAI API key and other secrets"
fi

# Stop any existing containers
echo "🛑 Stopping existing containers..."
docker compose down --remove-orphans

# Remove existing volumes (optional - uncomment if you want fresh data)
# echo "🗑️  Removing existing volumes..."
# docker compose down -v

# Build images
echo "🔨 Building Docker images..."
docker compose build --no-cache

# Start services
echo "🎬 Starting services..."
docker compose up -d

# Wait for PostgreSQL to be ready
echo "⏳ Waiting for PostgreSQL to be ready..."
sleep 30

# Check if all services are running
echo "🔍 Checking service status..."
docker compose ps

# Show logs
echo "📋 Service logs (last 20 lines):"
docker compose logs --tail=20

echo ""
echo "🎉 Setup Complete!"
echo "=================="
echo ""
echo "📱 Application URLs:"
echo "   Frontend:     http://localhost:3000"
echo "   Backend API:  http://localhost:8000"
echo "   Backend Docs: http://localhost:8000/docs"
echo "   pgAdmin:      http://localhost:5050"
echo "   Redis:        localhost:6379"
echo "   PostgreSQL:   localhost:5432"
echo "   Weaviate:     http://localhost:8080"
echo ""
echo "🔑 Default Credentials:"
echo "   pgAdmin: admin@policylabs.ai / admin123"
echo "   Database: postgres / policylabs123"
echo ""
echo "📝 Next Steps:"
echo "   1. Update .env file with your OpenAI API key"
echo "   2. Visit http://localhost:3000 to see the frontend"
echo "   3. Visit http://localhost:8000/docs to see the API documentation"
echo "   4. Run 'docker compose logs -f' to see real-time logs"
echo ""
echo "🛠️  Useful Commands:"
echo "   Stop:     docker compose down"
echo "   Restart:  docker compose restart"
echo "   Logs:     docker compose logs -f [service_name]"
echo "   Shell:    docker compose exec [service_name] bash"
echo ""

# Check if all services are healthy
sleep 10
if curl -f http://localhost:3000 > /dev/null 2>&1; then
    echo "✅ Frontend is responding"
else
    echo "⚠️  Frontend is not responding yet (may still be starting)"
fi

if curl -f http://localhost:8000/health > /dev/null 2>&1; then
    echo "✅ Backend is responding"
else
    echo "⚠️  Backend is not responding yet (may still be starting)"
fi

echo ""
echo "🎯 Happy coding! The PolicyLabs development environment is ready."