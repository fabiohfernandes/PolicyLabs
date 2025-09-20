import React from 'react';
n<div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
import Head from 'next/head';
import Link from 'next/link';

export default function BudgetPage() {
  return (
    <>
      <Head>
        <title>Orçamento Municipal - PolicyLabs APSS</title>
        <meta name="description" content="Gestão transparente do orçamento público" />
      </Head>

      {/* Header Navigation */}
      <nav className="card-glass fixed top-0 w-full z-50 px-6 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="PolicyLabs" className="h-8 w-8" />
            <span className="text-xl font-bold">PolicyLabs APSS</span>
          </Link>

          <div className="flex items-center space-x-4">
            <span className="text-sm">Orçamento Municipal</span>
            <Link href="/dashboard" className="btn-glass">← Dashboard</Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">💰 Orçamento Municipal 2025</h1>

          {/* Budget Overview */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="card-glass p-6 text-center">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">R$ 45.2M</h3>
              <p className="text-gray-600">Orçamento Total</p>
            </div>
            <div className="card-glass p-6 text-center">
              <h3 className="text-2xl font-bold text-green-600 mb-2">R$ 32.1M</h3>
              <p className="text-gray-600">Executado</p>
            </div>
            <div className="card-glass p-6 text-center">
              <h3 className="text-2xl font-bold text-yellow-600 mb-2">R$ 13.1M</h3>
              <p className="text-gray-600">Disponível</p>
            </div>
            <div className="card-glass p-6 text-center">
              <h3 className="text-2xl font-bold text-primary mb-2">71%</h3>
              <p className="text-gray-600">Execução</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Budget */}
            <div className="lg:col-span-2 space-y-8">
              {/* Budget by Department */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">Orçamento por Secretaria</h2>

                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">🏫 Educação</span>
                      <span className="text-sm text-gray-600">R$ 18.1M / R$ 20.0M</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-blue-600 h-3 rounded-full" style={{width: '90%'}}></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">90% executado</div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">🏥 Saúde</span>
                      <span className="text-sm text-gray-600">R$ 11.2M / R$ 15.0M</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-green-600 h-3 rounded-full" style={{width: '75%'}}></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">75% executado</div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">🏗️ Infraestrutura</span>
                      <span className="text-sm text-gray-600">R$ 2.8M / R$ 5.0M</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-orange-600 h-3 rounded-full" style={{width: '56%'}}></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">56% executado</div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">👮 Segurança</span>
                      <span className="text-sm text-gray-600">R$ 0M / R$ 3.0M</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-red-600 h-3 rounded-full" style={{width: '0%'}}></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">0% executado</div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">🌳 Meio Ambiente</span>
                      <span className="text-sm text-gray-600">R$ 0M / R$ 2.2M</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-green-600 h-3 rounded-full" style={{width: '0%'}}></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">0% executado</div>
                  </div>
                </div>
              </div>

              {/* Recent Transactions */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold mb-6">Movimentações Recentes</h2>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                    <div>
                      <div className="font-semibold">Pagamento Fornecedor - Material Escolar</div>
                      <div className="text-sm text-gray-600">Secretaria de Educação • 15/09/2025</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-red-600">-R$ 125.450</div>
                      <div className="text-xs text-gray-500">Despesa</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                    <div>
                      <div className="font-semibold">Repasse Federal - SUS</div>
                      <div className="text-sm text-gray-600">Ministério da Saúde • 14/09/2025</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-green-600">+R$ 280.000</div>
                      <div className="text-xs text-gray-500">Receita</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                    <div>
                      <div className="font-semibold">Folha de Pagamento - Setembro</div>
                      <div className="text-sm text-gray-600">Recursos Humanos • 13/09/2025</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-red-600">-R$ 2.450.000</div>
                      <div className="text-xs text-gray-500">Despesa</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                    <div>
                      <div className="font-semibold">Arrecadação IPTU - Setembro</div>
                      <div className="text-sm text-gray-600">Secretaria de Finanças • 12/09/2025</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-green-600">+R$ 1.875.200</div>
                      <div className="text-xs text-gray-500">Receita</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <button className="btn-glass">Ver Todas as Movimentações</button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Revenue Sources */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">Fontes de Receita</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm">IPTU</span>
                    <span className="font-bold">R$ 15.2M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">ISS</span>
                    <span className="font-bold">R$ 8.7M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">FPM</span>
                    <span className="font-bold">R$ 12.3M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">ICMS</span>
                    <span className="font-bold">R$ 6.8M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Outros</span>
                    <span className="font-bold">R$ 2.2M</span>
                  </div>
                </div>
              </div>

              {/* Budget Alerts */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">Alertas do Orçamento</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-red-100 text-red-800 rounded-lg">
                    <div className="font-semibold text-sm">⚠️ Atenção</div>
                    <div className="text-xs">Educação próxima do limite (90%)</div>
                  </div>

                  <div className="p-3 bg-yellow-100 text-yellow-800 rounded-lg">
                    <div className="font-semibold text-sm">📊 Análise</div>
                    <div className="text-xs">Segurança sem execução no trimestre</div>
                  </div>

                  <div className="p-3 bg-green-100 text-green-800 rounded-lg">
                    <div className="font-semibold text-sm">✅ Meta</div>
                    <div className="text-xs">IPTU arrecadação 105% da meta</div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">Ações Rápidas</h3>
                <div className="space-y-2">
                  <button className="btn-glass w-full text-sm">📊 Relatório Mensal</button>
                  <button className="btn-glass w-full text-sm">📈 Projeção Anual</button>
                  <button className="btn-glass w-full text-sm">💳 Nova Despesa</button>
                  <button className="btn-glass w-full text-sm">🔍 Auditoria</button>
                  <button className="btn-glass w-full text-sm">📤 Exportar Dados</button>
                </div>
              </div>

              {/* Transparency */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">Transparência</h3>
                <div className="space-y-3">
                  <div className="text-center">
                    <div className="text-xl font-bold text-blue-600">Portal</div>
                    <div className="text-sm text-gray-600">da Transparência</div>
                    <button className="mt-2 btn-glass w-full text-xs">Acessar Portal</button>
                  </div>

                  <div className="text-sm text-gray-600">
                    <div>• Receitas e Despesas</div>
                    <div>• Licitações</div>
                    <div>• Contratos</div>
                    <div>• Folha de Pagamento</div>
                  </div>
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