import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  LifebuoyIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  MagnifyingGlassIcon,
  PhoneIcon,
  EnvelopeIcon,
  VideoCameraIcon,
  HeartIcon,
  UserGroupIcon,
  ClipboardDocumentListIcon,
  BugAntIcon
} from '@heroicons/react/24/outline';

const SupportHelpDesk = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');

  const tickets = [
    {
      id: '#TK-2024-001',
      title: 'Erro na geração de relatórios PDF',
      category: 'Técnico',
      priority: 'Alta',
      status: 'Em Andamento',
      user: 'Maria Silva - Prefeitura de São Paulo',
      created: '2024-09-20 09:30',
      updated: '2024-09-20 14:15',
      agent: 'João Santos'
    },
    {
      id: '#TK-2024-002',
      title: 'Dúvida sobre configuração de dashboards',
      category: 'Suporte',
      priority: 'Média',
      status: 'Aguardando Resposta',
      user: 'Carlos Oliveira - Prefeitura do Rio de Janeiro',
      created: '2024-09-20 11:45',
      updated: '2024-09-20 13:22',
      agent: 'Ana Costa'
    },
    {
      id: '#TK-2024-003',
      title: 'Solicitação de nova funcionalidade',
      category: 'Feature Request',
      priority: 'Baixa',
      status: 'Resolvido',
      user: 'Pedro Santos - Prefeitura de Brasília',
      created: '2024-09-19 16:20',
      updated: '2024-09-20 10:30',
      agent: 'Laura Mendes'
    },
    {
      id: '#TK-2024-004',
      title: 'Problema de acesso ao módulo de IA',
      category: 'Acesso',
      priority: 'Crítica',
      status: 'Novo',
      user: 'Angela Lima - Prefeitura de Belo Horizonte',
      created: '2024-09-20 15:10',
      updated: '2024-09-20 15:10',
      agent: 'Não atribuído'
    }
  ];

  const knowledgeBase = [
    {
      id: 1,
      title: 'Como configurar o PolicyDNA™ para sua cidade',
      category: 'Configuração',
      views: 2847,
      helpful: 94,
      lastUpdated: '2024-09-18'
    },
    {
      id: 2,
      title: 'Troubleshooting: Problemas comuns de login',
      category: 'Acesso',
      views: 1923,
      helpful: 87,
      lastUpdated: '2024-09-17'
    },
    {
      id: 3,
      title: 'Guia completo: Análise de dados municipais',
      category: 'Analytics',
      views: 1567,
      helpful: 91,
      lastUpdated: '2024-09-16'
    },
    {
      id: 4,
      title: 'API Integration: Conectando sistemas externos',
      category: 'Técnico',
      views: 892,
      helpful: 89,
      lastUpdated: '2024-09-15'
    }
  ];

  const supportChannels = [
    {
      name: 'Chat ao Vivo',
      description: 'Suporte instantâneo durante horário comercial',
      icon: ChatBubbleLeftRightIcon,
      availability: '24/7',
      responseTime: 'Imediato',
      color: 'bg-green-500'
    },
    {
      name: 'Email Support',
      description: 'Suporte técnico detalhado por email',
      icon: EnvelopeIcon,
      availability: '24/7',
      responseTime: '< 4 horas',
      color: 'bg-blue-500'
    },
    {
      name: 'Videochamada',
      description: 'Suporte personalizado por vídeo',
      icon: VideoCameraIcon,
      availability: 'Seg-Sex 8h-18h',
      responseTime: 'Agendado',
      color: 'bg-purple-500'
    },
    {
      name: 'Telefone',
      description: 'Suporte telefônico para emergências',
      icon: PhoneIcon,
      availability: '24/7',
      responseTime: '< 5 min',
      color: 'bg-red-500'
    }
  ];

  const stats = {
    totalTickets: 847,
    resolvedToday: 23,
    averageResponseTime: '2.3h',
    satisfactionRate: 96.7,
    activeAgents: 12,
    knowledgeArticles: 156
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Novo': return 'text-blue-400 bg-blue-500/20';
      case 'Em Andamento': return 'text-yellow-400 bg-yellow-500/20';
      case 'Aguardando Resposta': return 'text-orange-400 bg-orange-500/20';
      case 'Resolvido': return 'text-green-400 bg-green-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  return (
    <>
      <Head>
        <title>Suporte e Help Desk | PolicyLabs</title>
        <meta name="description" content="Central de suporte e help desk para usuários do PolicyLabs" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        {/* Header */}
        <div className="card-glass border-0 border-b border-white/20 rounded-none">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Link href="/dashboard" className="text-white/70 hover:text-white">
                  ← Dashboard
                </Link>
                <div className="flex items-center space-x-3">
                  <LifebuoyIcon className="h-8 w-8 text-blue-400" />
                  <div>
                    <h1 className="text-2xl font-bold text-white">Suporte & Help Desk</h1>
                    <p className="text-white/70">Central de atendimento e suporte técnico</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="text-white font-semibold">{stats.satisfactionRate}%</div>
                  <div className="text-white/60 text-sm">Satisfação</div>
                </div>
                <div className="text-right">
                  <div className="text-white font-semibold">{stats.averageResponseTime}</div>
                  <div className="text-white/60 text-sm">Resp. Médio</div>
                </div>
                <button className="btn-glass-primary px-4 py-2">
                  Novo Ticket
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-8">
          {/* Navigation Tabs */}
          <div className="mb-8">
            <div className="card-glass p-1 inline-flex rounded-lg">
              {[
                { id: 'overview', label: 'Visão Geral', icon: ClipboardDocumentListIcon },
                { id: 'tickets', label: 'Tickets', icon: DocumentTextIcon },
                { id: 'knowledge', label: 'Base de Conhecimento', icon: DocumentTextIcon },
                { id: 'channels', label: 'Canais de Suporte', icon: ChatBubbleLeftRightIcon }
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
                      <p className="text-white/70 text-sm">Total de Tickets</p>
                      <p className="text-2xl font-bold text-white">{stats.totalTickets}</p>
                    </div>
                    <DocumentTextIcon className="h-8 w-8 text-blue-400" />
                  </div>
                </div>
                <div className="card-glass p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/70 text-sm">Resolvidos Hoje</p>
                      <p className="text-2xl font-bold text-white">{stats.resolvedToday}</p>
                    </div>
                    <CheckCircleIcon className="h-8 w-8 text-green-400" />
                  </div>
                </div>
                <div className="card-glass p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/70 text-sm">Tempo de Resposta</p>
                      <p className="text-2xl font-bold text-white">{stats.averageResponseTime}</p>
                    </div>
                    <ClockIcon className="h-8 w-8 text-yellow-400" />
                  </div>
                </div>
                <div className="card-glass p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/70 text-sm">Taxa de Satisfação</p>
                      <p className="text-2xl font-bold text-white">{stats.satisfactionRate}%</p>
                    </div>
                    <HeartIcon className="h-8 w-8 text-red-400" />
                  </div>
                </div>
                <div className="card-glass p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/70 text-sm">Agentes Ativos</p>
                      <p className="text-2xl font-bold text-white">{stats.activeAgents}</p>
                    </div>
                    <UserGroupIcon className="h-8 w-8 text-purple-400" />
                  </div>
                </div>
                <div className="card-glass p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/70 text-sm">Artigos na Base</p>
                      <p className="text-2xl font-bold text-white">{stats.knowledgeArticles}</p>
                    </div>
                    <DocumentTextIcon className="h-8 w-8 text-indigo-400" />
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="card-glass p-6">
                <h3 className="text-xl font-semibold text-white mb-6">Ações Rápidas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <button className="btn-glass-primary p-4 flex flex-col items-center space-y-2">
                    <DocumentTextIcon className="h-8 w-8" />
                    <span>Novo Ticket</span>
                  </button>
                  <button className="btn-glass-primary p-4 flex flex-col items-center space-y-2">
                    <ChatBubbleLeftRightIcon className="h-8 w-8" />
                    <span>Chat ao Vivo</span>
                  </button>
                  <button className="btn-glass-primary p-4 flex flex-col items-center space-y-2">
                    <MagnifyingGlassIcon className="h-8 w-8" />
                    <span>Buscar KB</span>
                  </button>
                  <button className="btn-glass-primary p-4 flex flex-col items-center space-y-2">
                    <VideoCameraIcon className="h-8 w-8" />
                    <span>Agendar Call</span>
                  </button>
                </div>
              </div>

              {/* Recent Tickets */}
              <div className="card-glass p-6">
                <h3 className="text-xl font-semibold text-white mb-6">Tickets Recentes</h3>
                <div className="space-y-3">
                  {tickets.slice(0, 3).map((ticket) => (
                    <div key={ticket.id} className="bg-white/10 rounded-lg p-4 border border-white/20">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <span className="text-white/70 text-sm font-mono">{ticket.id}</span>
                          <span className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(ticket.priority)}`}>
                            {ticket.priority}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(ticket.status)}`}>
                            {ticket.status}
                          </span>
                        </div>
                        <span className="text-white/60 text-sm">{ticket.created}</span>
                      </div>
                      <h4 className="text-white font-medium mb-1">{ticket.title}</h4>
                      <p className="text-white/70 text-sm">{ticket.user}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tickets Tab */}
          {activeTab === 'tickets' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-white">Gerenciamento de Tickets</h3>
                <button className="btn-glass-primary px-6 py-3">
                  Novo Ticket
                </button>
              </div>

              {/* Filters */}
              <div className="card-glass p-4">
                <div className="flex flex-wrap gap-4 items-center">
                  <div className="flex-1 min-w-64">
                    <div className="relative">
                      <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
                      <input
                        type="text"
                        placeholder="Buscar tickets..."
                        className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>
                  <select className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white">
                    <option value="">Todas as Prioridades</option>
                    <option value="critical">Crítica</option>
                    <option value="high">Alta</option>
                    <option value="medium">Média</option>
                    <option value="low">Baixa</option>
                  </select>
                  <select className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white">
                    <option value="">Todos os Status</option>
                    <option value="new">Novo</option>
                    <option value="in_progress">Em Andamento</option>
                    <option value="waiting">Aguardando</option>
                    <option value="resolved">Resolvido</option>
                  </select>
                </div>
              </div>

              {/* Tickets List */}
              <div className="space-y-4">
                {tickets.map((ticket) => (
                  <div key={ticket.id} className="card-glass p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-white/70 font-mono">{ticket.id}</span>
                          <span className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(ticket.priority)}`}>
                            {ticket.priority}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(ticket.status)}`}>
                            {ticket.status}
                          </span>
                          <span className="px-2 py-1 rounded-full text-xs bg-blue-500/20 text-blue-300">
                            {ticket.category}
                          </span>
                        </div>
                        <h4 className="text-lg font-medium text-white mb-2">{ticket.title}</h4>
                        <p className="text-white/70 text-sm mb-2">{ticket.user}</p>
                        <div className="flex items-center space-x-6 text-sm text-white/60">
                          <span>Criado: {ticket.created}</span>
                          <span>Atualizado: {ticket.updated}</span>
                          <span>Agente: {ticket.agent}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="btn-glass-primary px-4 py-2 text-sm">
                          Ver Detalhes
                        </button>
                        <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm border border-white/20">
                          Editar
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Knowledge Base Tab */}
          {activeTab === 'knowledge' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-white">Base de Conhecimento</h3>
                <button className="btn-glass-primary px-6 py-3">
                  Novo Artigo
                </button>
              </div>

              {/* Search */}
              <div className="card-glass p-4">
                <div className="relative">
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
                  <input
                    type="text"
                    placeholder="Buscar na base de conhecimento..."
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60"
                  />
                </div>
              </div>

              {/* Articles */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {knowledgeBase.map((article) => (
                  <div key={article.id} className="card-glass p-6">
                    <div className="flex items-start justify-between mb-3">
                      <span className="px-3 py-1 rounded-full text-xs bg-blue-500/20 text-blue-300">
                        {article.category}
                      </span>
                      <span className="text-white/60 text-sm">
                        Atualizado: {article.lastUpdated}
                      </span>
                    </div>
                    <h4 className="text-lg font-medium text-white mb-3">{article.title}</h4>
                    <div className="flex items-center justify-between text-sm text-white/60">
                      <div className="flex items-center space-x-4">
                        <span>{article.views.toLocaleString()} visualizações</span>
                        <span>{article.helpful}% útil</span>
                      </div>
                      <button className="btn-glass-primary px-4 py-2 text-sm">
                        Ler Artigo
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Support Channels Tab */}
          {activeTab === 'channels' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white">Canais de Suporte</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {supportChannels.map((channel, index) => (
                  <div key={index} className="card-glass p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${channel.color} rounded-lg flex items-center justify-center`}>
                        <channel.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-medium text-white mb-2">{channel.name}</h4>
                        <p className="text-white/70 text-sm mb-4">{channel.description}</p>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-white/60">Disponibilidade:</span>
                            <span className="text-white">{channel.availability}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-white/60">Tempo de Resposta:</span>
                            <span className="text-white">{channel.responseTime}</span>
                          </div>
                        </div>
                        <button className="btn-glass-primary w-full mt-4 py-2">
                          Usar Canal
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Information */}
              <div className="card-glass p-6">
                <h4 className="text-lg font-medium text-white mb-4">Informações de Contato</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <PhoneIcon className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                    <h5 className="text-white font-medium mb-1">Telefone</h5>
                    <p className="text-white/70">+55 11 1234-5678</p>
                    <p className="text-white/60 text-sm">24/7 Emergências</p>
                  </div>
                  <div className="text-center">
                    <EnvelopeIcon className="h-8 w-8 text-green-400 mx-auto mb-2" />
                    <h5 className="text-white font-medium mb-1">Email</h5>
                    <p className="text-white/70">support@policylabs.com.br</p>
                    <p className="text-white/60 text-sm">Resposta em < 4h</p>
                  </div>
                  <div className="text-center">
                    <ChatBubbleLeftRightIcon className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                    <h5 className="text-white font-medium mb-1">Chat</h5>
                    <p className="text-white/70">Chat ao vivo</p>
                    <p className="text-white/60 text-sm">Seg-Dom 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SupportHelpDesk;