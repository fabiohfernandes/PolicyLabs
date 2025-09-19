#!/bin/bash

# PolicyLabs APSS - Stop All Services Script
# Gracefully stops all running services

set -e

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🛑 PolicyLabs APSS - Stopping All Services${NC}"
echo -e "${BLUE}==========================================${NC}"
echo ""

# Change to project root directory
cd "$(dirname "$0")/.."

# Function to stop services gracefully
stop_services() {
    echo -e "${YELLOW}🔄 Stopping services gracefully...${NC}"

    # Stop in reverse order (frontend first, infrastructure last)
    echo -e "${YELLOW}   Stopping frontend services...${NC}"
    docker compose stop frontend nginx pgadmin

    echo -e "${YELLOW}   Stopping backend services...${NC}"
    docker compose stop backend

    echo -e "${YELLOW}   Stopping infrastructure services...${NC}"
    docker compose stop postgres redis weaviate

    echo -e "${GREEN}✅ All services stopped${NC}"
}

# Function to remove containers (optional)
remove_containers() {
    if [ "$1" = "--remove" ] || [ "$1" = "-r" ]; then
        echo -e "${YELLOW}🗑️  Removing stopped containers...${NC}"
        docker compose down --remove-orphans
        echo -e "${GREEN}✅ Containers removed${NC}"
    fi
}

# Function to remove volumes (optional)
remove_volumes() {
    if [ "$1" = "--volumes" ] || [ "$1" = "-v" ]; then
        echo -e "${RED}⚠️  WARNING: This will delete all data!${NC}"
        read -p "Are you sure you want to remove all volumes? (y/N): " -n 1 -r
        echo ""
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            echo -e "${YELLOW}🗑️  Removing volumes and data...${NC}"
            docker compose down -v --remove-orphans
            echo -e "${GREEN}✅ Volumes removed${NC}"
        else
            echo -e "${GREEN}✅ Volumes preserved${NC}"
        fi
    fi
}

# Function to show help
show_help() {
    echo -e "${BLUE}Usage: $0 [OPTIONS]${NC}"
    echo ""
    echo -e "${BLUE}Options:${NC}"
    echo -e "  ${GREEN}--remove, -r${NC}    Remove containers after stopping"
    echo -e "  ${GREEN}--volumes, -v${NC}   Remove volumes (WARNING: deletes all data)"
    echo -e "  ${GREEN}--help, -h${NC}      Show this help message"
    echo ""
    echo -e "${BLUE}Examples:${NC}"
    echo -e "  $0                Stop services only"
    echo -e "  $0 --remove       Stop and remove containers"
    echo -e "  $0 --volumes      Stop and remove everything (including data)"
    echo ""
}

# Parse command line arguments
case "$1" in
    --help|-h)
        show_help
        exit 0
        ;;
    --volumes|-v)
        stop_services
        remove_volumes "$1"
        ;;
    --remove|-r)
        stop_services
        remove_containers "$1"
        ;;
    "")
        stop_services
        ;;
    *)
        echo -e "${RED}❌ Unknown option: $1${NC}"
        show_help
        exit 1
        ;;
esac

echo ""
echo -e "${GREEN}🎉 Stop operation completed!${NC}"
echo ""
echo -e "${BLUE}💡 To start services again:${NC}"
echo -e "   ${GREEN}scripts/start-all.sh${NC}     - Start all services"
echo -e "   ${GREEN}docker compose up -d${NC}     - Quick start"
echo ""