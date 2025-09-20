import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function SobrePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in by checking for access token
    const token = localStorage.getItem('access_token');
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!(token && user));
  }, []);

  return (
    <>
      <Head>
        <title>Sobre a PolicyLabs | Sistema Operacional para Gestão Pública Global</title>
        <meta name="description" content="Onde a Política Encontra a Precisão - Democratizando o acesso a tecnologia sofisticada de simulação de políticas" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Simple Navigation */}
        <header className="mx-6 mt-4 px-6 py-4">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-4">
                <img src="/logo.svg" alt="PolicyLabs" className="h-8 w-8" />
                <span className="text-xl font-bold">PolicyLabs</span>
              </Link>
            </div>

            <div className="flex items-center">
              <h1 className="text-xl font-semibold">Sobre a PolicyLabs</h1>
            </div>

            <div className="flex items-center">
              <Link href="/" className="btn-glass text-sm">
                Voltar
              </Link>
            </div>
          </div>
        </header>

        <main className="mx-6 mt-6 pb-8">
          <div className="max-w-7xl mx-auto">

          {/* Hero Section */}
          <div className="card-glass p-12 text-center mb-8">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Sistema de Simulação de Políticas por IA
            </h1>
            <p className="text-2xl text-gray-600 mb-8">
              "Onde a Política Encontra a Precisão"
            </p>
            <p className="text-xl text-gray-500 max-w-4xl mx-auto">
              O Sistema de Simulação de Políticas por IA é a plataforma proprietária da PolicyLabs que democratiza a simulação inteligente de políticas públicas, permitindo que governos de qualquer porte tomem decisões baseadas em evidências que maximizam impacto social e otimizam recursos.
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">

            <div className="card-glass p-8">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">🎯</div>
                <h2 className="text-3xl font-bold">Visão</h2>
              </div>
              <p className="text-lg text-gray-600">
                Tornar-se o sistema operacional global para tomada de decisões governamentais,
                impulsionando políticas baseadas em evidências que melhorem a vida de bilhões de pessoas.
              </p>
            </div>

            <div className="card-glass p-8">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">🚀</div>
                <h2 className="text-3xl font-bold">Missão</h2>
              </div>
              <p className="text-lg text-gray-600">
                A PolicyLabs democratiza o acesso a tecnologia sofisticada de simulação de políticas,
                permitindo que governos de todos os portes tomem decisões orientadas por dados que
                maximizem o impacto social enquanto otimizam a alocação de recursos.
              </p>
            </div>

          </div>

          {/* The Problem */}
          <div className="card-glass p-8 mb-8">
            <div className="flex items-center mb-8">
              <div className="text-4xl mr-4">⚠️</div>
              <h2 className="text-3xl font-bold text-red-600">O Problema</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-red-50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-red-600 mb-3">73%</div>
                <p className="text-red-800 font-semibold mb-2">Administradores Despreparados</p>
                <p className="text-sm text-red-600">dos administradores brasileiros carecem de formação em administração pública</p>
              </div>

              <div className="bg-red-50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-red-600 mb-3">US$ 2,8T</div>
                <p className="text-red-800 font-semibold mb-2">Desperdício Global</p>
                <p className="text-sm text-red-600">desperdiçados globalmente em políticas ineficazes</p>
              </div>

              <div className="bg-red-50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-red-600 mb-3">45-60%</div>
                <p className="text-red-800 font-semibold mb-2">Taxa de Falha</p>
                <p className="text-sm text-red-600">de políticas por avaliação inadequada</p>
              </div>

              <div className="bg-red-50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-red-600 mb-3">78%</div>
                <p className="text-red-800 font-semibold mb-2">Exclusão Cidadã</p>
                <p className="text-sm text-red-600">dos cidadãos excluídos das decisões de política pública</p>
              </div>

              <div className="bg-red-50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-red-600 mb-3">2,3x</div>
                <p className="text-red-800 font-semibold mb-2">Custo de Reversão</p>
                <p className="text-sm text-red-600">custo médio para reverter políticas fracassadas</p>
              </div>

              <div className="bg-green-50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-green-600 mb-3">💡</div>
                <p className="text-green-800 font-semibold mb-2">Nossa Solução</p>
                <p className="text-sm text-green-600">PolicyLabs democratiza a competência governamental</p>
              </div>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="card-glass p-8 mb-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">🚗 "O Uber da Gestão Pública"</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Projetos e políticas sob demanda em poucos cliques, baseados em sucessos comprovados,
                com simulação prévia de resultados e engajamento cidadão integrado.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">📱</div>
                <h3 className="font-bold text-red-800 mb-2">Netflix Gov</h3>
                <p className="text-sm text-red-600">Sistema de recomendação baseado em sucessos similares</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">🚗</div>
                <h3 className="font-bold text-blue-800 mb-2">Uber da Gestão</h3>
                <p className="text-sm text-blue-600">Projetos sob demanda com poucos cliques</p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">🛒</div>
                <h3 className="font-bold text-orange-800 mb-2">Amazon Municipal</h3>
                <p className="text-sm text-orange-600">Marketplace de soluções pré-testadas</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">🚗</div>
                <h3 className="font-bold text-green-800 mb-2">Tesla Gov</h3>
                <p className="text-sm text-green-600">Automação libertando servidores</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">📱</div>
                <h3 className="font-bold text-purple-800 mb-2">TikTok Político</h3>
                <p className="text-sm text-purple-600">Viralização forçando evolução</p>
              </div>
            </div>
          </div>

          {/* Primary Objectives */}
          <div className="card-glass p-8 mb-8">
            <div className="flex items-center mb-8">
              <div className="text-4xl mr-4">🎯</div>
              <h2 className="text-3xl font-bold">Objetivos Primários</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-3">1. 🏛️ Democratizar Competência Governamental</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Transformar gestores inexperientes em administradores eficazes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Eliminar dependência de consultorias caras e demoradas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Dar acesso a melhores práticas globais para municípios pequenos</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-800 mb-3">2. ⚡ Acelerar Tomada de Decisão Pública</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Reduzir tempo de implementação de políticas em 50%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Aumentar taxa de sucesso de políticas para 85%+</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Diminuir custos de reversão de políticas fracassadas</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-800 mb-3">3. 🗳️ Promover Democracia Participativa Digital</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Aumentar participação cidadã em 10x</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Criar transparência total em decisões públicas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Estabelecer feedback loop cidadão-governo em tempo real</span>
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-orange-800 mb-3">4. 🏆 Estabelecer Padrão de Mercado</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Tornar-se referência em GovTech no Brasil</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Criar categoria de "Policy Simulation"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Influenciar legislação sobre transparência e participação</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">5. 🏰 Construir Moats Competitivos</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span>Desenvolver rede de efeitos entre municípios</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span>Acumular dados proprietários de políticas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span>Criar dependência via integração profunda</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Architecture Overview */}
          <div className="card-glass p-8 mb-8">
            <div className="flex items-center mb-8">
              <div className="text-4xl mr-4">🏗️</div>
              <h2 className="text-3xl font-bold">Arquitetura do Sistema</h2>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 mb-6">
              <div className="space-y-4 font-mono text-sm">
                <div className="bg-blue-100 p-4 rounded border-2 border-blue-300 text-center">
                  <div className="font-bold text-blue-800">Plataforma PolicyLabs</div>
                  <div className="text-blue-600">"Camada de Inteligência para o Setor Público"</div>
                </div>

                <div className="bg-green-100 p-3 rounded border border-green-300 text-center">
                  <div className="font-semibold text-green-800">Camada de Experiência do Usuário</div>
                  <div className="text-green-600">Portal Web | Apps Mobile | API Gateway | Command Center</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-purple-100 p-4 rounded border border-purple-300">
                    <div className="font-bold text-purple-800 mb-2">Gêmeo Digital do País (CDT-AI)</div>
                    <ul className="text-xs text-purple-600 space-y-1">
                      <li>• Simulação de Cidades</li>
                      <li>• Dados IoT em Tempo Real</li>
                      <li>• Modelagem Baseada em Agentes</li>
                      <li>• Clima & Ambiente</li>
                      <li>• Dinâmica Econômica</li>
                    </ul>
                  </div>

                  <div className="bg-orange-100 p-4 rounded border border-orange-300">
                    <div className="font-bold text-orange-800 mb-2">Motor de Inteligência Governamental (GIE-AI)</div>
                    <ul className="text-xs text-orange-600 space-y-1">
                      <li>• Análise PolicyDNA™</li>
                      <li>• Framework de IA Causal</li>
                      <li>• Otimizador Multiobjetivo</li>
                      <li>• Economia Comportamental</li>
                      <li>• Viabilidade Política</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-100 p-3 rounded border border-yellow-300 text-center">
                  <div className="font-semibold text-yellow-800">Plataforma de Dados PolicyLabs</div>
                  <div className="text-yellow-600">Feature Store | Knowledge Graph | Pipeline de ML | AutoML</div>
                </div>

                <div className="bg-gray-100 p-3 rounded border border-gray-300 text-center">
                  <div className="font-semibold text-gray-800">Ecossistema Externo de Dados</div>
                  <div className="text-gray-600">APIs Governamentais | Sensores IoT | Satélite | Social</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg font-semibold text-blue-600">↕ Ciclo Contínuo de Aprendizado & Feedback ↕</p>
            </div>
          </div>

          {/* Revolutionary Combinations */}
          <div className="card-glass p-8 mb-8">
            <div className="flex items-center mb-8">
              <div className="text-4xl mr-4">🔬</div>
              <h2 className="text-3xl font-bold">Combinações Revolucionárias</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6">
                <h3 className="font-bold text-yellow-800 mb-2">🔗 PolicyLabs + Blockchain</h3>
                <p className="text-sm text-yellow-600">Criptomoedas municipais para economia local</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                <h3 className="font-bold text-purple-800 mb-2">🥽 PolicyLabs + Realidade Virtual</h3>
                <p className="text-sm text-purple-600">Gêmeos digitais com cidadãos sintéticos testando ideias</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                <h3 className="font-bold text-blue-800 mb-2">📱 PolicyLabs + IoT</h3>
                <p className="text-sm text-blue-600">Equipamentos urbanos gerando dados em tempo real</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                <h3 className="font-bold text-green-800 mb-2">🧬 PolicyLabs + Biotecnologia</h3>
                <p className="text-sm text-green-600">Simulação de resposta a pandemias</p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6">
                <h3 className="font-bold text-red-800 mb-2">🎮 PolicyLabs + Gaming</h3>
                <p className="text-sm text-red-600">Cidadãos testando projetos virtualmente</p>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6">
                <h3 className="font-bold text-indigo-800 mb-2">📱 PolicyLabs + Redes Sociais</h3>
                <p className="text-sm text-indigo-600">"Facebook das Necessidades" para democracia participativa</p>
              </div>
            </div>
          </div>

          {/* Strategic Amplifications */}
          <div className="card-glass p-8 mb-8">
            <div className="flex items-center mb-8">
              <div className="text-4xl mr-4">📈</div>
              <h2 className="text-3xl font-bold">Amplificações Estratégicas</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="bg-green-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">100x</div>
                <h3 className="font-bold text-green-800 mb-2">Velocidade</h3>
                <p className="text-sm text-green-600">IA gerando documentos e relatórios instantâneos</p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">100x</div>
                <h3 className="font-bold text-blue-800 mb-2">Escala</h3>
                <p className="text-sm text-blue-600">Brasil → América do Sul → África → Mundo</p>
              </div>

              <div className="bg-purple-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">100x</div>
                <h3 className="font-bold text-purple-800 mb-2">Precisão</h3>
                <p className="text-sm text-purple-600">Sistema aprendendo e melhorando constantemente</p>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">100x</div>
                <h3 className="font-bold text-orange-800 mb-2">Alcance</h3>
                <p className="text-sm text-orange-600">PolicyLabs como padrão mundial de governança</p>
              </div>

              <div className="bg-red-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">100x</div>
                <h3 className="font-bold text-red-800 mb-2">Participação</h3>
                <p className="text-sm text-red-600">"Coluna vertebral municipal" para gestores</p>
              </div>
            </div>
          </div>

          {/* Zero Inefficiencies */}
          <div className="card-glass p-8 mb-8">
            <div className="flex items-center mb-8">
              <div className="text-4xl mr-4">⚡</div>
              <h2 className="text-3xl font-bold">Ineficiências Eliminadas</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">Zero</div>
                <h3 className="font-bold text-blue-800 mb-2">Burocracia</h3>
                <p className="text-sm text-blue-600">Documentos automáticos baseados em sucessos comprovados</p>
              </div>

              <div className="bg-green-50 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">Zero</div>
                <h3 className="font-bold text-green-800 mb-2">Lentidão</h3>
                <p className="text-sm text-green-600">Aprovações aceleradas por histórico validado</p>
              </div>

              <div className="bg-purple-50 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">Zero</div>
                <h3 className="font-bold text-purple-800 mb-2">Desperdício</h3>
                <p className="text-sm text-purple-600">Fim de custos desnecessários</p>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-orange-600 mb-2">Zero</div>
                <h3 className="font-bold text-orange-800 mb-2">Intermediários</h3>
                <p className="text-sm text-orange-600">Conexão direta cidadão-gestor-resultado</p>
              </div>

              <div className="bg-red-50 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-red-600 mb-2">Zero</div>
                <h3 className="font-bold text-red-800 mb-2">Processos Manuais</h3>
                <p className="text-sm text-red-600">Automação total de rotinas administrativas</p>
              </div>
            </div>
          </div>

          {/* Transcendental Questions */}
          <div className="card-glass p-8 mb-8">
            <div className="flex items-center mb-8">
              <div className="text-4xl mr-4">🌟</div>
              <h2 className="text-3xl font-bold">Perguntas Transcendentais</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-3">💫 "E se a PolicyLabs mudasse o mundo? Eu garantiria meu lugar no céu?"</h3>
                <p className="text-blue-600">Dimensão moral/ética de transformar bilhões de vidas</p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-800 mb-3">🌍 "E se PolicyLabs se tornasse novo paradigma mundial de gestão pública?"</h3>
                <p className="text-green-600">Impacto civilizacional como marco histórico da humanidade</p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-800 mb-3">🏛️ "E se transferisse poder de realização para o povo - nova democracia digital?"</h3>
                <p className="text-purple-600">Criação de forma completamente nova de governança</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="card-glass p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">🚀 Seja Parte da Revolução</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Junte-se a nós na construção do futuro da gestão pública.
              Democratize a competência governamental e transforme sua comunidade.
            </p>

            <div className="flex gap-6 justify-center">
              <Link href="/register" className="bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-sm border border-white/30 rounded-xl text-lg px-8 py-4 font-medium transition-all duration-300 text-white hover:scale-105">
                🆓 Começar Gratuitamente
              </Link>
              <Link href="/contact" className="bg-white/25 backdrop-blur-sm border border-white/30 rounded-xl text-lg px-8 py-4 font-medium transition-all duration-300 text-gray-800 hover:scale-105">
                📅 Agendar Demo
              </Link>
              <Link href="/dashboard" className="bg-white/25 backdrop-blur-sm border border-white/30 rounded-xl text-lg px-8 py-4 font-medium transition-all duration-300 text-gray-800 hover:scale-105">
                🔍 Explorar Sistema
              </Link>
            </div>
          </div>

          </div>
        </main>
      </div>
    </>
  );
}