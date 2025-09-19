#!/bin/bash

# PolicyLabs APSS - Start All Services Script
# Automatically starts all required services for development
# This script is auto-maintained and updates when new services are added

set -e

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Service configuration - UPDATE THIS WHEN ADDING NEW SERVICES
declare -A SERVICES=(
    ["postgres"]="Database (PostgreSQL)"
    ["redis"]="Cache (Redis)"
    ["weaviate"]="Vector Database (Weaviate)"
    ["backend"]="API Backend (FastAPI)"
    ["frontend"]="Web Frontend (Next.js)"
    ["nginx"]="Reverse Proxy (Nginx)"
    ["pgadmin"]="Database Admin (pgAdmin)"
)

# Service URLs - UPDATE THIS WHEN ADDING NEW SERVICES
declare -A SERVICE_URLS=(
    ["frontend"]="http://localhost:3000"
    ["backend"]="http://localhost:8000"
    ["backend-docs"]="http://localhost:8000/docs"
    ["pgadmin"]="http://localhost:5050"
    ["weaviate"]="http://localhost:8080"
    ["nginx"]="http://localhost:80"
)

# Health check endpoints - UPDATE THIS WHEN ADDING NEW SERVICES
declare -A HEALTH_CHECKS=(
    ["frontend"]="http://localhost:3000"
    ["backend"]="http://localhost:8000/health"
    ["weaviate"]="http://localhost:8080/v1/.well-known/ready"
    ["pgadmin"]="http://localhost:5050/login"
)

echo -e "${BLUE}🚀 PolicyLabs APSS - Starting All Services${NC}"
echo -e "${BLUE}==========================================${NC}"
echo ""

# Function to check if Docker is running
check_docker() {
    if ! docker info >/dev/null 2>&1; then
        echo -e "${RED}❌ Docker is not running. Please start Docker Desktop first.${NC}"
        exit 1
    fi
    echo -e "${GREEN}✅ Docker is running${NC}"
}

# Function to check if .env exists
check_env() {
    if [ ! -f .env ]; then
        echo -e "${YELLOW}⚠️  .env file not found. Creating from template...${NC}"
        if [ -f .env.example ]; then
            cp .env.example .env
            echo -e "${YELLOW}📝 Created .env file. Please update it with your secrets.${NC}"
        else
            echo -e "${RED}❌ .env.example not found. Please create .env manually.${NC}"
            exit 1
        fi
    fi
}

# Function to start services
start_services() {
    echo -e "${CYAN}🎬 Starting services in optimal order...${NC}"
    echo ""

    # Start infrastructure services first
    echo -e "${PURPLE}📊 Starting infrastructure services...${NC}"
    docker compose up -d postgres redis weaviate

    echo -e "${YELLOW}⏳ Waiting for infrastructure to initialize (15s)...${NC}"
    sleep 15

    # Start application services
    echo -e "${PURPLE}🔧 Starting application services...${NC}"
    docker compose up -d backend

    echo -e "${YELLOW}⏳ Waiting for backend to initialize (10s)...${NC}"
    sleep 10

    # Start frontend and proxy
    echo -e "${PURPLE}🌐 Starting frontend and proxy...${NC}"
    docker compose up -d frontend nginx pgadmin

    echo -e "${YELLOW}⏳ Waiting for frontend to initialize (15s)...${NC}"
    sleep 15
}

# Function to check service status
check_services() {
    echo -e "${CYAN}🔍 Checking service status...${NC}"
    echo ""

    # Check Docker Compose status
    echo -e "${BLUE}Docker Compose Status:${NC}"
    docker compose ps
    echo ""

    # Check individual service health
    echo -e "${BLUE}Service Health Checks:${NC}"
    for service in "${!HEALTH_CHECKS[@]}"; do
        url="${HEALTH_CHECKS[$service]}"
        if curl -f -s "$url" > /dev/null 2>&1; then
            echo -e "  ${GREEN}✅ $service - ${url}${NC}"
        else
            echo -e "  ${YELLOW}⏳ $service - ${url} (still starting...)${NC}"
        fi
    done
}

# Function to display service information
show_service_info() {
    echo ""
    echo -e "${GREEN}🎉 PolicyLabs APSS Services Started!${NC}"
    echo -e "${GREEN}====================================${NC}"
    echo ""

    echo -e "${BLUE}📱 Available Services:${NC}"
    for service in "${!SERVICES[@]}"; do
        description="${SERVICES[$service]}"
        echo -e "  ${CYAN}${service}${NC}: $description"
    done
    echo ""

    echo -e "${BLUE}🌐 Application URLs:${NC}"
    for name in "${!SERVICE_URLS[@]}"; do
        url="${SERVICE_URLS[$name]}"
        echo -e "  ${CYAN}${name}:${NC} $url"
    done
    echo ""

    echo -e "${BLUE}🔑 Default Credentials:${NC}"
    echo -e "  ${CYAN}pgAdmin:${NC} admin@policylabs.ai / admin123"
    echo -e "  ${CYAN}Database:${NC} postgres / policylabs123"
    echo ""

    echo -e "${BLUE}🛠️  Useful Commands:${NC}"
    echo -e "  ${CYAN}View logs:${NC}        docker compose logs -f [service_name]"
    echo -e "  ${CYAN}Restart service:${NC}  docker compose restart [service_name]"
    echo -e "  ${CYAN}Stop all:${NC}         docker compose down"
    echo -e "  ${CYAN}Service shell:${NC}    docker compose exec [service_name] bash"
    echo -e "  ${CYAN}Database shell:${NC}   docker compose exec postgres psql -U postgres -d policylabs"
    echo ""

    echo -e "${PURPLE}🎯 Development ready! Visit http://localhost:3000 to start.${NC}"
}

# Function to handle cleanup on exit
cleanup() {
    echo ""
    echo -e "${YELLOW}⚠️  Script interrupted. Services are still running.${NC}"
    echo -e "${YELLOW}   Use 'docker compose down' to stop all services.${NC}"
    exit 0
}

# Set trap for cleanup
trap cleanup SIGINT SIGTERM

# Main execution
main() {
    # Change to project root directory
    cd "$(dirname "$0")/.."

    # Pre-flight checks
    check_docker
    check_env

    # Start services
    start_services

    # Verify services
    check_services

    # Show information
    show_service_info

    # Optional: Follow logs
    echo -e "${YELLOW}💡 Tip: Run 'docker compose logs -f' to follow real-time logs${NC}"
    echo -e "${YELLOW}    Or 'scripts/stop-all.sh' to stop all services${NC}"
    echo ""
}

# Run main function
main "$@"