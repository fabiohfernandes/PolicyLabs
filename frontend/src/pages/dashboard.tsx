import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for demonstration
  const municipalData = {
    municipality: "Município Demo",
    population: "75.432",
    tier: "Professional",
    lastUpdate: "Hoje, 14:30"
  };

  const kpis = [
    {
      title: "Políticas Ativas",
      value: "23",
      change: "+3",
      trend: "up",
      icon: "📋"
    },
    {
      title: "Taxa de Sucesso",
      value: "87%",
      change: "+5%",
      trend: "up",
      icon: "📈"
    },
    {
      title: "Engajamento Cidadão",
      value: "64%",
      change: "+12%",
      trend: "up",
      icon: "👥"
    },
    {
      title: "Economia Gerada",
      value: "R$ 2.1M",
      change: "+450K",
      trend: "up",
      icon: "💰"
    }
  ];

  const recentPolicies = [
    {
      id: 1,
      title: "Modernização do Transporte Público",
      status: "Em Análise",
      progress: 35,
      dna_score: 89,
      priority: "Alta"
    },
    {
      id: 2,
      title: "Programa de Sustentabilidade Urbana",
      status: "Aprovado",
      progress: 78,
      dna_score: 92,
      priority: "Média"
    },
    {
      id: 3,
      title: "Digitalização de Serviços",
      status: "Implementando",
      progress: 56,
      dna_score: 85,
      priority: "Alta"
    }
  ];

  const notifications = [
    {
      id: 1,
      type: "success",
      message: "PolicyDNA™ encontrou 3 políticas similares para análise",
      time: "5 min atrás"
    },
    {
      id: 2,
      type: "warning",
      message: "Consulta pública sobre Mobilidade Urbana termina em 2 dias",
      time: "1 hora atrás"
    },
    {
      id: 3,
      type: "info",
      message: "Nova atualização do sistema disponível",
      time: "3 horas atrás"
    }
  ];

  return (
    <>
      <Head>
        <title>Dashboard | PolicyLabs APSS</title>
        <meta name="description" content="Dashboard do PolicyLabs APSS - Gestão Municipal Inteligente" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Header */}
        <header className="card-glass mx-6 mt-4 px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="flex items-center space-x-2">
                <img src="/logo.svg" alt="PolicyLabs" className="h-8 w-8" />
                <span className="text-xl font-bold">PolicyLabs APSS</span>
              </Link>
              <div className="text-sm text-gray-500">
                {municipalData.municipality} • {municipalData.population} hab. • Plano {municipalData.tier}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-500">
                Última atualização: {municipalData.lastUpdate}
              </div>
              <button className="btn-glass">
                👤 Administrador
              </button>
              <Link href="/" className="btn-glass text-sm">
                🚪 Sair
              </Link>
            </div>
          </div>
        </header>

        {/* Main Navigation Bar */}
        <nav className="mx-6 mt-4">
          <div className="card-glass px-4 py-3">
            <div className="flex flex-wrap justify-center gap-2 text-sm">
              {/* Core AI Tools */}
              <Link href="/local-ia" className="btn-glass px-4 py-2 hover:scale-105 transition-transform">
                🤖 Local IA
              </Link>

              <Link href="/realtime-info" className="btn-glass px-4 py-2 hover:scale-105 transition-transform">
                📡 Realtime Info & News
              </Link>

              {/* Modules (Plan-dependent) */}
              <div className="relative group">
                <button className="btn-glass px-4 py-2 hover:scale-105 transition-transform">
                  🧩 Módulos
                  <span className="ml-2 text-xs">▼</span>
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 card-glass p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  <div className="space-y-2">
                    <Link href="/modules/policy-dna" className="block btn-glass w-full text-left p-2">
                      🧠 PolicyDNA™
                    </Link>
                    <Link href="/modules/digital-twin" className="block btn-glass w-full text-left p-2">
                      🏙️ Gêmeo Digital
                    </Link>
                    <Link href="/modules/citizen-engagement" className="block btn-glass w-full text-left p-2">
                      🗳️ Engajamento Cidadão
                    </Link>
                    <Link href="/modules/ai-analysis" className="block btn-glass w-full text-left p-2">
                      📊 Análise IA Avançada
                    </Link>
                    <div className="border-t border-gray-200 my-2"></div>
                    <div className="text-xs text-gray-500 p-2">
                      Disponível no Plano {municipalData.tier}
                    </div>
                  </div>
                </div>
              </div>

              {/* Creation Tools */}
              <div className="relative group">
                <button className="btn-glass-primary px-4 py-2 hover:scale-105 transition-transform">
                  ➕ Criar
                  <span className="ml-2 text-xs">▼</span>
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 card-glass p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  <div className="space-y-2">
                    <Link href="/create/project" className="block btn-glass w-full text-left p-2">
                      📁 Novo Projeto
                    </Link>
                    <Link href="/create/policy" className="block btn-glass w-full text-left p-2">
                      📋 Nova Política
                    </Link>
                    <Link href="/create/voting" className="block btn-glass w-full text-left p-2">
                      🗳️ Nova Votação
                    </Link>
                    <Link href="/create/document" className="block btn-glass w-full text-left p-2">
                      📄 Novo Documento
                    </Link>
                  </div>
                </div>
              </div>

              {/* Resource Banks */}
              <div className="relative group">
                <button className="btn-glass px-4 py-2 hover:scale-105 transition-transform">
                  🏦 Bancos
                  <span className="ml-2 text-xs">▼</span>
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 card-glass p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  <div className="space-y-2">
                    <Link href="/bank/ideas" className="block btn-glass w-full text-left p-2">
                      💡 Banco de Ideias
                    </Link>
                    <Link href="/bank/projects" className="block btn-glass w-full text-left p-2">
                      📁 Banco de Projetos
                    </Link>
                    <Link href="/bank/documents" className="block btn-glass w-full text-left p-2">
                      📄 Banco de Documentos
                    </Link>
                  </div>
                </div>
              </div>

              {/* Dashboard */}
              <Link href="/dashboard" className={`px-4 py-2 hover:scale-105 transition-transform ${
                activeTab === 'overview' ? 'btn-glass-primary' : 'btn-glass'
              }`}>
                📊 Dashboard
              </Link>

              {/* Statistics */}
              <div className="relative group">
                <button className="btn-glass px-4 py-2 hover:scale-105 transition-transform">
                  📈 Estatísticas
                  <span className="ml-2 text-xs">▼</span>
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 card-glass p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  <div className="space-y-2">
                    <Link href="/stats/city" className="block btn-glass w-full text-left p-2">
                      🏛️ Cidade
                    </Link>
                    <Link href="/stats/region" className="block btn-glass w-full text-left p-2">
                      🗺️ Região
                    </Link>
                    <Link href="/stats/state" className="block btn-glass w-full text-left p-2">
                      🏞️ Estado
                    </Link>
                    <Link href="/stats/country" className="block btn-glass w-full text-left p-2">
                      🇧🇷 País
                    </Link>
                  </div>
                </div>
              </div>

              {/* User Config */}
              <div className="relative group">
                <button className="btn-glass px-4 py-2 hover:scale-105 transition-transform">
                  ⚙️ Config
                  <span className="ml-2 text-xs">▼</span>
                </button>
                <div className="absolute top-full right-0 mt-2 w-48 card-glass p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  <div className="space-y-2">
                    <Link href="/config/profile" className="block btn-glass w-full text-left p-2">
                      👤 Perfil
                    </Link>
                    <Link href="/config/municipality" className="block btn-glass w-full text-left p-2">
                      🏛️ Município
                    </Link>
                    <Link href="/config/integrations" className="block btn-glass w-full text-left p-2">
                      🔗 Integrações
                    </Link>
                    <Link href="/config/billing" className="block btn-glass w-full text-left p-2">
                      💳 Faturamento
                    </Link>
                    <div className="border-t border-gray-200 my-2"></div>
                    <Link href="/" className="block btn-glass w-full text-left p-2 text-red-600">
                      🚪 Sair do Sistema
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Navigation Tabs */}
        <nav className="mx-6 mt-6">
          <div className="card-glass px-2 py-2">
            <div className="flex space-x-2">
              {[
                { id: 'overview', label: '📊 Visão Geral', icon: '📊' },
                { id: 'policies', label: '📋 Políticas', icon: '📋' },
                { id: 'analytics', label: '📈 Analytics', icon: '📈' },
                { id: 'citizens', label: '👥 Cidadãos', icon: '👥' },
                { id: 'settings', label: '⚙️ Configurações', icon: '⚙️' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    activeTab === tab.id
                      ? 'btn-glass-primary'
                      : 'btn-glass hover:scale-105'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="mx-6 mt-6 pb-8">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* KPI Cards */}
              <div className="grid md:grid-cols-4 gap-6">
                {kpis.map((kpi, index) => (
                  <div key={index} className="card-glass p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl">{kpi.icon}</span>
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        kpi.trend === 'up' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                      }`}>
                        {kpi.change}
                      </span>
                    </div>
                    <div className="text-2xl font-bold mb-1">{kpi.value}</div>
                    <div className="text-sm text-gray-600">{kpi.title}</div>
                  </div>
                ))}
              </div>

              {/* Quick Actions & Recent Activity */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Quick Actions */}
                <div className="card-glass p-6">
                  <h2 className="text-xl font-bold mb-4">🚀 Ações Rápidas</h2>
                  <div className="space-y-3">
                    <button className="btn-glass-primary w-full py-3 text-left px-4">
                      ➕ Nova Política Pública
                    </button>
                    <button className="btn-glass w-full py-3 text-left px-4">
                      🧠 Consultar PolicyDNA™
                    </button>
                    <button className="btn-glass w-full py-3 text-left px-4">
                      🗳️ Criar Consulta Pública
                    </button>
                    <button className="btn-glass w-full py-3 text-left px-4">
                      🏙️ Abrir Gêmeo Digital
                    </button>
                    <button className="btn-glass w-full py-3 text-left px-4">
                      📊 Gerar Relatório
                    </button>
                  </div>
                </div>

                {/* Notifications */}
                <div className="card-glass p-6">
                  <h2 className="text-xl font-bold mb-4">🔔 Notificações</h2>
                  <div className="space-y-3">
                    {notifications.map((notification) => (
                      <div key={notification.id} className="p-3 bg-white bg-opacity-50 rounded-lg">
                        <div className={`text-sm font-medium ${
                          notification.type === 'success' ? 'text-green-600' :
                          notification.type === 'warning' ? 'text-orange-600' :
                          'text-blue-600'
                        }`}>
                          {notification.message}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">{notification.time}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recent Policies */}
              <div className="card-glass p-6">
                <h2 className="text-xl font-bold mb-4">📋 Políticas Recentes</h2>
                <div className="space-y-4">
                  {recentPolicies.map((policy) => (
                    <div key={policy.id} className="p-4 bg-white bg-opacity-50 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">{policy.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          policy.priority === 'Alta' ? 'bg-red-100 text-red-600' :
                          policy.priority === 'Média' ? 'bg-yellow-100 text-yellow-600' :
                          'bg-green-100 text-green-600'
                        }`}>
                          {policy.priority}
                        </span>
                      </div>

                      <div className="flex items-center space-x-4 mb-3">
                        <span className="text-sm text-gray-600">Status: {policy.status}</span>
                        <span className="text-sm text-gray-600">PolicyDNA™: {policy.dna_score}%</span>
                      </div>

                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${policy.progress}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{policy.progress}% concluído</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'policies' && (
            <div className="card-glass p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">📋 Gestão de Políticas</h2>
              <p className="text-gray-600 mb-6">
                Módulo de gestão completa de políticas públicas com PolicyDNA™
              </p>
              <button className="btn-glass-primary">
                Em Desenvolvimento
              </button>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="card-glass p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">📈 Analytics Avançado</h2>
              <p className="text-gray-600 mb-6">
                Dashboards e relatórios detalhados sobre performance municipal
              </p>
              <button className="btn-glass-primary">
                Em Desenvolvimento
              </button>
            </div>
          )}

          {activeTab === 'citizens' && (
            <div className="card-glass p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">👥 Engajamento Cidadão</h2>
              <p className="text-gray-600 mb-6">
                "Facebook das Necessidades" - Plataforma de participação cidadã
              </p>
              <button className="btn-glass-primary">
                Em Desenvolvimento
              </button>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="card-glass p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">⚙️ Configurações</h2>
              <p className="text-gray-600 mb-6">
                Configurações do sistema, usuários e integrações
              </p>
              <button className="btn-glass-primary">
                Em Desenvolvimento
              </button>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="card-glass mx-6 mt-8 p-4 text-center">
          <Link href="/" className="text-blue-600 hover:text-blue-700">
            ← Voltar para Home
          </Link>
        </footer>
      </div>
    </>
  );
}