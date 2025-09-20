import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  ArrowLeft,
  Plus,
  Trash2,
  Eye,
  Save,
  Send,
  Users,
  Calendar,
  Globe,
  Lock,
  HelpCircle,
  Settings,
  BarChart3,
  MessageSquare,
  Heart,
  ThumbsUp,
  ThumbsDown,
  MapPin,
  Clock,
  Shield,
  Stethoscope,
  GraduationCap,
  Car,
  Building2,
  AlertCircle,
  CheckCircle
} from 'lucide-react';

interface Question {
  id: string;
  type: 'single_choice' | 'multi_choice' | 'likert' | 'boolean' | 'text_short' | 'text_long' | 'rank';
  prompt: string;
  required: boolean;
  order: number;
  options?: string[];
  help_text?: string;
  min?: number;
  max?: number;
}

interface Consultation {
  title: string;
  description: string;
  sector: string;
  starts_at: string;
  ends_at: string;
  visibility: 'public' | 'private';
  questions: Question[];
}

const NovaConsultaPage = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('basic');
  const [consultation, setConsultation] = useState<Consultation>({
    title: '',
    description: '',
    sector: '',
    starts_at: '',
    ends_at: '',
    visibility: 'public',
    questions: []
  });

  const sectors = [
    { id: 'geral', name: 'Geral', icon: <Users className="h-5 w-5" />, color: 'bg-gray-500' },
    { id: 'seguranca', name: 'Segurança Pública', icon: <Shield className="h-5 w-5" />, color: 'bg-red-500' },
    { id: 'saude', name: 'Saúde', icon: <Stethoscope className="h-5 w-5" />, color: 'bg-green-500' },
    { id: 'educacao', name: 'Educação', icon: <GraduationCap className="h-5 w-5" />, color: 'bg-blue-500' },
    { id: 'mobilidade', name: 'Mobilidade/Obras', icon: <Car className="h-5 w-5" />, color: 'bg-orange-500' },
    { id: 'projetos', name: 'Novos Projetos', icon: <Building2 className="h-5 w-5" />, color: 'bg-purple-500' }
  ];

  const questionTypes = [
    { id: 'boolean', name: 'Curtir/Não Curtir', icon: <Heart className="h-4 w-4" />, description: 'Votação simples de apoio' },
    { id: 'likert', name: 'Escala 1-5', icon: <BarChart3 className="h-4 w-4" />, description: 'Avaliação de 1 a 5' },
    { id: 'single_choice', name: 'Múltipla Escolha', icon: <CheckCircle className="h-4 w-4" />, description: 'Uma opção apenas' },
    { id: 'multi_choice', name: 'Múltiplas Seleções', icon: <Settings className="h-4 w-4" />, description: 'Várias opções' },
    { id: 'text_short', name: 'Texto Curto', icon: <MessageSquare className="h-4 w-4" />, description: 'Resposta breve' },
    { id: 'text_long', name: 'Texto Longo', icon: <MessageSquare className="h-4 w-4" />, description: 'Sugestões detalhadas' },
    { id: 'rank', name: 'Ranking', icon: <BarChart3 className="h-4 w-4" />, description: 'Ordenar prioridades' }
  ];

  const suggestedQuestions = {
    geral: [
      { prompt: 'Você mora em qual bairro/região?', type: 'single_choice' as const, options: ['Centro', 'Zona Norte', 'Zona Sul', 'Zona Leste', 'Zona Oeste'] },
      { prompt: 'Qual a sua faixa etária?', type: 'single_choice' as const, options: ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'] },
      { prompt: 'Qual sua relação com o tema?', type: 'single_choice' as const, options: ['Morador', 'Comerciante', 'Estudante', 'Servidor', 'Visitante'] },
      { prompt: 'Em uma escala de 1 a 5, qual sua prioridade para este tema?', type: 'likert' as const, min: 1, max: 5 },
      { prompt: 'Você apoia a proposta apresentada?', type: 'boolean' as const },
      { prompt: 'Sugestões objetivas de melhoria (máx. 500 caracteres)', type: 'text_long' as const }
    ],
    seguranca: [
      { prompt: 'Qual é o principal problema no seu bairro?', type: 'single_choice' as const, options: ['Iluminação', 'Patrulhamento', 'Tráfico', 'Vandalismo', 'Violência doméstica', 'Outros'] },
      { prompt: 'Avalie a iluminação pública no seu entorno', type: 'likert' as const, min: 1, max: 5 },
      { prompt: 'Avalie a presença policial/Guarda Municipal', type: 'likert' as const, min: 1, max: 5 },
      { prompt: 'Você aprova a instalação de câmeras inteligentes em pontos críticos?', type: 'boolean' as const },
      { prompt: 'Horários/dias com maior sensação de insegurança', type: 'multi_choice' as const, options: ['Manhã', 'Tarde', 'Noite', 'Madrugada', 'Fins de semana', 'Feriados'] }
    ],
    saude: [
      { prompt: 'Tempo de espera em UBS/UPA no último atendimento', type: 'single_choice' as const, options: ['Menos de 15min', '15-60min', '1-2 horas', 'Mais de 2 horas'] },
      { prompt: 'Avalie o acesso a especialistas', type: 'likert' as const, min: 1, max: 5 },
      { prompt: 'Você apoia ampliar telemedicina para triagem e acompanhamento?', type: 'boolean' as const },
      { prompt: 'Quais serviços deveriam ter prioridade?', type: 'rank' as const, options: ['Pediatria', 'Saúde mental', 'Odontologia', 'Exames', 'Medicamentos', 'Atenção básica'] }
    ],
    educacao: [
      { prompt: 'Avalie a infraestrutura da escola pública do seu bairro', type: 'likert' as const, min: 1, max: 5 },
      { prompt: 'Você apoia ampliar tempo integral?', type: 'boolean' as const },
      { prompt: 'Priorize investimentos', type: 'rank' as const, options: ['Merenda', 'Tecnologia', 'Capacitação docente', 'Infraestrutura', 'Segurança escolar'] },
      { prompt: 'Sugestões de cursos extracurriculares', type: 'text_short' as const }
    ],
    mobilidade: [
      { prompt: 'Meio de transporte mais utilizado', type: 'single_choice' as const, options: ['A pé', 'Bicicleta', 'Ônibus', 'Carro próprio', 'Moto', 'Aplicativo'] },
      { prompt: 'Principais gargalos viários (ruas/trechos)', type: 'text_short' as const },
      { prompt: 'Você apoia faixas exclusivas de ônibus/ciclovias?', type: 'boolean' as const },
      { prompt: 'Quão satisfeito está com pavimentação?', type: 'likert' as const, min: 1, max: 5 },
      { prompt: 'Quão satisfeito está com acessibilidade?', type: 'likert' as const, min: 1, max: 5 }
    ],
    projetos: [
      { prompt: 'De 1 a 5, qual o potencial de impacto?', type: 'likert' as const, min: 1, max: 5 },
      { prompt: 'De 1 a 5, qual a viabilidade percebida?', type: 'likert' as const, min: 1, max: 5 },
      { prompt: 'Você curte a ideia apresentada?', type: 'boolean' as const },
      { prompt: 'Que contrapartidas/comunicação espera durante a obra/implantação?', type: 'text_short' as const }
    ]
  };

  const addQuestion = (type: Question['type']) => {
    const newQuestion: Question = {
      id: `q_${Date.now()}`,
      type,
      prompt: '',
      required: false,
      order: consultation.questions.length,
      options: type === 'single_choice' || type === 'multi_choice' || type === 'rank' ? [''] : undefined,
      min: type === 'likert' ? 1 : undefined,
      max: type === 'likert' ? 5 : undefined
    };

    setConsultation(prev => ({
      ...prev,
      questions: [...prev.questions, newQuestion]
    }));
  };

  const addSuggestedQuestion = (suggestedQ: any) => {
    const newQuestion: Question = {
      id: `q_${Date.now()}`,
      type: suggestedQ.type,
      prompt: suggestedQ.prompt,
      required: false,
      order: consultation.questions.length,
      options: suggestedQ.options || (suggestedQ.type === 'single_choice' || suggestedQ.type === 'multi_choice' || suggestedQ.type === 'rank' ? [''] : undefined),
      min: suggestedQ.min,
      max: suggestedQ.max
    };

    setConsultation(prev => ({
      ...prev,
      questions: [...prev.questions, newQuestion]
    }));
  };

  const updateQuestion = (questionId: string, updates: Partial<Question>) => {
    setConsultation(prev => ({
      ...prev,
      questions: prev.questions.map(q =>
        q.id === questionId ? { ...q, ...updates } : q
      )
    }));
  };

  const removeQuestion = (questionId: string) => {
    setConsultation(prev => ({
      ...prev,
      questions: prev.questions.filter(q => q.id !== questionId)
    }));
  };

  const addOption = (questionId: string) => {
    updateQuestion(questionId, {
      options: [...(consultation.questions.find(q => q.id === questionId)?.options || []), '']
    });
  };

  const updateOption = (questionId: string, optionIndex: number, value: string) => {
    const question = consultation.questions.find(q => q.id === questionId);
    if (question?.options) {
      const newOptions = [...question.options];
      newOptions[optionIndex] = value;
      updateQuestion(questionId, { options: newOptions });
    }
  };

  const removeOption = (questionId: string, optionIndex: number) => {
    const question = consultation.questions.find(q => q.id === questionId);
    if (question?.options) {
      const newOptions = question.options.filter((_, index) => index !== optionIndex);
      updateQuestion(questionId, { options: newOptions });
    }
  };

  const validateForm = () => {
    if (!consultation.title || !consultation.description || !consultation.sector) {
      alert('Preencha título, descrição e setor');
      return false;
    }
    if (!consultation.starts_at || !consultation.ends_at) {
      alert('Defina período da consulta');
      return false;
    }
    if (consultation.questions.length === 0) {
      alert('Adicione pelo menos uma pergunta');
      return false;
    }
    return true;
  };

  const handleSave = () => {
    if (validateForm()) {
      // Save as draft
      console.log('Saving consultation as draft:', consultation);
      alert('Consulta salva como rascunho!');
    }
  };

  const handlePublish = () => {
    if (validateForm()) {
      // Publish consultation
      console.log('Publishing consultation:', consultation);
      alert('Consulta publicada com sucesso! Os cidadãos já podem participar.');
      router.push('/dashboard');
    }
  };

  const selectedSector = sectors.find(s => s.id === consultation.sector);

  return (
    <>
      <Head>
        <title>Nova Consulta Pública | PolicyLabs</title>
        <meta name="description" content="Crie consultas públicas para engajar cidadãos em políticas municipais" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Link href="/" className="flex items-center space-x-2">
                <img src="/logo.svg" alt="PolicyLabs" className="h-8 w-8" />
                <span className="text-xl font-bold">PolicyLabs</span>
              </Link>
              <div className="h-6 w-px bg-gray-300" />
              <div>
                <h1 className="text-xl font-bold">🗳️ Nova Consulta Pública</h1>
                <p className="text-sm text-gray-600">Engaje cidadãos na criação de políticas públicas</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-500">
                Ao vivo 20/09/2025, 17:13:05
              </div>
              <button className="btn-glass">
                👤 Usuário
              </button>
              <Link href="/dashboard" className="btn-glass text-sm">
                ↩️ Voltar
              </Link>
            </div>
          </div>

        </header>

        {/* Toolbar */}
        <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-end space-x-4">
          <button
            onClick={handleSave}
            className="btn-glass px-4 py-2 rounded-lg text-sm hover:scale-105 transition-transform"
          >
            <Save className="h-4 w-4 mr-2 inline" />
            Salvar Rascunho
          </button>
          <button
            onClick={handlePublish}
            className="btn-glass-primary px-4 py-2 rounded-lg text-sm hover:scale-105 transition-transform"
          >
            <Send className="h-4 w-4 mr-2 inline" />
            Publicar
          </button>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Navigation Tabs */}
          <div className="card-glass p-2 mb-8">
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveTab('basic')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === 'basic'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Settings className="h-4 w-4 mr-2 inline" />
                Configurações Básicas
              </button>
              <button
                onClick={() => setActiveTab('questions')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === 'questions'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <MessageSquare className="h-4 w-4 mr-2 inline" />
                Perguntas ({consultation.questions.length})
              </button>
              <button
                onClick={() => setActiveTab('preview')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === 'preview'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Eye className="h-4 w-4 mr-2 inline" />
                Visualizar
              </button>
            </div>
          </div>

          {/* Basic Configuration Tab */}
          {activeTab === 'basic' && (
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                {/* Basic Info */}
                <div className="card-glass p-8">
                  <h2 className="text-2xl font-bold mb-6">Informações Básicas</h2>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Título da Consulta *
                      </label>
                      <input
                        type="text"
                        value={consultation.title}
                        onChange={(e) => setConsultation(prev => ({ ...prev, title: e.target.value }))}
                        placeholder="Ex: Consulta Pública — Iluminação no Bairro João Paulo"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Descrição *
                      </label>
                      <textarea
                        value={consultation.description}
                        onChange={(e) => setConsultation(prev => ({ ...prev, description: e.target.value }))}
                        placeholder="Descreva brevemente o objetivo da consulta e o que está sendo proposto..."
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Setor *
                      </label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {sectors.map(sector => (
                          <button
                            key={sector.id}
                            onClick={() => setConsultation(prev => ({ ...prev, sector: sector.id }))}
                            className={`p-4 rounded-lg border-2 transition-all text-left ${
                              consultation.sector === sector.id
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <div className={`w-10 h-10 ${sector.color} rounded-lg flex items-center justify-center text-white`}>
                                {sector.icon}
                              </div>
                              <div>
                                <div className="font-medium">{sector.name}</div>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Data de Início *
                        </label>
                        <input
                          type="datetime-local"
                          value={consultation.starts_at}
                          onChange={(e) => setConsultation(prev => ({ ...prev, starts_at: e.target.value }))}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Data de Término *
                        </label>
                        <input
                          type="datetime-local"
                          value={consultation.ends_at}
                          onChange={(e) => setConsultation(prev => ({ ...prev, ends_at: e.target.value }))}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Visibilidade
                      </label>
                      <div className="space-y-3">
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="radio"
                            name="visibility"
                            value="public"
                            checked={consultation.visibility === 'public'}
                            onChange={(e) => setConsultation(prev => ({ ...prev, visibility: e.target.value as 'public' | 'private' }))}
                            className="text-blue-600"
                          />
                          <div className="flex items-center space-x-2">
                            <Globe className="h-5 w-5 text-green-600" />
                            <div>
                              <div className="font-medium">Pública</div>
                              <div className="text-sm text-gray-600">Qualquer cidadão pode participar</div>
                            </div>
                          </div>
                        </label>
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="radio"
                            name="visibility"
                            value="private"
                            checked={consultation.visibility === 'private'}
                            onChange={(e) => setConsultation(prev => ({ ...prev, visibility: e.target.value as 'public' | 'private' }))}
                            className="text-blue-600"
                          />
                          <div className="flex items-center space-x-2">
                            <Lock className="h-5 w-5 text-orange-600" />
                            <div>
                              <div className="font-medium">Privada</div>
                              <div className="text-sm text-gray-600">Apenas convidados podem participar</div>
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar Info */}
              <div className="space-y-6">
                <div className="card-glass p-6">
                  <h3 className="font-bold mb-4">💡 Dicas para Consultas Eficazes</h3>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Use títulos claros e específicos</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Descreva o contexto e objetivo</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Escolha o setor mais adequado</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Defina prazos realistas (7-30 dias)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Consultas públicas têm maior engajamento</span>
                    </li>
                  </ul>
                </div>

                {selectedSector && (
                  <div className="card-glass p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-10 h-10 ${selectedSector.color} rounded-lg flex items-center justify-center text-white`}>
                        {selectedSector.icon}
                      </div>
                      <div>
                        <h3 className="font-bold">{selectedSector.name}</h3>
                        <p className="text-sm text-gray-600">Setor selecionado</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Perguntas sugeridas e templates específicos para este setor estarão disponíveis na próxima etapa.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Questions Tab */}
          {activeTab === 'questions' && (
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                {/* Add Question Section */}
                <div className="card-glass p-8">
                  <h2 className="text-2xl font-bold mb-6">Adicionar Pergunta</h2>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {questionTypes.map(type => (
                      <button
                        key={type.id}
                        onClick={() => addQuestion(type.id as Question['type'])}
                        className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all text-left"
                      >
                        <div className="flex items-center space-x-3 mb-2">
                          {type.icon}
                          <span className="font-medium">{type.name}</span>
                        </div>
                        <p className="text-sm text-gray-600">{type.description}</p>
                      </button>
                    ))}
                  </div>

                  {/* Suggested Questions */}
                  {consultation.sector && suggestedQuestions[consultation.sector as keyof typeof suggestedQuestions] && (
                    <div>
                      <h3 className="font-bold mb-4">📋 Perguntas Sugeridas para {selectedSector?.name}</h3>
                      <div className="space-y-3">
                        {suggestedQuestions[consultation.sector as keyof typeof suggestedQuestions].map((suggested, index) => (
                          <div key={index} className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <p className="font-medium text-blue-900 mb-1">{suggested.prompt}</p>
                                <p className="text-sm text-blue-700">
                                  Tipo: {questionTypes.find(t => t.id === suggested.type)?.name}
                                </p>
                              </div>
                              <button
                                onClick={() => addSuggestedQuestion(suggested)}
                                className="ml-4 btn-glass-primary px-3 py-1 text-sm rounded"
                              >
                                <Plus className="h-3 w-3 mr-1 inline" />
                                Adicionar
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Questions List */}
                {consultation.questions.map((question, index) => (
                  <div key={question.id} className="card-glass p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <span className="text-sm text-gray-600">
                            {questionTypes.find(t => t.id === question.type)?.name}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => removeQuestion(question.id)}
                        className="text-red-600 hover:bg-red-50 p-2 rounded-lg"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Pergunta *
                        </label>
                        <textarea
                          value={question.prompt}
                          onChange={(e) => updateQuestion(question.id, { prompt: e.target.value })}
                          placeholder="Digite sua pergunta..."
                          rows={2}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      {(question.type === 'single_choice' || question.type === 'multi_choice' || question.type === 'rank') && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Opções
                          </label>
                          <div className="space-y-2">
                            {question.options?.map((option, optionIndex) => (
                              <div key={optionIndex} className="flex items-center space-x-2">
                                <input
                                  type="text"
                                  value={option}
                                  onChange={(e) => updateOption(question.id, optionIndex, e.target.value)}
                                  placeholder={`Opção ${optionIndex + 1}`}
                                  className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <button
                                  onClick={() => removeOption(question.id, optionIndex)}
                                  className="text-red-600 hover:bg-red-50 p-2 rounded-lg"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </button>
                              </div>
                            ))}
                            <button
                              onClick={() => addOption(question.id)}
                              className="btn-glass px-3 py-2 text-sm rounded-lg"
                            >
                              <Plus className="h-4 w-4 mr-1 inline" />
                              Adicionar Opção
                            </button>
                          </div>
                        </div>
                      )}

                      {question.type === 'likert' && (
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Valor Mínimo
                            </label>
                            <input
                              type="number"
                              value={question.min || 1}
                              onChange={(e) => updateQuestion(question.id, { min: parseInt(e.target.value) })}
                              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Valor Máximo
                            </label>
                            <input
                              type="number"
                              value={question.max || 5}
                              onChange={(e) => updateQuestion(question.id, { max: parseInt(e.target.value) })}
                              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
                        </div>
                      )}

                      <div className="flex items-center space-x-4">
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={question.required}
                            onChange={(e) => updateQuestion(question.id, { required: e.target.checked })}
                            className="text-blue-600"
                          />
                          <span className="text-sm text-gray-700">Pergunta obrigatória</span>
                        </label>
                      </div>
                    </div>
                  </div>
                ))}

                {consultation.questions.length === 0 && (
                  <div className="card-glass p-12 text-center">
                    <MessageSquare className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-600 mb-2">
                      Nenhuma pergunta adicionada
                    </h3>
                    <p className="text-gray-500 mb-6">
                      Comece adicionando perguntas para sua consulta pública.
                    </p>
                    {consultation.sector && (
                      <p className="text-sm text-blue-600">
                        Use as perguntas sugeridas para {selectedSector?.name} acima como ponto de partida.
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Questions Sidebar */}
              <div className="space-y-6">
                <div className="card-glass p-6">
                  <h3 className="font-bold mb-4">📊 Estatísticas</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Total de perguntas:</span>
                      <span className="font-semibold">{consultation.questions.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Obrigatórias:</span>
                      <span className="font-semibold">{consultation.questions.filter(q => q.required).length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Tempo estimado:</span>
                      <span className="font-semibold">{Math.ceil(consultation.questions.length * 0.5)} min</span>
                    </div>
                  </div>
                </div>

                <div className="card-glass p-6">
                  <h3 className="font-bold mb-4">✨ Boas Práticas</h3>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>5-15 perguntas por consulta</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Combine perguntas objetivas e abertas</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Use linguagem simples e clara</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Evite questões tendenciosas</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Teste com um grupo pequeno primeiro</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Preview Tab */}
          {activeTab === 'preview' && (
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="card-glass p-8">
                  <div className="text-center mb-8">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                      {selectedSector && (
                        <div className={`w-12 h-12 ${selectedSector.color} rounded-xl flex items-center justify-center text-white`}>
                          {selectedSector.icon}
                        </div>
                      )}
                      <div>
                        <h1 className="text-2xl font-bold">{consultation.title || 'Título da Consulta'}</h1>
                        <p className="text-gray-600">{selectedSector?.name || 'Setor'}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-6">{consultation.description || 'Descrição da consulta...'}</p>

                    {consultation.starts_at && consultation.ends_at && (
                      <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 mb-6">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>Início: {new Date(consultation.starts_at).toLocaleDateString('pt-BR')}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>Término: {new Date(consultation.ends_at).toLocaleDateString('pt-BR')}</span>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-center space-x-2 text-sm text-green-600 mb-8">
                      <Globe className="h-4 w-4" />
                      <span>Consulta {consultation.visibility === 'public' ? 'Pública' : 'Privada'}</span>
                    </div>
                  </div>

                  {/* Preview Questions */}
                  <div className="space-y-6">
                    {consultation.questions.map((question, index) => (
                      <div key={question.id} className="p-6 bg-gray-50 rounded-lg">
                        <div className="flex items-start space-x-3 mb-4">
                          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium mb-2">
                              {question.prompt || 'Pergunta não definida'}
                              {question.required && <span className="text-red-500 ml-1">*</span>}
                            </h3>

                            {question.type === 'boolean' && (
                              <div className="flex space-x-4">
                                <button className="flex items-center space-x-2 px-4 py-2 bg-green-100 text-green-800 rounded-lg">
                                  <ThumbsUp className="h-4 w-4" />
                                  <span>Curtir</span>
                                </button>
                                <button className="flex items-center space-x-2 px-4 py-2 bg-red-100 text-red-800 rounded-lg">
                                  <ThumbsDown className="h-4 w-4" />
                                  <span>Não Curtir</span>
                                </button>
                              </div>
                            )}

                            {question.type === 'likert' && (
                              <div className="flex space-x-2">
                                {Array.from({ length: (question.max || 5) - (question.min || 1) + 1 }, (_, i) => (
                                  <button
                                    key={i}
                                    className="w-10 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center hover:border-blue-500"
                                  >
                                    {(question.min || 1) + i}
                                  </button>
                                ))}
                              </div>
                            )}

                            {(question.type === 'single_choice' || question.type === 'multi_choice') && (
                              <div className="space-y-2">
                                {question.options?.map((option, optionIndex) => (
                                  <label key={optionIndex} className="flex items-center space-x-2 cursor-pointer">
                                    <input
                                      type={question.type === 'single_choice' ? 'radio' : 'checkbox'}
                                      name={`question_${question.id}`}
                                      className="text-blue-600"
                                      disabled
                                    />
                                    <span>{option || `Opção ${optionIndex + 1}`}</span>
                                  </label>
                                ))}
                              </div>
                            )}

                            {question.type === 'rank' && (
                              <div className="space-y-2">
                                {question.options?.map((option, optionIndex) => (
                                  <div key={optionIndex} className="flex items-center space-x-2 p-2 border border-gray-300 rounded">
                                    <span className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center text-sm">
                                      {optionIndex + 1}
                                    </span>
                                    <span>{option || `Opção ${optionIndex + 1}`}</span>
                                  </div>
                                ))}
                              </div>
                            )}

                            {(question.type === 'text_short' || question.type === 'text_long') && (
                              <div>
                                {question.type === 'text_short' ? (
                                  <input
                                    type="text"
                                    placeholder="Digite sua resposta..."
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                                    disabled
                                  />
                                ) : (
                                  <textarea
                                    placeholder="Digite sua resposta..."
                                    rows={3}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                                    disabled
                                  />
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}

                    {consultation.questions.length === 0 && (
                      <div className="text-center py-12 text-gray-500">
                        <MessageSquare className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                        <p>Adicione perguntas para visualizar a consulta</p>
                      </div>
                    )}
                  </div>

                  {consultation.questions.length > 0 && (
                    <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                      <button className="btn-glass-primary px-8 py-3 rounded-lg font-medium">
                        Enviar Resposta
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Preview Sidebar */}
              <div className="space-y-6">
                <div className="card-glass p-6">
                  <h3 className="font-bold mb-4">📱 Disponível em</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-sm">
                      <Globe className="h-5 w-5 text-blue-600" />
                      <span>Portal PolicyLabs Web</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <Users className="h-5 w-5 text-purple-600" />
                      <span>App PolicyLabs Mobile</span>
                    </div>
                  </div>
                </div>

                <div className="card-glass p-6">
                  <h3 className="font-bold mb-4">⚡ Funcionalidades</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Votação por curtir/não curtir</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Resultados em tempo real</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Quadro público de transparência</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Seleção de cidade no app</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Proteção antifraude</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Conformidade LGPD</span>
                    </li>
                  </ul>
                </div>

                <div className="card-glass p-6">
                  <h3 className="font-bold mb-4">📊 Após Publicação</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Quadro com métricas em tempo real</li>
                    <li>• Filtros por bairro e faixa etária</li>
                    <li>• Exportação de dados (CSV/JSON)</li>
                    <li>• Relatório final automático</li>
                    <li>• Notificações para gestores</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NovaConsultaPage;