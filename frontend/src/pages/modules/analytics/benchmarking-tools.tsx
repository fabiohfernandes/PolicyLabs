import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function BenchmarkingToolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <Head>
        <title>Benchmarking Tools - PolicyLabs APSS</title>
        <meta name="description" content="Municipal performance comparison and best practices analysis" />
      </Head>

      {/* Header Navigation */}
      <nav className="nav-glass px-6 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="PolicyLabs" className="h-8 w-8" />
            <span className="text-xl font-bold">PolicyLabs APSS</span>
          </Link>

          <div className="flex items-center space-x-4">
            <span className="text-sm">Benchmarking Tools</span>
            <Link href="/dashboard" className="btn-glass">← Dashboard</Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">🎯 Benchmarking Tools</h1>

          {/* Tier Access Control */}
          <div className="card-glass p-6 mb-8 bg-gradient-to-r from-emerald-100 to-teal-100">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">⚡</span>
              <div>
                <h2 className="text-xl font-bold text-emerald-800">Enterprise+ Feature</h2>
                <p className="text-emerald-600">Advanced benchmarking and comparison tools available for Enterprise and Federal tiers</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Performance Comparison */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">📊 Municipal Performance Comparison</h2>

                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Compare Your Municipality</h3>
                    <button className="btn-glass-primary">+ Add Municipality</button>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Comparison Type</label>
                      <select className="input-glass">
                        <option>Similar Population Size</option>
                        <option>Similar Budget Range</option>
                        <option>Geographic Region</option>
                        <option>Economic Profile</option>
                        <option>Custom Selection</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Performance Area</label>
                      <select className="input-glass">
                        <option>Overall Performance</option>
                        <option>Education</option>
                        <option>Healthcare</option>
                        <option>Infrastructure</option>
                        <option>Environment</option>
                        <option>Public Safety</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Time Period</label>
                      <select className="input-glass">
                        <option>Last 12 months</option>
                        <option>Last 6 months</option>
                        <option>Last 3 months</option>
                        <option>Year over Year</option>
                        <option>Custom Range</option>
                      </select>
                    </div>
                  </div>

                  {/* Comparison Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left p-3 font-semibold">Municipality</th>
                          <th className="text-center p-3 font-semibold">Population</th>
                          <th className="text-center p-3 font-semibold">Budget</th>
                          <th className="text-center p-3 font-semibold">Education Score</th>
                          <th className="text-center p-3 font-semibold">Health Score</th>
                          <th className="text-center p-3 font-semibold">Overall Rank</th>
                          <th className="text-center p-3 font-semibold">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr className="bg-blue-50">
                          <td className="p-3">
                            <div className="flex items-center space-x-2">
                              <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                              <span className="font-semibold">Your Municipality</span>
                            </div>
                          </td>
                          <td className="text-center p-3">245,678</td>
                          <td className="text-center p-3">R$ 156M</td>
                          <td className="text-center p-3">
                            <span className="font-bold text-green-600">87</span>
                          </td>
                          <td className="text-center p-3">
                            <span className="font-bold text-blue-600">82</span>
                          </td>
                          <td className="text-center p-3">
                            <span className="font-bold text-purple-600">#3</span>
                          </td>
                          <td className="text-center p-3">
                            <button className="btn-glass text-xs">Details</button>
                          </td>
                        </tr>

                        <tr className="hover:bg-gray-50">
                          <td className="p-3">
                            <div className="flex items-center space-x-2">
                              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                              <span>São Carlos/SP</span>
                            </div>
                          </td>
                          <td className="text-center p-3">254,831</td>
                          <td className="text-center p-3">R$ 167M</td>
                          <td className="text-center p-3">
                            <span className="font-bold text-green-600">94</span>
                          </td>
                          <td className="text-center p-3">
                            <span className="font-bold text-green-600">89</span>
                          </td>
                          <td className="text-center p-3">
                            <span className="font-bold text-green-600">#1</span>
                          </td>
                          <td className="text-center p-3">
                            <button className="btn-glass text-xs">Compare</button>
                          </td>
                        </tr>

                        <tr className="hover:bg-gray-50">
                          <td className="p-3">
                            <div className="flex items-center space-x-2">
                              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                              <span>Piracicaba/SP</span>
                            </div>
                          </td>
                          <td className="text-center p-3">407,252</td>
                          <td className="text-center p-3">R$ 234M</td>
                          <td className="text-center p-3">
                            <span className="font-bold text-yellow-600">91</span>
                          </td>
                          <td className="text-center p-3">
                            <span className="font-bold text-green-600">86</span>
                          </td>
                          <td className="text-center p-3">
                            <span className="font-bold text-yellow-600">#2</span>
                          </td>
                          <td className="text-center p-3">
                            <button className="btn-glass text-xs">Compare</button>
                          </td>
                        </tr>

                        <tr className="hover:bg-gray-50">
                          <td className="p-3">
                            <div className="flex items-center space-x-2">
                              <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                              <span>Ribeirão Preto/SP</span>
                            </div>
                          </td>
                          <td className="text-center p-3">694,534</td>
                          <td className="text-center p-3">R$ 389M</td>
                          <td className="text-center p-3">
                            <span className="font-bold text-yellow-600">84</span>
                          </td>
                          <td className="text-center p-3">
                            <span className="font-bold text-blue-600">81</span>
                          </td>
                          <td className="text-center p-3">
                            <span className="font-bold text-orange-600">#4</span>
                          </td>
                          <td className="text-center p-3">
                            <button className="btn-glass text-xs">Compare</button>
                          </td>
                        </tr>

                        <tr className="hover:bg-gray-50">
                          <td className="p-3">
                            <div className="flex items-center space-x-2">
                              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                              <span>Bauru/SP</span>
                            </div>
                          </td>
                          <td className="text-center p-3">343,937</td>
                          <td className="text-center p-3">R$ 198M</td>
                          <td className="text-center p-3">
                            <span className="font-bold text-orange-600">79</span>
                          </td>
                          <td className="text-center p-3">
                            <span className="font-bold text-yellow-600">77</span>
                          </td>
                          <td className="text-center p-3">
                            <span className="font-bold text-red-600">#5</span>
                          </td>
                          <td className="text-center p-3">
                            <button className="btn-glass text-xs">Compare</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Best Practices Analysis */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">🏆 Best Practices Analysis</h2>

                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg border-l-4 border-green-500">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-green-800">Top Performer: São Carlos/SP</h3>
                        <p className="text-green-600">Learn from the #1 ranked municipality in your category</p>
                      </div>
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Best Practice</span>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="text-center p-3 bg-white/50 rounded">
                        <div className="font-bold text-green-700">Education Excellence</div>
                        <div className="text-sm text-green-600">Integrated STEM programs</div>
                      </div>
                      <div className="text-center p-3 bg-white/50 rounded">
                        <div className="font-bold text-blue-700">Digital Innovation</div>
                        <div className="text-sm text-blue-600">100% digital services</div>
                      </div>
                      <div className="text-center p-3 bg-white/50 rounded">
                        <div className="font-bold text-purple-700">Citizen Engagement</div>
                        <div className="text-sm text-purple-600">89% participation rate</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-green-800">Key Success Factors:</h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Public-private partnerships in education (increased funding by 34%)</li>
                        <li>• Digital-first approach to municipal services (reduced costs by 28%)</li>
                        <li>• Community-based participatory budgeting (improved satisfaction by 45%)</li>
                        <li>• Integrated health and education programs (better outcomes for children)</li>
                      </ul>
                    </div>

                    <div className="flex space-x-2 mt-4">
                      <button className="btn-glass bg-green-500 text-white">📋 Implement These Practices</button>
                      <button className="btn-glass">📊 Detailed Analysis</button>
                      <button className="btn-glass">📞 Contact Municipality</button>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-white/10 rounded-lg">
                      <h4 className="font-semibold mb-3">🎓 Education Best Practices</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-blue-100 rounded">
                          <div className="font-semibold text-blue-800">Teacher Continuous Education</div>
                          <div className="text-sm text-blue-600">Monthly training programs • 94% teacher satisfaction</div>
                          <div className="text-xs text-gray-600">Used by: São Carlos, Araraquara, Rio Claro</div>
                        </div>
                        <div className="p-3 bg-green-100 rounded">
                          <div className="font-semibold text-green-800">Technology Integration</div>
                          <div className="text-sm text-green-600">1:1 device ratio • Digital literacy curriculum</div>
                          <div className="text-xs text-gray-600">Used by: São Carlos, Campinas, Santos</div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-white/10 rounded-lg">
                      <h4 className="font-semibold mb-3">🏥 Healthcare Innovations</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-purple-100 rounded">
                          <div className="font-semibold text-purple-800">Preventive Care Program</div>
                          <div className="text-sm text-purple-600">Proactive health screenings • 23% cost reduction</div>
                          <div className="text-xs text-gray-600">Used by: Piracicaba, Sorocaba, Jundiaí</div>
                        </div>
                        <div className="p-3 bg-orange-100 rounded">
                          <div className="font-semibold text-orange-800">Telemedicine Network</div>
                          <div className="text-sm text-orange-600">Remote consultations • 89% patient satisfaction</div>
                          <div className="text-xs text-gray-600">Used by: São Carlos, Franca, Bauru</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Gap Analysis */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">📈 Performance Gap Analysis</h2>

                <div className="space-y-6">
                  <div className="p-6 bg-white/10 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">🎯 Improvement Opportunities</h3>

                    <div className="space-y-4">
                      <div className="p-4 border-l-4 border-yellow-500 bg-yellow-50">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-semibold text-yellow-800">Healthcare Response Time</h4>
                            <p className="text-sm text-yellow-600">Your average: 12.5 minutes | Best practice: 8.3 minutes</p>
                          </div>
                          <span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs">Gap: 4.2 min</span>
                        </div>
                        <div className="text-sm text-yellow-700">
                          <strong>Improvement potential:</strong> Reduce response time by 33% by implementing São Carlos' dispatch optimization system
                        </div>
                        <div className="mt-2">
                          <button className="btn-glass text-xs">View Implementation Plan</button>
                        </div>
                      </div>

                      <div className="p-4 border-l-4 border-orange-500 bg-orange-50">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-semibold text-orange-800">Digital Service Adoption</h4>
                            <p className="text-sm text-orange-600">Your rate: 67% | Best practice: 89%</p>
                          </div>
                          <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs">Gap: 22%</span>
                        </div>
                        <div className="text-sm text-orange-700">
                          <strong>Improvement potential:</strong> Increase adoption by 22% through user experience improvements and digital literacy programs
                        </div>
                        <div className="mt-2">
                          <button className="btn-glass text-xs">View Implementation Plan</button>
                        </div>
                      </div>

                      <div className="p-4 border-l-4 border-red-500 bg-red-50">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-semibold text-red-800">Budget Efficiency Score</h4>
                            <p className="text-sm text-red-600">Your score: 78% | Best practice: 92%</p>
                          </div>
                          <span className="bg-red-500 text-white px-2 py-1 rounded text-xs">Gap: 14%</span>
                        </div>
                        <div className="text-sm text-red-700">
                          <strong>Improvement potential:</strong> Save R$ 4.2M annually through process optimization and technology adoption
                        </div>
                        <div className="mt-2">
                          <button className="btn-glass text-xs">View Implementation Plan</button>
                        </div>
                      </div>

                      <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-semibold text-blue-800">Citizen Satisfaction</h4>
                            <p className="text-sm text-blue-600">Your score: 82% | Best practice: 91%</p>
                          </div>
                          <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">Gap: 9%</span>
                        </div>
                        <div className="text-sm text-blue-700">
                          <strong>Improvement potential:</strong> Increase satisfaction through better communication and service quality initiatives
                        </div>
                        <div className="mt-2">
                          <button className="btn-glass text-xs">View Implementation Plan</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Custom Benchmarking */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">⚙️ Custom Benchmarking Analysis</h2>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Select Metrics to Compare</label>
                      <div className="space-y-2 max-h-48 overflow-y-auto p-3 bg-white/10 rounded">
                        {[
                          'Budget per capita',
                          'Education spending %',
                          'Healthcare coverage %',
                          'Infrastructure quality index',
                          'Environmental sustainability score',
                          'Citizen engagement rate',
                          'Digital service adoption',
                          'Economic development index',
                          'Public safety score',
                          'Administrative efficiency',
                          'Transparency rating',
                          'Innovation index'
                        ].map((metric, index) => (
                          <label key={index} className="flex items-center space-x-2 text-sm">
                            <input type="checkbox" className="rounded" defaultChecked={index < 4} />
                            <span>{metric}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Select Municipalities</label>
                      <div className="space-y-2 max-h-48 overflow-y-auto p-3 bg-white/10 rounded">
                        {[
                          'São Carlos/SP',
                          'Piracicaba/SP',
                          'Ribeirão Preto/SP',
                          'Araraquara/SP',
                          'Rio Claro/SP',
                          'Bauru/SP',
                          'Franca/SP',
                          'São José do Rio Preto/SP'
                        ].map((city, index) => (
                          <label key={index} className="flex items-center space-x-2 text-sm">
                            <input type="checkbox" className="rounded" defaultChecked={index < 3} />
                            <span>{city}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Analysis Type</label>
                      <select className="input-glass">
                        <option>Comprehensive Comparison</option>
                        <option>Performance Ranking</option>
                        <option>Trend Analysis</option>
                        <option>Gap Analysis</option>
                        <option>Best Practice Identification</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Time Frame</label>
                      <select className="input-glass">
                        <option>Last 12 months</option>
                        <option>Last 24 months</option>
                        <option>3-year trend</option>
                        <option>5-year analysis</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Report Format</label>
                      <select className="input-glass">
                        <option>Interactive Dashboard</option>
                        <option>PDF Report</option>
                        <option>Excel Analysis</option>
                        <option>PowerPoint Presentation</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button className="btn-glass-primary flex-1">🚀 Generate Analysis</button>
                    <button className="btn-glass">💾 Save Configuration</button>
                    <button className="btn-glass">📊 Preview</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Your Ranking */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">🏆 Your Ranking</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">#3</div>
                    <div className="text-sm text-gray-600">Overall Rank</div>
                    <div className="text-xs text-blue-600">Top 15% in category</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">85.4</div>
                    <div className="text-sm text-gray-600">Performance Score</div>
                    <div className="text-xs text-green-600">Above average</div>
                  </div>
                </div>
              </div>

              {/* Quick Comparisons */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">⚡ Quick Comparisons</h3>
                <div className="space-y-2">
                  <button className="btn-glass w-full text-sm">🏆 Top 10 Performers</button>
                  <button className="btn-glass w-full text-sm">📊 Similar Size Cities</button>
                  <button className="btn-glass w-full text-sm">🗺️ Regional Comparison</button>
                  <button className="btn-glass w-full text-sm">📈 Improvement Leaders</button>
                </div>
              </div>

              {/* Performance Indicators */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">📊 Key Indicators</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Education</span>
                    <span className="font-bold text-green-600">87</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Healthcare</span>
                    <span className="font-bold text-blue-600">82</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Infrastructure</span>
                    <span className="font-bold text-yellow-600">78</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Environment</span>
                    <span className="font-bold text-green-600">89</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Safety</span>
                    <span className="font-bold text-orange-600">74</span>
                  </div>
                </div>
              </div>

              {/* Improvement Alerts */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">🚨 Improvement Alerts</h3>
                <div className="space-y-3">
                  <div className="p-2 bg-yellow-100 rounded text-sm">
                    <div className="font-semibold text-yellow-800">Healthcare Gap</div>
                    <div className="text-xs text-yellow-600">4.2 min behind best practice</div>
                  </div>
                  <div className="p-2 bg-orange-100 rounded text-sm">
                    <div className="font-semibold text-orange-800">Digital Adoption</div>
                    <div className="text-xs text-orange-600">22% below top performer</div>
                  </div>
                  <div className="p-2 bg-red-100 rounded text-sm">
                    <div className="font-semibold text-red-800">Budget Efficiency</div>
                    <div className="text-xs text-red-600">14% improvement potential</div>
                  </div>
                </div>
              </div>

              {/* Best Practice Library */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">📚 Best Practices</h3>
                <div className="space-y-3">
                  <div className="text-sm">
                    <div className="font-semibold">Education Excellence</div>
                    <div className="text-xs text-gray-600">15 proven strategies</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">Digital Transformation</div>
                    <div className="text-xs text-gray-600">23 implementation guides</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">Citizen Engagement</div>
                    <div className="text-xs text-gray-600">18 successful models</div>
                  </div>
                </div>
                <button className="btn-glass w-full mt-3 text-sm">Browse Library</button>
              </div>

              {/* Recent Analysis */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">📅 Recent Analysis</h3>
                <div className="space-y-3">
                  <div className="text-sm">
                    <div className="font-semibold">Education Benchmark</div>
                    <div className="text-xs text-gray-600">Generated 2 days ago</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">Regional Comparison</div>
                    <div className="text-xs text-gray-600">Generated 1 week ago</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">Annual Performance</div>
                    <div className="text-xs text-gray-600">Generated 2 weeks ago</div>
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