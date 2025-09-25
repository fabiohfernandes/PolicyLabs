import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function GovernmentIntelligencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <Head>
        <title>Government Intelligence Engine - PolicyLabs APSS</title>
        <meta name="description" content="Advanced analytics and predictive intelligence for government decision-making" />
      </Head>

      {/* Header Navigation */}
      <nav className="nav-glass px-6 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="PolicyLabs" className="h-8 w-8" />
            <span className="text-xl font-bold">PolicyLabs APSS</span>
          </Link>

          <div className="flex items-center space-x-4">
            <span className="text-sm">Government Intelligence</span>
            <Link href="/dashboard" className="btn-glass">← Dashboard</Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">🎯 Government Intelligence Engine</h1>

          {/* Tier Access Control */}
          <div className="card-glass p-6 mb-8 bg-gradient-to-r from-blue-100 to-cyan-100">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🔐</span>
              <div>
                <h2 className="text-xl font-bold text-blue-800">Federal Only Feature</h2>
                <p className="text-blue-600">Advanced government intelligence available exclusively for Federal tier</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Intelligence Dashboard */}
            <div className="lg:col-span-3 space-y-8">
              {/* National Overview */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">🌍 National Intelligence Overview</h2>

                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">85%</div>
                    <div className="text-sm">Policy Success Rate</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">2,341</div>
                    <div className="text-sm">Connected Cities</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">R$ 2.8T</div>
                    <div className="text-sm">Budget Managed</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">127M</div>
                    <div className="text-sm">Citizens Impacted</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">🚨 Active Alerts</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-red-100 text-red-800 rounded">
                        <div className="font-semibold text-sm">Critical: Budget Crisis</div>
                        <div className="text-xs">45 municipalities at risk</div>
                      </div>
                      <div className="p-3 bg-yellow-100 text-yellow-800 rounded">
                        <div className="font-semibold text-sm">Warning: Health System</div>
                        <div className="text-xs">234 cities need intervention</div>
                      </div>
                      <div className="p-3 bg-blue-100 text-blue-800 rounded">
                        <div className="font-semibold text-sm">Opportunity: Education</div>
                        <div className="text-xs">156 cities eligible for expansion</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">📈 Performance Trends</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Policy Effectiveness</span>
                        <span className="font-bold text-green-600">↗ +12%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Citizen Satisfaction</span>
                        <span className="font-bold text-blue-600">↗ +8%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Budget Efficiency</span>
                        <span className="font-bold text-purple-600">↗ +15%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Implementation Speed</span>
                        <span className="font-bold text-orange-600">↗ +23%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Predictive Analytics */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">🔮 Predictive Analytics</h2>

                <div className="space-y-6">
                  <div className="p-6 bg-white/10 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">🎯 Policy Impact Predictions</h3>

                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="p-4 bg-green-100 rounded">
                        <h4 className="font-semibold text-green-800">High Impact Potential</h4>
                        <div className="text-sm text-green-600 mt-2">
                          Early Childhood Education expansion to 456 cities
                        </div>
                        <div className="text-xs text-green-500 mt-1">Predicted ROI: +340%</div>
                      </div>

                      <div className="p-4 bg-yellow-100 rounded">
                        <h4 className="font-semibold text-yellow-800">Medium Risk</h4>
                        <div className="text-sm text-yellow-600 mt-2">
                          Urban Mobility reforms in metropolitan areas
                        </div>
                        <div className="text-xs text-yellow-500 mt-1">Success Probability: 67%</div>
                      </div>

                      <div className="p-4 bg-red-100 rounded">
                        <h4 className="font-semibold text-red-800">High Risk Alert</h4>
                        <div className="text-sm text-red-600 mt-2">
                          Housing policies in high-cost regions
                        </div>
                        <div className="text-xs text-red-500 mt-1">Failure Risk: 45%</div>
                      </div>
                    </div>

                    <button className="btn-glass">🔍 View Detailed Predictions</button>
                  </div>

                  <div className="p-6 bg-white/10 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">🌡️ Social Temperature Monitor</h3>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Regional Satisfaction Levels</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Sul</span>
                            <div className="flex items-center space-x-2">
                              <div className="w-20 bg-gray-200 rounded-full h-2">
                                <div className="bg-green-600 h-2 rounded-full" style={{width: '82%'}}></div>
                              </div>
                              <span className="text-sm font-bold">82%</span>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Sudeste</span>
                            <div className="flex items-center space-x-2">
                              <div className="w-20 bg-gray-200 rounded-full h-2">
                                <div className="bg-blue-600 h-2 rounded-full" style={{width: '78%'}}></div>
                              </div>
                              <span className="text-sm font-bold">78%</span>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Centro-Oeste</span>
                            <div className="flex items-center space-x-2">
                              <div className="w-20 bg-gray-200 rounded-full h-2">
                                <div className="bg-yellow-600 h-2 rounded-full" style={{width: '71%'}}></div>
                              </div>
                              <span className="text-sm font-bold">71%</span>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Nordeste</span>
                            <div className="flex items-center space-x-2">
                              <div className="w-20 bg-gray-200 rounded-full h-2">
                                <div className="bg-orange-600 h-2 rounded-full" style={{width: '65%'}}></div>
                              </div>
                              <span className="text-sm font-bold">65%</span>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Norte</span>
                            <div className="flex items-center space-x-2">
                              <div className="w-20 bg-gray-200 rounded-full h-2">
                                <div className="bg-red-600 h-2 rounded-full" style={{width: '58%'}}></div>
                              </div>
                              <span className="text-sm font-bold">58%</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Sentiment Trends</h4>
                        <div className="space-y-3">
                          <div className="p-2 bg-green-50 rounded">
                            <div className="text-sm font-semibold text-green-800">Positive Trends</div>
                            <div className="text-xs text-green-600">Education, Infrastructure</div>
                          </div>
                          <div className="p-2 bg-yellow-50 rounded">
                            <div className="text-sm font-semibold text-yellow-800">Neutral Trends</div>
                            <div className="text-xs text-yellow-600">Healthcare, Transportation</div>
                          </div>
                          <div className="p-2 bg-red-50 rounded">
                            <div className="text-sm font-semibold text-red-800">Negative Trends</div>
                            <div className="text-xs text-red-600">Security, Housing</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Strategic Intelligence */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">🧠 Strategic Intelligence</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-white/10 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">🎯 Priority Matrix</h3>
                    <div className="space-y-4">
                      <div className="p-3 border-l-4 border-red-500 bg-red-50">
                        <div className="font-semibold text-red-800">Urgent & Important</div>
                        <div className="text-sm text-red-600">Crisis response in 45 municipalities</div>
                      </div>
                      <div className="p-3 border-l-4 border-yellow-500 bg-yellow-50">
                        <div className="font-semibold text-yellow-800">Important, Not Urgent</div>
                        <div className="text-sm text-yellow-600">Infrastructure modernization program</div>
                      </div>
                      <div className="p-3 border-l-4 border-blue-500 bg-blue-50">
                        <div className="font-semibold text-blue-800">Urgent, Not Important</div>
                        <div className="text-sm text-blue-600">Administrative optimization</div>
                      </div>
                      <div className="p-3 border-l-4 border-gray-500 bg-gray-50">
                        <div className="font-semibold text-gray-800">Neither Urgent nor Important</div>
                        <div className="text-sm text-gray-600">Long-term planning initiatives</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-white/10 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">💡 Strategic Recommendations</h3>
                    <div className="space-y-4">
                      <div className="p-3 bg-blue-100 rounded">
                        <div className="font-semibold text-blue-800">Resource Optimization</div>
                        <div className="text-sm text-blue-600">Redistribute R$ 2.3B from low-impact to high-impact programs</div>
                        <div className="text-xs text-blue-500 mt-1">Potential Impact: +28% effectiveness</div>
                      </div>
                      <div className="p-3 bg-green-100 rounded">
                        <div className="font-semibold text-green-800">Cross-Municipal Collaboration</div>
                        <div className="text-sm text-green-600">Create 12 regional policy clusters for shared resources</div>
                        <div className="text-xs text-green-500 mt-1">Cost Savings: R$ 890M annually</div>
                      </div>
                      <div className="p-3 bg-purple-100 rounded">
                        <div className="font-semibold text-purple-800">Technology Integration</div>
                        <div className="text-sm text-purple-600">Accelerate digital transformation in 567 cities</div>
                        <div className="text-xs text-purple-500 mt-1">Efficiency Gain: +35%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Real-time Status */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">⚡ Real-time Status</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">Active</div>
                    <div className="text-sm text-gray-600">System Status</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">2.3s</div>
                    <div className="text-sm text-gray-600">Avg Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">99.7%</div>
                    <div className="text-sm text-gray-600">Uptime</div>
                  </div>
                </div>
              </div>

              {/* Data Sources */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">📊 Data Sources</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Municipal Systems</span>
                    <span className="font-bold text-green-600">2,341 connected</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Federal Databases</span>
                    <span className="font-bold text-blue-600">67 integrated</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Social Media</span>
                    <span className="font-bold text-purple-600">Real-time</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Economic Indicators</span>
                    <span className="font-bold text-orange-600">Daily updates</span>
                  </div>
                </div>
              </div>

              {/* Intelligence Tools */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">🛠️ Intelligence Tools</h3>
                <div className="space-y-2">
                  <button className="btn-glass w-full text-sm">🎯 Strategic Planner</button>
                  <button className="btn-glass w-full text-sm">📈 Trend Analyzer</button>
                  <button className="btn-glass w-full text-sm">🚨 Crisis Detector</button>
                  <button className="btn-glass w-full text-sm">💰 Resource Optimizer</button>
                </div>
              </div>

              {/* Security Level */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">🔒 Security Level</h3>
                <div className="text-center">
                  <div className="text-3xl mb-2">🛡️</div>
                  <div className="font-bold">Government Grade</div>
                  <div className="text-sm text-gray-600">End-to-end encryption</div>
                  <div className="text-sm text-gray-600">ISO 27001 certified</div>
                </div>
              </div>

              {/* Classification */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">📋 Classification</h3>
                <div className="text-sm space-y-2">
                  <div className="p-2 bg-red-100 text-red-800 rounded text-center">
                    <div className="font-bold">CONFIDENCIAL</div>
                    <div className="text-xs">Uso Governamental</div>
                  </div>
                  <div className="text-xs text-gray-600 text-center mt-2">
                    Acesso restrito a pessoal autorizado
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