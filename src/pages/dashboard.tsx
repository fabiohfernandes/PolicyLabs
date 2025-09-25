import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ThemeToggle } from '@/components/ThemeToggle';

interface User {
  id: string;
  email: string;
  full_name: string;
  role: string;
  is_verified: boolean;
  two_factor_enabled: boolean;
  created_at: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const userData = localStorage.getItem('user');
    console.log('Raw userData from localStorage:', userData);
    if (userData) {
      const parsedUser = JSON.parse(userData);
      console.log('Parsed user data:', parsedUser);
      setUser(parsedUser);
    } else {
      router.push('/login');
    }
    setIsLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user');
    router.push('/');
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
      title: "Fica Vivo!",
      status: "Disponível",
      progress: 100,
      dna_score: 94,
      priority: "Alta",
      slug: "fica-vivo",
      description: "Redução de homicídios de jovens (12-24 anos) em territórios vulneráveis"
    },
    {
      id: 2,
      title: "Estratégia Saúde da Família (ESF)",
      status: "Disponível",
      progress: 100,
      dna_score: 96,
      priority: "Alta",
      slug: "estrategia-saude-familia",
      description: "Modelo prioritário da Atenção Primária à Saúde no SUS"
    },
    {
      id: 3,
      title: "BRT (Rede Integrada de Transporte)",
      status: "Disponível",
      progress: 100,
      dna_score: 91,
      priority: "Média",
      slug: "brt-transporte",
      description: "Sistema de transporte com prioridade para ônibus"
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
        <title>Quadro | PolicyLabs</title>
        <meta name="description" content="Quadro do PolicyLabs - Gestão Municipal Inteligente" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Header */}
        <header className="card-glass mx-6 mt-4 px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <img src="/logo.svg" alt="PolicyLabs" className="h-8 w-8" />
                <span className="text-xl font-bold">PolicyLabs</span>
              </div>
              <span className="text-sm text-gray-600">
                Olá, {user.full_name}
              </span>
            </div>

            <div className="flex items-center">
              <h1 className="text-xl font-semibold">Quadro Geral</h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">
                  {new Date().toLocaleString('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
              </div>
              <ThemeToggle variant="icon" size="sm" />
              <button onClick={handleLogout} className="btn-glass text-sm">
                Sair
              </button>
            </div>
          </div>
        </header>

        {/* Main Navigation Bar */}
        <nav className="mx-6 mt-4 relative z-[10000]">
          <div className="card-glass px-4 py-3">
            <div className="flex flex-wrap justify-center gap-2 text-sm">
              {/* Core AI Tools */}
              <Link href="/local-ia" className="btn-glass px-4 py-2 hover:scale-105 transition-transform">
                🔍 Pesquisa
              </Link>

              <Link href="/realtime-info" className="btn-glass px-4 py-2 hover:scale-105 transition-transform">
                📰 Novidades
              </Link>

              <Link href="/policydna" className="btn-glass px-4 py-2 hover:scale-105 transition-transform">
                🧠 PolicyDNA
              </Link>

              {/* Modules (Plan-dependent) */}
              <div className="relative group">
                <button className="btn-glass px-4 py-2 hover:scale-105 transition-transform">
                  🧩 Módulos
                  <span className="ml-2 text-xs">▼</span>
                </button>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white border border-gray-200 shadow-lg rounded-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-[9999]">
                  <div className="space-y-2">
                    <Link href="/modules/ai/policy-dna" className="block btn-glass w-full text-left p-2">
                      🧠 PolicyDNA™
                    </Link>
                    <Link href="/modules/digital-twin/gemeo-digital" className="block btn-glass w-full text-left p-2">
                      🏙️ Gêmeo Digital
                    </Link>
                    <Link href="/modules/citizen-engagement/engajamento-cidadao" className="block btn-glass w-full text-left p-2">
                      📊 Engajamento Cidadão
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
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-white border border-gray-200 shadow-lg rounded-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-[9999]">
                  <div className="space-y-2">
                    <Link href="/create/project" className="block btn-glass w-full text-left p-2">
                      📁 Novo Projeto
                    </Link>
                    <Link href="/create/policy" className="block btn-glass w-full text-left p-2">
                      📋 Nova Política
                    </Link>
                    <Link href="/create/consulta" className="block btn-glass w-full text-left p-2">
                      🗳️ Nova Consulta
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
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-white border border-gray-200 shadow-lg rounded-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-[9999]">
                  <div className="space-y-2">
                    <Link href="/bank/ideas" className="block btn-glass w-full text-left p-2">
                      💡 Banco de Ideias
                    </Link>
                    <Link href="/bank/projects" className="block btn-glass w-full text-left p-2">
                      📁 Banco de Projetos
                    </Link>
                    <Link href="/bank/documents" className="block btn-glass w-full text-left p-2">
                      📄 Banco de Docs
                    </Link>
                  </div>
                </div>
              </div>

              {/* Quadro */}
              <div className="relative group">
                <button className="btn-glass-primary px-4 py-2 hover:scale-105 transition-transform">
                  📊 Quadro
                  <span className="ml-2 text-xs">▼</span>
                </button>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-white border border-gray-200 shadow-lg rounded-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-[9999]">
                  <div className="space-y-2">
                    <button
                      onClick={() => setActiveTab('overview')}
                      className={`block w-full text-left p-2 transition-all ${
                        activeTab === 'overview' ? 'btn-glass-primary' : 'btn-glass hover:scale-105'
                      }`}
                    >
                      📊 Visão Geral
                    </button>
                    <button
                      onClick={() => setActiveTab('policies')}
                      className={`block w-full text-left p-2 transition-all ${
                        activeTab === 'policies' ? 'btn-glass-primary' : 'btn-glass hover:scale-105'
                      }`}
                    >
                      📋 Políticas
                    </button>
                    <Link href="/projects" className="block btn-glass w-full text-left p-2">
                      📁 Projetos
                    </Link>
                    <Link href="/votings" className="block btn-glass w-full text-left p-2">
                      🗳️ Votações
                    </Link>
                    <button
                      onClick={() => setActiveTab('analytics')}
                      className={`block w-full text-left p-2 transition-all ${
                        activeTab === 'analytics' ? 'btn-glass-primary' : 'btn-glass hover:scale-105'
                      }`}
                    >
                      📈 Relatórios
                    </button>
                    <button
                      onClick={() => setActiveTab('citizens')}
                      className={`block w-full text-left p-2 transition-all ${
                        activeTab === 'citizens' ? 'btn-glass-primary' : 'btn-glass hover:scale-105'
                      }`}
                    >
                      👥 Cidadãos
                    </button>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="relative group">
                <button className="btn-glass px-4 py-2 hover:scale-105 transition-transform">
                  📈 Info
                  <span className="ml-2 text-xs">▼</span>
                </button>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-[9999]">
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
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-[9999]">
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
                    <Link href="/modules/ai/policy-dna" className="btn-glass w-full py-3 text-left px-4 block">
                      🧠 Consultar PolicyDNA™
                    </Link>
                    <Link href="/create/consulta" className="btn-glass w-full py-3 text-left px-4 block">
                      🗳️ Criar Consulta Pública
                    </Link>
                    <Link href="/modules/digital-twin/gemeo-digital" className="btn-glass w-full py-3 text-left px-4 block">
                      🏙️ Abrir Gêmeo Digital
                    </Link>
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
                    <Link key={policy.id} href={`/policies/${policy.slug}`}>
                      <div className="p-4 bg-white bg-opacity-50 rounded-lg hover:bg-opacity-70 transition-all cursor-pointer">
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

                        <p className="text-sm text-gray-600 mb-3">{policy.description}</p>

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
                        <div className="text-xs text-gray-500 mt-1">{policy.progress}% disponível para implementação</div>
                      </div>
                    </Link>
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
                Quadros e relatórios detalhados sobre performance municipal
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