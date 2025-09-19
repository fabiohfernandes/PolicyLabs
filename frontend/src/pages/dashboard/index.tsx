import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChartBarIcon,
  PlusIcon,
  UserGroupIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  BellIcon,
  CogIcon,
} from '@heroicons/react/24/outline';
import { Button, Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import { cn } from '@/utils/cn';

// Mock data for demonstration
const municipalData = {
  municipality: 'Joinville',
  state: 'SC',
  population: 597658,
  budget: 4500000,
  satisfaction: 72,
  projects: {
    active: 8,
    completed: 34,
    pending: 5,
  },
  citizens: {
    registered: 12347,
    active: 4523,
    engagement: 23,
  },
};

const recentProjects = [
  {
    id: 1,
    name: 'Nova Escola Primária - Bairro Norte',
    status: 'in_progress',
    progress: 67,
    budget: 2300000,
    timeline: '8 meses',
    citizens_support: 89,
    last_update: '2 dias atrás',
  },
  {
    id: 2,
    name: 'Posto de Saúde Bairro Sul',
    status: 'planning',
    progress: 23,
    budget: 1800000,
    timeline: '6 meses',
    citizens_support: 94,
    last_update: '1 semana atrás',
  },
  {
    id: 3,
    name: 'Praça Central Revitalizada',
    status: 'completed',
    progress: 100,
    budget: 850000,
    timeline: 'Concluído',
    citizens_support: 76,
    last_update: '1 mês atrás',
  },
];

const policyRecommendations = [
  {
    id: 1,
    title: 'Programa Médico da Família',
    compatibility: 87,
    success_probability: 78,
    similar_cases: 12,
    impact: 'Redução de 25% na mortalidade infantil',
    estimated_cost: 450000,
  },
  {
    id: 2,
    title: 'Creche Municipal Noturna',
    compatibility: 92,
    success_probability: 85,
    similar_cases: 8,
    impact: 'Aumento de 40% na participação feminina no mercado',
    estimated_cost: 680000,
  },
  {
    id: 3,
    title: 'Ciclovia Integrada',
    compatibility: 74,
    success_probability: 69,
    similar_cases: 15,
    impact: 'Redução de 15% no trânsito urbano',
    estimated_cost: 1200000,
  },
];

const notifications = [
  {
    id: 1,
    type: 'info',
    title: 'Nova votação cidadã disponível',
    message: 'Projeto "Nova Escola Primária" aberto para comentários',
    time: '30 min atrás',
  },
  {
    id: 2,
    type: 'warning',
    title: 'Orçamento próximo do limite',
    message: 'Projeto "Posto de Saúde" consumiu 78% do orçamento',
    time: '2 horas atrás',
  },
  {
    id: 3,
    type: 'success',
    title: 'Meta de satisfação atingida',
    message: 'Satisfação cidadã chegou a 72% este mês',
    time: '1 dia atrás',
  },
];

function StatusBadge({ status }: { status: string }) {
  const statusConfig = {
    in_progress: {
      label: 'Em Andamento',
      className: 'bg-primary-100 text-primary-700 dark:bg-primary-900/20 dark:text-primary-300',
    },
    planning: {
      label: 'Planejamento',
      className: 'bg-warning-100 text-warning-700 dark:bg-warning-900/20 dark:text-warning-300',
    },
    completed: {
      label: 'Concluído',
      className: 'bg-success-100 text-success-700 dark:bg-success-900/20 dark:text-success-300',
    },
    pending: {
      label: 'Pendente',
      className: 'bg-secondary-100 text-secondary-700 dark:bg-secondary-800 dark:text-secondary-300',
    },
  };

  const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;

  return (
    <span className={cn('px-2 py-1 rounded-full text-xs font-medium', config.className)}>
      {config.label}
    </span>
  );
}

function ProgressBar({ progress, className }: { progress: number; className?: string }) {
  return (
    <div className={cn('w-full bg-secondary-200 dark:bg-secondary-700 rounded-full h-2', className)}>
      <div
        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-500"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default function Dashboard() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-secondary-950 dark:via-secondary-900 dark:to-secondary-950">
      {/* Navigation Header */}
      <nav className="nav-glass dark:nav-glass-dark">
        <div className="container-glass py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PL</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gradient">PolicyLabs APSS</h1>
                <p className="text-xs text-secondary-600 dark:text-secondary-400">
                  {municipalData.municipality} - {municipalData.state}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="glass" size="icon" className="relative">
                <BellIcon className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-error-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-bold">3</span>
                </span>
              </Button>
              <Button variant="glass" size="icon">
                <CogIcon className="h-5 w-5" />
              </Button>
              <div className="w-8 h-8 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">PF</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="container-glass py-8">
        {/* Welcome Section */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-secondary-900 dark:text-secondary-100 mb-2">
            Bom dia, Prefeito Carlos! 👋
          </h2>
          <p className="text-secondary-600 dark:text-secondary-400">
            Aqui está um resumo das atividades do seu município hoje
          </p>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card variant="primary" className="text-center">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-2">
                <UserGroupIcon className="h-8 w-8 text-primary-600" />
              </div>
              <div className="text-2xl font-bold text-primary-700 dark:text-primary-300">
                {municipalData.population.toLocaleString()}
              </div>
              <div className="text-sm text-primary-600 dark:text-primary-400">População</div>
            </CardContent>
          </Card>

          <Card variant="success" className="text-center">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-2">
                <ChartBarIcon className="h-8 w-8 text-success-600" />
              </div>
              <div className="text-2xl font-bold text-success-700 dark:text-success-300">
                {municipalData.satisfaction}%
              </div>
              <div className="text-sm text-success-600 dark:text-success-400">Satisfação Cidadã</div>
            </CardContent>
          </Card>

          <Card variant="warning" className="text-center">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-2">
                <ClockIcon className="h-8 w-8 text-warning-600" />
              </div>
              <div className="text-2xl font-bold text-warning-700 dark:text-warning-300">
                {municipalData.projects.active}
              </div>
              <div className="text-sm text-warning-600 dark:text-warning-400">Projetos Ativos</div>
            </CardContent>
          </Card>

          <Card variant="default" className="text-center">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-2">
                <CheckCircleIcon className="h-8 w-8 text-accent-600" />
              </div>
              <div className="text-2xl font-bold text-accent-700 dark:text-accent-300">
                R$ {(municipalData.budget / 1000000).toFixed(1)}M
              </div>
              <div className="text-sm text-accent-600 dark:text-accent-400">Orçamento Disponível</div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Ações Rápidas
                  <Button size="sm" leftIcon={<PlusIcon className="h-4 w-4" />}>
                    Novo Projeto
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="glass-primary" className="h-16 flex-col">
                    <span className="font-medium">Criar Projeto</span>
                    <span className="text-xs opacity-75">Uber da Gestão Pública</span>
                  </Button>
                  <Button variant="glass" className="h-16 flex-col">
                    <span className="font-medium">Simulação IA</span>
                    <span className="text-xs opacity-75">PolicyDNA™</span>
                  </Button>
                  <Button variant="glass" className="h-16 flex-col">
                    <span className="font-medium">Engajar Cidadãos</span>
                    <span className="text-xs opacity-75">Abrir Votação</span>
                  </Button>
                  <Button variant="glass" className="h-16 flex-col">
                    <span className="font-medium">Relatórios</span>
                    <span className="text-xs opacity-75">Analytics</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Projects */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Projetos Recentes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentProjects.map((project) => (
                    <motion.div
                      key={project.id}
                      className="card-glass p-4 cursor-pointer hover:shadow-glass-lg transition-all"
                      onClick={() => setSelectedProject(project.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h4 className="font-medium text-secondary-900 dark:text-secondary-100 mb-1">
                            {project.name}
                          </h4>
                          <div className="flex items-center space-x-3 text-sm text-secondary-600 dark:text-secondary-400">
                            <StatusBadge status={project.status} />
                            <span>R$ {(project.budget / 1000000).toFixed(1)}M</span>
                            <span>{project.timeline}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-secondary-900 dark:text-secondary-100">
                            {project.progress}%
                          </div>
                          <div className="text-xs text-secondary-500">
                            {project.citizens_support}% apoio
                          </div>
                        </div>
                      </div>
                      <ProgressBar progress={project.progress} />
                      <div className="mt-2 text-xs text-secondary-500">
                        Última atualização: {project.last_update}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* PolicyDNA Recommendations */}
            <Card variant="primary">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>🧬</span>
                  <span>Recomendações PolicyDNA™</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {policyRecommendations.map((recommendation) => (
                    <div key={recommendation.id} className="glass-strong p-4 rounded-xl">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-secondary-900 dark:text-secondary-100">
                          {recommendation.title}
                        </h4>
                        <div className="text-right">
                          <div className="text-sm font-bold text-primary-600 dark:text-primary-400">
                            {recommendation.compatibility}% match
                          </div>
                          <div className="text-xs text-secondary-500">
                            {recommendation.similar_cases} casos similares
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-secondary-600 dark:text-secondary-400 mb-3">
                        {recommendation.impact}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm">
                          <span className="text-secondary-500">Custo estimado: </span>
                          <span className="font-medium">
                            R$ {(recommendation.estimated_cost / 1000).toFixed(0)}k
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="text-xs text-success-600 dark:text-success-400">
                            {recommendation.success_probability}% sucesso
                          </div>
                          <Button size="sm" variant="glass">
                            Ver Detalhes
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Notifications */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BellIcon className="h-5 w-5" />
                  <span>Notificações</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="flex items-start space-x-3">
                      <div className={cn(
                        'w-2 h-2 rounded-full mt-2 flex-shrink-0',
                        notification.type === 'info' && 'bg-primary-500',
                        notification.type === 'warning' && 'bg-warning-500',
                        notification.type === 'success' && 'bg-success-500'
                      )} />
                      <div className="flex-1 min-w-0">
                        <h5 className="text-sm font-medium text-secondary-900 dark:text-secondary-100">
                          {notification.title}
                        </h5>
                        <p className="text-xs text-secondary-600 dark:text-secondary-400 mt-1">
                          {notification.message}
                        </p>
                        <p className="text-xs text-secondary-500 mt-1">
                          {notification.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Citizen Engagement */}
            <Card variant="success">
              <CardHeader>
                <CardTitle>Engajamento Cidadão</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-success-700 dark:text-success-300">
                    {municipalData.citizens.engagement}%
                  </div>
                  <div className="text-sm text-success-600 dark:text-success-400">
                    Taxa de participação
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Cidadãos registrados</span>
                    <span className="font-medium">{municipalData.citizens.registered.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Ativos este mês</span>
                    <span className="font-medium">{municipalData.citizens.active.toLocaleString()}</span>
                  </div>
                </div>

                <Button variant="glass" fullWidth size="sm">
                  Ver Feedback Cidadão
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card variant="outline">
              <CardHeader>
                <CardTitle>Resumo Executivo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span>Projetos completados</span>
                  <span className="font-medium text-success-600">{municipalData.projects.completed}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>Em andamento</span>
                  <span className="font-medium text-primary-600">{municipalData.projects.active}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>Aguardando aprovação</span>
                  <span className="font-medium text-warning-600">{municipalData.projects.pending}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}