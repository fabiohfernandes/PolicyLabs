import React from 'react';
n<div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
import Head from 'next/head';
import Link from 'next/link';

export default function DigitalTwinPage() {
  return (
    <>
      <Head>
        <title>Gêmeo Digital - PolicyLabs APSS</title>
        <meta name="description" content="Simulação 3D da cidade com cidadãos virtuais" />
      </Head>

      {/* Header Navigation */}
      <nav className="card-glass fixed top-0 w-full z-50 px-6 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="PolicyLabs" className="h-8 w-8" />
            <span className="text-xl font-bold">PolicyLabs APSS</span>
          </Link>

          <div className="flex items-center space-x-4">
            <span className="text-sm">Gêmeo Digital</span>
            <Link href="/dashboard" className="btn-glass">← Dashboard</Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">🏙️ Gêmeo Digital da Cidade</h1>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main 3D View */}
            <div className="lg:col-span-3">
              <div className="card-glass p-8 mb-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Visualização 3D</h2>
                  <div className="flex space-x-2">
                    <button className="btn-glass">🎥 Modo Drone</button>
                    <button className="btn-glass">📊 Dados</button>
                    <button className="btn-glass">▶️ Simular</button>
                  </div>
                </div>

                {/* 3D Viewer Placeholder */}
                <div className="bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg h-96 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">🏙️</div>
                    <h3 className="text-xl font-bold mb-2">Visualização 3D da Cidade</h3>
                    <p className="text-sm opacity-80">Modelo digital interativo com 127,453 cidadãos virtuais</p>
                    <button className="mt-4 bg-white/20 px-6 py-2 rounded-lg hover:bg-white/30 transition-all">
                      Iniciar Simulação
                    </button>
                  </div>
                </div>
              </div>

              {/* Simulation Controls */}
              <div className="card-glass p-6">
                <h3 className="text-xl font-bold mb-4">Controles de Simulação</h3>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Política a Testar</label>
                    <select className="w-full p-3 rounded-lg bg-white/20 border border-white/30">
                      <option>Nova Ciclovia Centro-Bairro</option>
                      <option>Programa Habitação Popular</option>
                      <option>Expansão Transporte Público</option>
                      <option>Revitalização Praça Central</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Período de Simulação</label>
                    <select className="w-full p-3 rounded-lg bg-white/20 border border-white/30">
                      <option>30 dias</option>
                      <option>6 meses</option>
                      <option>1 ano</option>
                      <option>5 anos</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Velocidade</label>
                    <select className="w-full p-3 rounded-lg bg-white/20 border border-white/30">
                      <option>Tempo Real</option>
                      <option>1 dia = 1 min</option>
                      <option>1 semana = 1 min</option>
                      <option>1 mês = 1 min</option>
                    </select>
                  </div>
                </div>

                <div className="mt-6 flex space-x-4">
                  <button className="btn-glass">▶️ Iniciar Simulação</button>
                  <button className="btn-glass">⏸️ Pausar</button>
                  <button className="btn-glass">⏹️ Reset</button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* City Stats */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">Estatísticas da Cidade</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>População Virtual</span>
                      <span className="font-bold">127,453</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm">
                      <span>Satisfação Geral</span>
                      <span className="font-bold text-green-600">76%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '76%'}}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm">
                      <span>Tráfego</span>
                      <span className="font-bold text-yellow-600">Moderado</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-yellow-600 h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm">
                      <span>Qualidade do Ar</span>
                      <span className="font-bold text-green-600">Boa</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Simulation Results */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">Resultados da Última Simulação</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-green-100 rounded-lg">
                    <div className="font-semibold text-green-800">Impacto Positivo</div>
                    <div className="text-sm text-green-600">+23% uso de transporte público</div>
                  </div>

                  <div className="p-4 bg-blue-100 rounded-lg">
                    <div className="font-semibold text-blue-800">Economia</div>
                    <div className="text-sm text-blue-600">R$ 340k economizados/ano</div>
                  </div>

                  <div className="p-4 bg-yellow-100 rounded-lg">
                    <div className="font-semibold text-yellow-800">Atenção</div>
                    <div className="text-sm text-yellow-600">Possível congestionamento na Rua A</div>
                  </div>
                </div>
              </div>

              {/* Citizen Feedback */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">Feedback dos Cidadãos Virtuais</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-white/10 rounded">
                    <div className="text-sm font-medium">Maria, 34 anos</div>
                    <div className="text-xs text-gray-600">"Adorei a nova ciclovia, agora vou de bike ao trabalho!"</div>
                    <div className="text-xs text-green-600">😊 Satisfeita</div>
                  </div>

                  <div className="p-3 bg-white/10 rounded">
                    <div className="text-sm font-medium">João, 28 anos</div>
                    <div className="text-xs text-gray-600">"O trânsito melhorou muito na minha rua."</div>
                    <div className="text-xs text-green-600">😊 Satisfeito</div>
                  </div>

                  <div className="p-3 bg-white/10 rounded">
                    <div className="text-sm font-medium">Ana, 45 anos</div>
                    <div className="text-xs text-gray-600">"Preocupada com a segurança na nova via."</div>
                    <div className="text-xs text-yellow-600">😐 Neutra</div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">Ações Rápidas</h3>
                <div className="space-y-2">
                  <button className="btn-glass w-full text-sm">📊 Gerar Relatório</button>
                  <button className="btn-glass w-full text-sm">📤 Exportar Dados</button>
                  <button className="btn-glass w-full text-sm">🎯 Cenário Personalizado</button>
                  <button className="btn-glass w-full text-sm">📹 Gravar Simulação</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
</div>
}