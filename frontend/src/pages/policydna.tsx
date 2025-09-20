import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  Brain,
  Cpu,
  Database,
  Network,
  BarChart3,
  Users,
  Globe,
  Zap,
  Target,
  TrendingUp,
  Shield,
  Settings,
  ArrowRight,
  CheckCircle,
  Circle
} from 'lucide-react';

const PolicyDNAPage = () => {
  return (
    <>
      <Head>
        <title>PolicyDNA™ - AI Policy Simulation System | PolicyLabs</title>
        <meta name="description" content="Conheça o PolicyDNA™, o motor de inteligência artificial que cria assinaturas genéticas para políticas públicas e democratiza a simulação inteligente de políticas governamentais." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Navbar */}
        <nav className="backdrop-blur-md bg-white/10 border-b border-white/20 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <Link href="/sobre" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">PolicyLabs</span>
              </Link>

              <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-white/80 hover:text-white transition-colors">Início</Link>
                <Link href="/dashboard" className="text-white/80 hover:text-white transition-colors">Quadro</Link>
                <Link href="/sobre" className="text-white/80 hover:text-white transition-colors">Sobre</Link>
                <Link href="/policydna" className="text-white font-semibold">PolicyDNA</Link>
              </div>

              <Link href="/register" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                Começar Agora
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="backdrop-blur-md bg-white/10 rounded-3xl border border-white/20 p-8 mb-12">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Brain className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                PolicyDNA™
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-4xl mx-auto">
                "Onde a Política Encontra a Precisão"
              </p>
              <p className="text-lg text-white/70 max-w-4xl mx-auto leading-relaxed">
                O AI Policy Simulation System (APSS) é a plataforma proprietária da PolicyLabs que democratiza a simulação inteligente de políticas públicas, permitindo que governos de qualquer porte tomem decisões baseadas em evidências que maximizam impacto social e otimizam recursos.
              </p>
            </div>
          </div>
        </section>

        {/* Componentes Core */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Componentes Core</h2>
              <p className="text-xl text-white/70">Os pilares tecnológicos do PolicyDNA™</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* PolicyDNA Engine */}
              <div className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">PolicyDNA™ Engine</h3>
                  <span className="ml-auto bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    Proprietário
                  </span>
                </div>

                <div className="space-y-4">
                  <p className="text-white/80"><strong>Funcionalidade:</strong> Cria "assinaturas genéticas" para políticas públicas</p>
                  <p className="text-white/80"><strong>Tecnologia:</strong> ML + Graph Neural Networks + NLP</p>
                  <p className="text-white/80"><strong>Input:</strong> Dados de políticas, contexto municipal, resultados históricos</p>
                  <p className="text-white/80"><strong>Output:</strong> Score de compatibilidade, probabilidade de sucesso, recomendações</p>
                </div>
              </div>

              {/* Country Digital Twin */}
              <div className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mr-4">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Country Digital Twin (CDT)</h3>
                </div>

                <p className="text-white/80 mb-4"><strong>Funcionalidade:</strong> Simulação viva de municípios em tempo real</p>

                <div className="space-y-3">
                  <div className="flex items-center text-white/70">
                    <Users className="h-5 w-5 mr-3 text-blue-400" />
                    <span>Agentes Individuais: Simulação de cidadãos com comportamentos realistas</span>
                  </div>
                  <div className="flex items-center text-white/70">
                    <TrendingUp className="h-5 w-5 mr-3 text-green-400" />
                    <span>Economia Municipal: Modelo macroeconômico local</span>
                  </div>
                  <div className="flex items-center text-white/70">
                    <Network className="h-5 w-5 mr-3 text-purple-400" />
                    <span>Infraestrutura Física: Mapas, transporte, utilidades</span>
                  </div>
                  <div className="flex items-center text-white/70">
                    <Users className="h-5 w-5 mr-3 text-pink-400" />
                    <span>Dinâmica Social: Redes sociais, movimentos populacionais</span>
                  </div>
                </div>
              </div>

              {/* Government Intelligence Engine */}
              <div className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-4">
                    <Cpu className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Government Intelligence Engine (GIE)</h3>
                </div>

                <p className="text-white/80 mb-4"><strong>Funcionalidade:</strong> Otimização de políticas usando IA avançada</p>

                <div className="space-y-3">
                  <div className="flex items-center text-white/70">
                    <Zap className="h-5 w-5 mr-3 text-yellow-400" />
                    <span>CausalAI Framework: Identifica relações causa-efeito reais</span>
                  </div>
                  <div className="flex items-center text-white/70">
                    <Target className="h-5 w-5 mr-3 text-red-400" />
                    <span>Multi-Objective Optimizer: Equilibra objetivos econômicos, sociais, ambientais</span>
                  </div>
                  <div className="flex items-center text-white/70">
                    <BarChart3 className="h-5 w-5 mr-3 text-blue-400" />
                    <span>Political Feasibility Scorer: Prevê viabilidade política de propostas</span>
                  </div>
                </div>
              </div>

              {/* Citizen Engagement Hub */}
              <div className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg flex items-center justify-center mr-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Citizen Engagement Hub</h3>
                </div>

                <p className="text-white/80 mb-4"><strong>Funcionalidade:</strong> "Facebook das Necessidades" - democracia participativa</p>

                <div className="space-y-3">
                  <div className="flex items-center text-white/70">
                    <CheckCircle className="h-5 w-5 mr-3 text-green-400" />
                    <span>Sistema de votação em projetos locais</span>
                  </div>
                  <div className="flex items-center text-white/70">
                    <CheckCircle className="h-5 w-5 mr-3 text-green-400" />
                    <span>Feed de necessidades comunitárias</span>
                  </div>
                  <div className="flex items-center text-white/70">
                    <CheckCircle className="h-5 w-5 mr-3 text-green-400" />
                    <span>Comentários e sugestões em tempo real</span>
                  </div>
                  <div className="flex items-center text-white/70">
                    <CheckCircle className="h-5 w-5 mr-3 text-green-400" />
                    <span>Gamificação de participação cívica</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Módulos Funcionais */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Principais Módulos</h2>
              <p className="text-xl text-white/70">Funcionalidades que transformam a gestão pública</p>
            </div>

            {/* Project Wizard */}
            <div className="backdrop-blur-md bg-white/10 rounded-3xl border border-white/20 p-8 mb-8">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-6">
                  <Settings className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">Project Wizard</h3>
                  <p className="text-xl text-white/70">"Uber da Gestão" - Projetos sob demanda</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">1</div>
                    <h4 className="text-white font-semibold">Seleção de Categoria</h4>
                  </div>
                  <p className="text-white/70 text-sm">"O que você quer implementar?"</p>
                </div>

                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">2</div>
                    <h4 className="text-white font-semibold">Descrição Simples</h4>
                  </div>
                  <p className="text-white/70 text-sm">"Conte-nos em uma frase"</p>
                </div>

                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">3</div>
                    <h4 className="text-white font-semibold">Contexto</h4>
                  </div>
                  <p className="text-white/70 text-sm">Auto-preenchido com dados municipais</p>
                </div>

                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">4</div>
                    <h4 className="text-white font-semibold">Templates</h4>
                  </div>
                  <p className="text-white/70 text-sm">PolicyDNA™ sugere 3-5 opções similares</p>
                </div>

                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">5</div>
                    <h4 className="text-white font-semibold">Customização</h4>
                  </div>
                  <p className="text-white/70 text-sm">Ajustes básicos (localização, capacidade, design)</p>
                </div>

                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">6</div>
                    <h4 className="text-white font-semibold">Preview</h4>
                  </div>
                  <p className="text-white/70 text-sm">Visualização 3D + impacto estimado</p>
                </div>
              </div>
            </div>

            {/* Módulos Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 p-6">
                <div className="flex items-center mb-4">
                  <Brain className="h-8 w-8 text-purple-400 mr-3" />
                  <h4 className="text-xl font-bold text-white">PolicyDNA™ Recommendations</h4>
                </div>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-400" />Score de compatibilidade >70%</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-400" />Casos históricos mensuráveis</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-400" />Adaptações para contexto local</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-400" />Timeline e orçamento estimados</li>
                </ul>
              </div>

              <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 p-6">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-blue-400 mr-3" />
                  <h4 className="text-xl font-bold text-white">Citizen Engagement Feed</h4>
                </div>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-400" />Feed mobile-first com projetos ativos</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-400" />Sistema de votação simples</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-400" />Notificações push para votações</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-400" />Gamificação básica</li>
                </ul>
              </div>

              <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 p-6">
                <div className="flex items-center mb-4">
                  <BarChart3 className="h-8 w-8 text-green-400 mr-3" />
                  <h4 className="text-xl font-bold text-white">Basic Simulation Engine</h4>
                </div>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-400" />Simulação baseada em casos históricos</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-400" />Métricas de impacto (ROI, timeline)</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-400" />Cenários otimista/realista/pessimista</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-400" />Comparação com status quo</li>
                </ul>
              </div>

              <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 p-6">
                <div className="flex items-center mb-4">
                  <Database className="h-8 w-8 text-yellow-400 mr-3" />
                  <h4 className="text-xl font-bold text-white">Quadro Analytics</h4>
                </div>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-center"><Circle className="h-4 w-4 mr-2 text-blue-400" />Municipal KPIs</li>
                  <li className="flex items-center"><Circle className="h-4 w-4 mr-2 text-purple-400" />Project Progress</li>
                  <li className="flex items-center"><Circle className="h-4 w-4 mr-2 text-pink-400" />Citizen Sentiment</li>
                  <li className="flex items-center"><Circle className="h-4 w-4 mr-2 text-green-400" />Benchmarking</li>
                </ul>
              </div>

              <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 p-6">
                <div className="flex items-center mb-4">
                  <Shield className="h-8 w-8 text-red-400 mr-3" />
                  <h4 className="text-xl font-bold text-white">Document Generation</h4>
                </div>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-center"><Circle className="h-4 w-4 mr-2 text-blue-400" />Project Proposals</li>
                  <li className="flex items-center"><Circle className="h-4 w-4 mr-2 text-purple-400" />Budget Breakdowns</li>
                  <li className="flex items-center"><Circle className="h-4 w-4 mr-2 text-pink-400" />Impact Reports</li>
                  <li className="flex items-center"><Circle className="h-4 w-4 mr-2 text-green-400" />Compliance Checklists</li>
                </ul>
              </div>

              <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 p-6">
                <div className="flex items-center mb-4">
                  <Globe className="h-8 w-8 text-cyan-400 mr-3" />
                  <h4 className="text-xl font-bold text-white">Mobile App (Basic)</h4>
                </div>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-center"><Circle className="h-4 w-4 mr-2 text-blue-400" />Prefeito App</li>
                  <li className="flex items-center"><Circle className="h-4 w-4 mr-2 text-purple-400" />Citizen App</li>
                  <li className="flex items-center"><Circle className="h-4 w-4 mr-2 text-pink-400" />Offline Mode</li>
                  <li className="flex items-center"><Circle className="h-4 w-4 mr-2 text-green-400" />Push Notifications</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="backdrop-blur-md bg-white/10 rounded-3xl border border-white/20 p-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Transforme Sua Gestão com PolicyDNA™
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Democratize a competência governamental e acelere a tomada de decisões públicas com o poder da inteligência artificial.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Começar Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link href="/dashboard" className="border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300">
                  Ver Quadro
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="backdrop-blur-md bg-white/5 border-t border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xl font-bold text-white">PolicyLabs</span>
                </div>
                <p className="text-white/70 mb-4">
                  Democratizando o acesso a tecnologia sofisticada de simulação de políticas para governos de todos os portes.
                </p>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Plataforma</h4>
                <ul className="space-y-2 text-white/70">
                  <li><Link href="/dashboard" className="hover:text-white transition-colors">Quadro</Link></li>
                  <li><Link href="/local-ia" className="hover:text-white transition-colors">IA Local</Link></li>
                  <li><Link href="/realtime-info" className="hover:text-white transition-colors">Info Tempo Real</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Empresa</h4>
                <ul className="space-y-2 text-white/70">
                  <li><Link href="/sobre" className="hover:text-white transition-colors">Sobre</Link></li>
                  <li><Link href="/policydna" className="hover:text-white transition-colors">PolicyDNA™</Link></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
              <p>&copy; 2024 PolicyLabs. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PolicyDNAPage;