import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function SentimentAnalysisPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      <Head>
        <title>Sentiment Analysis Engine - PolicyLabs APSS</title>
        <meta name="description" content="Real-time sentiment monitoring and social listening platform" />
      </Head>

      {/* Header Navigation */}
      <nav className="nav-glass px-6 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="PolicyLabs" className="h-8 w-8" />
            <span className="text-xl font-bold">PolicyLabs APSS</span>
          </Link>

          <div className="flex items-center space-x-4">
            <span className="text-sm">Sentiment Analysis</span>
            <Link href="/dashboard" className="btn-glass">← Dashboard</Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">💭 Sentiment Analysis Engine</h1>

          {/* Tier Access Control */}
          <div className="card-glass p-6 mb-8 bg-gradient-to-r from-pink-100 to-rose-100">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">⚡</span>
              <div>
                <h2 className="text-xl font-bold text-pink-800">Enterprise+ Feature</h2>
                <p className="text-pink-600">Advanced sentiment monitoring available for Enterprise and Federal tiers</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Real-time Sentiment Overview */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">📊 Real-time Sentiment Overview</h2>

                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">78%</div>
                    <div className="text-sm">Overall Positive</div>
                    <div className="text-xs text-green-600">↗ +5% this week</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">2.3K</div>
                    <div className="text-sm">Daily Mentions</div>
                    <div className="text-xs text-blue-600">↗ +12% vs last week</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">94%</div>
                    <div className="text-sm">Accuracy Rate</div>
                    <div className="text-xs text-purple-600">ML confidence</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">156</div>
                    <div className="text-sm">Active Topics</div>
                    <div className="text-xs text-orange-600">Being monitored</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-white/10 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">😊 Sentiment Distribution</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <span className="text-green-600">😊</span>
                          <span className="text-sm">Positive</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div className="bg-green-600 h-2 rounded-full" style={{width: '78%'}}></div>
                          </div>
                          <span className="font-bold text-green-600">78%</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-600">😐</span>
                          <span className="text-sm">Neutral</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div className="bg-gray-600 h-2 rounded-full" style={{width: '15%'}}></div>
                          </div>
                          <span className="font-bold text-gray-600">15%</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <span className="text-red-600">😞</span>
                          <span className="text-sm">Negative</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div className="bg-red-600 h-2 rounded-full" style={{width: '7%'}}></div>
                          </div>
                          <span className="font-bold text-red-600">7%</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-green-100 rounded">
                      <div className="font-semibold text-green-800 text-sm">Strong Positive Trend</div>
                      <div className="text-xs text-green-600">Sentiment improved by 23% over last month</div>
                    </div>
                  </div>

                  <div className="p-6 bg-white/10 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">📱 Source Distribution</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-2 bg-blue-100 rounded">
                        <div className="flex items-center space-x-2">
                          <span>📘</span>
                          <span className="text-sm">Facebook</span>
                        </div>
                        <span className="font-bold text-blue-600">45%</span>
                      </div>

                      <div className="flex justify-between items-center p-2 bg-cyan-100 rounded">
                        <div className="flex items-center space-x-2">
                          <span>🐦</span>
                          <span className="text-sm">Twitter</span>
                        </div>
                        <span className="font-bold text-cyan-600">28%</span>
                      </div>

                      <div className="flex justify-between items-center p-2 bg-purple-100 rounded">
                        <div className="flex items-center space-x-2">
                          <span>📸</span>
                          <span className="text-sm">Instagram</span>
                        </div>
                        <span className="font-bold text-purple-600">15%</span>
                      </div>

                      <div className="flex justify-between items-center p-2 bg-gray-100 rounded">
                        <div className="flex items-center space-x-2">
                          <span>📰</span>
                          <span className="text-sm">News Sites</span>
                        </div>
                        <span className="font-bold text-gray-600">12%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Topic-based Sentiment */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">🏷️ Topic-based Sentiment Analysis</h2>

                <div className="space-y-6">
                  <div className="p-6 bg-white/10 rounded-lg border-l-4 border-green-500">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">Educação Municipal</h3>
                        <p className="text-sm text-gray-600">Public education programs and school initiatives</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2">
                          <span className="text-green-600">😊</span>
                          <span className="font-bold text-green-600">87%</span>
                        </div>
                        <div className="text-sm text-gray-600">1,234 mentions</div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="text-center p-3 bg-green-100 rounded">
                        <div className="font-bold text-green-800">Positive Themes</div>
                        <div className="text-sm text-green-600">New school facilities, teacher quality</div>
                      </div>
                      <div className="text-center p-3 bg-yellow-100 rounded">
                        <div className="font-bold text-yellow-800">Neutral Themes</div>
                        <div className="text-sm text-yellow-600">Enrollment procedures, schedules</div>
                      </div>
                      <div className="text-center p-3 bg-red-100 rounded">
                        <div className="font-bold text-red-800">Concerns</div>
                        <div className="text-sm text-red-600">Transportation delays</div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className="btn-glass text-sm">📊 Detailed Analysis</button>
                      <button className="btn-glass text-sm">💬 View Comments</button>
                      <button className="btn-glass text-sm">📈 Trend History</button>
                    </div>
                  </div>

                  <div className="p-6 bg-white/10 rounded-lg border-l-4 border-blue-500">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">Saúde Pública</h3>
                        <p className="text-sm text-gray-600">Healthcare services and clinic operations</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2">
                          <span className="text-blue-600">😐</span>
                          <span className="font-bold text-blue-600">72%</span>
                        </div>
                        <div className="text-sm text-gray-600">892 mentions</div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="text-center p-3 bg-green-100 rounded">
                        <div className="font-bold text-green-800">Positive Themes</div>
                        <div className="text-sm text-green-600">New clinic opening, vaccination campaign</div>
                      </div>
                      <div className="text-center p-3 bg-yellow-100 rounded">
                        <div className="font-bold text-yellow-800">Mixed Feedback</div>
                        <div className="text-sm text-yellow-600">Wait times, appointment system</div>
                      </div>
                      <div className="text-center p-3 bg-red-100 rounded">
                        <div className="font-bold text-red-800">Concerns</div>
                        <div className="text-sm text-red-600">Specialist availability</div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className="btn-glass text-sm">📊 Detailed Analysis</button>
                      <button className="btn-glass text-sm">💬 View Comments</button>
                      <button className="btn-glass text-sm">📈 Trend History</button>
                    </div>
                  </div>

                  <div className="p-6 bg-white/10 rounded-lg border-l-4 border-yellow-500">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">Infraestrutura Urbana</h3>
                        <p className="text-sm text-gray-600">Road maintenance, public works, and utilities</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2">
                          <span className="text-yellow-600">😐</span>
                          <span className="font-bold text-yellow-600">65%</span>
                        </div>
                        <div className="text-sm text-gray-600">567 mentions</div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="text-center p-3 bg-green-100 rounded">
                        <div className="font-bold text-green-800">Improvements</div>
                        <div className="text-sm text-green-600">New paving projects, LED lighting</div>
                      </div>
                      <div className="text-center p-3 bg-yellow-100 rounded">
                        <div className="font-bold text-yellow-800">Work in Progress</div>
                        <div className="text-sm text-yellow-600">Traffic during construction</div>
                      </div>
                      <div className="text-center p-3 bg-red-100 rounded">
                        <div className="font-bold text-red-800">Complaints</div>
                        <div className="text-sm text-red-600">Potholes, drainage issues</div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className="btn-glass text-sm">📊 Detailed Analysis</button>
                      <button className="btn-glass text-sm">💬 View Comments</button>
                      <button className="btn-glass text-sm">📈 Trend History</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Real-time Monitoring */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">⚡ Real-time Social Listening</h2>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Live Mentions Stream</h3>
                    <div className="flex space-x-2">
                      <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">Live</span>
                      <button className="btn-glass text-sm">⚙️ Configure Filters</button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center space-x-3">
                          <span className="text-green-600">😊</span>
                          <div>
                            <span className="font-semibold">@maria_santos</span>
                            <span className="text-sm text-gray-600 ml-2">Facebook • 2 min ago</span>
                          </div>
                        </div>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Positive</span>
                      </div>
                      <p className="text-sm text-gray-700">
                        "Que maravilha a nova escola do bairro! Minha filha está adorando as aulas e os professores são excelentes. Parabéns à prefeitura! 👏"
                      </p>
                      <div className="mt-2 flex space-x-2">
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">#Educação</span>
                        <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">#NovaEscola</span>
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center space-x-3">
                          <span className="text-blue-600">😐</span>
                          <div>
                            <span className="font-semibold">@joao_silva</span>
                            <span className="text-sm text-gray-600 ml-2">Twitter • 5 min ago</span>
                          </div>
                        </div>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Neutral</span>
                      </div>
                      <p className="text-sm text-gray-700">
                        "Alguém sabe quando vai terminar a obra da Rua Principal? O trânsito tá complicado por aqui..."
                      </p>
                      <div className="mt-2 flex space-x-2">
                        <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">#Infraestrutura</span>
                        <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">#Trânsito</span>
                      </div>
                    </div>

                    <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center space-x-3">
                          <span className="text-red-600">😞</span>
                          <div>
                            <span className="font-semibold">@ana_costa</span>
                            <span className="text-sm text-gray-600 ml-2">Instagram • 8 min ago</span>
                          </div>
                        </div>
                        <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Negative</span>
                      </div>
                      <p className="text-sm text-gray-700">
                        "Mais um buraco na Avenida Central 😤 Quando vão arrumar isso? Já faz meses que está assim!"
                      </p>
                      <div className="mt-2 flex space-x-2">
                        <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">#Infraestrutura</span>
                        <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">#Buraco</span>
                      </div>
                    </div>

                    <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center space-x-3">
                          <span className="text-yellow-600">🚨</span>
                          <div>
                            <span className="font-semibold">@carlos_news</span>
                            <span className="text-sm text-gray-600 ml-2">News Site • 12 min ago</span>
                          </div>
                        </div>
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Alert</span>
                      </div>
                      <p className="text-sm text-gray-700">
                        "Prefeitura anuncia novo programa de melhorias na saúde pública. Investimento de R$ 3.2 milhões em equipamentos."
                      </p>
                      <div className="mt-2 flex space-x-2">
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">#Saúde</span>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">#Investimento</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <button className="btn-glass">📜 Load More Mentions</button>
                  </div>
                </div>
              </div>

              {/* Sentiment Alerts */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">🔔 Sentiment Alerts & Notifications</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-white/10 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">⚠️ Active Alerts</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-red-100 text-red-800 rounded">
                        <div className="font-semibold text-sm">Negative Spike Alert</div>
                        <div className="text-xs">Infrastructure topic: -15% sentiment in 2 hours</div>
                        <div className="text-xs text-gray-600 mt-1">Triggered: 23 min ago</div>
                      </div>

                      <div className="p-3 bg-yellow-100 text-yellow-800 rounded">
                        <div className="font-semibold text-sm">Volume Increase</div>
                        <div className="text-xs">Healthcare mentions up 45% vs yesterday</div>
                        <div className="text-xs text-gray-600 mt-1">Triggered: 1 hour ago</div>
                      </div>

                      <div className="p-3 bg-blue-100 text-blue-800 rounded">
                        <div className="font-semibold text-sm">New Trending Topic</div>
                        <div className="text-xs">"Programa Meio Ambiente" gaining traction</div>
                        <div className="text-xs text-gray-600 mt-1">Triggered: 2 hours ago</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-white/10 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">✅ Resolved Alerts</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-green-100 text-green-800 rounded">
                        <div className="font-semibold text-sm">Crisis Resolved</div>
                        <div className="text-xs">Education sentiment back to normal levels</div>
                        <div className="text-xs text-gray-600 mt-1">Resolved: 3 hours ago</div>
                      </div>

                      <div className="p-3 bg-gray-100 text-gray-800 rounded">
                        <div className="font-semibold text-sm">False Alarm</div>
                        <div className="text-xs">Security spike was due to positive news coverage</div>
                        <div className="text-xs text-gray-600 mt-1">Resolved: 5 hours ago</div>
                      </div>

                      <div className="p-3 bg-green-100 text-green-800 rounded">
                        <div className="font-semibold text-sm">Positive Response</div>
                        <div className="text-xs">New park announcement well received</div>
                        <div className="text-xs text-gray-600 mt-1">Resolved: 1 day ago</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Sentiment Score */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">😊 Sentiment Score</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">78</div>
                    <div className="text-sm text-gray-600">Overall Score</div>
                    <div className="text-xs text-green-600">↗ +5 points this week</div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full" style={{width: '78%'}}></div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">⚡ Quick Actions</h3>
                <div className="space-y-2">
                  <button className="btn-glass w-full text-sm">📊 Generate Report</button>
                  <button className="btn-glass w-full text-sm">🔔 Configure Alerts</button>
                  <button className="btn-glass w-full text-sm">📱 Social Response</button>
                  <button className="btn-glass w-full text-sm">🎯 Topic Analysis</button>
                </div>
              </div>

              {/* Trending Topics */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">🔥 Trending Topics</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">#NovaEscola</span>
                    <span className="text-xs text-green-500">+234 mentions</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">#ObraRuaPrincipal</span>
                    <span className="text-xs text-yellow-500">+189 mentions</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">#MeioAmbiente</span>
                    <span className="text-xs text-blue-500">+156 mentions</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">#Saúde</span>
                    <span className="text-xs text-purple-500">+134 mentions</span>
                  </div>
                </div>
              </div>

              {/* AI Confidence */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">🤖 AI Analysis</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Accuracy</span>
                    <span className="font-bold text-green-600">94.7%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Processing Speed</span>
                    <span className="font-bold text-blue-600">Real-time</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Languages</span>
                    <span className="font-bold text-purple-600">PT, EN, ES</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Data Sources</span>
                    <span className="font-bold text-orange-600">12 platforms</span>
                  </div>
                </div>
              </div>

              {/* Monitoring Status */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">📡 Monitoring Status</h3>
                <div className="space-y-3">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">Online</div>
                    <div className="text-sm text-gray-600">All Systems</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">1.2s</div>
                    <div className="text-sm text-gray-600">Avg Response</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-600">99.9%</div>
                    <div className="text-sm text-gray-600">Uptime</div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">📅 Recent Activity</h3>
                <div className="space-y-3">
                  <div className="text-sm">
                    <div className="font-semibold">Alert triggered</div>
                    <div className="text-xs text-gray-600">Infrastructure sentiment spike</div>
                    <div className="text-xs text-gray-500">23 min ago</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">New topic detected</div>
                    <div className="text-xs text-gray-600">"Programa Meio Ambiente"</div>
                    <div className="text-xs text-gray-500">2 hours ago</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">Report generated</div>
                    <div className="text-xs text-gray-600">Weekly sentiment summary</div>
                    <div className="text-xs text-gray-500">1 day ago</div>
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