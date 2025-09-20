import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function PolicyDNAPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      <Head>
        <title>PolicyDNA™ - PolicyLabs APSS</title>
        <meta name="description" content="Sistema de IA para recomendação de políticas" />
      </Head>

      {/* Header Navigation */}
      <nav className="card-glass fixed top-0 w-full z-50 px-6 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="PolicyLabs" className="h-8 w-8" />
            <span className="text-xl font-bold">PolicyLabs APSS</span>
          </Link>

          <div className="flex items-center space-x-4">
            <span className="text-sm">PolicyDNA™</span>
            <Link href="/dashboard" className="btn-glass">← Dashboard</Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">🧠 PolicyDNA™</h1>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Search */}
            <div className="md:col-span-2">
              <div className="card-glass p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Consultar Políticas Similares</h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Descreva sua política ou projeto</label>
                    <textarea
                      className="w-full p-4 rounded-lg bg-white/20 border border-white/30 h-32"
                      placeholder="Ex: Quero implementar um programa de educação infantil para crianças de 0-3 anos..."
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Área de Atuação</label>
                      <select className="w-full p-3 rounded-lg bg-white/20 border border-white/30">
                        <option>Educação</option>
                        <option>Saúde</option>
                        <option>Infraestrutura</option>
                        <option>Segurança</option>
                        <option>Meio Ambiente</option>
                        <option>Cultura</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Orçamento Disponível</label>
                      <input
                        type="text"
                        className="w-full p-3 rounded-lg bg-white/20 border border-white/30"
                        placeholder="R$ 500.000"
                      />
                    </div>
                  </div>

                  <button className="btn-glass w-full py-3 text-lg">
                    🔍 Buscar Políticas Similares
                  </button>
                </div>
              </div>

              {/* Results */}
              <div className="card-glass p-8">
                <h3 className="text-xl font-bold mb-6">Recomendações Encontradas</h3>

                <div className="space-y-6">
                  <div className="p-6 bg-white/10 rounded-lg">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-lg font-semibold">Programa Primeira Infância - Joinville/SC</h4>
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">92% Match</span>
                    </div>
                    <p className="text-gray-600 mb-4">Programa de educação infantil que atendeu 2,400 crianças com investimento de R$ 480k</p>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Taxa de Sucesso:</span>
                        <div className="font-bold text-green-600">87%</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Impacto:</span>
                        <div className="font-bold">+35% alfabetização</div>
                      </div>
                      <div>
                        <span className="text-gray-500">ROI:</span>
                        <div className="font-bold text-blue-600">3.4x</div>
                      </div>
                    </div>
                    <div className="mt-4 flex space-x-2">
                      <button className="btn-glass">Ver Detalhes</button>
                      <button className="btn-glass">Adaptar para Minha Cidade</button>
                    </div>
                  </div>

                  <div className="p-6 bg-white/10 rounded-lg">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-lg font-semibold">Creche Comunitária - São José/SC</h4>
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">78% Match</span>
                    </div>
                    <p className="text-gray-600 mb-4">Parceria público-privada para expansão do atendimento infantil</p>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Taxa de Sucesso:</span>
                        <div className="font-bold text-green-600">74%</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Impacto:</span>
                        <div className="font-bold">+800 vagas</div>
                      </div>
                      <div>
                        <span className="text-gray-500">ROI:</span>
                        <div className="font-bold text-blue-600">2.1x</div>
                      </div>
                    </div>
                    <div className="mt-4 flex space-x-2">
                      <button className="btn-glass">Ver Detalhes</button>
                      <button className="btn-glass">Adaptar para Minha Cidade</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">Estatísticas PolicyDNA™</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">12,847</div>
                    <div className="text-sm text-gray-600">Políticas na Base</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">85%</div>
                    <div className="text-sm text-gray-600">Taxa de Sucesso</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">2,341</div>
                    <div className="text-sm text-gray-600">Municípios Conectados</div>
                  </div>
                </div>
              </div>

              {/* Recent Searches */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">Buscas Recentes</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-white/10 rounded">
                    <div className="font-medium text-sm">Mobilidade Urbana</div>
                    <div className="text-xs text-gray-500">há 2 dias</div>
                  </div>
                  <div className="p-3 bg-white/10 rounded">
                    <div className="font-medium text-sm">Programa de Saúde</div>
                    <div className="text-xs text-gray-500">há 1 semana</div>
                  </div>
                  <div className="p-3 bg-white/10 rounded">
                    <div className="font-medium text-sm">Cultura Local</div>
                    <div className="text-xs text-gray-500">há 2 semanas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}