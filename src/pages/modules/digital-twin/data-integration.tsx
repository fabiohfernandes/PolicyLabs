import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function DataIntegrationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50">
      <Head>
        <title>Real-time Data Integration Hub - PolicyLabs APSS</title>
        <meta name="description" content="Centralized data integration and synchronization platform" />
      </Head>

      {/* Header Navigation */}
      <nav className="nav-glass px-6 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="PolicyLabs" className="h-8 w-8" />
            <span className="text-xl font-bold">PolicyLabs APSS</span>
          </Link>

          <div className="flex items-center space-x-4">
            <span className="text-sm">Data Integration Hub</span>
            <Link href="/dashboard" className="btn-glass">← Dashboard</Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">🔗 Real-time Data Integration Hub</h1>

          {/* Tier Access Control */}
          <div className="card-glass p-6 mb-8 bg-gradient-to-r from-cyan-100 to-blue-100">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">⚡</span>
              <div>
                <h2 className="text-xl font-bold text-cyan-800">Enterprise+ Feature</h2>
                <p className="text-cyan-600">Advanced data integration available for Enterprise and Federal tiers</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Integration Dashboard */}
            <div className="lg:col-span-3 space-y-8">
              {/* Integration Status Overview */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">📊 Integration Status Overview</h2>

                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">2,341</div>
                    <div className="text-sm">Connected Systems</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">1.2s</div>
                    <div className="text-sm">Avg Sync Time</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">99.7%</div>
                    <div className="text-sm">Uptime</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">2.3TB</div>
                    <div className="text-sm">Daily Volume</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-white/10 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">🔄 Active Integrations</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-2 bg-green-100 rounded">
                        <div>
                          <div className="font-semibold text-green-800">Municipal Systems</div>
                          <div className="text-xs text-green-600">ERP, Finance, HR</div>
                        </div>
                        <span className="text-green-600 font-bold">2,341 active</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-blue-100 rounded">
                        <div>
                          <div className="font-semibold text-blue-800">Federal Databases</div>
                          <div className="text-xs text-blue-600">IBGE, INEP, SUS</div>
                        </div>
                        <span className="text-blue-600 font-bold">67 connected</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-purple-100 rounded">
                        <div>
                          <div className="font-semibold text-purple-800">Social Media APIs</div>
                          <div className="text-xs text-purple-600">Twitter, Facebook, Instagram</div>
                        </div>
                        <span className="text-purple-600 font-bold">Real-time</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-orange-100 rounded">
                        <div>
                          <div className="font-semibold text-orange-800">Economic Indicators</div>
                          <div className="text-xs text-orange-600">BCB, IPEA, FGV</div>
                        </div>
                        <span className="text-orange-600 font-bold">Hourly sync</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-white/10 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">📈 Data Flow Monitor</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Inbound Data Rate</span>
                          <span>2.3 GB/hour</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{width: '78%'}}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Processing Speed</span>
                          <span>847 records/sec</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{width: '92%'}}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Data Quality</span>
                          <span>96.8% clean</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-600 h-2 rounded-full" style={{width: '96.8%'}}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>API Availability</span>
                          <span>99.7%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-orange-600 h-2 rounded-full" style={{width: '99.7%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Sources Management */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">🗃️ Data Sources Management</h2>

                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Connected Data Sources</h3>
                    <button className="btn-glass-primary">+ Add New Source</button>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Municipal Systems */}
                    <div className="p-4 bg-white/10 rounded-lg border-l-4 border-green-500">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-green-800">Municipal ERP Systems</h4>
                        <span className="text-green-600 text-xs bg-green-100 px-2 py-1 rounded">Active</span>
                      </div>
                      <div className="text-sm text-gray-600 mb-3">
                        Financial, HR, and operational data from municipal systems
                      </div>
                      <div className="text-xs space-y-1">
                        <div className="flex justify-between">
                          <span>Connected:</span>
                          <span className="font-bold">2,341 cities</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Last Sync:</span>
                          <span className="font-bold">2 min ago</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Data Quality:</span>
                          <span className="font-bold text-green-600">97.3%</span>
                        </div>
                      </div>
                      <div className="mt-3 space-x-2">
                        <button className="btn-glass text-xs">Configure</button>
                        <button className="btn-glass text-xs">Monitor</button>
                      </div>
                    </div>

                    {/* Federal Databases */}
                    <div className="p-4 bg-white/10 rounded-lg border-l-4 border-blue-500">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-blue-800">Federal Databases</h4>
                        <span className="text-blue-600 text-xs bg-blue-100 px-2 py-1 rounded">Active</span>
                      </div>
                      <div className="text-sm text-gray-600 mb-3">
                        IBGE, INEP, SUS, and other federal data sources
                      </div>
                      <div className="text-xs space-y-1">
                        <div className="flex justify-between">
                          <span>Sources:</span>
                          <span className="font-bold">67 databases</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Last Sync:</span>
                          <span className="font-bold">1 hour ago</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Data Quality:</span>
                          <span className="font-bold text-blue-600">99.1%</span>
                        </div>
                      </div>
                      <div className="mt-3 space-x-2">
                        <button className="btn-glass text-xs">Configure</button>
                        <button className="btn-glass text-xs">Monitor</button>
                      </div>
                    </div>

                    {/* Social Media */}
                    <div className="p-4 bg-white/10 rounded-lg border-l-4 border-purple-500">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-purple-800">Social Media APIs</h4>
                        <span className="text-purple-600 text-xs bg-purple-100 px-2 py-1 rounded">Streaming</span>
                      </div>
                      <div className="text-sm text-gray-600 mb-3">
                        Real-time sentiment and engagement data
                      </div>
                      <div className="text-xs space-y-1">
                        <div className="flex justify-between">
                          <span>Platforms:</span>
                          <span className="font-bold">6 active</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Stream Rate:</span>
                          <span className="font-bold">Real-time</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Data Quality:</span>
                          <span className="font-bold text-purple-600">94.7%</span>
                        </div>
                      </div>
                      <div className="mt-3 space-x-2">
                        <button className="btn-glass text-xs">Configure</button>
                        <button className="btn-glass text-xs">Monitor</button>
                      </div>
                    </div>

                    {/* Economic Data */}
                    <div className="p-4 bg-white/10 rounded-lg border-l-4 border-orange-500">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-orange-800">Economic Indicators</h4>
                        <span className="text-orange-600 text-xs bg-orange-100 px-2 py-1 rounded">Scheduled</span>
                      </div>
                      <div className="text-sm text-gray-600 mb-3">
                        BCB, IPEA, FGV economic data and indicators
                      </div>
                      <div className="text-xs space-y-1">
                        <div className="flex justify-between">
                          <span>Sources:</span>
                          <span className="font-bold">23 indicators</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Frequency:</span>
                          <span className="font-bold">Hourly</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Data Quality:</span>
                          <span className="font-bold text-orange-600">98.9%</span>
                        </div>
                      </div>
                      <div className="mt-3 space-x-2">
                        <button className="btn-glass text-xs">Configure</button>
                        <button className="btn-glass text-xs">Monitor</button>
                      </div>
                    </div>

                    {/* IoT Sensors */}
                    <div className="p-4 bg-white/10 rounded-lg border-l-4 border-teal-500">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-teal-800">IoT Sensors</h4>
                        <span className="text-teal-600 text-xs bg-teal-100 px-2 py-1 rounded">Streaming</span>
                      </div>
                      <div className="text-sm text-gray-600 mb-3">
                        Environmental, traffic, and infrastructure sensors
                      </div>
                      <div className="text-xs space-y-1">
                        <div className="flex justify-between">
                          <span>Sensors:</span>
                          <span className="font-bold">45,678 active</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Stream Rate:</span>
                          <span className="font-bold">Real-time</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Data Quality:</span>
                          <span className="font-bold text-teal-600">92.4%</span>
                        </div>
                      </div>
                      <div className="mt-3 space-x-2">
                        <button className="btn-glass text-xs">Configure</button>
                        <button className="btn-glass text-xs">Monitor</button>
                      </div>
                    </div>

                    {/* Academic Research */}
                    <div className="p-4 bg-white/10 rounded-lg border-l-4 border-indigo-500">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-indigo-800">Academic Research</h4>
                        <span className="text-indigo-600 text-xs bg-indigo-100 px-2 py-1 rounded">Batch</span>
                      </div>
                      <div className="text-sm text-gray-600 mb-3">
                        University research data and policy studies
                      </div>
                      <div className="text-xs space-y-1">
                        <div className="flex justify-between">
                          <span>Institutions:</span>
                          <span className="font-bold">127 universities</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Frequency:</span>
                          <span className="font-bold">Weekly</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Data Quality:</span>
                          <span className="font-bold text-indigo-600">96.2%</span>
                        </div>
                      </div>
                      <div className="mt-3 space-x-2">
                        <button className="btn-glass text-xs">Configure</button>
                        <button className="btn-glass text-xs">Monitor</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Quality & Monitoring */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">🔍 Data Quality & Monitoring</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-white/10 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">📊 Quality Metrics</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Completeness</span>
                          <span>97.8%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{width: '97.8%'}}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Accuracy</span>
                          <span>95.4%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{width: '95.4%'}}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Consistency</span>
                          <span>98.9%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-600 h-2 rounded-full" style={{width: '98.9%'}}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Timeliness</span>
                          <span>94.2%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-orange-600 h-2 rounded-full" style={{width: '94.2%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-white/10 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">🚨 Recent Issues</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-yellow-100 text-yellow-800 rounded">
                        <div className="font-semibold text-sm">Data Delay</div>
                        <div className="text-xs">Municipal system in Santos - 45min delay</div>
                        <div className="text-xs text-gray-600 mt-1">2 hours ago</div>
                      </div>

                      <div className="p-3 bg-red-100 text-red-800 rounded">
                        <div className="font-semibold text-sm">Connection Lost</div>
                        <div className="text-xs">Economic API timeout - BCB SELIC rate</div>
                        <div className="text-xs text-gray-600 mt-1">4 hours ago • Resolved</div>
                      </div>

                      <div className="p-3 bg-blue-100 text-blue-800 rounded">
                        <div className="font-semibold text-sm">Quality Alert</div>
                        <div className="text-xs">Social media sentiment accuracy below 90%</div>
                        <div className="text-xs text-gray-600 mt-1">6 hours ago • Investigating</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* System Health */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">💚 System Health</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">Healthy</div>
                    <div className="text-sm text-gray-600">Overall Status</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">847</div>
                    <div className="text-sm text-gray-600">Records/sec</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">99.7%</div>
                    <div className="text-sm text-gray-600">Uptime</div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">⚡ Quick Actions</h3>
                <div className="space-y-2">
                  <button className="btn-glass w-full text-sm">➕ Add Data Source</button>
                  <button className="btn-glass w-full text-sm">🔄 Sync All Sources</button>
                  <button className="btn-glass w-full text-sm">📊 Quality Report</button>
                  <button className="btn-glass w-full text-sm">⚙️ Configure Alerts</button>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">📋 Recent Activity</h3>
                <div className="space-y-3">
                  <div className="text-sm">
                    <div className="font-semibold">New Source Added</div>
                    <div className="text-xs text-gray-600">INEP Education Database</div>
                    <div className="text-xs text-gray-500">30 min ago</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">Sync Completed</div>
                    <div className="text-xs text-gray-600">Municipal ERP - 2,341 cities</div>
                    <div className="text-xs text-gray-500">1 hour ago</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">Quality Check</div>
                    <div className="text-xs text-gray-600">All sources validated</div>
                    <div className="text-xs text-gray-500">2 hours ago</div>
                  </div>
                </div>
              </div>

              {/* Integration Statistics */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">📈 Statistics</h3>
                <div className="text-sm space-y-2">
                  <div>
                    <span className="text-gray-500">Total Records:</span>
                    <span className="font-bold ml-2">2.3B</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Daily Volume:</span>
                    <span className="font-bold ml-2">2.3TB</span>
                  </div>
                  <div>
                    <span className="text-gray-500">API Calls:</span>
                    <span className="font-bold ml-2">1.2M/day</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Avg Latency:</span>
                    <span className="font-bold ml-2 text-green-600">234ms</span>
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