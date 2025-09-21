import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Head>
        <title>Preços | PolicyLabs APSS</title>
        <meta name="description" content="Planos e preços do PolicyLabs APSS - Free, Starter, Professional, Enterprise, Federal" />
      </Head>

      {/* Simple Navigation */}
      <header className="bg-white/25 dark:bg-white/5 backdrop-blur-sm border border-white/30 dark:border-white/10 rounded-2xl mx-6 mt-4 px-6 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-4">
              <img src="/logo.svg" alt="PolicyLabs" className="h-8 w-8" />
              <span className="text-xl font-bold text-gray-900 dark:text-gray-100">PolicyLabs</span>
            </Link>
          </div>

          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Nossos planos de assinatura</h1>
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
          <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">Planos e Preços</h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Do pequeno município ao governo federal
          </p>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-4xl mx-auto">
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
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">APSS Free</h3>
              <p className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">R$ 0</p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">por mês</p>

              <div className="text-left space-y-3 mb-8">
                <p className="text-sm text-gray-700 dark:text-gray-300"><strong>Target:</strong> Municípios &lt;25k habitantes</p>
                <p className="text-sm text-green-600 dark:text-green-400">✅ 3 projetos/mês</p>
                <p className="text-sm text-green-600 dark:text-green-400">✅ PolicyDNA™ básico</p>
                <p className="text-sm text-green-600 dark:text-green-400">✅ Templates básicos</p>
                <p className="text-sm text-green-600 dark:text-green-400">✅ Suporte comunidade</p>
                <p className="text-sm text-red-600 dark:text-red-400">❌ Analytics avançado</p>
                <p className="text-sm text-red-600 dark:text-red-400">❌ Gêmeo Digital</p>
              </div>

              <Link href="/register?tier=free" className="btn-glass w-full">
                Começar Grátis
              </Link>
            </div>

            {/* Starter Tier */}
            <div className="card-glass p-8 text-center border-2 border-blue-500 dark:border-blue-400 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 dark:bg-blue-400 text-white px-4 py-1 rounded-full text-sm">
                Mais Popular
              </div>
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">APSS Starter</h3>
              <p className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">R$ 20k</p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">por mês</p>

              <div className="text-left space-y-3 mb-8">
                <p className="text-sm text-gray-700 dark:text-gray-300"><strong>Target:</strong> 25k-50k habitantes</p>
                <p className="text-sm text-green-600 dark:text-green-400">✅ Projetos ilimitados</p>
                <p className="text-sm text-green-600 dark:text-green-400">✅ PolicyDNA™ completo</p>
                <p className="text-sm text-green-600 dark:text-green-400">✅ Engajamento cidadão</p>
                <p className="text-sm text-green-600 dark:text-green-400">✅ Documentos automáticos</p>
                <p className="text-sm text-green-600 dark:text-green-400">✅ Analytics básico</p>
                <p className="text-sm text-green-600 dark:text-green-400">✅ Suporte email 48h</p>
              </div>

              <Link href="/register?tier=starter" className="btn-glass w-full">
                Assinar Starter
              </Link>
            </div>

            {/* Professional Tier */}
            <div className="card-glass p-8 text-center">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">APSS Professional</h3>
              <p className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">R$ 50k</p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">por mês</p>

              <div className="text-left space-y-3 mb-8">
                <p className="text-sm text-gray-700 dark:text-gray-300"><strong>Target:</strong> 50k-100k habitantes</p>
                <p className="text-sm text-green-600 dark:text-green-400">✅ Tudo do Starter</p>
                <p className="text-sm text-green-600 dark:text-green-400">✅ CausalAI Framework</p>
                <p className="text-sm text-green-600 dark:text-green-400">✅ Gêmeo Digital básico</p>
                <p className="text-sm text-green-600 dark:text-green-400">✅ Analytics avançado</p>
                <p className="text-sm text-green-600 dark:text-green-400">✅ Deliberation Rooms</p>
                <p className="text-sm text-green-600 dark:text-green-400">✅ Suporte telefônico 24h</p>
              </div>

              <Link href="/register?tier=professional" className="btn-glass w-full">
                Assinar Professional
              </Link>
            </div>

            {/* Enterprise Tier */}
            <div className="card-glass p-8 text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">APSS Enterprise</h3>
              <p className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">R$ 150k</p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">por mês</p>

              <div className="text-left space-y-3 mb-8">
                <p className="text-sm text-gray-700 dark:text-gray-300"><strong>Target:</strong> &gt;100k habitantes</p>
                <p className="text-sm text-green-600 dark:text-green-400">✅ Tudo do Professional</p>
                <p className="text-sm text-green-600 dark:text-green-400">✅ Government Intelligence</p>
                <p className="text-sm text-green-600 dark:text-green-400">✅ Crisis Command Center</p>
                <p className="text-sm text-green-600 dark:text-green-400">✅ Liquid Democracy</p>
                <p className="text-sm text-green-600 dark:text-green-400">✅ Custom features</p>
                <p className="text-sm text-green-600 dark:text-green-400">✅ Success manager</p>
              </div>

              <Link href="/contact?tier=enterprise" className="btn-glass w-full">
                Falar com Vendas
              </Link>
            </div>

            {/* Federal Tier */}
            <div className="card-glass p-8 text-center">
              <div className="text-4xl mb-4">🌎</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">APSS Federal</h3>
              <p className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">R$ 2M</p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">por mês</p>

              <div className="text-left space-y-3 mb-8">
                <p className="text-sm text-gray-700 dark:text-gray-300"><strong>Target:</strong> Estados/Federal</p>
                <p className="text-sm text-green-600 dark:text-green-400">✅ Tudo do Enterprise</p>
                <p className="text-sm text-green-600 dark:text-green-400">✅ National Digital Twin</p>
                <p className="text-sm text-green-600 dark:text-green-400">✅ Multi-State coordination</p>
                <p className="text-sm text-green-600 dark:text-green-400">✅ Federal analytics</p>
                <p className="text-sm text-green-600 dark:text-green-400">✅ Cross-jurisdictional</p>
                <p className="text-sm text-green-600 dark:text-green-400">✅ Dedicated team</p>
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
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">Comparação Detalhada</h2>

          <div className="card-glass overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left p-4 text-gray-900 dark:text-gray-100">Funcionalidade</th>
                  <th className="text-center p-4 text-gray-900 dark:text-gray-100">Free</th>
                  <th className="text-center p-4 text-gray-900 dark:text-gray-100">Starter</th>
                  <th className="text-center p-4 text-gray-900 dark:text-gray-100">Professional</th>
                  <th className="text-center p-4 text-gray-900 dark:text-gray-100">Enterprise</th>
                  <th className="text-center p-4 text-gray-900 dark:text-gray-100">Federal</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="p-4 text-gray-700 dark:text-gray-300">Project Wizard</td>
                  <td className="text-center p-4 text-gray-700 dark:text-gray-300">3/mês</td>
                  <td className="text-center p-4 text-green-600 dark:text-green-400">✅ Ilimitado</td>
                  <td className="text-center p-4 text-green-600 dark:text-green-400">✅ Ilimitado</td>
                  <td className="text-center p-4 text-green-600 dark:text-green-400">✅ Ilimitado</td>
                  <td className="text-center p-4 text-green-600 dark:text-green-400">✅ Ilimitado</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="p-4 text-gray-700 dark:text-gray-300">PolicyDNA™</td>
                  <td className="text-center p-4 text-gray-700 dark:text-gray-300">Básico</td>
                  <td className="text-center p-4 text-green-600 dark:text-green-400">✅ Completo</td>
                  <td className="text-center p-4 text-green-600 dark:text-green-400">✅ Completo</td>
                  <td className="text-center p-4 text-green-600 dark:text-green-400">✅ Completo</td>
                  <td className="text-center p-4 text-green-600 dark:text-green-400">✅ Completo</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="p-4 text-gray-700 dark:text-gray-300">Citizen Engagement</td>
                  <td className="text-center p-4 text-gray-700 dark:text-gray-300">Básico</td>
                  <td className="text-center p-4 text-green-600 dark:text-green-400">✅ Padrão</td>
                  <td className="text-center p-4 text-green-600 dark:text-green-400">✅ Avançado</td>
                  <td className="text-center p-4 text-green-600 dark:text-green-400">✅ Completo</td>
                  <td className="text-center p-4 text-green-600 dark:text-green-400">✅ Nacional</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="p-4 text-gray-700 dark:text-gray-300">Digital Twin</td>
                  <td className="text-center p-4 text-red-600 dark:text-red-400">❌</td>
                  <td className="text-center p-4 text-red-600 dark:text-red-400">❌</td>
                  <td className="text-center p-4 text-green-600 dark:text-green-400">✅ Básico</td>
                  <td className="text-center p-4 text-green-600 dark:text-green-400">✅ Completo</td>
                  <td className="text-center p-4 text-green-600 dark:text-green-400">✅ Nacional</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="p-4 text-gray-700 dark:text-gray-300">CausalAI Framework</td>
                  <td className="text-center p-4 text-red-600 dark:text-red-400">❌</td>
                  <td className="text-center p-4 text-red-600 dark:text-red-400">❌</td>
                  <td className="text-center p-4 text-green-600 dark:text-green-400">✅</td>
                  <td className="text-center p-4 text-green-600 dark:text-green-400">✅</td>
                  <td className="text-center p-4 text-green-600 dark:text-green-400">✅</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="p-4 text-gray-700 dark:text-gray-300">Crisis Management</td>
                  <td className="text-center p-4 text-red-600 dark:text-red-400">❌</td>
                  <td className="text-center p-4 text-red-600 dark:text-red-400">❌</td>
                  <td className="text-center p-4 text-red-600 dark:text-red-400">❌</td>
                  <td className="text-center p-4 text-green-600 dark:text-green-400">✅</td>
                  <td className="text-center p-4 text-green-600 dark:text-green-400">✅</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="p-4 text-gray-700 dark:text-gray-300">Usuários Inclusos</td>
                  <td className="text-center p-4 text-gray-700 dark:text-gray-300">5</td>
                  <td className="text-center p-4 text-gray-700 dark:text-gray-300">25</td>
                  <td className="text-center p-4 text-gray-700 dark:text-gray-300">100</td>
                  <td className="text-center p-4 text-gray-700 dark:text-gray-300">Ilimitado</td>
                  <td className="text-center p-4 text-gray-700 dark:text-gray-300">Ilimitado</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-700 dark:text-gray-300">Suporte</td>
                  <td className="text-center p-4 text-gray-700 dark:text-gray-300">Comunidade</td>
                  <td className="text-center p-4 text-gray-700 dark:text-gray-300">Email 48h</td>
                  <td className="text-center p-4 text-gray-700 dark:text-gray-300">Phone 24h</td>
                  <td className="text-center p-4 text-gray-700 dark:text-gray-300">Dedicated</td>
                  <td className="text-center p-4 text-gray-700 dark:text-gray-300">Federal Team</td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="mx-6 mt-16">
          <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">Calculadora de ROI</h2>

          <div className="card-glass p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">340%</h3>
                <p className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">ROI Médio</p>
                <p className="text-gray-600 dark:text-gray-400">em 24 meses com APSS Starter</p>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">R$ 2M+</h3>
                <p className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Economia Anual</p>
                <p className="text-gray-600 dark:text-gray-400">em consultorias e projetos fracassados</p>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">50%</h3>
                <p className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Redução no Tempo</p>
                <p className="text-gray-600 dark:text-gray-400">de implementação de políticas</p>
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-6 mt-16">
          <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">Perguntas Frequentes</h2>

          <div className="space-y-6">
            <div className="card-glass p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Por que R$ 20k/mês para o Starter?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Esse valor está dentro do limite de dispensa de licitação (R$ 240k/ano),
                facilitando a contratação por prefeituras sem processos burocráticos complexos.
              </p>
            </div>

            <div className="card-glass p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Posso mudar de plano a qualquer momento?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento.
                As mudanças são aplicadas no próximo ciclo de faturamento.
              </p>
            </div>

            <div className="card-glass p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">O que inclui o suporte dedicado?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Suporte dedicado inclui um Customer Success Manager exclusivo,
                treinamento da equipe, implementação assistida e SLA de resposta prioritário.
              </p>
            </div>

            <div className="card-glass p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Como funciona o período de teste?</h3>
              <p className="text-gray-600 dark:text-gray-400">
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
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">Pronto para Transformar sua Gestão?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
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
