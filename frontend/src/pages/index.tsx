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
      <header className="card-glass mx-6 mt-4 px-6 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/logo.svg" alt="PolicyLabs" className="h-8 w-8" />
              <span className="text-xl font-bold">PolicyLabs APSS</span>
            </Link>
          </div>

          <div className="hidden md:flex space-x-6">
            <Link href="/product" className="hover:text-blue-600">Produto</Link>
            <Link href="/pricing" className="hover:text-blue-600">Preços</Link>
            <Link href="/cases" className="hover:text-blue-600">Casos de Sucesso</Link>
            <Link href="/resources" className="hover:text-blue-600">Recursos</Link>
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            <Link href="/contact" className="hover:text-blue-600">Contato</Link>
          </div>

          <div className="flex space-x-4">
            <Link href="/login" className="btn-glass">Entrar</Link>
            <Link href="/register" className="btn-glass-primary">Começar Grátis</Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="pt-4">
        <section className="card-glass mx-6 mt-8 p-12 text-center">
          <h1 className="text-6xl font-bold mb-6 text-gradient">
            PolicyLabs APSS
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            "Onde a Política Encontra a Precisão"
          </p>
          <p className="text-xl text-gray-500 mb-12 max-w-4xl mx-auto">
            O primeiro Sistema Operacional para Gestão Pública Global.
            Transforme sua administração com IA, PolicyDNA™ e o "Uber da Gestão Pública".
          </p>

          <div className="flex gap-6 justify-center">
            <Link href="/register" className="btn-glass-primary text-lg px-8 py-4">
              🚀 Começar Gratuitamente
            </Link>
            <Link href="/product" className="btn-glass text-lg px-8 py-4">
              Ver Demo ao Vivo
            </Link>
            <Link href="/contact" className="btn-glass text-lg px-8 py-4">
              Agendar Demonstração
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="mx-6 mt-16">
          <h2 className="text-4xl font-bold text-center mb-12">
            Principais Funcionalidades
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="card-glass p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">🧠 PolicyDNA™</h3>
              <p>IA proprietária que encontra políticas similares e prevê sucesso com 85% de precisão</p>
            </div>

            <div className="card-glass p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">🏙️ Gêmeo Digital</h3>
              <p>Simulação 3D da sua cidade com cidadãos virtuais para testar políticas</p>
            </div>

            <div className="card-glass p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">🗳️ Facebook das Necessidades</h3>
              <p>Engajamento cidadão com votação em tempo real e democracia participativa</p>
            </div>
          </div>
        </section>

        {/* Pricing Tiers Preview */}
        <section className="mx-6 mt-16">
          <h2 className="text-4xl font-bold text-center mb-12">
            Planos para Todos os Tamanhos
          </h2>

          <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div className="card-glass p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">🆓 Free</h3>
              <p className="text-3xl font-bold mb-4">R$ 0/mês</p>
              <p className="text-sm mb-4">Municípios &lt;25k habitantes</p>
              <Link href="/pricing" className="btn-glass w-full">Ver Detalhes</Link>
            </div>

            <div className="card-glass p-6 text-center border-2 border-blue-500">
              <h3 className="text-xl font-semibold mb-2">💳 Starter</h3>
              <p className="text-3xl font-bold mb-4">R$ 20k/mês</p>
              <p className="text-sm mb-4">25k-50k habitantes</p>
              <Link href="/pricing" className="btn-glass-primary w-full">Mais Popular</Link>
            </div>

            <div className="card-glass p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">💼 Professional</h3>
              <p className="text-3xl font-bold mb-4">R$ 50k/mês</p>
              <p className="text-sm mb-4">50k-100k habitantes</p>
              <Link href="/pricing" className="btn-glass w-full">Ver Detalhes</Link>
            </div>

            <div className="card-glass p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">🏢 Enterprise</h3>
              <p className="text-3xl font-bold mb-4">R$ 150k/mês</p>
              <p className="text-sm mb-4">&gt;100k habitantes</p>
              <Link href="/pricing" className="btn-glass w-full">Ver Detalhes</Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="card-glass mx-6 mt-16 p-8">
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div>
            <h4 className="font-semibold mb-4">Produto</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/product">Visão Geral</Link></li>
              <li><Link href="/product/policy-dna">PolicyDNA™</Link></li>
              <li><Link href="/product/digital-twin">Gêmeo Digital</Link></li>
              <li><Link href="/product/citizen-engagement">Engajamento Cidadão</Link></li>
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