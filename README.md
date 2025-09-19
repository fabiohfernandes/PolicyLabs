# PolicyLabs APSS 🏛️

## AI Policy Simulation System - "Onde a Política Encontra a Precisão"

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue.svg)](https://www.docker.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![Python](https://img.shields.io/badge/Python-3.11+-green.svg)](https://www.python.org/)

**PolicyLabs APSS** é a plataforma de simulação de políticas públicas mais avançada do Brasil, democratizando acesso à inteligência artificial para governos de todos os portes.

---

## 🎯 **Visão Geral**

### **O Problema**

- 73% dos prefeitos brasileiros carecem de formação em administração pública
- US$ 2,8 trilhões desperdiçados globalmente em políticas ineficazes
- 45-60% taxa de falha de políticas por avaliação inadequada
- 78% dos cidadãos excluídos das decisões de política pública

### **Nossa Solução**

**"Uber da Gestão Pública"** - Projetos e políticas sob demanda em poucos cliques, baseados em sucessos comprovados, com simulação prévia de resultados e engajamento cidadão integrado.

### **Tecnologia Core**

- **PolicyDNA™**: IA proprietária com 85% de acurácia na predição de sucesso
- **Country Digital Twin**: Simulação em tempo real de municípios
- **Government Intelligence Engine**: Otimização multiobjetivo de políticas
- **Citizen Engagement Hub**: "Facebook das Necessidades" para democracia participativa

---

## 🚀 **Quick Start**

### **Pré-requisitos**

- Docker Desktop instalado
- 8GB+ RAM disponível
- OpenAI API Key (para RAG funcional)

### **Instalação em 3 comandos**

```bash
# 1. Navigate to project directory
cd PolicyLabs

# 2. Configure environment
cp .env.example .env
# Edite .env com sua OpenAI API key

# 3. Start everything
chmod +x .Scripts/*.sh
./.Scripts/start-all.sh
```

### **Acesso**

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000/docs
- **pgAdmin**: http://localhost:5050 (admin@policylabs.ai / admin123)
- **Weaviate**: http://localhost:8080

---

## 🏗️ **Arquitetura**

### **Stack Tecnológico**

```
┌─────────────────────────────────────────────┐
│              Frontend (Next.js)              │
│  React + TypeScript + Tailwind + Framer     │
├─────────────────────────────────────────────┤
│               Backend (FastAPI)              │
│     Python + SQLAlchemy + OpenAI + RAG      │
├─────────────────────────────────────────────┤
│                 Databases                   │
│  PostgreSQL + Redis + Weaviate + Vector DB  │
├─────────────────────────────────────────────┤
│              Infrastructure                 │
│       Docker + Nginx + AWS/Azure            │
└─────────────────────────────────────────────┘
```

### **Serviços Docker**

- **frontend**: Next.js application (port 3000)
- **backend**: FastAPI application (port 8000)
- **postgres**: PostgreSQL database (port 5432)
- **redis**: Redis cache (port 6379)
- **weaviate**: Vector database (port 8080)
- **nginx**: Reverse proxy (port 80)
- **pgadmin**: Database admin (port 5050)

---

## 📦 **Módulos e Packages**

### **🆓 APSS Free**

- 3 simulações/mês
- Templates básicos
- Suporte comunidade
- **Target**: Municípios <25k habitantes

### **💳 APSS Starter - R$ 20k/mês**

- 10 simulações/mês
- PolicyDNA™ básico
- Citizen engagement
- **Target**: Municípios 25k-50k habitantes

### **💼 APSS Professional - R$ 50k/mês**

- Simulações ilimitadas
- CausalAI Framework
- Digital Twin básico
- **Target**: Municípios 50k-100k habitantes

### **🏢 APSS Enterprise - R$ 150k/mês**

- Plataforma completa
- Crisis Command Center
- Custom features
- **Target**: Municípios >100k habitantes

---

## 🛠️ **Comandos Úteis**

### **Gerenciamento de Serviços**

```bash
# Iniciar todos os serviços
./.Scripts/start-all.sh

# Parar todos os serviços
./.Scripts/stop-all.sh

# Reiniciar todos os serviços
./.Scripts/restart-all.sh

# Reiniciar com rebuild
./.Scripts/restart-all.sh --build

# Setup inicial completo
./.Scripts/setup.sh
```

### **Desenvolvimento**

```bash
# Start apenas serviços essenciais
docker compose up backend postgres redis -d

# Logs em tempo real
docker compose logs -f

# Shell em container
docker compose exec backend bash
docker compose exec frontend sh

# Reset completo com dados
./.Scripts/stop-all.sh --volumes
./.Scripts/start-all.sh
```

### **Teste da API**

```bash
# Health check
curl http://localhost:8000/health

# Documentação interativa
open http://localhost:8000/docs

# Teste RAG endpoint
curl -X POST "http://localhost:8000/api/v1/rag/query" \
     -H "Content-Type: application/json" \
     -d '{"question": "Como construir uma escola?"}'
```

---

## 🎨 **Design System - Glassmorphic**

### **Glassmorphic Components**

```css
.glass-card {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}
```

### **Design Principles**

- **Ultra-simplicidade**: Para prefeitos não-técnicos
- **Mobile-first**: 70% dos usuários em mobile
- **Dual theme**: Light/Dark mode
- **Accessibility**: WCAG 2.1 compliance

---

## 📊 **Status do Projeto**

**Versão**: 1.0.0-alpha
**Status**: 🔨 Em desenvolvimento ativo
**Última atualização**: 19 de setembro de 2025

### **✅ Completado**

- [x] Ambiente Docker completo
- [x] Estrutura de folders
- [x] PostgreSQL + Redis + Weaviate
- [x] FastAPI backend base
- [x] Next.js frontend base

### **🔄 Em Andamento**

- [ ] Interface glassmorphic
- [ ] Sistema de autenticação
- [ ] RAG com OpenAI
- [ ] PolicyDNA™ básico

### **📅 Próximos**

- [ ] Project wizard
- [ ] Citizen engagement
- [ ] Demo deployment

---

## 🤝 **Contato**

### **Equipe PolicyLabs**

- **Website**: https://www.policylabs.ai
- **Email**: contato@policylabs.ai
- **LinkedIn**: /company/policylabs

### **Para Investidores**

- **Email**: investors@policylabs.ai

---

## 📄 **Licença**

MIT License - © 2025 PolicyLabs Tecnologia Ltda.

_"Transformando a gestão pública com inteligência artificial, uma cidade por vez."_
