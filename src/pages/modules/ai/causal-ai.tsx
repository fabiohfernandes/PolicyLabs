import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function CausalAIPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <Head>
        <title>CausalAI Framework - PolicyLabs APSS</title>
        <meta name="description" content="Advanced causality detection and intervention analysis" />
      </Head>

      {/* Header Navigation */}
      <nav className="nav-glass px-6 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="PolicyLabs" className="h-8 w-8" />
            <span className="text-xl font-bold">PolicyLabs APSS</span>
          </Link>

          <div className="flex items-center space-x-4">
            <span className="text-sm">CausalAI Framework</span>
            <Link href="/dashboard" className="btn-glass">← Dashboard</Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">🧠 CausalAI Framework</h1>

          {/* Tier Access Control */}
          <div className="card-glass p-6 mb-8 bg-gradient-to-r from-yellow-100 to-orange-100">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">⚡</span>
              <div>
                <h2 className="text-xl font-bold text-orange-800">Professional+ Feature</h2>
                <p className="text-orange-600">Advanced causality analysis available for Professional, Enterprise, and Federal tiers</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Analysis Tools */}
            <div className="lg:col-span-3 space-y-8">
              {/* Causality Analysis */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">🔍 Causality Detection</h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Policy or Intervention to Analyze</label>
                    <textarea
                      className="input-glass h-32"
                      placeholder="Describe the policy intervention you want to analyze for causal relationships..."
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Target Outcome</label>
                      <select className="input-glass">
                        <option>Economic Growth</option>
                        <option>Public Health Improvement</option>
                        <option>Education Quality</option>
                        <option>Crime Reduction</option>
                        <option>Environmental Quality</option>
                        <option>Citizen Satisfaction</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Analysis Type</label>
                      <select className="input-glass">
                        <option>Full Causal Analysis</option>
                        <option>Intervention Impact</option>
                        <option>Unintended Consequences</option>
                        <option>Multi-factor Analysis</option>
                      </select>
                    </div>
                  </div>

                  <button className="btn-glass-primary w-full py-3 text-lg">
                    🔬 Run Causal Analysis
                  </button>
                </div>
              </div>

              {/* Analysis Results */}
              <div className="card-glass p-8">
                <h3 className="text-xl font-bold mb-6">📊 Causal Analysis Results</h3>

                <div className="space-y-6">
                  {/* Causal Relationships */}
                  <div className="p-6 bg-white/10 rounded-lg">
                    <h4 className="text-lg font-semibold mb-4 flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Confirmed Causal Relationships
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                        <span>Early Childhood Education → Adult Income</span>
                        <span className="font-bold text-green-600">Causal Strength: 87%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                        <span>Public Transportation → Air Quality</span>
                        <span className="font-bold text-green-600">Causal Strength: 74%</span>
                      </div>
                    </div>
                  </div>

                  {/* Correlation vs Causation */}
                  <div className="p-6 bg-white/10 rounded-lg">
                    <h4 className="text-lg font-semibold mb-4 flex items-center">
                      <span className="text-yellow-500 mr-2">⚠️</span>
                      Correlation vs Causation Analysis
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-yellow-50 rounded">
                        <span>Police Presence ↔ Crime Rates</span>
                        <span className="font-bold text-yellow-600">Correlation Only: 23%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-yellow-50 rounded">
                        <span>Economic Growth ↔ Population</span>
                        <span className="font-bold text-yellow-600">Mixed Evidence: 56%</span>
                      </div>
                    </div>
                  </div>

                  {/* Unintended Consequences */}
                  <div className="p-6 bg-white/10 rounded-lg">
                    <h4 className="text-lg font-semibold mb-4 flex items-center">
                      <span className="text-red-500 mr-2">⚠️</span>
                      Predicted Unintended Consequences
                    </h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-red-50 rounded">
                        <div className="font-semibold text-red-800">Gentrification Risk</div>
                        <div className="text-sm text-red-600">
                          Infrastructure improvements may increase property values, displacing low-income residents
                        </div>
                        <div className="text-xs text-red-500 mt-1">Probability: 68% | Impact: High</div>
                      </div>
                      <div className="p-3 bg-red-50 rounded">
                        <div className="font-semibold text-red-800">Traffic Displacement</div>
                        <div className="text-sm text-red-600">
                          New bike lanes may redirect car traffic to residential streets
                        </div>
                        <div className="text-xs text-red-500 mt-1">Probability: 45% | Impact: Medium</div>
                      </div>
                    </div>
                  </div>

                  {/* Intervention Recommendations */}
                  <div className="p-6 bg-white/10 rounded-lg">
                    <h4 className="text-lg font-semibold mb-4 flex items-center">
                      <span className="text-blue-500 mr-2">💡</span>
                      Optimization Recommendations
                    </h4>
                    <div className="space-y-4">
                      <div className="p-4 bg-blue-50 rounded">
                        <div className="font-semibold text-blue-800">Phased Implementation</div>
                        <div className="text-sm text-blue-600 mb-2">
                          Implement policy in 3 phases to minimize disruption and allow for adjustments
                        </div>
                        <div className="text-xs">
                          <span className="text-blue-500">Expected Improvement:</span>
                          <span className="font-bold ml-1">+23% success probability</span>
                        </div>
                      </div>
                      <div className="p-4 bg-blue-50 rounded">
                        <div className="font-semibold text-blue-800">Targeted Mitigation</div>
                        <div className="text-sm text-blue-600 mb-2">
                          Implement housing protection measures to prevent gentrification
                        </div>
                        <div className="text-xs">
                          <span className="text-blue-500">Risk Reduction:</span>
                          <span className="font-bold ml-1">-45% unintended consequences</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bayesian Network Visualization */}
              <div className="card-glass p-8">
                <h3 className="text-xl font-bold mb-6">🕸️ Causal Network Diagram</h3>

                <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🕸️</div>
                    <h3 className="text-xl font-bold mb-2">Interactive Causal Network</h3>
                    <p className="text-sm opacity-80">Bayesian network showing relationships between variables</p>
                    <button className="mt-4 btn-glass">
                      Open Interactive Diagram
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Analysis Status */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">📈 Analysis Status</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Data Processing</span>
                      <span>Complete</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Causal Inference</span>
                      <span>87%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '87%'}}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Uncertainty Analysis</span>
                      <span>92%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{width: '92%'}}></div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-green-100 rounded text-center">
                  <div className="font-bold text-green-800">Analysis Complete</div>
                  <div className="text-xs text-green-600">Confidence: 89%</div>
                </div>
              </div>

              {/* Data Sources */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">📊 Data Sources</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Historical Policies</span>
                    <span className="font-bold">1,247 cases</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Economic Indicators</span>
                    <span className="font-bold">15 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Demographic Data</span>
                    <span className="font-bold">Real-time</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">External Variables</span>
                    <span className="font-bold">89 factors</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">⚡ Quick Actions</h3>
                <div className="space-y-2">
                  <button className="btn-glass w-full text-sm">📊 Export Analysis</button>
                  <button className="btn-glass w-full text-sm">📧 Share Report</button>
                  <button className="btn-glass w-full text-sm">💾 Save Template</button>
                  <button className="btn-glass w-full text-sm">🔄 Run Sensitivity Analysis</button>
                </div>
              </div>

              {/* Methodology */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">🔬 Methodology</h3>
                <div className="text-sm space-y-2">
                  <div>
                    <span className="text-gray-500">Framework:</span>
                    <span className="font-bold ml-2">Bayesian Networks</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Algorithm:</span>
                    <span className="font-bold ml-2">Pearl's Causal Inference</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Validation:</span>
                    <span className="font-bold ml-2">Cross-validation</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Confidence:</span>
                    <span className="font-bold ml-2 text-green-600">89%</span>
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