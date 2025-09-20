import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function PredictiveRiskAssessmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50">
      <Head>
        <title>Predictive Risk Assessment - PolicyLabs APSS</title>
        <meta name="description" content="AI-powered risk prediction and early warning system" />
      </Head>

      {/* Header Navigation */}
      <nav className="nav-glass px-6 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="PolicyLabs" className="h-8 w-8" />
            <span className="text-xl font-bold">PolicyLabs APSS</span>
          </Link>

          <div className="flex items-center space-x-4">
            <span className="text-sm">Predictive Risk Assessment</span>
            <Link href="/dashboard" className="btn-glass">← Dashboard</Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">🔮 Predictive Risk Assessment</h1>

          {/* Tier Access Control */}
          <div className="card-glass p-6 mb-8 bg-gradient-to-r from-amber-100 to-yellow-100">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">⚡</span>
              <div>
                <h2 className="text-xl font-bold text-amber-800">Enterprise+ Feature</h2>
                <p className="text-amber-600">AI-powered risk prediction available for Enterprise and Federal tiers</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Risk Dashboard */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">📊 Risk Prediction Dashboard</h2>

                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">Low</div>
                    <div className="text-sm">Overall Risk Level</div>
                    <div className="text-xs text-green-600">Normal conditions</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">23</div>
                    <div className="text-sm">Active Predictions</div>
                    <div className="text-xs text-blue-600">Next 30 days</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">94.7%</div>
                    <div className="text-sm">Accuracy Rate</div>
                    <div className="text-xs text-purple-600">Last 12 months</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">R$ 2.3M</div>
                    <div className="text-sm">Losses Prevented</div>
                    <div className="text-xs text-orange-600">This year</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-white/10 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">🎯 Risk Categories</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-2 bg-green-100 rounded">
                        <div className="flex items-center space-x-2">
                          <span className="text-green-600">🌿</span>
                          <span className="text-sm">Environmental</span>
                        </div>
                        <span className="font-bold text-green-600">Low</span>
                      </div>

                      <div className="flex justify-between items-center p-2 bg-yellow-100 rounded">
                        <div className="flex items-center space-x-2">
                          <span className="text-yellow-600">🏗️</span>
                          <span className="text-sm">Infrastructure</span>
                        </div>
                        <span className="font-bold text-yellow-600">Medium</span>
                      </div>

                      <div className="flex justify-between items-center p-2 bg-blue-100 rounded">
                        <div className="flex items-center space-x-2">
                          <span className="text-blue-600">👥</span>
                          <span className="text-sm">Social</span>
                        </div>
                        <span className="font-bold text-blue-600">Low</span>
                      </div>

                      <div className="flex justify-between items-center p-2 bg-orange-100 rounded">
                        <div className="flex items-center space-x-2">
                          <span className="text-orange-600">💰</span>
                          <span className="text-sm">Economic</span>
                        </div>
                        <span className="font-bold text-orange-600">Medium</span>
                      </div>

                      <div className="flex justify-between items-center p-2 bg-purple-100 rounded">
                        <div className="flex items-center space-x-2">
                          <span className="text-purple-600">🏥</span>
                          <span className="text-sm">Health</span>
                        </div>
                        <span className="font-bold text-purple-600">Low</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-white/10 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">📈 Risk Trend Analysis</h3>
                    <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg h-48 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-2">📈</div>
                        <div className="font-bold">Risk Trend Chart</div>
                        <div className="text-sm opacity-80">30-day prediction timeline</div>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Decreasing Risks:</span>
                        <span className="font-bold text-green-600">8</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Stable Risks:</span>
                        <span className="font-bold text-blue-600">12</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Increasing Risks:</span>
                        <span className="font-bold text-orange-600">3</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* High Priority Risks */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">⚠️ High Priority Risk Predictions</h2>

                <div className="space-y-6">
                  <div className="p-6 bg-white/10 rounded-lg border-l-4 border-red-500">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">Flooding Risk - Centro District</h3>
                        <p className="text-sm text-gray-600">Heavy rainfall predicted combined with aging drainage system</p>
                      </div>
                      <div className="text-right">
                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">High Risk</span>
                        <div className="text-sm text-gray-600 mt-1">Probability: 78%</div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 mb-4">
                      <div className="text-center p-3 bg-white/20 rounded">
                        <div className="font-bold text-red-600">5-7 days</div>
                        <div className="text-sm">Time Frame</div>
                      </div>
                      <div className="text-center p-3 bg-white/20 rounded">
                        <div className="font-bold text-orange-600">2,347</div>
                        <div className="text-sm">People at Risk</div>
                      </div>
                      <div className="text-center p-3 bg-white/20 rounded">
                        <div className="font-bold text-purple-600">R$ 4.2M</div>
                        <div className="text-sm">Potential Damage</div>
                      </div>
                      <div className="text-center p-3 bg-white/20 rounded">
                        <div className="font-bold text-blue-600">156</div>
                        <div className="text-sm">Buildings Affected</div>
                      </div>
                    </div>

                    <div className="mb-4 p-3 bg-red-100 rounded">
                      <div className="font-semibold text-red-800">AI Analysis</div>
                      <div className="text-sm text-red-700">
                        Weather models predict 80-120mm rainfall. Historical data shows 67% flooding probability under these conditions.
                        Drainage system at 85% capacity - upgrade needed.
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Recommended Actions:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Deploy portable pumps to critical areas</li>
                        <li>• Issue public warning and evacuation advisory</li>
                        <li>• Prepare emergency shelters for 500 people</li>
                        <li>• Clear drainage systems in affected areas</li>
                        <li>• Position emergency response teams</li>
                      </ul>
                    </div>

                    <div className="flex space-x-2">
                      <button className="btn-glass bg-red-500 text-white">🚨 Activate Emergency Plan</button>
                      <button className="btn-glass">📋 View Full Analysis</button>
                      <button className="btn-glass">📊 Historical Data</button>
                      <button className="btn-glass">🎯 Mitigation Plan</button>
                    </div>
                  </div>

                  <div className="p-6 bg-white/10 rounded-lg border-l-4 border-orange-500">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">Bridge Infrastructure Failure - BR-101</h3>
                        <p className="text-sm text-gray-600">Structural analysis indicates potential failure of concrete supports</p>
                      </div>
                      <div className="text-right">
                        <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">Medium-High Risk</span>
                        <div className="text-sm text-gray-600 mt-1">Probability: 45%</div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 mb-4">
                      <div className="text-center p-3 bg-white/20 rounded">
                        <div className="font-bold text-orange-600">2-3 months</div>
                        <div className="text-sm">Time Frame</div>
                      </div>
                      <div className="text-center p-3 bg-white/20 rounded">
                        <div className="font-bold text-red-600">12k daily</div>
                        <div className="text-sm">Vehicles Affected</div>
                      </div>
                      <div className="text-center p-3 bg-white/20 rounded">
                        <div className="font-bold text-purple-600">R$ 23M</div>
                        <div className="text-sm">Repair Cost</div>
                      </div>
                      <div className="text-center p-3 bg-white/20 rounded">
                        <div className="font-bold text-blue-600">4 hours</div>
                        <div className="text-sm">Detour Time</div>
                      </div>
                    </div>

                    <div className="mb-4 p-3 bg-orange-100 rounded">
                      <div className="font-semibold text-orange-800">Structural Assessment</div>
                      <div className="text-sm text-orange-700">
                        IoT sensors detect stress patterns indicating concrete degradation.
                        Load capacity reduced to 78% of design specifications. Preventive maintenance required.
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className="btn-glass bg-orange-500 text-white">🔧 Schedule Inspection</button>
                      <button className="btn-glass">📊 Sensor Data</button>
                      <button className="btn-glass">🚧 Traffic Plan</button>
                    </div>
                  </div>

                  <div className="p-6 bg-white/10 rounded-lg border-l-4 border-yellow-500">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">Water Supply Contamination Risk</h3>
                        <p className="text-sm text-gray-600">Agricultural runoff patterns suggest potential contamination of Reservoir Norte</p>
                      </div>
                      <div className="text-right">
                        <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">Medium Risk</span>
                        <div className="text-sm text-gray-600 mt-1">Probability: 34%</div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 mb-4">
                      <div className="text-center p-3 bg-white/20 rounded">
                        <div className="font-bold text-yellow-600">1-2 weeks</div>
                        <div className="text-sm">Time Frame</div>
                      </div>
                      <div className="text-center p-3 bg-white/20 rounded">
                        <div className="font-bold text-orange-600">67k</div>
                        <div className="text-sm">People Affected</div>
                      </div>
                      <div className="text-center p-3 bg-white/20 rounded">
                        <div className="font-bold text-purple-600">R$ 890k</div>
                        <div className="text-sm">Treatment Cost</div>
                      </div>
                      <div className="text-center p-3 bg-white/20 rounded">
                        <div className="font-bold text-blue-600">3 days</div>
                        <div className="text-sm">Service Disruption</div>
                      </div>
                    </div>

                    <div className="mb-4 p-3 bg-yellow-100 rounded">
                      <div className="font-semibold text-yellow-800">Environmental Analysis</div>
                      <div className="text-sm text-yellow-700">
                        Satellite imagery shows increased agricultural activity upstream.
                        Rain patterns will likely wash fertilizers into water supply within 1-2 weeks.
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className="btn-glass bg-yellow-500 text-white">🧪 Increase Monitoring</button>
                      <button className="btn-glass">🛰️ Satellite Data</button>
                      <button className="btn-glass">🚰 Backup Plan</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Model Performance */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">🤖 AI Model Performance & Insights</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-white/10 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">📊 Model Accuracy Metrics</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Overall Accuracy</span>
                          <span>94.7%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{width: '94.7%'}}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Environmental Risks</span>
                          <span>97.2%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{width: '97.2%'}}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Infrastructure Risks</span>
                          <span>89.3%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-yellow-600 h-2 rounded-full" style={{width: '89.3%'}}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Social Risks</span>
                          <span>91.8%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-600 h-2 rounded-full" style={{width: '91.8%'}}></div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-green-100 rounded">
                      <div className="font-semibold text-green-800">Model Status: Excellent</div>
                      <div className="text-sm text-green-600">
                        Performance exceeds industry standards. Model last updated: 3 days ago
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-white/10 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">🎯 Prediction Success Stories</h3>
                    <div className="space-y-4">
                      <div className="p-3 bg-green-100 rounded">
                        <div className="font-semibold text-green-800">Landslide Prevention</div>
                        <div className="text-sm text-green-600">
                          Predicted landslide 72 hours early, enabling evacuation of 156 residents
                        </div>
                        <div className="text-xs text-gray-600 mt-1">Saved lives and R$ 2.1M in property damage</div>
                      </div>

                      <div className="p-3 bg-blue-100 rounded">
                        <div className="font-semibold text-blue-800">Water System Failure</div>
                        <div className="text-sm text-blue-600">
                          Identified pipe failure risk 5 days before occurrence
                        </div>
                        <div className="text-xs text-gray-600 mt-1">Prevented 48-hour service disruption</div>
                      </div>

                      <div className="p-3 bg-purple-100 rounded">
                        <div className="font-semibold text-purple-800">Disease Outbreak</div>
                        <div className="text-sm text-purple-600">
                          Early detection of dengue outbreak prevented spread to 3 additional neighborhoods
                        </div>
                        <div className="text-xs text-gray-600 mt-1">Reduced cases by estimated 67%</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-100 rounded">
                  <div className="font-semibold text-blue-800">AI Learning Insights</div>
                  <div className="text-sm text-blue-600">
                    The model has analyzed 15,247 historical incidents and continues to improve.
                    Recent accuracy improvements: +3.2% in infrastructure predictions, +1.8% in environmental risks.
                  </div>
                </div>
              </div>

              {/* Custom Risk Analysis */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">⚙️ Custom Risk Analysis</h2>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Risk Scenario</label>
                      <textarea
                        className="input-glass h-32"
                        placeholder="Describe the potential risk scenario you want to analyze..."
                      />
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Risk Category</label>
                        <select className="input-glass">
                          <option>Environmental</option>
                          <option>Infrastructure</option>
                          <option>Social</option>
                          <option>Economic</option>
                          <option>Health</option>
                          <option>Security</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Time Horizon</label>
                        <select className="input-glass">
                          <option>Next 7 days</option>
                          <option>Next 30 days</option>
                          <option>Next 3 months</option>
                          <option>Next 6 months</option>
                          <option>Next year</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Geographic Scope</label>
                        <select className="input-glass">
                          <option>Entire Municipality</option>
                          <option>Specific District</option>
                          <option>Critical Infrastructure</option>
                          <option>Population Centers</option>
                          <option>Custom Area</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Analysis Type</label>
                      <select className="input-glass">
                        <option>Probability Assessment</option>
                        <option>Impact Analysis</option>
                        <option>Mitigation Planning</option>
                        <option>Cost-Benefit Analysis</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Data Sources</label>
                      <select className="input-glass">
                        <option>All Available Data</option>
                        <option>Historical Data Only</option>
                        <option>Real-time Sensors</option>
                        <option>External APIs</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Confidence Level</label>
                      <select className="input-glass">
                        <option>95% (High Precision)</option>
                        <option>90% (Standard)</option>
                        <option>85% (Fast Analysis)</option>
                        <option>Custom</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button className="btn-glass-primary flex-1">🔮 Run Prediction</button>
                    <button className="btn-glass">💾 Save Scenario</button>
                    <button className="btn-glass">📊 Compare Models</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Risk Level */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">🎯 Current Risk Level</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white text-2xl">🟢</span>
                    </div>
                    <div className="text-xl font-bold text-green-600">LOW</div>
                    <div className="text-sm text-gray-600">Minimal immediate threats</div>
                  </div>
                  <div className="text-xs text-center text-gray-600">
                    Last assessment: 15 minutes ago
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">⚡ Quick Actions</h3>
                <div className="space-y-2">
                  <button className="btn-glass w-full text-sm">🔮 Run New Prediction</button>
                  <button className="btn-glass w-full text-sm">📊 View All Risks</button>
                  <button className="btn-glass w-full text-sm">⚙️ Model Settings</button>
                  <button className="btn-glass w-full text-sm">📄 Generate Report</button>
                </div>
              </div>

              {/* Active Monitoring */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">📡 Active Monitoring</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Weather Stations</span>
                    <span className="font-bold text-green-600">12 active</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">IoT Sensors</span>
                    <span className="font-bold text-blue-600">847 online</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Satellite Data</span>
                    <span className="font-bold text-purple-600">Real-time</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Social Monitoring</span>
                    <span className="font-bold text-orange-600">24/7</span>
                  </div>
                </div>
              </div>

              {/* Prediction Queue */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">⏳ Prediction Queue</h3>
                <div className="space-y-3">
                  <div className="p-2 bg-blue-100 rounded text-sm">
                    <div className="font-semibold text-blue-800">Flood Risk Analysis</div>
                    <div className="text-xs text-blue-600">Processing... 78% complete</div>
                  </div>
                  <div className="p-2 bg-yellow-100 rounded text-sm">
                    <div className="font-semibold text-yellow-800">Bridge Inspection</div>
                    <div className="text-xs text-yellow-600">Queued for analysis</div>
                  </div>
                  <div className="p-2 bg-green-100 rounded text-sm">
                    <div className="font-semibold text-green-800">Water Quality</div>
                    <div className="text-xs text-green-600">Completed 5 min ago</div>
                  </div>
                </div>
              </div>

              {/* Model Performance */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">🤖 Model Status</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Accuracy</span>
                    <span className="font-bold text-green-600">94.7%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Predictions Today</span>
                    <span className="font-bold text-blue-600">156</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Processing Speed</span>
                    <span className="font-bold text-purple-600">2.3s avg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Last Update</span>
                    <span className="font-bold text-orange-600">3 days ago</span>
                  </div>
                </div>
              </div>

              {/* Recent Alerts */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">🔔 Recent Alerts</h3>
                <div className="space-y-3">
                  <div className="text-sm">
                    <div className="font-semibold">Flooding Risk</div>
                    <div className="text-xs text-gray-600">Centro District - High probability</div>
                    <div className="text-xs text-gray-500">15 min ago</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">Bridge Maintenance</div>
                    <div className="text-xs text-gray-600">BR-101 - Inspection needed</div>
                    <div className="text-xs text-gray-500">2 hours ago</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">Water Quality</div>
                    <div className="text-xs text-gray-600">Reservoir Norte - Monitoring</div>
                    <div className="text-xs text-gray-500">4 hours ago</div>
                  </div>
                </div>
              </div>

              {/* Data Sources */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">📊 Data Sources</h3>
                <div className="text-sm space-y-2">
                  <div>
                    <span className="text-gray-500">Historical Events:</span>
                    <span className="font-bold ml-2">15,247</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Real-time Sensors:</span>
                    <span className="font-bold ml-2">847</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Weather Stations:</span>
                    <span className="font-bold ml-2">12</span>
                  </div>
                  <div>
                    <span className="text-gray-500">External APIs:</span>
                    <span className="font-bold ml-2 text-green-600">23 active</span>
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