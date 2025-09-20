import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  BookOpenIcon,
  UserGroupIcon,
  AcademicCapIcon,
  ClockIcon,
  CheckCircleIcon,
  PlayIcon,
  DocumentTextIcon,
  ChartBarIcon,
  StarIcon,
  UserIcon,
  CalendarIcon,
  CertificateIcon
} from '@heroicons/react/24/outline';

const TrainingOnboardingPlatform = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const trainingModules = [
    {
      id: 1,
      title: "Fundamentos da Gestão Pública",
      description: "Conceitos básicos de administração municipal",
      duration: "4 horas",
      level: "Iniciante",
      progress: 100,
      status: "completed",
      modules: 12,
      certificate: true
    },
    {
      id: 2,
      title: "PolicyDNA™ Avançado",
      description: "Uso avançado da IA para políticas públicas",
      duration: "6 horas",
      level: "Avançado",
      progress: 75,
      status: "in_progress",
      modules: 18,
      certificate: true
    },
    {
      id: 3,
      title: "Análise de Dados Governamentais",
      description: "Interpretação de métricas e KPIs municipais",
      duration: "3 horas",
      level: "Intermediário",
      progress: 0,
      status: "not_started",
      modules: 8,
      certificate: false
    },
    {
      id: 4,
      title: "Engajamento Cidadão Digital",
      description: "Ferramentas de participação social online",
      duration: "2 horas",
      level: "Iniciante",
      progress: 45,
      status: "in_progress",
      modules: 6,
      certificate: false
    }
  ];

  const onboardingPath = [
    {
      step: 1,
      title: "Perfil e Avaliação Inicial",
      description: "Configure seu perfil e faça avaliação de conhecimentos",
      status: "completed",
      duration: "30 min"
    },
    {
      step: 2,
      title: "Tour da Plataforma",
      description: "Conheça todas as funcionalidades do PolicyLabs",
      status: "completed",
      duration: "45 min"
    },
    {
      step: 3,
      title: "Primeiro Projeto",
      description: "Crie seu primeiro projeto com assistência guiada",
      status: "in_progress",
      duration: "2 horas"
    },
    {
      step: 4,
      title: "Certificação Básica",
      description: "Complete o curso básico e obtenha certificação",
      status: "pending",
      duration: "4 horas"
    }
  ];

  const instructors = [
    {
      name: "Dr. Maria Santos",
      role: "Especialista em Gestão Pública",
      rating: 4.9,
      courses: 23,
      students: 15420
    },
    {
      name: "Prof. João Silva",
      role: "Consultor em Políticas Urbanas",
      rating: 4.8,
      courses: 18,
      students: 12350
    },
    {
      name: "Dra. Ana Costa",
      role: "Analista de Dados Governamentais",
      rating: 4.7,
      courses: 15,
      students: 8920
    }
  ];

  const stats = {
    totalUsers: 2847,
    completedCourses: 15420,
    averageScore: 87.3,
    certificatesIssued: 12650
  };

  return (
    <>
      <Head>
        <title>Plataforma de Treinamento e Onboarding | PolicyLabs</title>
        <meta name="description" content="Sistema completo de capacitação e onboarding para gestores públicos" />
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
                  <AcademicCapIcon className="h-8 w-8 text-blue-400" />
                  <div>
                    <h1 className="text-2xl font-bold text-white">Treinamento & Onboarding</h1>
                    <p className="text-white/70">Capacitação completa para gestores públicos</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="text-white font-semibold">87.3%</div>
                  <div className="text-white/60 text-sm">Score Médio</div>
                </div>
                <div className="text-right">
                  <div className="text-white font-semibold">12</div>
                  <div className="text-white/60 text-sm">Certificados</div>
                </div>
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
                { id: 'courses', label: 'Cursos', icon: BookOpenIcon },
                { id: 'onboarding', label: 'Onboarding', icon: UserIcon },
                { id: 'instructors', label: 'Instrutores', icon: UserGroupIcon }
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="card-glass p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/70 text-sm">Usuários Ativos</p>
                      <p className="text-2xl font-bold text-white">{stats.totalUsers.toLocaleString()}</p>
                    </div>
                    <UserGroupIcon className="h-8 w-8 text-blue-400" />
                  </div>
                </div>
                <div className="card-glass p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/70 text-sm">Cursos Concluídos</p>
                      <p className="text-2xl font-bold text-white">{stats.completedCourses.toLocaleString()}</p>
                    </div>
                    <CheckCircleIcon className="h-8 w-8 text-green-400" />
                  </div>
                </div>
                <div className="card-glass p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/70 text-sm">Score Médio</p>
                      <p className="text-2xl font-bold text-white">{stats.averageScore}%</p>
                    </div>
                    <StarIcon className="h-8 w-8 text-yellow-400" />
                  </div>
                </div>
                <div className="card-glass p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/70 text-sm">Certificados</p>
                      <p className="text-2xl font-bold text-white">{stats.certificatesIssued.toLocaleString()}</p>
                    </div>
                    <CertificateIcon className="h-8 w-8 text-purple-400" />
                  </div>
                </div>
              </div>

              {/* Learning Path Progress */}
              <div className="card-glass p-6">
                <h3 className="text-xl font-semibold text-white mb-6">Sua Jornada de Aprendizado</h3>
                <div className="space-y-4">
                  {onboardingPath.map((step) => (
                    <div key={step.step} className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        step.status === 'completed' ? 'bg-green-500' :
                        step.status === 'in_progress' ? 'bg-blue-500' : 'bg-gray-600'
                      }`}>
                        {step.status === 'completed' ? (
                          <CheckCircleIcon className="h-6 w-6 text-white" />
                        ) : (
                          <span className="text-white font-semibold">{step.step}</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-medium">{step.title}</h4>
                        <p className="text-white/70 text-sm">{step.description}</p>
                      </div>
                      <div className="text-white/60 text-sm">{step.duration}</div>
                      {step.status === 'in_progress' && (
                        <button className="btn-glass-primary px-4 py-2 text-sm">
                          Continuar
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Courses Tab */}
          {activeTab === 'courses' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-white">Catálogo de Cursos</h3>
                <button className="btn-glass-primary px-6 py-3">
                  Novo Curso
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {trainingModules.map((course) => (
                  <div key={course.id} className="card-glass p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-2">{course.title}</h4>
                        <p className="text-white/70 text-sm mb-3">{course.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-white/60">
                          <div className="flex items-center space-x-1">
                            <ClockIcon className="h-4 w-4" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <BookOpenIcon className="h-4 w-4" />
                            <span>{course.modules} módulos</span>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            course.level === 'Iniciante' ? 'bg-green-500/20 text-green-300' :
                            course.level === 'Intermediário' ? 'bg-yellow-500/20 text-yellow-300' :
                            'bg-red-500/20 text-red-300'
                          }`}>
                            {course.level}
                          </span>
                        </div>
                      </div>
                      {course.certificate && (
                        <CertificateIcon className="h-6 w-6 text-yellow-400" />
                      )}
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-white/70 mb-1">
                        <span>Progresso</span>
                        <span>{course.progress}%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        course.status === 'completed' ? 'bg-green-500/20 text-green-300' :
                        course.status === 'in_progress' ? 'bg-blue-500/20 text-blue-300' :
                        'bg-gray-500/20 text-gray-300'
                      }`}>
                        {course.status === 'completed' ? 'Concluído' :
                         course.status === 'in_progress' ? 'Em Andamento' : 'Não Iniciado'}
                      </span>
                      <button className="btn-glass-primary px-4 py-2 text-sm">
                        {course.status === 'not_started' ? 'Iniciar' : 'Continuar'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Onboarding Tab */}
          {activeTab === 'onboarding' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white">Processo de Onboarding</h3>

              <div className="card-glass p-6">
                <h4 className="text-lg font-medium text-white mb-4">Jornada Personalizada</h4>
                <div className="space-y-6">
                  {onboardingPath.map((step, index) => (
                    <div key={step.step} className="relative">
                      {index < onboardingPath.length - 1 && (
                        <div className="absolute left-5 top-12 w-0.5 h-16 bg-white/20"></div>
                      )}
                      <div className="flex items-start space-x-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                          step.status === 'completed' ? 'bg-green-500' :
                          step.status === 'in_progress' ? 'bg-blue-500' : 'bg-gray-600'
                        }`}>
                          {step.status === 'completed' ? (
                            <CheckCircleIcon className="h-6 w-6 text-white" />
                          ) : (
                            <span className="text-white font-semibold">{step.step}</span>
                          )}
                        </div>
                        <div className="flex-1">
                          <h5 className="text-white font-medium mb-1">{step.title}</h5>
                          <p className="text-white/70 text-sm mb-2">{step.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-white/60 text-sm">Duração: {step.duration}</span>
                            {step.status === 'in_progress' && (
                              <button className="btn-glass-primary px-4 py-2 text-sm">
                                <PlayIcon className="h-4 w-4 mr-2" />
                                Continuar
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Instructors Tab */}
          {activeTab === 'instructors' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white">Equipe de Instrutores</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {instructors.map((instructor, index) => (
                  <div key={index} className="card-glass p-6 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">
                        {instructor.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h4 className="text-white font-semibold mb-1">{instructor.name}</h4>
                    <p className="text-white/70 text-sm mb-3">{instructor.role}</p>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-center space-x-1">
                        <StarIcon className="h-4 w-4 text-yellow-400" />
                        <span className="text-white">{instructor.rating}</span>
                        <span className="text-white/60">rating</span>
                      </div>
                      <div className="flex justify-between text-white/60">
                        <span>{instructor.courses} cursos</span>
                        <span>{instructor.students.toLocaleString()} alunos</span>
                      </div>
                    </div>

                    <button className="btn-glass-primary w-full mt-4 py-2 text-sm">
                      Ver Perfil
                    </button>
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

export default TrainingOnboardingPlatform;