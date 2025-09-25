import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AdvancedAnalyticsQuadroPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
      <Head>
        <title>Advanced Analytics Quadro - PolicyLabs</title>
        <meta name="description" content="Comprehensive analytics and intelligence platform for municipal governance" />
      </Head>

      {/* Header Navigation */}
      <nav className="nav-glass px-6 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="PolicyLabs" className="h-8 w-8" />
            <span className="text-xl font-bold">PolicyLabs APSS</span>
          </Link>

          <div className="flex items-center space-x-4">
            <span className="text-sm">Advanced Analytics</span>
            <Link href="/dashboard" className="btn-glass">← Dashboard</Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">📊 Advanced Analytics Quadro</h1>

          {/* Tier Access Control */}
          <div className="card-glass p-6 mb-8 bg-gradient-to-r from-slate-100 to-gray-100">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">⚡</span>
              <div>
                <h2 className="text-xl font-bold text-slate-800">Professional+ Feature</h2>
                <p className="text-slate-600">Advanced analytics and reporting available for Professional tier and above</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Key Performance Indicators */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">📈 Key Performance Indicators</h2>

                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">87%</div>
                    <div className="text-sm">Citizen Satisfaction</div>
                    <div className="text-xs text-green-600">↗ +5% this month</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">R$ 2.3M</div>
                    <div className="text-sm">Budget Efficiency</div>
                    <div className="text-xs text-blue-600">↗ 12% under budget</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">94%</div>
                    <div className="text-sm">Project Success Rate</div>
                    <div className="text-xs text-purple-600">↗ +8% this quarter</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">156k</div>
                    <div className="text-sm">Citizens Engaged</div>
                    <div className="text-xs text-orange-600">↗ +23% this year</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-white/10 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">📊 Performance Trends (Last 12 Months)</h3>
                    <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg h-48 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-2">📈</div>
                        <div className="font-bold">Interactive Chart</div>
                        <div className="text-sm opacity-80">Citizen satisfaction, budget efficiency, project success</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-white/10 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">🎯 Goal Achievement</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Education Quality Index</span>
                          <span>89% of target</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{width: '89%'}}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Healthcare Coverage</span>
                          <span>94% of target</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{width: '94%'}}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Infrastructure Development</span>
                          <span>78% of target</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-yellow-600 h-2 rounded-full" style={{width: '78%'}}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Environmental Sustainability</span>
                          <span>67% of target</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-orange-600 h-2 rounded-full" style={{width: '67%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Departmental Analytics */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">🏢 Departmental Performance Analytics</h2>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-4 bg-white/10 rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-semibold">🎓 Education</h3>
                      <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">Excellent</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>Student Performance</span>
                        <span className="font-bold text-green-600">92%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Teacher Satisfaction</span>
                        <span className="font-bold text-blue-600">87%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Infrastructure Quality</span>
                        <span className="font-bold text-purple-600">89%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Budget Utilization</span>
                        <span className="font-bold text-orange-600">95%</span>
                      </div>
                    </div>
                    <button className="btn-glass w-full mt-4 text-sm">📊 Detailed Report</button>
                  </div>

                  <div className="p-4 bg-white/10 rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-semibold">🏥 Healthcare</h3>
                      <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">Good</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>Service Quality</span>
                        <span className="font-bold text-green-600">84%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Wait Times</span>
                        <span className="font-bold text-yellow-600">Fair</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Coverage Rate</span>
                        <span className="font-bold text-blue-600">91%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Patient Satisfaction</span>
                        <span className="font-bold text-green-600">88%</span>
                      </div>
                    </div>
                    <button className="btn-glass w-full mt-4 text-sm">📊 Detailed Report</button>
                  </div>

                  <div className="p-4 bg-white/10 rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-semibold">🏗️ Infrastructure</h3>
                      <span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs">Improving</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>Road Quality</span>
                        <span className="font-bold text-yellow-600">73%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Public Transport</span>
                        <span className="font-bold text-blue-600">81%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Digital Infrastructure</span>
                        <span className="font-bold text-green-600">89%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Project Timeline</span>
                        <span className="font-bold text-orange-600">78%</span>
                      </div>
                    </div>
                    <button className="btn-glass w-full mt-4 text-sm">📊 Detailed Report</button>
                  </div>

                  <div className="p-4 bg-white/10 rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-semibold">🌳 Environment</h3>
                      <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">Excellent</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>Air Quality Index</span>
                        <span className="font-bold text-green-600">Good</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Waste Management</span>
                        <span className="font-bold text-blue-600">92%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Green Spaces</span>
                        <span className="font-bold text-green-600">87%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Sustainability Score</span>
                        <span className="font-bold text-purple-600">85%</span>
                      </div>
                    </div>
                    <button className="btn-glass w-full mt-4 text-sm">📊 Detailed Report</button>
                  </div>

                  <div className="p-4 bg-white/10 rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-semibold">🚔 Public Safety</h3>
                      <span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs">Needs Attention</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>Crime Rate</span>
                        <span className="font-bold text-yellow-600">Moderate</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Response Time</span>
                        <span className="font-bold text-orange-600">8.5 min</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Community Trust</span>
                        <span className="font-bold text-blue-600">76%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Prevention Programs</span>
                        <span className="font-bold text-green-600">89%</span>
                      </div>
                    </div>
                    <button className="btn-glass w-full mt-4 text-sm">📊 Detailed Report</button>
                  </div>

                  <div className="p-4 bg-white/10 rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-semibold">👥 Social Services</h3>
                      <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">Good</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>Program Reach</span>
                        <span className="font-bold text-green-600">94%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Service Quality</span>
                        <span className="font-bold text-blue-600">86%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Beneficiary Satisfaction</span>
                        <span className="font-bold text-purple-600">91%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Efficiency Rating</span>
                        <span className="font-bold text-orange-600">83%</span>
                      </div>
                    </div>
                    <button className="btn-glass w-full mt-4 text-sm">📊 Detailed Report</button>
                  </div>
                </div>
              </div>

              {/* Predictive Analytics */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">🔮 Predictive Analytics & Forecasting</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-white/10 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">📈 Budget Forecasting</h3>
                    <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-lg h-40 flex items-center justify-center mb-4">
                      <div className="text-center">
                        <div className="text-3xl mb-2">💰</div>
                        <div className="font-bold">Budget Trend Analysis</div>
                        <div className="text-sm opacity-80">6-month forecast</div>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Q1 2025 Projection:</span>
                        <span className="font-bold text-green-600">R$ 45.2M</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Variance from Plan:</span>
                        <span className="font-bold text-blue-600">-3.2%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Risk Level:</span>
                        <span className="font-bold text-green-600">Low</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-white/10 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">👥 Population Dynamics</h3>
                    <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg h-40 flex items-center justify-center mb-4">
                      <div className="text-center">
                        <div className="text-3xl mb-2">📊</div>
                        <div className="font-bold">Demographic Trends</div>
                        <div className="text-sm opacity-80">5-year projection</div>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Population Growth:</span>
                        <span className="font-bold text-blue-600">+2.3% annually</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Aging Index:</span>
                        <span className="font-bold text-orange-600">Increasing</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Migration Rate:</span>
                        <span className="font-bold text-green-600">+1.8%</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-white/10 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">🚨 Risk Assessment</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-red-100 text-red-800 rounded">
                        <div className="font-semibold text-sm">High Risk: Infrastructure Aging</div>
                        <div className="text-xs">30% of roads need maintenance in next 2 years</div>
                        <div className="text-xs text-gray-600 mt-1">Probability: 85% | Impact: High</div>
                      </div>
                      <div className="p-3 bg-yellow-100 text-yellow-800 rounded">
                        <div className="font-semibold text-sm">Medium Risk: Teacher Shortage</div>
                        <div className="text-xs">Expected deficit of 45 teachers by 2025</div>
                        <div className="text-xs text-gray-600 mt-1">Probability: 67% | Impact: Medium</div>
                      </div>
                      <div className="p-3 bg-blue-100 text-blue-800 rounded">
                        <div className="font-semibold text-sm">Opportunity: Digital Services</div>
                        <div className="text-xs">78% citizen adoption of online services projected</div>
                        <div className="text-xs text-gray-600 mt-1">Confidence: 92% | Savings: R$ 2.3M</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-white/10 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">🎯 Performance Predictions</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Education Index (6mo)</span>
                          <span>Predicted: 94%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{width: '94%'}}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Citizen Satisfaction (6mo)</span>
                          <span>Predicted: 89%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{width: '89%'}}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Budget Efficiency (6mo)</span>
                          <span>Predicted: 91%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-600 h-2 rounded-full" style={{width: '91%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Custom Reports */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">📋 Custom Analytics Reports</h2>

                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Generate Custom Report</h3>
                    <button className="btn-glass-primary">+ Create New Report</button>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Report Type</label>
                      <select className="input-glass">
                        <option>Performance Dashboard</option>
                        <option>Budget Analysis</option>
                        <option>Citizen Engagement</option>
                        <option>Project Portfolio</option>
                        <option>Departmental Comparison</option>
                        <option>Predictive Analysis</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Time Period</label>
                      <select className="input-glass">
                        <option>Last 30 days</option>
                        <option>Last 3 months</option>
                        <option>Last 6 months</option>
                        <option>Last year</option>
                        <option>Custom range</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Department</label>
                      <select className="input-glass">
                        <option>All Departments</option>
                        <option>Education</option>
                        <option>Healthcare</option>
                        <option>Infrastructure</option>
                        <option>Environment</option>
                        <option>Public Safety</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-4 bg-white/10 rounded-lg">
                      <h4 className="font-semibold mb-2">Monthly Performance Report</h4>
                      <p className="text-sm text-gray-600 mb-3">Comprehensive monthly analysis across all departments</p>
                      <div className="text-xs text-gray-500 mb-3">Last generated: 2 days ago</div>
                      <div className="flex space-x-2">
                        <button className="btn-glass text-xs">📄 View</button>
                        <button className="btn-glass text-xs">📧 Send</button>
                      </div>
                    </div>

                    <div className="p-4 bg-white/10 rounded-lg">
                      <h4 className="font-semibold mb-2">Budget Efficiency Analysis</h4>
                      <p className="text-sm text-gray-600 mb-3">Detailed budget utilization and efficiency metrics</p>
                      <div className="text-xs text-gray-500 mb-3">Last generated: 1 week ago</div>
                      <div className="flex space-x-2">
                        <button className="btn-glass text-xs">📄 View</button>
                        <button className="btn-glass text-xs">📧 Send</button>
                      </div>
                    </div>

                    <div className="p-4 bg-white/10 rounded-lg">
                      <h4 className="font-semibold mb-2">Citizen Engagement Report</h4>
                      <p className="text-sm text-gray-600 mb-3">Participation rates and satisfaction metrics</p>
                      <div className="text-xs text-gray-500 mb-3">Last generated: 3 days ago</div>
                      <div className="flex space-x-2">
                        <button className="btn-glass text-xs">📄 View</button>
                        <button className="btn-glass text-xs">📧 Send</button>
                      </div>
                    </div>

                    <div className="p-4 bg-white/10 rounded-lg">
                      <h4 className="font-semibold mb-2">Project Success Analysis</h4>
                      <p className="text-sm text-gray-600 mb-3">Portfolio performance and success factors</p>
                      <div className="text-xs text-gray-500 mb-3">Last generated: 5 days ago</div>
                      <div className="flex space-x-2">
                        <button className="btn-glass text-xs">📄 View</button>
                        <button className="btn-glass text-xs">📧 Send</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Real-time Metrics */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">⚡ Real-time Metrics</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">Live</div>
                    <div className="text-sm text-gray-600">Data Status</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">1.2s</div>
                    <div className="text-sm text-gray-600">Update Frequency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">99.8%</div>
                    <div className="text-sm text-gray-600">Data Accuracy</div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">⚡ Quick Actions</h3>
                <div className="space-y-2">
                  <button className="btn-glass w-full text-sm">📊 Generate Report</button>
                  <button className="btn-glass w-full text-sm">📈 View Trends</button>
                  <button className="btn-glass w-full text-sm">🎯 Set Goals</button>
                  <button className="btn-glass w-full text-sm">⚙️ Configure Alerts</button>
                </div>
              </div>

              {/* Top Insights */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">💡 Top Insights</h3>
                <div className="space-y-3">
                  <div className="p-2 bg-green-100 rounded text-sm">
                    <div className="font-semibold text-green-800">Education performing above target</div>
                    <div className="text-xs text-green-600">Student satisfaction +12% this quarter</div>
                  </div>
                  <div className="p-2 bg-blue-100 rounded text-sm">
                    <div className="font-semibold text-blue-800">Infrastructure investment paying off</div>
                    <div className="text-xs text-blue-600">Citizen satisfaction with roads +23%</div>
                  </div>
                  <div className="p-2 bg-yellow-100 rounded text-sm">
                    <div className="font-semibold text-yellow-800">Healthcare capacity strain detected</div>
                    <div className="text-xs text-yellow-600">Consider expanding clinic hours</div>
                  </div>
                </div>
              </div>

              {/* Data Quality */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">🔍 Data Quality</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Completeness</span>
                    <span className="font-bold text-green-600">98.7%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Accuracy</span>
                    <span className="font-bold text-blue-600">96.3%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Timeliness</span>
                    <span className="font-bold text-purple-600">99.1%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Consistency</span>
                    <span className="font-bold text-orange-600">97.8%</span>
                  </div>
                </div>
              </div>

              {/* Scheduled Reports */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">📅 Scheduled Reports</h3>
                <div className="space-y-3">
                  <div className="text-sm">
                    <div className="font-semibold">Weekly Performance</div>
                    <div className="text-xs text-gray-600">Every Monday 9:00 AM</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">Monthly Budget Review</div>
                    <div className="text-xs text-gray-600">1st of each month</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">Quarterly KPI Report</div>
                    <div className="text-xs text-gray-600">End of each quarter</div>
                  </div>
                </div>
              </div>

              {/* Export Options */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">📤 Export Options</h3>
                <div className="space-y-2">
                  <button className="btn-glass w-full text-sm">📄 PDF Report</button>
                  <button className="btn-glass w-full text-sm">📊 Excel Dashboard</button>
                  <button className="btn-glass w-full text-sm">📈 PowerBI Dataset</button>
                  <button className="btn-glass w-full text-sm">🔗 API Access</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}