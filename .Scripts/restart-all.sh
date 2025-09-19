#!/bin/bash

# PolicyLabs APSS - Restart All Services Script
# Stops and starts all services with optional rebuild

set -e

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo -e "${BLUE}🔄 PolicyLabs APSS - Restarting All Services${NC}"
echo -e "${BLUE}===========================================${NC}"
echo ""

# Change to project root directory
cd "$(dirname "$0")/.."

# Function to show help
show_help() {
    echo -e "${BLUE}Usage: $0 [OPTIONS]${NC}"
    echo ""
    echo -e "${BLUE}Options:${NC}"
    echo -e "  ${GREEN}--build, -b${NC}      Rebuild images before starting"
    echo -e "  ${GREEN}--force, -f${NC}      Force rebuild without cache"
    echo -e "  ${GREEN}--quick, -q${NC}      Quick restart (just restart containers)"
    echo -e "  ${GREEN}--help, -h${NC}       Show this help message"
    echo ""
    echo -e "${BLUE}Examples:${NC}"
    echo -e "  $0              Normal restart (stop + start)"
    echo -e "  $0 --build      Restart with image rebuild"
    echo -e "  $0 --force      Restart with forced rebuild (no cache)"
    echo -e "  $0 --quick      Quick restart (fastest)"
    echo ""
}

# Function to quick restart
quick_restart() {
    echo -e "${CYAN}⚡ Quick restart - restarting containers...${NC}"
    docker compose restart
    echo -e "${GREEN}✅ Quick restart completed${NC}"
}

# Function to normal restart
normal_restart() {
    echo -e "${YELLOW}🛑 Stopping all services...${NC}"
    docker compose down --remove-orphans

    echo -e "${CYAN}🎬 Starting all services...${NC}"
    ./scripts/start-all.sh
}

# Function to restart with rebuild
restart_with_build() {
    local build_args=""
    if [ "$1" = "--force" ] || [ "$1" = "-f" ]; then
        build_args="--no-cache"
        echo -e "${YELLOW}🔨 Force rebuilding images (no cache)...${NC}"
    else
        echo -e "${YELLOW}🔨 Rebuilding images...${NC}"
    fi

    echo -e "${YELLOW}🛑 Stopping all services...${NC}"
    docker compose down --remove-orphans

    echo -e "${CYAN}🏗️  Building images...${NC}"
    docker compose build $build_args

    echo -e "${CYAN}🎬 Starting all services...${NC}"
    ./scripts/start-all.sh
}

# Function to check if start-all script exists
check_start_script() {
    if [ ! -f "./scripts/start-all.sh" ]; then
        echo -e "${RED}❌ start-all.sh script not found${NC}"
        echo -e "${YELLOW}   Using docker compose up -d instead...${NC}"
        docker compose up -d
        return 1
    fi
    return 0
}

# Main execution based on arguments
case "$1" in
    --help|-h)
        show_help
        exit 0
        ;;
    --quick|-q)
        echo -e "${CYAN}⚡ Performing quick restart...${NC}"
        quick_restart
        ;;
    --force|-f)
        echo -e "${CYAN}🔄 Performing restart with forced rebuild...${NC}"
        restart_with_build "$1"
        ;;
    --build|-b)
        echo -e "${CYAN}🔄 Performing restart with rebuild...${NC}"
        restart_with_build
        ;;
    "")
        echo -e "${CYAN}🔄 Performing normal restart...${NC}"
        if check_start_script; then
            normal_restart
        fi
        ;;
    *)
        echo -e "${RED}❌ Unknown option: $1${NC}"
        show_help
        exit 1
        ;;
esac

echo ""
echo -e "${GREEN}🎉 Restart operation completed!${NC}"
echo ""
echo -e "${BLUE}📱 Application URLs:${NC}"
echo -e "   ${CYAN}Frontend:${NC}     http://localhost:3000"
echo -e "   ${CYAN}Backend API:${NC}  http://localhost:8000"
echo -e "   ${CYAN}Backend Docs:${NC} http://localhost:8000/docs"
echo -e "   ${CYAN}pgAdmin:${NC}      http://localhost:5050"
echo -e "   ${CYAN}Weaviate:${NC}     http://localhost:8080"
echo ""
echo -e "${BLUE}💡 Useful commands:${NC}"
echo -e "   ${GREEN}docker compose logs -f${NC}     - View real-time logs"
echo -e "   ${GREEN}scripts/stop-all.sh${NC}        - Stop all services"
echo ""