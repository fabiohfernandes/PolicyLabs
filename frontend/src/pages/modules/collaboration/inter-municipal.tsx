import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function InterMunicipalCollaborationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Head>
        <title>Inter-municipal Collaboration Platform - PolicyLabs APSS</title>
        <meta name="description" content="Cross-municipal coordination and resource sharing platform" />
      </Head>

      {/* Header Navigation */}
      <nav className="nav-glass px-6 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="PolicyLabs" className="h-8 w-8" />
            <span className="text-xl font-bold">PolicyLabs APSS</span>
          </Link>

          <div className="flex items-center space-x-4">
            <span className="text-sm">Inter-municipal Collaboration</span>
            <Link href="/dashboard" className="btn-glass">← Dashboard</Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">🤝 Inter-municipal Collaboration Platform</h1>

          {/* Tier Access Control */}
          <div className="card-glass p-6 mb-8 bg-gradient-to-r from-blue-100 to-indigo-100">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">⚡</span>
              <div>
                <h2 className="text-xl font-bold text-blue-800">Professional+ Feature</h2>
                <p className="text-blue-600">Inter-municipal collaboration tools available for Professional tier and above</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Collaboration Network */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">🌐 Your Collaboration Network</h2>

                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">23</div>
                    <div className="text-sm">Partner Cities</div>
                    <div className="text-xs text-blue-600">Active collaborations</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">47</div>
                    <div className="text-sm">Joint Projects</div>
                    <div className="text-xs text-green-600">In progress</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">R$ 12.3M</div>
                    <div className="text-sm">Shared Resources</div>
                    <div className="text-xs text-purple-600">This year</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">89%</div>
                    <div className="text-sm">Success Rate</div>
                    <div className="text-xs text-orange-600">Project completion</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-white/10 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">🗺️ Regional Network Map</h3>
                    <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg h-48 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-2">🗺️</div>
                        <div className="font-bold">Interactive Network Map</div>
                        <div className="text-sm opacity-80">Connected municipalities and projects</div>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Direct Partners:</span>
                        <span className="font-bold text-blue-600">23</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Extended Network:</span>
                        <span className="font-bold text-green-600">156</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Regional Clusters:</span>
                        <span className="font-bold text-purple-600">5</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-white/10 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">📊 Collaboration Impact</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Cost Savings</span>
                          <span>R$ 3.2M saved</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{width: '78%'}}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Resource Efficiency</span>
                          <span>34% improvement</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{width: '34%'}}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Service Quality</span>
                          <span>28% increase</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-600 h-2 rounded-full" style={{width: '28%'}}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Innovation Index</span>
                          <span>45% boost</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-orange-600 h-2 rounded-full" style={{width: '45%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Active Collaborations */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">🚀 Active Collaboration Projects</h2>

                <div className="space-y-6">
                  <div className="p-6 bg-white/10 rounded-lg border-l-4 border-green-500">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">Regional Education Consortium</h3>
                        <p className="text-sm text-gray-600">Shared teacher training and resource development across 8 municipalities</p>
                      </div>
                      <div className="text-right">
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Active</span>
                        <div className="text-sm text-gray-600 mt-1">8 partners</div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 mb-4">
                      <div className="text-center p-3 bg-white/20 rounded">
                        <div className="font-bold text-green-600">R$ 4.2M</div>
                        <div className="text-sm">Shared Budget</div>
                      </div>
                      <div className="text-center p-3 bg-white/20 rounded">
                        <div className="font-bold text-blue-600">347</div>
                        <div className="text-sm">Teachers Trained</div>
                      </div>
                      <div className="text-center p-3 bg-white/20 rounded">
                        <div className="font-bold text-purple-600">12,847</div>
                        <div className="text-sm">Students Impacted</div>
                      </div>
                      <div className="text-center p-3 bg-white/20 rounded">
                        <div className="font-bold text-orange-600">89%</div>
                        <div className="text-sm">Completion</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Partner Cities:</h4>
                      <div className="flex flex-wrap gap-2">
                        {['São Carlos', 'Araraquara', 'Rio Claro', 'Piracicaba', 'Limeira', 'Araras', 'Leme', 'Santa Gertrudes'].map((city, index) => (
                          <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">{city}</span>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className="btn-glass-primary">📊 View Dashboard</button>
                      <button className="btn-glass">👥 Partner Meeting</button>
                      <button className="btn-glass">📄 Documentation</button>
                      <button className="btn-glass">💰 Budget Status</button>
                    </div>
                  </div>

                  <div className="p-6 bg-white/10 rounded-lg border-l-4 border-blue-500">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">Shared Emergency Response System</h3>
                        <p className="text-sm text-gray-600">Integrated fire and medical emergency services across metropolitan region</p>
                      </div>
                      <div className="text-right">
                        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">Operational</span>
                        <div className="text-sm text-gray-600 mt-1">12 partners</div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 mb-4">
                      <div className="text-center p-3 bg-white/20 rounded">
                        <div className="font-bold text-blue-600">156</div>
                        <div className="text-sm">Shared Vehicles</div>
                      </div>
                      <div className="text-center p-3 bg-white/20 rounded">
                        <div className="font-bold text-green-600">8.3 min</div>
                        <div className="text-sm">Avg Response</div>
                      </div>
                      <div className="text-center p-3 bg-white/20 rounded">
                        <div className="font-bold text-purple-600">847k</div>
                        <div className="text-sm">Population Served</div>
                      </div>
                      <div className="text-center p-3 bg-white/20 rounded">
                        <div className="font-bold text-orange-600">97%</div>
                        <div className="text-sm">Availability</div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className="btn-glass-primary">🚨 Emergency Dashboard</button>
                      <button className="btn-glass">📡 Communication</button>
                      <button className="btn-glass">📊 Performance</button>
                    </div>
                  </div>

                  <div className="p-6 bg-white/10 rounded-lg border-l-4 border-purple-500">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">Regional Waste Management Hub</h3>
                        <p className="text-sm text-gray-600">Centralized recycling and waste processing facility serving 15 municipalities</p>
                      </div>
                      <div className="text-right">
                        <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">Planning</span>
                        <div className="text-sm text-gray-600 mt-1">15 partners</div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 mb-4">
                      <div className="text-center p-3 bg-white/20 rounded">
                        <div className="font-bold text-purple-600">R$ 23M</div>
                        <div className="text-sm">Total Investment</div>
                      </div>
                      <div className="text-center p-3 bg-white/20 rounded">
                        <div className="font-bold text-green-600">78%</div>
                        <div className="text-sm">Recycling Rate</div>
                      </div>
                      <div className="text-center p-3 bg-white/20 rounded">
                        <div className="font-bold text-blue-600">234k tons</div>
                        <div className="text-sm">Annual Capacity</div>
                      </div>
                      <div className="text-center p-3 bg-white/20 rounded">
                        <div className="font-bold text-orange-600">67%</div>
                        <div className="text-sm">Planning Complete</div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className="btn-glass-primary">📋 Project Plan</button>
                      <button className="btn-glass">💰 Funding Status</button>
                      <button className="btn-glass">🏗️ Construction</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resource Sharing */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">🔄 Resource Sharing Marketplace</h2>

                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Available Resources</h3>
                    <button className="btn-glass-primary">+ Share Resource</button>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="p-4 bg-white/10 rounded-lg">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-semibold">Heavy Machinery</h4>
                        <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">Available</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Excavator CAT 320D - Available for road maintenance projects
                      </p>
                      <div className="space-y-1 text-xs mb-3">
                        <div className="flex justify-between">
                          <span>Provider:</span>
                          <span className="font-bold">Piracicaba/SP</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Cost:</span>
                          <span className="font-bold">R$ 450/day</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Availability:</span>
                          <span className="font-bold text-green-600">Next 2 weeks</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="btn-glass text-xs flex-1">📞 Request</button>
                        <button className="btn-glass text-xs">📄 Details</button>
                      </div>
                    </div>

                    <div className="p-4 bg-white/10 rounded-lg">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-semibold">Specialized Staff</h4>
                        <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">Available</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Environmental engineer for impact assessment consultancy
                      </p>
                      <div className="space-y-1 text-xs mb-3">
                        <div className="flex justify-between">
                          <span>Provider:</span>
                          <span className="font-bold">São Carlos/SP</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Rate:</span>
                          <span className="font-bold">R$ 120/hour</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Experience:</span>
                          <span className="font-bold text-blue-600">12 years</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="btn-glass text-xs flex-1">📞 Contact</button>
                        <button className="btn-glass text-xs">👤 Profile</button>
                      </div>
                    </div>

                    <div className="p-4 bg-white/10 rounded-lg">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-semibold">Training Facility</h4>
                        <span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs">Booking</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        IT training center with 40 workstations and projection equipment
                      </p>
                      <div className="space-y-1 text-xs mb-3">
                        <div className="flex justify-between">
                          <span>Provider:</span>
                          <span className="font-bold">Araraquara/SP</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Capacity:</span>
                          <span className="font-bold">40 people</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Rate:</span>
                          <span className="font-bold text-yellow-600">R$ 300/day</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="btn-glass text-xs flex-1">📅 Schedule</button>
                        <button className="btn-glass text-xs">🏢 Tour</button>
                      </div>
                    </div>

                    <div className="p-4 bg-white/10 rounded-lg">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-semibold">Laboratory Services</h4>
                        <span className="bg-purple-500 text-white px-2 py-1 rounded text-xs">Available</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Water quality testing and soil contamination analysis
                      </p>
                      <div className="space-y-1 text-xs mb-3">
                        <div className="flex justify-between">
                          <span>Provider:</span>
                          <span className="font-bold">Rio Claro/SP</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Turnaround:</span>
                          <span className="font-bold">48 hours</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Certification:</span>
                          <span className="font-bold text-purple-600">ISO 17025</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="btn-glass text-xs flex-1">🧪 Request</button>
                        <button className="btn-glass text-xs">📋 Services</button>
                      </div>
                    </div>

                    <div className="p-4 bg-white/10 rounded-lg">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-semibold">Event Venue</h4>
                        <span className="bg-red-500 text-white px-2 py-1 rounded text-xs">Busy</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Convention center for public meetings and conferences
                      </p>
                      <div className="space-y-1 text-xs mb-3">
                        <div className="flex justify-between">
                          <span>Provider:</span>
                          <span className="font-bold">Limeira/SP</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Capacity:</span>
                          <span className="font-bold">500 people</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Next Available:</span>
                          <span className="font-bold text-red-600">Nov 15</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="btn-glass text-xs flex-1">📅 Waitlist</button>
                        <button className="btn-glass text-xs">📞 Contact</button>
                      </div>
                    </div>

                    <div className="p-4 bg-white/10 rounded-lg">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-semibold">Transport Fleet</h4>
                        <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">Available</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        School buses available for emergency transport or special events
                      </p>
                      <div className="space-y-1 text-xs mb-3">
                        <div className="flex justify-between">
                          <span>Provider:</span>
                          <span className="font-bold">Araras/SP</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Fleet Size:</span>
                          <span className="font-bold">12 buses</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Capacity:</span>
                          <span className="font-bold text-green-600">45 each</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="btn-glass text-xs flex-1">🚌 Reserve</button>
                        <button className="btn-glass text-xs">📋 Fleet</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Collaboration Opportunities */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">💡 New Collaboration Opportunities</h2>

                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold text-green-800">Regional Digital Government Initiative</h4>
                        <p className="text-sm text-green-600">Join 15 municipalities in creating shared digital services platform</p>
                      </div>
                      <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">New</span>
                    </div>
                    <div className="grid md:grid-cols-3 gap-2 text-xs mb-3">
                      <div>Estimated savings: R$ 2.3M per city</div>
                      <div>Implementation: 8 months</div>
                      <div>Required investment: R$ 890k</div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="btn-glass text-sm">📋 Join Initiative</button>
                      <button className="btn-glass text-sm">📊 Feasibility Study</button>
                      <button className="btn-glass text-sm">👥 Contact Partners</button>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold text-blue-800">Shared Tourism Marketing Campaign</h4>
                        <p className="text-sm text-blue-600">Promote regional tourism through coordinated marketing efforts</p>
                      </div>
                      <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">Open</span>
                    </div>
                    <div className="grid md:grid-cols-3 gap-2 text-xs mb-3">
                      <div>Expected visitor increase: 34%</div>
                      <div>Campaign duration: 12 months</div>
                      <div>Shared cost: R$ 45k per city</div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="btn-glass text-sm">🎯 Express Interest</button>
                      <button className="btn-glass text-sm">📈 ROI Analysis</button>
                      <button className="btn-glass text-sm">📋 Campaign Plan</button>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold text-purple-800">Inter-municipal Public Transport</h4>
                        <p className="text-sm text-purple-600">Integrate bus systems for seamless regional connectivity</p>
                      </div>
                      <span className="bg-purple-500 text-white px-2 py-1 rounded text-xs">Planning</span>
                    </div>
                    <div className="grid md:grid-cols-3 gap-2 text-xs mb-3">
                      <div>Ridership increase: 67%</div>
                      <div>Infrastructure: 24 months</div>
                      <div>Federal funding: 70% covered</div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="btn-glass text-sm">🚌 Join Planning</button>
                      <button className="btn-glass text-sm">💰 Funding Details</button>
                      <button className="btn-glass text-sm">🗺️ Route Map</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Network Status */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">🌐 Network Status</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">Connected</div>
                    <div className="text-sm text-gray-600">All Systems</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">23</div>
                    <div className="text-sm text-gray-600">Active Partners</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">47</div>
                    <div className="text-sm text-gray-600">Joint Projects</div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">⚡ Quick Actions</h3>
                <div className="space-y-2">
                  <button className="btn-glass w-full text-sm">🤝 Find Partners</button>
                  <button className="btn-glass w-full text-sm">💰 Share Resource</button>
                  <button className="btn-glass w-full text-sm">📋 Join Project</button>
                  <button className="btn-glass w-full text-sm">📊 View Network</button>
                </div>
              </div>

              {/* Top Partners */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">🏆 Top Partners</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">São Carlos/SP</span>
                    <span className="font-bold text-green-600">12 projects</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Piracicaba/SP</span>
                    <span className="font-bold text-blue-600">8 projects</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Araraquara/SP</span>
                    <span className="font-bold text-purple-600">6 projects</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Rio Claro/SP</span>
                    <span className="font-bold text-orange-600">5 projects</span>
                  </div>
                </div>
              </div>

              {/* Resource Requests */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">📋 Pending Requests</h3>
                <div className="space-y-3">
                  <div className="p-2 bg-yellow-100 rounded text-sm">
                    <div className="font-semibold text-yellow-800">Equipment Request</div>
                    <div className="text-xs text-yellow-600">São Carlos - Road grader</div>
                    <div className="text-xs text-gray-600">2 hours ago</div>
                  </div>
                  <div className="p-2 bg-blue-100 rounded text-sm">
                    <div className="font-semibold text-blue-800">Staff Sharing</div>
                    <div className="text-xs text-blue-600">Piracicaba - IT specialist</div>
                    <div className="text-xs text-gray-600">5 hours ago</div>
                  </div>
                  <div className="p-2 bg-green-100 rounded text-sm">
                    <div className="font-semibold text-green-800">Facility Booking</div>
                    <div className="text-xs text-green-600">Rio Claro - Conference room</div>
                    <div className="text-xs text-gray-600">1 day ago</div>
                  </div>
                </div>
              </div>

              {/* Shared Savings */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">💰 Shared Savings</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">This Month</span>
                    <span className="font-bold text-green-600">R$ 234k</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">This Year</span>
                    <span className="font-bold text-blue-600">R$ 3.2M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Total Lifetime</span>
                    <span className="font-bold text-purple-600">R$ 12.7M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Efficiency Gain</span>
                    <span className="font-bold text-orange-600">34%</span>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">📅 Recent Activity</h3>
                <div className="space-y-3">
                  <div className="text-sm">
                    <div className="font-semibold">New partnership</div>
                    <div className="text-xs text-gray-600">Joined education consortium</div>
                    <div className="text-xs text-gray-500">2 hours ago</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">Resource shared</div>
                    <div className="text-xs text-gray-600">Loaned equipment to São Carlos</div>
                    <div className="text-xs text-gray-500">5 hours ago</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">Project milestone</div>
                    <div className="text-xs text-gray-600">Emergency system 89% complete</div>
                    <div className="text-xs text-gray-500">1 day ago</div>
                  </div>
                </div>
              </div>

              {/* Collaboration Score */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">⭐ Collaboration Score</h3>
                <div className="text-sm space-y-2">
                  <div>
                    <span className="text-gray-500">Reliability:</span>
                    <span className="font-bold ml-2 text-green-600">94%</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Resource Sharing:</span>
                    <span className="font-bold ml-2 text-blue-600">87%</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Project Success:</span>
                    <span className="font-bold ml-2 text-purple-600">89%</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Overall Rating:</span>
                    <span className="font-bold ml-2 text-orange-600">4.7/5</span>
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