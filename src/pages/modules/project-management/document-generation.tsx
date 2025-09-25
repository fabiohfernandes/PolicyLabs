import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface User {
  id: string;
  email: string;
  full_name: string;
  role: string;
  is_verified: boolean;
  two_factor_enabled: boolean;
  created_at: string;
}

export default function DocumentGenerationPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
    } else {
      router.push('/login');
      return;
    }
    setIsLoading(false);
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      <Head>
        <title>Document Generation Engine - PolicyLabs</title>
        <meta name="description" content="Automated document creation and template management" />
      </Head>

      {/* Header Navigation */}
      <header className="card-glass mx-6 mt-4 px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/logo.svg" alt="PolicyLabs" className="h-8 w-8" />
              <span className="text-xl font-bold">PolicyLabs</span>
            </Link>
            <span className="text-sm text-gray-600">
              Olá, {user?.full_name}
            </span>
          </div>

          <div className="flex items-center">
            <h1 className="text-xl font-semibold">Documentos</h1>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">
                {new Date().toLocaleString('pt-BR', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </span>
            </div>
            <Link href="/dashboard" className="btn-glass text-sm">
              Voltar
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">📄 Document Generation Engine</h1>

          {/* Tier Access Control */}
          <div className="card-glass p-6 mb-8 bg-gradient-to-r from-orange-100 to-yellow-100">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">⚡</span>
              <div>
                <h2 className="text-xl font-bold text-orange-800">Professional+ Feature</h2>
                <p className="text-orange-600">Advanced document generation available for Professional tier and above</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Document Creation */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">📝 Create New Document</h2>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Document Type</label>
                      <select className="input-glass">
                        <option>Project Proposal</option>
                        <option>Budget Request</option>
                        <option>Legal Ordinance</option>
                        <option>Public Notice</option>
                        <option>Progress Report</option>
                        <option>Environmental Impact Assessment</option>
                        <option>Public Consultation Document</option>
                        <option>Contract Template</option>
                        <option>Technical Specification</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Template</label>
                      <select className="input-glass">
                        <option>Standard Municipal Template</option>
                        <option>Federal Compliance Template</option>
                        <option>Simplified Version</option>
                        <option>Detailed Technical Template</option>
                        <option>Public Participation Template</option>
                        <option>Custom Template</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Project Context</label>
                    <textarea
                      className="input-glass h-32"
                      placeholder="Describe your project or initiative that needs documentation..."
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Department</label>
                      <select className="input-glass">
                        <option>Education</option>
                        <option>Health</option>
                        <option>Infrastructure</option>
                        <option>Environment</option>
                        <option>Social Services</option>
                        <option>Administration</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Priority Level</label>
                      <select className="input-glass">
                        <option>High Priority</option>
                        <option>Medium Priority</option>
                        <option>Standard</option>
                        <option>Low Priority</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Target Audience</label>
                      <select className="input-glass">
                        <option>Internal Team</option>
                        <option>Municipal Council</option>
                        <option>Citizens</option>
                        <option>Federal Government</option>
                        <option>Private Sector</option>
                      </select>
                    </div>
                  </div>

                  <button className="btn-glass-primary w-full py-3 text-lg">
                    🚀 Generate Document
                  </button>
                </div>
              </div>

              {/* Generated Document Preview */}
              <div className="card-glass p-8">
                <h3 className="text-xl font-bold mb-6">📋 Generated Document Preview</h3>

                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="text-center mb-8">
                    <img src="/logo.svg" alt="Municipality Logo" className="h-16 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold">PREFEITURA MUNICIPAL</h2>
                    <h3 className="text-lg text-gray-600">SECRETARIA DE EDUCAÇÃO</h3>
                  </div>

                  <div className="space-y-6">
                    <div className="text-center">
                      <h1 className="text-xl font-bold">PROJETO DE CONSTRUÇÃO DE NOVA ESCOLA MUNICIPAL</h1>
                      <p className="text-gray-600">Centro Educacional Integrado - Bairro São José</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-lg mb-3">1. APRESENTAÇÃO</h3>
                      <p className="text-gray-700 leading-relaxed">
                        O presente projeto tem por objetivo a construção de uma nova unidade escolar no Bairro São José,
                        visando atender a crescente demanda por vagas na educação infantil e ensino fundamental. A proposta
                        contempla a construção de um Centro Educacional Integrado com capacidade para 800 alunos, seguindo
                        os padrões de sustentabilidade e acessibilidade estabelecidos pelas diretrizes municipais.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-bold text-lg mb-3">2. JUSTIFICATIVA</h3>
                      <p className="text-gray-700 leading-relaxed">
                        O Bairro São José apresenta déficit de 450 vagas escolares, conforme levantamento realizado pela
                        Secretaria de Educação em 2024. O crescimento populacional da região, estimado em 12% nos últimos
                        cinco anos, demanda a ampliação da rede municipal de ensino para garantir o direito constitucional
                        à educação.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-bold text-lg mb-3">3. OBJETIVOS</h3>
                      <div className="space-y-2">
                        <p className="text-gray-700"><strong>Geral:</strong> Ampliar a oferta de vagas na rede municipal de ensino.</p>
                        <p className="text-gray-700"><strong>Específicos:</strong></p>
                        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                          <li>Construir centro educacional com 16 salas de aula</li>
                          <li>Implementar laboratórios de informática e ciências</li>
                          <li>Criar espaços comunitários integrados</li>
                          <li>Garantir acessibilidade universal</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-lg mb-3">4. RECURSOS NECESSÁRIOS</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-gray-50 rounded">
                          <h4 className="font-semibold mb-2">Orçamento Total</h4>
                          <div className="text-2xl font-bold text-green-600">R$ 12.300.000,00</div>
                        </div>
                        <div className="p-4 bg-gray-50 rounded">
                          <h4 className="font-semibold mb-2">Prazo de Execução</h4>
                          <div className="text-2xl font-bold text-blue-600">18 meses</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 text-center text-sm text-gray-500">
                    Documento gerado automaticamente pelo PolicyLabs APSS • {new Date().toLocaleDateString('pt-BR')}
                  </div>
                </div>

                <div className="flex space-x-4 mt-6">
                  <button className="btn-glass">📝 Edit Document</button>
                  <button className="btn-glass">📄 Download PDF</button>
                  <button className="btn-glass">📤 Share</button>
                  <button className="btn-glass">💾 Save Template</button>
                </div>
              </div>

              {/* Document Templates Library */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">📚 Document Templates Library</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 bg-white/10 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">Project Proposal Template</h4>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Popular</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">Standard template for project proposals with budget and timeline</p>
                    <div className="text-xs text-gray-500 mb-3">Used 847 times • 4.8★ rating</div>
                    <div className="space-x-2">
                      <button className="btn-glass text-xs">Use Template</button>
                      <button className="btn-glass text-xs">Preview</button>
                    </div>
                  </div>

                  <div className="p-4 bg-white/10 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">Legal Ordinance Draft</h4>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Legal</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">Legally compliant template for municipal ordinances</p>
                    <div className="text-xs text-gray-500 mb-3">Used 234 times • 4.9★ rating</div>
                    <div className="space-x-2">
                      <button className="btn-glass text-xs">Use Template</button>
                      <button className="btn-glass text-xs">Preview</button>
                    </div>
                  </div>

                  <div className="p-4 bg-white/10 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">Budget Request Form</h4>
                      <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Financial</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">Detailed budget request with justifications and projections</p>
                    <div className="text-xs text-gray-500 mb-3">Used 567 times • 4.7★ rating</div>
                    <div className="space-x-2">
                      <button className="btn-glass text-xs">Use Template</button>
                      <button className="btn-glass text-xs">Preview</button>
                    </div>
                  </div>

                  <div className="p-4 bg-white/10 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">Public Notice Template</h4>
                      <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">Public</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">Standardized format for public announcements and notices</p>
                    <div className="text-xs text-gray-500 mb-3">Used 1,234 times • 4.6★ rating</div>
                    <div className="space-x-2">
                      <button className="btn-glass text-xs">Use Template</button>
                      <button className="btn-glass text-xs">Preview</button>
                    </div>
                  </div>

                  <div className="p-4 bg-white/10 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">Progress Report</h4>
                      <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">Reports</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">Monthly and quarterly progress reporting template</p>
                    <div className="text-xs text-gray-500 mb-3">Used 456 times • 4.8★ rating</div>
                    <div className="space-x-2">
                      <button className="btn-glass text-xs">Use Template</button>
                      <button className="btn-glass text-xs">Preview</button>
                    </div>
                  </div>

                  <div className="p-4 bg-white/10 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">Contract Template</h4>
                      <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Contracts</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">Legal contract template for service providers</p>
                    <div className="text-xs text-gray-500 mb-3">Used 189 times • 4.9★ rating</div>
                    <div className="space-x-2">
                      <button className="btn-glass text-xs">Use Template</button>
                      <button className="btn-glass text-xs">Preview</button>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <button className="btn-glass-primary">📄 Browse All Templates</button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Recent Documents */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">📋 Recent Documents</h3>
                <div className="space-y-3">
                  <div className="p-2 bg-white/10 rounded text-sm">
                    <div className="font-semibold">School Construction Proposal</div>
                    <div className="text-xs text-gray-600">Project Proposal • 2 hours ago</div>
                  </div>
                  <div className="p-2 bg-white/10 rounded text-sm">
                    <div className="font-semibold">Budget Request Q4</div>
                    <div className="text-xs text-gray-600">Budget • 1 day ago</div>
                  </div>
                  <div className="p-2 bg-white/10 rounded text-sm">
                    <div className="font-semibold">Park Renovation Notice</div>
                    <div className="text-xs text-gray-600">Public Notice • 3 days ago</div>
                  </div>
                </div>
              </div>

              {/* AI Assistance */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">🤖 AI Document Assistant</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">Active</div>
                    <div className="text-sm text-gray-600">Smart Suggestions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">97%</div>
                    <div className="text-sm text-gray-600">Accuracy Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">2.3s</div>
                    <div className="text-sm text-gray-600">Avg Generation Time</div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">⚡ Quick Actions</h3>
                <div className="space-y-2">
                  <button className="btn-glass w-full text-sm">📄 New Document</button>
                  <button className="btn-glass w-full text-sm">📚 Template Library</button>
                  <button className="btn-glass w-full text-sm">📊 Usage Analytics</button>
                  <button className="btn-glass w-full text-sm">⚙️ Document Settings</button>
                </div>
              </div>

              {/* Document Statistics */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">📊 Statistics</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Documents Created</span>
                    <span className="font-bold">847</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Templates Used</span>
                    <span className="font-bold">23</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Time Saved</span>
                    <span className="font-bold">234 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Avg Quality Score</span>
                    <span className="font-bold text-green-600">4.8/5</span>
                  </div>
                </div>
              </div>

              {/* Format Options */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">📄 Export Formats</h3>
                <div className="space-y-2">
                  <button className="btn-glass w-full text-sm">📄 PDF Document</button>
                  <button className="btn-glass w-full text-sm">📝 Word Document</button>
                  <button className="btn-glass w-full text-sm">📊 Excel Spreadsheet</button>
                  <button className="btn-glass w-full text-sm">🌐 HTML Page</button>
                </div>
              </div>

              {/* Help */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">❓ Need Help?</h3>
                <div className="space-y-2">
                  <button className="btn-glass w-full text-sm">📖 User Guide</button>
                  <button className="btn-glass w-full text-sm">🎥 Video Tutorials</button>
                  <button className="btn-glass w-full text-sm">💬 Live Support</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}