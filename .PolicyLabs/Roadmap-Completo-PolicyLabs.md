# Roadmap Completo PolicyLabs APSS

## Desenvolvimento Modular para Captação e Demo

### Versão: 1.0 | Data: 19 de setembro de 2025

---

## 🎯 **VISÃO GERAL DO ROADMAP**

### **Objetivo Principal**

Criar um sistema modular e escalável que permita demonstrações funcionais para captação de investimento, com backend RAG operacional e frontend glassmorphic de alta qualidade.

### **Cronograma Macro**

- **Fase 1**: Planejamento e Estrutura (Semana 1-2)
- **Fase 2**: Ambiente e Infraestrutura (Semana 3)
- **Fase 3**: UI/UX Mockup Glassmorphic (Semana 4-6)
- **Fase 4**: RAG/GPT Funcional (Semana 7-8)
- **Fase 5**: Deploy e Demo (Semana 9-10)

---

## 📦 **MÓDULOS E PACOTES DE CONTRATAÇÃO**

### **Estrutura Modular APSS**

#### **🆓 APSS Free (Freemium)**

```yaml
target_audience: Municípios <25k habitantes
price: Gratuito
limitations:
  - 3 simulações/mês
  - Templates básicos (10)
  - Suporte comunidade
  - Dados limitados
modules:
  - core_auth: Autenticação básica
  - basic_templates: 10 templates pré-definidos
  - simple_simulation: Simulação básica
  - community_support: Fórum de usuários
features:
  - Login/Registro
  - Dashboard básico
  - Simulação simples
  - 3 projetos/mês
value_proposition: 'Teste grátis para pequenos municípios'
```

#### **💳 APSS Starter - R$ 20k/mês**

```yaml
target_audience: Municípios 25k-50k habitantes
price: R$ 20.000/mês (US$ 30k/ano)
sweet_spot: Dispensa de licitação
modules:
  - core_platform: Plataforma completa
  - policy_dna_basic: PolicyDNA™ básico
  - project_wizard: 'Uber da Gestão'
  - citizen_engagement: Engajamento básico
  - document_generator: Geração automática
  - basic_analytics: Dashboard municipal
features:
  - 10 simulações/mês
  - 50 templates validados
  - PolicyDNA™ recommendations
  - Citizen voting básico
  - Documentos automáticos
  - Suporte email
  - Dashboard analytics
  - Mobile app acesso
value_proposition: 'Transforme sua gestão em administração eficaz'
```

#### **💼 APSS Professional - R$ 50k/mês**

```yaml
target_audience: Municípios 50k-100k habitantes
price: R$ 50.000/mês (US$ 75k/ano)
modules:
  - advanced_simulation: Simulação avançada
  - causal_ai: Framework CausalAI
  - digital_twin_basic: Gêmeo digital básico
  - advanced_engagement: Engajamento avançado
  - intermunicipal_collab: Colaboração intermunicipal
  - advanced_analytics: Analytics avançado
  - integration_apis: APIs de integração
features:
  - Simulações ilimitadas
  - 200+ templates
  - CausalAI Framework
  - Digital Twin 3D básico
  - Deliberation rooms
  - Benchmarking intermunicipal
  - Integrações sistemas municipais
  - Suporte telefônico
  - Training mensal
value_proposition: 'Decisões baseadas em inteligência artificial'
```

#### **🏢 APSS Enterprise - R$ 150k/mês**

```yaml
target_audience: Municípios >100k habitantes
price: R$ 150.000/mês (US$ 200k/ano)
modules:
  - full_digital_twin: Gêmeo digital completo
  - government_intelligence: Government Intelligence Engine
  - crisis_management: Crisis Command Center
  - advanced_predictions: Predictive analytics
  - custom_development: Desenvolvimento customizado
  - white_label: White label options
  - enterprise_support: Suporte dedicado
features:
  - Plataforma completa
  - Digital Twin realtime
  - IoT integration
  - Crisis management
  - Predictive alerts
  - Custom features
  - Dedicated success manager
  - SLA premium 99.9%
  - On-site training
  - White label option
value_proposition: 'Cidade inteligente completa com IA'
```

#### **🏛️ APSS State - R$ 300k/mês**

```yaml
target_audience: Governos estaduais
price: R$ 300.000/mês (US$ 3M/ano)
modules:
  - state_coordination: Coordenação estadual
  - multi_city_analytics: Analytics multi-cidades
  - regional_planning: Planejamento regional
  - state_policies: Políticas estaduais
  - resource_optimization: Otimização recursos
features:
  - Coordenação 100+ municípios
  - Analytics consolidado
  - Planejamento regional
  - Resource sharing
  - Policy cascading
value_proposition: 'Coordenação inteligente de políticas estaduais'
```

#### **🌍 APSS Federal - R$ 1.5M/mês**

```yaml
target_audience: Governo federal
price: R$ 1.500.000/mês (US$ 15M/ano)
modules:
  - national_simulation: Simulação nacional
  - dual_ai_engine: IA Dupla completa
  - policy_laboratory: Laboratório de políticas
  - national_analytics: Analytics nacional
features:
  - Country Digital Twin
  - Government Intelligence Engine
  - National policy simulation
  - PDCA methodology
  - All features included
value_proposition: 'Sistema operacional para gestão federal'
```

---

## 🐳 **CONFIGURAÇÃO AMBIENTE DOCKER**

### **Docker Compose Architecture**

#### **docker-compose.yml**

```yaml
version: '3.8'

services:
  # Frontend - React/Next.js
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    ports:
      - '3000:3000'
    environment:
      - NODE_ENV=development
      - NEXT_PUBLIC_API_URL=http://localhost:8000
    volumes:
      - ./frontend:/app
      - /app/node_modules
    depends_on:
      - backend

  # Backend - FastAPI
  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    ports:
      - '8000:8000'
    environment:
      - DATABASE_URL=postgresql://postgres:password@postgres:5432/policylabs
      - REDIS_URL=redis://redis:6379
      - OPENAI_API_KEY=${OPENAI_API_KEY}
    volumes:
      - ./backend:/app
    depends_on:
      - postgres
      - redis

  # Database - PostgreSQL
  postgres:
    image: postgres:15
    environment:
      - POSTGRES_DB=policylabs
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=password
    ports:
      - '5432:5432'
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./database/init.sql:/docker-entrypoint-initdb.d/init.sql

  # Cache - Redis
  redis:
    image: redis:7-alpine
    ports:
      - '6379:6379'
    volumes:
      - redis_data:/data

  # Vector Database - Weaviate
  weaviate:
    image: semitechnologies/weaviate:latest
    ports:
      - '8080:8080'
    environment:
      - QUERY_DEFAULTS_LIMIT=25
      - AUTHENTICATION_ANONYMOUS_ACCESS_ENABLED=true
      - PERSISTENCE_DATA_PATH=/var/lib/weaviate
    volumes:
      - weaviate_data:/var/lib/weaviate

  # Nginx - Reverse Proxy
  nginx:
    image: nginx:alpine
    ports:
      - '80:80'
      - '443:443'
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf
      - ./nginx/ssl:/etc/nginx/ssl
    depends_on:
      - frontend
      - backend

volumes:
  postgres_data:
  redis_data:
  weaviate_data:
```

### **Ferramentas e Serviços Required**

#### **Development Tools**

```bash
# Essential containers
- PostgreSQL 15 (Database)
- Redis 7 (Cache/Session)
- Weaviate (Vector Database)
- Nginx (Reverse Proxy)

# Development
- Node.js 18+ (Frontend)
- Python 3.11+ (Backend)
- Docker Desktop
- Git
```

#### **Backend Requirements (requirements.txt)**

```txt
fastapi==0.104.1
uvicorn==0.24.0
sqlalchemy==2.0.23
alembic==1.12.1
psycopg2-binary==2.9.9
redis==5.0.1
pydantic==2.5.0
openai==1.3.0
langchain==0.1.0
weaviate-client==3.25.3
python-multipart==0.0.6
python-jose[cryptography]==3.3.0
passlib[bcrypt]==1.7.4
pandas==2.1.3
numpy==1.25.2
scikit-learn==1.3.2
```

#### **Frontend Requirements (package.json)**

```json
{
  "dependencies": {
    "next": "14.0.0",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "typescript": "5.2.2",
    "tailwindcss": "3.3.5",
    "framer-motion": "10.16.5",
    "lucide-react": "0.292.0",
    "@tanstack/react-query": "5.8.4",
    "axios": "1.6.0",
    "zustand": "4.4.6",
    "react-hook-form": "7.47.0",
    "zod": "3.22.4",
    "recharts": "2.8.0",
    "three": "0.158.0",
    "@react-three/fiber": "8.15.12"
  }
}
```

---

## 📁 **ESTRUTURA DE FOLDERS**

### **Project Structure**

```
PolicyLabs_V2/
├── 📁 frontend/                  # React/Next.js Application
│   ├── 📁 public/
│   │   ├── icons/
│   │   ├── images/
│   │   └── favicon.ico
│   ├── 📁 src/
│   │   ├── 📁 components/        # Reusable components
│   │   │   ├── ui/              # Base UI components
│   │   │   ├── layout/          # Layout components
│   │   │   ├── forms/           # Form components
│   │   │   └── charts/          # Chart components
│   │   ├── 📁 pages/            # Next.js pages
│   │   │   ├── auth/            # Authentication pages
│   │   │   ├── dashboard/       # Dashboard pages
│   │   │   ├── modules/         # Module-specific pages
│   │   │   └── api/             # API routes
│   │   ├── 📁 hooks/            # Custom React hooks
│   │   ├── 📁 store/            # Zustand store
│   │   ├── 📁 styles/           # CSS/Tailwind styles
│   │   ├── 📁 types/            # TypeScript types
│   │   └── 📁 utils/            # Utility functions
│   ├── 📄 Dockerfile
│   ├── 📄 package.json
│   └── 📄 next.config.js
│
├── 📁 backend/                   # FastAPI Backend
│   ├── 📁 app/
│   │   ├── 📁 api/              # API routes
│   │   │   ├── v1/              # API version 1
│   │   │   │   ├── auth.py      # Authentication
│   │   │   │   ├── users.py     # User management
│   │   │   │   ├── municipalities.py
│   │   │   │   ├── policies.py  # Policy management
│   │   │   │   ├── simulations.py
│   │   │   │   └── rag.py       # RAG endpoints
│   │   ├── 📁 core/             # Core functionality
│   │   │   ├── config.py        # Configuration
│   │   │   ├── security.py      # Security utils
│   │   │   └── database.py      # Database connection
│   │   ├── 📁 models/           # SQLAlchemy models
│   │   │   ├── user.py
│   │   │   ├── municipality.py
│   │   │   └── policy.py
│   │   ├── 📁 services/         # Business logic
│   │   │   ├── policy_dna.py    # PolicyDNA™ service
│   │   │   ├── rag_service.py   # RAG implementation
│   │   │   ├── simulation.py    # Simulation engine
│   │   │   └── openai_service.py
│   │   ├── 📁 schemas/          # Pydantic schemas
│   │   └── 📁 utils/            # Utility functions
│   ├── 📁 migrations/           # Alembic migrations
│   ├── 📄 Dockerfile
│   ├── 📄 requirements.txt
│   └── 📄 main.py
│
├── 📁 database/                  # Database files
│   ├── 📄 init.sql             # Initial database setup
│   ├── 📁 seeds/               # Seed data
│   │   ├── municipalities.sql
│   │   ├── policies.sql
│   │   └── templates.sql
│   └── 📁 backups/             # Database backups
│
├── 📁 nginx/                    # Nginx configuration
│   ├── 📄 nginx.conf
│   └── 📁 ssl/                 # SSL certificates
│
├── 📁 docs/                     # Documentation
│   ├── 📄 README.md
│   ├── 📄 API.md
│   ├── 📄 DEPLOYMENT.md
│   └── 📁 architecture/        # Architecture docs
│
├── 📁 scripts/                  # Utility scripts
│   ├── 📄 setup.sh             # Environment setup
│   ├── 📄 deploy.sh            # Deployment script
│   └── 📄 seed_data.py         # Data seeding
│
├── 📁 tests/                    # Test files
│   ├── 📁 frontend/
│   └── 📁 backend/
│
├── 📄 docker-compose.yml       # Docker orchestration
├── 📄 docker-compose.prod.yml  # Production config
├── 📄 .env.example             # Environment variables
├── 📄 .gitignore
└── 📄 README.md
```

---

## 🎨 **UI/UX GLASSMORPHIC DESIGN**

### **Design System Specification**

#### **Color Palette**

```css
/* Light Theme */
:root {
  --glass-bg-light: rgba(255, 255, 255, 0.25);
  --glass-border-light: rgba(255, 255, 255, 0.18);
  --glass-shadow-light: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  --primary-light: #667eea;
  --secondary-light: #764ba2;
  --accent-light: #f093fb;
  --text-primary-light: #2d3748;
  --text-secondary-light: #4a5568;
}

/* Dark Theme */
[data-theme='dark'] {
  --glass-bg-dark: rgba(15, 15, 15, 0.25);
  --glass-border-dark: rgba(255, 255, 255, 0.1);
  --glass-shadow-dark: 0 8px 32px 0 rgba(0, 0, 0, 0.5);
  --primary-dark: #4299e1;
  --secondary-dark: #805ad5;
  --accent-dark: #ed64a6;
  --text-primary-dark: #f7fafc;
  --text-secondary-dark: #e2e8f0;
}
```

#### **Glassmorphic Components**

```css
.glass-card {
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
  transition: all 0.3s ease;
}

.glass-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 40px 0 rgba(31, 38, 135, 0.4);
}

.glass-button {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  backdrop-filter: blur(10px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  font-weight: 600;
  padding: 12px 24px;
  transition: all 0.3s ease;
}

.glass-input {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 12px 16px;
  color: var(--text-primary);
}
```

### **Page Structure & Components**

#### **Landing Page**

```tsx
// components/landing/LandingPage.tsx
export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-pink-900">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
};

// Hero Section with Glassmorphic Cards
const HeroSection = () => (
  <section className="relative py-20">
    <div className="glass-card max-w-6xl mx-auto p-12 text-center">
      <h1 className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        PolicyLabs APSS
      </h1>
      <p className="text-2xl text-gray-600 dark:text-gray-300 mt-6">
        Onde a Política Encontra a Precisão
      </p>
      <div className="flex gap-6 justify-center mt-12">
        <GlassButton variant="primary">Começar Gratuitamente</GlassButton>
        <GlassButton variant="secondary">Agendar Demo</GlassButton>
      </div>
    </div>
  </section>
);
```

#### **Authentication Pages**

```tsx
// components/auth/LoginPage.tsx
export const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-purple-900">
      <div className="glass-card p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <img src="/logo.svg" alt="PolicyLabs" className="mx-auto h-12 mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Acesse sua conta</h2>
        </div>

        <form className="space-y-6">
          <GlassInput type="email" placeholder="E-mail" icon={<Mail />} />
          <GlassInput type="password" placeholder="Senha" icon={<Lock />} />

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="glass-checkbox" />
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">Lembrar de mim</span>
            </label>
            <a href="#" className="text-sm text-primary hover:underline">
              Esqueceu a senha?
            </a>
          </div>

          <GlassButton type="submit" className="w-full">
            Entrar
          </GlassButton>

          <div className="text-center">
            <button className="glass-button-outline w-full">
              <GoogleIcon className="mr-2" />
              Entrar com Google
            </button>
          </div>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Não tem conta?{' '}
            <a href="/register" className="text-primary hover:underline">
              Cadastre-se gratuitamente
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
```

#### **Dashboard Principal**

```tsx
// components/dashboard/MainDashboard.tsx
export const MainDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-pink-900">
      <Sidebar />
      <Header />

      <main className="ml-64 pt-16 p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* KPIs Cards */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <KPICard
                title="Políticas Ativas"
                value="23"
                change="+12%"
                icon={<FileText />}
                color="blue"
              />
              <KPICard
                title="Cidadãos Engajados"
                value="1,247"
                change="+34%"
                icon={<Users />}
                color="green"
              />
              <KPICard
                title="Taxa de Sucesso"
                value="87%"
                change="+5%"
                icon={<Target />}
                color="purple"
              />
              <KPICard
                title="Economia Gerada"
                value="R$ 2.3M"
                change="+28%"
                icon={<DollarSign />}
                color="orange"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <GlassCard title="Projetos Recentes">
              <ProjectsList />
            </GlassCard>
          </div>

          <div className="lg:col-span-1">
            <GlassCard title="PolicyDNA™ Recomendações">
              <RecommendationsList />
            </GlassCard>
          </div>
        </div>

        {/* Chat RAG */}
        <div className="fixed bottom-6 right-6">
          <ChatRAGButton />
        </div>
      </main>
    </div>
  );
};
```

#### **Chat RAG Interface**

```tsx
// components/rag/ChatRAG.tsx
export const ChatRAG = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="glass-button-round h-16 w-16 flex items-center justify-center"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="glass-card w-full max-w-2xl h-96 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/20">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <Brain size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    PolicyLabs Assistant
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Powered by PolicyDNA™</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-lg">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message, idx) => (
                <ChatMessage key={idx} message={message} />
              ))}
            </div>

            {/* Input */}
            <div className="p-6 border-t border-white/20">
              <div className="flex space-x-4">
                <GlassInput
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Pergunte sobre políticas públicas..."
                  className="flex-1"
                />
                <GlassButton onClick={handleSend}>
                  <Send size={20} />
                </GlassButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
```

---

## 🧠 **IMPLEMENTAÇÃO RAG COM OPENAI**

### **RAG Service Architecture**

#### **Backend RAG Implementation**

```python
# backend/app/services/rag_service.py
from typing import List, Dict, Any
import openai
from weaviate import Client
from app.core.config import settings

class RAGService:
    def __init__(self):
        self.openai_client = openai.OpenAI(api_key=settings.OPENAI_API_KEY)
        self.weaviate_client = Client("http://weaviate:8080")

    async def query(self, question: str, municipality_id: str) -> Dict[str, Any]:
        """
        Process RAG query with context retrieval and OpenAI completion
        """
        try:
            # 1. Retrieve relevant context from vector database
            context = await self._retrieve_context(question, municipality_id)

            # 2. Build prompt with context
            prompt = self._build_prompt(question, context)

            # 3. Get completion from OpenAI
            response = await self._get_completion(prompt)

            # 4. Extract sources and format response
            formatted_response = self._format_response(response, context)

            return {
                "answer": formatted_response["answer"],
                "sources": formatted_response["sources"],
                "confidence": formatted_response["confidence"],
                "municipality_context": municipality_id
            }

        except Exception as e:
            return {"error": str(e)}

    async def _retrieve_context(self, question: str, municipality_id: str) -> List[Dict]:
        """
        Retrieve relevant documents from Weaviate
        """
        # Convert question to vector
        embedding = await self._get_embedding(question)

        # Search similar documents
        result = (
            self.weaviate_client.query
            .get("PolicyDocument", ["content", "title", "municipality", "category", "success_rate"])
            .with_near_vector({"vector": embedding})
            .with_where({
                "operator": "Or",
                "operands": [
                    {"path": ["municipality"], "operator": "Equal", "valueString": municipality_id},
                    {"path": ["municipality"], "operator": "Equal", "valueString": "general"}
                ]
            })
            .with_limit(5)
            .do()
        )

        return result["data"]["Get"]["PolicyDocument"]

    async def _get_embedding(self, text: str) -> List[float]:
        """
        Get text embedding from OpenAI
        """
        response = await self.openai_client.embeddings.create(
            model="text-embedding-ada-002",
            input=text
        )
        return response.data[0].embedding

    def _build_prompt(self, question: str, context: List[Dict]) -> str:
        """
        Build context-aware prompt for OpenAI
        """
        context_text = "\n\n".join([
            f"Documento: {doc['title']}\n"
            f"Município: {doc['municipality']}\n"
            f"Categoria: {doc['category']}\n"
            f"Taxa de Sucesso: {doc['success_rate']}%\n"
            f"Conteúdo: {doc['content']}"
            for doc in context
        ])

        prompt = f"""
Você é o PolicyLabs Assistant, um especialista em políticas públicas brasileiras.

CONTEXTO RELEVANTE:
{context_text}

PERGUNTA DO USUÁRIO: {question}

INSTRUÇÕES:
1. Responda baseado APENAS no contexto fornecido
2. Se não houver informação suficiente, diga claramente
3. Cite exemplos específicos dos documentos quando relevante
4. Mantenha tom profissional mas acessível
5. Priorize informações com maior taxa de sucesso

RESPOSTA:
"""
        return prompt

    async def _get_completion(self, prompt: str) -> str:
        """
        Get completion from OpenAI GPT-4
        """
        response = await self.openai_client.chat.completions.create(
            model="gpt-4-turbo-preview",
            messages=[
                {"role": "system", "content": "Você é um especialista em políticas públicas."},
                {"role": "user", "content": prompt}
            ],
            max_tokens=1000,
            temperature=0.7
        )

        return response.choices[0].message.content

    def _format_response(self, response: str, context: List[Dict]) -> Dict[str, Any]:
        """
        Format response with sources and confidence
        """
        sources = [
            {
                "title": doc["title"],
                "municipality": doc["municipality"],
                "category": doc["category"],
                "success_rate": doc["success_rate"]
            }
            for doc in context
        ]

        # Simple confidence based on context relevance
        confidence = min(len(context) * 0.2, 1.0)

        return {
            "answer": response,
            "sources": sources,
            "confidence": confidence
        }

# API endpoint
@app.post("/api/v1/rag/query")
async def rag_query(
    request: RAGQueryRequest,
    current_user: User = Depends(get_current_user)
):
    rag_service = RAGService()

    result = await rag_service.query(
        question=request.question,
        municipality_id=current_user.municipality_id
    )

    return result
```

#### **Frontend RAG Integration**

```tsx
// hooks/useRAG.ts
export const useRAG = () => {
  const [isLoading, setIsLoading] = useState(false);

  const query = async (question: string) => {
    setIsLoading(true);
    try {
      const response = await api.post('/api/v1/rag/query', {
        question,
      });
      return response.data;
    } catch (error) {
      console.error('RAG query error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { query, isLoading };
};

// components/rag/ChatMessage.tsx
export const ChatMessage = ({ message }: { message: Message }) => {
  if (message.type === 'user') {
    return (
      <div className="flex justify-end">
        <div className="glass-card max-w-xs lg:max-w-md px-4 py-2">
          <p className="text-gray-900 dark:text-white">{message.content}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start">
      <div className="glass-card max-w-xs lg:max-w-md px-4 py-2">
        <p className="text-gray-900 dark:text-white mb-2">{message.content}</p>

        {message.sources && message.sources.length > 0 && (
          <div className="mt-3 pt-3 border-t border-white/20">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Fontes consultadas:</p>
            {message.sources.map((source, idx) => (
              <div key={idx} className="text-xs text-gray-600 dark:text-gray-300 mb-1">
                • {source.title} ({source.municipality}) - {source.success_rate}% sucesso
              </div>
            ))}
          </div>
        )}

        {message.confidence && (
          <div className="mt-2 flex items-center">
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Confiança: {Math.round(message.confidence * 100)}%
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
```

---

## 🚀 **DEPLOYMENT & DEMO SETUP**

### **Production Docker Compose**

```yaml
# docker-compose.prod.yml
version: '3.8'

services:
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile.prod
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_API_URL=https://api.policylabs.ai
    restart: unless-stopped

  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile.prod
    environment:
      - DATABASE_URL=${DATABASE_URL}
      - REDIS_URL=${REDIS_URL}
      - OPENAI_API_KEY=${OPENAI_API_KEY}
    restart: unless-stopped

  postgres:
    image: postgres:15
    environment:
      - POSTGRES_DB=${POSTGRES_DB}
      - POSTGRES_USER=${POSTGRES_USER}
      - POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
    volumes:
      - postgres_data:/var/lib/postgresql/data
    restart: unless-stopped

  nginx:
    build: ./nginx
    ports:
      - '80:80'
      - '443:443'
    volumes:
      - ./nginx/ssl:/etc/nginx/ssl
    restart: unless-stopped
    depends_on:
      - frontend
      - backend
```

### **Deployment Scripts**

```bash
#!/bin/bash
# scripts/deploy.sh

echo "🚀 Deploying PolicyLabs Demo..."

# Build and deploy
docker-compose -f docker-compose.prod.yml build
docker-compose -f docker-compose.prod.yml up -d

# Wait for services
echo "⏳ Waiting for services to start..."
sleep 30

# Run migrations
docker-compose exec backend alembic upgrade head

# Seed demo data
docker-compose exec backend python scripts/seed_demo_data.py

# Setup SSL
echo "🔒 Setting up SSL..."
docker-compose exec nginx certbot --nginx -d demo.policylabs.ai

echo "✅ Deployment complete!"
echo "🌐 Demo available at: https://demo.policylabs.ai"
```

### **Demo Data Seeding**

```python
# scripts/seed_demo_data.py
import asyncio
from app.core.database import get_db
from app.models import Municipality, Policy, User

async def seed_demo_data():
    db = next(get_db())

    # Create demo municipality
    joinville = Municipality(
        name="Joinville",
        state="Santa Catarina",
        population=597658,
        budget=4500000000,  # R$ 4.5B
        mayor_name="Adriano Silva",
        coordinates={"lat": -26.3044, "lng": -48.8487}
    )
    db.add(joinville)

    # Create demo policies
    policies = [
        Policy(
            title="Escola Sustentável Bairro Norte",
            category="education",
            description="Construção de escola com energia solar e captação de água",
            municipality_id=joinville.id,
            budget=2300000,
            students_served=340,
            success_rate=87,
            roi_5_years=3.4,
            status="simulation"
        ),
        Policy(
            title="Ciclovia Integrada Centro-Bairros",
            category="transport",
            description="Rede de ciclovias conectando centro aos bairros residenciais",
            municipality_id=joinville.id,
            budget=1800000,
            beneficiaries=15000,
            success_rate=92,
            roi_5_years=2.8,
            status="approved"
        )
    ]

    for policy in policies:
        db.add(policy)

    # Create demo users
    demo_user = User(
        email="prefeito@joinville.sc.gov.br",
        full_name="Adriano Silva",
        role="mayor",
        municipality_id=joinville.id,
        is_active=True
    )
    db.add(demo_user)

    db.commit()
    print("✅ Demo data seeded successfully!")

if __name__ == "__main__":
    asyncio.run(seed_demo_data())
```

---

## 📅 **CRONOGRAMA DETALHADO**

### **Semana 1-2: Planejamento e Setup**

- [x] Definir módulos e packages
- [ ] Configurar ambiente Docker
- [ ] Estruturar folders do projeto
- [ ] Setup PostgreSQL e Weaviate
- [ ] Configurar CI/CD básico

### **Semana 3: Backend Foundation**

- [ ] FastAPI setup completo
- [ ] Modelos SQLAlchemy
- [ ] Sistema de autenticação
- [ ] APIs básicas (CRUD)
- [ ] RAG service skeleton

### **Semana 4-5: Frontend Glassmorphic**

- [ ] Next.js setup com Tailwind
- [ ] Design system glassmorphic
- [ ] Componentes base (cards, buttons, inputs)
- [ ] Layout principal e sidebar
- [ ] Páginas de autenticação

### **Semana 6: Dashboard e Módulos**

- [ ] Dashboard principal
- [ ] KPI cards e gráficos
- [ ] Navegação entre módulos
- [ ] Formulários de projetos
- [ ] Interface RAG/Chat

### **Semana 7-8: RAG Funcional**

- [ ] Integração OpenAI
- [ ] Vector database setup
- [ ] Seed policies database
- [ ] RAG query implementation
- [ ] Chat interface funcional

### **Semana 9: Testing e Polish**

- [ ] Testes end-to-end
- [ ] Responsividade mobile
- [ ] Performance optimization
- [ ] Acessibilidade
- [ ] Bug fixes

### **Semana 10: Deploy e Demo**

- [ ] Setup servidor demo
- [ ] SSL e domínio
- [ ] Monitoring setup
- [ ] Demo data final
- [ ] Documentação completa

---

## 🎯 **PRÓXIMOS PASSOS IMEDIATOS**

### **Fase 1: Setup Ambiente (Esta Semana)**

1. **Configurar Docker Environment**
   - Instalar Docker Desktop no Windows
   - Configurar WSL2 se necessário
   - Testar docker-compose básico

2. **Estruturar Projeto**
   - Criar estrutura de folders
   - Setup inicial Next.js e FastAPI
   - Configurar Git e .gitignore

3. **Database Setup**
   - PostgreSQL container
   - Configurar Weaviate
   - Setup inicial de migrações

### **Fase 2: Frontend Mockup (Próximas 2 Semanas)**

1. **Design System**
   - Implementar glassmorphic components
   - Setup Tailwind com custom theme
   - Criar componentes base

2. **Key Pages**
   - Landing page elegante
   - Login/Register com 2FA
   - Dashboard principal
   - Interface RAG/Chat

### **Fase 3: RAG Implementation (Semana 7-8)**

1. **Backend RAG**
   - OpenAI integration
   - Vector search implementation
   - Policy database seeding

2. **Frontend Integration**
   - Chat interface
   - Real-time responses
   - Source citations

### **Meta Final: Demo Funcional**

- URL: demo.policylabs.ai
- Login funcional
- Chat RAG operacional
- Interface polished para investidores
- Mobile responsive

Está pronto para começarmos com o setup do ambiente Docker?
