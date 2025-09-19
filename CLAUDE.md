# Claude Development Guidelines for PolicyLabs APSS

## 🤖 AI Assistant Instructions for PolicyLabs Development

### **Primary Directive**
Always read and reference `.PolicyLabs/DEVELOPMENT.md` at the start of each development session to stay aligned with project progress and current phase requirements.

---

## 📋 **Development Process Guidelines**

### **1. Session Initialization Protocol**
```
ALWAYS START WITH:
1. Read .PolicyLabs/DEVELOPMENT.md to understand current phase and progress
2. Check current milestone targets and deadlines
3. Review last completed tasks and next priorities
4. Identify blockers or dependencies from development diary
```

### **2. Phase-Driven Development**
Follow the 5-phase roadmap structure defined in .PolicyLabs/DEVELOPMENT.md:

#### **Phase 1: Planning & Structure** ✅ COMPLETE
- All documentation and architecture decisions finalized
- No further work needed in this phase

#### **Phase 2: Environment & Infrastructure** ✅ COMPLETE
- Docker environment fully operational
- Database schema implemented
- All infrastructure components ready

#### **Phase 3: UI/UX Glassmorphic** 🔄 CURRENT FOCUS
- **Current Status**: 20% complete
- **Priority Tasks**:
  1. Glassmorphic component library
  2. Landing page for demos
  3. Dashboard municipal interface
  4. Authentication UI with NextAuth
  5. Dark/light theme system

#### **Phase 4: RAG/GPT Functional** ⏳ UPCOMING
- OpenAI integration with PolicyDNA™
- Weaviate vector database implementation
- Query interface and document processing

#### **Phase 5: Deploy & Demo** ⏳ FINAL PHASE
- Production deployment
- Demo environment setup
- Investor presentation materials

---

## 🎯 **Development Priorities Matrix**

### **Current Phase Focus Areas**:
1. **Glassmorphic Design System** - Create reusable components
2. **Landing Page** - Impressive first impression for demos
3. **Dashboard Layout** - Administrative interface
4. **Mobile Responsiveness** - 70% of users are mobile
5. **Authentication Flow** - NextAuth.js implementation

### **Quality Standards**:
- **Ultra-simplicidade**: Interfaces for non-technical mayors
- **Mobile-first**: Responsive design mandatory
- **Accessibility**: WCAG 2.1 compliance
- **Performance**: Fast loading for government networks
- **Security**: Government-grade security practices

---

## 📊 **Progress Tracking Requirements**

### **Update .PolicyLabs/DEVELOPMENT.md After Each Session**:
- Mark completed tasks with ✅
- Update progress percentages
- Add new discovered requirements
- Document technical decisions
- Note any blockers or challenges

### **Development Standards**:
```
# File naming conventions
feat(phase-3): implement glassmorphic button component library
fix(ui): resolve mobile responsiveness issues in dashboard
docs: update development diary with Phase 3 progress

# Code organization
- Use descriptive file and folder names
- Maintain consistent coding standards
- Document all architectural decisions
```

---

## 🏛️ **PolicyLabs-Specific Context**

### **Business Model Understanding**:
- **Target**: Brazilian municipal governments
- **Problem**: 73% of mayors lack public administration training
- **Solution**: "Uber da Gestão Pública" - on-demand policy projects
- **Monetization**: 6-tier pricing (Free → R$ 2M/mês Federal)

### **Technical Architecture Principles**:
- **Microservices**: Each pricing tier can be independently scaled
- **Docker-first**: Containerized for easy deployment
- **AI-powered**: PolicyDNA™ algorithm for 85% prediction accuracy
- **Vector Search**: Weaviate for policy similarity and recommendations

### **Key Differentiators**:
- **Glassmorphic UI**: Windows Aero aesthetic for visual distinction
- **PolicyDNA™**: Proprietary AI algorithm
- **Country Digital Twin**: Real-time municipal simulation
- **Citizen Engagement**: "Facebook das Necessidades"

---

## 🚀 **Development Commands & Scripts**

### **Quick Start Development**:
```bash
# Start all services (recommended)
./.Scripts/start-all.sh

# Stop all services
./.Scripts/stop-all.sh

# Restart all services
./.Scripts/restart-all.sh

# Initial setup (first time only)
./.Scripts/setup.sh

# Frontend development only
cd frontend && npm run dev

# Backend development only
docker compose up backend postgres redis -d

# Full stack manual
docker compose up -d
```

### **Testing & Quality**:
```bash
# Frontend tests
cd frontend && npm test

# Backend tests
docker compose exec backend pytest

# Type checking
cd frontend && npm run type-check

# Linting
cd frontend && npm run lint
```

---

## 📝 **Decision Documentation**

### **Always Document**:
- Component design decisions
- API endpoint specifications
- Database schema changes
- UI/UX pattern choices
- Performance optimization decisions

### **Update Locations**:
- `.PolicyLabs/DEVELOPMENT.md` - Progress and milestones
- `README.md` - Setup and usage instructions
- Code comments - Technical implementation details
- Change logs - Document specific changes and reasoning

---

## 🎯 **Success Metrics for Each Phase**

### **Phase 3 Success Criteria**:
- [ ] Complete glassmorphic component library
- [ ] Responsive landing page with demo booking
- [ ] Municipal dashboard with key metrics
- [ ] Working authentication flow
- [ ] Dark/light theme implementation
- [ ] Mobile-optimized interface (>90% mobile score)

### **Quality Gates**:
- All components documented in Storybook
- Mobile responsiveness tested on 3+ devices
- Accessibility audit passed
- Performance: <3s load time on 3G
- Security: No vulnerabilities in dependencies

---

## 💡 **Innovation Focus Areas**

### **PolicyDNA™ Algorithm Development**:
- Machine learning model for policy success prediction
- Training data from Brazilian municipal successes
- Integration with Weaviate vector similarity

### **Glassmorphic Design Innovation**:
- Unique visual identity in government software
- Professional yet approachable aesthetic
- Accessibility without compromising visual appeal

### **Citizen Engagement Platform**:
- "Facebook das Necessidades" concept
- Democratic participation tools
- Real-time feedback mechanisms

---

## 📁 **Project Structure**

### **Key Directories**:
```
PolicyLabs/
├── .PolicyLabs/          # Project documentation and planning
│   ├── DEVELOPMENT.md    # Main development diary (READ FIRST)
│   ├── PRD-PolicyLabs-APSS.md
│   ├── Roadmap-Completo-PolicyLabs.md
│   └── Pitch-Investidores.md
├── .Scripts/             # Service management scripts
│   ├── start-all.sh      # Start all services
│   ├── stop-all.sh       # Stop all services
│   ├── restart-all.sh    # Restart all services
│   └── setup.sh          # Initial environment setup
├── frontend/             # Next.js frontend application
│   ├── src/components/   # React components
│   ├── src/pages/        # Next.js pages
│   └── package.json      # Frontend dependencies
├── backend/              # FastAPI backend application
├── database/             # Database schemas and migrations
├── docs/                 # Technical documentation
└── docker-compose.yml    # Docker services configuration
```

### **Configuration Files**:
- `.env` - Environment variables (copy from .env.example)
- `docker-compose.yml` - All service definitions
- `CLAUDE.md` - This file (development guidelines)

---

## 🔗 **Essential Resources**

### **Documentation**:
- `.PolicyLabs/DEVELOPMENT.md` - **READ FIRST ALWAYS**
- `.PolicyLabs/PRD-PolicyLabs-APSS.md` - Product requirements
- `.PolicyLabs/Roadmap-Completo-PolicyLabs.md` - Complete roadmap
- `.PolicyLabs/Pitch-Investidores.md` - Technical specifications

### **Development URLs**:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000/docs
- Database Admin: http://localhost:5050
- Vector DB: http://localhost:8080

### **Deployment**:
- Local Development: Docker Compose
- Production: TBD (AWS/Azure)
- Environment: Containerized microservices

---

## ⚠️ **Critical Reminders**

1. **ALWAYS** read .PolicyLabs/DEVELOPMENT.md first
2. **NEVER** skip mobile responsiveness testing
3. **ALWAYS** consider accessibility in UI decisions
4. **DOCUMENT** all architectural decisions
5. **UPDATE** progress in .PolicyLabs/DEVELOPMENT.md after each session
6. **FOCUS** on current phase priorities
7. **THINK** about scalability for government usage

---

*Last Updated: 19 September 2025*
*Next Review: Weekly with development phase progress*