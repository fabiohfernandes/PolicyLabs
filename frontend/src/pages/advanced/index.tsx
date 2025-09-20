import React from 'react';
n<div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
import Head from 'next/head';
import Link from 'next/link';

export default function AdvancedModulesPage() {
  return (
    <>
      <Head>
        <title>Módulos Avançados - PolicyLabs APSS</title>
        <meta name="description" content="Módulos Professional e Enterprise para gestão avançada" />
      </Head>

      {/* Header Navigation */}
      <nav className="card-glass fixed top-0 w-full z-50 px-6 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="PolicyLabs" className="h-8 w-8" />
            <span className="text-xl font-bold">PolicyLabs APSS</span>
          </Link>

          <div className="flex items-center space-x-4">
            <span className="text-sm">Módulos Avançados</span>
            <Link href="/dashboard" className="btn-glass">← Dashboard</Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">🚀 Módulos Avançados</h1>

          {/* Access Level Warning */}
          <div className="card-glass p-6 mb-8 bg-gradient-to-r from-yellow-100 to-orange-100">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">⚡</span>
              <div>
                <h2 className="text-xl font-bold text-orange-800">Módulos Professional & Enterprise</h2>
                <p className="text-orange-600">Recursos avançados para municípios 50k+ habitantes</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Professional Modules */}
            <div className="lg:col-span-2 space-y-8">
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">💼 Módulos Professional (50k-100k hab.)</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <Link href="/advanced/predictive-analytics" className="card-glass p-6 hover:scale-105 transition-all">
                    <h3 className="text-lg font-bold mb-3">📊 Analytics Preditivo</h3>
                    <p className="text-sm text-gray-600 mb-4">Predição de tendências e cenários futuros com IA</p>
                    <div className="text-xs text-blue-600">Professional+</div>
                  </Link>

                  <Link href="/advanced/policy-automation" className="card-glass p-6 hover:scale-105 transition-all">
                    <h3 className="text-lg font-bold mb-3">🤖 Automação de Políticas</h3>
                    <p className="text-sm text-gray-600 mb-4">Execução automatizada de políticas recorrentes</p>
                    <div className="text-xs text-blue-600">Professional+</div>
                  </Link>

                  <Link href="/advanced/advanced-simulation" className="card-glass p-6 hover:scale-105 transition-all">
                    <h3 className="text-lg font-bold mb-3">🎯 Simulação Avançada</h3>
                    <p className="text-sm text-gray-600 mb-4">Cenários complexos e análise de impacto</p>
                    <div className="text-xs text-blue-600">Professional+</div>
                  </Link>

                  <Link href="/advanced/integration-apis" className="card-glass p-6 hover:scale-105 transition-all">
                    <h3 className="text-lg font-bold mb-3">🔗 APIs de Integração</h3>
                    <p className="text-sm text-gray-600 mb-4">Conecte com sistemas municipais existentes</p>
                    <div className="text-xs text-blue-600">Professional+</div>
                  </Link>
                </div>
              </div>

              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">🏢 Módulos Enterprise (100k+ hab.)</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <Link href="/advanced/multi-city" className="card-glass p-6 hover:scale-105 transition-all">
                    <h3 className="text-lg font-bold mb-3">🌐 Gestão Multi-Municipal</h3>
                    <p className="text-sm text-gray-600 mb-4">Coordenação entre múltiplos municípios</p>
                    <div className="text-xs text-purple-600">Enterprise</div>
                  </Link>

                  <Link href="/advanced/custom-ai" className="card-glass p-6 hover:scale-105 transition-all">
                    <h3 className="text-lg font-bold mb-3">🧠 IA Personalizada</h3>
                    <p className="text-sm text-gray-600 mb-4">Modelos de IA treinados para sua cidade</p>
                    <div className="text-xs text-purple-600">Enterprise</div>
                  </Link>

                  <Link href="/advanced/private-cloud" className="card-glass p-6 hover:scale-105 transition-all">
                    <h3 className="text-lg font-bold mb-3">☁️ Nuvem Privada</h3>
                    <p className="text-sm text-gray-600 mb-4">Infraestrutura dedicada e isolada</p>
                    <div className="text-xs text-purple-600">Enterprise</div>
                  </Link>

                  <Link href="/advanced/compliance-suite" className="card-glass p-6 hover:scale-105 transition-all">
                    <h3 className="text-lg font-bold mb-3">⚖️ Suite de Compliance</h3>
                    <p className="text-sm text-gray-600 mb-4">Auditoria e conformidade automatizada</p>
                    <div className="text-xs text-purple-600">Enterprise</div>
                  </Link>

                  <Link href="/advanced/government-intelligence" className="card-glass p-6 hover:scale-105 transition-all">
                    <h3 className="text-lg font-bold mb-3">🕵️ Inteligência Governamental</h3>
                    <p className="text-sm text-gray-600 mb-4">Business Intelligence para gestão pública</p>
                    <div className="text-xs text-purple-600">Enterprise</div>
                  </Link>

                  <Link href="/advanced/crisis-management" className="card-glass p-6 hover:scale-105 transition-all">
                    <h3 className="text-lg font-bold mb-3">🚨 Gestão de Crises</h3>
                    <p className="text-sm text-gray-600 mb-4">Resposta rápida e coordenada a emergências</p>
                    <div className="text-xs text-purple-600">Enterprise</div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Upgrade Card */}
              <div className="card-glass p-6 bg-gradient-to-br from-blue-100 to-purple-100">
                <h3 className="text-lg font-bold mb-4">💎 Upgrade de Plano</h3>
                <p className="text-sm text-gray-600 mb-4">Seu município tem acesso limitado aos módulos avançados.</p>

                <div className="space-y-3 mb-6">
                  <div className="text-sm">
                    <span className="text-gray-500">Plano Atual:</span>
                    <span className="font-bold ml-2">Starter</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">Habitantes:</span>
                    <span className="font-bold ml-2">35,000</span>
                  </div>
                </div>

                <Link href="/pricing" className="btn-glass w-full">
                  Ver Planos Avançados
                </Link>
              </div>

              {/* Feature Comparison */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">📊 Comparação de Features</h3>

                <div className="space-y-4">
                  <div>
                    <div className="font-semibold text-sm mb-2">Starter (Atual)</div>
                    <div className="text-xs text-gray-600">
                      • PolicyDNA™ básico<br/>
                      • Gêmeo digital simples<br/>
                      • 5 projetos simultâneos
                    </div>
                  </div>

                  <div>
                    <div className="font-semibold text-sm mb-2 text-blue-600">Professional</div>
                    <div className="text-xs text-gray-600">
                      • Analytics preditivo<br/>
                      • Automação de políticas<br/>
                      • 50 projetos simultâneos<br/>
                      • APIs de integração
                    </div>
                  </div>

                  <div>
                    <div className="font-semibold text-sm mb-2 text-purple-600">Enterprise</div>
                    <div className="text-xs text-gray-600">
                      • Tudo do Professional<br/>
                      • IA personalizada<br/>
                      • Gestão multi-municipal<br/>
                      • Nuvem privada<br/>
                      • Projetos ilimitados
                    </div>
                  </div>
                </div>
              </div>

              {/* ROI Calculator */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">💰 Calculadora de ROI</h3>

                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium mb-1">Orçamento Anual</label>
                    <input
                      type="text"
                      className="w-full p-2 rounded bg-white/20 border border-white/30 text-sm"
                      placeholder="R$ 50.000.000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Economia Esperada</label>
                    <select className="w-full p-2 rounded bg-white/20 border border-white/30 text-sm">
                      <option>5% - Conservador</option>
                      <option>15% - Moderado</option>
                      <option>25% - Otimista</option>
                    </select>
                  </div>

                  <button className="btn-glass w-full text-sm">
                    Calcular ROI
                  </button>

                  <div className="mt-4 p-3 bg-green-100 rounded text-center">
                    <div className="font-bold text-green-800">ROI Projetado</div>
                    <div className="text-2xl font-bold text-green-600">340%</div>
                    <div className="text-xs text-green-600">em 12 meses</div>
                  </div>
                </div>
              </div>

              {/* Support */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">🎯 Suporte Especializado</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Módulos avançados incluem consultoria especializada.
                </p>

                <div className="space-y-2">
                  <button className="btn-glass w-full text-sm">📞 Agendar Demo</button>
                  <button className="btn-glass w-full text-sm">💬 Chat com Consultor</button>
                  <button className="btn-glass w-full text-sm">📧 Solicitar Proposta</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
</div>
}