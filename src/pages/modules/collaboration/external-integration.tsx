import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ExternalSystemIntegrationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50">
      <Head>
        <title>External System Integration Hub - PolicyLabs APSS</title>
        <meta name="description" content="Centralized integration platform for external systems and APIs" />
      </Head>

      {/* Header Navigation */}
      <nav className="nav-glass px-6 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="PolicyLabs" className="h-8 w-8" />
            <span className="text-xl font-bold">PolicyLabs APSS</span>
          </Link>

          <div className="flex items-center space-x-4">
            <span className="text-sm">External Integration Hub</span>
            <Link href="/dashboard" className="btn-glass">← Dashboard</Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">🔗 External System Integration Hub</h1>

          {/* Tier Access Control */}
          <div className="card-glass p-6 mb-8 bg-gradient-to-r from-violet-100 to-purple-100">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">⚡</span>
              <div>
                <h2 className="text-xl font-bold text-violet-800">Enterprise+ Feature</h2>
                <p className="text-violet-600">Advanced system integration available for Enterprise and Federal tiers</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Integration Status */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">📊 Integration Status Overview</h2>

                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">89</div>
                    <div className="text-sm">Active Integrations</div>
                    <div className="text-xs text-green-600">All systems operational</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">2.3M</div>
                    <div className="text-sm">API Calls Today</div>
                    <div className="text-xs text-blue-600">Normal traffic</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">99.7%</div>
                    <div className="text-sm">Uptime</div>
                    <div className="text-xs text-purple-600">Last 30 days</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">234ms</div>
                    <div className="text-sm">Avg Response</div>
                    <div className="text-xs text-orange-600">Excellent performance</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-white/10 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">🔄 Integration Health</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-2 bg-green-100 rounded">
                        <div className="flex items-center space-x-2">
                          <span className="text-green-600">🟢</span>
                          <span className="text-sm">Federal Systems</span>
                        </div>
                        <span className="font-bold text-green-600">23/23</span>
                      </div>

                      <div className="flex justify-between items-center p-2 bg-green-100 rounded">
                        <div className="flex items-center space-x-2">
                          <span className="text-green-600">🟢</span>
                          <span className="text-sm">State Systems</span>
                        </div>
                        <span className="font-bold text-green-600">34/34</span>
                      </div>

                      <div className="flex justify-between items-center p-2 bg-yellow-100 rounded">
                        <div className="flex items-center space-x-2">
                          <span className="text-yellow-600">🟡</span>
                          <span className="text-sm">Financial Systems</span>
                        </div>
                        <span className="font-bold text-yellow-600">11/12</span>
                      </div>

                      <div className="flex justify-between items-center p-2 bg-green-100 rounded">
                        <div className="flex items-center space-x-2">
                          <span className="text-green-600">🟢</span>
                          <span className="text-sm">Third-party APIs</span>
                        </div>
                        <span className="font-bold text-green-600">21/21</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-white/10 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">📈 Traffic Analytics</h3>
                    <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg h-48 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-2">📈</div>
                        <div className="font-bold">API Traffic Chart</div>
                        <div className="text-sm opacity-80">Real-time request monitoring</div>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Peak Today:</span>
                        <span className="font-bold text-blue-600">347 req/min</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Average:</span>
                        <span className="font-bold text-green-600">156 req/min</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Error Rate:</span>
                        <span className="font-bold text-purple-600">0.3%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Federal Integrations */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">🏛️ Federal System Integrations</h2>

                <div className="space-y-4">
                  <div className="p-4 bg-white/10 rounded-lg border-l-4 border-green-500">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold">SICONV - Convênios e Contratos</h4>
                        <p className="text-sm text-gray-600">Federal agreements and contracts management system</p>
                      </div>
                      <div className="text-right">
                        <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">Active</span>
                        <div className="text-sm text-gray-600 mt-1">99.8% uptime</div>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-4 gap-2 text-xs mb-3">
                      <div>Last sync: 5 min ago</div>
                      <div>Data volume: 847 records</div>
                      <div>Response time: 234ms</div>
                      <div>API version: v3.2</div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="btn-glass text-xs">📊 Monitor</button>
                      <button className="btn-glass text-xs">⚙️ Configure</button>
                      <button className="btn-glass text-xs">📄 Documentation</button>
                    </div>
                  </div>

                  <div className="p-4 bg-white/10 rounded-lg border-l-4 border-green-500">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold">SIAFI - Sistema Integrado de Administração Financeira</h4>
                        <p className="text-sm text-gray-600">Federal financial administration system</p>
                      </div>
                      <div className="text-right">
                        <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">Active</span>
                        <div className="text-sm text-gray-600 mt-1">99.9% uptime</div>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-4 gap-2 text-xs mb-3">
                      <div>Last sync: 2 min ago</div>
                      <div>Data volume: 1.2k records</div>
                      <div>Response time: 189ms</div>
                      <div>API version: v2.8</div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="btn-glass text-xs">📊 Monitor</button>
                      <button className="btn-glass text-xs">⚙️ Configure</button>
                      <button className="btn-glass text-xs">📄 Documentation</button>
                    </div>
                  </div>

                  <div className="p-4 bg-white/10 rounded-lg border-l-4 border-green-500">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold">e-CAC - Centro Virtual de Atendimento</h4>
                        <p className="text-sm text-gray-600">Federal tax services and digital certificates</p>
                      </div>
                      <div className="text-right">
                        <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">Active</span>
                        <div className="text-sm text-gray-600 mt-1">99.5% uptime</div>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-4 gap-2 text-xs mb-3">
                      <div>Last sync: 1 min ago</div>
                      <div>Data volume: 234 records</div>
                      <div>Response time: 298ms</div>
                      <div>API version: v4.1</div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="btn-glass text-xs">📊 Monitor</button>
                      <button className="btn-glass text-xs">⚙️ Configure</button>
                      <button className="btn-glass text-xs">📄 Documentation</button>
                    </div>
                  </div>

                  <div className="p-4 bg-white/10 rounded-lg border-l-4 border-blue-500">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold">IBGE - Instituto Brasileiro de Geografia e Estatística</h4>
                        <p className="text-sm text-gray-600">Census and statistical data integration</p>
                      </div>
                      <div className="text-right">
                        <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">Active</span>
                        <div className="text-sm text-gray-600 mt-1">99.7% uptime</div>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-4 gap-2 text-xs mb-3">
                      <div>Last sync: 15 min ago</div>
                      <div>Data volume: 567 records</div>
                      <div>Response time: 445ms</div>
                      <div>API version: v1.6</div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="btn-glass text-xs">📊 Monitor</button>
                      <button className="btn-glass text-xs">⚙️ Configure</button>
                      <button className="btn-glass text-xs">📄 Documentation</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* State and Financial Systems */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">🏦 State & Financial System Integrations</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">🏛️ State Systems</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-white/10 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-sm">PRODESP - SP</span>
                          <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">Active</span>
                        </div>
                        <div className="text-xs text-gray-600">State data processing company integration</div>
                        <div className="text-xs text-gray-500 mt-1">Response: 167ms | Sync: 3 min ago</div>
                      </div>

                      <div className="p-3 bg-white/10 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-sm">DETRAN/SP</span>
                          <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">Active</span>
                        </div>
                        <div className="text-xs text-gray-600">Vehicle registration and driver licenses</div>
                        <div className="text-xs text-gray-500 mt-1">Response: 234ms | Sync: 8 min ago</div>
                      </div>

                      <div className="p-3 bg-white/10 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-sm">JUCESP</span>
                          <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">Active</span>
                        </div>
                        <div className="text-xs text-gray-600">Commercial registry and business licenses</div>
                        <div className="text-xs text-gray-500 mt-1">Response: 189ms | Sync: 5 min ago</div>
                      </div>

                      <div className="p-3 bg-white/10 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-sm">SEFAZ/SP</span>
                          <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">Active</span>
                        </div>
                        <div className="text-xs text-gray-600">State tax administration system</div>
                        <div className="text-xs text-gray-500 mt-1">Response: 298ms | Sync: 2 min ago</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">💳 Financial Systems</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-white/10 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-sm">Banco do Brasil API</span>
                          <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">Active</span>
                        </div>
                        <div className="text-xs text-gray-600">Banking operations and account management</div>
                        <div className="text-xs text-gray-500 mt-1">Response: 123ms | Sync: 30 sec ago</div>
                      </div>

                      <div className="p-3 bg-white/10 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-sm">Caixa Econômica Federal</span>
                          <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">Active</span>
                        </div>
                        <div className="text-xs text-gray-600">FGTS and social program payments</div>
                        <div className="text-xs text-gray-500 mt-1">Response: 156ms | Sync: 1 min ago</div>
                      </div>

                      <div className="p-3 bg-white/10 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-sm">FEBRABAN</span>
                          <span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs">Maintenance</span>
                        </div>
                        <div className="text-xs text-gray-600">Banking federation payment systems</div>
                        <div className="text-xs text-gray-500 mt-1">Scheduled maintenance: 2 hours</div>
                      </div>

                      <div className="p-3 bg-white/10 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-sm">PIX Central Bank</span>
                          <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">Active</span>
                        </div>
                        <div className="text-xs text-gray-600">Instant payment system integration</div>
                        <div className="text-xs text-gray-500 mt-1">Response: 89ms | Sync: Real-time</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Third-party APIs */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">🌐 Third-party API Integrations</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 bg-white/10 rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-semibold">Google Maps Platform</h4>
                      <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">Active</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      Geocoding, routing, and location services
                    </p>
                    <div className="text-xs space-y-1 mb-3">
                      <div>Requests today: 12,347</div>
                      <div>Quota usage: 67%</div>
                      <div>Avg response: 145ms</div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="btn-glass text-xs">📊 Usage</button>
                      <button className="btn-glass text-xs">⚙️ Config</button>
                    </div>
                  </div>

                  <div className="p-4 bg-white/10 rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-semibold">OpenWeather API</h4>
                      <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">Active</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      Weather data and forecasting services
                    </p>
                    <div className="text-xs space-y-1 mb-3">
                      <div>Requests today: 2,847</div>
                      <div>Quota usage: 23%</div>
                      <div>Avg response: 234ms</div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="btn-glass text-xs">📊 Usage</button>
                      <button className="btn-glass text-xs">⚙️ Config</button>
                    </div>
                  </div>

                  <div className="p-4 bg-white/10 rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-semibold">SendGrid Email API</h4>
                      <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">Active</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      Email delivery and notification service
                    </p>
                    <div className="text-xs space-y-1 mb-3">
                      <div>Emails sent today: 4,567</div>
                      <div>Delivery rate: 99.2%</div>
                      <div>Avg response: 67ms</div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="btn-glass text-xs">📊 Usage</button>
                      <button className="btn-glass text-xs">⚙️ Config</button>
                    </div>
                  </div>

                  <div className="p-4 bg-white/10 rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-semibold">AWS S3 Storage</h4>
                      <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">Active</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      Document storage and backup services
                    </p>
                    <div className="text-xs space-y-1 mb-3">
                      <div>Storage used: 234 GB</div>
                      <div>Monthly uploads: 1.2k</div>
                      <div>Avg response: 89ms</div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="btn-glass text-xs">📊 Usage</button>
                      <button className="btn-glass text-xs">⚙️ Config</button>
                    </div>
                  </div>

                  <div className="p-4 bg-white/10 rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-semibold">Twilio SMS API</h4>
                      <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">Active</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      SMS notifications and alerts
                    </p>
                    <div className="text-xs space-y-1 mb-3">
                      <div>SMS sent today: 1,234</div>
                      <div>Delivery rate: 98.7%</div>
                      <div>Avg response: 456ms</div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="btn-glass text-xs">📊 Usage</button>
                      <button className="btn-glass text-xs">⚙️ Config</button>
                    </div>
                  </div>

                  <div className="p-4 bg-white/10 rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-semibold">Microsoft Graph</h4>
                      <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">Active</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      Office 365 and calendar integration
                    </p>
                    <div className="text-xs space-y-1 mb-3">
                      <div>Requests today: 867</div>
                      <div>Active users: 234</div>
                      <div>Avg response: 234ms</div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="btn-glass text-xs">📊 Usage</button>
                      <button className="btn-glass text-xs">⚙️ Config</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Integration Management */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">⚙️ Integration Management</h2>

                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Add New Integration</h3>
                    <button className="btn-glass-primary">+ New Integration</button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Integration Type</label>
                      <select className="input-glass">
                        <option>Federal Government System</option>
                        <option>State Government System</option>
                        <option>Financial Institution</option>
                        <option>Third-party API</option>
                        <option>Municipal System</option>
                        <option>Database Connection</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Authentication Method</label>
                      <select className="input-glass">
                        <option>OAuth 2.0</option>
                        <option>API Key</option>
                        <option>JWT Token</option>
                        <option>Basic Authentication</option>
                        <option>Certificate-based</option>
                        <option>Custom</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">System Name & Description</label>
                    <input
                      type="text"
                      className="input-glass mb-2"
                      placeholder="e.g., SIGEPE - Personnel Management System"
                    />
                    <textarea
                      className="input-glass h-20"
                      placeholder="Describe the system's purpose and data types..."
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">API Endpoint</label>
                      <input
                        type="url"
                        className="input-glass"
                        placeholder="https://api.sistema.gov.br/v1"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Data Format</label>
                      <select className="input-glass">
                        <option>JSON</option>
                        <option>XML</option>
                        <option>CSV</option>
                        <option>SOAP</option>
                        <option>Custom</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Sync Frequency</label>
                      <select className="input-glass">
                        <option>Real-time</option>
                        <option>Every 5 minutes</option>
                        <option>Every 15 minutes</option>
                        <option>Hourly</option>
                        <option>Daily</option>
                        <option>Custom schedule</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button className="btn-glass-primary">🔗 Create Integration</button>
                    <button className="btn-glass">🧪 Test Connection</button>
                    <button className="btn-glass">📄 Import Configuration</button>
                  </div>
                </div>
              </div>

              {/* Error Monitoring */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">🚨 Error Monitoring & Alerts</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-white/10 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">🔍 Recent Errors</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-yellow-100 text-yellow-800 rounded">
                        <div className="font-semibold text-sm">Rate Limit Warning</div>
                        <div className="text-xs">Google Maps API - 85% quota usage</div>
                        <div className="text-xs text-gray-600 mt-1">15 min ago</div>
                      </div>

                      <div className="p-3 bg-red-100 text-red-800 rounded">
                        <div className="font-semibold text-sm">Connection Timeout</div>
                        <div className="text-xs">FEBRABAN API - Scheduled maintenance</div>
                        <div className="text-xs text-gray-600 mt-1">2 hours ago</div>
                      </div>

                      <div className="p-3 bg-blue-100 text-blue-800 rounded">
                        <div className="font-semibold text-sm">Authentication Renewal</div>
                        <div className="text-xs">SICONV - Token automatically refreshed</div>
                        <div className="text-xs text-gray-600 mt-1">4 hours ago</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-white/10 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">📊 Error Statistics</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Success Rate (24h)</span>
                          <span>99.7%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{width: '99.7%'}}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Error Rate</span>
                          <span>0.3%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-red-600 h-2 rounded-full" style={{width: '0.3%'}}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Avg Recovery Time</span>
                          <span>2.3 minutes</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-green-100 rounded">
                      <div className="font-semibold text-green-800">System Health: Excellent</div>
                      <div className="text-sm text-green-600">All critical integrations operational</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* System Status */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">💚 System Status</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">Operational</div>
                    <div className="text-sm text-gray-600">All Systems</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">89</div>
                    <div className="text-sm text-gray-600">Active Integrations</div>
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
                  <button className="btn-glass w-full text-sm">➕ Add Integration</button>
                  <button className="btn-glass w-full text-sm">🔍 Test All Connections</button>
                  <button className="btn-glass w-full text-sm">📊 View Logs</button>
                  <button className="btn-glass w-full text-sm">⚙️ Global Settings</button>
                </div>
              </div>

              {/* Integration Categories */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">📁 Categories</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Federal</span>
                    <span className="font-bold text-green-600">23</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">State</span>
                    <span className="font-bold text-blue-600">34</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Financial</span>
                    <span className="font-bold text-purple-600">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Third-party</span>
                    <span className="font-bold text-orange-600">21</span>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">📈 Performance</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Avg Response</span>
                    <span className="font-bold text-green-600">234ms</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">API Calls Today</span>
                    <span className="font-bold text-blue-600">2.3M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Error Rate</span>
                    <span className="font-bold text-purple-600">0.3%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Data Sync</span>
                    <span className="font-bold text-orange-600">Real-time</span>
                  </div>
                </div>
              </div>

              {/* Security Status */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">🔒 Security Status</h3>
                <div className="space-y-3">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">Secure</div>
                    <div className="text-sm text-gray-600">All Connections</div>
                  </div>
                  <div className="text-sm space-y-2">
                    <div className="flex justify-between">
                      <span>TLS 1.3:</span>
                      <span className="font-bold text-green-600">Enabled</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Certificates:</span>
                      <span className="font-bold text-blue-600">Valid</span>
                    </div>
                    <div className="flex justify-between">
                      <span>OAuth Tokens:</span>
                      <span className="font-bold text-purple-600">Fresh</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Maintenance Schedule */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">🔧 Maintenance</h3>
                <div className="space-y-3">
                  <div className="p-2 bg-yellow-100 rounded text-sm">
                    <div className="font-semibold text-yellow-800">FEBRABAN API</div>
                    <div className="text-xs text-yellow-600">Scheduled: 2 hours remaining</div>
                  </div>
                  <div className="p-2 bg-blue-100 rounded text-sm">
                    <div className="font-semibold text-blue-800">Certificate Renewal</div>
                    <div className="text-xs text-blue-600">SIAFI: Due in 15 days</div>
                  </div>
                  <div className="p-2 bg-green-100 rounded text-sm">
                    <div className="font-semibold text-green-800">All Other Systems</div>
                    <div className="text-xs text-green-600">No maintenance scheduled</div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">📅 Recent Activity</h3>
                <div className="space-y-3">
                  <div className="text-sm">
                    <div className="font-semibold">New integration added</div>
                    <div className="text-xs text-gray-600">DETRAN/SP vehicle API</div>
                    <div className="text-xs text-gray-500">2 hours ago</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">Token renewed</div>
                    <div className="text-xs text-gray-600">SICONV OAuth token</div>
                    <div className="text-xs text-gray-500">6 hours ago</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">Performance alert</div>
                    <div className="text-xs text-gray-600">Google Maps quota warning</div>
                    <div className="text-xs text-gray-500">15 min ago</div>
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