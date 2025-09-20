import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function CasesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Head>
        <title>Casos de Sucesso | PolicyLabs APSS</title>
        <meta name="description" content="Casos de sucesso do PolicyLabs APSS em municípios brasileiros" />
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
            <Link href="/cases" className="text-blue-600 font-medium">Casos de Sucesso</Link>
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
            Casos de Sucesso
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Transformação Digital na Gestão Pública Brasileira
          </p>
          <p className="text-lg text-gray-500 mb-8 max-w-4xl mx-auto">
            Conheça como municípios brasileiros estão revolucionando sua gestão pública com o PolicyLabs APSS
          </p>
        </section>

        {/* Success Stories */}
        <section className="mx-6 mt-16">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

            {/* Case 1 */}
            <div className="card-glass p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🏛️</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Município de Inovação - SP</h3>
                  <p className="text-sm text-gray-500">45.000 habitantes • Plano Professional</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-green-600">Resultados Alcançados:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• <strong>85% redução</strong> no tempo de análise de políticas</li>
                  <li>• <strong>92% satisfação</strong> dos cidadãos com transparência</li>
                  <li>• <strong>R$ 2.3M economizados</strong> em projetos otimizados</li>
                  <li>• <strong>15 políticas implementadas</strong> com sucesso previsto</li>
                </ul>
              </div>

              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 mb-4">
                "O PolicyDNA™ nos ajudou a identificar políticas similares em cidades europeias que reduziram nosso tempo de planejamento pela metade."
              </blockquote>

              <div className="text-sm text-gray-500">
                <strong>Prefeito João Silva</strong> - Prefeitura Municipal
              </div>
            </div>

            {/* Case 2 */}
            <div className="card-glass p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Verde Sustentável - MG</h3>
                  <p className="text-sm text-gray-500">78.000 habitantes • Plano Enterprise</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-green-600">Resultados Alcançados:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• <strong>67% aumento</strong> no engajamento cidadão</li>
                  <li>• <strong>12 consultas populares</strong> realizadas digitalmente</li>
                  <li>• <strong>R$ 4.1M captados</strong> através de projetos otimizados</li>
                  <li>• <strong>98% precisão</strong> nas simulações do Gêmeo Digital</li>
                </ul>
              </div>

              <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-600 mb-4">
                "A plataforma de engajamento cidadão transformou nossa relação com a população. Agora temos feedback em tempo real de todas as políticas."
              </blockquote>

              <div className="text-sm text-gray-500">
                <strong>Prefeita Maria Santos</strong> - Secretaria de Participação Social
              </div>
            </div>

            {/* Case 3 */}
            <div className="card-glass p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Dados Inteligentes - RS</h3>
                  <p className="text-sm text-gray-500">120.000 habitantes • Plano Enterprise</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-green-600">Resultados Alcançados:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• <strong>90% automação</strong> de processos administrativos</li>
                  <li>• <strong>5.2M cidadãos</strong> atendidos virtualmente</li>
                  <li>• <strong>78% redução</strong> nos custos operacionais</li>
                  <li>• <strong>1º lugar</strong> ranking transparência estadual</li>
                </ul>
              </div>

              <blockquote className="border-l-4 border-purple-500 pl-4 italic text-gray-600 mb-4">
                "Com o PolicyLabs APSS conseguimos ser o primeiro município 100% digital do estado. A transformação foi impressionante."
              </blockquote>

              <div className="text-sm text-gray-500">
                <strong>Secretário Carlos Lima</strong> - Secretaria de Tecnologia
              </div>
            </div>

            {/* Case 4 */}
            <div className="card-glass p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Participação Cidadã - PR</h3>
                  <p className="text-sm text-gray-500">32.000 habitantes • Plano Starter</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-green-600">Resultados Alcançados:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• <strong>95% dos cidadãos</strong> participando ativamente</li>
                  <li>• <strong>24 projetos</strong> aprovados por consulta popular</li>
                  <li>• <strong>R$ 800K otimizados</strong> em orçamento participativo</li>
                  <li>• <strong>Zero conflitos</strong> em implementações de políticas</li>
                </ul>
              </div>

              <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-600 mb-4">
                "Pela primeira vez em nossa história, conseguimos que 95% da população participe ativamente das decisões municipais."
              </blockquote>

              <div className="text-sm text-gray-500">
                <strong>Prefeito André Costa</strong> - Gabinete Municipal
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mx-6 mt-16">
          <div className="card-glass p-12 text-center">
            <h2 className="text-3xl font-bold mb-8">
              Resultados Comprovados
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">127</div>
                <div className="text-gray-600">Municípios Atendidos</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
                <div className="text-gray-600">Taxa de Sucesso Prevista</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">R$ 47M</div>
                <div className="text-gray-600">Economias Geradas</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-600 mb-2">2.3M</div>
                <div className="text-gray-600">Cidadãos Beneficiados</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mx-6 mt-16">
          <div className="card-glass p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Seja o Próximo Caso de Sucesso
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Transforme sua gestão pública e apareça em nossa próxima lista de sucessos
            </p>
            <div className="flex gap-6 justify-center">
              <Link href="/register" className="btn-glass-primary text-lg px-8 py-4">
                Começar Agora
              </Link>
              <Link href="/contact" className="btn-glass text-lg px-8 py-4">
                Agendar Demo
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