# PolicyLabs APSS Frontend

## 🏛️ AI Policy Simulation System - Frontend Application

**"Onde a Política Encontra a Precisão"**

A glassmorphic frontend interface for the PolicyLabs AI Policy Simulation System, designed specifically for Brazilian municipal governments with ultra-simplicidade principles.

## 🎯 Overview

This Next.js 14 application provides a government-grade interface for:
- **Municipal Dashboard**: Real-time KPIs and project management
- **PolicyDNA™ Integration**: AI-powered policy recommendations
- **Citizen Engagement**: Democratic participation platform
- **Project Wizard**: "Uber da Gestão Pública" simplified project creation

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm 8+
- Docker and Docker Compose (for full stack)
- Git

### Installation

1. **Clone and navigate:**
   ```bash
   git clone https://github.com/fabiohfernandes/PolicyLabs
   cd PolicyLabs/frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Setup environment:**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

   Access at: http://localhost:3000

### Full Stack Setup

For complete integration with backend services:

```bash
# From project root
docker-compose up -d
```

This starts:
- Frontend (Next.js): http://localhost:3000
- Backend (FastAPI): http://localhost:8000
- Database (PostgreSQL): localhost:5432
- Vector DB (Weaviate): http://localhost:8080
- Admin (pgAdmin): http://localhost:5050

## 🏗️ Architecture

### Tech Stack

```
Frontend:     Next.js 14 + TypeScript + Tailwind CSS + Framer Motion
State:        Zustand + React Query (TanStack)
Auth:         NextAuth.js (Government-grade security)
UI:           Custom Glassmorphic Component Library
Testing:      Jest + Testing Library
Deployment:   Docker + Nginx
```

### Key Features

#### 🎨 **Glassmorphic Design System**
- Windows Aero-inspired aesthetic
- Dark/light theme with system preference
- Mobile-first responsive design
- WCAG 2.1 AA accessibility compliance

#### 🔒 **Government-Grade Security**
- Multi-factor authentication (MFA)
- Role-based access control (RBAC)
- Session management with audit logging
- LGPD compliance and data protection

#### 📱 **Ultra-Simplicidade UX**
- Maximum 5 clicks for core actions
- Designed for non-technical mayors
- Voice-over and screen reader support
- High contrast mode compatibility

#### 🤖 **AI Integration**
- PolicyDNA™ real-time recommendations
- Simulation result visualization
- Citizen sentiment analysis
- Performance prediction dashboards

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Core design system components
│   ├── forms/          # Form components and validation
│   ├── layouts/        # Page layouts and navigation
│   └── charts/         # Data visualization components
├── pages/              # Next.js pages and API routes
│   ├── api/           # API endpoints and authentication
│   ├── auth/          # Authentication pages
│   ├── dashboard/     # Municipal dashboard pages
│   └── modules/       # Feature-specific pages
├── hooks/              # Custom React hooks
├── store/              # Global state management
├── types/              # TypeScript type definitions
├── utils/              # Utility functions and helpers
└── styles/             # Global styles and themes
```

## 🧪 Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run type-check   # TypeScript type checking
npm run format       # Format code with Prettier

# Testing
npm test             # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Generate coverage report

# Docker
docker-compose up    # Start full stack
docker-compose down  # Stop all services
```

### Component Development

Create new components following the established patterns:

```typescript
// Example: src/components/ui/NewComponent.tsx
import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const componentVariants = cva(
  'base-classes',
  {
    variants: {
      variant: {
        default: 'default-styles',
        primary: 'primary-styles',
      },
      size: {
        sm: 'small-styles',
        default: 'default-size',
        lg: 'large-styles',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ComponentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof componentVariants> {
  // Component-specific props
}

const Component = forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        className={cn(componentVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Component.displayName = 'Component';

export { Component, componentVariants };
```

## 🎨 Design System

### Glassmorphic Components

Our design system emphasizes:
- **Transparency**: Glass-like surfaces with backdrop blur
- **Depth**: Subtle shadows and layering
- **Motion**: Smooth animations and interactions
- **Accessibility**: High contrast and screen reader support

### Color Palette

```css
/* Primary - Government Blue */
primary: #0ea5e9 (blue-500)

/* Secondary - Neutral Grays */
secondary: #64748b (slate-500)

/* Accent - Government Purple */
accent: #e060ff (fuchsia-400)

/* Status Colors */
success: #22c55e (green-500)
warning: #f59e0b (amber-500)
error: #ef4444 (red-500)
```

### Typography

- **Display**: Cal Sans (headings and brand)
- **Body**: Inter (content and UI)
- **Monospace**: Fira Code (code and data)

### Responsive Breakpoints

```css
xs: 475px    /* Mobile landscape */
sm: 640px    /* Tablet portrait */
md: 768px    /* Tablet landscape */
lg: 1024px   /* Desktop */
xl: 1280px   /* Large desktop */
2xl: 1536px  /* Extra large desktop */
```

## 🔐 Security

### Authentication Flow

1. **Login**: Email + password + optional MFA
2. **Session**: JWT with 8-hour expiration
3. **Refresh**: Automatic token refresh
4. **Logout**: Secure session cleanup

### Security Headers

```nginx
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Content-Security-Policy: default-src 'self'
```

### Data Protection

- All forms validated client and server-side
- Sensitive data encrypted at rest
- HTTPS enforced in production
- LGPD compliance built-in

## 📱 Mobile Optimization

### Performance Targets

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3s

### Mobile Features

- Touch-friendly 44px minimum tap targets
- Swipe gestures for navigation
- Offline mode for basic functionality
- Progressive Web App (PWA) capabilities

## ♿ Accessibility

### WCAG 2.1 AA Compliance

- **Color Contrast**: 4.5:1 minimum ratio
- **Keyboard Navigation**: Full tab order support
- **Screen Readers**: ARIA labels and descriptions
- **Focus Management**: Visible focus indicators
- **Text Scaling**: Up to 200% without horizontal scroll

### Testing Tools

```bash
# Accessibility testing
npm run a11y           # Axe accessibility tests
npm run lighthouse     # Lighthouse audit
npm run contrast       # Color contrast validation
```

## 🚀 Deployment

### Production Build

```bash
# Build optimized production bundle
npm run build

# Start production server
npm run start
```

### Docker Deployment

```dockerfile
# Multi-stage build for optimized image
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Environment Variables

Required production environment variables:

```bash
NODE_ENV=production
NEXTAUTH_URL=https://your-domain.com
NEXTAUTH_SECRET=your-production-secret
NEXT_PUBLIC_API_URL=https://api.your-domain.com
DATABASE_URL=postgresql://user:pass@host:5432/db
```

## 📊 Monitoring

### Performance Metrics

- **Core Web Vitals**: Real User Monitoring (RUM)
- **Error Tracking**: Sentry integration
- **Analytics**: Custom events and user journeys
- **Uptime**: Health check endpoints

### Quality Gates

Before deployment, ensure:
- [ ] Test coverage > 80%
- [ ] No TypeScript errors
- [ ] Lighthouse score > 90
- [ ] Accessibility audit passes
- [ ] Security scan clean

## 🤝 Contributing

### Development Workflow

1. **Branch**: Create feature branch from `main`
2. **Develop**: Follow coding standards and test
3. **Test**: Run full test suite and quality checks
4. **Review**: Submit PR with comprehensive description
5. **Deploy**: Merge after approval and CI passes

### Code Standards

- **TypeScript**: Strict mode enabled
- **ESLint**: Airbnb config with accessibility rules
- **Prettier**: Consistent code formatting
- **Husky**: Pre-commit hooks for quality

### Commit Convention

```bash
feat: add PolicyDNA recommendation component
fix: resolve mobile navigation accessibility issue
docs: update deployment guide with Docker instructions
test: add integration tests for authentication flow
```

## 📚 Resources

### Documentation

- [Next.js 14 Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [NextAuth.js](https://next-auth.js.org/)

### Government Standards

- [Brazilian Digital Government](https://www.gov.br/governodigital/)
- [LGPD Compliance Guide](https://www.gov.br/cidadania/pt-br/acesso-a-informacao/lgpd)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## 📄 License

© 2025 PolicyLabs Tecnologia Ltda. All rights reserved.

## 🆘 Support

- **Technical Issues**: [GitHub Issues](https://github.com/fabiohfernandes/PolicyLabs/issues)
- **Security Concerns**: security@policylabs.ai
- **General Support**: support@policylabs.ai

---

**Built with ❤️ for Brazilian Municipal Governments**

*Transformando prefeitos em gestores de excelência através da IA*