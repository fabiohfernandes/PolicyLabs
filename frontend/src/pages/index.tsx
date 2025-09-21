import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function LandingPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Head>
        <title>PolicyLabs APSS - Onde a Política Encontra a Precisão</title>
        <meta name="description" content="Sistema Operacional para Gestão Pública Global - Uber da Gestão Pública" />
      </Head>

      {/* Navigation Header */}
      <header className="bg-white/25 dark:bg-white/5 backdrop-blur-sm border border-white/30 dark:border-white/10 rounded-2xl mx-6 mt-4 px-6 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <img src="/logo.svg" alt="PolicyLabs" className="h-8 w-8" />
              <span className="text-xl font-bold text-gray-900 dark:text-gray-100">PolicyLabs</span>
            </div>
          </div>

          <div className="hidden md:flex space-x-6">
            <Link href="/sobre" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Sobre</Link>
            <Link href="/policydnaext" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">PolicyDNA</Link>
            <Link href="/pricing" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Preços</Link>
            <Link href="/cases" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Casos de Sucesso</Link>
            <Link href="/resources" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Recursos</Link>
            <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contato</Link>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle variant="icon" size="md" />
            <Link href="/login" className="bg-white/25 dark:bg-white/10 backdrop-blur-sm border border-white/30 dark:border-white/20 rounded-xl px-6 py-3 font-medium transition-all duration-300 text-gray-800 dark:text-gray-200 hover:scale-105">Entrar</Link>
            <Link href="/register" className="bg-gradient-to-r from-blue-600/80 to-purple-600/80 dark:from-blue-500/80 dark:to-purple-500/80 backdrop-blur-sm border border-white/30 dark:border-white/20 rounded-xl px-6 py-3 font-medium transition-all duration-300 text-white hover:scale-105">Começar Grátis</Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="pt-4">
        <section className="bg-white/25 dark:bg-white/5 backdrop-blur-sm border border-white/30 dark:border-white/10 rounded-2xl mx-6 mt-8 p-12 text-center">
          <h1 className="text-6xl font-bold mb-6 text-gradient">
            PolicyLabs
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8">
            "Onde a Política Encontra a Precisão"
          </p>
          <p className="text-xl text-gray-500 dark:text-gray-400 mb-12 max-w-4xl mx-auto">
            O primeiro Sistema Operacional para Gestão Pública Global.
            Transforme sua administração com IA, PolicyDNA™ e o "Uber da Gestão Pública".
          </p>

          <div className="flex gap-6 justify-center">
            <Link href="/register" className="bg-gradient-to-r from-blue-600/80 to-purple-600/80 dark:from-blue-500/80 dark:to-purple-500/80 backdrop-blur-sm border border-white/30 dark:border-white/20 rounded-xl text-lg px-8 py-4 font-medium transition-all duration-300 text-white hover:scale-105">
              🚀 Começar Gratuitamente
            </Link>
            <Link href="/register" className="bg-white/25 dark:bg-white/10 backdrop-blur-sm border border-white/30 dark:border-white/20 rounded-xl text-lg px-8 py-4 font-medium transition-all duration-300 text-gray-800 dark:text-gray-200 hover:scale-105">
              Ver Demo ao Vivo
            </Link>
            <Link href="/contact" className="bg-white/25 dark:bg-white/10 backdrop-blur-sm border border-white/30 dark:border-white/20 rounded-xl text-lg px-8 py-4 font-medium transition-all duration-300 text-gray-800 dark:text-gray-200 hover:scale-105">
              Agendar Demonstração
            </Link>
          </div>
        </section>




        {/* Features Section */}
        <section className="mx-6 mt-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
            Principais Funcionalidades
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/25 dark:bg-white/5 backdrop-blur-sm border border-white/30 dark:border-white/10 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">🧠 PolicyDNA™</h3>
              <p className="text-gray-700 dark:text-gray-300">IA proprietária que encontra políticas similares e prevê sucesso com 85% de precisão</p>
            </div>

            <div className="bg-white/25 dark:bg-white/5 backdrop-blur-sm border border-white/30 dark:border-white/10 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">🏙️ Gêmeo Digital</h3>
              <p className="text-gray-700 dark:text-gray-300">Simulação 3D da sua cidade com cidadãos virtuais para testar políticas</p>
            </div>

            <div className="bg-white/25 dark:bg-white/5 backdrop-blur-sm border border-white/30 dark:border-white/10 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">🗳️ Facebook das Necessidades</h3>
              <p className="text-gray-700 dark:text-gray-300">Engajamento cidadão com votação em tempo real e democracia participativa</p>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="mx-6 mt-16">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border border-white/30 dark:border-white/10 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
              🎯 Impacto Esperado
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="text-5xl font-bold text-green-500 mb-2">100x</div>
                <p className="font-semibold text-gray-900 dark:text-gray-100">Velocidade</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">IA gerando documentos instantâneos</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-500 mb-2">50%</div>
                <p className="font-semibold text-gray-900 dark:text-gray-100">Tempo Reduzido</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">na implementação de políticas</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-500 mb-2">85%+</div>
                <p className="font-semibold text-gray-900 dark:text-gray-100">Taxa de Sucesso</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">de políticas implementadas</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-orange-500 mb-2">10x</div>
                <p className="font-semibold text-gray-900 dark:text-gray-100">Participação</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">cidadã nas decisões</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Tiers Preview */}
        <section className="mx-6 mt-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
            Planos para Todos os Tamanhos
          </h2>

          <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div className="bg-white/25 dark:bg-white/5 backdrop-blur-sm border border-white/30 dark:border-white/10 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">🆓 Free</h3>
              <p className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">R$ 0/mês</p>
              <p className="text-sm mb-4 text-gray-600 dark:text-gray-300">Municípios &lt;25k habitantes</p>
              <Link href="/pricing" className="bg-white/25 dark:bg-white/10 backdrop-blur-sm border border-white/30 dark:border-white/20 rounded-xl px-6 py-3 font-medium transition-all duration-300 text-gray-800 dark:text-gray-200 hover:scale-105 w-full block text-center">Ver Detalhes</Link>
            </div>

            <div className="bg-white/25 dark:bg-white/5 backdrop-blur-sm border-2 border-blue-500 dark:border-blue-400 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">💳 Starter</h3>
              <p className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">R$ 20k/mês</p>
              <p className="text-sm mb-4 text-gray-600 dark:text-gray-300">25k-50k habitantes</p>
              <Link href="/pricing" className="bg-gradient-to-r from-blue-600/80 to-purple-600/80 dark:from-blue-500/80 dark:to-purple-500/80 backdrop-blur-sm border border-white/30 dark:border-white/20 rounded-xl px-6 py-3 font-medium transition-all duration-300 text-white hover:scale-105 w-full block text-center">Mais Popular</Link>
            </div>

            <div className="bg-white/25 dark:bg-white/5 backdrop-blur-sm border border-white/30 dark:border-white/10 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">💼 Professional</h3>
              <p className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">R$ 50k/mês</p>
              <p className="text-sm mb-4 text-gray-600 dark:text-gray-300">50k-100k habitantes</p>
              <Link href="/pricing" className="bg-white/25 dark:bg-white/10 backdrop-blur-sm border border-white/30 dark:border-white/20 rounded-xl px-6 py-3 font-medium transition-all duration-300 text-gray-800 dark:text-gray-200 hover:scale-105 w-full block text-center">Ver Detalhes</Link>
            </div>

            <div className="bg-white/25 dark:bg-white/5 backdrop-blur-sm border border-white/30 dark:border-white/10 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">🏢 Enterprise</h3>
              <p className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">R$ 150k/mês</p>
              <p className="text-sm mb-4 text-gray-600 dark:text-gray-300">&gt;100k habitantes</p>
              <Link href="/pricing" className="bg-white/25 dark:bg-white/10 backdrop-blur-sm border border-white/30 dark:border-white/20 rounded-xl px-6 py-3 font-medium transition-all duration-300 text-gray-800 dark:text-gray-200 hover:scale-105 w-full block text-center">Ver Detalhes</Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white/25 dark:bg-white/5 backdrop-blur-sm border border-white/30 dark:border-white/10 rounded-2xl mx-6 mt-16 p-8">
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">Produto</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/policydnaext" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">PolicyDNA™</Link></li>
              <li><Link href="/sobre" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Visão Geral</Link></li>
              <li><Link href="/register" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Começar Grátis</Link></li>
              <li><Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Demonstração</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">Recursos</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/resources" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Centro de Recursos</Link></li>
              <li><Link href="/blog" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Blog</Link></li>
              <li><Link href="/help" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Central de Ajuda</Link></li>
              <li><Link href="/api/docs" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Documentação API</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Sobre Nós</Link></li>
              <li><Link href="/cases" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Casos de Sucesso</Link></li>
              <li><Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contato</Link></li>
              <li><Link href="/careers" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Carreiras</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/terms" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Termos de Uso</Link></li>
              <li><Link href="/privacy" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Política de Privacidade</Link></li>
              <li><Link href="/security" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Segurança</Link></li>
              <li><Link href="/accessibility" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Acessibilidade</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>&copy; 2025 PolicyLabs Tecnologia Ltda. Todos os direitos reservados.</p>
          <p className="mt-2">"Projeto de Evolução Humana via IA" - Sistema Operacional para Gestão Pública Global</p>
        </div>
      </footer>
    </div>
  );
}