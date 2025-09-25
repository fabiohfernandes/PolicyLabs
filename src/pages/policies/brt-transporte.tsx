import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface User {
  id: string;
  email: string;
  full_name: string;
  role: string;
  is_verified: boolean;
  two_factor_enabled: boolean;
  created_at: string;
}

export default function BRTTransportePage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
    } else {
      router.push('/login');
      return;
    }
    setIsLoading(false);
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <>
      <Head>
        <title>BRT (Rede Integrada de Transporte) | PolicyLabs APSS</title>
        <meta name="description" content="Sistema de transporte público com prioridade real ao ônibus para ganhar velocidade e confiabilidade" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Standard Navbar */}
        <header className="card-glass mx-6 mt-4 px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="flex items-center space-x-2">
                <img src="/logo.svg" alt="PolicyLabs" className="h-8 w-8" />
                <span className="text-xl font-bold">PolicyLabs</span>
              </Link>
              <span className="text-sm text-gray-600">
                Olá, {user?.full_name}
              </span>
            </div>

            <div className="flex items-center">
              <h1 className="text-xl font-semibold">BRT Transporte</h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">
                  {new Date().toLocaleString('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
              </div>
              <Link href="/dashboard" className="btn-glass text-sm">
                Voltar
              </Link>
            </div>
          </div>
        </header>

        <main className="mx-6 mt-6 pb-8">
          <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">

              {/* Overview */}
              <div className="card-glass p-6">
                <h2 className="text-2xl font-bold mb-4">📋 Visão Geral</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-lg mb-4">
                    <strong>Princípio central:</strong> Dar prioridade real ao ônibus para ganhar velocidade e confiabilidade.
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-3">Elementos-chave:</h3>
                  <ul className="space-y-2">
                    <li>• <strong>Corredores exclusivos</strong> nas avenidas estruturais (menos interferência do carro)</li>
                    <li>• <strong>Estações de embarque em nível</strong> e pré-pagamento (embarque rápido; portas múltiplas)</li>
                    <li>• <strong>Integração física e tarifária:</strong> linhas troncais nos eixos e alimentadoras nos bairros, com uma tarifa para a viagem completa</li>
                    <li>• <strong>Desenho de rede hierárquico:</strong> troncais, interbairros e alimentadoras eliminam "vai e volta" ao centro</li>
                    <li>• <strong>Gestão por desempenho:</strong> monitoramento de pontualidade, velocidade, ocupação e custos</li>
                    <li>• <strong>Prioridade semafórica/operacional</strong> (onda verde, ultrapassagem em paradas)</li>
                  </ul>

                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Por que funciona:</strong> Menos atrito no embarque, menos conflito com o tráfego geral e um sistema integrado (não um conjunto de linhas isoladas).
                    </p>
                  </div>
                </div>
              </div>

              {/* When to Implement */}
              <div className="card-glass p-6">
                <h2 className="text-2xl font-bold mb-4">❓ Quando Faz Sentido</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">✅ Indicado para:</h4>
                    <ul className="text-sm text-green-600 space-y-1">
                      <li>• Corredor(es) com demanda concentrada</li>
                      <li>• Eixos escola–centro–bairro/saúde</li>
                      <li>• Tempo perdido em congestionamentos</li>
                      <li>• Objetivo de reduzir custo por passageiro</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Para demanda baixa:</h4>
                    <ul className="text-sm text-yellow-600 space-y-1">
                      <li>• Opte por BRT leve</li>
                      <li>• Faixa exclusiva + estações simples</li>
                      <li>• Integração tarifária</li>
                      <li>• Evite obras pesadas</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Implementation Phases */}
              <div className="card-glass p-6">
                <h2 className="text-2xl font-bold mb-4">🎯 Fases de Implementação (12–18 meses)</h2>

                <div className="space-y-6">
                  {/* Phase 0 */}
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="text-lg font-semibold mb-2">Fase 0 – Diagnóstico (0–3 meses)</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Origem–Destino simplificado; medir velocidade média, carga por faixa horária, pontos de atrito</li>
                      <li>• Escolher 1–2 eixos (ex.: 4–8 km cada) com pior desempenho</li>
                    </ul>
                  </div>

                  {/* Phase 1 */}
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="text-lg font-semibold mb-2">Fase 1 – Projeto Operacional (2–5 meses)</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Definir troncal (linha direta no eixo) + 2–4 alimentadoras circulares por bairro</li>
                      <li>• Fixar paradas a cada 400–600 m (menos paradas = mais velocidade)</li>
                      <li>• Desenhar faixa exclusiva (pintura + tachões/segregadores) onde couber</li>
                      <li>• Padronizar frota (portas largas, baixo piso, validação em todas as portas)</li>
                      <li>• Especificar prioridade semafórica em 5–10 cruzamentos críticos</li>
                    </ul>
                  </div>

                  {/* Phase 2 */}
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h3 className="text-lg font-semibold mb-2">Fase 2 – Infraestrutura Mínima (4–10 meses)</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Estações simples com plataforma em nível com o ônibus (baixo piso)</li>
                      <li>• Abrigo, iluminação, validador externo (pré-pagamento/QR) e informação em tempo real</li>
                      <li>• Readequar calçadas/acessos e travessias seguras (acalmamento de tráfego)</li>
                      <li>• Implantar centro de controle simplificado (CCO) com GPS/AVL para monitorar headway e pontualidade</li>
                    </ul>
                  </div>

                  {/* Phase 3 */}
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="text-lg font-semibold mb-2">Fase 3 – Integração Tarifária e Bilhetagem (6–12 meses)</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Janela de integração temporal (ex.: 60–90 min) entre troncal e alimentadoras</li>
                      <li>• Bilhetagem com cartão e QR no celular, recarga digital; antifraude básico</li>
                    </ul>
                  </div>

                  {/* Phase 4 */}
                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="text-lg font-semibold mb-2">Fase 4 – Operação Assistida e Ajustes (9–18 meses)</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Piloto de 60–90 dias no corredor 1 (metas de velocidade e regularidade)</li>
                      <li>• Ajustar intervalos, pontos de ultrapassagem e sinalização</li>
                      <li>• Campanha de comunicação e educação do trânsito</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="card-glass p-6">
                <h2 className="text-2xl font-bold mb-4">⚙️ Especificações Técnicas</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Infraestrutura</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Faixa do ônibus:</strong> 3,0–3,2 m</li>
                      <li>• <strong>Paradas:</strong> A cada 400–600 m</li>
                      <li>• <strong>Plataforma:</strong> Em nível com o piso do ônibus</li>
                      <li>• <strong>Acessibilidade:</strong> Braile/piso tátil</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Operação</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Embarque:</strong> Fora do ônibus, todas as portas</li>
                      <li>• <strong>Tempo de parada:</strong> ≤20 segundos</li>
                      <li>• <strong>Prioridade semafórica:</strong> GPS/loop virtual</li>
                      <li>• <strong>Informação:</strong> Headway/tempo em painel</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* KPIs */}
              <div className="card-glass p-6">
                <h2 className="text-2xl font-bold mb-4">📈 KPIs de Sucesso</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800">Velocidade Média</h4>
                    <p className="text-sm text-blue-600">Meta: +20–40% vs. linha antiga</p>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800">Regularidade</h4>
                    <p className="text-sm text-green-600">Viagens cumpridas >98%</p>
                  </div>

                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-yellow-800">Tempo Porta-a-Porta</h4>
                    <p className="text-sm text-yellow-600">Amostras reais de usuários</p>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800">Taxa de Ocupação</h4>
                    <p className="text-sm text-purple-600">Evitar lotação e "viagens vazias"</p>
                  </div>

                  <div className="p-4 bg-red-50 rounded-lg">
                    <h4 className="font-semibold text-red-800">Satisfação</h4>
                    <p className="text-sm text-red-600">NPS > 50 após 90 dias</p>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800">Segurança Viária</h4>
                    <p className="text-sm text-gray-600">Redução de sinistros no corredor</p>
                  </div>
                </div>
              </div>

              {/* Sample Network */}
              <div className="card-glass p-6">
                <h2 className="text-2xl font-bold mb-4">🗺️ Rede-tipo para Cidade Pequena</h2>

                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Linha Troncal T1</h4>
                    <p className="text-sm text-blue-600">
                      Eixo Bairro A — Centro — Hospital/IF/Universidade — Bairro B (6–10 km)
                    </p>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Alimentadoras</h4>
                    <p className="text-sm text-green-600">
                      3–5 linhas circulares de bairro (raio 2–4 km) sincronizadas com a troncal
                    </p>
                  </div>

                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">Interbairros (opcional)</h4>
                    <p className="text-sm text-yellow-600">
                      Anel conectando bairros sem passar no centro (pico escolar/saúde)
                    </p>
                  </div>
                </div>
              </div>

              {/* Costs */}
              <div className="card-glass p-6">
                <h2 className="text-2xl font-bold mb-4">💰 Custos e Priorização</h2>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-green-800">Faixa exclusiva pintada/segregada</h4>
                      <p className="text-sm text-green-600">Baixo custo e impacto imediato</p>
                    </div>
                    <span className="text-green-600 font-bold">💚💚💚</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-yellow-800">Estações simples em nível</h4>
                      <p className="text-sm text-yellow-600">Custo moderado; maior ganho de velocidade</p>
                    </div>
                    <span className="text-yellow-600 font-bold">💚💚</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-blue-800">Prioridade semafórica e CCO</h4>
                      <p className="text-sm text-blue-600">Baixo a médio; alto retorno por confiabilidade</p>
                    </div>
                    <span className="text-blue-600 font-bold">💚💚</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-purple-800">Frota padronizada</h4>
                      <p className="text-sm text-purple-600">Diluir via contrato (capex amortizado por km)</p>
                    </div>
                    <span className="text-purple-600 font-bold">💚</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Regra de Ouro</h4>
                  <p className="text-sm text-orange-600">
                    Entregar rápido benefício visível (faixas + estações + prioridade) e evoluir para soluções mais robustas conforme a demanda crescer.
                  </p>
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <div className="space-y-6">

              {/* Quick Actions */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">🚀 Ações Rápidas</h3>
                <div className="space-y-3">
                  <button className="w-full btn-glass-primary py-2 px-4 rounded-lg">
                    💬 Simular com IA
                  </button>
                  <button className="w-full btn-glass py-2 px-4 rounded-lg">
                    📊 Gerar Relatório
                  </button>
                  <button className="w-full btn-glass py-2 px-4 rounded-lg">
                    📋 Criar Projeto
                  </button>
                </div>
              </div>

              {/* Key Stats */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">📈 Estatísticas</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">PolicyDNA™</span>
                    <span className="font-bold text-green-600">91%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Implementações</span>
                    <span className="font-bold">89</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Taxa de Sucesso</span>
                    <span className="font-bold text-green-600">82%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Passageiros/dia</span>
                    <span className="font-bold">2.5M+</span>
                  </div>
                </div>
              </div>

              {/* Checklist */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">✅ Checklist "Pronto para Operar"</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded"/>
                    <span className="text-sm">Corredor demarcado/segregado</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded"/>
                    <span className="text-sm">Estações com plataforma em nível</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded"/>
                    <span className="text-sm">Frota com portas largas</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded"/>
                    <span className="text-sm">GTFS/GTFS-RT publicado</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded"/>
                    <span className="text-sm">Integração tarifária ativa</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded"/>
                    <span className="text-sm">Prioridade semafórica ligada</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded"/>
                    <span className="text-sm">Plano de comunicação</span>
                  </div>
                </div>
              </div>

              {/* Risks */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">⚠️ Riscos Comuns</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-red-50 rounded-lg">
                    <h4 className="text-sm font-semibold text-red-800">Perda de faixa exclusiva</h4>
                    <p className="text-xs text-red-600">Segregação física + fiscalização eletrônica</p>
                  </div>

                  <div className="p-3 bg-yellow-50 rounded-lg">
                    <h4 className="text-sm font-semibold text-yellow-800">Validação lenta</h4>
                    <p className="text-xs text-yellow-600">Mais validadores, QR offline</p>
                  </div>

                  <div className="p-3 bg-blue-50 rounded-lg">
                    <h4 className="text-sm font-semibold text-blue-800">Headway irregular</h4>
                    <p className="text-xs text-blue-600">Controle por intervalo + bolsões</p>
                  </div>

                  <div className="p-3 bg-purple-50 rounded-lg">
                    <h4 className="text-sm font-semibold text-purple-800">Comunicação fraca</h4>
                    <p className="text-xs text-purple-600">Campanha + placas + app com tempo real</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          </div>
        </main>
      </div>
    </>
  );
}