import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function EstrategiaSaudeFamiliaPage() {
  return (
    <>
      <Head>
        <title>Estratégia Saúde da Família (ESF) | PolicyLabs APSS</title>
        <meta name="description" content="Modelo prioritário da Atenção Primária à Saúde no SUS" />
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
                  <h1 className="text-xl font-bold">🏥 Estratégia Saúde da Família (ESF)</h1>
                  <p className="text-sm text-gray-600">Atenção Primária à Saúde no SUS</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                  Prioridade Alta
                </span>
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                  PolicyDNA™ 96%
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
                    A ESF é o <strong>modelo prioritário da Atenção Primária à Saúde (APS) no SUS</strong>. Organiza o cuidado por território e população adscrita, com equipes multiprofissionais responsáveis por promoção, prevenção, diagnóstico, tratamento e coordenação do cuidado ao longo do tempo.
                  </p>
                  <p className="mb-4">
                    A PNAB define a ESF como eixo para expandir e qualificar a APS; cada equipe responde por uma população definida, com ações na UBS e no território (visita domiciliar, busca ativa, acompanhamento de crônicos, pré-natal, puericultura, vacinação etc.).
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-3">Composição da Equipe:</h3>
                  <p>
                    <strong>Equipe mínima (eSF):</strong> médico (generalista/MFC), enfermeiro, técnico/auxiliar de enfermagem e Agentes Comunitários de Saúde (ACS). A saúde bucal pode ser agregada (eSB).
                  </p>
                </div>
              </div>

              {/* Parameters */}
              <div className="card-glass p-6">
                <h2 className="text-2xl font-bold mb-4">📊 Parâmetros Populacionais</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800">Até 20 mil hab.</h4>
                    <p className="text-sm text-blue-600">~2.000 pessoas por eSF</p>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800">20–50 mil hab.</h4>
                    <p className="text-sm text-green-600">~2.500 pessoas por eSF</p>
                  </div>

                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-yellow-800">50–100 mil hab.</h4>
                    <p className="text-sm text-yellow-600">~2.750 pessoas por eSF</p>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800">>100 mil hab.</h4>
                    <p className="text-sm text-purple-600">~3.000 pessoas por eSF</p>
                  </div>
                </div>

                <div className="p-4 bg-orange-50 rounded-lg">
                  <p className="text-sm text-orange-800">
                    <strong>ACS:</strong> Número suficiente para cobrir 100% da população cadastrada; máximo de 750 pessoas por ACS (parâmetro de referência).
                  </p>
                </div>
              </div>

              {/* Implementation Guide */}
              <div className="card-glass p-6">
                <h2 className="text-2xl font-bold mb-4">🎯 Guia de Implantação</h2>

                <div className="space-y-6">
                  {/* Phase 1 */}
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="text-lg font-semibold mb-2">1) Diagnóstico e Desenho da Rede (2–4 semanas)</h3>
                    <ul className="space-y-2 text-sm">
                      <li>Levante população por bairros/comunidades, distâncias e vulnerabilidades; territorialize e defina áreas de abrangência</li>
                      <li><strong>Exemplo:</strong> Cidade com 12.000 hab. ⇒ ~6 eSF (2.000 pessoas/eSF). Para ACS, use até 750 pessoas/ACS ⇒ ~16 ACS para cobrir 100%</li>
                      <li>Defina UBS(s) de referência e, se possível, Saúde Bucal junto às equipes (eSB)</li>
                    </ul>
                  </div>

                  {/* Phase 2 */}
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="text-lg font-semibold mb-2">2) Habilitação, Cadastro e Financiamento (paralelo à etapa 1)</h3>
                    <ul className="space-y-2 text-sm">
                      <li>Cadastrar equipes e profissionais no SCNES/SISAB e acompanhar metas no e-Gestor AB</li>
                      <li>Organizar cadastro nominal da população (capitação ponderada) e planejar ações para os indicadores de desempenho do Previne Brasil</li>
                    </ul>
                  </div>

                  {/* Phase 3 */}
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h3 className="text-lg font-semibold mb-2">3) Composição das Equipes e Rotinas</h3>
                    <ul className="space-y-2 text-sm">
                      <li><strong>Equipe mínima (eSF):</strong> médico, enfermeiro, técnico/auxiliar, ACS; horário que garanta acesso contínuo</li>
                      <li><strong>Processo de trabalho básico:</strong>
                        <ul className="ml-4 mt-2 space-y-1">
                          <li>• Acolhimento e agenda programada, com estratificação de risco</li>
                          <li>• Visita domiciliar e microáreas de ACS</li>
                          <li>• Linhas de cuidado prioritárias: pré-natal, puerpério/puericultura, hipertensão/diabetes, saúde mental, imunização</li>
                          <li>• Regulação/coordenação com a rede (NASF/serviços de apoio quando houver)</li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  {/* Phase 4 */}
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="text-lg font-semibold mb-2">4) Protocolos e Fluxos</h3>
                    <ul className="space-y-2 text-sm">
                      <li>Adote protocolos municipais (ou referencie guias MS) para: crônicos, pré-natal, intercorrências agudas, visita domiciliar, busca ativa de faltosos, vacinação, vigilância em saúde</li>
                    </ul>
                  </div>

                  {/* Phase 5 */}
                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="text-lg font-semibold mb-2">5) Monitoramento e Melhoria Contínua</h3>
                    <ul className="space-y-2 text-sm">
                      <li>Acompanhe cobertura de cadastros, produção, indicadores do Previne, vacinal e saúde bucal via e-Gestor</li>
                      <li>Ajuste agenda/território conforme dados</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 90 Day Checklist */}
              <div className="card-glass p-6">
                <h2 className="text-2xl font-bold mb-4">✅ Checklist de 90 Dias</h2>

                <div className="space-y-6">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">Dias 1–30</h3>
                    <ul className="text-sm text-blue-600 space-y-1">
                      <li>• Territorialização, estimativa de equipes/ACS e definição de UBS</li>
                      <li>• Plano de contratação ou remanejamento</li>
                      <li>• Habilitação no SCNES/SISAB; plano de cadastramento nominal (mutirões com ACS)</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2">Dias 31–60</h3>
                    <ul className="text-sm text-green-600 space-y-1">
                      <li>• Capacitação inicial da equipe (acolhimento, estratificação, protocolos)</li>
                      <li>• Início das visitas domiciliares</li>
                      <li>• Implantar agenda programada para pré-natal, puericultura e crônicos</li>
                      <li>• Iniciar busca ativa de faltosos e vacinação</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h3 className="font-semibold text-yellow-800 mb-2">Dias 61–90</h3>
                    <ul className="text-sm text-yellow-600 space-y-1">
                      <li>• Revisão de indicadores do Previne Brasil e microplanejamento de melhorias</li>
                      <li>• Ajustes de microáreas ACS, pactuação com a regulação</li>
                      <li>• Definição de rotina mensal de monitoramento no e-Gestor</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Financing */}
              <div className="card-glass p-6">
                <h2 className="text-2xl font-bold mb-4">💰 Financiamento (Previne Brasil)</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="mb-4">
                    Combinação de <strong>capitação ponderada</strong> (cadastros válidos), <strong>pagamento por desempenho</strong> (indicadores) e <strong>incentivos</strong>; dados e relatórios ficam no e-Gestor AB/SISAB.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-blue-50 rounded-lg text-center">
                      <h4 className="font-semibold text-blue-800">Capitação Ponderada</h4>
                      <p className="text-sm text-blue-600">Cadastros válidos</p>
                    </div>

                    <div className="p-4 bg-green-50 rounded-lg text-center">
                      <h4 className="font-semibold text-green-800">Desempenho</h4>
                      <p className="text-sm text-green-600">Indicadores de qualidade</p>
                    </div>

                    <div className="p-4 bg-purple-50 rounded-lg text-center">
                      <h4 className="font-semibold text-purple-800">Incentivos</h4>
                      <p className="text-sm text-purple-600">Ações específicas</p>
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
                    <span className="font-bold text-green-600">96%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Implementações</span>
                    <span className="font-bold">5.570</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Cobertura Nacional</span>
                    <span className="font-bold text-green-600">75%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Pessoas Atendidas</span>
                    <span className="font-bold">150M+</span>
                  </div>
                </div>
              </div>

              {/* Resources */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">📚 Materiais Oficiais</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <h4 className="text-sm font-semibold text-blue-800">PNAB (Portaria 2.436/2017)</h4>
                    <p className="text-xs text-blue-600">Diretrizes e parâmetros</p>
                  </div>

                  <div className="p-3 bg-green-50 rounded-lg">
                    <h4 className="text-sm font-semibold text-green-800">Página ESF (Gov.br)</h4>
                    <p className="text-xs text-green-600">Orientações operacionais</p>
                  </div>

                  <div className="p-3 bg-yellow-50 rounded-lg">
                    <h4 className="text-sm font-semibold text-yellow-800">Manual Previne Brasil</h4>
                    <p className="text-xs text-yellow-600">Financiamento e indicadores</p>
                  </div>

                  <div className="p-3 bg-purple-50 rounded-lg">
                    <h4 className="text-sm font-semibold text-purple-800">e-Gestor AB</h4>
                    <p className="text-xs text-purple-600">Relatórios públicos</p>
                  </div>
                </div>
              </div>

              {/* Calculator */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-bold mb-4">🧮 Calculadora ESF</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      População do município:
                    </label>
                    <input
                      type="number"
                      placeholder="Ex: 12000"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    />
                  </div>

                  <button className="w-full btn-glass-primary py-2 px-4 rounded-lg text-sm">
                    Calcular Equipes
                  </button>

                  <div className="text-xs text-gray-500 space-y-1">
                    <p>• Estimativa de equipes eSF</p>
                    <p>• Número de ACS necessários</p>
                    <p>• Financiamento estimado</p>
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