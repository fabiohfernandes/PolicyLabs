import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ProjectWizardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50">
      <Head>
        <title>Project Wizard - PolicyLabs APSS</title>
        <meta name="description" content="Guided project creation with AI-powered recommendations" />
      </Head>

      {/* Header Navigation */}
      <nav className="nav-glass px-6 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="PolicyLabs" className="h-8 w-8" />
            <span className="text-xl font-bold">PolicyLabs APSS</span>
          </Link>

          <div className="flex items-center space-x-4">
            <span className="text-sm">Project Wizard</span>
            <Link href="/dashboard" className="btn-glass">← Dashboard</Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">🧙‍♂️ Project Wizard</h1>

          {/* Tier Access Control */}
          <div className="card-glass p-6 mb-8 bg-gradient-to-r from-violet-100 to-purple-100">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">⚡</span>
              <div>
                <h2 className="text-xl font-bold text-violet-800">Starter+ Feature</h2>
                <p className="text-violet-600">Guided project creation available for Starter tier and above</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Wizard */}
            <div className="lg:col-span-3 space-y-8">
              {/* Wizard Progress */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">📋 Create New Policy Project</h2>

                {/* Progress Steps */}
                <div className="flex items-center mb-8">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <span className="ml-2 text-sm font-medium">Project Type</span>
                  </div>
                  <div className="flex-1 h-1 bg-gray-200 mx-4">
                    <div className="h-1 bg-blue-600 w-1/4"></div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <span className="ml-2 text-sm">Context</span>
                  </div>
                  <div className="flex-1 h-1 bg-gray-200 mx-4"></div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <span className="ml-2 text-sm">Resources</span>
                  </div>
                  <div className="flex-1 h-1 bg-gray-200 mx-4"></div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-bold">4</div>
                    <span className="ml-2 text-sm">Review</span>
                  </div>
                </div>

                {/* Step 1: Project Type */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Step 1: Choose Project Type</h3>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="p-4 border-2 border-blue-500 bg-blue-50 rounded-lg cursor-pointer">
                      <div className="text-2xl mb-2">🎓</div>
                      <h4 className="font-semibold text-blue-800">Education</h4>
                      <p className="text-sm text-blue-600">Schools, literacy, vocational training</p>
                    </div>

                    <div className="p-4 border border-gray-200 bg-white/50 rounded-lg cursor-pointer hover:border-gray-300">
                      <div className="text-2xl mb-2">🏥</div>
                      <h4 className="font-semibold">Healthcare</h4>
                      <p className="text-sm text-gray-600">Clinics, hospitals, public health</p>
                    </div>

                    <div className="p-4 border border-gray-200 bg-white/50 rounded-lg cursor-pointer hover:border-gray-300">
                      <div className="text-2xl mb-2">🏗️</div>
                      <h4 className="font-semibold">Infrastructure</h4>
                      <p className="text-sm text-gray-600">Roads, bridges, utilities</p>
                    </div>

                    <div className="p-4 border border-gray-200 bg-white/50 rounded-lg cursor-pointer hover:border-gray-300">
                      <div className="text-2xl mb-2">🌳</div>
                      <h4 className="font-semibold">Environment</h4>
                      <p className="text-sm text-gray-600">Parks, sustainability, climate</p>
                    </div>

                    <div className="p-4 border border-gray-200 bg-white/50 rounded-lg cursor-pointer hover:border-gray-300">
                      <div className="text-2xl mb-2">🚔</div>
                      <h4 className="font-semibold">Public Safety</h4>
                      <p className="text-sm text-gray-600">Police, fire department, emergency</p>
                    </div>

                    <div className="p-4 border border-gray-200 bg-white/50 rounded-lg cursor-pointer hover:border-gray-300">
                      <div className="text-2xl mb-2">💼</div>
                      <h4 className="font-semibold">Economic Development</h4>
                      <p className="text-sm text-gray-600">Business support, job creation</p>
                    </div>

                    <div className="p-4 border border-gray-200 bg-white/50 rounded-lg cursor-pointer hover:border-gray-300">
                      <div className="text-2xl mb-2">🏠</div>
                      <h4 className="font-semibold">Housing</h4>
                      <p className="text-sm text-gray-600">Social housing, urban planning</p>
                    </div>

                    <div className="p-4 border border-gray-200 bg-white/50 rounded-lg cursor-pointer hover:border-gray-300">
                      <div className="text-2xl mb-2">🚌</div>
                      <h4 className="font-semibold">Transportation</h4>
                      <p className="text-sm text-gray-600">Public transit, mobility</p>
                    </div>

                    <div className="p-4 border border-gray-200 bg-white/50 rounded-lg cursor-pointer hover:border-gray-300">
                      <div className="text-2xl mb-2">👥</div>
                      <h4 className="font-semibold">Social Services</h4>
                      <p className="text-sm text-gray-600">Welfare, community programs</p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="font-semibold mb-4">Project Subtype: Education</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-3 border border-blue-300 bg-blue-50 rounded cursor-pointer">
                        <div className="font-semibold text-blue-800">🏫 New School Construction</div>
                        <div className="text-sm text-blue-600">Build new educational facilities</div>
                      </div>
                      <div className="p-3 border border-gray-200 bg-white/50 rounded cursor-pointer hover:border-gray-300">
                        <div className="font-semibold">📚 Curriculum Reform</div>
                        <div className="text-sm text-gray-600">Update educational programs</div>
                      </div>
                      <div className="p-3 border border-gray-200 bg-white/50 rounded cursor-pointer hover:border-gray-300">
                        <div className="font-semibold">👨‍🏫 Teacher Training</div>
                        <div className="text-sm text-gray-600">Professional development programs</div>
                      </div>
                      <div className="p-3 border border-gray-200 bg-white/50 rounded cursor-pointer hover:border-gray-300">
                        <div className="font-semibold">💻 Digital Education</div>
                        <div className="text-sm text-gray-600">Technology integration</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-8">
                  <button className="btn-glass" disabled>← Previous</button>
                  <button className="btn-glass-primary">Next: Project Context →</button>
                </div>
              </div>

              {/* AI Recommendations Preview */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">🤖 AI Recommendations Preview</h2>

                <div className="p-6 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-4">Based on "New School Construction"</h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">🎯 Success Factors</h4>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-center">
                          <span className="text-green-600 mr-2">✓</span>
                          Community engagement (94% success correlation)
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-600 mr-2">✓</span>
                          Site accessibility analysis
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-600 mr-2">✓</span>
                          Phased construction approach
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-600 mr-2">✓</span>
                          Local contractor partnerships
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">⚠️ Common Pitfalls</h4>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-center">
                          <span className="text-red-600 mr-2">✗</span>
                          Inadequate budget planning (67% of failures)
                        </li>
                        <li className="flex items-center">
                          <span className="text-red-600 mr-2">✗</span>
                          Environmental impact overlooked
                        </li>
                        <li className="flex items-center">
                          <span className="text-red-600 mr-2">✗</span>
                          Insufficient teacher recruitment
                        </li>
                        <li className="flex items-center">
                          <span className="text-red-600 mr-2">✗</span>
                          Poor public transportation access
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-white/50 rounded">
                    <div className="font-semibold text-blue-800">💡 AI Suggestion</div>
                    <div className="text-sm text-blue-700 mt-1">
                      Consider implementing a "Community School Model" - 12 similar municipalities achieved 89% satisfaction
                      with integrated community services (library, health clinic, recreation center).
                    </div>
                  </div>
                </div>
              </div>

              {/* Similar Projects */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">🏆 Similar Successful Projects</h2>

                <div className="space-y-4">
                  <div className="p-4 bg-white/10 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">Centro Educacional Integrado - Sorocaba/SP</h4>
                        <p className="text-sm text-gray-600">New school construction with community integration</p>
                      </div>
                      <span className="bg-green-500 text-white px-2 py-1 rounded text-sm">92% Success</span>
                    </div>
                    <div className="grid md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Budget:</span>
                        <span className="font-bold ml-1">R$ 12.3M</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Timeline:</span>
                        <span className="font-bold ml-1">18 months</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Students:</span>
                        <span className="font-bold ml-1">1,200</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Population:</span>
                        <span className="font-bold ml-1">695k</span>
                      </div>
                    </div>
                    <div className="mt-3 space-x-2">
                      <button className="btn-glass text-sm">📋 View Details</button>
                      <button className="btn-glass text-sm">📁 Use as Template</button>
                    </div>
                  </div>

                  <div className="p-4 bg-white/10 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">Escola Técnica Municipal - Joinville/SC</h4>
                        <p className="text-sm text-gray-600">Vocational school with industry partnerships</p>
                      </div>
                      <span className="bg-green-500 text-white px-2 py-1 rounded text-sm">89% Success</span>
                    </div>
                    <div className="grid md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Budget:</span>
                        <span className="font-bold ml-1">R$ 8.7M</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Timeline:</span>
                        <span className="font-bold ml-1">14 months</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Students:</span>
                        <span className="font-bold ml-1">800</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Population:</span>
                        <span className="font-bold ml-1">597k</span>
                      </div>
                    </div>
                    <div className="mt-3 space-x-2">
                      <button className="btn-glass text-sm">📋 View Details</button>
                      <button className="btn-glass text-sm">📁 Use as Template</button>
                    </div>
                  </div>

                  <div className="p-4 bg-white/10 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">EMEF Sustentável - Curitiba/PR</h4>
                        <p className="text-sm text-gray-600">Eco-friendly school with renewable energy</p>
                      </div>
                      <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm">87% Success</span>
                    </div>
                    <div className="grid md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Budget:</span>
                        <span className="font-bold ml-1">R$ 15.2M</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Timeline:</span>
                        <span className="font-bold ml-1">22 months</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Students:</span>
                        <span className="font-bold ml-1">950</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Population:</span>
                        <span className="font-bold ml-1">1.96M</span>
                      </div>
                    </div>
                    <div className="mt-3 space-x-2">
                      <button className="btn-glass text-sm">📋 View Details</button>
                      <button className="btn-glass text-sm">📁 Use as Template</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Start Templates */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">⚡ Quick Start</h3>
                <div className="space-y-2">
                  <button className="btn-glass w-full text-sm">📚 Education Templates</button>
                  <button className="btn-glass w-full text-sm">🏥 Health Templates</button>
                  <button className="btn-glass w-full text-sm">🏗️ Infrastructure Templates</button>
                  <button className="btn-glass w-full text-sm">🌳 Environment Templates</button>
                </div>
              </div>

              {/* Project Statistics */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">📊 Project Statistics</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">12,847</div>
                    <div className="text-sm text-gray-600">Successful Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">87%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">2,341</div>
                    <div className="text-sm text-gray-600">Active Cities</div>
                  </div>
                </div>
              </div>

              {/* Current Step Info */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">🎯 Current Step</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-100 rounded">
                    <div className="font-semibold text-blue-800">Step 1: Project Type</div>
                    <div className="text-sm text-blue-600">Choose the category and specific type of project</div>
                  </div>

                  <div className="text-sm space-y-2">
                    <div className="font-semibold">Next Steps:</div>
                    <div className="text-gray-600">
                      <div>2. Define project context and goals</div>
                      <div>3. Set budget and timeline</div>
                      <div>4. Review and create project</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Help & Support */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">❓ Need Help?</h3>
                <div className="space-y-2">
                  <button className="btn-glass w-full text-sm">📖 Wizard Guide</button>
                  <button className="btn-glass w-full text-sm">💬 Live Chat</button>
                  <button className="btn-glass w-full text-sm">📞 Schedule Call</button>
                  <button className="btn-glass w-full text-sm">📧 Email Support</button>
                </div>
              </div>

              {/* Saved Drafts */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">💾 Saved Drafts</h3>
                <div className="space-y-3">
                  <div className="p-2 bg-white/10 rounded text-sm">
                    <div className="font-semibold">Nova Creche Centro</div>
                    <div className="text-xs text-gray-600">Education • 2 days ago</div>
                  </div>
                  <div className="p-2 bg-white/10 rounded text-sm">
                    <div className="font-semibold">Reforma UBS</div>
                    <div className="text-xs text-gray-600">Healthcare • 1 week ago</div>
                  </div>
                  <button className="btn-glass w-full text-sm">View All Drafts</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}