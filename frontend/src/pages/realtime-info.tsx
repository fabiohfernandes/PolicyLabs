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

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: 'municipal' | 'state' | 'federal' | 'international' | 'tech' | 'environment';
  source: string;
  timestamp: Date;
  relevance: 'high' | 'medium' | 'low';
  tags: string[];
  url?: string;
}

interface Alert {
  id: string;
  type: 'emergency' | 'warning' | 'info' | 'success';
  title: string;
  message: string;
  timestamp: Date;
  isRead: boolean;
}

export default function RealtimeInfoPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock real-time data
  const [news, setNews] = useState<NewsItem[]>([
    {
      id: '1',
      title: 'Nova Lei de Transparência Municipal Aprovada no Senado',
      summary: 'Projeto estabelece novas regras para publicação de dados públicos municipais em tempo real.',
      content: 'O Senado Federal aprovou hoje o Projeto de Lei que estabelece novas diretrizes para transparência municipal. A nova legislação exige que municípios com mais de 20 mil habitantes publiquem dados financeiros e administrativos em portais atualizados em tempo real...',
      category: 'federal',
      source: 'Senado Federal',
      timestamp: new Date(Date.now() - 1000 * 60 * 15),
      relevance: 'high',
      tags: ['transparência', 'legislação', 'dados públicos'],
      url: 'https://senado.gov.br/noticias'
    },
    {
      id: '2',
      title: 'Programa Nacional de Digitalização Abre Inscrições',
      summary: 'Municípios podem se inscrever para receber R$ 50 milhões em investimentos para modernização digital.',
      content: 'O Ministério do Desenvolvimento Regional anunciou a abertura das inscrições para o Programa Nacional de Digitalização Municipal. O programa prevê investimentos de até R$ 500 mil por município...',
      category: 'federal',
      source: 'MDR',
      timestamp: new Date(Date.now() - 1000 * 60 * 45),
      relevance: 'high',
      tags: ['digitalização', 'investimento', 'tecnologia'],
      url: 'https://mdr.gov.br'
    },
    {
      id: '3',
      title: 'IA Generativa Revoluciona Atendimento ao Cidadão',
      summary: 'Estudo mostra 40% de melhoria na satisfação com chatbots inteligentes em prefeituras.',
      content: 'Pesquisa realizada pela FGV em 50 municípios brasileiros mostra que a implementação de IA generativa no atendimento ao cidadão resulta em significativa melhoria na satisfação e redução de custos...',
      category: 'tech',
      source: 'FGV',
      timestamp: new Date(Date.now() - 1000 * 60 * 90),
      relevance: 'high',
      tags: ['IA', 'atendimento', 'inovação'],
      url: 'https://fgv.br/noticias'
    },
    {
      id: '4',
      title: 'Cidades Sustentáveis: Novo Ranking Nacional',
      summary: 'Ranking avalia políticas ambientais de 200 municípios brasileiros.',
      content: 'O Instituto Akatu divulgou o ranking das cidades mais sustentáveis do Brasil. O estudo considera 15 indicadores incluindo gestão de resíduos, energia renovável e transporte público...',
      category: 'environment',
      source: 'Instituto Akatu',
      timestamp: new Date(Date.now() - 1000 * 60 * 120),
      relevance: 'medium',
      tags: ['sustentabilidade', 'ranking', 'meio ambiente']
    },
    {
      id: '5',
      title: 'Governo de SP Lança Plataforma de Gestão Municipal',
      summary: 'Nova ferramenta oferece quadros e analytics para prefeitos paulistas.',
      content: 'O Governo do Estado de São Paulo lançou uma plataforma digital que oferece ferramentas de gestão municipal, incluindo quadros em tempo real, analytics preditivo e integração com sistemas federais...',
      category: 'state',
      source: 'Governo de SP',
      timestamp: new Date(Date.now() - 1000 * 60 * 180),
      relevance: 'medium',
      tags: ['plataforma', 'gestão', 'São Paulo']
    }
  ]);

  const [alerts, setAlerts] = useState<Alert[]>([
    {
      id: '1',
      type: 'warning',
      title: 'Prazo para Lei de Transparência',
      message: 'Prazo para adequação à nova Lei de Transparência termina em 30 dias.',
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
      isRead: false
    },
    {
      id: '2',
      type: 'info',
      title: 'Nova Versão do PolicyLabs',
      message: 'Atualização 2.1 disponível com melhorias no PolicyDNA™.',
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      isRead: false
    },
    {
      id: '3',
      type: 'success',
      title: 'Backup Concluído',
      message: 'Backup automático dos dados municipais concluído com sucesso.',
      timestamp: new Date(Date.now() - 1000 * 60 * 60),
      isRead: true
    }
  ]);

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

    // Simulate real-time updates
    const interval = setInterval(() => {
      // Simulate new alert every 2 minutes
      if (Math.random() > 0.95) {
        const newAlert: Alert = {
          id: Date.now().toString(),
          type: 'info',
          title: 'Atualização em Tempo Real',
          message: 'Novos dados disponíveis no sistema.',
          timestamp: new Date(),
          isRead: false
        };
        setAlerts(prev => [newAlert, ...prev]);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const markAlertAsRead = (alertId: string) => {
    setAlerts(prev => prev.map(alert =>
      alert.id === alertId ? { ...alert, isRead: true } : alert
    ));
  };

  const filteredNews = news.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = searchQuery === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    const icons = {
      municipal: '🏛️',
      state: '🏞️',
      federal: '🇧🇷',
      international: '🌍',
      tech: '💻',
      environment: '🌱'
    };
    return icons[category as keyof typeof icons] || '📰';
  };

  const getAlertIcon = (type: string) => {
    const icons = {
      emergency: '🚨',
      warning: '⚠️',
      info: 'ℹ️',
      success: '✅'
    };
    return icons[type as keyof typeof icons] || 'ℹ️';
  };

  const getRelevanceColor = (relevance: string) => {
    const colors = {
      high: 'bg-red-100 text-red-800',
      medium: 'bg-yellow-100 text-yellow-800',
      low: 'bg-gray-100 text-gray-800'
    };
    return colors[relevance as keyof typeof colors] || 'bg-gray-100 text-gray-800';
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
        <title>Novidades | PolicyLabs</title>
        <meta name="description" content="Informações em tempo real para gestão pública municipal" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Header */}
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
              <h1 className="text-xl font-semibold">Novidades</h1>
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

        <div className="mx-6 mt-6 grid lg:grid-cols-4 gap-6">
          {/* Alerts Panel */}
          <div className="lg:col-span-1">
            <div className="card-glass p-4 mb-6">
              <h2 className="text-lg font-semibold mb-4">🔔 Alertas do Sistema</h2>
              <div className="space-y-3">
                {alerts.slice(0, 5).map(alert => (
                  <div
                    key={alert.id}
                    onClick={() => markAlertAsRead(alert.id)}
                    className={`p-3 rounded-lg cursor-pointer transition-all ${
                      alert.isRead
                        ? 'bg-gray-50 border border-gray-200'
                        : 'bg-blue-50 border border-blue-200 shadow-sm'
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      <span className="text-lg">{getAlertIcon(alert.type)}</span>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium">{alert.title}</h3>
                        <p className="text-xs text-gray-600 mt-1">{alert.message}</p>
                        <span className="text-xs text-gray-400">
                          {alert.timestamp.toLocaleTimeString('pt-BR')}
                        </span>
                      </div>
                      {!alert.isRead && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="card-glass p-4">
              <h3 className="text-lg font-semibold mb-4">📊 Resumo do Dia</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Notícias relevantes</span>
                  <span className="font-semibold text-blue-600">{news.filter(n => n.relevance === 'high').length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Alertas não lidos</span>
                  <span className="font-semibold text-red-600">{alerts.filter(a => !a.isRead).length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Atualizações hoje</span>
                  <span className="font-semibold text-green-600">12</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filters */}
            <div className="card-glass p-4 mb-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Buscar notícias, tags ou temas..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {['all', 'municipal', 'state', 'federal', 'tech', 'environment'].map(category => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                        activeCategory === category
                          ? 'bg-blue-600 text-white'
                          : 'bg-white border border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      {category === 'all' ? '📰 Todas' : `${getCategoryIcon(category)} ${category.charAt(0).toUpperCase() + category.slice(1)}`}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* News Feed */}
            <div className="space-y-4">
              {filteredNews.map(item => (
                <div key={item.id} className="card-glass p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{getCategoryIcon(item.category)}</span>
                      <div>
                        <h2 className="text-xl font-semibold text-gray-900">{item.title}</h2>
                        <div className="flex items-center space-x-3 mt-1">
                          <span className="text-sm text-gray-500">{item.source}</span>
                          <span className="text-sm text-gray-400">•</span>
                          <span className="text-sm text-gray-500">
                            {item.timestamp.toLocaleString('pt-BR')}
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRelevanceColor(item.relevance)}`}>
                      {item.relevance === 'high' ? 'Alta' : item.relevance === 'medium' ? 'Média' : 'Baixa'}
                    </span>
                  </div>

                  <p className="text-gray-700 mb-4">{item.summary}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        📊 Analisar com IA
                      </button>
                      {item.url && (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-gray-800 text-sm font-medium"
                        >
                          🔗 Ver fonte
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredNews.length === 0 && (
              <div className="card-glass p-8 text-center">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-lg font-semibold mb-2">Nenhuma notícia encontrada</h3>
                <p className="text-gray-600">
                  Tente ajustar os filtros ou termo de busca para encontrar mais conteúdo.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}