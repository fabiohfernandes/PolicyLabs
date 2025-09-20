import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Head>
        <title>Sobre Nós - PolicyLabs APSS</title>
        <meta name="description" content="Projeto de Evolução Humana via IA - Missão, Visão e Equipe PolicyLabs" />
      </Head>

      {/* Navigation */}
      <nav className="nav-glass px-6 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="PolicyLabs" className="h-8 w-8" />
            <span className="text-xl font-bold">PolicyLabs APSS</span>
          </Link>

          <div className="hidden md:flex space-x-6">
            <Link href="/product" className="hover:text-primary">Produto</Link>
            <Link href="/pricing" className="hover:text-primary">Preços</Link>
            <Link href="/cases" className="hover:text-primary">Casos de Sucesso</Link>
            <Link href="/resources" className="hover:text-primary">Recursos</Link>
            <Link href="/blog" className="hover:text-primary">Blog</Link>
            <Link href="/contact" className="hover:text-primary">Contato</Link>
          </div>

          <div className="flex space-x-4">
            <Link href="/login" className="btn-glass-outline">Entrar</Link>
            <Link href="/register" className="btn-glass">Começar Grátis</Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 px-6">
        {/* Hero Section */}
        <section className="card-glass p-12 text-center max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Sobre a PolicyLabs</h1>
          <p className="text-2xl text-gray-600 mb-8">
            "Projeto de Evolução Humana via IA"
          </p>
          <p className="text-xl text-gray-500 max-w-4xl mx-auto">
            Transformando a natureza fundamental da governança pública através de inteligência artificial,
            democratizando acesso a tecnologia sofisticada de simulação de políticas para governos de todos os portes.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="max-w-6xl mx-auto mt-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-glass p-8">
              <h2 className="text-3xl font-bold mb-6">🎯 Nossa Missão</h2>
              <p className="text-lg text-gray-600">
                Democratizar o acesso a tecnologia sofisticada de simulação de políticas, permitindo que
                governos de todos os portes tomem decisões orientadas por dados que maximizem o impacto
                social enquanto otimizam a alocação de recursos.
              </p>
            </div>

            <div className="card-glass p-8">
              <h2 className="text-3xl font-bold mb-6">🌟 Nossa Visão</h2>
              <p className="text-lg text-gray-600">
                Tornar-se o sistema operacional global para tomada de decisões governamentais, impulsionando
                políticas baseadas em evidências que melhorem a vida de bilhões de pessoas através da
                "Evolução Humana via IA".
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="max-w-6xl mx-auto mt-16">
          <h2 className="text-4xl font-bold text-center mb-12">Nossos Valores</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-glass p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">🧠 Competência > Carisma</h3>
              <p>Priorizamos resultados tangíveis sobre personalidade, promovendo liderança baseada em evidências.</p>
            </div>

            <div className="card-glass p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">🔬 Evidência > Intuição</h3>
              <p>Decisões governamentais baseadas em dados e simulações precisas, não em opiniões pessoais.</p>
            </div>

            <div className="card-glass p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">🌍 Impacto > Lucro</h3>
              <p>Foco em transformar vidas de bilhões de pessoas através de governança eficiente e transparente.</p>
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="max-w-6xl mx-auto mt-16">
          <h2 className="text-4xl font-bold text-center mb-12">Nosso Impacto</h2>

          <div className="card-glass p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <h3 className="text-4xl font-bold text-primary mb-2">73%</h3>
                <p>dos prefeitos brasileiros sem formação em administração pública</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-primary mb-2">US$ 2.8T</h3>
                <p>desperdiçados globalmente em políticas ineficazes anualmente</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-primary mb-2">85%</h3>
                <p>taxa de sucesso prevista com PolicyDNA™ vs 45% baseline</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-primary mb-2">100M</h3>
                <p>cidadãos que pretendemos impactar positivamente até 2030</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="max-w-6xl mx-auto mt-16">
          <h2 className="text-4xl font-bold text-center mb-12">Nossa Equipe</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-glass p-8 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Fabio H. Fernandes</h3>
              <p className="text-gray-600 mb-4">CEO & Founder</p>
              <p className="text-sm">Especialista em IA e sistemas governamentais, visionário do "Projeto de Evolução Humana"</p>
            </div>

            <div className="card-glass p-8 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-secondary to-accent rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">CTO</h3>
              <p className="text-gray-600 mb-4">Chief Technology Officer</p>
              <p className="text-sm">PhD em IA/ML com 10+ anos em plataformas enterprise (posição em contratação)</p>
            </div>

            <div className="card-glass p-8 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-accent to-primary rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">CPO</h3>
              <p className="text-gray-600 mb-4">Chief Product Officer</p>
              <p className="text-sm">Especialista em políticas públicas e UX governamental (posição em contratação)</p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="max-w-6xl mx-auto mt-16">
          <h2 className="text-4xl font-bold text-center mb-12">Nossa Jornada</h2>

          <div className="card-glass p-8">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-primary rounded-full"></div>
                <div>
                  <h3 className="text-xl font-semibold">Q4 2025 - MVP e Série A</h3>
                  <p className="text-gray-600">Lançamento do APSS Starter, captação de US$ 45.5M</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-secondary rounded-full"></div>
                <div>
                  <h3 className="text-xl font-semibold">2026 - Expansão Brasil</h3>
                  <p className="text-gray-600">77 clientes ativos, lançamento APSS Professional</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-accent rounded-full"></div>
                <div>
                  <h3 className="text-xl font-semibold">2027 - LATAM Expansion</h3>
                  <p className="text-gray-600">261 clientes, entrada em México e Colômbia</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                <div>
                  <h3 className="text-xl font-semibold">2030 - Global Scale</h3>
                  <p className="text-gray-600">Sistema Operacional Global para Governança</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-6xl mx-auto mt-16">
          <div className="card-glass p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Junte-se à Evolução</h2>
            <p className="text-xl text-gray-600 mb-8">
              Faça parte da transformação da governança global através da inteligência artificial
            </p>

            <div className="flex gap-6 justify-center">
              <Link href="/register" className="btn-glass text-lg px-8 py-4">
                Começar Gratuitamente
              </Link>
              <Link href="/contact" className="btn-glass-outline text-lg px-8 py-4">
                Falar com Especialista
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}