import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Heart,
  Users,
  Utensils,
  Droplets,
  Vote,
  Shield,
  BookOpen,
  Bus,
  Building,
  ArrowLeft,
  Search,
  Filter,
  Star,
  TrendingUp,
  Clock,
  MapPin,
  CheckCircle
} from 'lucide-react';

interface User {
  id: string;
  email: string;
  full_name: string;
  role: string;
  is_verified: boolean;
  two_factor_enabled: boolean;
  created_at: string;
}

interface Idea {
  id: number;
  title: string;
  category: string;
  area: string;
  description: string;
  impact: string;
  difficulty: 'Baixa' | 'Média' | 'Alta';
  cost: 'Baixo' | 'Médio' | 'Alto';
  timeToImplement: string;
  successRate: number;
  icon: React.ReactNode;
  tags: string[];
  slug: string;
}

const BankIdeasPage = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todas');

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

  const ideas: Idea[] = [
    {
      id: 1,
      title: "Bolsa Família",
      category: "Proteção Social",
      area: "Assistência Social",
      description: "Transferência de renda condicionada que combina alívio imediato com investimento no capital humano através de condicionalidades em educação e saúde.",
      impact: "Redução da pobreza extrema e melhoria da frequência escolar",
      difficulty: 'Média',
      cost: 'Médio',
      timeToImplement: "3-6 meses",
      successRate: 95,
      icon: <Heart className="h-6 w-6" />,
      tags: ["renda", "educação", "saúde", "vulnerabilidade"],
      slug: "bolsa-familia"
    },
    {
      id: 2,
      title: "Estratégia Saúde da Família (ESF)",
      category: "Saúde",
      area: "Atenção Primária",
      description: "Equipes multiprofissionais adscritas a territórios específicos, focando em prevenção e cuidado continuado das famílias.",
      impact: "Redução de internações evitáveis e melhoria da saúde preventiva",
      difficulty: 'Alta',
      cost: 'Alto',
      timeToImplement: "6-12 meses",
      successRate: 88,
      icon: <Users className="h-6 w-6" />,
      tags: ["prevenção", "território", "multiprofissional", "ACS"],
      slug: "estrategia-saude-familia"
    },
    {
      id: 3,
      title: "PNAE - Alimentação Escolar com Compra Local",
      category: "Educação",
      area: "Educação & Nutrição",
      description: "Merenda escolar de qualidade com mínimo de 30% dos alimentos adquiridos da agricultura familiar local.",
      impact: "Melhoria da nutrição infantil e fortalecimento da economia local",
      difficulty: 'Média',
      cost: 'Médio',
      timeToImplement: "4-8 meses",
      successRate: 92,
      icon: <Utensils className="h-6 w-6" />,
      tags: ["nutrição", "agricultura familiar", "economia local", "merenda"],
      slug: "pnae-alimentacao-escolar"
    },
    {
      id: 4,
      title: "PAA - Programa de Aquisição de Alimentos",
      category: "Desenvolvimento Rural",
      area: "Segurança Alimentar",
      description: "Compra institucional direta da produção familiar para abastecer equipamentos públicos e entidades socioassistenciais.",
      impact: "Geração de renda no campo e garantia de segurança alimentar",
      difficulty: 'Média',
      cost: 'Médio',
      timeToImplement: "3-6 meses",
      successRate: 89,
      icon: <Utensils className="h-6 w-6" />,
      tags: ["agricultura familiar", "compras públicas", "segurança alimentar"],
      slug: "paa-aquisicao-alimentos"
    },
    {
      id: 5,
      title: "Programa Cisternas no Semiárido",
      category: "Recursos Hídricos",
      area: "Resiliência Climática",
      description: "Tecnologias sociais de baixo custo para acesso à água de beber e produção, aumentando a resiliência climática.",
      impact: "Acesso à água potável e redução de custos com carros-pipa",
      difficulty: 'Baixa',
      cost: 'Baixo',
      timeToImplement: "2-4 meses",
      successRate: 94,
      icon: <Droplets className="h-6 w-6" />,
      tags: ["água", "tecnologia social", "semiárido", "resiliência"],
      slug: "programa-cisternas"
    },
    {
      id: 6,
      title: "Orçamento Participativo",
      category: "Gestão Democrática",
      area: "Transparência",
      description: "Cidadãos decidem diretamente sobre parte do orçamento municipal, priorizando investimentos por região e tema.",
      impact: "Aumento da participação cidadã e melhoria da alocação de recursos",
      difficulty: 'Baixa',
      cost: 'Baixo',
      timeToImplement: "2-3 meses",
      successRate: 85,
      icon: <Vote className="h-6 w-6" />,
      tags: ["participação", "transparência", "orçamento", "democracia"],
      slug: "orcamento-participativo"
    },
    {
      id: 7,
      title: "Pacto Pela Vida - Pernambuco",
      category: "Segurança Pública",
      area: "Prevenção à Violência",
      description: "Governança integrada com metas por território, monitoramento semanal e prevenção qualificada.",
      impact: "Redução significativa de homicídios e melhoria da segurança",
      difficulty: 'Alta',
      cost: 'Alto',
      timeToImplement: "6-12 meses",
      successRate: 91,
      icon: <Shield className="h-6 w-6" />,
      tags: ["segurança", "integração", "monitoramento", "territórios"],
      slug: "pacto-pela-vida"
    },
    {
      id: 8,
      title: "Sobral - Alfabetização na Idade Certa",
      category: "Educação",
      area: "Educação Básica",
      description: "Foco radical em alfabetização até o 2º ano com avaliação frequente e apoio pedagógico contínuo.",
      impact: "Melhoria significativa do IDEB e da alfabetização infantil",
      difficulty: 'Média',
      cost: 'Médio',
      timeToImplement: "4-6 meses",
      successRate: 96,
      icon: <BookOpen className="h-6 w-6" />,
      tags: ["alfabetização", "avaliação", "formação", "IDEB"],
      slug: "alfabetizacao-idade-certa"
    },
    {
      id: 9,
      title: "BRT de Curitiba e Rede Integrada",
      category: "Mobilidade Urbana",
      area: "Transporte Público",
      description: "Transporte coletivo estruturante com integração tarifária e desenho urbano orientado ao ônibus.",
      impact: "Melhoria do transporte público e estruturação do crescimento urbano",
      difficulty: 'Alta',
      cost: 'Alto',
      timeToImplement: "12-24 meses",
      successRate: 87,
      icon: <Bus className="h-6 w-6" />,
      tags: ["transporte", "integração", "mobilidade", "urbanismo"],
      slug: "brt-curitiba"
    },
    {
      id: 10,
      title: "Poupatempo / Sala do Cidadão Municipal",
      category: "Serviços Digitais",
      area: "Desburocratização",
      description: "Balcão único de serviços com processos simplificados e digitalização para reduzir tempo e burocracia.",
      impact: "Redução drástica do tempo de atendimento e melhoria da experiência",
      difficulty: 'Média',
      cost: 'Médio',
      timeToImplement: "3-6 meses",
      successRate: 93,
      icon: <Building className="h-6 w-6" />,
      tags: ["digitalização", "desburocratização", "atendimento", "gov.br"],
      slug: "poupatempo-sala-cidadao"
    }
  ];

  const categories = [
    'todas',
    'Proteção Social',
    'Saúde',
    'Educação',
    'Desenvolvimento Rural',
    'Recursos Hídricos',
    'Gestão Democrática',
    'Segurança Pública',
    'Mobilidade Urbana',
    'Serviços Digitais'
  ];

  const filteredIdeas = ideas.filter(idea => {
    const matchesSearch = idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         idea.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         idea.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = selectedCategory === 'todas' || idea.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Baixa': return 'text-green-600 bg-green-100';
      case 'Média': return 'text-yellow-600 bg-yellow-100';
      case 'Alta': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getCostColor = (cost: string) => {
    switch (cost) {
      case 'Baixo': return 'text-green-600 bg-green-100';
      case 'Médio': return 'text-yellow-600 bg-yellow-100';
      case 'Alto': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
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
        <title>Banco de Ideias - Políticas Públicas | PolicyLabs</title>
        <meta name="description" content="10 políticas públicas criativas e inovadoras com bons resultados comprovados e alto potencial de adaptação para municípios." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
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
              <h1 className="text-xl font-semibold">Banco de Ideias</h1>
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

        {/* Search and Filters */}
        <div className="mx-6 mt-6">
          <div className="card-glass p-6">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar por política, área ou palavra-chave..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'todas' ? 'Todas as Categorias' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="text-sm text-gray-600">
              <p className="mb-2">
                <strong>{filteredIdeas.length}</strong> {filteredIdeas.length === 1 ? 'política encontrada' : 'políticas encontradas'}
              </p>
              <p>
                10 políticas públicas criativas e inovadoras, em diferentes áreas, com bons resultados comprovados
                e alto potencial de adaptação para municípios de pequeno porte.
              </p>
            </div>
          </div>
        </div>

        {/* Ideas Grid */}
        <div className="mx-6 mt-6 pb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIdeas.map((idea) => (
              <div
                key={idea.id}
                className="card-glass p-6 hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-[1.02]"
                onClick={() => router.push(`/bank/ideas/${idea.slug}`)}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                      {idea.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1">{idea.title}</h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                          {idea.category}
                        </span>
                        <span>•</span>
                        <span>{idea.area}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center text-green-600">
                    <Star className="h-4 w-4 mr-1" />
                    <span className="text-sm font-semibold">{idea.successRate}%</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {idea.description}
                </p>

                {/* Impact */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                  <div className="flex items-center text-green-700 mb-1">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span className="text-xs font-semibold">IMPACTO ESPERADO</span>
                  </div>
                  <p className="text-green-800 text-sm">{idea.impact}</p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div>
                    <span className="text-xs text-gray-500 block">Dificuldade</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(idea.difficulty)}`}>
                      {idea.difficulty}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 block">Custo</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${getCostColor(idea.cost)}`}>
                      {idea.cost}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 block">Tempo</span>
                    <div className="flex items-center text-xs text-gray-700">
                      <Clock className="h-3 w-3 mr-1" />
                      {idea.timeToImplement}
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {idea.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                  {idea.tags.length > 3 && (
                    <span className="text-gray-400 text-xs">+{idea.tags.length - 3}</span>
                  )}
                </div>

                {/* Action */}
                <div className="pt-3 border-t border-gray-200">
                  <button className="w-full btn-glass-primary py-2 text-sm font-medium rounded-lg hover:scale-105 transition-transform">
                    Ver Guia Completo
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredIdeas.length === 0 && (
            <div className="card-glass p-12 text-center">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto mb-4" />
              </div>
              <h3 className="text-lg font-semibold text-gray-600 mb-2">
                Nenhuma política encontrada
              </h3>
              <p className="text-gray-500">
                Tente ajustar os filtros ou termos de busca para encontrar o que procura.
              </p>
            </div>
          )}
        </div>

        {/* Summary Stats */}
        <div className="mx-6 mb-8">
          <div className="card-glass p-6">
            <h3 className="text-lg font-bold mb-4">📊 Estatísticas do Banco de Ideias</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">10</div>
                <p className="text-sm text-gray-600">Políticas Públicas</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">91%</div>
                <p className="text-sm text-gray-600">Taxa Média de Sucesso</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">6</div>
                <p className="text-sm text-gray-600">Áreas de Atuação</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-1">5.2</div>
                <p className="text-sm text-gray-600">Meses Médio Implementação</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BankIdeasPage;