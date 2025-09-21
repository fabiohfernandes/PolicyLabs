import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  Brain,
  BarChart3,
  TrendingUp,
  Target,
  Cpu,
  Database,
  Activity,
  Map,
  Users,
  DollarSign,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Settings,
  GitBranch,
  Zap,
  Globe
} from 'lucide-react';

const AIAnalysisPage = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedPilot, setSelectedPilot] = useState('saude');

  const executionSteps = [
    {
      id: 1,
      title: "Pergunta de Política",
      description: "Definir objetivos específicos (ex.: reduzir fila cirúrgica em 20%/12 meses)",
      icon: Target,
      color: "blue"
    },
    {
      id: 2,
      title: "Curadoria de Dados",
      description: "Integração de bases oficiais e privadas (IBGE, DataSUS, INEP, CAGED)",
      icon: Database,
      color: "green"
    },
    {
      id: 3,
      title: "Modelagem & Calibração",
      description: "SD + ABM + causalidade com calibração bayesiana",
      icon: Cpu,
      color: "purple"
    },
    {
      id: 4,
      title: "Simulações",
      description: "A/B/n, contrafactuais e stress tests de choques",
      icon: Activity,
      color: "orange"
    },
    {
      id: 5,
      title: "Otimização",
      description: "IA/RL multi-objetivo com restrições orçamentárias",
      icon: TrendingUp,
      color: "red"
    },
    {
      id: 6,
      title: "PolicyDNA",
      description: "Ranking e relatórios executivos com pesos ajustáveis",
      icon: Brain,
      color: "indigo"
    },
    {
      id: 7,
      title: "Feedback",
      description: "Aprendizados realimentam o próximo ciclo",
      icon: GitBranch,
      color: "teal"
    }
  ];

  const pilots = [
    {
      id: 'saude',
      title: 'Saúde',
      subtitle: 'Teletriagem + Regulação Cirúrgica',
      description: 'Sistema inteligente para redução de filas cirúrgicas e otimização de recursos de saúde',
      impact: 'Alto',
      cost: 'Médio',
      risk: 'Baixo',
      icon: '🏥',
      color: 'red'
    },
    {
      id: 'educacao',
      title: 'Educação',
      subtitle: 'Reforço Escolar Direcionado',
      description: 'Identificação e direcionamento inteligente de alunos para programas de reforço',
      impact: 'Alto',
      cost: 'Baixo',
      risk: 'Baixo',
      icon: '📚',
      color: 'blue'
    },
    {
      id: 'emprego',
      title: 'Emprego/MPME',
      subtitle: 'Qualificação + Microcrédito',
      description: 'Plataforma integrada de qualificação profissional e microcrédito produtivo',
      impact: 'Médio',
      cost: 'Médio',
      risk: 'Médio',
      icon: '💼',
      color: 'green'
    },
    {
      id: 'ecologia',
      title: 'Ecologia',
      subtitle: 'Restauração Ciliar + PSA',
      description: 'Programa de restauração com pagamento por serviços ambientais',
      impact: 'Médio',
      cost: 'Alto',
      risk: 'Médio',
      icon: '🌱',
      color: 'emerald'
    },
    {
      id: 'institucional',
      title: 'Institucional',
      subtitle: 'Digitalização de Serviços',
      description: 'Transformação digital de serviços públicos críticos',
      impact: 'Alto',
      cost: 'Alto',
      risk: 'Baixo',
      icon: '🏛️',
      color: 'purple'
    }
  ];

  const kpis = [
    { label: "Índice PolicyDNA", value: "85", unit: "/100", color: "blue" },
    { label: "QAPI por Eixo", value: "92", unit: "%", color: "green" },
    { label: "ICER Social", value: "R$ 15k", unit: "/QALY", color: "purple" },
    { label: "TtD/TtI", value: "45", unit: "dias", color: "orange" }
  ];

  const roadmapSteps = [
    {
      period: "100 Dias",
      title: "Fundação",
      items: [
        "Lakehouse + catálogos",
        "3 pilotos implementados",
        "Painel executivo",
        "20 bases integradas",
        "≥ 15 cenários com ICs"
      ],
      color: "blue"
    },
    {
      period: "180 Dias",
      title: "Expansão",
      items: [
        "ABM municipal",
        "Causalidade aplicada",
        "PolicyDNA v0",
        "Portal público beta",
        "Primeiras simulações"
      ],
      color: "purple"
    },
    {
      period: "365 Dias",
      title: "Produção",
      items: [
        "RL com restrições",
        "UQ avançada",
        "3 governos em produção",
        "Auditoria externa",
        "Marketplace de cenários"
      ],
      color: "green"
    }
  ];

  return (
    <>
      <Head>
        <title>Análise IA Avançada | PolicyLabs</title>
        <meta name="description" content="Sistema de simulação IA do Brasil para políticas públicas baseado em evidências com gêmeo digital nacional" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        {/* Navigation */}
        <header className="bg-white/25 dark:bg-white/5 backdrop-blur-sm border border-white/30 dark:border-white/10 rounded-2xl mx-6 mt-4 px-6 py-4">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="flex items-center space-x-4">
                <img src="/logo.svg" alt="PolicyLabs" className="h-8 w-8" />
                <span className="text-xl font-bold text-gray-900 dark:text-gray-100">PolicyLabs</span>
              </Link>
            </div>

            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Análise IA Avançada</h1>
            </div>

            <div className="flex items-center">
              <Link href="/dashboard" className="btn-glass text-sm">
                ← Dashboard
              </Link>
            </div>
          </div>
        </header>

        <main className="mx-6 mt-6 pb-8">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="card-glass p-12 mb-8 text-center">
              <div className="inline-flex items-center space-x-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full px-4 py-2 mb-6">
                <Brain className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                <span className="text-indigo-800 dark:text-indigo-300 text-sm font-medium">Gêmeo Digital do Brasil</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Simulação <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">IA do Brasil</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                <strong>Decisões certeiras, antes do gasto real.</strong> Um gêmeo digital do Brasil para testar políticas públicas com IA, reduzir desperdício e ampliar impacto social.
              </p>

              <div className="grid md:grid-cols-4 gap-6 mt-8">
                {kpis.map((kpi, index) => (
                  <div key={index} className="bg-white/50 dark:bg-white/5 p-6 rounded-xl border border-white/30 dark:border-white/10">
                    <div className={`text-3xl font-bold text-${kpi.color}-600 dark:text-${kpi.color}-400 mb-2`}>
                      {kpi.value}<span className="text-lg">{kpi.unit}</span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{kpi.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Execution Cycle */}
            <div className="card-glass p-8 mb-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  Ciclo de Execução em 7 Passos
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
                  Da pergunta de política ao feedback, um processo completo de simulação e otimização baseado em evidências
                </p>
              </div>

              {/* Timeline */}
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-500"></div>

                <div className="space-y-8">
                  {executionSteps.map((step, index) => {
                    const Icon = step.icon;
                    const isActive = activeStep === step.id;

                    return (
                      <div
                        key={step.id}
                        className={`relative flex items-start cursor-pointer transition-all duration-300 ${
                          isActive ? 'transform scale-105' : ''
                        }`}
                        onClick={() => setActiveStep(step.id)}
                      >
                        <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center border-4 border-white dark:border-gray-800 shadow-lg transition-all duration-300 ${
                          isActive
                            ? `bg-gradient-to-r from-${step.color}-500 to-${step.color}-600 text-white`
                            : 'bg-white dark:bg-gray-800 text-gray-400'
                        }`}>
                          <Icon className="h-8 w-8" />
                        </div>

                        <div className="ml-8 flex-1">
                          <div className={`p-6 rounded-xl border transition-all duration-300 ${
                            isActive
                              ? 'bg-white dark:bg-gray-800 border-indigo-200 dark:border-indigo-700 shadow-lg'
                              : 'bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700'
                          }`}>
                            <h3 className={`text-xl font-bold mb-2 ${
                              isActive ? 'text-gray-900 dark:text-gray-100' : 'text-gray-700 dark:text-gray-300'
                            }`}>
                              {step.id}. {step.title}
                            </h3>
                            <p className={`${
                              isActive ? 'text-gray-600 dark:text-gray-300' : 'text-gray-500 dark:text-gray-400'
                            }`}>
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Pilots Section */}
            <div className="card-glass p-8 mb-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  Pilotos Sugeridos
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  Alto impacto e boa medição para validação inicial do sistema
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {pilots.map((pilot) => (
                  <div
                    key={pilot.id}
                    className={`p-6 rounded-xl border cursor-pointer transition-all duration-300 hover:scale-105 ${
                      selectedPilot === pilot.id
                        ? 'bg-white dark:bg-gray-800 border-indigo-200 dark:border-indigo-700 shadow-lg'
                        : 'bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800'
                    }`}
                    onClick={() => setSelectedPilot(pilot.id)}
                  >
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-2">{pilot.icon}</div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">{pilot.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">{pilot.subtitle}</p>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      {pilot.description}
                    </p>

                    <div className="flex justify-between text-xs">
                      <span className="flex items-center">
                        <div className={`w-2 h-2 rounded-full bg-${pilot.impact === 'Alto' ? 'green' : pilot.impact === 'Médio' ? 'yellow' : 'red'}-500 mr-1`}></div>
                        Impacto: {pilot.impact}
                      </span>
                      <span className="flex items-center">
                        <div className={`w-2 h-2 rounded-full bg-${pilot.cost === 'Baixo' ? 'green' : pilot.cost === 'Médio' ? 'yellow' : 'red'}-500 mr-1`}></div>
                        Custo: {pilot.cost}
                      </span>
                      <span className="flex items-center">
                        <div className={`w-2 h-2 rounded-full bg-${pilot.risk === 'Baixo' ? 'green' : pilot.risk === 'Médio' ? 'yellow' : 'red'}-500 mr-1`}></div>
                        Risco: {pilot.risk}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pareto Frontier Visualization */}
              <div className="bg-white/50 dark:bg-white/5 p-6 rounded-xl border border-white/30 dark:border-white/10">
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                  Fronteira de Pareto • Custo vs Impacto
                </h3>
                <div className="h-64 bg-gradient-to-tr from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-lg flex items-center justify-center">
                  <div className="text-gray-500 dark:text-gray-400 text-center">
                    <BarChart3 className="h-12 w-12 mx-auto mb-2" />
                    <p>Visualização interativa da Fronteira de Pareto</p>
                    <p className="text-sm">Eixo X: Custo • Eixo Y: Impacto • Tamanho: Risco</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Roadmap */}
            <div className="card-glass p-8 mb-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  Roadmap de Implementação
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  Cronograma estruturado para 100/180/365 dias
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {roadmapSteps.map((phase, index) => (
                  <div key={index} className="relative">
                    <div className="text-center mb-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-${phase.color}-500 to-${phase.color}-600 text-white font-bold text-lg mb-3`}>
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">{phase.period}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">{phase.title}</p>
                    </div>

                    <div className="space-y-3">
                      {phase.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start space-x-3">
                          <CheckCircle className={`h-5 w-5 text-${phase.color}-500 flex-shrink-0 mt-0.5`} />
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {/* Painel Executivo */}
              <div className="card-glass p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">Painel Executivo</h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>• Mapa coroplético territorial</li>
                  <li>• Séries com bandas de confiança</li>
                  <li>• Radar multi-eixo de impactos</li>
                  <li>• Heatmap de oportunidades</li>
                </ul>
              </div>

              {/* Policy Cards */}
              <div className="card-glass p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">Policy Cards</h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>• Objetivo & população-alvo</li>
                  <li>• Custo & impacto esperado</li>
                  <li>• Risco & equidade</li>
                  <li>• Evidência causal & limitações</li>
                </ul>
              </div>

              {/* Governança */}
              <div className="card-glass p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">Ética & Governança</h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>• LGPD & Privacy-by-design</li>
                  <li>• Differential privacy</li>
                  <li>• Auditoria externa</li>
                  <li>• Data lineage completo</li>
                </ul>
              </div>
            </div>

            {/* CTA Section */}
            <div className="card-glass p-12 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Pronto para Transformar sua Gestão?
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                  <strong>Seleção conjunta de 3 pilotos</strong>, fixação de granularidade (UF/municípios) e pesos iniciais do PolicyDNA.
                  Em <strong>90 dias</strong>, pacote com simulações, policy cards e KPIs para decisão.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="btn-glass-primary px-8 py-4 text-lg font-semibold">
                    Agendar Demonstração
                    <ArrowRight className="inline ml-2 h-5 w-5" />
                  </Link>
                  <Link href="/cases" className="btn-glass px-8 py-4 text-lg font-semibold">
                    Ver Casos de Sucesso
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default AIAnalysisPage;