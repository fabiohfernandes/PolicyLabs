import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function FicaVivoPage() {
  return (
    <>
      <Head>
        <title>Fica Vivo! | PolicyLabs APSS</title>
        <meta name="description" content="Programa de prevenção de violência e redução de homicídios de jovens (12-24 anos)" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Navigation */}
        <nav className="card-glass border-b border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-4">
                <Link href="/dashboard" className="btn-glass px-4 py-2 rounded-lg text-sm">
                  ← Voltar
                </Link>
                <div>
                  <h1 className="text-xl font-bold">🛡️ Fica Vivo!</h1>
                  <p className="text-sm text-gray-600">Política de Prevenção à Violência</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                  Prioridade Alta
                </span>
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                  PolicyDNA™ 94%
                </span>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">

              {/* Overview */}
              <div className="card-glass p-6">
                <h2 className="text-2xl font-bold mb-4">📋 Visão Geral</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-lg mb-4">
                    <strong>Finalidade:</strong> Reduzir homicídios de adolescentes e jovens (12–24 anos) em territórios com alta concentração de violência.
                  </p>
                  <p className="mb-4">
                    Atua via prevenção social focalizada + proteção de grupos em risco + mediação de conflitos, articulada com a rede de segurança e políticas sociais.
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-3">Como Opera:</h3>
                  <p>
                    Criação de um Núcleo de Referência/Unidade de Prevenção no território, com oficinas regulares (esporte, cultura, tecnologia, trabalho), acompanhamento de jovens com maior exposição a riscos, mapeamento de conflitos e acionamento rápido de serviços (CRAS/CREAS, escolas, saúde, MP, polícia).
                  </p>
                </div>
              </div>

              {/* Evidence */}
              <div className="card-glass p-6">
                <h2 className="text-2xl font-bold mb-4">📊 Evidências de Impacto</h2>
                <div className="prose prose-gray max-w-none">
                  <p>
                    Estudos quasi-experimentais e avaliações independentes associam o programa à queda das taxas de homicídio nas áreas atendidas (resultados significativos em Belo Horizonte e RM). Há registros de reduções locais e séries históricas indicando efeito protetivo nos primeiros anos de implantação.
                  </p>

                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Alcance/escala:</strong> Documentos oficiais relatam dezenas de milhares de jovens atendidos e atualizações sobre reduções de homicídio em áreas cobertas.
                    </p>
                  </div>
                </div>
              </div>

              {/* Implementation Guide */}
              <div className="card-glass p-6">
                <h2 className="text-2xl font-bold mb-4">🎯 Guia de Implementação</h2>

                <div className="space-y-6">
                  {/* Phase 0 */}
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="text-lg font-semibold mb-2">0) Princípios de Desenho</h3>
                    <ul className="space-y-2 text-sm">
                      <li><strong>Foco territorial:</strong> Escolher 1–2 bairros com maior concentração de homicídios de jovens (últimos 24–36 meses)</li>
                      <li><strong>Seleção focalizada:</strong> Priorizar jovens em risco (histórico de vitimização/ameaça, evasão escolar, vínculos com grupos rivais)</li>
                      <li><strong>Integração de rede:</strong> Formalizar rotas com escola–saúde–assistência–polícia–MP–Conselho Tutelar</li>
                    </ul>
                  </div>

                  {/* Phase 1 */}
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="text-lg font-semibold mb-2">1) Diagnóstico Rápido (2–4 semanas)</h3>
                    <ul className="space-y-2 text-sm">
                      <li><strong>Levantamento de dados:</strong> Homicídios (12–24 anos), tentativas, lesões por arma de fogo, horários/locais recorrentes, conflitos ativos</li>
                      <li><strong>Mapeamento social:</strong> Escolas com maior evasão, pontos de risco, lideranças, serviços existentes</li>
                      <li><strong>Produto:</strong> Mapa de Risco do Bairro + lista nominal (sigilosa) de jovens com prioridade de atendimento</li>
                    </ul>
                  </div>

                  {/* Phase 2 */}
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h3 className="text-lg font-semibold mb-2">2) Núcleo Local e Pactos</h3>
                    <ul className="space-y-2 text-sm">
                      <li>Instalar o "Núcleo" em equipamento público (CRAS, escola, centro comunitário) com atendimento em horário estendido (ex.: 9h–21h)</li>
                      <li>Termos de cooperação com SMS, SME, assistência, Polícia Militar/Civil, MP e entidades locais</li>
                    </ul>
                  </div>

                  {/* Phase 3 */}
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="text-lg font-semibold mb-2">3) Equipe Mínima (por bairro prioritário)</h3>
                    <ul className="space-y-2 text-sm">
                      <li>1 Coordenador(a) do Núcleo (gestão/monitoramento)</li>
                      <li>2 Técnicos(as) de referência (psicologia/serviço social/educação)</li>
                      <li>6–10 Oficineiros(as)/Monitores(as) (esporte, música, audiovisual, informática/robótica, grafite, reforço escolar, empregabilidade)</li>
                      <li>1 Articulador(a) de rede/Mediação (ponte com escolas, saúde, polícia e famílias)</li>
                      <li>1 Ponto focal de segurança pública (PM/PC) para resposta rápida</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* KPIs */}
              <div className="card-glass p-6">
                <h2 className="text-2xl font-bold mb-4">📈 Indicadores de Sucesso (KPIs)</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800">KPI 1</h4>
                    <p className="text-sm text-blue-600">Variação da taxa de homicídios (12–24) no(s) bairro(s)-alvo vs. média municipal</p>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800">KPI 2</h4>
                    <p className="text-sm text-green-600">Exposição a violência (tentativas, ameaças, lesões)</p>
                  </div>

                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-yellow-800">KPI 3</h4>
                    <p className="text-sm text-yellow-600">Adesão (jovens com ≥75% de frequência/mês)</p>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800">KPI 4</h4>
                    <p className="text-sm text-purple-600">Vínculo escolar (matrícula/retorno e evasão)</p>
                  </div>

                  <div className="p-4 bg-red-50 rounded-lg">
                    <h4 className="font-semibold text-red-800">KPI 5</h4>
                    <p className="text-sm text-red-600">Episódios de retaliação evitados (registros de mediação)</p>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Rotina:</strong> Painel mensal + revisão trimestral com rede
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <div className="card-glass p-6">
                <h2 className="text-2xl font-bold mb-4">⏰ Cronograma Rápido</h2>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-semibold">Mês 1</h4>
                      <p className="text-sm text-gray-600">Diagnóstico + pactos + contratação</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-semibold">Mês 2</h4>
                      <p className="text-sm text-gray-600">Inauguração do Núcleo + início das oficinas (turmas pilotos) + primeira rodada de mediação</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-semibold">Mês 3</h4>
                      <p className="text-sm text-gray-600">Painel de indicadores e ajuste fino (oferta/horários/rotas)</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4-12</div>
                    <div>
                      <h4 className="font-semibold">Mês 4–12</h4>
                      <p className="text-sm text-gray-600">Operação contínua + revisões trimestrais + relatório anual</p>
                    </div>
                  </div>
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
                    <span className="font-bold text-green-600">94%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Implementações</span>
                    <span className="font-bold">1.247</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Taxa de Sucesso</span>
                    <span className="font-bold text-green-600">89%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Jovens Impactados</span>
                    <span className="font-bold">50k+</span>
                  </div>
                </div>
              </div>

              {/* Tips */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">💡 Dicas de Ouro</h3>
                <div className="space-y-4">
                  <div className="p-3 bg-yellow-50 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      <strong>Comece pequeno:</strong> 1 bairro, 80–120 jovens priorizados, oferta densa e regular
                    </p>
                  </div>

                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Dados guiam decisões:</strong> Reuniões mensais com polícia/saúde/escola para "mapa vivo" de conflitos
                    </p>
                  </div>

                  <div className="p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-800">
                      <strong>Capacite oficineiros:</strong> Selecione perfis com reputação local e treine-os em mediação básica
                    </p>
                  </div>

                  <div className="p-3 bg-red-50 rounded-lg">
                    <p className="text-sm text-red-800">
                      <strong>Proteção primeiro:</strong> Qualquer sinal de ameaça aciona rota de segurança antes de ampliar atividades
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}