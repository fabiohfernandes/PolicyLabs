import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Como a IA está Revolucionando a Gestão Pública Municipal",
      excerpt: "Descubra como algoritmos de machine learning estão transformando a tomada de decisões em prefeituras brasileiras.",
      date: "15 de Janeiro, 2025",
      category: "Tecnologia",
      readTime: "5 min",
      image: "🤖",
      featured: true
    },
    {
      id: 2,
      title: "PolicyDNA™: A Ciência por Trás da Previsão de Sucesso",
      excerpt: "Entenda como nossa IA proprietária analisa 50M+ políticas globais para prever resultados com 85% de precisão.",
      date: "12 de Janeiro, 2025",
      category: "Inovação",
      readTime: "7 min",
      image: "🧬"
    },
    {
      id: 3,
      title: "Democracia Digital: O Futuro da Participação Cidadã",
      excerpt: "Como plataformas digitais estão aumentando o engajamento cívico em municípios brasileiros.",
      date: "8 de Janeiro, 2025",
      category: "Democracia",
      readTime: "6 min",
      image: "🗳️"
    },
    {
      id: 4,
      title: "Gêmeo Digital: Simulando Políticas Antes da Implementação",
      excerpt: "Conheça a tecnologia que permite testar políticas públicas em ambiente virtual antes da execução real.",
      date: "5 de Janeiro, 2025",
      category: "Tecnologia",
      readTime: "8 min",
      image: "🏙️"
    },
    {
      id: 5,
      title: "Transparência 4.0: Dados Abertos e Gestão Inteligente",
      excerpt: "Como a nova geração de ferramentas de transparência está mudando a relação entre governo e cidadão.",
      date: "2 de Janeiro, 2025",
      category: "Transparência",
      readTime: "4 min",
      image: "📊"
    },
    {
      id: 6,
      title: "Case Study: Transformação Digital em Município de 50k Habitantes",
      excerpt: "Análise completa da implementação do PolicyLabs APSS em cidade média brasileira.",
      date: "28 de Dezembro, 2024",
      category: "Casos",
      readTime: "10 min",
      image: "📈"
    }
  ];

  const categories = ["Todos", "Tecnologia", "Inovação", "Democracia", "Transparência", "Casos"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Head>
        <title>Blog | PolicyLabs APSS</title>
        <meta name="description" content="Blog PolicyLabs APSS - Insights sobre gestão pública, tecnologia e inovação" />
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
            <Link href="/blog" className="text-blue-600 font-medium">Blog</Link>
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
            Blog PolicyLabs
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Insights sobre Gestão Pública, Tecnologia e Inovação
          </p>
          <p className="text-lg text-gray-500 mb-8 max-w-4xl mx-auto">
            Acompanhe as últimas tendências em tecnologia para gestão pública, cases de sucesso e análises especializadas
          </p>
        </section>

        {/* Categories Filter */}
        <section className="mx-6 mt-16">
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-xl transition-all ${
                  category === "Todos"
                    ? "btn-glass-primary"
                    : "btn-glass hover:scale-105"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Featured Post */}
        <section className="mx-6 mt-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Artigo em Destaque</h2>

            {blogPosts.filter(post => post.featured).map((post) => (
              <div key={post.id} className="card-glass p-8 mb-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl">{post.image}</span>
                      <div>
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                        <div className="text-sm text-gray-500 mt-1">
                          {post.date} • {post.readTime} de leitura
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-4">{post.title}</h3>
                    <p className="text-gray-600 mb-6">{post.excerpt}</p>

                    <button className="btn-glass-primary">
                      Ler Artigo Completo
                    </button>
                  </div>

                  <div className="text-center">
                    <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                      <span className="text-6xl">{post.image}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="mx-6 mt-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Últimos Artigos</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map((post) => (
                <article key={post.id} className="card-glass p-6 hover:scale-105 transition-transform cursor-pointer">
                  <div className="text-center mb-4">
                    <div className="w-full h-40 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-4">
                      <span className="text-4xl">{post.image}</span>
                    </div>

                    <div className="flex justify-between items-center mb-2">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="font-bold mb-3 text-lg leading-tight">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">{post.date}</span>
                    <button className="text-blue-600 text-sm font-medium hover:underline">
                      Ler mais →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mx-6 mt-16">
          <div className="card-glass p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              📧 Newsletter PolicyLabs
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Receba insights semanais sobre gestão pública e inovação tecnológica
            </p>

            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="btn-glass-primary px-8 py-3">
                Inscrever
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              🔒 Seus dados estão seguros. Sem spam, apenas conteúdo relevante.
            </p>
          </div>
        </section>

        {/* Topics */}
        <section className="mx-6 mt-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Tópicos Populares</h2>

            <div className="grid md:grid-cols-4 gap-4">
              <div className="card-glass p-4 text-center">
                <div className="text-2xl mb-2">🤖</div>
                <h3 className="font-semibold text-sm">Inteligência Artificial</h3>
                <p className="text-xs text-gray-500 mt-1">12 artigos</p>
              </div>

              <div className="card-glass p-4 text-center">
                <div className="text-2xl mb-2">📊</div>
                <h3 className="font-semibold text-sm">Análise de Dados</h3>
                <p className="text-xs text-gray-500 mt-1">8 artigos</p>
              </div>

              <div className="card-glass p-4 text-center">
                <div className="text-2xl mb-2">🏛️</div>
                <h3 className="font-semibold text-sm">Gestão Municipal</h3>
                <p className="text-xs text-gray-500 mt-1">15 artigos</p>
              </div>

              <div className="card-glass p-4 text-center">
                <div className="text-2xl mb-2">🚀</div>
                <h3 className="font-semibold text-sm">Inovação</h3>
                <p className="text-xs text-gray-500 mt-1">10 artigos</p>
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