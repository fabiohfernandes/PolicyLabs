import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function LiquidDemocracyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-violet-50">
      <Head>
        <title>Liquid Democracy System - PolicyLabs APSS</title>
        <meta name="description" content="Flexible democracy with delegation and direct participation options" />
      </Head>

      {/* Header Navigation */}
      <nav className="nav-glass px-6 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="PolicyLabs" className="h-8 w-8" />
            <span className="text-xl font-bold">PolicyLabs APSS</span>
          </Link>

          <div className="flex items-center space-x-4">
            <span className="text-sm">Liquid Democracy</span>
            <Link href="/dashboard" className="btn-glass">← Dashboard</Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">💧 Liquid Democracy System</h1>

          {/* Tier Access Control */}
          <div className="card-glass p-6 mb-8 bg-gradient-to-r from-indigo-100 to-violet-100">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">⚡</span>
              <div>
                <h2 className="text-xl font-bold text-indigo-800">Enterprise+ Feature</h2>
                <p className="text-indigo-600">Advanced liquid democracy system available for Enterprise and Federal tiers</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Democracy Dashboard */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">🗳️ Your Democracy Dashboard</h2>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">Direct</div>
                    <div className="text-sm">Participation Mode</div>
                    <div className="text-xs text-gray-600 mt-1">You vote directly on issues</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">23</div>
                    <div className="text-sm">Delegations Received</div>
                    <div className="text-xs text-gray-600 mt-1">Others trust your judgment</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">5</div>
                    <div className="text-sm">Delegations Given</div>
                    <div className="text-xs text-gray-600 mt-1">You delegate to experts</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-white/10 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">📊 Your Delegation Network</h3>

                    <div className="space-y-4">
                      <div className="p-3 bg-blue-100 rounded">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-blue-800">Education Policy</span>
                          <span className="text-sm text-blue-600">Delegated to Ana Santos</span>
                        </div>
                        <div className="text-xs text-blue-600">
                          Teacher with 15 years experience • Trust score: 94%
                        </div>
                        <div className="mt-2 flex space-x-2">
                          <button className="btn-glass text-xs">Revoke</button>
                          <button className="btn-glass text-xs">View Votes</button>
                        </div>
                      </div>

                      <div className="p-3 bg-green-100 rounded">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-green-800">Environment</span>
                          <span className="text-sm text-green-600">Delegated to Dr. Carlos Lima</span>
                        </div>
                        <div className="text-xs text-green-600">
                          Environmental Engineer • Trust score: 89%
                        </div>
                        <div className="mt-2 flex space-x-2">
                          <button className="btn-glass text-xs">Revoke</button>
                          <button className="btn-glass text-xs">View Votes</button>
                        </div>
                      </div>

                      <div className="p-3 bg-purple-100 rounded">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-purple-800">Healthcare</span>
                          <span className="text-sm text-purple-600">Direct Participation</span>
                        </div>
                        <div className="text-xs text-purple-600">
                          You vote directly on healthcare issues
                        </div>
                        <div className="mt-2 flex space-x-2">
                          <button className="btn-glass text-xs">Find Delegate</button>
                          <button className="btn-glass text-xs">My Votes</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-white/10 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">👥 Who Delegates to You</h3>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-2 bg-white/20 rounded">
                        <div>
                          <div className="font-semibold text-sm">Technology Policy</div>
                          <div className="text-xs text-gray-600">8 citizens delegate to you</div>
                        </div>
                        <span className="font-bold text-blue-600">8 votes</span>
                      </div>

                      <div className="flex justify-between items-center p-2 bg-white/20 rounded">
                        <div>
                          <div className="font-semibold text-sm">Urban Planning</div>
                          <div className="text-xs text-gray-600">12 citizens delegate to you</div>
                        </div>
                        <span className="font-bold text-green-600">12 votes</span>
                      </div>

                      <div className="flex justify-between items-center p-2 bg-white/20 rounded">
                        <div>
                          <div className="font-semibold text-sm">Economic Development</div>
                          <div className="text-xs text-gray-600">3 citizens delegate to you</div>
                        </div>
                        <span className="font-bold text-purple-600">3 votes</span>
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-yellow-100 rounded">
                      <div className="font-semibold text-yellow-800 text-sm">Responsibility Notice</div>
                      <div className="text-xs text-yellow-700">
                        23 citizens trust your judgment. Vote thoughtfully and transparently.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Active Votes */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">🗳️ Active Votes</h2>

                <div className="space-y-6">
                  <div className="p-6 bg-white/10 rounded-lg border-l-4 border-red-500">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">Aumento do IPTU para Melhorias Urbanas</h3>
                        <p className="text-sm text-gray-600">Proposta de aumento de 15% no IPTU para financiar obras de infraestrutura</p>
                      </div>
                      <div className="text-right">
                        <span className="bg-red-500 text-white px-2 py-1 rounded text-xs">Ending in 2 days</span>
                        <div className="text-sm text-gray-600 mt-1">Category: Economic Policy</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm font-medium mb-2">Your Voting Power</div>
                      <div className="flex items-center space-x-4 text-sm">
                        <span>Your vote: 1</span>
                        <span>Delegated to you: 8</span>
                        <span className="font-bold">Total power: 9 votes</span>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="p-3 bg-green-100 rounded">
                        <div className="font-semibold text-green-800">✓ A Favor (43%)</div>
                        <div className="text-sm text-green-600">2,847 votes • Weighted: 41%</div>
                      </div>
                      <div className="p-3 bg-red-100 rounded">
                        <div className="font-semibold text-red-800">✗ Contra (57%)</div>
                        <div className="text-sm text-red-600">3,789 votes • Weighted: 59%</div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className="btn-glass bg-green-500 text-white">✓ Votar A Favor</button>
                      <button className="btn-glass bg-red-500 text-white">✗ Votar Contra</button>
                      <button className="btn-glass">🔄 Delegar Voto</button>
                      <button className="btn-glass">📊 Ver Detalhes</button>
                    </div>
                  </div>

                  <div className="p-6 bg-white/10 rounded-lg border-l-4 border-blue-500">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">Programa Municipal de Energia Solar</h3>
                        <p className="text-sm text-gray-600">Incentivos fiscais para instalação de painéis solares em residências</p>
                      </div>
                      <div className="text-right">
                        <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">5 days remaining</span>
                        <div className="text-sm text-gray-600 mt-1">Category: Environment</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm font-medium mb-2">Delegation Status</div>
                      <div className="p-2 bg-blue-100 rounded text-sm">
                        <span className="text-blue-800">Delegated to Dr. Carlos Lima (Environmental Engineer)</span>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="p-3 bg-green-100 rounded text-center">
                        <div className="font-semibold text-green-800">Aprovo Totalmente</div>
                        <div className="text-sm text-green-600">67%</div>
                      </div>
                      <div className="p-3 bg-yellow-100 rounded text-center">
                        <div className="font-semibold text-yellow-800">Aprovo com Modificações</div>
                        <div className="text-sm text-yellow-600">28%</div>
                      </div>
                      <div className="p-3 bg-red-100 rounded text-center">
                        <div className="font-semibold text-red-800">Rejeito</div>
                        <div className="text-sm text-red-600">5%</div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className="btn-glass">📊 Ver Voto do Delegado</button>
                      <button className="btn-glass">🔄 Votar Diretamente</button>
                      <button className="btn-glass">💬 Comentar</button>
                    </div>
                  </div>

                  <div className="p-6 bg-white/10 rounded-lg border-l-4 border-green-500">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">Criação de Espaços Pet-Friendly</h3>
                        <p className="text-sm text-gray-600">Desenvolvimento de áreas públicas que aceitem animais de estimação</p>
                      </div>
                      <div className="text-right">
                        <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">Voted</span>
                        <div className="text-sm text-gray-600 mt-1">Category: Urban Planning</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm font-medium mb-2">Your Vote History</div>
                      <div className="p-2 bg-green-100 rounded text-sm">
                        <span className="text-green-800">You voted: ✓ A Favor (using 12 delegated votes)</span>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="p-3 bg-green-100 rounded">
                        <div className="font-semibold text-green-800">✓ A Favor (78%)</div>
                        <div className="text-sm text-green-600">5,234 votes • Weighted: 76%</div>
                      </div>
                      <div className="p-3 bg-red-100 rounded">
                        <div className="font-semibold text-red-800">✗ Contra (22%)</div>
                        <div className="text-sm text-red-600">1,478 votes • Weighted: 24%</div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className="btn-glass">📊 Ver Resultados</button>
                      <button className="btn-glass">💬 Comentários</button>
                      <button className="btn-glass">📈 Impact Analysis</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Delegation Marketplace */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">🏪 Delegation Marketplace</h2>

                <div className="mb-6">
                  <p className="text-gray-600">Find trusted experts to delegate your vote on specific topics</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 bg-white/10 rounded-lg">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">AS</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Ana Santos</h4>
                        <div className="text-sm text-gray-600">Education Specialist</div>
                      </div>
                    </div>

                    <div className="space-y-2 mb-3">
                      <div className="flex justify-between text-sm">
                        <span>Trust Score:</span>
                        <span className="font-bold text-green-600">94%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Delegators:</span>
                        <span className="font-bold">847</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Expertise:</span>
                        <span className="font-bold">Education</span>
                      </div>
                    </div>

                    <div className="text-xs text-gray-600 mb-3">
                      "15 years as teacher, MA in Education Policy. Focused on inclusive education and technology integration."
                    </div>

                    <div className="flex space-x-2">
                      <button className="btn-glass text-xs flex-1">👥 Delegate</button>
                      <button className="btn-glass text-xs">📊 Profile</button>
                    </div>
                  </div>

                  <div className="p-4 bg-white/10 rounded-lg">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">CL</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Dr. Carlos Lima</h4>
                        <div className="text-sm text-gray-600">Environmental Engineer</div>
                      </div>
                    </div>

                    <div className="space-y-2 mb-3">
                      <div className="flex justify-between text-sm">
                        <span>Trust Score:</span>
                        <span className="font-bold text-green-600">89%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Delegators:</span>
                        <span className="font-bold">623</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Expertise:</span>
                        <span className="font-bold">Environment</span>
                      </div>
                    </div>

                    <div className="text-xs text-gray-600 mb-3">
                      "PhD Environmental Engineering, 20 years experience in sustainable development and climate policy."
                    </div>

                    <div className="flex space-x-2">
                      <button className="btn-glass-primary text-xs flex-1">✓ Delegated</button>
                      <button className="btn-glass text-xs">📊 Profile</button>
                    </div>
                  </div>

                  <div className="p-4 bg-white/10 rounded-lg">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">MR</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Maria Rodriguez</h4>
                        <div className="text-sm text-gray-600">Public Health</div>
                      </div>
                    </div>

                    <div className="space-y-2 mb-3">
                      <div className="flex justify-between text-sm">
                        <span>Trust Score:</span>
                        <span className="font-bold text-green-600">92%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Delegators:</span>
                        <span className="font-bold">1,234</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Expertise:</span>
                        <span className="font-bold">Healthcare</span>
                      </div>
                    </div>

                    <div className="text-xs text-gray-600 mb-3">
                      "Doctor, epidemiologist, former health secretary. Specialist in preventive medicine and public health policy."
                    </div>

                    <div className="flex space-x-2">
                      <button className="btn-glass text-xs flex-1">👥 Delegate</button>
                      <button className="btn-glass text-xs">📊 Profile</button>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <button className="btn-glass-primary">🔍 Browse All Experts</button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Your Democracy Stats */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">📊 Your Democracy</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">67%</div>
                    <div className="text-sm text-gray-600">Direct Participation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">94%</div>
                    <div className="text-sm text-gray-600">Trust Score</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">156</div>
                    <div className="text-sm text-gray-600">Votes Cast</div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">⚡ Quick Actions</h3>
                <div className="space-y-2">
                  <button className="btn-glass w-full text-sm">🗳️ View Active Votes</button>
                  <button className="btn-glass w-full text-sm">👥 Manage Delegations</button>
                  <button className="btn-glass w-full text-sm">🔍 Find Experts</button>
                  <button className="btn-glass w-full text-sm">📊 My Democracy Report</button>
                </div>
              </div>

              {/* Trust Network */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">🤝 Trust Network</h3>
                <div className="space-y-3">
                  <div className="text-sm">
                    <div className="flex justify-between">
                      <span>Direct Connections:</span>
                      <span className="font-bold">28</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Network Reach:</span>
                      <span className="font-bold">1,847</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Trust Received:</span>
                      <span className="font-bold text-green-600">High</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expertise Areas */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">🎯 Your Expertise</h3>
                <div className="space-y-2">
                  <div className="p-2 bg-blue-100 rounded text-sm">
                    <div className="font-semibold text-blue-800">Technology Policy</div>
                    <div className="text-xs text-blue-600">8 delegators</div>
                  </div>
                  <div className="p-2 bg-green-100 rounded text-sm">
                    <div className="font-semibold text-green-800">Urban Planning</div>
                    <div className="text-xs text-green-600">12 delegators</div>
                  </div>
                  <div className="p-2 bg-purple-100 rounded text-sm">
                    <div className="font-semibold text-purple-800">Economic Development</div>
                    <div className="text-xs text-purple-600">3 delegators</div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">📅 Recent Activity</h3>
                <div className="space-y-3">
                  <div className="text-sm">
                    <div className="font-semibold">Voted on IPTU proposal</div>
                    <div className="text-xs text-gray-600">Using 9 votes • 2 hours ago</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">Received new delegation</div>
                    <div className="text-xs text-gray-600">Urban Planning • 1 day ago</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">Updated delegation to Ana Santos</div>
                    <div className="text-xs text-gray-600">Education Policy • 3 days ago</div>
                  </div>
                </div>
              </div>

              {/* Democracy Health */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">💚 Democracy Health</h3>
                <div className="text-sm space-y-2">
                  <div>
                    <span className="text-gray-500">Participation Rate:</span>
                    <span className="font-bold ml-2 text-green-600">78%</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Trust Diversity:</span>
                    <span className="font-bold ml-2 text-blue-600">High</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Expert Quality:</span>
                    <span className="font-bold ml-2 text-purple-600">92%</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Transparency:</span>
                    <span className="font-bold ml-2 text-orange-600">Excellent</span>
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