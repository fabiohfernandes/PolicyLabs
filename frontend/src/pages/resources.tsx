import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Head>
        <title>Recursos | PolicyLabs APSS</title>
        <meta name="description" content="Centro de recursos, documentação e suporte do PolicyLabs APSS" />
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
            <Link href="/resources" className="text-blue-600 font-medium">Recursos</Link>
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
            Centro de Recursos
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Documentação, Treinamentos e Suporte Técnico
          </p>
          <p className="text-lg text-gray-500 mb-8 max-w-4xl mx-auto">
            Tudo que você precisa para implementar e aproveitar ao máximo o PolicyLabs APSS
          </p>
        </section>

        {/* Quick Access */}
        <section className="mx-6 mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Acesso Rápido
          </h2>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Link href="/api/docs" className="card-glass p-6 text-center hover:scale-105 transition-transform">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="font-semibold mb-2">Documentação API</h3>
              <p className="text-sm text-gray-600">Referência completa da API</p>
            </Link>

            <Link href="/help" className="card-glass p-6 text-center hover:scale-105 transition-transform">
              <div className="text-4xl mb-4">❓</div>
              <h3 className="font-semibold mb-2">Central de Ajuda</h3>
              <p className="text-sm text-gray-600">FAQ e guias passo a passo</p>
            </Link>

            <Link href="/contact" className="card-glass p-6 text-center hover:scale-105 transition-transform">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="font-semibold mb-2">Suporte Técnico</h3>
              <p className="text-sm text-gray-600">Atendimento especializado</p>
            </Link>

            <Link href="/blog" className="card-glass p-6 text-center hover:scale-105 transition-transform">
              <div className="text-4xl mb-4">📰</div>
              <h3 className="font-semibold mb-2">Blog & Novidades</h3>
              <p className="text-sm text-gray-600">Artigos e atualizações</p>
            </Link>
          </div>
        </section>

        {/* Documentation */}
        <section className="mx-6 mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Documentação Técnica
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="card-glass p-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-2xl mr-3">🚀</span>
                Guia de Implementação
              </h3>
              <p className="text-gray-600 mb-4">
                Passo a passo completo para implementar o PolicyLabs APSS em sua administração.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
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
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-2xl mr-3">🔧</span>
                Referência da API
              </h3>
              <p className="text-gray-600 mb-4">
                Documentação completa da API REST para desenvolvedores e integrações.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
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
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-2xl mr-3">🎓</span>
                Treinamentos
              </h3>
              <p className="text-gray-600 mb-4">
                Cursos online e materiais de capacitação para sua equipe.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
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
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-2xl mr-3">📊</span>
                Best Practices
              </h3>
              <p className="text-gray-600 mb-4">
                Melhores práticas e metodologias para maximizar resultados.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
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
          <h2 className="text-3xl font-bold text-center mb-12">
            Downloads
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="card-glass p-6 text-center">
              <div className="text-3xl mb-4">📄</div>
              <h3 className="font-semibold mb-2">Whitepaper Técnico</h3>
              <p className="text-sm text-gray-600 mb-4">
                Arquitetura e especificações técnicas completas
              </p>
              <button className="btn-glass-primary w-full">
                Download PDF
              </button>
            </div>

            <div className="card-glass p-6 text-center">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="font-semibold mb-2">Checklist de Implementação</h3>
              <p className="text-sm text-gray-600 mb-4">
                Lista de verificação para go-live
              </p>
              <button className="btn-glass-primary w-full">
                Download PDF
              </button>
            </div>

            <div className="card-glass p-6 text-center">
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="font-semibold mb-2">Kit de Mídia</h3>
              <p className="text-sm text-gray-600 mb-4">
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
            <h2 className="text-3xl font-bold mb-6">
              Precisa de Ajuda?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Nossa equipe de especialistas está pronta para ajudar
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <div className="text-center">
                <div className="text-2xl mb-2">📧</div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-sm text-gray-600">suporte@policylabs.ai</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">💬</div>
                <h3 className="font-semibold mb-1">Chat</h3>
                <p className="text-sm text-gray-600">Disponível 24/7</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">📞</div>
                <h3 className="font-semibold mb-1">Telefone</h3>
                <p className="text-sm text-gray-600">+55 (11) 9999-0000</p>
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