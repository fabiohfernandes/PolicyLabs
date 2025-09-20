import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  ScaleIcon,
  DocumentCheckIcon,
  ExclamationTriangleIcon,
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  BellAlertIcon,
  FolderOpenIcon,
  MagnifyingGlassIcon,
  CalendarIcon,
  UserGroupIcon,
  ClipboardDocumentListIcon
} from '@heroicons/react/24/outline';

interface User {
  id: string;
  email: string;
  full_name: string;
  role: string;
  is_verified: boolean;
  two_factor_enabled: boolean;
  created_at: string;
}

const LegalComplianceDashboard = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCompliance, setSelectedCompliance] = useState('all');

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
    } else {
      router.push('/login');
      return;
    }
    setIsLoading(false);
  }, [router]);

  const complianceItems = [
    {
      id: 1,
      title: 'Lei de Responsabilidade Fiscal (LRF)',
      category: 'Federal',
      status: 'compliant',
      lastCheck: '2024-09-20',
      nextReview: '2024-10-20',
      riskLevel: 'low',
      description: 'Controle de gastos públicos e transparência fiscal',
      requirements: ['Relatório Resumido da Execução Orçamentária', 'Relatório de Gestão Fiscal'],
      priority: 'Alta'
    },
    {
      id: 2,
      title: 'Lei de Acesso à Informação (LAI)',
      category: 'Federal',
      status: 'attention',
      lastCheck: '2024-09-18',
      nextReview: '2024-09-25',
      riskLevel: 'medium',
      description: 'Transparência e acesso às informações públicas',
      requirements: ['Portal da Transparência', 'Sistema de Pedidos de Informação'],
      priority: 'Alta'
    },
    {
      id: 3,
      title: 'Lei Geral de Proteção de Dados (LGPD)',
      category: 'Federal',
      status: 'non_compliant',
      lastCheck: '2024-09-19',
      nextReview: '2024-09-22',
      riskLevel: 'high',
      description: 'Proteção de dados pessoais dos cidadãos',
      requirements: ['Encarregado de Dados', 'Relatório de Impacto', 'Políticas de Privacidade'],
      priority: 'Crítica'
    },
    {
      id: 4,
      title: 'Estatuto da Cidade',
      category: 'Federal',
      status: 'compliant',
      lastCheck: '2024-09-17',
      nextReview: '2024-12-17',
      riskLevel: 'low',
      description: 'Política urbana e ordenamento territorial',
      requirements: ['Plano Diretor', 'IPTU Progressivo', 'Estudo de Impacto de Vizinhança'],
      priority: 'Média'
    },
    {
      id: 5,
      title: 'Lei de Licitações e Contratos (Lei 14.133/21)',
      category: 'Federal',
      status: 'attention',
      lastCheck: '2024-09-16',
      nextReview: '2024-09-30',
      riskLevel: 'medium',
      description: 'Normas para licitações e contratos administrativos',
      requirements: ['Portal Nacional de Contratações Públicas', 'Estudos Técnicos Preliminares'],
      priority: 'Alta'
    }
  ];

  const auditTrail = [
    {
      id: 1,
      action: 'Revisão de Compliance LGPD',
      user: 'Ana Silva - Assessoria Jurídica',
      timestamp: '2024-09-20 14:30',
      type: 'review',
      result: 'Identificadas 3 não conformidades'
    },
    {
      id: 2,
      action: 'Atualização LAI - Portal Transparência',
      user: 'Carlos Santos - TI',
      timestamp: '2024-09-20 11:15',
      type: 'update',
      result: 'Portal atualizado com novas funcionalidades'
    },
    {
      id: 3,
      action: 'Relatório LRF - Q3 2024',
      user: 'Maria Oliveira - Controladoria',
      timestamp: '2024-09-19 16:45',
      type: 'report',
      result: 'Relatório aprovado - Dentro dos limites'
    }
  ];

  const upcomingDeadlines = [
    {
      title: 'Relatório Quadrimestral LAI',
      date: '2024-09-30',
      daysLeft: 10,
      priority: 'Alta',
      responsible: 'Assessoria de Comunicação'
    },
    {
      title: 'Avaliação Anual LGPD',
      date: '2024-10-15',
      daysLeft: 25,
      priority: 'Crítica',
      responsible: 'Departamento Jurídico'
    },
    {
      title: 'Atualização Plano Diretor',
      date: '2024-11-30',
      daysLeft: 71,
      priority: 'Média',
      responsible: 'Secretaria de Planejamento'
    }
  ];

  const riskMatrix = [
    { category: 'LGPD', score: 85, trend: 'up', items: 3 },
    { category: 'LAI', score: 72, trend: 'stable', items: 2 },
    { category: 'LRF', score: 25, trend: 'down', items: 1 },
    { category: 'Licitações', score: 58, trend: 'up', items: 4 }
  ];

  const stats = {
    totalCompliance: 87.2,
    complianceItems: 24,
    nonCompliantItems: 3,
    upcomingDeadlines: 8,
    riskScore: 67,
    lastAudit: '2024-09-15'
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'compliant': return 'text-green-400 bg-green-500/20';
      case 'attention': return 'text-yellow-400 bg-yellow-500/20';
      case 'non_compliant': return 'text-red-400 bg-red-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'low': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'high': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Crítica': return 'text-red-400 bg-red-500/20';
      case 'Alta': return 'text-orange-400 bg-orange-500/20';
      case 'Média': return 'text-yellow-400 bg-yellow-500/20';
      case 'Baixa': return 'text-green-400 bg-green-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Quadro de Conformidade Legal | PolicyLabs</title>
        <meta name="description" content="Quadro de conformidade legal e regulatória para municípios" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        {/* Header */}
        <header className="card-glass mx-6 mt-4 px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <img src="/logo.svg" alt="PolicyLabs" className="h-8 w-8" />
                <span className="text-xl font-bold text-white">PolicyLabs</span>
              </Link>
              <span className="text-sm text-white/70">
                Olá, {user?.full_name}
              </span>
            </div>

            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-white">Conformidade Legal</h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-white/70">
                  {new Date().toLocaleString('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
              </div>
              <Link href="/dashboard" className="btn-glass text-sm">
                Voltar
              </Link>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-6 py-8">
          {/* Navigation Tabs */}
          <div className="mb-8">
            <div className="card-glass p-1 inline-flex rounded-lg">
              {[
                { id: 'overview', label: 'Visão Geral', icon: ClipboardDocumentListIcon },
                { id: 'compliance', label: 'Conformidades', icon: DocumentCheckIcon },
                { id: 'risks', label: 'Análise de Riscos', icon: ExclamationTriangleIcon },
                { id: 'audit', label: 'Auditoria', icon: FolderOpenIcon }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-md transition-all ${
                    activeTab === tab.id
                      ? 'bg-white/20 text-white shadow-lg'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <tab.icon className="h-5 w-5" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="card-glass p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/70 text-sm">Conformidade Geral</p>
                      <p className="text-2xl font-bold text-white">{stats.totalCompliance}%</p>
                    </div>
                    <ShieldCheckIcon className="h-8 w-8 text-green-400" />
                  </div>
                </div>
                <div className="card-glass p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/70 text-sm">Itens Monitorados</p>
                      <p className="text-2xl font-bold text-white">{stats.complianceItems}</p>
                    </div>
                    <DocumentTextIcon className="h-8 w-8 text-blue-400" />
                  </div>
                </div>
                <div className="card-glass p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/70 text-sm">Não Conformes</p>
                      <p className="text-2xl font-bold text-white">{stats.nonCompliantItems}</p>
                    </div>
                    <XCircleIcon className="h-8 w-8 text-red-400" />
                  </div>
                </div>
                <div className="card-glass p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/70 text-sm">Prazos Próximos</p>
                      <p className="text-2xl font-bold text-white">{stats.upcomingDeadlines}</p>
                    </div>
                    <BellAlertIcon className="h-8 w-8 text-yellow-400" />
                  </div>
                </div>
                <div className="card-glass p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/70 text-sm">Score de Risco</p>
                      <p className="text-2xl font-bold text-white">{stats.riskScore}</p>
                    </div>
                    <ExclamationTriangleIcon className="h-8 w-8 text-orange-400" />
                  </div>
                </div>
                <div className="card-glass p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/70 text-sm">Última Auditoria</p>
                      <p className="text-2xl font-bold text-white">{stats.lastAudit}</p>
                    </div>
                    <CalendarIcon className="h-8 w-8 text-purple-400" />
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Upcoming Deadlines */}
                <div className="card-glass p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Próximos Prazos</h3>
                  <div className="space-y-3">
                    {upcomingDeadlines.map((deadline, index) => (
                      <div key={index} className="bg-white/10 rounded-lg p-4 border border-white/20">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-white font-medium">{deadline.title}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(deadline.priority)}`}>
                            {deadline.priority}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-white/70">{deadline.responsible}</span>
                          <div className="text-right">
                            <div className="text-white">{deadline.date}</div>
                            <div className="text-yellow-400">{deadline.daysLeft} dias</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Risk Matrix */}
                <div className="card-glass p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Matriz de Riscos</h3>
                  <div className="space-y-4">
                    {riskMatrix.map((risk, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-white font-medium">{risk.category}</span>
                          <span className="text-white/60 text-sm">({risk.items} itens)</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-24 bg-white/20 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${
                                risk.score > 70 ? 'bg-red-500' :
                                risk.score > 40 ? 'bg-yellow-500' : 'bg-green-500'
                              }`}
                              style={{ width: `${risk.score}%` }}
                            ></div>
                          </div>
                          <span className="text-white text-sm w-8">{risk.score}</span>
                          <div className={`w-3 h-3 rounded-full ${
                            risk.trend === 'up' ? 'bg-red-500' :
                            risk.trend === 'down' ? 'bg-green-500' : 'bg-yellow-500'
                          }`}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Compliance Tab */}
          {activeTab === 'compliance' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-white">Monitoramento de Conformidades</h3>
                <div className="flex space-x-4">
                  <select
                    className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
                    value={selectedCompliance}
                    onChange={(e) => setSelectedCompliance(e.target.value)}
                  >
                    <option value="all">Todas as Categorias</option>
                    <option value="federal">Federal</option>
                    <option value="state">Estadual</option>
                    <option value="municipal">Municipal</option>
                  </select>
                  <button className="btn-glass-primary px-6 py-3">
                    Nova Verificação
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {complianceItems.map((item) => (
                  <div key={item.id} className="card-glass p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="text-lg font-medium text-white">{item.title}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(item.status)}`}>
                            {item.status === 'compliant' ? 'Conforme' :
                             item.status === 'attention' ? 'Atenção' : 'Não Conforme'}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(item.priority)}`}>
                            {item.priority}
                          </span>
                        </div>
                        <p className="text-white/70 text-sm mb-3">{item.description}</p>
                        <div className="flex items-center space-x-6 text-sm text-white/60">
                          <span>Última verificação: {item.lastCheck}</span>
                          <span>Próxima revisão: {item.nextReview}</span>
                          <span className={`${getRiskColor(item.riskLevel)}`}>
                            Risco: {item.riskLevel === 'low' ? 'Baixo' :
                                   item.riskLevel === 'medium' ? 'Médio' : 'Alto'}
                          </span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="btn-glass-primary px-4 py-2 text-sm">
                          Verificar
                        </button>
                        <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm border border-white/20">
                          Detalhes
                        </button>
                      </div>
                    </div>

                    {/* Requirements */}
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <h5 className="text-white font-medium mb-2">Requisitos</h5>
                      <div className="flex flex-wrap gap-2">
                        {item.requirements.map((req, index) => (
                          <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                            {req}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Risks Tab */}
          {activeTab === 'risks' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white">Análise de Riscos de Conformidade</h3>

              {/* Risk Overview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="card-glass p-6 text-center">
                  <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <ExclamationTriangleIcon className="h-8 w-8 text-red-400" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Alto Risco</h4>
                  <p className="text-2xl font-bold text-red-400">1</p>
                  <p className="text-white/60 text-sm">LGPD</p>
                </div>
                <div className="card-glass p-6 text-center">
                  <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <ClockIcon className="h-8 w-8 text-yellow-400" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Médio Risco</h4>
                  <p className="text-2xl font-bold text-yellow-400">2</p>
                  <p className="text-white/60 text-sm">LAI, Licitações</p>
                </div>
                <div className="card-glass p-6 text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircleIcon className="h-8 w-8 text-green-400" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Baixo Risco</h4>
                  <p className="text-2xl font-bold text-green-400">2</p>
                  <p className="text-white/60 text-sm">LRF, Estatuto</p>
                </div>
              </div>

              {/* Detailed Risk Analysis */}
              <div className="card-glass p-6">
                <h4 className="text-lg font-medium text-white mb-4">Análise Detalhada por Categoria</h4>
                <div className="space-y-6">
                  {riskMatrix.map((risk, index) => (
                    <div key={index} className="border border-white/20 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h5 className="text-white font-medium">{risk.category}</h5>
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          risk.score > 70 ? 'bg-red-500/20 text-red-300' :
                          risk.score > 40 ? 'bg-yellow-500/20 text-yellow-300' :
                          'bg-green-500/20 text-green-300'
                        }`}>
                          Score: {risk.score}
                        </span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-3 mb-3">
                        <div
                          className={`h-3 rounded-full ${
                            risk.score > 70 ? 'bg-red-500' :
                            risk.score > 40 ? 'bg-yellow-500' : 'bg-green-500'
                          }`}
                          style={{ width: `${risk.score}%` }}
                        ></div>
                      </div>
                      <div className="flex items-center justify-between text-sm text-white/70">
                        <span>{risk.items} itens monitorados</span>
                        <span className={`flex items-center space-x-1 ${
                          risk.trend === 'up' ? 'text-red-300' :
                          risk.trend === 'down' ? 'text-green-300' : 'text-yellow-300'
                        }`}>
                          <span>Tendência:</span>
                          <div className={`w-3 h-3 rounded-full ${
                            risk.trend === 'up' ? 'bg-red-500' :
                            risk.trend === 'down' ? 'bg-green-500' : 'bg-yellow-500'
                          }`}></div>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Audit Tab */}
          {activeTab === 'audit' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-white">Trilha de Auditoria</h3>
                <button className="btn-glass-primary px-6 py-3">
                  Exportar Relatório
                </button>
              </div>

              {/* Audit Trail */}
              <div className="card-glass p-6">
                <h4 className="text-lg font-medium text-white mb-4">Atividades Recentes</h4>
                <div className="space-y-4">
                  {auditTrail.map((item) => (
                    <div key={item.id} className="border border-white/20 rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h5 className="text-white font-medium mb-1">{item.action}</h5>
                          <p className="text-white/70 text-sm mb-2">{item.result}</p>
                          <div className="flex items-center space-x-4 text-sm text-white/60">
                            <span>{item.user}</span>
                            <span>{item.timestamp}</span>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs ${
                          item.type === 'review' ? 'bg-blue-500/20 text-blue-300' :
                          item.type === 'update' ? 'bg-green-500/20 text-green-300' :
                          'bg-purple-500/20 text-purple-300'
                        }`}>
                          {item.type === 'review' ? 'Revisão' :
                           item.type === 'update' ? 'Atualização' : 'Relatório'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LegalComplianceDashboard;