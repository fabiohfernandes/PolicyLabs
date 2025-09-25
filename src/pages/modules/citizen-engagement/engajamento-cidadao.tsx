import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  ArrowLeft,
  BarChart3,
  Users,
  TrendingUp,
  Calendar,
  Filter,
  Search,
  Download,
  Eye,
  Activity,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  MapPin,
  Clock,
  Target,
  Percent,
  DollarSign,
  AlertTriangle,
  CheckCircle,
  XCircle,
  PieChart,
  LineChart,
  Map,
  FileText,
  Star,
  Award,
  Zap,
  RefreshCw,
  ExternalLink,
  Settings,
  ChevronDown,
  ChevronUp,
  Info,
  TrendingDown,
  Hash,
  Calendar as CalendarIcon
} from 'lucide-react';

interface Consultation {
  id: string;
  title: string;
  sector: string;
  status: 'active' | 'finished' | 'draft' | 'scheduled';
  startDate: string;
  endDate: string;
  participants: number;
  supportPercent: number;
  engagementIndex: number;
  completionRate: number;
  lastUpdate: string;
  responses: number;
  avgResponseTime: number;
  topIdea: string;
  netScore: number;
}

interface KPI {
  label: string;
  value: string | number;
  change: number;
  trend: 'up' | 'down' | 'stable';
  icon: React.ReactNode;
  color: string;
}

interface User {
  id: string;
  email: string;
  full_name: string;
  role: string;
  is_verified: boolean;
  two_factor_enabled: boolean;
  created_at: string;
}

const EngajamentoCidadaoPage = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [selectedConsultation, setSelectedConsultation] = useState<Consultation | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterSector, setFilterSector] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'recent' | 'participants' | 'support' | 'engagement'>('recent');
  const [viewMode, setViewMode] = useState<'list' | 'detailed'>('list');
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d' | '1y'>('30d');

  // Load user data
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

  // Mock data for consultations
  useEffect(() => {
    const mockConsultations: Consultation[] = [
      {
        id: 'svy_2025_001',
        title: 'Telemedicina na Atenção Primária',
        sector: 'Saúde',
        status: 'active',
        startDate: '2025-01-15',
        endDate: '2025-02-15',
        participants: 4321,
        supportPercent: 68.4,
        engagementIndex: 57.2,
        completionRate: 81.0,
        lastUpdate: '2025-01-20T14:30:00Z',
        responses: 5247,
        avgResponseTime: 8.5,
        topIdea: 'Teletriagem para UBS',
        netScore: 1050
      },
      {
        id: 'svy_2025_002',
        title: 'Ciclofaixas no Centro da Cidade',
        sector: 'Mobilidade',
        status: 'finished',
        startDate: '2024-12-01',
        endDate: '2024-12-31',
        participants: 2847,
        supportPercent: 45.2,
        engagementIndex: 42.8,
        completionRate: 76.5,
        lastUpdate: '2024-12-31T23:59:00Z',
        responses: 3156,
        avgResponseTime: 12.3,
        topIdea: 'Ciclofaixa Rua XV de Novembro',
        netScore: -125
      },
      {
        id: 'svy_2025_003',
        title: 'Ampliação de Creches Municipais',
        sector: 'Educação',
        status: 'active',
        startDate: '2025-01-10',
        endDate: '2025-02-10',
        participants: 6789,
        supportPercent: 82.7,
        engagementIndex: 71.3,
        completionRate: 88.9,
        lastUpdate: '2025-01-20T16:45:00Z',
        responses: 7234,
        avgResponseTime: 6.2,
        topIdea: 'Creche Bairro São José',
        netScore: 2340
      },
      {
        id: 'svy_2025_004',
        title: 'Revitalização da Praça Central',
        sector: 'Urbanismo',
        status: 'draft',
        startDate: '2025-02-01',
        endDate: '2025-03-01',
        participants: 0,
        supportPercent: 0,
        engagementIndex: 0,
        completionRate: 0,
        lastUpdate: '2025-01-18T10:00:00Z',
        responses: 0,
        avgResponseTime: 0,
        topIdea: '',
        netScore: 0
      }
    ];

    setConsultations(mockConsultations);
  }, []);

  // Calculate overall KPIs
  const activeConsultations = consultations.filter(c => c.status === 'active');
  const totalParticipants = consultations.reduce((sum, c) => sum + c.participants, 0);
  const avgSupport = consultations.length > 0
    ? consultations.reduce((sum, c) => sum + c.supportPercent, 0) / consultations.length
    : 0;
  const avgEngagement = consultations.length > 0
    ? consultations.reduce((sum, c) => sum + c.engagementIndex, 0) / consultations.length
    : 0;

  const overallKPIs: KPI[] = [
    {
      label: 'Consultas Ativas',
      value: activeConsultations.length,
      change: 12.5,
      trend: 'up',
      icon: <Activity className="h-5 w-5" />,
      color: 'bg-blue-500'
    },
    {
      label: 'Total de Participações',
      value: totalParticipants.toLocaleString(),
      change: 28.3,
      trend: 'up',
      icon: <Users className="h-5 w-5" />,
      color: 'bg-green-500'
    },
    {
      label: 'Apoio Médio',
      value: `${avgSupport.toFixed(1)}%`,
      change: -2.1,
      trend: 'down',
      icon: <ThumbsUp className="h-5 w-5" />,
      color: 'bg-orange-500'
    },
    {
      label: 'Engajamento Médio',
      value: avgEngagement.toFixed(1),
      change: 8.7,
      trend: 'up',
      icon: <Zap className="h-5 w-5" />,
      color: 'bg-purple-500'
    }
  ];

  const filteredConsultations = consultations.filter(consultation => {
    const matchesStatus = filterStatus === 'all' || consultation.status === filterStatus;
    const matchesSector = filterSector === 'all' || consultation.sector === filterSector;
    const matchesSearch = consultation.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         consultation.sector.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesStatus && matchesSector && matchesSearch;
  });

  const sortedConsultations = [...filteredConsultations].sort((a, b) => {
    switch (sortBy) {
      case 'participants':
        return b.participants - a.participants;
      case 'support':
        return b.supportPercent - a.supportPercent;
      case 'engagement':
        return b.engagementIndex - a.engagementIndex;
      default:
        return new Date(b.lastUpdate).getTime() - new Date(a.lastUpdate).getTime();
    }
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'finished': return 'bg-gray-100 text-gray-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      case 'scheduled': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Ativa';
      case 'finished': return 'Encerrada';
      case 'draft': return 'Rascunho';
      case 'scheduled': return 'Agendada';
      default: return status;
    }
  };

  const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-green-600" />;
      case 'down': return <TrendingDown className="h-4 w-4 text-red-600" />;
      default: return <Activity className="h-4 w-4 text-gray-600" />;
    }
  };

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
    <>
      <Head>
        <title>Engajamento Cidadão - Analytics | PolicyLabs</title>
        <meta name="description" content="Análise e avaliação de consultas públicas municipais" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="card-glass mx-6 mt-4 px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="flex items-center space-x-2">
                <img src="/logo.svg" alt="PolicyLabs" className="h-8 w-8" />
                <span className="text-xl font-bold">PolicyLabs</span>
              </Link>
              <span className="text-sm text-gray-600">
                Olá, {user?.full_name}
              </span>
            </div>

            <div className="flex items-center">
              <h1 className="text-xl font-semibold">Engajamento Cidadão</h1>
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

        {/* Toolbar */}
        <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Time Range Selector */}
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value as any)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="7d">Últimos 7 dias</option>
              <option value="30d">Últimos 30 dias</option>
              <option value="90d">Últimos 90 dias</option>
              <option value="1y">Último ano</option>
            </select>

            {/* View Mode Toggle */}
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-2 rounded-md text-sm transition-all ${
                  viewMode === 'list'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Lista
              </button>
              <button
                onClick={() => setViewMode('detailed')}
                className={`px-3 py-2 rounded-md text-sm transition-all ${
                  viewMode === 'detailed'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Detalhado
              </button>
            </div>
          </div>

          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Exportar</span>
          </button>
        </div>

        <div className="p-6">
          {/* Overall KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {overallKPIs.map((kpi, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${kpi.color} text-white`}>
                    {kpi.icon}
                  </div>
                  <div className="flex items-center space-x-1">
                    {getTrendIcon(kpi.trend)}
                    <span className={`text-sm font-medium ${
                      kpi.trend === 'up' ? 'text-green-600' :
                      kpi.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                    }`}>
                      {kpi.change > 0 ? '+' : ''}{kpi.change}%
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{kpi.value}</p>
                  <p className="text-sm text-gray-600">{kpi.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Filters and Search */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Buscar consultas..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                  />
                </div>

                {/* Status Filter */}
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">Todos os Status</option>
                  <option value="active">Ativas</option>
                  <option value="finished">Encerradas</option>
                  <option value="draft">Rascunhos</option>
                  <option value="scheduled">Agendadas</option>
                </select>

                {/* Sector Filter */}
                <select
                  value={filterSector}
                  onChange={(e) => setFilterSector(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">Todos os Setores</option>
                  <option value="Saúde">Saúde</option>
                  <option value="Educação">Educação</option>
                  <option value="Mobilidade">Mobilidade</option>
                  <option value="Urbanismo">Urbanismo</option>
                  <option value="Meio Ambiente">Meio Ambiente</option>
                </select>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Ordenar por:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="recent">Mais Recentes</option>
                  <option value="participants">Participações</option>
                  <option value="support">% Apoio</option>
                  <option value="engagement">Engajamento</option>
                </select>
              </div>
            </div>
          </div>

          {/* Consultations List */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                Consultas Públicas ({sortedConsultations.length})
              </h2>
            </div>

            {viewMode === 'list' ? (
              /* Table View */
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Consulta
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Período
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Participações
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        % Apoio
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Engajamento
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Ações
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {sortedConsultations.map((consultation) => (
                      <tr key={consultation.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {consultation.title}
                            </p>
                            <p className="text-sm text-gray-500">{consultation.sector}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(consultation.status)}`}>
                            {getStatusText(consultation.status)}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">
                            {new Date(consultation.startDate).toLocaleDateString('pt-BR')} -
                          </div>
                          <div className="text-sm text-gray-500">
                            {new Date(consultation.endDate).toLocaleDateString('pt-BR')}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm font-medium text-gray-900">
                            {consultation.participants.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-500">
                            {consultation.completionRate.toFixed(1)}% conclusão
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="text-sm font-medium text-gray-900">
                              {consultation.supportPercent.toFixed(1)}%
                            </div>
                            <div className="ml-2">
                              {consultation.supportPercent >= 60 ? (
                                <ThumbsUp className="h-4 w-4 text-green-500" />
                              ) : consultation.supportPercent >= 40 ? (
                                <Activity className="h-4 w-4 text-yellow-500" />
                              ) : (
                                <ThumbsDown className="h-4 w-4 text-red-500" />
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="flex-1 bg-gray-200 rounded-full h-2 mr-2">
                              <div
                                className={`h-2 rounded-full ${
                                  consultation.engagementIndex >= 70 ? 'bg-green-500' :
                                  consultation.engagementIndex >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                                }`}
                                style={{ width: `${consultation.engagementIndex}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-600 min-w-[3rem]">
                              {consultation.engagementIndex.toFixed(1)}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => setSelectedConsultation(consultation)}
                              className="text-blue-600 hover:text-blue-900 transition-colors"
                              title="Ver Detalhes"
                            >
                              <Eye className="h-4 w-4" />
                            </button>
                            <button
                              className="text-gray-600 hover:text-gray-900 transition-colors"
                              title="Exportar"
                            >
                              <Download className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              /* Card View */
              <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                {sortedConsultations.map((consultation) => (
                  <div key={consultation.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {consultation.title}
                        </h3>
                        <p className="text-sm text-gray-600">{consultation.sector}</p>
                      </div>
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(consultation.status)}`}>
                        {getStatusText(consultation.status)}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Users className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-600">Participações</span>
                        </div>
                        <p className="text-lg font-semibold text-gray-900">
                          {consultation.participants.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <ThumbsUp className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-600">Apoio</span>
                        </div>
                        <p className="text-lg font-semibold text-gray-900">
                          {consultation.supportPercent.toFixed(1)}%
                        </p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Zap className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">Engajamento</span>
                        <span className="text-sm font-medium text-gray-900">
                          {consultation.engagementIndex.toFixed(1)}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            consultation.engagementIndex >= 70 ? 'bg-green-500' :
                            consultation.engagementIndex >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${consultation.engagementIndex}%` }}
                        ></div>
                      </div>
                    </div>

                    {consultation.topIdea && (
                      <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-2 mb-1">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm font-medium text-gray-700">Ideia Mais Apoiada</span>
                        </div>
                        <p className="text-sm text-gray-900">{consultation.topIdea}</p>
                        <p className="text-xs text-gray-600 mt-1">
                          Net Score: +{consultation.netScore}
                        </p>
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        <CalendarIcon className="h-4 w-4 inline mr-1" />
                        {new Date(consultation.startDate).toLocaleDateString('pt-BR')} -
                        {new Date(consultation.endDate).toLocaleDateString('pt-BR')}
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => setSelectedConsultation(consultation)}
                          className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 transition-colors"
                        >
                          Ver Detalhes
                        </button>
                        <button className="text-gray-600 hover:text-gray-900 transition-colors">
                          <Download className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {sortedConsultations.length === 0 && (
              <div className="p-12 text-center">
                <MessageSquare className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Nenhuma consulta encontrada
                </h3>
                <p className="text-gray-500">
                  Ajuste os filtros ou crie uma nova consulta pública.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Detailed Consultation Modal */}
        {selectedConsultation && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      {selectedConsultation.title}
                    </h2>
                    <p className="text-gray-600">{selectedConsultation.sector}</p>
                  </div>
                  <button
                    onClick={() => setSelectedConsultation(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <XCircle className="h-6 w-6" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="h-5 w-5 text-blue-600" />
                      <span className="font-medium text-blue-900">Participações</span>
                    </div>
                    <p className="text-2xl font-bold text-blue-900">
                      {selectedConsultation.participants.toLocaleString()}
                    </p>
                    <p className="text-sm text-blue-700">
                      {selectedConsultation.completionRate.toFixed(1)}% taxa de conclusão
                    </p>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <ThumbsUp className="h-5 w-5 text-green-600" />
                      <span className="font-medium text-green-900">Apoio</span>
                    </div>
                    <p className="text-2xl font-bold text-green-900">
                      {selectedConsultation.supportPercent.toFixed(1)}%
                    </p>
                    <p className="text-sm text-green-700">
                      Net Score: +{selectedConsultation.netScore}
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Zap className="h-5 w-5 text-purple-600" />
                      <span className="font-medium text-purple-900">Engajamento</span>
                    </div>
                    <p className="text-2xl font-bold text-purple-900">
                      {selectedConsultation.engagementIndex.toFixed(1)}
                    </p>
                    <p className="text-sm text-purple-700">
                      Tempo médio: {selectedConsultation.avgResponseTime}min
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      📈 Resumo Executivo
                    </h3>
                    <div className="prose text-gray-700">
                      <p>
                        <strong>Consulta:</strong> {selectedConsultation.title} ({selectedConsultation.sector}) —{' '}
                        {new Date(selectedConsultation.startDate).toLocaleDateString('pt-BR')} a{' '}
                        {new Date(selectedConsultation.endDate).toLocaleDateString('pt-BR')}
                      </p>
                      <p>
                        <strong>Participações:</strong> {selectedConsultation.participants.toLocaleString()} |{' '}
                        <strong>Apoio:</strong> {selectedConsultation.supportPercent.toFixed(1)}% |{' '}
                        <strong>IE:</strong> {selectedConsultation.engagementIndex.toFixed(1)} |{' '}
                        <strong>TC:</strong> {selectedConsultation.completionRate.toFixed(1)}%
                      </p>
                      <p>
                        <strong>Top Ideia:</strong> {selectedConsultation.topIdea} (Net Score: +{selectedConsultation.netScore})
                      </p>
                      <p>
                        <strong>Status:</strong> Dados coletados com alta qualidade e engajamento {
                          selectedConsultation.engagementIndex >= 60 ? 'satisfatório' : 'moderado'
                        }. {
                          selectedConsultation.supportPercent >= 60
                            ? 'Recomenda-se prosseguir com implementação.'
                            : 'Sugere-se revisão e nova consulta após ajustes.'
                        }
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex space-x-4">
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2">
                        <FileText className="h-4 w-4" />
                        <span>Gerar Relatório</span>
                      </button>
                      <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center space-x-2">
                        <ExternalLink className="h-4 w-4" />
                        <span>Enviar ao PolicyDNA</span>
                      </button>
                    </div>
                    <div className="text-sm text-gray-500">
                      Última atualização: {new Date(selectedConsultation.lastUpdate).toLocaleString('pt-BR')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default EngajamentoCidadaoPage;