import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Head>
        <title>Recursos | PolicyLabs APSS</title>
        <meta name="description" content="Centro de recursos, documentação e suporte do PolicyLabs APSS" />
      </Head>

      {/* Navigation Header */}
      <header className="bg-white/25 dark:bg-white/5 backdrop-blur-sm border border-white/30 dark:border-white/10 rounded-2xl mx-6 mt-4 px-6 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-4">
              <img src="/logo.svg" alt="PolicyLabs" className="h-8 w-8" />
              <span className="text-xl font-bold text-gray-900 dark:text-gray-100">PolicyLabs</span>
            </Link>
          </div>

          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Documentação, Treinamentos e Suporte Técnico</h1>
          </div>

          <div className="flex items-center">
            <Link href="/" className="btn-glass text-sm">
              Voltar
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="pt-4">
        <section className="card-glass mx-6 mt-8 p-12 text-center">
          <h1 className="text-5xl font-bold mb-6 text-gradient">
            Centro de Recursos
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Documentação, Treinamentos e Suporte Técnico
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-4xl mx-auto">
            Tudo que você precisa para implementar e aproveitar ao máximo o PolicyLabs APSS
          </p>
        </section>

        {/* Quick Access */}
        <section className="mx-6 mt-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
            Acesso Rápido
          </h2>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Link href="/api/docs" className="card-glass p-6 text-center hover:scale-105 transition-transform">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Documentação API</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Referência completa da API</p>
            </Link>

            <Link href="/help" className="card-glass p-6 text-center hover:scale-105 transition-transform">
              <div className="text-4xl mb-4">❓</div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Central de Ajuda</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">FAQ e guias passo a passo</p>
            </Link>

            <Link href="/contact" className="card-glass p-6 text-center hover:scale-105 transition-transform">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Suporte Técnico</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Atendimento especializado</p>
            </Link>

            <Link href="/blog" className="card-glass p-6 text-center hover:scale-105 transition-transform">
              <div className="text-4xl mb-4">📰</div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Blog & Novidades</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Artigos e atualizações</p>
            </Link>
          </div>
        </section>

        {/* Documentation */}
        <section className="mx-6 mt-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
            Documentação Técnica
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="card-glass p-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center text-gray-900 dark:text-gray-100">
                <span className="text-2xl mr-3">🚀</span>
                Guia de Implementação
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Passo a passo completo para implementar o PolicyLabs APSS em sua administração.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-6">
                <li>• Planejamento e preparação</li>
                <li>• Configuração inicial</li>
                <li>• Migração de dados</li>
                <li>• Treinamento de equipes</li>
                <li>• Go-live e monitoramento</li>
              </ul>
              <Link href="/docs/implementation" className="btn-glass inline-block">
                Acessar Guia
              </Link>
            </div>

            <div className="card-glass p-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center text-gray-900 dark:text-gray-100">
                <span className="text-2xl mr-3">🔧</span>
                Referência da API
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Documentação completa da API REST para desenvolvedores e integrações.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-6">
                <li>• Endpoints e métodos</li>
                <li>• Autenticação e segurança</li>
                <li>• Exemplos de código</li>
                <li>• SDKs disponíveis</li>
                <li>• Rate limits e boas práticas</li>
              </ul>
              <Link href="/api/docs" className="btn-glass inline-block">
                Ver Documentação
              </Link>
            </div>

            <div className="card-glass p-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center text-gray-900 dark:text-gray-100">
                <span className="text-2xl mr-3">🎓</span>
                Treinamentos
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Cursos online e materiais de capacitação para sua equipe.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-6">
                <li>• Curso básico de uso</li>
                <li>• Gestão avançada</li>
                <li>• Análise de dados</li>
                <li>• Administração técnica</li>
                <li>• Certificações disponíveis</li>
              </ul>
              <Link href="/training" className="btn-glass inline-block">
                Ver Cursos
              </Link>
            </div>

            <div className="card-glass p-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center text-gray-900 dark:text-gray-100">
                <span className="text-2xl mr-3">📊</span>
                Best Practices
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Melhores práticas e metodologias para maximizar resultados.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-6">
                <li>• Configuração otimizada</li>
                <li>• Workflows recomendados</li>
                <li>• KPIs e métricas</li>
                <li>• Troubleshooting comum</li>
                <li>• Casos de uso avançados</li>
              </ul>
              <Link href="/best-practices" className="btn-glass inline-block">
                Ler Práticas
              </Link>
            </div>
          </div>
        </section>

        {/* Downloads */}
        <section className="mx-6 mt-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
            Downloads
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="card-glass p-6 text-center">
              <div className="text-3xl mb-4">📄</div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Whitepaper Técnico</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Arquitetura e especificações técnicas completas
              </p>
              <button className="btn-glass-primary w-full">
                Download PDF
              </button>
            </div>

            <div className="card-glass p-6 text-center">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Checklist de Implementação</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Lista de verificação para go-live
              </p>
              <button className="btn-glass-primary w-full">
                Download PDF
              </button>
            </div>

            <div className="card-glass p-6 text-center">
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Kit de Mídia</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Logos, imagens e materiais promocionais
              </p>
              <button className="btn-glass-primary w-full">
                Download ZIP
              </button>
            </div>
          </div>
        </section>

        {/* Support */}
        <section className="mx-6 mt-16">
          <div className="card-glass p-12 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              Precisa de Ajuda?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Nossa equipe de especialistas está pronta para ajudar
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <div className="text-center">
                <div className="text-2xl mb-2">📧</div>
                <h3 className="font-semibold mb-1 text-gray-900 dark:text-gray-100">Email</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">suporte@policylabs.ai</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">💬</div>
                <h3 className="font-semibold mb-1 text-gray-900 dark:text-gray-100">Chat</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Disponível 24/7</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">📞</div>
                <h3 className="font-semibold mb-1 text-gray-900 dark:text-gray-100">Telefone</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">+55 (11) 9999-0000</p>
              </div>
            </div>

            <div className="flex gap-6 justify-center">
              <Link href="/contact" className="btn-glass-primary text-lg px-8 py-4">
                Entrar em Contato
              </Link>
              <Link href="/help" className="btn-glass text-lg px-8 py-4">
                Central de Ajuda
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="card-glass mx-6 mt-16 p-8">
        <div className="text-center">
          <Link href="/" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500">
            ← Voltar para Home
          </Link>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>&copy; 2025 PolicyLabs Tecnologia Ltda. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}