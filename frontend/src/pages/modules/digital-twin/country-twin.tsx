import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function CountryDigitalTwinPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <Head>
        <title>Country Digital Twin - PolicyLabs APSS</title>
        <meta name="description" content="Real-time digital simulation of Brazil's municipal ecosystem" />
      </Head>

      {/* Header Navigation */}
      <nav className="nav-glass px-6 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="PolicyLabs" className="h-8 w-8" />
            <span className="text-xl font-bold">PolicyLabs APSS</span>
          </Link>

          <div className="flex items-center space-x-4">
            <span className="text-sm">Digital Twin Platform</span>
            <Link href="/dashboard" className="btn-glass">← Dashboard</Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">🌍 Country Digital Twin</h1>

          {/* Tier Access Control */}
          <div className="card-glass p-6 mb-8 bg-gradient-to-r from-emerald-100 to-teal-100">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🔐</span>
              <div>
                <h2 className="text-xl font-bold text-emerald-800">Federal Only Feature</h2>
                <p className="text-emerald-600">Real-time country simulation available exclusively for Federal tier</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Simulation Dashboard */}
            <div className="lg:col-span-3 space-y-8">
              {/* Brazil Overview Map */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">🗺️ Brasil Digital - Live Simulation</h2>

                <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-lg h-96 flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🇧🇷</div>
                    <h3 className="text-xl font-bold mb-2">Interactive Brazil Map</h3>
                    <p className="text-sm opacity-80 mb-4">Real-time municipal data visualization</p>

                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="p-2 bg-white/50 rounded">
                        <div className="font-bold text-green-600">2,341</div>
                        <div>Connected Cities</div>
                      </div>
                      <div className="p-2 bg-white/50 rounded">
                        <div className="font-bold text-blue-600">Live</div>
                        <div>Data Sync</div>
                      </div>
                      <div className="p-2 bg-white/50 rounded">
                        <div className="font-bold text-purple-600">127M</div>
                        <div>Citizens Tracked</div>
                      </div>
                    </div>

                    <button className="mt-4 btn-glass">
                      🌍 Open Full Map Interface
                    </button>
                  </div>
                </div>

                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">85.3%</div>
                    <div className="text-sm">National Health Index</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">78.7%</div>
                    <div className="text-sm">Education Quality</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">82.1%</div>
                    <div className="text-sm">Economic Stability</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">91.2%</div>
                    <div className="text-sm">Infrastructure Index</div>
                  </div>
                </div>
              </div>

              {/* Real-time Analytics */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">📊 Real-time Analytics Dashboard</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="p-6 bg-white/10 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">🏃‍♂️ Live Activity Monitor</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-2 bg-green-100 rounded">
                        <span className="text-sm">Policy Implementations</span>
                        <span className="font-bold text-green-600">+23 today</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-blue-100 rounded">
                        <span className="text-sm">Budget Allocations</span>
                        <span className="font-bold text-blue-600">R$ 340M today</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-purple-100 rounded">
                        <span className="text-sm">Citizen Interactions</span>
                        <span className="font-bold text-purple-600">2.3M today</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-orange-100 rounded">
                        <span className="text-sm">Projects Started</span>
                        <span className="font-bold text-orange-600">156 today</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-white/10 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">🎯 Performance Indicators</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Policy Success Rate</span>
                          <span>87.3%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{width: '87.3%'}}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Citizen Satisfaction</span>
                          <span>76.8%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{width: '76.8%'}}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Budget Efficiency</span>
                          <span>82.5%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-600 h-2 rounded-full" style={{width: '82.5%'}}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Implementation Speed</span>
                          <span>91.2%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-orange-600 h-2 rounded-full" style={{width: '91.2%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-4 bg-gradient-to-br from-red-100 to-pink-100 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">🚨 Critical Alerts</h4>
                    <div className="text-sm space-y-2">
                      <div className="p-2 bg-red-200 rounded">
                        <div className="font-semibold">Budget Crisis</div>
                        <div className="text-xs">45 municipalities</div>
                      </div>
                      <div className="p-2 bg-orange-200 rounded">
                        <div className="font-semibold">Health Emergency</div>
                        <div className="text-xs">12 cities</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-yellow-100 to-amber-100 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Warnings</h4>
                    <div className="text-sm space-y-2">
                      <div className="p-2 bg-yellow-200 rounded">
                        <div className="font-semibold">Low Execution</div>
                        <div className="text-xs">234 cities</div>
                      </div>
                      <div className="p-2 bg-amber-200 rounded">
                        <div className="font-semibold">Resource Shortage</div>
                        <div className="text-xs">89 cities</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">✅ Opportunities</h4>
                    <div className="text-sm space-y-2">
                      <div className="p-2 bg-green-200 rounded">
                        <div className="font-semibold">Expansion Ready</div>
                        <div className="text-xs">156 cities</div>
                      </div>
                      <div className="p-2 bg-emerald-200 rounded">
                        <div className="font-semibold">High Performance</div>
                        <div className="text-xs">78 cities</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Simulation Controls */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">🎮 Simulation Controls</h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">⏯️ Time Controls</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <button className="btn-glass">⏮️ Past</button>
                        <button className="btn-glass-primary">⏸️ Real-time</button>
                        <button className="btn-glass">⏭️ Future</button>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Time Range</label>
                        <select className="input-glass">
                          <option>Real-time (Live)</option>
                          <option>Last 7 days</option>
                          <option>Last 30 days</option>
                          <option>Last 6 months</option>
                          <option>Last year</option>
                          <option>Forecast +30 days</option>
                          <option>Forecast +6 months</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Simulation Speed</label>
                        <div className="flex space-x-2">
                          <button className="btn-glass text-sm">1x</button>
                          <button className="btn-glass-primary text-sm">10x</button>
                          <button className="btn-glass text-sm">100x</button>
                          <button className="btn-glass text-sm">1000x</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">🎯 Scenario Testing</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">What-If Scenario</label>
                        <textarea
                          className="input-glass h-24"
                          placeholder="Ex: What if we increase education budget by 20% across all municipalities?"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Impact Scope</label>
                        <select className="input-glass">
                          <option>All Brazil</option>
                          <option>Specific Region</option>
                          <option>Municipality Type</option>
                          <option>Population Range</option>
                          <option>Budget Range</option>
                        </select>
                      </div>

                      <button className="btn-glass-primary w-full py-3">
                        🚀 Run Simulation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* System Status */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">🖥️ System Status</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">Online</div>
                    <div className="text-sm text-gray-600">Twin Status</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">1.2s</div>
                    <div className="text-sm text-gray-600">Sync Delay</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">99.9%</div>
                    <div className="text-sm text-gray-600">Accuracy</div>
                  </div>
                </div>
              </div>

              {/* Data Sources */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">📡 Data Sources</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Municipalities</span>
                    <span className="font-bold text-green-600">2,341 / 5,570</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Citizens</span>
                    <span className="font-bold text-blue-600">127M tracked</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Economic Data</span>
                    <span className="font-bold text-purple-600">Real-time</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Social Indicators</span>
                    <span className="font-bold text-orange-600">Daily</span>
                  </div>
                </div>
              </div>

              {/* Quick Views */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">👁️ Quick Views</h3>
                <div className="space-y-2">
                  <button className="btn-glass w-full text-sm">🏥 Health Systems</button>
                  <button className="btn-glass w-full text-sm">🎓 Education Network</button>
                  <button className="btn-glass w-full text-sm">🚗 Transportation</button>
                  <button className="btn-glass w-full text-sm">💰 Economic Flow</button>
                  <button className="btn-glass w-full text-sm">👥 Population Dynamics</button>
                </div>
              </div>

              {/* Simulation History */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">📈 Recent Simulations</h3>
                <div className="space-y-3">
                  <div className="p-2 bg-white/10 rounded text-sm">
                    <div className="font-semibold">Education Budget +20%</div>
                    <div className="text-xs text-gray-600">2 hours ago</div>
                  </div>
                  <div className="p-2 bg-white/10 rounded text-sm">
                    <div className="font-semibold">Healthcare Reform</div>
                    <div className="text-xs text-gray-600">5 hours ago</div>
                  </div>
                  <div className="p-2 bg-white/10 rounded text-sm">
                    <div className="font-semibold">Urban Mobility Plan</div>
                    <div className="text-xs text-gray-600">1 day ago</div>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">⚡ Performance</h3>
                <div className="text-sm space-y-2">
                  <div>
                    <span className="text-gray-500">CPU Usage:</span>
                    <span className="font-bold ml-2">34%</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Memory:</span>
                    <span className="font-bold ml-2">67%</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Data Processed:</span>
                    <span className="font-bold ml-2">2.3TB/day</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Calculations/sec:</span>
                    <span className="font-bold ml-2 text-green-600">1.2M</span>
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