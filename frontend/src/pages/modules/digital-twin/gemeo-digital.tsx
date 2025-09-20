import React, { useState, useEffect, useRef, useCallback } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  ArrowLeft,
  Layers,
  Search,
  Download,
  MapPin,
  Eye,
  EyeOff,
  RotateCcw,
  Compass,
  Ruler,
  Info,
  Settings,
  Home,
  Building,
  Mountain,
  Trees,
  Factory,
  Navigation2,
  Droplets,
  Camera,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  Filter,
  BarChart3,
  Map as MapIcon,
  Satellite,
  Navigation,
  ZoomIn,
  ZoomOut,
  Move3D,
  Square,
  Circle,
  Minus,
  Plus,
  X,
  ChevronDown,
  ChevronUp,
  Maximize2
} from 'lucide-react';

interface Layer {
  id: string;
  name: string;
  description: string;
  visible: boolean;
  opacity: number;
  color: string;
  icon: React.ReactNode;
  type: 'polygon' | 'line' | 'point';
  data?: any[];
}

interface MapView {
  center: [number, number];
  zoom: number;
}

interface FeatureInfo {
  title: string;
  properties: { [key: string]: any };
  layer: string;
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

const GemeoDigitalPage = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const mapRef = useRef<HTMLDivElement>(null);
  const [selectedBasemap, setSelectedBasemap] = useState<'streets' | 'satellite' | 'terrain'>('streets');
  const [activeTool, setActiveTool] = useState<'select' | 'measure' | 'marker' | 'polygon'>('select');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [legendOpen, setLegendOpen] = useState(true);
  const [infoOpen, setInfoOpen] = useState(true);
  const [selectedFeature, setSelectedFeature] = useState<FeatureInfo | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [consultationMode, setConsultationMode] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredLayer, setHoveredLayer] = useState<string | null>(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [mapView, setMapView] = useState<MapView>({
    center: [-27.60, -48.50],
    zoom: 13
  });

  const [layers, setLayers] = useState<Layer[]>([
    {
      id: 'plano_diretor',
      name: 'Plano Diretor',
      description: 'Zoneamentos e parâmetros de uso do solo',
      visible: true,
      opacity: 0.7,
      color: '#3b82f6',
      icon: <Building className="h-4 w-4" />,
      type: 'polygon',
      data: [
        { id: 1, zone: 'ZC - Zona Central', use: 'Misto', height: '6 pav.', coef: 3.0, area: 'Centro' },
        { id: 2, zone: 'ZR - Zona Residencial', use: 'Residencial', height: '3 pav.', coef: 1.5, area: 'Bairro Verde' }
      ]
    },
    {
      id: 'bairros',
      name: 'Bairros',
      description: 'Divisão administrativa e dados demográficos',
      visible: true,
      opacity: 0.3,
      color: '#64748b',
      icon: <Home className="h-4 w-4" />,
      type: 'polygon',
      data: [
        { id: 1, name: 'Centro', population: 8200, density: 4500, income: 3200 },
        { id: 2, name: 'Bairro Verde', population: 5400, density: 1800, income: 2500 }
      ]
    },
    {
      id: 'meio_ambiente',
      name: 'Meio Ambiente',
      description: 'APPs, unidades de conservação e áreas verdes',
      visible: true,
      opacity: 0.5,
      color: '#22c55e',
      icon: <Trees className="h-4 w-4" />,
      type: 'polygon',
      data: [
        { id: 1, type: 'APP Rio Principal', area: '2.5 ha', protection: 'Permanente' }
      ]
    },
    {
      id: 'distrito_industrial',
      name: 'Distrito Industrial',
      description: 'Lotes industriais e infraestrutura',
      visible: true,
      opacity: 0.6,
      color: '#eab308',
      icon: <Factory className="h-4 w-4" />,
      type: 'polygon',
      data: [
        { id: 1, lot: 'Lote 01', area: '2.500 m²', status: 'Disponível', infra: 'Energia, água, fibra' },
        { id: 2, lot: 'Lote 02', area: '2.600 m²', status: 'Ocupado', infra: 'Energia, água, fibra' }
      ]
    },
    {
      id: 'vias',
      name: 'Vias Principais',
      description: 'Hierarquia viária e acessos',
      visible: true,
      opacity: 0.8,
      color: '#374151',
      icon: <Navigation2 className="h-4 w-4" />,
      type: 'line',
      data: [
        { id: 1, name: 'Av. Central', class: 'Arterial', length: '2.5 km' },
        { id: 2, name: 'Av. Parque', class: 'Coletora', length: '1.8 km' }
      ]
    },
    {
      id: 'risco_inundacao',
      name: 'Áreas de Risco',
      description: 'Manchas de inundação e áreas vulneráveis',
      visible: true,
      opacity: 0.4,
      color: '#ef4444',
      icon: <Droplets className="h-4 w-4" />,
      type: 'polygon',
      data: [
        { id: 1, risk: 'Alta', return_period: '10 anos', events: '3 eventos históricos' }
      ]
    },
    {
      id: 'hidrografia',
      name: 'Hidrografia',
      description: 'Rios, córregos e nascentes',
      visible: true,
      opacity: 0.9,
      color: '#06b6d4',
      icon: <Droplets className="h-4 w-4" />,
      type: 'line',
      data: [
        { id: 1, name: 'Rio Azul', length: '3.2 km', flow: 'Permanente' }
      ]
    },
    {
      id: 'pontos_turisticos',
      name: 'Pontos Turísticos',
      description: 'Atrativos e equipamentos turísticos',
      visible: true,
      opacity: 1.0,
      color: '#8b5cf6',
      icon: <Camera className="h-4 w-4" />,
      type: 'point',
      data: [
        { id: 1, name: 'Mirante do Sol', type: 'Mirante', rating: 4.6, schedule: '8h-18h' },
        { id: 2, name: 'Museu Municipal', type: 'Museu', rating: 4.4, schedule: '9h-17h' }
      ]
    }
  ]);

  const municipalData = {
    name: 'Cidade Demo',
    population: 28450,
    area: 145,
    density: 196,
    ageGroups: {
      '0-14': 18,
      '15-24': 14,
      '25-59': 52,
      '60+': 16
    },
    avgIncome: 2450,
    formalJobs: 5800,
    touristsYear: 120000,
    schools: { municipal: 8, state: 2 },
    health: { upa: 1, ubs: 6 },
    security: { rate: 12 },
    industry: { lots: 42, occupied: 31 }
  };

  useEffect(() => {
    // Load user data from localStorage
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
    } else {
      router.push('/login');
      return;
    }

    // Simulate progressive map loading with realistic steps
    const loadingSteps = [
      { step: 'Carregando base cartográfica...', progress: 20 },
      { step: 'Processando camadas geoespaciais...', progress: 40 },
      { step: 'Sincronizando dados municipais...', progress: 60 },
      { step: 'Renderizando elementos visuais...', progress: 80 },
      { step: 'Finalizando interface interativa...', progress: 100 }
    ];

    let currentStep = 0;
    const progressTimer = setInterval(() => {
      if (currentStep < loadingSteps.length) {
        setLoadingProgress(loadingSteps[currentStep].progress);
        currentStep++;
      } else {
        clearInterval(progressTimer);
        setTimeout(() => setIsLoading(false), 500);
      }
    }, 300);

    return () => clearInterval(progressTimer);
  }, [router]);

  // Smooth animations for layer changes
  const animateLayerChange = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  }, []);

  const toggleLayer = (layerId: string) => {
    animateLayerChange();
    setLayers(prev => prev.map(layer =>
      layer.id === layerId
        ? { ...layer, visible: !layer.visible }
        : layer
    ));
  };

  const updateLayerOpacity = (layerId: string, opacity: number) => {
    setLayers(prev => prev.map(layer =>
      layer.id === layerId
        ? { ...layer, opacity }
        : layer
    ));
  };

  const handleFeatureClick = (feature: any, layerName: string) => {
    setSelectedFeature({
      title: layerName,
      properties: feature,
      layer: layerName
    });
    setInfoOpen(true);
  };

  const resetView = () => {
    setMapView({
      center: [-27.60, -48.50],
      zoom: 13
    });
  };

  const exportMap = () => {
    // Simulate map export
    alert('Mapa exportado como PNG com legenda e norte geográfico!');
  };

  // Search functionality with suggestions
  const searchSuggestions = [
    { type: 'address', name: 'Rua das Flores, 123', layer: 'Endereços' },
    { type: 'poi', name: 'Mirante do Sol', layer: 'Pontos Turísticos' },
    { type: 'zone', name: 'Zona Central', layer: 'Plano Diretor' },
    { type: 'neighborhood', name: 'Centro', layer: 'Bairros' },
    { type: 'poi', name: 'Museu Municipal', layer: 'Pontos Turísticos' },
    { type: 'zone', name: 'Distrito Industrial', layer: 'Distrito Industrial' },
    { type: 'env', name: 'APP Rio Principal', layer: 'Meio Ambiente' },
    { type: 'address', name: 'Av. Central, 456', layer: 'Endereços' }
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length > 2) {
      const filtered = searchSuggestions.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filtered);
      setShowSearchResults(true);
    } else {
      setShowSearchResults(false);
    }
  };

  const selectSearchResult = (result: any) => {
    setSearchQuery(result.name);
    setShowSearchResults(false);
    // Simulate zooming to result
    setMapView(prev => ({ ...prev, zoom: 16 }));
    animateLayerChange();
  };

  const basemapOptions = [
    { id: 'streets', name: 'Mapa', icon: <MapIcon className="h-4 w-4" /> },
    { id: 'satellite', name: 'Satélite', icon: <Satellite className="h-4 w-4" /> },
    { id: 'terrain', name: 'Terreno', icon: <Mountain className="h-4 w-4" /> }
  ];

  const tools = [
    { id: 'select', name: 'Selecionar', icon: <Navigation className="h-4 w-4" /> },
    { id: 'measure', name: 'Medir', icon: <Ruler className="h-4 w-4" /> },
    { id: 'marker', name: 'Marcador', icon: <MapPin className="h-4 w-4" /> },
    { id: 'polygon', name: 'Área', icon: <Square className="h-4 w-4" /> }
  ];

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
        <title>Gêmeo Digital Municipal | PolicyLabs</title>
        <meta name="description" content="Plataforma interativa de mapas e gêmeo digital para gestão municipal" />
      </Head>

      <style jsx>{`
        @keyframes flow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(59, 130, 246, 0.6); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .backdrop-blur {
          backdrop-filter: blur(10px);
        }
      `}</style>

      <div className="h-screen bg-gray-100 overflow-hidden">
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
              <h1 className="text-xl font-semibold">Gêmeo Digital</h1>
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
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 z-10" />
              <input
                type="text"
                placeholder="Buscar endereço, lote ou atrativo..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                onFocus={() => searchQuery.length > 2 && setShowSearchResults(true)}
                onBlur={() => setTimeout(() => setShowSearchResults(false), 200)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-80 relative z-10"
              />

              {/* Search Results Dropdown */}
              {showSearchResults && searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
                  {searchResults.map((result, index) => (
                    <div
                      key={index}
                      onClick={() => selectSearchResult(result)}
                      className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <div>
                          <div className="font-medium text-gray-900">{result.name}</div>
                          <div className="text-sm text-gray-500">{result.layer}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Basemap selector */}
            <div className="flex bg-gray-100 rounded-lg p-1">
              {basemapOptions.map(option => (
                <button
                  key={option.id}
                  onClick={() => setSelectedBasemap(option.id as any)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm transition-all ${
                    selectedBasemap === option.id
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {option.icon}
                  <span>{option.name}</span>
                </button>
              ))}
            </div>

            {/* Tools */}
            <div className="flex bg-gray-100 rounded-lg p-1">
              {tools.map(tool => (
                <button
                  key={tool.id}
                  onClick={() => setActiveTool(tool.id as any)}
                  className={`p-2 rounded-md transition-all duration-300 transform hover:scale-110 ${
                    activeTool === tool.id
                      ? 'bg-blue-500 text-white shadow-lg animate-glow'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                  }`}
                  title={tool.name}
                >
                  {tool.icon}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={resetView}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              title="Redefinir Visualização"
            >
              <RotateCcw className="h-5 w-5" />
            </button>
            <button
              onClick={exportMap}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              title="Exportar PNG"
            >
              <Download className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="flex h-full relative">
          {/* Sidebar - Layers */}
          <div className={`bg-white border-r border-gray-200 transition-all duration-300 ${
            sidebarOpen ? 'w-80' : 'w-12'
          }`}>
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              {sidebarOpen && (
                <div>
                  <h2 className="font-semibold text-gray-900 flex items-center">
                    <Layers className="h-5 w-5 mr-2" />
                    Camadas
                  </h2>
                  <p className="text-sm text-gray-500">Controle de visibilidade e opacidade</p>
                </div>
              )}
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
              >
                {sidebarOpen ? <X className="h-4 w-4" /> : <Layers className="h-4 w-4" />}
              </button>
            </div>

            {sidebarOpen && (
              <div className="p-4 space-y-4 overflow-y-auto h-full">
                {layers.map((layer, index) => (
                  <div
                    key={layer.id}
                    className={`bg-gray-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:bg-gray-100 transform ${
                      hoveredLayer === layer.id ? 'scale-[1.02]' : 'scale-100'
                    } ${isAnimating ? 'animate-pulse' : ''}`}
                    style={{
                      animationDelay: `${index * 50}ms`
                    }}
                    onMouseEnter={() => setHoveredLayer(layer.id)}
                    onMouseLeave={() => setHoveredLayer(null)}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`p-2 rounded-lg text-white transition-all duration-300 ${
                            hoveredLayer === layer.id ? 'scale-110 shadow-lg' : 'scale-100'
                          }`}
                          style={{ backgroundColor: layer.color }}
                        >
                          {layer.icon}
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{layer.name}</h3>
                          <p className="text-xs text-gray-500">{layer.description}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleLayer(layer.id)}
                        className={`p-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                          layer.visible
                            ? 'text-green-600 bg-green-50 hover:bg-green-100'
                            : 'text-gray-400 bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        {layer.visible ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                      </button>
                    </div>

                    {layer.visible && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Opacidade</span>
                          <span className="text-sm font-medium text-gray-900">
                            {Math.round(layer.opacity * 100)}%
                          </span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.1"
                          value={layer.opacity}
                          onChange={(e) => updateLayerOpacity(layer.id, parseFloat(e.target.value))}
                          className="w-full"
                        />
                        <div className="text-xs text-gray-500">
                          {layer.data?.length || 0} {layer.type === 'point' ? 'pontos' : layer.type === 'line' ? 'linhas' : 'polígonos'}
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                {/* Municipal Overview */}
                <div className="bg-blue-50 rounded-lg p-4 mt-6">
                  <h3 className="font-semibold text-blue-900 mb-3 flex items-center">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Dados Municipais
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-blue-700">População:</span>
                      <span className="font-medium text-blue-900">{municipalData.population.toLocaleString('pt-BR')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700">Área:</span>
                      <span className="font-medium text-blue-900">{municipalData.area} km²</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700">Densidade:</span>
                      <span className="font-medium text-blue-900">{municipalData.density} hab/km²</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700">Renda Média:</span>
                      <span className="font-medium text-blue-900">R$ {municipalData.avgIncome}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700">Turistas/Ano:</span>
                      <span className="font-medium text-blue-900">{municipalData.touristsYear.toLocaleString('pt-BR')}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Map Container */}
          <div className="flex-1 relative">
            {isLoading ? (
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center z-40">
                <div className="text-center max-w-md mx-auto">
                  <div className="relative mb-6">
                    <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-600 mx-auto"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-sm">{loadingProgress}%</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-lg p-6 border border-blue-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">🌍 Inicializando Gêmeo Digital</h3>

                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${loadingProgress}%` }}
                      ></div>
                    </div>

                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${loadingProgress >= 20 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                        <span>Base cartográfica carregada</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${loadingProgress >= 40 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                        <span>Camadas geoespaciais processadas</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${loadingProgress >= 60 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                        <span>Dados municipais sincronizados</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${loadingProgress >= 80 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                        <span>Interface renderizada</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${loadingProgress >= 100 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                        <span>Sistema pronto para uso</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                {/* Interactive Map Simulation */}
                <div
                  ref={mapRef}
                  className="w-full h-full bg-gradient-to-br from-green-100 via-blue-50 to-green-100 relative overflow-hidden"
                  style={{
                    backgroundImage: `
                      radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 40% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)
                    `
                  }}
                >
                  {/* Simulated map features with enhanced animations */}
                  {layers.filter(l => l.visible).map((layer, layerIndex) => (
                    <div key={layer.id} className={`transition-all duration-500 ${isAnimating ? 'animate-pulse' : ''}`}>
                      {/* Polygon features with breathing animation */}
                      {layer.type === 'polygon' && layer.data?.map((feature, idx) => (
                        <div
                          key={idx}
                          className="absolute rounded-lg border-2 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl animate-pulse"
                          style={{
                            backgroundColor: `${layer.color}${Math.round(layer.opacity * 255).toString(16).padStart(2, '0')}`,
                            borderColor: layer.color,
                            top: `${30 + (idx * 15) + (layerIndex * 5)}%`,
                            left: `${25 + (idx * 20) + (layerIndex * 10)}%`,
                            width: `${120 + (idx * 30)}px`,
                            height: `${80 + (idx * 20)}px`,
                            animationDelay: `${layerIndex * 200 + idx * 100}ms`,
                            animationDuration: '3s'
                          }}
                          onClick={() => handleFeatureClick(feature, layer.name)}
                        >
                          <div className="absolute top-1 left-1 opacity-75">
                            {layer.icon}
                          </div>
                        </div>
                      ))}

                      {/* Line features with flowing animation */}
                      {layer.type === 'line' && layer.data?.map((feature, idx) => (
                        <div
                          key={idx}
                          className="absolute border-t-4 cursor-pointer transition-all duration-300 hover:scale-105"
                          style={{
                            borderColor: layer.color,
                            opacity: layer.opacity,
                            top: `${40 + (idx * 20)}%`,
                            left: `${20 + (idx * 15)}%`,
                            width: `${180 + (idx * 40)}px`,
                            transform: `rotate(${25 + (idx * 30)}deg)`,
                            boxShadow: `0 0 10px ${layer.color}40`,
                          }}
                          onClick={() => handleFeatureClick(feature, layer.name)}
                        >
                          {/* Animated flow effect */}
                          <div
                            className="absolute top-0 left-0 h-full w-4 opacity-60 animate-pulse"
                            style={{
                              background: `linear-gradient(90deg, transparent, ${layer.color}, transparent)`,
                              animation: 'flow 2s linear infinite'
                            }}
                          />
                        </div>
                      ))}

                      {/* Point features with bouncing animation */}
                      {layer.type === 'point' && layer.data?.map((point, idx) => (
                        <div
                          key={idx}
                          className="absolute w-8 h-8 rounded-full cursor-pointer flex items-center justify-center text-white transform hover:scale-125 transition-all shadow-lg animate-bounce"
                          style={{
                            backgroundColor: layer.color,
                            opacity: layer.opacity,
                            top: `${25 + (idx * 25)}%`,
                            left: `${30 + (idx * 30)}%`,
                            animationDelay: `${idx * 500}ms`,
                            animationDuration: '2s'
                          }}
                          onClick={() => handleFeatureClick(point, layer.name)}
                        >
                          {layer.icon}
                          {/* Ripple effect */}
                          <div
                            className="absolute inset-0 rounded-full border-2 border-white animate-ping"
                            style={{
                              animationDelay: `${idx * 300}ms`,
                              animationDuration: '2s'
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  ))}

                  {/* Floating data bubbles */}
                  <div className="absolute top-10 left-10 bg-white rounded-lg shadow-lg p-3 animate-float">
                    <div className="text-xs text-gray-600">Coordenadas</div>
                    <div className="font-semibold text-gray-900">{mapView.center[0].toFixed(4)}, {mapView.center[1].toFixed(4)}</div>
                  </div>

                  <div className="absolute top-10 right-32 bg-white rounded-lg shadow-lg p-3 animate-float" style={{ animationDelay: '1s' }}>
                    <div className="text-xs text-gray-600">Zoom</div>
                    <div className="font-semibold text-gray-900">Nível {mapView.zoom}</div>
                  </div>

                  <div className="absolute bottom-20 right-10 bg-white rounded-lg shadow-lg p-3 animate-float" style={{ animationDelay: '2s' }}>
                    <div className="text-xs text-gray-600">Camadas Ativas</div>
                    <div className="font-semibold text-gray-900">{layers.filter(l => l.visible).length} de {layers.length}</div>
                  </div>

                  {/* Map Controls */}
                  <div className="absolute top-4 right-4 space-y-2 z-30">
                    <div className="bg-white rounded-lg shadow-lg p-2 space-y-1">
                      <button className="p-2 hover:bg-gray-100 rounded w-full"><ZoomIn className="h-4 w-4" /></button>
                      <button className="p-2 hover:bg-gray-100 rounded w-full"><ZoomOut className="h-4 w-4" /></button>
                    </div>
                  </div>

                  {/* North Arrow */}
                  <div className="absolute top-4 right-20 bg-white rounded-lg shadow-lg p-3">
                    <div className="relative">
                      <Compass className="h-8 w-8 text-gray-700" />
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 text-xs font-bold text-red-600">N</div>
                    </div>
                  </div>

                  {/* Scale */}
                  <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg px-3 py-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="w-16 h-1 bg-gray-800"></div>
                      <span className="text-gray-600">1 km</span>
                    </div>
                  </div>

                  {/* Mini-map Overview */}
                  <div className="absolute bottom-24 left-4 w-48 h-36 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                    <div className="bg-gray-100 px-3 py-2 border-b border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-gray-700">Visão Geral</span>
                        <Maximize2 className="h-3 w-3 text-gray-500" />
                      </div>
                    </div>
                    <div className="relative h-full bg-gradient-to-br from-green-100 to-blue-100">
                      {/* Mini map content */}
                      <div className="absolute inset-2">
                        {layers.filter(l => l.visible).slice(0, 3).map((layer, idx) => (
                          <div
                            key={layer.id}
                            className="absolute rounded border opacity-60"
                            style={{
                              backgroundColor: layer.color,
                              top: `${20 + idx * 15}%`,
                              left: `${15 + idx * 20}%`,
                              width: `${30 + idx * 10}px`,
                              height: `${20 + idx * 8}px`,
                            }}
                          />
                        ))}
                        {/* Current view indicator */}
                        <div className="absolute border-2 border-red-500 bg-red-100 bg-opacity-50"
                             style={{
                               top: '30%',
                               left: '25%',
                               width: '50%',
                               height: '40%',
                             }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Consultation Mode Overlay */}
                  {consultationMode && (
                    <div className="absolute inset-0 bg-blue-500 bg-opacity-10 pointer-events-none flex items-center justify-center">
                      <div className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 animate-float">
                        <MessageSquare className="h-5 w-5" />
                        <span>Modo Consulta Ativo - Clique no mapa para comentar</span>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Info Panel */}
          <div className={`bg-white border-l border-gray-200 transition-all duration-300 ${
            infoOpen ? 'w-96' : 'w-12'
          }`}>
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              {infoOpen && (
                <h2 className="font-semibold text-gray-900 flex items-center">
                  <Info className="h-5 w-5 mr-2" />
                  Informações
                </h2>
              )}
              <button
                onClick={() => setInfoOpen(!infoOpen)}
                className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
              >
                {infoOpen ? <X className="h-4 w-4" /> : <Info className="h-4 w-4" />}
              </button>
            </div>

            {infoOpen && (
              <div className="p-4 space-y-4 overflow-y-auto h-full">
                {selectedFeature ? (
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{selectedFeature.title}</h3>
                      <div className="space-y-2">
                        {Object.entries(selectedFeature.properties).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="text-sm text-gray-600 capitalize">{key.replace('_', ' ')}:</span>
                            <span className="text-sm font-medium text-gray-900">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {consultationMode && (
                      <div className="bg-blue-50 rounded-lg p-4">
                        <h4 className="font-medium text-blue-900 mb-3">Consulta Pública</h4>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <button className="flex items-center space-x-1 px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                              <ThumbsUp className="h-4 w-4" />
                              <span>Apoio</span>
                            </button>
                            <button className="flex items-center space-x-1 px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                              <ThumbsDown className="h-4 w-4" />
                              <span>Contra</span>
                            </button>
                          </div>
                          <textarea
                            placeholder="Deixe seu comentário sobre esta área..."
                            className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            rows={3}
                          />
                          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
                            Enviar Comentário
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center text-gray-500 py-8">
                    <MapPin className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <p>Clique em um objeto do mapa para ver informações detalhadas</p>
                    <p className="text-sm mt-2">Zoneamento, dados demográficos, riscos e atrativos</p>
                  </div>
                )}

                {/* Legend */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-900">Legenda</h4>
                    <button onClick={() => setLegendOpen(!legendOpen)}>
                      {legendOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </button>
                  </div>
                  {legendOpen && (
                    <div className="space-y-2">
                      {layers.filter(l => l.visible).map(layer => (
                        <div key={layer.id} className="flex items-center space-x-3">
                          <div
                            className="w-4 h-4 rounded"
                            style={{ backgroundColor: layer.color, opacity: layer.opacity }}
                          />
                          <span className="text-sm text-gray-700">{layer.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Quick Stats */}
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-3">Indicadores Rápidos</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-green-700">Camadas Ativas:</span>
                      <span className="font-medium text-green-900">{layers.filter(l => l.visible).length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-700">Zoom Level:</span>
                      <span className="font-medium text-green-900">{mapView.zoom}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-700">Coordenadas:</span>
                      <span className="font-medium text-green-900">{mapView.center[0].toFixed(4)}, {mapView.center[1].toFixed(4)}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default GemeoDigitalPage;