import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  GlobeAmericasIcon,
  BeakerIcon,
  ExclamationTriangleIcon,
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon,
  DocumentTextIcon,
  ChartBarIcon,
  BellAlertIcon,
  MapIcon,
  CloudIcon,
  FireIcon,
  WrenchScrewdriverIcon,
  EyeIcon
} from '@heroicons/react/24/outline';

const EnvironmentalStandardsMonitoring = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const environmentalStandards = [
    {
      id: 1,
      title: 'Qualidade do Ar (CONAMA 003/90)',
      category: 'Ar',
      status: 'compliant',
      lastMeasurement: '2024-09-20 08:00',
      currentValue: '32 µg/m³',
      threshold: '50 µg/m³',
      parameter: 'PM2.5',
      location: 'Centro - Estação 01',
      riskLevel: 'low',
      trend: 'stable'
    },
    {
      id: 2,
      title: 'Qualidade da Água (CONAMA 357/05)',
      category: 'Água',
      status: 'attention',
      lastMeasurement: '2024-09-20 06:00',
      currentValue: '7.2 mg/L',
      threshold: '5.0 mg/L',
      parameter: 'Oxigênio Dissolvido',
      location: 'Rio Principal - P1',
      riskLevel: 'medium',
      trend: 'declining'
    },
    {
      id: 3,
      title: 'Níveis de Ruído (NBR 10151)',
      category: 'Ruído',
      status: 'non_compliant',
      lastMeasurement: '2024-09-19 22:00',
      currentValue: '67 dB(A)',
      threshold: '55 dB(A)',
      parameter: 'Período Noturno',
      location: 'Zona Residencial',
      riskLevel: 'high',
      trend: 'increasing'
    },
    {
      id: 4,
      title: 'Resíduos Sólidos (Lei 12.305/10)',
      category: 'Resíduos',
      status: 'compliant',
      lastMeasurement: '2024-09-20 07:00',
      currentValue: '89%',
      threshold: '80%',
      parameter: 'Taxa de Reciclagem',
      location: 'Município - Geral',
      riskLevel: 'low',
      trend: 'improving'
    },
    {
      id: 5,
      title: 'Emissões Atmosféricas (CONAMA 382/06)',
      category: 'Emissões',
      status: 'attention',
      lastMeasurement: '2024-09-20 09:30',
      currentValue: '340 mg/Nm³',
      threshold: '300 mg/Nm³',
      parameter: 'Material Particulado',
      location: 'Distrito Industrial',
      riskLevel: 'medium',
      trend: 'stable'
    }
  ];

  const monitoringStations = [
    {
      id: 1,
      name: 'Estação Centro',
      type: 'Qualidade do Ar',
      status: 'online',
      lastUpdate: '2024-09-20 14:30',
      parameters: ['PM2.5', 'PM10', 'NO2', 'O3', 'SO2'],
      coordinates: '-23.5505, -46.6333'
    },
    {
      id: 2,
      name: 'Ponto Rio Principal',
      type: 'Qualidade da Água',
      status: 'online',
      lastUpdate: '2024-09-20 12:00',
      parameters: ['pH', 'Oxigênio', 'DBO', 'Coliformes'],
      coordinates: '-23.5489, -46.6388'
    },
    {
      id: 3,
      name: 'Sensor Zona Industrial',
      type: 'Emissões',
      status: 'maintenance',
      lastUpdate: '2024-09-19 16:45',
      parameters: ['CO2', 'SOx', 'NOx', 'Particulados'],
      coordinates: '-23.5512, -46.6302'
    },
    {
      id: 4,
      name: 'Monitor Acústico Centro',
      type: 'Ruído',
      status: 'online',
      lastUpdate: '2024-09-20 14:45',
      parameters: ['dB(A) Diurno', 'dB(A) Noturno'],
      coordinates: '-23.5498, -46.6355'
    }
  ];

  const alerts = [
    {
      id: 1,
      type: 'critical',
      title: 'Nível de Ruído Acima do Limite',
      description: 'Zona residencial com 67 dB(A) no período noturno',
      timestamp: '2024-09-19 22:15',
      location: 'Zona Residencial - Monitor 01',
      action: 'Fiscalização acionada'
    },
    {
      id: 2,
      type: 'warning',
      title: 'Qualidade da Água em Declínio',
      description: 'Oxigênio dissolvido abaixo do esperado',
      timestamp: '2024-09-20 06:30',
      location: 'Rio Principal - Ponto P1',
      action: 'Análise complementar solicitada'
    },
    {
      id: 3,
      type: 'info',
      title: 'Estação em Manutenção',
      description: 'Sensor de emissões será calibrado',
      timestamp: '2024-09-19 16:00',
      location: 'Distrito Industrial',
      action: 'Manutenção programada'
    }
  ];

  const complianceMetrics = [
    { category: 'Ar', compliant: 12, total: 15, percentage: 80 },
    { category: 'Água', compliant: 8, total: 10, percentage: 80 },
    { category: 'Ruído', compliant: 6, total: 9, percentage: 67 },
    { category: 'Resíduos', compliant: 14, total: 16, percentage: 88 },
    { category: 'Emissões', compliant: 7, total: 12, percentage: 58 }
  ];

  const stats = {
    overallCompliance: 74.6,
    activeStations: 18,
    parametersMonitored: 45,
    alertsToday: 3,
    lastUpdate: '2024-09-20 14:45',
    coverageArea: '98.5%'
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'compliant': return 'text-green-400 bg-green-500/20';
      case 'attention': return 'text-yellow-400 bg-yellow-500/20';
      case 'non_compliant': return 'text-red-400 bg-red-500/20';
      case 'online': return 'text-green-400 bg-green-500/20';
      case 'offline': return 'text-red-400 bg-red-500/20';
      case 'maintenance': return 'text-yellow-400 bg-yellow-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'improving': return '↗️';
      case 'declining': return '↘️';
      case 'increasing': return '📈';
      case 'stable': return '➡️';
      default: return '⚪';
    }
  };

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'critical': return 'border-red-500 bg-red-500/10';
      case 'warning': return 'border-yellow-500 bg-yellow-500/10';
      case 'info': return 'border-blue-500 bg-blue-500/10';
      default: return 'border-gray-500 bg-gray-500/10';
    }
  };

  return (
    <>
      <Head>
        <title>Monitoramento Ambiental | PolicyLabs</title>
        <meta name="description" content="Sistema de monitoramento de padrões ambientais e conformidade" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        {/* Header */}
        <div className="card-glass border-0 border-b border-white/20 rounded-none">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Link href="/dashboard" className="text-white/70 hover:text-white">
                  ← Dashboard
                </Link>
                <div className="flex items-center space-x-3">
                  <GlobeAmericasIcon className="h-8 w-8 text-green-400" />
                  <div>
                    <h1 className="text-2xl font-bold text-white">Monitoramento Ambiental</h1>
                    <p className="text-white/70">Padrões ambientais e conformidade regulatória</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="text-white font-semibold">{stats.overallCompliance}%</div>
                  <div className="text-white/60 text-sm">Conformidade</div>
                </div>
                <div className="text-right">
                  <div className="text-white font-semibold">{stats.activeStations}</div>
                  <div className="text-white/60 text-sm">Estações Ativas</div>
                </div>
                <button className="btn-glass-primary px-4 py-2">
                  Novo Relatório
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-8">
          {/* Navigation Tabs */}
          <div className="mb-8">
            <div className="card-glass p-1 inline-flex rounded-lg">
              {[
                { id: 'overview', label: 'Visão Geral', icon: ChartBarIcon },
                { id: 'monitoring', label: 'Monitoramento', icon: EyeIcon },
                { id: 'stations', label: 'Estações', icon: MapIcon },
                { id: 'alerts', label: 'Alertas', icon: BellAlertIcon }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-md transition-all ${
                    activeTab === tab.id
                      ? 'bg-white/20 text-white shadow-lg'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <tab.icon className="h-5 w-5" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="card-glass p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/70 text-sm">Conformidade Geral</p>
                      <p className="text-2xl font-bold text-white">{stats.overallCompliance}%</p>
                    </div>
                    <CheckCircleIcon className="h-8 w-8 text-green-400" />
                  </div>
                </div>
                <div className="card-glass p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/70 text-sm">Estações Ativas</p>
                      <p className="text-2xl font-bold text-white">{stats.activeStations}</p>
                    </div>
                    <MapIcon className="h-8 w-8 text-blue-400" />
                  </div>
                </div>
                <div className="card-glass p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/70 text-sm">Parâmetros</p>
                      <p className="text-2xl font-bold text-white">{stats.parametersMonitored}</p>
                    </div>
                    <BeakerIcon className="h-8 w-8 text-purple-400" />
                  </div>
                </div>
                <div className="card-glass p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/70 text-sm">Alertas Hoje</p>
                      <p className="text-2xl font-bold text-white">{stats.alertsToday}</p>
                    </div>
                    <BellAlertIcon className="h-8 w-8 text-red-400" />
                  </div>
                </div>
                <div className="card-glass p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/70 text-sm">Cobertura</p>
                      <p className="text-2xl font-bold text-white">{stats.coverageArea}</p>
                    </div>
                    <GlobeAmericasIcon className="h-8 w-8 text-green-400" />
                  </div>
                </div>
                <div className="card-glass p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/70 text-sm">Última Atualização</p>
                      <p className="text-lg font-bold text-white">{stats.lastUpdate}</p>
                    </div>
                    <ClockIcon className="h-8 w-8 text-yellow-400" />
                  </div>
                </div>
              </div>

              {/* Compliance by Category */}
              <div className="card-glass p-6">
                <h3 className="text-xl font-semibold text-white mb-6">Conformidade por Categoria</h3>
                <div className="space-y-4">
                  {complianceMetrics.map((metric, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          metric.category === 'Ar' ? 'bg-blue-500/20' :
                          metric.category === 'Água' ? 'bg-cyan-500/20' :
                          metric.category === 'Ruído' ? 'bg-purple-500/20' :
                          metric.category === 'Resíduos' ? 'bg-green-500/20' :
                          'bg-orange-500/20'
                        }`}>
                          {metric.category === 'Ar' && <CloudIcon className="h-6 w-6 text-blue-400" />}
                          {metric.category === 'Água' && <BeakerIcon className="h-6 w-6 text-cyan-400" />}
                          {metric.category === 'Ruído' && <ExclamationTriangleIcon className="h-6 w-6 text-purple-400" />}
                          {metric.category === 'Resíduos' && <GlobeAmericasIcon className="h-6 w-6 text-green-400" />}
                          {metric.category === 'Emissões' && <FireIcon className="h-6 w-6 text-orange-400" />}
                        </div>
                        <div>
                          <h4 className="text-white font-medium">{metric.category}</h4>
                          <p className="text-white/60 text-sm">{metric.compliant}/{metric.total} conformes</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-32 bg-white/20 rounded-full h-3">
                          <div
                            className={`h-3 rounded-full ${
                              metric.percentage >= 80 ? 'bg-green-500' :
                              metric.percentage >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${metric.percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-white font-medium w-12">{metric.percentage}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Alerts */}
              <div className="card-glass p-6">
                <h3 className="text-xl font-semibold text-white mb-6">Alertas Recentes</h3>
                <div className="space-y-3">
                  {alerts.slice(0, 3).map((alert) => (
                    <div key={alert.id} className={`border rounded-lg p-4 ${getAlertColor(alert.type)}`}>
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-white font-medium">{alert.title}</h4>
                        <span className="text-white/60 text-sm">{alert.timestamp}</span>
                      </div>
                      <p className="text-white/70 text-sm mb-2">{alert.description}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-white/60">{alert.location}</span>
                        <span className="text-white">{alert.action}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Monitoring Tab */}
          {activeTab === 'monitoring' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-white">Monitoramento em Tempo Real</h3>
                <div className="flex space-x-4">
                  <select
                    className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value="all">Todas as Categorias</option>
                    <option value="Ar">Qualidade do Ar</option>
                    <option value="Água">Qualidade da Água</option>
                    <option value="Ruído">Níveis de Ruído</option>
                    <option value="Resíduos">Gestão de Resíduos</option>
                    <option value="Emissões">Emissões Atmosféricas</option>
                  </select>
                  <button className="btn-glass-primary px-6 py-3">
                    Atualizar Dados
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {environmentalStandards.map((standard) => (
                  <div key={standard.id} className="card-glass p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="text-lg font-medium text-white">{standard.title}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(standard.status)}`}>
                            {standard.status === 'compliant' ? 'Conforme' :
                             standard.status === 'attention' ? 'Atenção' : 'Não Conforme'}
                          </span>
                          <span className="text-lg">{getTrendIcon(standard.trend)}</span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="text-white/60">Parâmetro:</span>
                            <div className="text-white font-medium">{standard.parameter}</div>
                          </div>
                          <div>
                            <span className="text-white/60">Valor Atual:</span>
                            <div className="text-white font-medium">{standard.currentValue}</div>
                          </div>
                          <div>
                            <span className="text-white/60">Limite:</span>
                            <div className="text-white font-medium">{standard.threshold}</div>
                          </div>
                          <div>
                            <span className="text-white/60">Local:</span>
                            <div className="text-white font-medium">{standard.location}</div>
                          </div>
                        </div>
                        <div className="mt-3 text-white/60 text-sm">
                          Última medição: {standard.lastMeasurement}
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="btn-glass-primary px-4 py-2 text-sm">
                          Ver Histórico
                        </button>
                        <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm border border-white/20">
                          Relatório
                        </button>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-4">
                      <div className="flex justify-between text-sm text-white/70 mb-1">
                        <span>Conformidade</span>
                        <span>{standard.status === 'compliant' ? '100%' :
                               standard.status === 'attention' ? '75%' : '25%'}</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            standard.status === 'compliant' ? 'bg-green-500' :
                            standard.status === 'attention' ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${
                            standard.status === 'compliant' ? 100 :
                            standard.status === 'attention' ? 75 : 25
                          }%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Stations Tab */}
          {activeTab === 'stations' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-white">Estações de Monitoramento</h3>
                <button className="btn-glass-primary px-6 py-3">
                  Nova Estação
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {monitoringStations.map((station) => (
                  <div key={station.id} className="card-glass p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="text-lg font-medium text-white">{station.name}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(station.status)}`}>
                            {station.status === 'online' ? 'Online' :
                             station.status === 'offline' ? 'Offline' : 'Manutenção'}
                          </span>
                        </div>
                        <p className="text-white/70 text-sm mb-3">{station.type}</p>
                        <div className="text-sm text-white/60 mb-3">
                          <div>Coordenadas: {station.coordinates}</div>
                          <div>Última atualização: {station.lastUpdate}</div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {station.parameters.map((param, index) => (
                            <span key={index} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                              {param}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="btn-glass-primary px-3 py-2 text-sm">
                          <EyeIcon className="h-4 w-4" />
                        </button>
                        <button className="bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-lg text-sm border border-white/20">
                          <WrenchScrewdriverIcon className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Alerts Tab */}
          {activeTab === 'alerts' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-white">Sistema de Alertas Ambientais</h3>
                <button className="btn-glass-primary px-6 py-3">
                  Configurar Alertas
                </button>
              </div>

              <div className="space-y-4">
                {alerts.map((alert) => (
                  <div key={alert.id} className={`border rounded-lg p-6 ${getAlertColor(alert.type)}`}>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          alert.type === 'critical' ? 'bg-red-500/20' :
                          alert.type === 'warning' ? 'bg-yellow-500/20' : 'bg-blue-500/20'
                        }`}>
                          {alert.type === 'critical' && <ExclamationTriangleIcon className="h-6 w-6 text-red-400" />}
                          {alert.type === 'warning' && <BellAlertIcon className="h-6 w-6 text-yellow-400" />}
                          {alert.type === 'info' && <DocumentTextIcon className="h-6 w-6 text-blue-400" />}
                        </div>
                        <div>
                          <h4 className="text-white font-medium">{alert.title}</h4>
                          <p className="text-white/70 text-sm">{alert.description}</p>
                        </div>
                      </div>
                      <span className="text-white/60 text-sm">{alert.timestamp}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/60">{alert.location}</span>
                      <div className="flex items-center space-x-3">
                        <span className="text-white">{alert.action}</span>
                        <button className="btn-glass-primary px-3 py-1 text-xs">
                          Resolver
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default EnvironmentalStandardsMonitoring;