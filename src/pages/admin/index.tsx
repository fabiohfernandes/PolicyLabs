import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface User {
  id: string;
  email: string;
  full_name: string;
  role: string;
  is_verified: boolean;
  two_factor_enabled: boolean;
  created_at: string;
}

export default function AdminQuadroPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Head>
        <title>Painel Administrativo - PolicyLabs</title>
        <meta name="description" content="Administração da plataforma PolicyLabs" />
      </Head>

      {/* Header Navigation */}
      <header className="card-glass mx-6 mt-4 px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/logo.svg" alt="PolicyLabs" className="h-8 w-8" />
              <span className="text-xl font-bold">PolicyLabs</span>
            </Link>
            <span className="text-sm text-gray-600">
              Olá, {user?.full_name}
            </span>
          </div>

          <div className="flex items-center">
            <h1 className="text-xl font-semibold">Administração</h1>
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
            <Link href="/dashboard" className="btn-glass text-sm">
              Voltar
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-6 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">⚙️ Painel Administrativo</h1>

          {/* Platform Overview */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="card-glass p-6 text-center">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">2,341</h3>
              <p className="text-gray-600">Municípios Ativos</p>
            </div>
            <div className="card-glass p-6 text-center">
              <h3 className="text-2xl font-bold text-green-600 mb-2">127,453</h3>
              <p className="text-gray-600">Usuários</p>
            </div>
            <div className="card-glass p-6 text-center">
              <h3 className="text-2xl font-bold text-purple-600 mb-2">R$ 2.3M</h3>
              <p className="text-gray-600">MRR</p>
            </div>
            <div className="card-glass p-6 text-center">
              <h3 className="text-2xl font-bold text-yellow-600 mb-2">99.9%</h3>
              <p className="text-gray-600">Uptime</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Admin Modules */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">🛠️ Módulos de Administração</h2>

                <div className="grid md:grid-cols-3 gap-6">
                  <Link href="/admin/users" className="card-glass p-6 hover:scale-105 transition-all">
                    <h3 className="text-lg font-bold mb-3">👥 Gestão de Usuários</h3>
                    <p className="text-sm text-gray-600 mb-4">Gerenciar contas, permissões e acessos</p>
                    <div className="text-xs text-blue-600">127,453 usuários</div>
                  </Link>

                  <Link href="/admin/municipalities" className="card-glass p-6 hover:scale-105 transition-all">
                    <h3 className="text-lg font-bold mb-3">🏛️ Municípios</h3>
                    <p className="text-sm text-gray-600 mb-4">Configurações e status dos municípios</p>
                    <div className="text-xs text-green-600">2,341 ativos</div>
                  </Link>

                  <Link href="/admin/billing" className="card-glass p-6 hover:scale-105 transition-all">
                    <h3 className="text-lg font-bold mb-3">💳 Faturamento</h3>
                    <p className="text-sm text-gray-600 mb-4">Gestão de assinaturas e pagamentos</p>
                    <div className="text-xs text-purple-600">R$ 2.3M MRR</div>
                  </Link>

                  <Link href="/admin/system" className="card-glass p-6 hover:scale-105 transition-all">
                    <h3 className="text-lg font-bold mb-3">🖥️ Sistema</h3>
                    <p className="text-sm text-gray-600 mb-4">Monitoramento e configurações</p>
                    <div className="text-xs text-green-600">Sistema saudável</div>
                  </Link>

                  <Link href="/admin/support" className="card-glass p-6 hover:scale-105 transition-all">
                    <h3 className="text-lg font-bold mb-3">🎧 Suporte</h3>
                    <p className="text-sm text-gray-600 mb-4">Tickets e atendimento ao cliente</p>
                    <div className="text-xs text-yellow-600">23 tickets abertos</div>
                  </Link>

                  <Link href="/admin/analytics" className="card-glass p-6 hover:scale-105 transition-all">
                    <h3 className="text-lg font-bold mb-3">📊 Analytics</h3>
                    <p className="text-sm text-gray-600 mb-4">Métricas de uso e performance</p>
                    <div className="text-xs text-blue-600">Quadros ativos</div>
                  </Link>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">📋 Atividade Recente</h2>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg">
                    <span className="text-2xl">🏛️</span>
                    <div className="flex-1">
                      <h3 className="font-semibold">Novo município registrado</h3>
                      <p className="text-sm text-gray-600">Prefeitura de Nova Esperança - RS se registrou no plano Starter</p>
                      <p className="text-xs text-gray-500">há 15 minutos</p>
                    </div>
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">+R$ 20k/mês</span>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg">
                    <span className="text-2xl">⚠️</span>
                    <div className="flex-1">
                      <h3 className="font-semibold">Alerta de sistema</h3>
                      <p className="text-sm text-gray-600">Uso de CPU acima de 80% no servidor de IA por 5 minutos</p>
                      <p className="text-xs text-gray-500">há 1 hora</p>
                    </div>
                    <span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs">Resolvido</span>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg">
                    <span className="text-2xl">💰</span>
                    <div className="flex-1">
                      <h3 className="font-semibold">Upgrade de plano</h3>
                      <p className="text-sm text-gray-600">Município de Joinville - SC migrou para plano Enterprise</p>
                      <p className="text-xs text-gray-500">há 3 horas</p>
                    </div>
                    <span className="bg-purple-500 text-white px-2 py-1 rounded text-xs">+R$ 130k/mês</span>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg">
                    <span className="text-2xl">🎧</span>
                    <div className="flex-1">
                      <h3 className="font-semibold">Ticket de suporte crítico</h3>
                      <p className="text-sm text-gray-600">Prefeitura de São Paulo reportou falha no módulo de orçamento</p>
                      <p className="text-xs text-gray-500">há 4 horas</p>
                    </div>
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-xs">Em andamento</span>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg">
                    <span className="text-2xl">🚀</span>
                    <div className="flex-1">
                      <h3 className="font-semibold">Deploy realizado</h3>
                      <p className="text-sm text-gray-600">Versão 2.3.1 com melhorias no PolicyDNA™ foi para produção</p>
                      <p className="text-xs text-gray-500">há 6 horas</p>
                    </div>
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">Sucesso</span>
                  </div>
                </div>
              </div>

              {/* System Health */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">🩺 Saúde do Sistema</h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Serviços</h3>
                    <div className="space-y-3">
                      {[
                        { service: "API Gateway", status: "online", uptime: "99.9%" },
                        { service: "PolicyDNA™ AI", status: "online", uptime: "99.7%" },
                        { service: "Banco de Dados", status: "online", uptime: "99.9%" },
                        { service: "Sistema de Pagamentos", status: "online", uptime: "99.8%" },
                        { service: "Notificações", status: "warning", uptime: "97.2%" }
                      ].map((item, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-white/10 rounded">
                          <div className="flex items-center space-x-2">
                            <div className={`w-3 h-3 rounded-full ${
                              item.status === 'online' ? 'bg-green-500' :
                              item.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                            }`}></div>
                            <span className="font-medium">{item.service}</span>
                          </div>
                          <span className="text-sm font-bold">{item.uptime}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Métricas de Performance</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>CPU Usage</span>
                          <span>67%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{width: '67%'}}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Memory Usage</span>
                          <span>54%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{width: '54%'}}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Storage Usage</span>
                          <span>78%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-yellow-600 h-2 rounded-full" style={{width: '78%'}}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Network I/O</span>
                          <span>23%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{width: '23%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">⚡ Ações Rápidas</h3>
                <div className="space-y-2">
                  <button className="btn-glass w-full text-sm">🆕 Criar Município</button>
                  <button className="btn-glass w-full text-sm">👤 Novo Usuário Admin</button>
                  <button className="btn-glass w-full text-sm">🚀 Deploy Manual</button>
                  <button className="btn-glass w-full text-sm">📊 Relatório Executivo</button>
                  <button className="btn-glass w-full text-sm">🔄 Backup Sistema</button>
                </div>
              </div>

              {/* Recent Alerts */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">🚨 Alertas Ativos</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-red-100 text-red-800 rounded-lg">
                    <div className="font-semibold text-sm">🔥 Crítico</div>
                    <div className="text-xs">3 tickets críticos não resolvidos</div>
                  </div>

                  <div className="p-3 bg-yellow-100 text-yellow-800 rounded-lg">
                    <div className="font-semibold text-sm">⚠️ Atenção</div>
                    <div className="text-xs">Storage acima de 75%</div>
                  </div>

                  <div className="p-3 bg-blue-100 text-blue-800 rounded-lg">
                    <div className="font-semibold text-sm">ℹ️ Info</div>
                    <div className="text-xs">Manutenção programada para domingo</div>
                  </div>
                </div>
              </div>

              {/* Financial Summary */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">💰 Resumo Financeiro</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">MRR</span>
                    <span className="font-bold text-green-600">R$ 2.34M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Churn Rate</span>
                    <span className="font-bold text-red-600">2.3%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">LTV</span>
                    <span className="font-bold text-blue-600">R$ 890k</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">CAC</span>
                    <span className="font-bold text-purple-600">R$ 45k</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">LTV/CAC</span>
                    <span className="font-bold text-green-600">19.8x</span>
                  </div>
                </div>
              </div>

              {/* Top Customers */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">🏆 Top Clientes</h3>
                <div className="space-y-3">
                  {[
                    { name: "São Paulo - SP", plan: "Federal", value: "R$ 2M" },
                    { name: "Rio de Janeiro - RJ", plan: "Enterprise", value: "R$ 150k" },
                    { name: "Brasília - DF", plan: "Enterprise", value: "R$ 150k" },
                    { name: "Salvador - BA", plan: "Enterprise", value: "R$ 150k" },
                    { name: "Fortaleza - CE", plan: "Professional", value: "R$ 50k" }
                  ].map((customer, index) => (
                    <div key={index} className="flex justify-between items-center p-2 bg-white/10 rounded">
                      <div>
                        <div className="font-semibold text-sm">{customer.name}</div>
                        <div className="text-xs text-gray-600">{customer.plan}</div>
                      </div>
                      <div className="font-bold text-green-600 text-sm">{customer.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}