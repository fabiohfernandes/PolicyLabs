import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function DeliberationRoomsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
      <Head>
        <title>Deliberation Rooms - PolicyLabs APSS</title>
        <meta name="description" content="Democratic deliberation spaces for collaborative policy-making" />
      </Head>

      {/* Header Navigation */}
      <nav className="nav-glass px-6 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="PolicyLabs" className="h-8 w-8" />
            <span className="text-xl font-bold">PolicyLabs APSS</span>
          </Link>

          <div className="flex items-center space-x-4">
            <span className="text-sm">Deliberation Rooms</span>
            <Link href="/dashboard" className="btn-glass">← Dashboard</Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">🏛️ Deliberation Rooms</h1>

          {/* Tier Access Control */}
          <div className="card-glass p-6 mb-8 bg-gradient-to-r from-rose-100 to-pink-100">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">⚡</span>
              <div>
                <h2 className="text-xl font-bold text-rose-800">Professional+ Feature</h2>
                <p className="text-rose-600">Democratic deliberation platform available for Professional tier and above</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Active Deliberations */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">🗣️ Active Deliberations</h2>

                <div className="space-y-6">
                  {/* Featured Deliberation */}
                  <div className="p-6 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg border-l-4 border-blue-500">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-blue-800">Novo Plano Diretor Municipal</h3>
                        <p className="text-blue-600">Deliberação sobre as diretrizes do novo plano diretor da cidade</p>
                      </div>
                      <div className="text-right">
                        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">Em Andamento</span>
                        <div className="text-sm text-blue-600 mt-1">347 participantes</div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 mb-4">
                      <div className="text-center p-3 bg-white/50 rounded">
                        <div className="font-bold text-blue-700">347</div>
                        <div className="text-sm">Participantes</div>
                      </div>
                      <div className="text-center p-3 bg-white/50 rounded">
                        <div className="font-bold text-green-700">156</div>
                        <div className="text-sm">Propostas</div>
                      </div>
                      <div className="text-center p-3 bg-white/50 rounded">
                        <div className="font-bold text-purple-700">89</div>
                        <div className="text-sm">Consensos</div>
                      </div>
                      <div className="text-center p-3 bg-white/50 rounded">
                        <div className="font-bold text-orange-700">7 dias</div>
                        <div className="text-sm">Restantes</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm font-medium mb-2">Progresso da Deliberação</div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Coleta de Propostas</span>
                        <span>78% concluído</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{width: '78%'}}></div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className="btn-glass-primary">🏛️ Entrar na Deliberação</button>
                      <button className="btn-glass">📊 Ver Propostas</button>
                      <button className="btn-glass">📈 Analytics</button>
                    </div>
                  </div>

                  {/* Other Active Deliberations */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-white/10 rounded-lg">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-semibold">Mobilidade Urbana Sustentável</h4>
                        <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">Votação</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Discussão sobre implementação de ciclovias e transporte público
                      </p>
                      <div className="flex justify-between text-sm mb-3">
                        <span>89 participantes</span>
                        <span>23 propostas</span>
                      </div>
                      <div className="flex space-x-2">
                        <button className="btn-glass text-sm">Participar</button>
                        <button className="btn-glass text-sm">Detalhes</button>
                      </div>
                    </div>

                    <div className="p-4 bg-white/10 rounded-lg">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-semibold">Programa Municipal de Compostagem</h4>
                        <span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs">Discussão</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Criação de programa de compostagem comunitária
                      </p>
                      <div className="flex justify-between text-sm mb-3">
                        <span>67 participantes</span>
                        <span>15 propostas</span>
                      </div>
                      <div className="flex space-x-2">
                        <button className="btn-glass text-sm">Participar</button>
                        <button className="btn-glass text-sm">Detalhes</button>
                      </div>
                    </div>

                    <div className="p-4 bg-white/10 rounded-lg">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-semibold">Horário de Funcionamento Comércio</h4>
                        <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">Consulta</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Revisão dos horários de funcionamento do comércio local
                      </p>
                      <div className="flex justify-between text-sm mb-3">
                        <span>234 participantes</span>
                        <span>8 propostas</span>
                      </div>
                      <div className="flex space-x-2">
                        <button className="btn-glass text-sm">Participar</button>
                        <button className="btn-glass text-sm">Detalhes</button>
                      </div>
                    </div>

                    <div className="p-4 bg-white/10 rounded-lg">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-semibold">Segurança nos Parques Públicos</h4>
                        <span className="bg-purple-500 text-white px-2 py-1 rounded text-xs">Planejamento</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Melhorias na segurança e iluminação dos parques
                      </p>
                      <div className="flex justify-between text-sm mb-3">
                        <span>156 participantes</span>
                        <span>12 propostas</span>
                      </div>
                      <div className="flex space-x-2">
                        <button className="btn-glass text-sm">Participar</button>
                        <button className="btn-glass text-sm">Detalhes</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Deliberation Tools */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">🛠️ Ferramentas de Deliberação</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-white/10 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">💡 Mapeamento de Argumentos</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Visualize argumentos pró e contra de forma estruturada para facilitar o entendimento das posições
                    </p>
                    <div className="space-y-3">
                      <div className="p-3 bg-green-100 rounded">
                        <div className="font-semibold text-green-800">✓ Argumentos Favoráveis: 23</div>
                        <div className="text-sm text-green-600">Apoio médio: 78%</div>
                      </div>
                      <div className="p-3 bg-red-100 rounded">
                        <div className="font-semibold text-red-800">✗ Argumentos Contrários: 12</div>
                        <div className="text-sm text-red-600">Apoio médio: 45%</div>
                      </div>
                    </div>
                    <button className="btn-glass mt-4">🗺️ Ver Mapa Completo</button>
                  </div>

                  <div className="p-6 bg-white/10 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">🎯 Sistema de Votação Gradual</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Sistema de votação que permite múltiplas opções e preferências graduais
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-2 bg-blue-100 rounded">
                        <span className="text-sm">Concordo Totalmente</span>
                        <span className="font-bold text-blue-600">34%</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-green-100 rounded">
                        <span className="text-sm">Concordo Parcialmente</span>
                        <span className="font-bold text-green-600">28%</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-yellow-100 rounded">
                        <span className="text-sm">Neutro</span>
                        <span className="font-bold text-yellow-600">15%</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-orange-100 rounded">
                        <span className="text-sm">Discordo Parcialmente</span>
                        <span className="font-bold text-orange-600">18%</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-red-100 rounded">
                        <span className="text-sm">Discordo Totalmente</span>
                        <span className="font-bold text-red-600">5%</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-white/10 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">🤝 Construção de Consenso</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Ferramenta para identificar pontos de convergência e facilitar acordos
                    </p>
                    <div className="space-y-3">
                      <div className="p-3 bg-blue-100 rounded">
                        <div className="font-semibold text-blue-800">Consenso Emergente</div>
                        <div className="text-sm text-blue-600">Implementação gradual em 3 fases</div>
                        <div className="text-xs text-blue-500">Apoio: 67% dos participantes</div>
                      </div>
                      <div className="p-3 bg-green-100 rounded">
                        <div className="font-semibold text-green-800">Consenso Consolidado</div>
                        <div className="text-sm text-green-600">Programa piloto no centro da cidade</div>
                        <div className="text-xs text-green-500">Apoio: 89% dos participantes</div>
                      </div>
                    </div>
                    <button className="btn-glass mt-4">🎯 Facilitar Consenso</button>
                  </div>

                  <div className="p-6 bg-white/10 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">📊 Analytics de Participação</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Métricas avançadas sobre engajamento e qualidade da deliberação
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Diversidade de Opiniões</span>
                        <span className="font-bold text-purple-600">Alto</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Qualidade dos Argumentos</span>
                        <span className="font-bold text-blue-600">4.2/5</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Respeitabilidade</span>
                        <span className="font-bold text-green-600">94%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Mudança de Opinião</span>
                        <span className="font-bold text-orange-600">23%</span>
                      </div>
                    </div>
                    <button className="btn-glass mt-4">📈 Ver Dashboard Completo</button>
                  </div>
                </div>
              </div>

              {/* Create New Deliberation */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">➕ Criar Nova Deliberação</h2>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Título da Deliberação</label>
                      <input
                        type="text"
                        className="input-glass"
                        placeholder="Ex: Política Municipal de Reciclagem"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Categoria</label>
                      <select className="input-glass">
                        <option>Meio Ambiente</option>
                        <option>Educação</option>
                        <option>Saúde</option>
                        <option>Infraestrutura</option>
                        <option>Segurança</option>
                        <option>Cultura</option>
                        <option>Esporte</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Descrição e Contexto</label>
                    <textarea
                      className="input-glass h-32"
                      placeholder="Descreva o tema da deliberação, contexto e objetivos..."
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Duração</label>
                      <select className="input-glass">
                        <option>1 semana</option>
                        <option>2 semanas</option>
                        <option>1 mês</option>
                        <option>2 meses</option>
                        <option>Personalizado</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Tipo de Deliberação</label>
                      <select className="input-glass">
                        <option>Consulta Pública</option>
                        <option>Deliberação Argumentativa</option>
                        <option>Construção de Consenso</option>
                        <option>Votação Gradual</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Público-Alvo</label>
                      <select className="input-glass">
                        <option>Todos os Cidadãos</option>
                        <option>Moradores Específicos</option>
                        <option>Grupo de Interesse</option>
                        <option>Especialistas</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button className="btn-glass-primary flex-1">🚀 Criar Deliberação</button>
                    <button className="btn-glass">💾 Salvar Rascunho</button>
                    <button className="btn-glass">👁️ Pré-visualizar</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Participation Stats */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">📊 Estatísticas</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">847</div>
                    <div className="text-sm text-gray-600">Participantes Ativos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">23</div>
                    <div className="text-sm text-gray-600">Deliberações Ativas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">156</div>
                    <div className="text-sm text-gray-600">Consensos Alcançados</div>
                  </div>
                </div>
              </div>

              {/* My Deliberations */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">🏛️ Minhas Deliberações</h3>
                <div className="space-y-3">
                  <div className="p-2 bg-white/10 rounded text-sm">
                    <div className="font-semibold">Plano Diretor</div>
                    <div className="text-xs text-gray-600">Participando • 23 contribuições</div>
                  </div>
                  <div className="p-2 bg-white/10 rounded text-sm">
                    <div className="font-semibold">Mobilidade Urbana</div>
                    <div className="text-xs text-gray-600">Moderando • 45 participantes</div>
                  </div>
                  <div className="p-2 bg-white/10 rounded text-sm">
                    <div className="font-semibold">Parques Públicos</div>
                    <div className="text-xs text-gray-600">Observando • 8 votos</div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">⚡ Ações Rápidas</h3>
                <div className="space-y-2">
                  <button className="btn-glass w-full text-sm">➕ Nova Deliberação</button>
                  <button className="btn-glass w-full text-sm">👥 Convidar Participantes</button>
                  <button className="btn-glass w-full text-sm">📊 Relatório Participação</button>
                  <button className="btn-glass w-full text-sm">⚙️ Configurações</button>
                </div>
              </div>

              {/* Deliberation Quality */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">⭐ Qualidade</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Diversidade</span>
                    <span className="font-bold text-green-600">Alto</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Respeitabilidade</span>
                    <span className="font-bold text-blue-600">94%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Informação</span>
                    <span className="font-bold text-purple-600">4.3/5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Inclusão</span>
                    <span className="font-bold text-orange-600">87%</span>
                  </div>
                </div>
              </div>

              {/* Trending Topics */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">🔥 Tópicos em Alta</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">#MobilidadeUrbana</span>
                    <span className="text-xs text-gray-500">234 menções</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">#MeioAmbiente</span>
                    <span className="text-xs text-gray-500">189 menções</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">#SegurançaPública</span>
                    <span className="text-xs text-gray-500">156 menções</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">#EducaçãoInfantil</span>
                    <span className="text-xs text-gray-500">134 menções</span>
                  </div>
                </div>
              </div>

              {/* Best Practices */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">💡 Boas Práticas</h3>
                <div className="text-sm space-y-2">
                  <div className="p-2 bg-blue-100 rounded">
                    <div className="font-semibold text-blue-800">Defina objetivos claros</div>
                    <div className="text-xs text-blue-600">Estabeleça metas específicas para a deliberação</div>
                  </div>
                  <div className="p-2 bg-green-100 rounded">
                    <div className="font-semibold text-green-800">Facilite a participação</div>
                    <div className="text-xs text-green-600">Use linguagem acessível e ferramentas intuitivas</div>
                  </div>
                  <div className="p-2 bg-purple-100 rounded">
                    <div className="font-semibold text-purple-800">Modere ativamente</div>
                    <div className="text-xs text-purple-600">Mantenha discussões respeitosas e produtivas</div>
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