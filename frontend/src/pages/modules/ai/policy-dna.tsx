import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function PolicyDNAPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Head>
        <title>PolicyDNA™ Engine - PolicyLabs</title>
        <meta name="description" content="Sistema de recomendações inteligentes baseado em machine learning" />
      </Head>

      {/* Header Navigation */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/logo.svg" alt="PolicyLabs" className="h-8 w-8" />
              <span className="text-xl font-bold">PolicyLabs</span>
            </Link>
            <div className="h-6 w-px bg-gray-300" />
            <div>
              <h1 className="text-lg font-semibold text-gray-900">🧬 PolicyDNA™</h1>
              <p className="text-sm text-gray-500">Motor de Recomendações Inteligentes</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-500">
              Ao vivo 20/09/2025, 17:13:05
            </div>
            <button className="btn-glass">
              👤 Usuário
            </button>
            <Link href="/dashboard" className="btn-glass text-sm">
              ↩️ Voltar
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-6 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Tier Access Control */}
          <div className="card-glass p-6 mb-8 bg-gradient-to-r from-purple-100 to-indigo-100">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">⚡</span>
              <div>
                <h2 className="text-xl font-bold text-purple-800">Funcionalidade Enterprise+</h2>
                <p className="text-purple-600">Recomendações de políticas baseadas em IA disponíveis para planos Enterprise e Federal</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Policy Search & Recommendations */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">🔍 Busca Inteligente de Políticas</h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Descreva seu Desafio de Política Pública</label>
                    <textarea
                      className="input-glass h-32"
                      placeholder="Ex: Precisamos melhorar a educação infantil com orçamento limitado..."
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Municipality Size</label>
                      <select className="input-glass">
                        <option>Small (0-20k)</option>
                        <option>Medium (20k-100k)</option>
                        <option>Large (100k-500k)</option>
                        <option>Metropolis (500k+)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Faixa Orçamentária</label>
                      <select className="input-glass">
                        <option>R$ 0 - R$ 100k</option>
                        <option>R$ 100k - R$ 1M</option>
                        <option>R$ 1M - R$ 10M</option>
                        <option>R$ 10M+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Priority Level</label>
                      <select className="input-glass">
                        <option>High Priority</option>
                        <option>Medium Priority</option>
                        <option>Long-term Goal</option>
                      </select>
                    </div>
                  </div>

                  <button className="btn-glass-primary w-full py-3 text-lg">
                    🧬 Generate PolicyDNA™ Recommendations
                  </button>
                </div>
              </div>

              {/* AI Recommendations */}
              <div className="card-glass p-8">
                <h3 className="text-xl font-bold mb-6">🎯 AI-Powered Recommendations</h3>

                <div className="space-y-6">
                  {/* Top Recommendation */}
                  <div className="p-6 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg border-l-4 border-green-500">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-green-800">Early Childhood Education Program</h4>
                        <p className="text-sm text-green-600">Based on 247 similar municipalities</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-700">94%</div>
                        <div className="text-xs text-green-600">Success Rate</div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="text-center p-3 bg-white/50 rounded">
                        <div className="font-bold text-green-700">R$ 2.3M</div>
                        <div className="text-sm">Avg Investment</div>
                      </div>
                      <div className="text-center p-3 bg-white/50 rounded">
                        <div className="font-bold text-blue-700">18 months</div>
                        <div className="text-sm">Implementação</div>
                      </div>
                      <div className="text-center p-3 bg-white/50 rounded">
                        <div className="font-bold text-purple-700">847</div>
                        <div className="text-sm">Children Impacted</div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className="btn-glass">📊 View Details</button>
                      <button className="btn-glass">📋 Create Project</button>
                      <button className="btn-glass">🏘️ Similar Cases</button>
                    </div>
                  </div>

                  {/* Alternative Recommendations */}
                  <div className="space-y-4">
                    <div className="p-4 bg-white/10 rounded-lg">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold">Community Learning Centers</h4>
                          <p className="text-sm text-gray-600">Lower cost, community-driven approach</p>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-blue-600">87%</div>
                          <div className="text-xs">Success Rate</div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-white/10 rounded-lg">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold">Public-Private Partnership Model</h4>
                          <p className="text-sm text-gray-600">Shared investment with private sector</p>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-purple-600">82%</div>
                          <div className="text-xs">Success Rate</div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-white/10 rounded-lg">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold">Mobile Education Units</h4>
                          <p className="text-sm text-gray-600">Flexible approach for rural areas</p>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-green-600">79%</div>
                          <div className="text-xs">Success Rate</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Machine Learning Insights */}
              <div className="card-glass p-8">
                <h3 className="text-xl font-bold mb-6">🤖 Machine Learning Insights</h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-white/10 rounded-lg">
                    <h4 className="text-lg font-semibold mb-4">Análise de Fatores de Sucesso</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Engajamento Comunitário</span>
                        <span className="font-bold text-green-600">92% correlação</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Parcerias Locais</span>
                        <span className="font-bold text-blue-600">87% correlação</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Implementação Faseada</span>
                        <span className="font-bold text-purple-600">84% correlação</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Teacher Training</span>
                        <span className="font-bold text-orange-600">81% correlação</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-white/10 rounded-lg">
                    <h4 className="text-lg font-semibold mb-4">Risk Factors</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Orçamento Insuficiente</span>
                        <span className="font-bold text-red-600">67% risk</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Political Changes</span>
                        <span className="font-bold text-yellow-600">45% risk</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Lack of Infrastructure</span>
                        <span className="font-bold text-orange-600">38% risk</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Resistência Comunitária</span>
                        <span className="font-bold text-gray-600">23% risk</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* AI Engine Status */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">🧠 AI Engine Status</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Knowledge Base</span>
                      <span>15,247 policies</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Model Accuracy</span>
                      <span>94.7%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '94.7%'}}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Processing Speed</span>
                      <span>Real-time</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-green-100 rounded text-center">
                  <div className="font-bold text-green-800">AI Ready</div>
                  <div className="text-xs text-green-600">Last updated: 2 hours ago</div>
                </div>
              </div>

              {/* Training Data */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">📊 Training Data</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Successful Projects</span>
                    <span className="font-bold">12,847</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Failed Projects</span>
                    <span className="font-bold">2,156</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Municipalities</span>
                    <span className="font-bold">3,247</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Policy Categories</span>
                    <span className="font-bold">156</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">⚡ Ações Rápidas</h3>
                <div className="space-y-2">
                  <button className="btn-glass w-full text-sm">🔍 Busca Avançada</button>
                  <button className="btn-glass w-full text-sm">📈 Análise de Tendências</button>
                  <button className="btn-glass w-full text-sm">🏆 Melhores Práticas</button>
                  <button className="btn-glass w-full text-sm">📊 Relatório Personalizado</button>
                </div>
              </div>

              {/* Algorithm Info */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">🔬 Algorithm Details</h3>
                <div className="text-sm space-y-2">
                  <div>
                    <span className="text-gray-500">Model:</span>
                    <span className="font-bold ml-2">Neural Network + NLP</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Version:</span>
                    <span className="font-bold ml-2">PolicyDNA™ v3.2</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Last Training:</span>
                    <span className="font-bold ml-2">September 2025</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Confidence:</span>
                    <span className="font-bold ml-2 text-green-600">High (94.7%)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}