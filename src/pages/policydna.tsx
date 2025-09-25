import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
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

interface User {
  id: string;
  email: string;
  full_name: string;
  role: string;
  is_verified: boolean;
  two_factor_enabled: boolean;
  created_at: string;
}

const PolicyDNAPage = () => {
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
    <>
      <Head>
        <title>PolicyDNA™ - AI Policy Simulation System | PolicyLabs</title>
        <meta name="description" content="Conheça o PolicyDNA™, o motor de inteligência artificial que cria assinaturas genéticas para políticas públicas e democratiza a simulação inteligente de políticas governamentais." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        {/* Standard Navbar */}
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
              <h1 className="text-xl font-semibold">DNA da PolicyLabs</h1>
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

        <main className="mx-6 mt-6 pb-8">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="card-glass p-12 mb-8 text-center">
              <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2 mb-6">
                <Brain className="h-5 w-5 text-blue-600" />
                <span className="text-blue-800 text-sm font-medium">Powered by Advanced AI</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                Policy<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">DNA™</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
                O primeiro motor de inteligência artificial que cria <span className="text-blue-600 font-semibold">assinaturas genéticas</span> para políticas públicas, democratizando a simulação inteligente de políticas governamentais.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/modules/ai/policy-dna" className="btn-glass-primary px-8 py-4 text-lg font-semibold">
                  Explorar PolicyDNA™
                  <ArrowRight className="inline ml-2 h-5 w-5" />
                </Link>
                <Link href="/register" className="btn-glass px-8 py-4 text-lg font-semibold">
                  Começar Agora
                </Link>
              </div>
            </div>

            {/* Core Features */}
            <div className="card-glass p-8 mb-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Como o PolicyDNA™ Funciona
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  Nossa tecnologia avançada analisa milhares de políticas públicas para identificar padrões de sucesso e criar recomendações personalizadas para seu município.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/50 p-8 rounded-xl border border-white/30 hover:bg-white/70 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <Cpu className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Análise de Assinatura</h3>
                  <p className="text-gray-600">
                    Extrai características únicas de cada política pública, criando uma "impressão digital" que identifica fatores de sucesso.
                  </p>
                </div>

                <div className="bg-white/50 p-8 rounded-xl border border-white/30 hover:bg-white/70 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                    <Network className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Matching Inteligente</h3>
                  <p className="text-gray-600">
                    Compara assinaturas para encontrar políticas similares que obtiveram sucesso em contextos parecidos com o seu.
                  </p>
                </div>

                <div className="bg-white/50 p-8 rounded-xl border border-white/30 hover:bg-white/70 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Predição de Resultados</h3>
                  <p className="text-gray-600">
                    Utiliza machine learning para prever a probabilidade de sucesso de uma política em seu contexto específico.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Specs */}
            <div className="card-glass p-8 mb-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Especificações Técnicas
                </h2>
                <p className="text-gray-600 text-lg">
                  Tecnologia de ponta para análise governamental
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Database className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">15,247+</h3>
                  <p className="text-gray-600 text-sm">Políticas Analisadas</p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">94.7%</h3>
                  <p className="text-gray-600 text-sm">Precisão do Modelo</p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">3,247</h3>
                  <p className="text-gray-600 text-sm">Municípios Mapeados</p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">&lt;2s</h3>
                  <p className="text-gray-600 text-sm">Tempo de Resposta</p>
                </div>
              </div>
            </div>

            {/* Use Cases */}
            <div className="card-glass p-8 mb-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Casos de Uso do PolicyDNA™
                </h2>
                <p className="text-gray-600 text-lg">
                  Aplicações reais que transformam a gestão pública
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/50 p-8 rounded-xl border border-white/30">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Planejamento de Políticas</h3>
                      <p className="text-gray-600 mb-4">
                        Identifique as melhores estratégias baseadas no DNA de políticas similares que obtiveram sucesso em contextos comparáveis.
                      </p>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-green-600 text-sm">Precisão de 94.7% em predições</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/50 p-8 rounded-xl border border-white/30">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Otimização de Recursos</h3>
                      <p className="text-gray-600 mb-4">
                        Maximize o impacto do orçamento público com recomendações baseadas em análise de eficiência de políticas anteriores.
                      </p>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-green-600 text-sm">Até 40% de economia em recursos</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/50 p-8 rounded-xl border border-white/30">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Avaliação de Riscos</h3>
                      <p className="text-gray-600 mb-4">
                        Identifique potenciais obstáculos e fatores de risco baseados na análise histórica de implementações similares.
                      </p>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-green-600 text-sm">Redução de 60% em falhas de projeto</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/50 p-8 rounded-xl border border-white/30">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Settings className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Monitoramento Contínuo</h3>
                      <p className="text-gray-600 mb-4">
                        Acompanhe a performance de políticas implementadas e receba alertas de desvios em relação às expectativas.
                      </p>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-green-600 text-sm">Monitoramento em tempo real</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="card-glass p-12 bg-gradient-to-r from-blue-100 to-purple-100">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Pronto para Revolucionar sua Gestão Pública?
                </h2>
                <p className="text-xl text-gray-700 mb-8">
                  Junte-se aos municípios que já utilizam o PolicyDNA™ para tomar decisões mais inteligentes e eficazes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/modules/ai/policy-dna" className="btn-glass-primary px-8 py-4 text-lg font-semibold">
                    Acessar PolicyDNA™
                    <ArrowRight className="inline ml-2 h-5 w-5" />
                  </Link>
                  <Link href="/sobre" className="btn-glass px-8 py-4 text-lg font-semibold">
                    Saiba Mais
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

export default PolicyDNAPage;