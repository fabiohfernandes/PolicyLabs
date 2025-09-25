import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function PortfolioManagementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50">
      <Head>
        <title>Portfolio Management - PolicyLabs APSS</title>
        <meta name="description" content="Comprehensive project portfolio management and tracking" />
      </Head>

      {/* Header Navigation */}
      <nav className="nav-glass px-6 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="PolicyLabs" className="h-8 w-8" />
            <span className="text-xl font-bold">PolicyLabs APSS</span>
          </Link>

          <div className="flex items-center space-x-4">
            <span className="text-sm">Portfolio Management</span>
            <Link href="/dashboard" className="btn-glass">← Dashboard</Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">📊 Portfolio Management</h1>

          {/* Tier Access Control */}
          <div className="card-glass p-6 mb-8 bg-gradient-to-r from-teal-100 to-emerald-100">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">⚡</span>
              <div>
                <h2 className="text-xl font-bold text-teal-800">Professional+ Feature</h2>
                <p className="text-teal-600">Advanced portfolio management available for Professional tier and above</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Portfolio Overview */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">📈 Portfolio Overview</h2>

                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">47</div>
                    <div className="text-sm">Active Projects</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">R$ 245M</div>
                    <div className="text-sm">Total Budget</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">78%</div>
                    <div className="text-sm">On Schedule</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">156k</div>
                    <div className="text-sm">Citizens Impacted</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-white/10 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">📊 Project Status Distribution</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Planning</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{width: '23%'}}></div>
                          </div>
                          <span className="text-sm font-bold">11 projects</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">In Progress</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div className="bg-yellow-600 h-2 rounded-full" style={{width: '64%'}}></div>
                          </div>
                          <span className="text-sm font-bold">30 projects</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Completed</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div className="bg-green-600 h-2 rounded-full" style={{width: '13%'}}></div>
                          </div>
                          <span className="text-sm font-bold">6 projects</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-white/10 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">💰 Budget Allocation by Category</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Education</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{width: '35%'}}></div>
                          </div>
                          <span className="text-sm font-bold">R$ 86M</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Infrastructure</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div className="bg-purple-600 h-2 rounded-full" style={{width: '28%'}}></div>
                          </div>
                          <span className="text-sm font-bold">R$ 69M</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Healthcare</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div className="bg-green-600 h-2 rounded-full" style={{width: '20%'}}></div>
                          </div>
                          <span className="text-sm font-bold">R$ 49M</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Environment</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div className="bg-teal-600 h-2 rounded-full" style={{width: '17%'}}></div>
                          </div>
                          <span className="text-sm font-bold">R$ 41M</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project List */}
              <div className="card-glass p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">📋 Active Projects</h2>
                  <div className="flex space-x-2">
                    <select className="input-glass">
                      <option>All Categories</option>
                      <option>Education</option>
                      <option>Healthcare</option>
                      <option>Infrastructure</option>
                      <option>Environment</option>
                    </select>
                    <select className="input-glass">
                      <option>All Status</option>
                      <option>Planning</option>
                      <option>In Progress</option>
                      <option>Completed</option>
                      <option>On Hold</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* High Priority Project */}
                  <div className="p-6 bg-white/10 rounded-lg border-l-4 border-red-500">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">Centro Educacional São José</h3>
                        <p className="text-sm text-gray-600">New school construction with integrated community center</p>
                      </div>
                      <div className="flex space-x-2">
                        <span className="bg-red-500 text-white px-2 py-1 rounded text-xs">High Priority</span>
                        <span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs">In Progress</span>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-gray-500">Budget</div>
                        <div className="font-bold">R$ 12.3M</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Progress</div>
                        <div className="font-bold">67%</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Timeline</div>
                        <div className="font-bold">18 months</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Manager</div>
                        <div className="font-bold">Ana Silva</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Overall Progress</span>
                        <span>67%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{width: '67%'}}></div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className="btn-glass text-sm">📊 View Details</button>
                      <button className="btn-glass text-sm">📈 Progress Report</button>
                      <button className="btn-glass text-sm">💰 Budget Review</button>
                      <button className="btn-glass text-sm">👥 Team</button>
                    </div>
                  </div>

                  {/* Medium Priority Project */}
                  <div className="p-6 bg-white/10 rounded-lg border-l-4 border-blue-500">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">Reforma UBS Central</h3>
                        <p className="text-sm text-gray-600">Complete renovation of central health clinic</p>
                      </div>
                      <div className="flex space-x-2">
                        <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">Medium Priority</span>
                        <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">On Schedule</span>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-gray-500">Budget</div>
                        <div className="font-bold">R$ 3.8M</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Progress</div>
                        <div className="font-bold">45%</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Timeline</div>
                        <div className="font-bold">12 months</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Manager</div>
                        <div className="font-bold">Carlos Santos</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Overall Progress</span>
                        <span>45%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{width: '45%'}}></div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className="btn-glass text-sm">📊 View Details</button>
                      <button className="btn-glass text-sm">📈 Progress Report</button>
                      <button className="btn-glass text-sm">💰 Budget Review</button>
                      <button className="btn-glass text-sm">👥 Team</button>
                    </div>
                  </div>

                  {/* Low Priority Project */}
                  <div className="p-6 bg-white/10 rounded-lg border-l-4 border-green-500">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">Parque Ecológico Municipal</h3>
                        <p className="text-sm text-gray-600">Creation of new ecological park with trails and recreation areas</p>
                      </div>
                      <div className="flex space-x-2">
                        <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">Low Priority</span>
                        <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">Planning</span>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-gray-500">Budget</div>
                        <div className="font-bold">R$ 8.9M</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Progress</div>
                        <div className="font-bold">15%</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Timeline</div>
                        <div className="font-bold">24 months</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Manager</div>
                        <div className="font-bold">Maria Costa</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Overall Progress</span>
                        <span>15%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{width: '15%'}}></div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className="btn-glass text-sm">📊 View Details</button>
                      <button className="btn-glass text-sm">📈 Progress Report</button>
                      <button className="btn-glass text-sm">💰 Budget Review</button>
                      <button className="btn-glass text-sm">👥 Team</button>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <button className="btn-glass-primary">📋 View All Projects</button>
                </div>
              </div>

              {/* Risk & Issues Management */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">⚠️ Risk & Issues Management</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">🚨 Active Risks</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-red-100 text-red-800 rounded">
                        <div className="font-semibold text-sm">Budget Overrun Risk</div>
                        <div className="text-xs">Centro Educacional São José - 23% over budget</div>
                        <div className="text-xs text-gray-600 mt-1">High Impact • Mitigation needed</div>
                      </div>

                      <div className="p-3 bg-yellow-100 text-yellow-800 rounded">
                        <div className="font-semibold text-sm">Schedule Delay</div>
                        <div className="text-xs">UBS Central renovation - 3 weeks behind</div>
                        <div className="text-xs text-gray-600 mt-1">Medium Impact • Monitoring</div>
                      </div>

                      <div className="p-3 bg-orange-100 text-orange-800 rounded">
                        <div className="font-semibold text-sm">Resource Constraint</div>
                        <div className="text-xs">Limited qualified contractors available</div>
                        <div className="text-xs text-gray-600 mt-1">Medium Impact • Planning required</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">✅ Recent Resolutions</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-green-100 text-green-800 rounded">
                        <div className="font-semibold text-sm">Permit Approval</div>
                        <div className="text-xs">Environmental permit obtained for Parque Ecológico</div>
                        <div className="text-xs text-gray-600 mt-1">Resolved 2 days ago</div>
                      </div>

                      <div className="p-3 bg-blue-100 text-blue-800 rounded">
                        <div className="font-semibold text-sm">Supplier Contract</div>
                        <div className="text-xs">New supplier found for medical equipment</div>
                        <div className="text-xs text-gray-600 mt-1">Resolved 1 week ago</div>
                      </div>

                      <div className="p-3 bg-purple-100 text-purple-800 rounded">
                        <div className="font-semibold text-sm">Community Approval</div>
                        <div className="text-xs">Public consultation completed successfully</div>
                        <div className="text-xs text-gray-600 mt-1">Resolved 2 weeks ago</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Portfolio Health */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">💚 Portfolio Health</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">Good</div>
                    <div className="text-sm text-gray-600">Overall Status</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">78%</div>
                    <div className="text-sm text-gray-600">On Schedule</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">R$ 2.3M</div>
                    <div className="text-sm text-gray-600">Under Budget</div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">⚡ Quick Actions</h3>
                <div className="space-y-2">
                  <button className="btn-glass w-full text-sm">➕ New Project</button>
                  <button className="btn-glass w-full text-sm">📊 Generate Report</button>
                  <button className="btn-glass w-full text-sm">💰 Budget Analysis</button>
                  <button className="btn-glass w-full text-sm">⚠️ Risk Assessment</button>
                </div>
              </div>

              {/* Upcoming Milestones */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">🎯 Upcoming Milestones</h3>
                <div className="space-y-3">
                  <div className="p-2 bg-white/10 rounded text-sm">
                    <div className="font-semibold">Foundation Complete</div>
                    <div className="text-xs text-gray-600">Centro Educacional • Oct 15</div>
                  </div>
                  <div className="p-2 bg-white/10 rounded text-sm">
                    <div className="font-semibold">Equipment Installation</div>
                    <div className="text-xs text-gray-600">UBS Central • Oct 22</div>
                  </div>
                  <div className="p-2 bg-white/10 rounded text-sm">
                    <div className="font-semibold">Environmental Study</div>
                    <div className="text-xs text-gray-600">Parque Ecológico • Nov 5</div>
                  </div>
                </div>
              </div>

              {/* Team Performance */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">👥 Team Performance</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Ana Silva</span>
                    <span className="font-bold text-green-600">94%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Carlos Santos</span>
                    <span className="font-bold text-blue-600">87%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Maria Costa</span>
                    <span className="font-bold text-purple-600">82%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">João Oliveira</span>
                    <span className="font-bold text-orange-600">79%</span>
                  </div>
                </div>
              </div>

              {/* Budget Summary */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">💰 Budget Summary</h3>
                <div className="text-sm space-y-2">
                  <div>
                    <span className="text-gray-500">Total Allocated:</span>
                    <span className="font-bold ml-2">R$ 245M</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Spent to Date:</span>
                    <span className="font-bold ml-2">R$ 156M</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Remaining:</span>
                    <span className="font-bold ml-2">R$ 89M</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Variance:</span>
                    <span className="font-bold ml-2 text-green-600">-R$ 2.3M</span>
                  </div>
                </div>
              </div>

              {/* Notifications */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">🔔 Notifications</h3>
                <div className="space-y-3">
                  <div className="p-2 bg-yellow-100 text-yellow-800 rounded text-sm">
                    <div className="font-semibold">Budget Alert</div>
                    <div className="text-xs">Centro Educacional approaching limit</div>
                  </div>
                  <div className="p-2 bg-blue-100 text-blue-800 rounded text-sm">
                    <div className="font-semibold">Milestone Due</div>
                    <div className="text-xs">UBS Central inspection tomorrow</div>
                  </div>
                  <div className="p-2 bg-green-100 text-green-800 rounded text-sm">
                    <div className="font-semibold">Task Completed</div>
                    <div className="text-xs">Environmental permit approved</div>
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