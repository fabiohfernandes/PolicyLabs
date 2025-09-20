import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Head>
        <title>Preços | PolicyLabs APSS</title>
        <meta name="description" content="Planos e preços do PolicyLabs APSS - Free, Starter, Professional, Enterprise, Federal" />
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
            <Link href="/pricing" className="text-blue-600 font-medium">Preços</Link>
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
          <h1 className="text-5xl font-bold mb-6">Planos e Preços</h1>
          <p className="text-2xl text-gray-600 mb-8">
            Do pequeno município ao governo federal
          </p>
          <p className="text-xl text-gray-500 max-w-4xl mx-auto">
            Escolha o plano ideal para o tamanho do seu município.
            Todos os planos incluem PolicyDNA™ e suporte especializado.
          </p>
        </section>

        {/* Pricing Tiers */}
        <section className="mx-6 mt-16">
          <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">

            {/* Free Tier */}
            <div className="card-glass p-8 text-center">
              <div className="text-4xl mb-4">🆓</div>
              <h3 className="text-2xl font-bold mb-2">APSS Free</h3>
              <p className="text-4xl font-bold mb-2">R$ 0</p>
              <p className="text-gray-600 mb-6">por mês</p>

              <div className="text-left space-y-3 mb-8">
                <p className="text-sm"><strong>Target:</strong> Municípios &lt;25k habitantes</p>
                <p className="text-sm text-green-600">✅ 3 projetos/mês</p>
                <p className="text-sm text-green-600">✅ PolicyDNA™ básico</p>
                <p className="text-sm text-green-600">✅ Templates básicos</p>
                <p className="text-sm text-green-600">✅ Suporte comunidade</p>
                <p className="text-sm text-red-600">❌ Analytics avançado</p>
                <p className="text-sm text-red-600">❌ Gêmeo Digital</p>
              </div>

              <Link href="/register?tier=free" className="btn-glass w-full">
                Começar Grátis
              </Link>
            </div>

            {/* Starter Tier */}
            <div className="card-glass p-8 text-center border-2 border-primary relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm">
                Mais Popular
              </div>
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-2xl font-bold mb-2">APSS Starter</h3>
              <p className="text-4xl font-bold mb-2">R$ 20k</p>
              <p className="text-gray-600 mb-6">por mês</p>

              <div className="text-left space-y-3 mb-8">
                <p className="text-sm"><strong>Target:</strong> 25k-50k habitantes</p>
                <p className="text-sm text-green-600">✅ Projetos ilimitados</p>
                <p className="text-sm text-green-600">✅ PolicyDNA™ completo</p>
                <p className="text-sm text-green-600">✅ Engajamento cidadão</p>
                <p className="text-sm text-green-600">✅ Documentos automáticos</p>
                <p className="text-sm text-green-600">✅ Analytics básico</p>
                <p className="text-sm text-green-600">✅ Suporte email 48h</p>
              </div>

              <Link href="/register?tier=starter" className="btn-glass w-full">
                Assinar Starter
              </Link>
            </div>

            {/* Professional Tier */}
            <div className="card-glass p-8 text-center">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-2xl font-bold mb-2">APSS Professional</h3>
              <p className="text-4xl font-bold mb-2">R$ 50k</p>
              <p className="text-gray-600 mb-6">por mês</p>

              <div className="text-left space-y-3 mb-8">
                <p className="text-sm"><strong>Target:</strong> 50k-100k habitantes</p>
                <p className="text-sm text-green-600">✅ Tudo do Starter</p>
                <p className="text-sm text-green-600">✅ CausalAI Framework</p>
                <p className="text-sm text-green-600">✅ Gêmeo Digital básico</p>
                <p className="text-sm text-green-600">✅ Analytics avançado</p>
                <p className="text-sm text-green-600">✅ Deliberation Rooms</p>
                <p className="text-sm text-green-600">✅ Suporte telefônico 24h</p>
              </div>

              <Link href="/register?tier=professional" className="btn-glass w-full">
                Assinar Professional
              </Link>
            </div>

            {/* Enterprise Tier */}
            <div className="card-glass p-8 text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold mb-2">APSS Enterprise</h3>
              <p className="text-4xl font-bold mb-2">R$ 150k</p>
              <p className="text-gray-600 mb-6">por mês</p>

              <div className="text-left space-y-3 mb-8">
                <p className="text-sm"><strong>Target:</strong> &gt;100k habitantes</p>
                <p className="text-sm text-green-600">✅ Tudo do Professional</p>
                <p className="text-sm text-green-600">✅ Government Intelligence</p>
                <p className="text-sm text-green-600">✅ Crisis Command Center</p>
                <p className="text-sm text-green-600">✅ Liquid Democracy</p>
                <p className="text-sm text-green-600">✅ Custom features</p>
                <p className="text-sm text-green-600">✅ Success manager</p>
              </div>

              <Link href="/contact?tier=enterprise" className="btn-glass w-full">
                Falar com Vendas
              </Link>
            </div>

            {/* Federal Tier */}
            <div className="card-glass p-8 text-center">
              <div className="text-4xl mb-4">🌎</div>
              <h3 className="text-2xl font-bold mb-2">APSS Federal</h3>
              <p className="text-4xl font-bold mb-2">R$ 2M</p>
              <p className="text-gray-600 mb-6">por mês</p>

              <div className="text-left space-y-3 mb-8">
                <p className="text-sm"><strong>Target:</strong> Estados/Federal</p>
                <p className="text-sm text-green-600">✅ Tudo do Enterprise</p>
                <p className="text-sm text-green-600">✅ National Digital Twin</p>
                <p className="text-sm text-green-600">✅ Multi-State coordination</p>
                <p className="text-sm text-green-600">✅ Federal analytics</p>
                <p className="text-sm text-green-600">✅ Cross-jurisdictional</p>
                <p className="text-sm text-green-600">✅ Dedicated team</p>
              </div>

              <Link href="/contact?tier=federal" className="btn-glass w-full">
                Contato Especializado
              </Link>
            </div>
          </div>
          </div>
        </section>

        {/* Features Comparison */}
        <section className="mx-6 mt-16">
          <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Comparação Detalhada</h2>

          <div className="card-glass overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-4">Funcionalidade</th>
                  <th className="text-center p-4">Free</th>
                  <th className="text-center p-4">Starter</th>
                  <th className="text-center p-4">Professional</th>
                  <th className="text-center p-4">Enterprise</th>
                  <th className="text-center p-4">Federal</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-4">Project Wizard</td>
                  <td className="text-center p-4">3/mês</td>
                  <td className="text-center p-4">✅ Ilimitado</td>
                  <td className="text-center p-4">✅ Ilimitado</td>
                  <td className="text-center p-4">✅ Ilimitado</td>
                  <td className="text-center p-4">✅ Ilimitado</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4">PolicyDNA™</td>
                  <td className="text-center p-4">Básico</td>
                  <td className="text-center p-4">✅ Completo</td>
                  <td className="text-center p-4">✅ Completo</td>
                  <td className="text-center p-4">✅ Completo</td>
                  <td className="text-center p-4">✅ Completo</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4">Citizen Engagement</td>
                  <td className="text-center p-4">Básico</td>
                  <td className="text-center p-4">✅ Padrão</td>
                  <td className="text-center p-4">✅ Avançado</td>
                  <td className="text-center p-4">✅ Completo</td>
                  <td className="text-center p-4">✅ Nacional</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4">Digital Twin</td>
                  <td className="text-center p-4">❌</td>
                  <td className="text-center p-4">❌</td>
                  <td className="text-center p-4">✅ Básico</td>
                  <td className="text-center p-4">✅ Completo</td>
                  <td className="text-center p-4">✅ Nacional</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4">CausalAI Framework</td>
                  <td className="text-center p-4">❌</td>
                  <td className="text-center p-4">❌</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4">Crisis Management</td>
                  <td className="text-center p-4">❌</td>
                  <td className="text-center p-4">❌</td>
                  <td className="text-center p-4">❌</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4">Usuários Inclusos</td>
                  <td className="text-center p-4">5</td>
                  <td className="text-center p-4">25</td>
                  <td className="text-center p-4">100</td>
                  <td className="text-center p-4">Ilimitado</td>
                  <td className="text-center p-4">Ilimitado</td>
                </tr>
                <tr>
                  <td className="p-4">Suporte</td>
                  <td className="text-center p-4">Comunidade</td>
                  <td className="text-center p-4">Email 48h</td>
                  <td className="text-center p-4">Phone 24h</td>
                  <td className="text-center p-4">Dedicated</td>
                  <td className="text-center p-4">Federal Team</td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="mx-6 mt-16">
          <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Calculadora de ROI</h2>

          <div className="card-glass p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">340%</h3>
                <p className="text-lg font-semibold mb-2">ROI Médio</p>
                <p className="text-gray-600">em 24 meses com APSS Starter</p>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">R$ 2M+</h3>
                <p className="text-lg font-semibold mb-2">Economia Anual</p>
                <p className="text-gray-600">em consultorias e projetos fracassados</p>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">50%</h3>
                <p className="text-lg font-semibold mb-2">Redução no Tempo</p>
                <p className="text-gray-600">de implementação de políticas</p>
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-6 mt-16">
          <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Perguntas Frequentes</h2>

          <div className="space-y-6">
            <div className="card-glass p-6">
              <h3 className="text-xl font-semibold mb-3">Por que R$ 20k/mês para o Starter?</h3>
              <p className="text-gray-600">
                Esse valor está dentro do limite de dispensa de licitação (R$ 240k/ano),
                facilitando a contratação por prefeituras sem processos burocráticos complexos.
              </p>
            </div>

            <div className="card-glass p-6">
              <h3 className="text-xl font-semibold mb-3">Posso mudar de plano a qualquer momento?</h3>
              <p className="text-gray-600">
                Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento.
                As mudanças são aplicadas no próximo ciclo de faturamento.
              </p>
            </div>

            <div className="card-glass p-6">
              <h3 className="text-xl font-semibold mb-3">O que inclui o suporte dedicado?</h3>
              <p className="text-gray-600">
                Suporte dedicado inclui um Customer Success Manager exclusivo,
                treinamento da equipe, implementação assistida e SLA de resposta prioritário.
              </p>
            </div>

            <div className="card-glass p-6">
              <h3 className="text-xl font-semibold mb-3">Como funciona o período de teste?</h3>
              <p className="text-gray-600">
                Oferecemos 30 dias de teste gratuito para todos os planos pagos,
                com acesso completo às funcionalidades do tier escolhido.
              </p>
            </div>
          </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mx-6 mt-16">
          <div className="max-w-6xl mx-auto">
          <div className="card-glass p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Pronto para Transformar sua Gestão?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Junte-se a municípios que já economizam milhões com PolicyLabs APSS
            </p>

            <div className="flex gap-6 justify-center">
              <Link href="/register" className="btn-glass text-lg px-8 py-4">
                Começar Teste Gratuito
              </Link>
              <Link href="/contact" className="btn-glass text-lg px-8 py-4">
                Falar com Especialista
              </Link>
            </div>
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
