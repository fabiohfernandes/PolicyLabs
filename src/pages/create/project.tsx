import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  Target,
  Users,
  MapPin,
  Calendar,
  DollarSign,
  Lightbulb,
  FileText,
  CheckCircle,
  ArrowRight,
  Copy,
  Download,
  Sparkles,
  Brain,
  MessageSquare,
  Settings,
  Clock,
  TrendingUp,
  Shield,
  Zap,
  Send,
  Bot,
  User,
  Loader,
  RefreshCw,
  X
} from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ProjectData {
  // Informações Básicas
  projectName: string;
  projectDescription: string;
  problemStatement: string;

  // Objetivos e Metas
  mainObjective: string;
  specificGoals: string;
  successMetrics: string;

  // Área de Execução
  geographicScope: string;
  targetLocation: string;
  populationSize: string;

  // Beneficiários
  primaryBeneficiaries: string;
  secondaryBeneficiaries: string;
  estimatedBeneficiaries: string;

  // Recursos e Orçamento
  availableBudget: string;
  budgetSource: string;
  additionalResources: string;

  // Cronograma
  expectedDuration: string;
  implementationPhases: string;
  keyMilestones: string;

  // Contexto Institucional
  responsibleDepartment: string;
  stakeholders: string;
  politicalPriority: string;

  // Desafios e Riscos
  anticipatedChallenges: string;
  riskMitigation: string;
  legalRequirements: string;

  // Inspiração e Referências
  similarProjects: string;
  innovationAspects: string;
  expectedImpact: string;
}

const CreateProjectPage = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [projectData, setProjectData] = useState<ProjectData>({
    projectName: '',
    projectDescription: '',
    problemStatement: '',
    mainObjective: '',
    specificGoals: '',
    successMetrics: '',
    geographicScope: '',
    targetLocation: '',
    populationSize: '',
    primaryBeneficiaries: '',
    secondaryBeneficiaries: '',
    estimatedBeneficiaries: '',
    availableBudget: '',
    budgetSource: '',
    additionalResources: '',
    expectedDuration: '',
    implementationPhases: '',
    keyMilestones: '',
    responsibleDepartment: '',
    stakeholders: '',
    politicalPriority: '',
    anticipatedChallenges: '',
    riskMitigation: '',
    legalRequirements: '',
    similarProjects: '',
    innovationAspects: '',
    expectedImpact: ''
  });

  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [showPrompt, setShowPrompt] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  const sections = [
    {
      id: 0,
      title: "Informações Básicas",
      description: "Fundamentos do projeto",
      icon: Lightbulb,
      color: "blue",
      fields: [
        { key: 'projectName', label: 'Nome do Projeto', placeholder: 'Ex: Programa de Digitalização Escolar', type: 'text' },
        { key: 'projectDescription', label: 'Descrição Geral', placeholder: 'Descreva o projeto em linhas gerais...', type: 'textarea' },
        { key: 'problemStatement', label: 'Problema a ser Resolvido', placeholder: 'Qual problema específico este projeto pretende resolver?', type: 'textarea' }
      ]
    },
    {
      id: 1,
      title: "Objetivos e Metas",
      description: "O que você quer alcançar",
      icon: Target,
      color: "green",
      fields: [
        { key: 'mainObjective', label: 'Objetivo Principal', placeholder: 'Ex: Reduzir em 30% a evasão escolar no ensino fundamental', type: 'textarea' },
        { key: 'specificGoals', label: 'Objetivos Específicos', placeholder: 'Liste os objetivos específicos e mensuráveis...', type: 'textarea' },
        { key: 'successMetrics', label: 'Métricas de Sucesso', placeholder: 'Como você medirá o sucesso do projeto?', type: 'textarea' }
      ]
    },
    {
      id: 2,
      title: "Área de Execução",
      description: "Onde será implementado",
      icon: MapPin,
      color: "purple",
      fields: [
        { key: 'geographicScope', label: 'Abrangência Geográfica', placeholder: 'Ex: Municipal, Regional, Estadual...', type: 'text' },
        { key: 'targetLocation', label: 'Localização Específica', placeholder: 'Bairros, distritos, regiões específicas...', type: 'textarea' },
        { key: 'populationSize', label: 'Tamanho da População Local', placeholder: 'Ex: 50.000 habitantes', type: 'text' }
      ]
    },
    {
      id: 3,
      title: "Beneficiários",
      description: "Quem será impactado",
      icon: Users,
      color: "orange",
      fields: [
        { key: 'primaryBeneficiaries', label: 'Beneficiários Diretos', placeholder: 'Ex: Estudantes de 6 a 14 anos das escolas públicas municipais', type: 'textarea' },
        { key: 'secondaryBeneficiaries', label: 'Beneficiários Indiretos', placeholder: 'Ex: Famílias, professores, comunidade local...', type: 'textarea' },
        { key: 'estimatedBeneficiaries', label: 'Número Estimado de Beneficiários', placeholder: 'Ex: 2.500 estudantes diretamente, 8.000 pessoas indiretamente', type: 'textarea' }
      ]
    },
    {
      id: 4,
      title: "Recursos e Orçamento",
      description: "Recursos disponíveis",
      icon: DollarSign,
      color: "red",
      fields: [
        { key: 'availableBudget', label: 'Orçamento Disponível', placeholder: 'Ex: R$ 500.000 para o primeiro ano', type: 'text' },
        { key: 'budgetSource', label: 'Fonte dos Recursos', placeholder: 'Ex: Orçamento municipal, convênios, emendas parlamentares...', type: 'textarea' },
        { key: 'additionalResources', label: 'Recursos Adicionais Necessários', placeholder: 'Recursos humanos, infraestrutura, parcerias...', type: 'textarea' }
      ]
    },
    {
      id: 5,
      title: "Cronograma",
      description: "Quando será executado",
      icon: Calendar,
      color: "indigo",
      fields: [
        { key: 'expectedDuration', label: 'Duração Esperada', placeholder: 'Ex: 18 meses', type: 'text' },
        { key: 'implementationPhases', label: 'Fases de Implementação', placeholder: 'Descreva as principais fases do projeto...', type: 'textarea' },
        { key: 'keyMilestones', label: 'Marcos Importantes', placeholder: 'Principais entregas e marcos do projeto...', type: 'textarea' }
      ]
    },
    {
      id: 6,
      title: "Contexto Institucional",
      description: "Estrutura organizacional",
      icon: Settings,
      color: "teal",
      fields: [
        { key: 'responsibleDepartment', label: 'Secretaria/Departamento Responsável', placeholder: 'Ex: Secretaria Municipal de Educação', type: 'text' },
        { key: 'stakeholders', label: 'Partes Interessadas', placeholder: 'Liste as principais partes interessadas e seus papéis...', type: 'textarea' },
        { key: 'politicalPriority', label: 'Prioridade Política', placeholder: 'Qual a importância política e estratégica deste projeto?', type: 'textarea' }
      ]
    },
    {
      id: 7,
      title: "Desafios e Riscos",
      description: "Obstáculos previstos",
      icon: Shield,
      color: "yellow",
      fields: [
        { key: 'anticipatedChallenges', label: 'Desafios Antecipados', placeholder: 'Quais obstáculos você prevê?', type: 'textarea' },
        { key: 'riskMitigation', label: 'Estratégias de Mitigação', placeholder: 'Como pretende superar os desafios?', type: 'textarea' },
        { key: 'legalRequirements', label: 'Requisitos Legais', placeholder: 'Leis, regulamentos, licenças necessárias...', type: 'textarea' }
      ]
    },
    {
      id: 8,
      title: "Inspiração e Impacto",
      description: "Referências e expectativas",
      icon: Sparkles,
      color: "pink",
      fields: [
        { key: 'similarProjects', label: 'Projetos Similares de Referência', placeholder: 'Conhece projetos similares que deram certo? Onde?', type: 'textarea' },
        { key: 'innovationAspects', label: 'Aspectos Inovadores', placeholder: 'O que há de inovador ou diferencial neste projeto?', type: 'textarea' },
        { key: 'expectedImpact', label: 'Impacto Esperado', placeholder: 'Qual transformação você espera ver na comunidade?', type: 'textarea' }
      ]
    }
  ];

  const handleInputChange = (key: keyof ProjectData, value: string) => {
    setProjectData(prev => ({ ...prev, [key]: value }));
  };

  const generatePRDPrompt = () => {
    const prompt = `# PROMPT PARA DESENVOLVIMENTO DE PROJETO PÚBLICO

Você é um consultor especializado em gestão pública e desenvolvimento de projetos governamentais. Com base nas informações fornecidas abaixo, ajude-me a desenvolver, refinar e estruturar um projeto público completo.

## INFORMAÇÕES DO PROJETO

### 📋 IDENTIFICAÇÃO
**Nome do Projeto:** ${projectData.projectName || '[A definir]'}
**Descrição:** ${projectData.projectDescription || '[A definir]'}
**Problema a Resolver:** ${projectData.problemStatement || '[A definir]'}

### 🎯 OBJETIVOS E METAS
**Objetivo Principal:** ${projectData.mainObjective || '[A definir]'}
**Objetivos Específicos:** ${projectData.specificGoals || '[A definir]'}
**Métricas de Sucesso:** ${projectData.successMetrics || '[A definir]'}

### 📍 ÁREA DE EXECUÇÃO
**Abrangência:** ${projectData.geographicScope || '[A definir]'}
**Localização:** ${projectData.targetLocation || '[A definir]'}
**População Local:** ${projectData.populationSize || '[A definir]'}

### 👥 BENEFICIÁRIOS
**Beneficiários Diretos:** ${projectData.primaryBeneficiaries || '[A definir]'}
**Beneficiários Indiretos:** ${projectData.secondaryBeneficiaries || '[A definir]'}
**Estimativa Total:** ${projectData.estimatedBeneficiaries || '[A definir]'}

### 💰 RECURSOS E ORÇAMENTO
**Orçamento Disponível:** ${projectData.availableBudget || '[A definir]'}
**Fonte dos Recursos:** ${projectData.budgetSource || '[A definir]'}
**Recursos Adicionais:** ${projectData.additionalResources || '[A definir]'}

### ⏱️ CRONOGRAMA
**Duração Esperada:** ${projectData.expectedDuration || '[A definir]'}
**Fases de Implementação:** ${projectData.implementationPhases || '[A definir]'}
**Marcos Importantes:** ${projectData.keyMilestones || '[A definir]'}

### 🏛️ CONTEXTO INSTITUCIONAL
**Responsável:** ${projectData.responsibleDepartment || '[A definir]'}
**Stakeholders:** ${projectData.stakeholders || '[A definir]'}
**Prioridade Política:** ${projectData.politicalPriority || '[A definir]'}

### ⚠️ DESAFIOS E RISCOS
**Desafios Antecipados:** ${projectData.anticipatedChallenges || '[A definir]'}
**Estratégias de Mitigação:** ${projectData.riskMitigation || '[A definir]'}
**Requisitos Legais:** ${projectData.legalRequirements || '[A definir]'}

### ✨ INSPIRAÇÃO E IMPACTO
**Projetos de Referência:** ${projectData.similarProjects || '[A definir]'}
**Aspectos Inovadores:** ${projectData.innovationAspects || '[A definir]'}
**Impacto Esperado:** ${projectData.expectedImpact || '[A definir]'}

## SOLICITAÇÃO DE ANÁLISE

Por favor, analise estas informações e me ajude a:

1. **VALIDAR E REFINAR** os objetivos, identificando possíveis lacunas ou inconsistências
2. **ESTRUTURAR** um cronograma detalhado com fases, atividades e marcos
3. **DETALHAR** o orçamento, sugerindo distribuição de recursos por categoria
4. **IDENTIFICAR** riscos adicionais e estratégias de mitigação
5. **PROPOR** indicadores de monitoramento e avaliação
6. **SUGERIR** melhorias, inovações ou adaptações baseadas em boas práticas
7. **ELABORAR** um plano de comunicação e engajamento dos stakeholders

Comece analisando a consistência geral do projeto e destacando os pontos fortes e fracos. Em seguida, faça perguntas específicas para esclarecer aspectos que precisam ser mais desenvolvidos.

Estou aberto a discussões iterativas para aperfeiçoar este projeto. Que aspectos você gostaria de explorar primeiro?`;

    setGeneratedPrompt(prompt);
    setShowPrompt(true);
  };

  const startChatWithPrompt = () => {
    // Initialize chat with the generated prompt as first message
    const initialMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: generatedPrompt,
      timestamp: new Date()
    };

    setChatMessages([initialMessage]);
    setCurrentMessage('');
    setShowChat(true);
    setShowPrompt(false);

    // Call real OpenAI API
    callOpenAI(generatedPrompt);
  };

  const callOpenAI = async (message: string) => {
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message,
          context: 'project_creation'
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get AI response');
      }

      const data = await response.json();

      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.response,
        timestamp: new Date()
      };

      setChatMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error('Error calling OpenAI:', error);

      // Fallback response in case of error
      const errorResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Desculpe, ocorreu um erro ao processar sua mensagem. Por favor, tente novamente ou verifique sua conexão.',
        timestamp: new Date()
      };

      setChatMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = async () => {
    if (!currentMessage.trim() || isLoading) return;

    const messageToSend = currentMessage;
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: messageToSend,
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMessage]);
    setCurrentMessage('');

    // Call OpenAI API
    await callOpenAI(messageToSend);
  };

  const clearChat = () => {
    setChatMessages([]);
    setCurrentMessage('');
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPrompt);
    // Poderia adicionar um toast de confirmação aqui
  };

  const downloadPrompt = () => {
    const element = document.createElement('a');
    const file = new Blob([generatedPrompt], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `PRD_${projectData.projectName || 'Projeto'}_${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const getCompletionPercentage = () => {
    const totalFields = sections.reduce((acc, section) => acc + section.fields.length, 0);
    const completedFields = Object.values(projectData).filter(value => value.trim() !== '').length;
    return Math.round((completedFields / totalFields) * 100);
  };

  const isCurrentSectionComplete = () => {
    const currentSectionFields = sections[currentSection].fields;
    return currentSectionFields.every(field => {
      return projectData[field.key as keyof ProjectData].trim() !== '';
    });
  };

  return (
    <>
      <Head>
        <title>Criar Projeto | PolicyLabs</title>
        <meta name="description" content="Ferramenta interativa para estruturar projetos públicos e gerar prompts para brainstorming com IA" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
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
              <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Criador de Projetos</h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {getCompletionPercentage()}% completo
              </div>
              <Link href="/dashboard" className="btn-glass text-sm">
                ← Dashboard
              </Link>
            </div>
          </div>
        </header>

        <main className="mx-6 mt-6 pb-8">
          <div className="max-w-7xl mx-auto">
            {!showPrompt && !showChat ? (
              <>
                {/* Progress Bar */}
                <div className="card-glass p-6 mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                      Estruture seu Projeto Público
                    </h2>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Seção {currentSection + 1} de {sections.length}
                    </div>
                  </div>

                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
                    ></div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300">
                    Preencha as informações estruturadas para gerar um prompt detalhado que servirá como base para brainstorming com IA sobre seu projeto.
                  </p>
                </div>

                {/* Section Navigation */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
                  {sections.map((section, index) => {
                    const Icon = section.icon;
                    const isActive = currentSection === index;
                    const isCompleted = section.fields.every(field =>
                      projectData[field.key as keyof ProjectData].trim() !== ''
                    );

                    return (
                      <button
                        key={section.id}
                        onClick={() => setCurrentSection(index)}
                        className={`p-4 rounded-xl border transition-all duration-300 text-left ${
                          isActive
                            ? 'bg-white dark:bg-gray-800 border-blue-200 dark:border-blue-700 shadow-lg scale-105'
                            : 'bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800'
                        }`}
                      >
                        <div className="flex items-center space-x-3 mb-2">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            isCompleted
                              ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                              : `bg-${section.color}-100 dark:bg-${section.color}-900/30 text-${section.color}-600 dark:text-${section.color}-400`
                          }`}>
                            {isCompleted ? <CheckCircle className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            {index + 1}/{sections.length}
                          </div>
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm mb-1">
                          {section.title}
                        </h3>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {section.description}
                        </p>
                      </button>
                    );
                  })}
                </div>

                {/* Current Section Form */}
                <div className="card-glass p-8 mb-8">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r from-${sections[currentSection].color}-500 to-${sections[currentSection].color}-600 text-white`}>
                      {React.createElement(sections[currentSection].icon, { className: "h-6 w-6" })}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        {sections[currentSection].title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300">
                        {sections[currentSection].description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {sections[currentSection].fields.map((field) => (
                      <div key={field.key}>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          {field.label}
                        </label>
                        {field.type === 'textarea' ? (
                          <textarea
                            value={projectData[field.key as keyof ProjectData]}
                            onChange={(e) => handleInputChange(field.key as keyof ProjectData, e.target.value)}
                            placeholder={field.placeholder}
                            rows={4}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                          />
                        ) : (
                          <input
                            type="text"
                            value={projectData[field.key as keyof ProjectData]}
                            onChange={(e) => handleInputChange(field.key as keyof ProjectData, e.target.value)}
                            placeholder={field.placeholder}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between items-center mt-8">
                    <button
                      onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
                      disabled={currentSection === 0}
                      className="btn-glass px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      ← Anterior
                    </button>

                    <div className="flex space-x-4">
                      {currentSection === sections.length - 1 ? (
                        <button
                          onClick={generatePRDPrompt}
                          className="btn-glass-primary px-8 py-3 font-semibold"
                        >
                          <Brain className="inline mr-2 h-5 w-5" />
                          Gerar Prompt PRD
                        </button>
                      ) : (
                        <button
                          onClick={() => setCurrentSection(Math.min(sections.length - 1, currentSection + 1))}
                          className="btn-glass-primary px-6 py-3"
                        >
                          Próximo →
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </>
            ) : showPrompt ? (
              /* Generated Prompt Display */
              <div className="card-glass p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        Prompt PRD Gerado
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300">
                        Copie e cole este prompt no ChatGPT para iniciar o brainstorming
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button
                      onClick={startChatWithPrompt}
                      className="btn-glass-primary px-6 py-2 text-sm font-semibold"
                    >
                      <MessageSquare className="inline mr-2 h-4 w-4" />
                      Iniciar Chat com IA
                    </button>
                    <button
                      onClick={copyToClipboard}
                      className="btn-glass px-4 py-2 text-sm"
                    >
                      <Copy className="inline mr-2 h-4 w-4" />
                      Copiar
                    </button>
                    <button
                      onClick={downloadPrompt}
                      className="btn-glass px-4 py-2 text-sm"
                    >
                      <Download className="inline mr-2 h-4 w-4" />
                      Download
                    </button>
                    <button
                      onClick={() => setShowPrompt(false)}
                      className="btn-glass px-4 py-2 text-sm"
                    >
                      ← Editar
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <pre className="whitespace-pre-wrap text-sm text-gray-800 dark:text-gray-200 font-mono overflow-x-auto">
                    {generatedPrompt}
                  </pre>
                </div>

                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
                  <div className="flex items-start space-x-3">
                    <MessageSquare className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">
                        Opções para usar este prompt:
                      </h3>
                      <ol className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                        <li>• <strong>Chat Integrado:</strong> Clique em "Iniciar Chat com IA" para conversar diretamente aqui</li>
                        <li>• <strong>ChatGPT Externo:</strong> Copie o prompt e cole no ChatGPT</li>
                        <li>• <strong>Download:</strong> Salve o prompt como arquivo para usar depois</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Chat Interface */
              <div className="h-[calc(100vh-200px)] flex flex-col">
                {/* Chat Header */}
                <div className="card-glass p-4 mb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <Brain className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                          Chat de Refinamento do Projeto
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {projectData.projectName || 'Projeto em desenvolvimento'}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={clearChat}
                        className="btn-glass px-3 py-2 text-sm"
                        title="Limpar conversa"
                      >
                        <RefreshCw className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => setShowPrompt(true)}
                        className="btn-glass px-3 py-2 text-sm"
                        title="Ver prompt original"
                      >
                        <FileText className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => {
                          setShowChat(false);
                          setShowPrompt(false);
                        }}
                        className="btn-glass px-3 py-2 text-sm"
                        title="Voltar ao formulário"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div
                  ref={chatContainerRef}
                  className="flex-1 card-glass p-4 mb-4 overflow-y-auto space-y-4"
                >
                  {chatMessages.length === 0 ? (
                    <div className="text-center py-12">
                      <Bot className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Chat Iniciado
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Aguardando resposta da IA ao seu prompt PRD...
                      </p>
                    </div>
                  ) : (
                    chatMessages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`flex max-w-[80%] ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'} gap-3`}>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                            message.role === 'user'
                              ? 'bg-blue-500'
                              : 'bg-gradient-to-r from-purple-500 to-pink-500'
                          }`}>
                            {message.role === 'user' ? (
                              <User className="h-4 w-4 text-white" />
                            ) : (
                              <Bot className="h-4 w-4 text-white" />
                            )}
                          </div>

                          <div className={`rounded-xl p-4 ${
                            message.role === 'user'
                              ? 'bg-blue-500 text-white'
                              : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
                          }`}>
                            <div className={`text-sm ${
                              message.role === 'user'
                                ? 'text-white'
                                : 'text-gray-800 dark:text-gray-200'
                            }`}>
                              <div className="whitespace-pre-wrap">
                                {message.content}
                              </div>
                            </div>
                            <div className={`text-xs mt-2 opacity-70 ${
                              message.role === 'user' ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'
                            }`}>
                              {message.timestamp.toLocaleTimeString('pt-BR', {
                                hour: '2-digit',
                                minute: '2-digit'
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}

                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="flex gap-3 max-w-[80%]">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                          <Bot className="h-4 w-4 text-white" />
                        </div>
                        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
                          <div className="flex items-center space-x-2">
                            <Loader className="h-4 w-4 animate-spin text-gray-500" />
                            <span className="text-sm text-gray-500 dark:text-gray-400">IA está pensando...</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Chat Input */}
                <div className="card-glass p-4">
                  <div className="flex space-x-3">
                    <textarea
                      ref={messageInputRef}
                      value={currentMessage}
                      onChange={(e) => setCurrentMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Digite sua mensagem... (Enter para enviar, Shift+Enter para nova linha)"
                      className="flex-1 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      rows={2}
                      disabled={isLoading}
                    />
                    <button
                      onClick={sendMessage}
                      disabled={!currentMessage.trim() || isLoading}
                      className="btn-glass-primary px-4 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-3 text-xs text-gray-500 dark:text-gray-400">
                    <span>Powered by IA • Simulação de conversa</span>
                    <span>{currentMessage.length}/2000</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default CreateProjectPage;