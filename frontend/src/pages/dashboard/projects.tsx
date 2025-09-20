import React from 'react';
n<div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
import Head from 'next/head';
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Gestão de Projetos - PolicyLabs APSS</title>
        <meta name="description" content="Uber da Gestão Pública - Projetos sob demanda" />
      </Head>

      {/* Header Navigation */}
      <nav className="card-glass fixed top-0 w-full z-50 px-6 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="PolicyLabs" className="h-8 w-8" />
            <span className="text-xl font-bold">PolicyLabs APSS</span>
          </Link>

          <div className="flex items-center space-x-4">
            <span className="text-sm">Gestão de Projetos</span>
            <Link href="/dashboard/projects/new" className="btn-glass">+ Novo Projeto</Link>
            <Link href="/dashboard" className="btn-glass">← Dashboard</Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">📋 Gestão de Projetos</h1>
            <div className="flex space-x-4">
              <select className="p-2 rounded-lg bg-white/20 border border-white/30">
                <option>Todos os Status</option>
                <option>Em Andamento</option>
                <option>Planejamento</option>
                <option>Concluído</option>
                <option>Pausado</option>
              </select>
              <select className="p-2 rounded-lg bg-white/20 border border-white/30">
                <option>Todas as Áreas</option>
                <option>Educação</option>
                <option>Saúde</option>
                <option>Infraestrutura</option>
                <option>Segurança</option>
              </select>
            </div>
          </div>

          {/* Project Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="card-glass p-6 text-center">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">8</h3>
              <p className="text-gray-600">Projetos Ativos</p>
            </div>
            <div className="card-glass p-6 text-center">
              <h3 className="text-2xl font-bold text-green-600 mb-2">34</h3>
              <p className="text-gray-600">Concluídos</p>
            </div>
            <div className="card-glass p-6 text-center">
              <h3 className="text-2xl font-bold text-yellow-600 mb-2">5</h3>
              <p className="text-gray-600">Em Planejamento</p>
            </div>
            <div className="card-glass p-6 text-center">
              <h3 className="text-2xl font-bold text-primary mb-2">R$ 4.2M</h3>
              <p className="text-gray-600">Orçamento Total</p>
            </div>
          </div>

          {/* Projects List */}
          <div className="card-glass p-8">
            <h2 className="text-2xl font-bold mb-6">Projetos em Andamento</h2>

            <div className="space-y-6">
              {/* Project 1 */}
              <div className="p-6 bg-white/10 rounded-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Nova Escola Primária - Bairro Norte</h3>
                    <div className="flex space-x-4 text-sm text-gray-600">
                      <span>🏗️ Infraestrutura</span>
                      <span>👥 Responsável: Maria Silva</span>
                      <span>📅 Prazo: 8 meses</span>
                      <span>💰 R$ 2.3M</span>
                    </div>
                  </div>
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">Em Andamento</span>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progresso</span>
                    <span>67%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '67%'}}></div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="text-center p-3 bg-white/10 rounded">
                    <div className="font-bold text-green-600">89%</div>
                    <div className="text-sm">Apoio Cidadão</div>
                  </div>
                  <div className="text-center p-3 bg-white/10 rounded">
                    <div className="font-bold text-blue-600">15</div>
                    <div className="text-sm">Comentários</div>
                  </div>
                  <div className="text-center p-3 bg-white/10 rounded">
                    <div className="font-bold text-purple-600">4.2</div>
                    <div className="text-sm">Nota Geral</div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button className="btn-glass">Ver Detalhes</button>
                  <button className="btn-glass">Atualizar Status</button>
                  <button className="btn-glass">Engajar Cidadãos</button>
                </div>
              </div>

              {/* Project 2 */}
              <div className="p-6 bg-white/10 rounded-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Posto de Saúde Bairro Sul</h3>
                    <div className="flex space-x-4 text-sm text-gray-600">
                      <span>🏥 Saúde</span>
                      <span>👥 Responsável: Dr. João Santos</span>
                      <span>📅 Prazo: 6 meses</span>
                      <span>💰 R$ 1.8M</span>
                    </div>
                  </div>
                  <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">Planejamento</span>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progresso</span>
                    <span>23%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-600 h-2 rounded-full" style={{width: '23%'}}></div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="text-center p-3 bg-white/10 rounded">
                    <div className="font-bold text-green-600">94%</div>
                    <div className="text-sm">Apoio Cidadão</div>
                  </div>
                  <div className="text-center p-3 bg-white/10 rounded">
                    <div className="font-bold text-blue-600">28</div>
                    <div className="text-sm">Comentários</div>
                  </div>
                  <div className="text-center p-3 bg-white/10 rounded">
                    <div className="font-bold text-purple-600">4.7</div>
                    <div className="text-sm">Nota Geral</div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button className="btn-glass">Ver Detalhes</button>
                  <button className="btn-glass">Atualizar Status</button>
                  <button className="btn-glass">Engajar Cidadãos</button>
                </div>
              </div>

              {/* Project 3 */}
              <div className="p-6 bg-white/10 rounded-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Praça Central Revitalizada</h3>
                    <div className="flex space-x-4 text-sm text-gray-600">
                      <span>🌳 Meio Ambiente</span>
                      <span>👥 Responsável: Ana Costa</span>
                      <span>📅 Concluído</span>
                      <span>💰 R$ 850k</span>
                    </div>
                  </div>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Concluído</span>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progresso</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="text-center p-3 bg-white/10 rounded">
                    <div className="font-bold text-green-600">76%</div>
                    <div className="text-sm">Apoio Cidadão</div>
                  </div>
                  <div className="text-center p-3 bg-white/10 rounded">
                    <div className="font-bold text-blue-600">42</div>
                    <div className="text-sm">Comentários</div>
                  </div>
                  <div className="text-center p-3 bg-white/10 rounded">
                    <div className="font-bold text-purple-600">3.8</div>
                    <div className="text-sm">Nota Geral</div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button className="btn-glass">Ver Relatório</button>
                  <button className="btn-glass">Feedback Final</button>
                  <button className="btn-glass">Compartilhar Sucesso</button>
                </div>
              </div>
            </div>
          </div>

          {/* Uber da Gestão Pública */}
          <div className="card-glass p-8 mt-8">
            <h2 className="text-2xl font-bold mb-6">🚗 Uber da Gestão Pública</h2>
            <p className="text-gray-600 mb-6">Projetos sob demanda com especialistas verificados</p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg">
                <h3 className="font-bold text-blue-800 mb-2">📚 Especialista em Educação</h3>
                <p className="text-sm text-blue-600 mb-4">Dr. Carlos Educação - 15 anos experiência</p>
                <div className="text-xs text-blue-500 mb-4">⭐ 4.9 (127 avaliações)</div>
                <button className="btn-glass w-full">Solicitar Projeto</button>
              </div>

              <div className="p-6 bg-gradient-to-br from-green-100 to-green-200 rounded-lg">
                <h3 className="font-bold text-green-800 mb-2">🏥 Especialista em Saúde</h3>
                <p className="text-sm text-green-600 mb-4">Dra. Maria Saúde - 12 anos experiência</p>
                <div className="text-xs text-green-500 mb-4">⭐ 4.8 (89 avaliações)</div>
                <button className="btn-glass w-full">Solicitar Projeto</button>
              </div>

              <div className="p-6 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg">
                <h3 className="font-bold text-purple-800 mb-2">🏗️ Especialista em Infraestrutura</h3>
                <p className="text-sm text-purple-600 mb-4">Eng. João Obras - 18 anos experiência</p>
                <div className="text-xs text-purple-500 mb-4">⭐ 4.7 (156 avaliações)</div>
                <button className="btn-glass w-full">Solicitar Projeto</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
</div>
}