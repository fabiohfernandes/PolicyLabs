# PolicyLabs APSS - Service Management Scripts

This directory contains scripts for managing all PolicyLabs services during development.

## 🚀 Available Scripts

### `start-all.sh` - Start All Services
Starts all PolicyLabs services in the correct order with health checks and status reporting.

```bash
./scripts/start-all.sh
```

**Features:**
- ✅ Pre-flight checks (Docker, .env file)
- 🔄 Starts services in optimal order (infrastructure → backend → frontend)
- 🏥 Health checks for all services
- 📊 Status reporting and service URLs
- 🎨 Color-coded output for easy reading

**Services Started:**
- PostgreSQL (Database)
- Redis (Cache)
- Weaviate (Vector Database)
- FastAPI Backend
- Next.js Frontend
- Nginx (Reverse Proxy)
- pgAdmin (Database Admin)

---

### `stop-all.sh` - Stop All Services
Gracefully stops all running services with optional cleanup.

```bash
./scripts/stop-all.sh [OPTIONS]
```

**Options:**
- `--remove, -r` - Remove containers after stopping
- `--volumes, -v` - Remove volumes (⚠️ **WARNING**: Deletes all data!)
- `--help, -h` - Show help message

**Examples:**
```bash
./scripts/stop-all.sh              # Stop services only
./scripts/stop-all.sh --remove     # Stop and remove containers
./scripts/stop-all.sh --volumes    # Stop and remove everything
```

---

### `restart-all.sh` - Restart All Services
Stops and starts all services with optional rebuild capabilities.

```bash
./scripts/restart-all.sh [OPTIONS]
```

**Options:**
- `--build, -b` - Rebuild images before starting
- `--force, -f` - Force rebuild without cache
- `--quick, -q` - Quick restart (fastest, just restart containers)
- `--help, -h` - Show help message

**Examples:**
```bash
./scripts/restart-all.sh           # Normal restart
./scripts/restart-all.sh --build   # Restart with rebuild
./scripts/restart-all.sh --force   # Restart with forced rebuild
./scripts/restart-all.sh --quick   # Quick restart (fastest)
```

---

### `setup.sh` - Initial Environment Setup
Complete development environment setup (existing script).

```bash
./scripts/setup.sh
```

## 🔄 Service Update Protocol

When adding new services to `docker-compose.yml`, update the following in `start-all.sh`:

### 1. Service Configuration
```bash
declare -A SERVICES=(
    ["new-service"]="Description (Technology)"
    # ... existing services
)
```

### 2. Service URLs (if applicable)
```bash
declare -A SERVICE_URLS=(
    ["new-service"]="http://localhost:PORT"
    # ... existing URLs
)
```

### 3. Health Checks (if applicable)
```bash
declare -A HEALTH_CHECKS=(
    ["new-service"]="http://localhost:PORT/health"
    # ... existing health checks
)
```

### 4. Update Start Order (if needed)
Modify the service startup sequence in the `start_services()` function:

```bash
# Start new service in appropriate phase
docker compose up -d new-service
```

## 📋 Service Information

### Current Services & Ports

| Service | Port | Purpose | Health Check |
|---------|------|---------|--------------|
| Frontend | 3000 | Next.js Web App | http://localhost:3000 |
| Backend | 8000 | FastAPI REST API | http://localhost:8000/health |
| PostgreSQL | 5432 | Primary Database | - |
| Redis | 6379 | Cache & Sessions | - |
| Weaviate | 8080 | Vector Database | http://localhost:8080/v1/.well-known/ready |
| Nginx | 80 | Reverse Proxy | http://localhost:80 |
| pgAdmin | 5050 | DB Administration | http://localhost:5050/login |

### Default Credentials

| Service | Username | Password |
|---------|----------|----------|
| pgAdmin | admin@policylabs.ai | admin123 |
| PostgreSQL | postgres | policylabs123 |

## 🛠️ Development Workflow

### Daily Development
```bash
# Start your day
./scripts/start-all.sh

# During development (if you need fresh containers)
./scripts/restart-all.sh --quick

# End of day
./scripts/stop-all.sh
```

### After Code Changes
```bash
# Rebuild changed services
./scripts/restart-all.sh --build

# Force rebuild everything (if having issues)
./scripts/restart-all.sh --force
```

### Clean Reset
```bash
# ⚠️ WARNING: This deletes all data!
./scripts/stop-all.sh --volumes
./scripts/start-all.sh
```

## 🔍 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   ./scripts/stop-all.sh --remove
   ./scripts/start-all.sh
   ```

2. **Services not responding**
   ```bash
   ./scripts/restart-all.sh --build
   ```

3. **Database connection issues**
   ```bash
   docker compose logs postgres
   ./scripts/restart-all.sh
   ```

4. **Complete reset needed**
   ```bash
   ./scripts/stop-all.sh --volumes
   ./scripts/start-all.sh
   ```

### Useful Commands

```bash
# View logs for specific service
docker compose logs -f [service_name]

# Access service shell
docker compose exec [service_name] bash

# Database access
docker compose exec postgres psql -U postgres -d policylabs

# Check service status
docker compose ps

# View resource usage
docker stats
```

## 📦 Adding New Services

When adding a new service to the system:

1. **Add to `docker-compose.yml`**
2. **Update `start-all.sh`** (see Service Update Protocol above)
3. **Test the startup sequence**
4. **Update this documentation**
5. **Commit changes with descriptive message**

Example commit message:
```
feat(scripts): add monitoring service to start-all script

- Add Grafana service to service management
- Update health checks and URLs
- Add monitoring dashboard to README
```

---

*Last updated: September 19, 2025*
*Scripts auto-maintained for PolicyLabs APSS v2.0*