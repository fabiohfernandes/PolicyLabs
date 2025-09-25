import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function CitizenEngagementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Head>
        <title>Facebook das Necessidades - PolicyLabs APSS</title>
        <meta name="description" content="Plataforma de engajamento cidadão e democracia participativa" />
      </Head>

      {/* Header Navigation */}
      <nav className="card-glass fixed top-0 w-full z-50 px-6 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="PolicyLabs" className="h-8 w-8" />
            <span className="text-xl font-bold">PolicyLabs APSS</span>
          </Link>

          <div className="flex items-center space-x-4">
            <span className="text-sm">São Paulo - SP</span>
            <Link href="/citizen/profile" className="btn-glass">Meu Perfil</Link>
            <Link href="/citizen/notifications" className="btn-glass">🔔 3</Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">👥 Facebook das Necessidades</h1>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Feed */}
            <div className="lg:col-span-3 space-y-6">
              {/* Create Post */}
              <div className="card-glass p-6">
                <h2 className="text-xl font-bold mb-4">💭 Compartilhe uma necessidade da sua comunidade</h2>

                <div className="space-y-4">
                  <textarea
                    className="w-full p-4 rounded-lg bg-white/20 border border-white/30 h-24"
                    placeholder="O que sua comunidade precisa? Conte para a prefeitura..."
                  />

                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <button className="btn-glass text-sm">📷 Foto</button>
                      <button className="btn-glass text-sm">📍 Localização</button>
                      <button className="btn-glass text-sm">🏷️ Categoria</button>
                    </div>
                    <button className="btn-glass">Publicar</button>
                  </div>
                </div>
              </div>

              {/* Active Polls */}
              <div className="card-glass p-6">
                <h2 className="text-xl font-bold mb-4">🗳️ Votações Ativas</h2>

                <div className="space-y-4">
                  <div className="p-4 bg-white/10 rounded-lg">
                    <h3 className="font-semibold mb-3">Qual prioridade para o novo Posto de Saúde?</h3>

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between items-center p-2 bg-white/10 rounded cursor-pointer hover:bg-white/20">
                        <span>🏥 Atendimento 24h</span>
                        <span className="text-sm text-gray-600">67% (234 votos)</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-white/10 rounded cursor-pointer hover:bg-white/20">
                        <span>👶 Pediatria especializada</span>
                        <span className="text-sm text-gray-600">23% (81 votos)</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-white/10 rounded cursor-pointer hover:bg-white/20">
                        <span>🩺 Exames laboratoriais</span>
                        <span className="text-sm text-gray-600">10% (35 votos)</span>
                      </div>
                    </div>

                    <div className="flex justify-between text-sm text-gray-600">
                      <span>350 votos • Termina em 3 dias</span>
                      <Link href="/citizen/polls/1" className="text-blue-600 hover:underline">Ver detalhes</Link>
                    </div>
                  </div>

                  <div className="p-4 bg-white/10 rounded-lg">
                    <h3 className="font-semibold mb-3">Aprova a nova ciclovia na Av. Principal?</h3>

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between items-center p-2 bg-white/10 rounded cursor-pointer hover:bg-white/20">
                        <span>✅ Sim, aprovo</span>
                        <span className="text-sm text-gray-600">78% (1,247 votos)</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-white/10 rounded cursor-pointer hover:bg-white/20">
                        <span>❌ Não aprovo</span>
                        <span className="text-sm text-gray-600">22% (352 votos)</span>
                      </div>
                    </div>

                    <div className="flex justify-between text-sm text-gray-600">
                      <span>1,599 votos • Termina em 1 dia</span>
                      <Link href="/citizen/polls/2" className="text-blue-600 hover:underline">Ver detalhes</Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Community Posts */}
              <div className="space-y-6">
                <div className="card-glass p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">MC</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="font-semibold">Maria da Silva</span>
                        <span className="text-sm text-gray-600">• Bairro Centro • há 2 horas</span>
                      </div>
                      <p className="text-gray-700 mb-4">
                        A iluminação da Rua das Flores está péssima! Já aconteceram 3 assaltos este mês.
                        Precisamos urgente de melhor iluminação para a segurança das famílias. 💡🚨
                      </p>
                      <div className="flex items-center space-x-4 text-sm">
                        <button className="flex items-center space-x-1 text-blue-600 hover:bg-blue-100 px-2 py-1 rounded">
                          <span>👍</span>
                          <span>47 apoios</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-600 hover:bg-gray-100 px-2 py-1 rounded">
                          <span>💬</span>
                          <span>12 comentários</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-600 hover:bg-gray-100 px-2 py-1 rounded">
                          <span>📤</span>
                          <span>Compartilhar</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-glass p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">JS</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="font-semibold">João Santos</span>
                        <span className="text-sm text-gray-600">• Bairro Sul • há 4 horas</span>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Que tal um programa de compostagem comunitária? Vi funcionar muito bem em outras cidades.
                        Reduz lixo orgânico e gera adubo para hortas urbanas! 🌱♻️
                      </p>
                      <div className="mb-4">
                        <img src="/api/placeholder/400/200" alt="Exemplo de compostagem" className="rounded-lg w-full max-w-sm" />
                      </div>
                      <div className="flex items-center space-x-4 text-sm">
                        <button className="flex items-center space-x-1 text-blue-600 hover:bg-blue-100 px-2 py-1 rounded">
                          <span>👍</span>
                          <span>23 apoios</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-600 hover:bg-gray-100 px-2 py-1 rounded">
                          <span>💬</span>
                          <span>8 comentários</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-600 hover:bg-gray-100 px-2 py-1 rounded">
                          <span>📤</span>
                          <span>Compartilhar</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-glass p-6 border-l-4 border-blue-500">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">PM</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="font-semibold">Prefeitura Municipal</span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-bold">OFICIAL</span>
                        <span className="text-sm text-gray-600">• há 6 horas</span>
                      </div>
                      <p className="text-gray-700 mb-4">
                        📢 IMPORTANTE: Iniciamos a consulta pública sobre o novo Plano Diretor da cidade.
                        Sua opinião é fundamental! Participe da audiência pública no dia 25/09 às 19h no Centro de Convenções.
                      </p>
                      <div className="flex items-center space-x-4 text-sm">
                        <button className="flex items-center space-x-1 text-blue-600 hover:bg-blue-100 px-2 py-1 rounded">
                          <span>👍</span>
                          <span>156 apoios</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-600 hover:bg-gray-100 px-2 py-1 rounded">
                          <span>💬</span>
                          <span>34 comentários</span>
                        </button>
                        <Link href="/citizen/public-hearing" className="flex items-center space-x-1 text-green-600 hover:bg-green-100 px-2 py-1 rounded">
                          <span>📅</span>
                          <span>Confirmar Presença</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* User Profile */}
              <div className="card-glass p-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">AC</span>
                  </div>
                  <h3 className="font-semibold">Ana Cidadã</h3>
                  <p className="text-sm text-gray-600">Bairro Centro</p>

                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Nível de Participação</span>
                      <span className="font-bold">Ativo</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Postagens</span>
                      <span className="font-bold">12</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Votos</span>
                      <span className="font-bold">47</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trending Topics */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">🔥 Tópicos em Alta</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">#IluminaçãoPública</span>
                    <span className="text-xs text-gray-500">156 posts</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">#NovaEscola</span>
                    <span className="text-xs text-gray-500">89 posts</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">#Ciclovia</span>
                    <span className="text-xs text-gray-500">67 posts</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">#MeioAmbiente</span>
                    <span className="text-xs text-gray-500">45 posts</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">#Segurança</span>
                    <span className="text-xs text-gray-500">34 posts</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">⚡ Ações Rápidas</h3>
                <div className="space-y-2">
                  <Link href="/citizen/report" className="btn-glass w-full text-sm">🚨 Denunciar Problema</Link>
                  <Link href="/citizen/suggestion" className="btn-glass w-full text-sm">💡 Enviar Sugestão</Link>
                  <Link href="/citizen/projects" className="btn-glass w-full text-sm">📋 Acompanhar Projetos</Link>
                  <Link href="/citizen/events" className="btn-glass w-full text-sm">📅 Eventos Públicos</Link>
                </div>
              </div>

              {/* Satisfaction */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">😊 Satisfação Geral</h3>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">76%</div>
                  <div className="text-sm text-gray-600 mb-4">Cidadãos satisfeitos</div>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span>Educação</span>
                      <span className="font-bold">82%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saúde</span>
                      <span className="font-bold">71%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Segurança</span>
                      <span className="font-bold">68%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Infraestrutura</span>
                      <span className="font-bold">74%</span>
                    </div>
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