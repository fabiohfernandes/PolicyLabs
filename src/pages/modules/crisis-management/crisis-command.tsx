import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function CrisisCommandCenterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      <Head>
        <title>Crisis Command Center - PolicyLabs APSS</title>
        <meta name="description" content="Emergency response coordination and crisis management platform" />
      </Head>

      {/* Header Navigation */}
      <nav className="nav-glass px-6 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="PolicyLabs" className="h-8 w-8" />
            <span className="text-xl font-bold">PolicyLabs APSS</span>
          </Link>

          <div className="flex items-center space-x-4">
            <span className="text-sm">Crisis Command Center</span>
            <div className="flex items-center space-x-2">
              <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">All Clear</span>
              <Link href="/dashboard" className="btn-glass">← Dashboard</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">🚨 Crisis Command Center</h1>

          {/* Tier Access Control */}
          <div className="card-glass p-6 mb-8 bg-gradient-to-r from-red-100 to-orange-100">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🔐</span>
              <div>
                <h2 className="text-xl font-bold text-red-800">Federal Only Feature</h2>
                <p className="text-red-600">Emergency coordination system available exclusively for Federal tier</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Command Center */}
            <div className="lg:col-span-3 space-y-8">
              {/* Crisis Status Overview */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">📊 National Crisis Status</h2>

                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">Green</div>
                    <div className="text-sm">Alert Level</div>
                    <div className="text-xs text-green-600">Normal Operations</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">2,341</div>
                    <div className="text-sm">Connected Cities</div>
                    <div className="text-xs text-blue-600">Real-time monitoring</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">23</div>
                    <div className="text-sm">Active Incidents</div>
                    <div className="text-xs text-purple-600">Under management</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">127M</div>
                    <div className="text-sm">Citizens Protected</div>
                    <div className="text-xs text-orange-600">Coverage area</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-white/10 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">🗺️ Crisis Map Overview</h3>
                    <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-lg h-64 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-4">🇧🇷</div>
                        <h3 className="text-xl font-bold mb-2">Interactive Crisis Map</h3>
                        <p className="text-sm opacity-80 mb-4">Real-time incident tracking across Brazil</p>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="p-2 bg-white/50 rounded">
                            <div className="font-bold text-green-600">🟢 0</div>
                            <div>Critical</div>
                          </div>
                          <div className="p-2 bg-white/50 rounded">
                            <div className="font-bold text-yellow-600">🟡 5</div>
                            <div>High</div>
                          </div>
                          <div className="p-2 bg-white/50 rounded">
                            <div className="font-bold text-blue-600">🔵 18</div>
                            <div>Medium</div>
                          </div>
                          <div className="p-2 bg-white/50 rounded">
                            <div className="font-bold text-gray-600">⚪ 0</div>
                            <div>Low</div>
                          </div>
                        </div>

                        <button className="mt-4 btn-glass">
                          🗺️ Open Full Command Map
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-white/10 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">📈 Response Metrics</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Average Response Time</span>
                          <span>8.5 minutes</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{width: '85%'}}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Resource Utilization</span>
                          <span>67%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{width: '67%'}}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Coordination Efficiency</span>
                          <span>94%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-600 h-2 rounded-full" style={{width: '94%'}}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Communication Uptime</span>
                          <span>99.8%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{width: '99.8%'}}></div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 space-y-2">
                      <div className="text-sm text-center p-2 bg-green-100 rounded">
                        <span className="font-bold text-green-800">Excellent Performance</span>
                      </div>
                      <div className="text-xs text-center text-gray-600">
                        All systems operational • Last update: 30 seconds ago
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Active Incidents */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">🚨 Active Incidents</h2>

                <div className="space-y-6">
                  {/* High Priority Incident */}
                  <div className="p-6 bg-white/10 rounded-lg border-l-4 border-yellow-500">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">Enchente Urbana - Rio das Pedras/SP</h3>
                        <p className="text-sm text-gray-600">Heavy rainfall causing urban flooding in residential area</p>
                      </div>
                      <div className="text-right">
                        <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">High Priority</span>
                        <div className="text-sm text-gray-600 mt-1">Started: 2 hours ago</div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 mb-4">
                      <div className="text-center p-3 bg-white/20 rounded">
                        <div className="font-bold text-orange-600">847</div>
                        <div className="text-sm">People Affected</div>
                      </div>
                      <div className="text-center p-3 bg-white/20 rounded">
                        <div className="font-bold text-blue-600">23</div>
                        <div className="text-sm">Response Teams</div>
                      </div>
                      <div className="text-center p-3 bg-white/20 rounded">
                        <div className="font-bold text-green-600">3</div>
                        <div className="text-sm">Shelters Open</div>
                      </div>
                      <div className="text-center p-3 bg-white/20 rounded">
                        <div className="font-bold text-purple-600">156</div>
                        <div className="text-sm">Evacuated</div>
                      </div>
                    </div>

                    <div className="mb-4 p-3 bg-yellow-100 rounded">
                      <div className="font-semibold text-yellow-800">Latest Update (15 min ago)</div>
                      <div className="text-sm text-yellow-700">
                        Water level stable. Additional pumps deployed. Evacuation proceeding safely. Weather improving.
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className="btn-glass bg-blue-500 text-white">📞 Coordinate Response</button>
                      <button className="btn-glass">🗺️ View on Map</button>
                      <button className="btn-glass">📊 Resource Status</button>
                      <button className="btn-glass">📱 Public Updates</button>
                    </div>
                  </div>

                  {/* Medium Priority Incidents */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-white/10 rounded-lg border-l-4 border-blue-500">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-semibold">Incêndio Florestal - Cerrado/GO</h4>
                        <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">Medium</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Wildfire contained, monitoring for wind changes
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                        <div>Area: 127 hectares</div>
                        <div>Contained: 78%</div>
                        <div>Teams: 12</div>
                        <div>Aircraft: 3</div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="btn-glass text-xs">Manage</button>
                        <button className="btn-glass text-xs">Details</button>
                      </div>
                    </div>

                    <div className="p-4 bg-white/10 rounded-lg border-l-4 border-blue-500">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-semibold">Deslizamento - Serra do Mar/RJ</h4>
                        <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">Medium</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Landslide blocking highway, cleanup in progress
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                        <div>Highway: BR-101</div>
                        <div>Blocked: 6 hours</div>
                        <div>Teams: 8</div>
                        <div>Equipment: Heavy</div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="btn-glass text-xs">Manage</button>
                        <button className="btn-glass text-xs">Details</button>
                      </div>
                    </div>

                    <div className="p-4 bg-white/10 rounded-lg border-l-4 border-green-500">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-semibold">Queda de Energia - Grande São Paulo/SP</h4>
                        <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">Resolving</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Power outage affecting 12k households, restoration underway
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                        <div>Affected: 12,847</div>
                        <div>Restored: 67%</div>
                        <div>ETA: 2 hours</div>
                        <div>Priority: Critical infrastructure</div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="btn-glass text-xs">Manage</button>
                        <button className="btn-glass text-xs">Details</button>
                      </div>
                    </div>

                    <div className="p-4 bg-white/10 rounded-lg border-l-4 border-purple-500">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-semibold">Acidente Rodoviário - BR-116/PR</h4>
                        <span className="bg-purple-500 text-white px-2 py-1 rounded text-xs">Traffic</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Multi-vehicle accident, emergency services on scene
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                        <div>Vehicles: 5</div>
                        <div>Injuries: 3 minor</div>
                        <div>Lane closure: 1</div>
                        <div>Delay: 45 min</div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="btn-glass text-xs">Manage</button>
                        <button className="btn-glass text-xs">Details</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <button className="btn-glass-primary">📋 View All Incidents</button>
                </div>
              </div>

              {/* Emergency Resources */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">🚁 Emergency Resources</h2>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-6 bg-white/10 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">🚁 Aerial Resources</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-2 bg-green-100 rounded">
                        <span className="text-sm">Helicopters</span>
                        <div className="text-right">
                          <div className="font-bold text-green-600">12 / 15</div>
                          <div className="text-xs text-green-500">Available</div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-blue-100 rounded">
                        <span className="text-sm">Fire Aircraft</span>
                        <div className="text-right">
                          <div className="font-bold text-blue-600">8 / 10</div>
                          <div className="text-xs text-blue-500">Available</div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-purple-100 rounded">
                        <span className="text-sm">Search & Rescue</span>
                        <div className="text-right">
                          <div className="font-bold text-purple-600">6 / 8</div>
                          <div className="text-xs text-purple-500">Available</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-white/10 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">🚒 Ground Teams</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-2 bg-red-100 rounded">
                        <span className="text-sm">Fire Departments</span>
                        <div className="text-right">
                          <div className="font-bold text-red-600">234 / 267</div>
                          <div className="text-xs text-red-500">Available</div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-blue-100 rounded">
                        <span className="text-sm">Medical Teams</span>
                        <div className="text-right">
                          <div className="font-bold text-blue-600">156 / 189</div>
                          <div className="text-xs text-blue-500">Available</div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-green-100 rounded">
                        <span className="text-sm">Civil Defense</span>
                        <div className="text-right">
                          <div className="font-bold text-green-600">78 / 89</div>
                          <div className="text-xs text-green-500">Available</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-white/10 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">🏥 Medical Resources</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-2 bg-blue-100 rounded">
                        <span className="text-sm">ICU Beds</span>
                        <div className="text-right">
                          <div className="font-bold text-blue-600">1,247 / 1,890</div>
                          <div className="text-xs text-blue-500">Available</div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-green-100 rounded">
                        <span className="text-sm">Ambulances</span>
                        <div className="text-right">
                          <div className="font-bold text-green-600">345 / 423</div>
                          <div className="text-xs text-green-500">Available</div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-purple-100 rounded">
                        <span className="text-sm">Blood Supply</span>
                        <div className="text-right">
                          <div className="font-bold text-purple-600">89%</div>
                          <div className="text-xs text-purple-500">Adequate</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-green-100 rounded">
                  <div className="font-semibold text-green-800">Resource Status: Optimal</div>
                  <div className="text-sm text-green-600">
                    All resource categories above 80% availability. Emergency response capability is at full capacity.
                  </div>
                </div>
              </div>

              {/* Communication Center */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">📡 Emergency Communications</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-white/10 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">📢 Public Alerts</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Alert Type</label>
                        <select className="input-glass">
                          <option>Weather Warning</option>
                          <option>Evacuation Order</option>
                          <option>Road Closure</option>
                          <option>Health Emergency</option>
                          <option>Security Alert</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Target Area</label>
                        <select className="input-glass">
                          <option>Nationwide</option>
                          <option>Regional</option>
                          <option>State Level</option>
                          <option>Municipal</option>
                          <option>Neighborhood</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Message</label>
                        <textarea
                          className="input-glass h-24"
                          placeholder="Enter emergency alert message..."
                        />
                      </div>

                      <button className="btn-glass-primary w-full">📢 Send Alert</button>
                    </div>
                  </div>

                  <div className="p-6 bg-white/10 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">📱 Recent Alerts</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-yellow-100 rounded">
                        <div className="font-semibold text-yellow-800 text-sm">Weather Warning</div>
                        <div className="text-xs text-yellow-600">Heavy rain expected in São Paulo region - 2 hours ago</div>
                        <div className="text-xs text-gray-600">Sent to 3.2M citizens</div>
                      </div>

                      <div className="p-3 bg-blue-100 rounded">
                        <div className="font-semibold text-blue-800 text-sm">Road Closure</div>
                        <div className="text-xs text-blue-600">BR-101 closed due to landslide - 4 hours ago</div>
                        <div className="text-xs text-gray-600">Sent to 567K users</div>
                      </div>

                      <div className="p-3 bg-green-100 rounded">
                        <div className="font-semibold text-green-800 text-sm">All Clear</div>
                        <div className="text-xs text-green-600">Power restored to affected areas - 6 hours ago</div>
                        <div className="text-xs text-gray-600">Sent to 1.1M citizens</div>
                      </div>
                    </div>

                    <div className="mt-4 text-center">
                      <button className="btn-glass text-sm">📋 View All Alerts</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Alert Level */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">🚨 Alert Level</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white text-2xl">🟢</span>
                    </div>
                    <div className="text-xl font-bold text-green-600">GREEN</div>
                    <div className="text-sm text-gray-600">Normal Operations</div>
                  </div>
                  <div className="text-xs text-center text-gray-600">
                    Last updated: 5 minutes ago
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">⚡ Quick Actions</h3>
                <div className="space-y-2">
                  <button className="btn-glass w-full text-sm">🚨 Declare Emergency</button>
                  <button className="btn-glass w-full text-sm">📢 Send Alert</button>
                  <button className="btn-glass w-full text-sm">🚁 Deploy Resources</button>
                  <button className="btn-glass w-full text-sm">📞 Contact Teams</button>
                </div>
              </div>

              {/* Weather Monitor */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">🌤️ Weather Monitor</h3>
                <div className="space-y-3">
                  <div className="text-center">
                    <div className="text-3xl mb-2">⛅</div>
                    <div className="font-bold">Partly Cloudy</div>
                    <div className="text-sm text-gray-600">São Paulo</div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Temperature:</span>
                      <span className="font-bold">23°C</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Humidity:</span>
                      <span className="font-bold">67%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Wind:</span>
                      <span className="font-bold">12 km/h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Risk Level:</span>
                      <span className="font-bold text-green-600">Low</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Directory */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">📞 Emergency Contacts</h3>
                <div className="space-y-2">
                  <button className="btn-glass w-full text-sm">🚒 Fire Department</button>
                  <button className="btn-glass w-full text-sm">🚑 Medical Emergency</button>
                  <button className="btn-glass w-full text-sm">🚔 Police</button>
                  <button className="btn-glass w-full text-sm">⛑️ Civil Defense</button>
                </div>
              </div>

              {/* System Status */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">💻 System Status</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Communication</span>
                    <span className="font-bold text-green-600">Online</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">GPS Tracking</span>
                    <span className="font-bold text-green-600">Active</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Weather Data</span>
                    <span className="font-bold text-green-600">Live</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Alert System</span>
                    <span className="font-bold text-green-600">Ready</span>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">⏱️ Response Metrics</h3>
                <div className="text-sm space-y-2">
                  <div>
                    <span className="text-gray-500">Avg Response:</span>
                    <span className="font-bold ml-2 text-green-600">8.5 min</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Success Rate:</span>
                    <span className="font-bold ml-2 text-blue-600">97.3%</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Active Teams:</span>
                    <span className="font-bold ml-2 text-purple-600">234</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Coverage:</span>
                    <span className="font-bold ml-2 text-orange-600">99.8%</span>
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