import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function FederalQuadroPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Head>
        <title>Quadro Federal - PolicyLabs</title>
        <meta name="description" content="Coordenação federal de políticas municipais" />
      </Head>

      {/* Header Navigation */}
      <nav className="card-glass fixed top-0 w-full z-50 px-6 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <img src="/logo.svg" alt="PolicyLabs" className="h-8 w-8" />
            <span className="text-xl font-bold">PolicyLabs APSS Federal</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-sm">🇧🇷 Governo Federal</span>
            <Link href="/federal/profile" className="btn-glass">Perfil</Link>
            <button className="btn-glass">Sair</button>
          </div>
        </div>
      </nav>

      <main className="pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">🏛️ Quadro Federal</h1>

          {/* National Overview */}
          <div className="grid md:grid-cols-5 gap-6 mb-8">
            <div className="card-glass p-6 text-center">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">5,570</h3>
              <p className="text-gray-600">Municípios</p>
            </div>
            <div className="card-glass p-6 text-center">
              <h3 className="text-2xl font-bold text-green-600 mb-2">2,341</h3>
              <p className="text-gray-600">Conectados</p>
            </div>
            <div className="card-glass p-6 text-center">
              <h3 className="text-2xl font-bold text-purple-600 mb-2">127M</h3>
              <p className="text-gray-600">Cidadãos Impactados</p>
            </div>
            <div className="card-glass p-6 text-center">
              <h3 className="text-2xl font-bold text-yellow-600 mb-2">R$ 2.8T</h3>
              <p className="text-gray-600">Orçamento Coordenado</p>
            </div>
            <div className="card-glass p-6 text-center">
              <h3 className="text-2xl font-bold text-red-600 mb-2">85%</h3>
              <p className="text-gray-600">Taxa de Sucesso</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Federal Programs */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">🎯 Programas Federais</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <Link href="/federal/education" className="card-glass p-6 hover:scale-105 transition-all">
                    <h3 className="text-lg font-bold mb-3">📚 Educação Nacional</h3>
                    <p className="text-sm text-gray-600 mb-4">Coordenação de políticas educacionais municipais</p>
                    <div className="text-xs text-blue-600">2,156 municípios participando</div>
                  </Link>

                  <Link href="/federal/health" className="card-glass p-6 hover:scale-105 transition-all">
                    <h3 className="text-lg font-bold mb-3">🏥 SUS Inteligente</h3>
                    <p className="text-sm text-gray-600 mb-4">Otimização da rede de saúde pública</p>
                    <div className="text-xs text-green-600">1,887 municípios participando</div>
                  </Link>

                  <Link href="/federal/infrastructure" className="card-glass p-6 hover:scale-105 transition-all">
                    <h3 className="text-lg font-bold mb-3">🏗️ Brasil Conectado</h3>
                    <p className="text-sm text-gray-600 mb-4">Infraestrutura digital e física</p>
                    <div className="text-xs text-purple-600">1,234 municípios participando</div>
                  </Link>

                  <Link href="/federal/environment" className="card-glass p-6 hover:scale-105 transition-all">
                    <h3 className="text-lg font-bold mb-3">🌳 Sustentabilidade</h3>
                    <p className="text-sm text-gray-600 mb-4">Políticas ambientais coordenadas</p>
                    <div className="text-xs text-green-600">892 municípios participando</div>
                  </Link>
                </div>
              </div>

              {/* Policy Coordination */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">🤝 Coordenação de Políticas</h2>

                <div className="space-y-6">
                  <div className="p-6 bg-white/10 rounded-lg">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">Marco Legal da Primeira Infância</h3>
                        <p className="text-sm text-gray-600">Implementação coordenada em 1,523 municípios</p>
                      </div>
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">87% Implementado</span>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="text-center p-3 bg-white/10 rounded">
                        <div className="font-bold text-green-600">1,523</div>
                        <div className="text-sm">Municípios</div>
                      </div>
                      <div className="text-center p-3 bg-white/10 rounded">
                        <div className="font-bold text-blue-600">2.3M</div>
                        <div className="text-sm">Crianças Impactadas</div>
                      </div>
                      <div className="text-center p-3 bg-white/10 rounded">
                        <div className="font-bold text-purple-600">R$ 4.2B</div>
                        <div className="text-sm">Investimento</div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className="btn-glass">Ver Detalhes</button>
                      <button className="btn-glass">Expandir Programa</button>
                    </div>
                  </div>

                  <div className="p-6 bg-white/10 rounded-lg">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">Programa Nacional de Mobilidade Urbana</h3>
                        <p className="text-sm text-gray-600">Coordenação de transporte público municipal</p>
                      </div>
                      <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">45% Implementado</span>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="text-center p-3 bg-white/10 rounded">
                        <div className="font-bold text-green-600">287</div>
                        <div className="text-sm">Municípios</div>
                      </div>
                      <div className="text-center p-3 bg-white/10 rounded">
                        <div className="font-bold text-blue-600">45M</div>
                        <div className="text-sm">Cidadãos Impactados</div>
                      </div>
                      <div className="text-center p-3 bg-white/10 rounded">
                        <div className="font-bold text-purple-600">R$ 12.8B</div>
                        <div className="text-sm">Investimento</div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className="btn-glass">Ver Detalhes</button>
                      <button className="btn-glass">Acelerar Implementação</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* National Analytics */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">📊 Analytics Nacional</h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Top 10 Políticas Mais Bem-Sucedidas</h3>
                    <div className="space-y-3">
                      {[
                        { name: "Programa Médico da Família", success: 94, cities: 1847 },
                        { name: "Creche Noturna Municipal", success: 91, cities: 1234 },
                        { name: "Ciclovia Integrada", success: 88, cities: 987 },
                        { name: "Horta Comunitária", success: 86, cities: 756 },
                        { name: "WiFi Público Gratuito", success: 83, cities: 2103 }
                      ].map((policy, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-white/10 rounded">
                          <div>
                            <div className="font-semibold text-sm">{policy.name}</div>
                            <div className="text-xs text-gray-600">{policy.cities} municípios</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-green-600">{policy.success}%</div>
                            <div className="text-xs text-gray-500">sucesso</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Regiões com Maior Engajamento</h3>
                    <div className="space-y-3">
                      {[
                        { region: "Sul", engagement: 78, cities: 567 },
                        { region: "Sudeste", engagement: 72, cities: 892 },
                        { region: "Centro-Oeste", engagement: 69, cities: 234 },
                        { region: "Nordeste", engagement: 65, cities: 456 },
                        { region: "Norte", engagement: 58, cities: 192 }
                      ].map((region, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-white/10 rounded">
                          <div>
                            <div className="font-semibold text-sm">Região {region.region}</div>
                            <div className="text-xs text-gray-600">{region.cities} municípios</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-blue-600">{region.engagement}%</div>
                            <div className="text-xs text-gray-500">engajamento</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">📈 Estatísticas Rápidas</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">42%</div>
                    <div className="text-sm text-gray-600">Municípios Conectados</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">R$ 340B</div>
                    <div className="text-sm text-gray-600">Economia Gerada</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">127M</div>
                    <div className="text-sm text-gray-600">Cidadãos Beneficiados</div>
                  </div>
                </div>
              </div>

              {/* Federal Alerts */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">🚨 Alertas Federais</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-yellow-100 text-yellow-800 rounded-lg">
                    <div className="font-semibold text-sm">⚠️ Atenção</div>
                    <div className="text-xs">234 municípios com baixa execução orçamentária</div>
                  </div>

                  <div className="p-3 bg-red-100 text-red-800 rounded-lg">
                    <div className="font-semibold text-sm">🚨 Urgente</div>
                    <div className="text-xs">45 municípios em situação fiscal crítica</div>
                  </div>

                  <div className="p-3 bg-blue-100 text-blue-800 rounded-lg">
                    <div className="font-semibold text-sm">💡 Oportunidade</div>
                    <div className="text-xs">156 municípios elegíveis para novo programa</div>
                  </div>
                </div>
              </div>

              {/* Federal Tools */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">🛠️ Ferramentas Federais</h3>
                <div className="space-y-2">
                  <Link href="/federal/coordination" className="btn-glass w-full text-sm">🤝 Central de Coordenação</Link>
                  <Link href="/federal/funding" className="btn-glass w-full text-sm">💰 Distribuição de Recursos</Link>
                  <Link href="/federal/monitoring" className="btn-glass w-full text-sm">📊 Monitoramento Nacional</Link>
                  <Link href="/federal/benchmarking" className="btn-glass w-full text-sm">🎯 Benchmarking Municipal</Link>
                  <Link href="/federal/reports" className="btn-glass w-full text-sm">📄 Relatórios Nacionais</Link>
                </div>
              </div>

              {/* Policy Lab */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">🔬 PolicyLab Federal</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Laboratório de inovação em políticas públicas.
                </p>

                <div className="space-y-3">
                  <div className="text-sm">
                    <span className="text-gray-500">Políticas em Teste:</span>
                    <span className="font-bold ml-2">23</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">Municípios Piloto:</span>
                    <span className="font-bold ml-2">127</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">Taxa de Aprovação:</span>
                    <span className="font-bold ml-2 text-green-600">78%</span>
                  </div>
                </div>

                <button className="btn-glass w-full mt-4 text-sm">
                  Acessar PolicyLab
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}