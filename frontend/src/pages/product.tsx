import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Head>
        <title>Produto | PolicyLabs APSS</title>
        <meta name="description" content="Conheça o PolicyLabs APSS - Sistema Operacional para Gestão Pública Global" />
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
            <Link href="/product" className="text-blue-600 font-medium">Produto</Link>
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
          <h1 className="text-5xl font-bold mb-6 text-gradient">
            PolicyLabs APSS
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Sistema Operacional para Gestão Pública Global
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-4xl mx-auto">
            Transforme sua administração pública com inteligência artificial, algoritmos proprietários e ferramentas de engajamento cidadão.
          </p>

          <div className="flex gap-6 justify-center mb-16">
            <Link href="/register" className="btn-glass-primary text-lg px-8 py-4">
              Começar Gratuitamente
            </Link>
            <Link href="/contact" className="btn-glass text-lg px-8 py-4">
              Agendar Demo
            </Link>
          </div>
        </section>

        {/* Core Features */}
        <section className="mx-6 mt-16">
          <h2 className="text-4xl font-bold text-center mb-12">
            Funcionalidades Principais
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="card-glass p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">🧠 PolicyDNA™</h3>
              <p className="text-gray-600 mb-4">
                IA proprietária que encontra políticas similares e prevê sucesso com 85% de precisão
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Análise de 50M+ políticas globais</li>
                <li>• Machine Learning avançado</li>
                <li>• Recomendações personalizadas</li>
              </ul>
            </div>

            <div className="card-glass p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">🏙️ Gêmeo Digital</h3>
              <p className="text-gray-600 mb-4">
                Simulação 3D da sua cidade com cidadãos virtuais para testar políticas
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Simulação em tempo real</li>
                <li>• Modelos comportamentais</li>
                <li>• Análise de impacto</li>
              </ul>
            </div>

            <div className="card-glass p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">🗳️ Engajamento Cidadão</h3>
              <p className="text-gray-600 mb-4">
                "Facebook das Necessidades" com votação em tempo real e democracia participativa
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Consultas populares</li>
                <li>• Feedback contínuo</li>
                <li>• Dashboard transparente</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Specs */}
        <section className="mx-6 mt-16">
          <h2 className="text-4xl font-bold text-center mb-12">
            Especificações Técnicas
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card-glass p-6">
              <h3 className="text-xl font-semibold mb-4">🔧 Arquitetura</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Microserviços containerizados</li>
                <li>• API REST completa</li>
                <li>• Banco de dados vetorial (Weaviate)</li>
                <li>• Integração OpenAI GPT-4</li>
                <li>• Interface Next.js responsiva</li>
              </ul>
            </div>

            <div className="card-glass p-6">
              <h3 className="text-xl font-semibold mb-4">🛡️ Segurança</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Autenticação NextAuth.js</li>
                <li>• Criptografia end-to-end</li>
                <li>• Conformidade LGPD</li>
                <li>• Auditoria completa</li>
                <li>• Backup automático</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Integration */}
        <section className="mx-6 mt-16">
          <div className="card-glass p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Integração Simples
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Implemente o PolicyLabs APSS em sua administração em menos de 30 dias
            </p>
            <div className="flex gap-6 justify-center">
              <Link href="/pricing" className="btn-glass-primary text-lg px-8 py-4">
                Ver Planos
              </Link>
              <Link href="/contact" className="btn-glass text-lg px-8 py-4">
                Falar com Especialista
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="card-glass mx-6 mt-16 p-8">
        <div className="text-center">
          <Link href="/" className="text-blue-600 hover:text-blue-700">
            ← Voltar para Home
          </Link>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; 2025 PolicyLabs Tecnologia Ltda. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}