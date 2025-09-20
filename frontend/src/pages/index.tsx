import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function LandingPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Head>
        <title>PolicyLabs APSS - Onde a Política Encontra a Precisão</title>
        <meta name="description" content="Sistema Operacional para Gestão Pública Global - Uber da Gestão Pública" />
      </Head>

      {/* Navigation Header */}
      <header className="bg-white/25 backdrop-blur-sm border border-white/30 rounded-2xl mx-6 mt-4 px-6 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <img src="/logo.svg" alt="PolicyLabs" className="h-8 w-8" />
              <span className="text-xl font-bold">PolicyLabs</span>
            </div>
          </div>

          <div className="hidden md:flex space-x-6">
            <Link href="/sobre" className="hover:text-blue-600">Sobre</Link>
            <Link href="/policydnaext" className="hover:text-blue-600">PolicyDNA</Link>
            <Link href="/pricing" className="hover:text-blue-600">Preços</Link>
            <Link href="/cases" className="hover:text-blue-600">Casos de Sucesso</Link>
            <Link href="/resources" className="hover:text-blue-600">Recursos</Link>
            <Link href="/contact" className="hover:text-blue-600">Contato</Link>
          </div>

          <div className="flex space-x-4">
            <Link href="/login" className="bg-white/25 backdrop-blur-sm border border-white/30 rounded-xl px-6 py-3 font-medium transition-all duration-300 text-gray-800 hover:scale-105">Entrar</Link>
            <Link href="/register" className="bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-sm border border-white/30 rounded-xl px-6 py-3 font-medium transition-all duration-300 text-white hover:scale-105">Começar Grátis</Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="pt-4">
        <section className="bg-white/25 backdrop-blur-sm border border-white/30 rounded-2xl mx-6 mt-8 p-12 text-center">
          <h1 className="text-6xl font-bold mb-6 text-gradient">
            PolicyLabs
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            "Onde a Política Encontra a Precisão"
          </p>
          <p className="text-xl text-gray-500 mb-12 max-w-4xl mx-auto">
            O primeiro Sistema Operacional para Gestão Pública Global.
            Transforme sua administração com IA, PolicyDNA™ e o "Uber da Gestão Pública".
          </p>

          <div className="flex gap-6 justify-center">
            <Link href="/register" className="bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-sm border border-white/30 rounded-xl text-lg px-8 py-4 font-medium transition-all duration-300 text-white hover:scale-105">
              🚀 Começar Gratuitamente
            </Link>
            <Link href="/register" className="bg-white/25 backdrop-blur-sm border border-white/30 rounded-xl text-lg px-8 py-4 font-medium transition-all duration-300 text-gray-800 hover:scale-105">
              Ver Demo ao Vivo
            </Link>
            <Link href="/contact" className="bg-white/25 backdrop-blur-sm border border-white/30 rounded-xl text-lg px-8 py-4 font-medium transition-all duration-300 text-gray-800 hover:scale-105">
              Agendar Demonstração
            </Link>
          </div>
        </section>


        {/* Problem Section */}
        <section className="mx-6 mt-16">
          <div className="bg-white/25 backdrop-blur-sm border border-white/30 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-center mb-12 text-red-600">
              O Problema é Real
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

              {/* Card 1 */}
              <div className="relative bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">!</div>
                </div>
                <div className="text-5xl font-bold text-red-600 mb-3">73%</div>
                <div className="w-full bg-red-200 rounded-full h-2 mb-4">
                  <div className="bg-red-500 h-2 rounded-full w-[73%]"></div>
                </div>
                <p className="text-sm font-medium text-red-800">dos administradores brasileiros carecem de formação em administração pública</p>
              </div>

              {/* Card 2 */}
              <div className="relative bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">💸</div>
                </div>
                <div className="text-4xl font-bold text-orange-600 mb-3">US$ 2,8T</div>
                <div className="flex justify-center mb-4">
                  <svg className="w-16 h-16 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <p className="text-sm font-medium text-orange-800">desperdiçados globalmente em políticas ineficazes</p>
              </div>

              {/* Card 3 */}
              <div className="relative bg-gradient-to-br from-red-50 to-pink-100 border-2 border-pink-200 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">❌</div>
                </div>
                <div className="text-4xl font-bold text-pink-600 mb-3">45-60%</div>
                <div className="relative w-16 h-16 mx-auto mb-4">
                  <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                    <path d="M18 2.0845 A 15.9155 15.9155 0 0 1 18 33.9155" stroke="#fce7f3" strokeWidth="3" fill="none"/>
                    <path d="M18 2.0845 A 15.9155 15.9155 0 0 1 18 33.9155" stroke="#ec4899" strokeWidth="3" strokeDasharray="52.5, 100" fill="none"/>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-bold text-pink-600">FALHA</span>
                  </div>
                </div>
                <p className="text-sm font-medium text-pink-800">taxa de falha de políticas por avaliação inadequada</p>
              </div>

              {/* Card 4 */}
              <div className="relative bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">👥</div>
                </div>
                <div className="text-5xl font-bold text-purple-600 mb-3">78%</div>
                <div className="flex justify-center space-x-1 mb-4">
                  <div className="w-3 h-8 bg-purple-200 rounded"></div>
                  <div className="w-3 h-6 bg-purple-300 rounded"></div>
                  <div className="w-3 h-10 bg-purple-500 rounded"></div>
                  <div className="w-3 h-4 bg-purple-200 rounded"></div>
                  <div className="w-3 h-7 bg-purple-300 rounded"></div>
                </div>
                <p className="text-sm font-medium text-purple-800">dos cidadãos excluídos das decisões de política pública</p>
              </div>

              {/* Card 5 */}
              <div className="relative bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">📈</div>
                </div>
                <div className="text-5xl font-bold text-red-600 mb-3">2,3x</div>
                <div className="flex justify-center items-end space-x-1 mb-4">
                  <div className="w-4 h-4 bg-red-300 rounded"></div>
                  <div className="w-4 h-6 bg-red-400 rounded"></div>
                  <div className="w-4 h-10 bg-red-500 rounded"></div>
                </div>
                <p className="text-sm font-medium text-red-800">custo médio para reverter políticas fracassadas</p>
              </div>

              {/* Solution Card */}
              <div className="relative bg-gradient-to-br from-green-50 to-emerald-100 border-2 border-green-300 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">✓</div>
                </div>
                <div className="text-5xl mb-3">💡</div>
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">PL</span>
                  </div>
                </div>
                <p className="text-sm font-bold text-green-700">PolicyLabs é a solução</p>
                <p className="text-xs text-green-600 mt-2">Transformando a gestão pública com IA</p>
              </div>

            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="mx-6 mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-white/30 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-center mb-8">
              🚀 "O Uber da Gestão Pública"
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-4xl mx-auto">
              Projetos e políticas sob demanda em poucos cliques, baseados em sucessos comprovados,
              com simulação prévia de resultados e engajamento cidadão integrado.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-white/50 backdrop-blur-sm border border-white/30 rounded-xl p-6 text-center">
                <div className="text-3xl mb-4">📱</div>
                <h3 className="font-semibold mb-2">Netflix Gov</h3>
                <p className="text-sm">Sistema de recomendação de políticas baseado em sucessos similares</p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm border border-white/30 rounded-xl p-6 text-center">
                <div className="text-3xl mb-4">🚗</div>
                <h3 className="font-semibold mb-2">Uber da Gestão</h3>
                <p className="text-sm">Projetos sob demanda com poucos cliques</p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm border border-white/30 rounded-xl p-6 text-center">
                <div className="text-3xl mb-4">🛒</div>
                <h3 className="font-semibold mb-2">Amazon Municipal</h3>
                <p className="text-sm">Marketplace de soluções pré-testadas</p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm border border-white/30 rounded-xl p-6 text-center">
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="font-semibold mb-2">Tesla Gov</h3>
                <p className="text-sm">Automação libertando servidores para atividades essenciais</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mx-6 mt-16">
          <h2 className="text-4xl font-bold text-center mb-12">
            Principais Funcionalidades
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/25 backdrop-blur-sm border border-white/30 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">🧠 PolicyDNA™</h3>
              <p>IA proprietária que encontra políticas similares e prevê sucesso com 85% de precisão</p>
            </div>

            <div className="bg-white/25 backdrop-blur-sm border border-white/30 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">🏙️ Gêmeo Digital</h3>
              <p>Simulação 3D da sua cidade com cidadãos virtuais para testar políticas</p>
            </div>

            <div className="bg-white/25 backdrop-blur-sm border border-white/30 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">🗳️ Facebook das Necessidades</h3>
              <p>Engajamento cidadão com votação em tempo real e democracia participativa</p>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="mx-6 mt-16">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-white/30 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-center mb-12">
              🎯 Impacto Esperado
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="text-5xl font-bold text-green-500 mb-2">100x</div>
                <p className="font-semibold">Velocidade</p>
                <p className="text-sm text-gray-600">IA gerando documentos instantâneos</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-500 mb-2">50%</div>
                <p className="font-semibold">Tempo Reduzido</p>
                <p className="text-sm text-gray-600">na implementação de políticas</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-500 mb-2">85%+</div>
                <p className="font-semibold">Taxa de Sucesso</p>
                <p className="text-sm text-gray-600">de políticas implementadas</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-orange-500 mb-2">10x</div>
                <p className="font-semibold">Participação</p>
                <p className="text-sm text-gray-600">cidadã nas decisões</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Tiers Preview */}
        <section className="mx-6 mt-16">
          <h2 className="text-4xl font-bold text-center mb-12">
            Planos para Todos os Tamanhos
          </h2>

          <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div className="bg-white/25 backdrop-blur-sm border border-white/30 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">🆓 Free</h3>
              <p className="text-3xl font-bold mb-4">R$ 0/mês</p>
              <p className="text-sm mb-4">Municípios &lt;25k habitantes</p>
              <Link href="/pricing" className="bg-white/25 backdrop-blur-sm border border-white/30 rounded-xl px-6 py-3 font-medium transition-all duration-300 text-gray-800 hover:scale-105 w-full block text-center">Ver Detalhes</Link>
            </div>

            <div className="bg-white/25 backdrop-blur-sm border-2 border-blue-500 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">💳 Starter</h3>
              <p className="text-3xl font-bold mb-4">R$ 20k/mês</p>
              <p className="text-sm mb-4">25k-50k habitantes</p>
              <Link href="/pricing" className="bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-sm border border-white/30 rounded-xl px-6 py-3 font-medium transition-all duration-300 text-white hover:scale-105 w-full block text-center">Mais Popular</Link>
            </div>

            <div className="bg-white/25 backdrop-blur-sm border border-white/30 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">💼 Professional</h3>
              <p className="text-3xl font-bold mb-4">R$ 50k/mês</p>
              <p className="text-sm mb-4">50k-100k habitantes</p>
              <Link href="/pricing" className="bg-white/25 backdrop-blur-sm border border-white/30 rounded-xl px-6 py-3 font-medium transition-all duration-300 text-gray-800 hover:scale-105 w-full block text-center">Ver Detalhes</Link>
            </div>

            <div className="bg-white/25 backdrop-blur-sm border border-white/30 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">🏢 Enterprise</h3>
              <p className="text-3xl font-bold mb-4">R$ 150k/mês</p>
              <p className="text-sm mb-4">&gt;100k habitantes</p>
              <Link href="/pricing" className="bg-white/25 backdrop-blur-sm border border-white/30 rounded-xl px-6 py-3 font-medium transition-all duration-300 text-gray-800 hover:scale-105 w-full block text-center">Ver Detalhes</Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white/25 backdrop-blur-sm border border-white/30 rounded-2xl mx-6 mt-16 p-8">
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div>
            <h4 className="font-semibold mb-4">Produto</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/policydnaext">PolicyDNA™</Link></li>
              <li><Link href="/sobre">Visão Geral</Link></li>
              <li><Link href="/register">Começar Grátis</Link></li>
              <li><Link href="/contact">Demonstração</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/resources">Centro de Recursos</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/help">Central de Ajuda</Link></li>
              <li><Link href="/api/docs">Documentação API</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about">Sobre Nós</Link></li>
              <li><Link href="/cases">Casos de Sucesso</Link></li>
              <li><Link href="/contact">Contato</Link></li>
              <li><Link href="/careers">Carreiras</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/terms">Termos de Uso</Link></li>
              <li><Link href="/privacy">Política de Privacidade</Link></li>
              <li><Link href="/security">Segurança</Link></li>
              <li><Link href="/accessibility">Acessibilidade</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; 2025 PolicyLabs Tecnologia Ltda. Todos os direitos reservados.</p>
          <p className="mt-2">"Projeto de Evolução Humana via IA" - Sistema Operacional para Gestão Pública Global</p>
        </div>
      </footer>
    </div>
  );
}