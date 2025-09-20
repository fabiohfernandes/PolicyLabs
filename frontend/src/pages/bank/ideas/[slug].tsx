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
import {
  ArrowLeft,
  Users,
  Clock,
  DollarSign,
  Target,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Star,
  BarChart3,
  Settings,
  FileText,
  Heart,
  Utensils,
  Droplets,
  Vote,
  Shield,
  BookOpen,
  Bus,
  Building
} from 'lucide-react';

interface IdeaDetail {
  id: number;
  title: string;
  category: string;
  area: string;
  description: string;
  fullContent: string;
  implementationGuide: {
    steps: string[];
    team: string;
    costs: string;
    indicators: string;
    risks: string;
  };
  impact: string;
  difficulty: 'Baixa' | 'Média' | 'Alta';
  cost: 'Baixo' | 'Médio' | 'Alto';
  timeToImplement: string;
  successRate: number;
  icon: React.ReactNode;
  tags: string[];
  slug: string;
}

const IdeaDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;
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

  const ideasData: { [key: string]: IdeaDetail } = {
    'bolsa-familia': {
      id: 1,
      title: "Bolsa Família",
      category: "Proteção Social",
      area: "Assistência Social",
      description: "Transferência de renda condicionada que combina alívio imediato com investimento no capital humano.",
      fullContent: "O Bolsa Família é um programa de transferência de renda com condicionalidades (frequência escolar, vacinação, pré-natal) que reduziu pobreza extrema e vulnerabilidade. Funciona porque combina alívio imediato (renda) com investimento no capital humano (educação e saúde), direcionado via Cadastro Único e regras claras.",
      implementationGuide: {
        steps: [
          "Base legal & adesão: alinhe legislação municipal e fluxos com as regras federais (Cadastro Único, CRAS, saúde, educação)",
          "Governança: crie um comitê intersetorial (Assistência, Saúde, Educação, Finanças) com reuniões mensais e metas",
          "Cadastro & busca ativa: equipe do CRAS faz busca ativa de famílias vulneráveis; mutirões nos bairros",
          "Condicionalidades: integre sistemas da escola e da UBS para registrar presença, vacinação e pré-natal",
          "Acompanhamento: monitore evasão escolar, faltas em consultas e desnutrição; acione visitas dos ACS",
          "Comunicação: campanhas simples (rádio local, WhatsApp comunitário) explicando direitos e deveres",
          "Proteções adicionais: articule com cursos de qualificação, feiras de emprego e creches (porta de saída)"
        ],
        team: "1 coordenador(a) (Assistência), 1 técnico(a) CRAS, 2 entrevistadores(as) CadÚnico, 1 apoio TI",
        costs: "Capacitação de equipe, infraestrutura mínima do CRAS, tablets simples para cadastro",
        indicators: "% famílias elegíveis cadastradas; frequência escolar > 85%; cobertura vacinal; redução da pobreza extrema",
        risks: "Cadastros desatualizados (mutirões trimestrais); estigma (comunicação positiva e sigilo); falhas de integração (rotinas quinzenais de reconciliação de dados)"
      },
      impact: "Redução da pobreza extrema e melhoria da frequência escolar",
      difficulty: 'Média',
      cost: 'Médio',
      timeToImplement: "3-6 meses",
      successRate: 95,
      icon: <Heart className="h-6 w-6" />,
      tags: ["renda", "educação", "saúde", "vulnerabilidade"],
      slug: "bolsa-familia"
    },
    'estrategia-saude-familia': {
      id: 2,
      title: "Estratégia Saúde da Família (ESF)",
      category: "Saúde",
      area: "Atenção Primária",
      description: "Equipes multiprofissionais adscritas a territórios específicos, focando em prevenção e cuidado continuado.",
      fullContent: "A ESF organiza a atenção primária com equipes multiprofissionais (médico(a), enfermeiro(a), técnico(a), ACS, dentista/ASB), adscritas a territórios definidos. O foco é prevenção, acompanhamento contínuo e cuidado próximo das famílias, reduzindo internações evitáveis e custos.",
      implementationGuide: {
        steps: [
          "Mapeamento territorial: defina microáreas e populações adscritas (2–4 mil pessoas por equipe)",
          "Compor a equipe: recrute profissionais e ACS locais; faça plano de educação permanente",
          "Unidade Básica: garanta UBS com agenda programada, acolhimento e protocolos (hipertensão, diabetes, pré-natal)",
          "Prontuário eletrônico: adote sistema simples, com linha de cuidado e indicadores",
          "Visitas domiciliares: rotina semanal para crônicos e gestantes; grupos educativos mensais",
          "Regulação & Telessaúde: fluxos de encaminhamento e teleconsultoria para casos complexos",
          "Avaliação: use indicadores (cobertura ESF, ICSAP, vacinação, pré-natal) e reuniões de matriciamento"
        ],
        team: "1 médico(a), 1 enfermeiro(a), 1 técnico(a), 4–6 ACS, 1 dentista/ASB",
        costs: "Reforma/adequação da UBS, EPI, insumos básicos, software prontuário",
        indicators: "Cobertura ESF; % gestantes com ≥6 consultas; controle de PA e HbA1c; ICSAP por 10 mil hab",
        risks: "Rotatividade (planos de carreira/atração); sobrecarga (agenda e protocolos); baixa adesão (educação em saúde e conselhos locais)"
      },
      impact: "Redução de internações evitáveis e melhoria da saúde preventiva",
      difficulty: 'Alta',
      cost: 'Alto',
      timeToImplement: "6-12 meses",
      successRate: 88,
      icon: <Users className="h-6 w-6" />,
      tags: ["prevenção", "território", "multiprofissional", "ACS"],
      slug: "estrategia-saude-familia"
    },
    'pnae-alimentacao-escolar': {
      id: 3,
      title: "PNAE - Alimentação Escolar com Compra Local",
      category: "Educação",
      area: "Educação & Nutrição",
      description: "Merenda escolar de qualidade com mínimo de 30% dos alimentos adquiridos da agricultura familiar local.",
      fullContent: "O PNAE garante alimentação escolar de qualidade e estimula a economia local exigindo que ao menos 30% dos recursos sejam aplicados na agricultura familiar. Funciona por unir nutrição infantil, desenvolvimento rural e compras públicas com propósito.",
      implementationGuide: {
        steps: [
          "Diagnóstico nutricional: avalie cardápios, alergias e preferências regionais",
          "Mapeie produtores: identifique cooperativas/associações; promova DAP/CAF e regularização sanitária",
          "Chamada pública: publique editais acessíveis, com lotes pequenos e cronograma de entregas",
          "Logística curta: pontos de entrega próximos às escolas; calendário sazonal",
          "Educação alimentar: hortas pedagógicas, oficinas e envolvimento das famílias",
          "Transparência: painel simples de cardápios, fornecedores e preços"
        ],
        team: "Nutricionista responsável, compras/licitações, apoio agrícola",
        costs: "Capacitação de produtores, kits de horta escolar, armazenamento básico",
        indicators: "% recursos do PNAE comprados da AF; aceitabilidade da merenda; variedade de alimentos in natura",
        risks: "Entrega irregular (contratos flexíveis e calendário agrícola); burocracia (modelos de edital simples)"
      },
      impact: "Melhoria da nutrição infantil e fortalecimento da economia local",
      difficulty: 'Média',
      cost: 'Médio',
      timeToImplement: "4-8 meses",
      successRate: 92,
      icon: <Utensils className="h-6 w-6" />,
      tags: ["nutrição", "agricultura familiar", "economia local", "merenda"],
      slug: "pnae-alimentacao-escolar"
    },
    'paa-aquisicao-alimentos': {
      id: 4,
      title: "PAA - Programa de Aquisição de Alimentos",
      category: "Desenvolvimento Rural",
      area: "Segurança Alimentar",
      description: "Compra institucional direta da produção familiar para abastecer equipamentos públicos e entidades socioassistenciais.",
      fullContent: "O PAA compra diretamente da agricultura familiar para formar estoques e abastecer equipamentos públicos (CRAS, escolas, hospitais) e entidades socioassistenciais. Gera renda no campo, segurança alimentar e encurta cadeias.",
      implementationGuide: {
        steps: [
          "Levantamento de demanda: mapeie creches, escolas, cozinhas sociais e CRAS",
          "Cadastro de fornecedores: organize a documentação de agricultores/cooperativas e a DAP/CAF",
          "Projeto de compra: defina itens, volumes, preços de referência e cronograma",
          "Operação logística: central municipal de recebimento e distribuição semanal",
          "Traçabilidade: registros simples de entrada/saída e qualidade sanitária",
          "Integração com PNAE e assistência: otimize cardápios e doações"
        ],
        team: "1 coord. compras, 1 técnico agro, 1 nutricionista, 1 apoio logística",
        costs: "Câmara fria simples, balanças, caixas plásticas",
        indicators: "Volume comprado da AF; nº de famílias beneficiadas; desperdício < 5%",
        risks: "Sazonalidade (cardápios sazonais); preços (referências regionais); qualidade (treinos de pós-colheita)"
      },
      impact: "Geração de renda no campo e garantia de segurança alimentar",
      difficulty: 'Média',
      cost: 'Médio',
      timeToImplement: "3-6 meses",
      successRate: 89,
      icon: <Utensils className="h-6 w-6" />,
      tags: ["agricultura familiar", "compras públicas", "segurança alimentar"],
      slug: "paa-aquisicao-alimentos"
    },
    'programa-cisternas': {
      id: 5,
      title: "Programa Cisternas no Semiárido",
      category: "Recursos Hídricos",
      area: "Resiliência Climática",
      description: "Tecnologias sociais de baixo custo para acesso à água de beber e produção, aumentando a resiliência climática.",
      fullContent: "O Programa Cisternas difunde tecnologias sociais (cisternas de placa, calçadões, barreiros) para acesso à água de beber e produção, aumentando a resiliência climática e reduzindo custos de carros-pipa.",
      implementationGuide: {
        steps: [
          "Diagnóstico hídrico: identifique famílias sem acesso regular à água",
          "Tecnologia adequada: escolha tipo de cisterna (consumo vs. produção)",
          "Mobilização comunitária: mutirões, treinamento e manutenção participativa",
          "Fornecimento: compras de materiais locais; pedreiros capacitados",
          "Educação sanitária: cloração, limpeza e proteção da água armazenada",
          "Monitoramento: visitas semestrais; registro de uso e manutenção"
        ],
        team: "1 coord., 1 engenheiro(a)/técnico(a), 2 instrutores(as)",
        costs: "Material de construção, ferramentas, transporte",
        indicators: "Nº de cisternas instaladas; dias/ano com água; redução de doenças hídricas",
        risks: "Manutenção negligenciada (comitês locais); má qualidade da água (protocolos simples de tratamento)"
      },
      impact: "Acesso à água potável e redução de custos com carros-pipa",
      difficulty: 'Baixa',
      cost: 'Baixo',
      timeToImplement: "2-4 meses",
      successRate: 94,
      icon: <Droplets className="h-6 w-6" />,
      tags: ["água", "tecnologia social", "semiárido", "resiliência"],
      slug: "programa-cisternas"
    },
    'orcamento-participativo': {
      id: 6,
      title: "Orçamento Participativo",
      category: "Gestão Democrática",
      area: "Transparência",
      description: "Cidadãos decidem diretamente sobre parte do orçamento municipal, priorizando investimentos por região e tema.",
      fullContent: "O OP envolve moradores na decisão direta sobre parte do orçamento. Fortalece confiança, melhora a alocação de recursos e aumenta a legitimidade das obras priorizadas.",
      implementationGuide: {
        steps: [
          "Percentual do orçamento: defina 1–5% do investimento anual para o OP",
          "Regras claras: calendário público, critérios de elegibilidade e teto por bairro",
          "Assembleias territoriais: presenciais e digitais; voto simples (ex.: 3 prioridades por região)",
          "Comitê de Acompanhamento: moradores monitoram obras e prazos",
          "Portal de transparência: cronograma, contratos e fotos de execução",
          "Ciclo anual: revisar regras e prestar contas"
        ],
        team: "1 coord. participação, 1 comunicador(a), 1 apoio TI",
        costs: "Comunicação, plataforma de votação simples, facilitação de reuniões",
        indicators: "Nº de participantes; % obras concluídas no prazo; satisfação dos bairros",
        risks: "Captura política (regras e rodízio de liderança); baixa adesão (divulgação e canais digitais)"
      },
      impact: "Aumento da participação cidadã e melhoria da alocação de recursos",
      difficulty: 'Baixa',
      cost: 'Baixo',
      timeToImplement: "2-3 meses",
      successRate: 85,
      icon: <Vote className="h-6 w-6" />,
      tags: ["participação", "transparência", "orçamento", "democracia"],
      slug: "orcamento-participativo"
    },
    'pacto-pela-vida': {
      id: 7,
      title: "Pacto Pela Vida - Pernambuco",
      category: "Segurança Pública",
      area: "Prevenção à Violência",
      description: "Governança integrada com metas por território, monitoramento semanal e prevenção qualificada.",
      fullContent: "O Pacto Pela Vida reduziu homicídios ao integrar governança intersetorial, metas por território, monitoramento semanal, prevenção social e responsabilização. A lógica é gestão por resultados, com foco em dados e coordenação.",
      implementationGuide: {
        steps: [
          "Gabinete de Gestão Integrada: Prefeito(a), Polícia, Ministério Público, Judiciário, Assistência e Saúde",
          "Diagnóstico territorial: mapas de crime e fatores de risco (iluminação, evasão, violência doméstica)",
          "Metas e indicadores: redução de CVLI, resposta a BO, medidas protetivas",
          "Rotina de monitoramento: reuniões quinzenais com painéis simples",
          "Prevenção focalizada: mediação de conflitos, patrulha escolar, iluminação pública, juventudes",
          "Comunicação & controle social"
        ],
        team: "1 coord., 1 analista de dados, forças de segurança e rede social",
        costs: "Iluminação, câmeras em pontos críticos, centro de monitoramento enxuto",
        indicators: "Homicídios por 100 mil; tempo de resposta; medidas protetivas cumpridas",
        risks: "Deslocamento do crime (coordenação regional); dados frágeis (padronização de registros)"
      },
      impact: "Redução significativa de homicídios e melhoria da segurança",
      difficulty: 'Alta',
      cost: 'Alto',
      timeToImplement: "6-12 meses",
      successRate: 91,
      icon: <Shield className="h-6 w-6" />,
      tags: ["segurança", "integração", "monitoramento", "territórios"],
      slug: "pacto-pela-vida"
    },
    'alfabetizacao-idade-certa': {
      id: 8,
      title: "Sobral - Alfabetização na Idade Certa",
      category: "Educação",
      area: "Educação Básica",
      description: "Foco radical em alfabetização até o 2º ano com avaliação frequente e apoio pedagógico contínuo.",
      fullContent: "A estratégia de alfabetização até o 2º ano com avaliação frequente, materiais padronizados e formação continuada elevou o desempenho educacional (IDEB). A lógica é foco, monitoramento e apoio pedagógico à escola.",
      implementationGuide: {
        steps: [
          "Meta central: 100% das crianças alfabetizadas até o 2º ano",
          "Currículo e materiais: padronize rotinas, sequências didáticas e avaliações bimestrais",
          "Formação continuada: encontros mensais com acompanhamento pedagógico em sala",
          "Gestão escolar: diretores com metas e apoio; substituição rápida de faltas",
          "Apoio à família: kits de leitura para casa; campanhas de frequência",
          "Transparência: metas por escola e devolutivas públicas"
        ],
        team: "1 coord. pedagógico municipal, formadores(as) e diretores(as)",
        costs: "Materiais didáticos, avaliações, formação",
        indicators: "% alfabetizadas 2º ano; IDEB/SAEB; frequência escolar",
        risks: "Resistência (pilotos e tutoria entre pares); desigualdades (apoio extra à escola vulnerável)"
      },
      impact: "Melhoria significativa do IDEB e da alfabetização infantil",
      difficulty: 'Média',
      cost: 'Médio',
      timeToImplement: "4-6 meses",
      successRate: 96,
      icon: <BookOpen className="h-6 w-6" />,
      tags: ["alfabetização", "avaliação", "formação", "IDEB"],
      slug: "alfabetizacao-idade-certa"
    },
    'brt-curitiba': {
      id: 9,
      title: "BRT de Curitiba e Rede Integrada",
      category: "Mobilidade Urbana",
      area: "Transporte Público",
      description: "Transporte coletivo estruturante com integração tarifária e desenho urbano orientado ao ônibus.",
      fullContent: "O modelo de BRT e integração tarifária de Curitiba tornou o ônibus rápido, confiável e estruturante do crescimento urbano. Mesmo em cidades pequenas, princípios como corredores preferenciais, pontos qualificados e integração melhoram o transporte.",
      implementationGuide: {
        steps: [
          "Eixos prioritários: identifique 1–2 avenidas para faixas preferenciais",
          "Paradas de qualidade: abrigo, iluminação, informação em tempo real (QR code)",
          "Integração: bilhetagem única e linhas alimentadoras com micro-ônibus",
          "Gestão de frota: monitoramento GPS simples, horários confiáveis",
          "Urbanismo tático: faixas de ônibus pintadas, traffic calming e calçadas acessíveis",
          "Avaliação: pesquisas de satisfação e tempo de viagem"
        ],
        team: "1 coord. mobilidade, 1 engenheiro(a) tráfego, 1 TI bilhetagem",
        costs: "Pintura/faixas, abrigos, sistema simples de bilhete/QR",
        indicators: "Velocidade média; pontualidade; demanda por linha",
        risks: "Resistência de motoristas (campanhas e fiscalização); falta de demanda (inicie com horários de pico)"
      },
      impact: "Melhoria do transporte público e estruturação do crescimento urbano",
      difficulty: 'Alta',
      cost: 'Alto',
      timeToImplement: "12-24 meses",
      successRate: 87,
      icon: <Bus className="h-6 w-6" />,
      tags: ["transporte", "integração", "mobilidade", "urbanismo"],
      slug: "brt-curitiba"
    },
    'poupatempo-sala-cidadao': {
      id: 10,
      title: "Poupatempo / Sala do Cidadão Municipal",
      category: "Serviços Digitais",
      area: "Desburocratização",
      description: "Balcão único de serviços com processos simplificados e digitalização para reduzir tempo e burocracia.",
      fullContent: "O Poupatempo consolidou em um único lugar (físico/digital) diversos serviços, com processos simplificados, tempo de atendimento reduzido e experiência do usuário no centro. Em municípios pequenos, a versão 'Sala do Cidadão' integra balcões e gov.br.",
      implementationGuide: {
        steps: [
          "Mapa de Serviços: liste serviços mais demandados (2ª via, alvarás, IPTU, certidões)",
          "Simplificação: revise exigências; elimine documentos redundantes; fluxos 100% digitais quando possível",
          "Balcão Único: espaço físico central + portal online com chat/WhatsApp",
          "Prazos & SLA: metas de tempo por serviço e painel público de desempenho",
          "UX e inclusão: linguagem simples, acessibilidade, atendimento guiado",
          "Identidade Digital: integração com gov.br e assinaturas eletrônicas"
        ],
        team: "1 coord. serviços, 2 atendentes, 1 TI/processos",
        costs: "Reforma leve do espaço, portal simples, treinamento",
        indicators: "Tempo médio de atendimento; nº de serviços digitalizados; satisfação do usuário",
        risks: "Resistência interna (Kaizen e pilotos); baixa adesão digital (totens de autoatendimento)"
      },
      impact: "Redução drástica do tempo de atendimento e melhoria da experiência",
      difficulty: 'Média',
      cost: 'Médio',
      timeToImplement: "3-6 meses",
      successRate: 93,
      icon: <Building className="h-6 w-6" />,
      tags: ["digitalização", "desburocratização", "atendimento", "gov.br"],
      slug: "poupatempo-sala-cidadao"
    }
  };

  const idea = slug ? ideasData[slug as string] : null;

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

  if (!idea) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="card-glass p-12 text-center">
          <h1 className="text-2xl font-bold text-gray-600 mb-4">Política não encontrada</h1>
          <p className="text-gray-500 mb-6">A política que você está procurando não existe ou foi removida.</p>
          <Link href="/bank/ideas" className="btn-glass-primary px-6 py-3 rounded-lg">
            Voltar ao Banco de Ideias
          </Link>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Baixa': return 'text-green-600 bg-green-100';
      case 'Média': return 'text-yellow-600 bg-yellow-100';
      case 'Alta': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getCostColor = (cost: string) => {
    switch (cost) {
      case 'Baixo': return 'text-green-600 bg-green-100';
      case 'Médio': return 'text-yellow-600 bg-yellow-100';
      case 'Alto': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <>
      <Head>
        <title>{idea.title} - Guia de Implementação | PolicyLabs</title>
        <meta name="description" content={idea.description} />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Standard Navbar */}
        <header className="card-glass mx-6 mt-4 px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <img src="/logo.svg" alt="PolicyLabs" className="h-8 w-8" />
                <span className="text-xl font-bold">PolicyLabs</span>
              </Link>
              <span className="text-sm text-gray-600">
                Olá, {user?.full_name}
              </span>
            </div>

            <div className="flex items-center">
              <h1 className="text-xl font-semibold">{idea.title}</h1>
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
              <Link href="/bank/ideas" className="btn-glass text-sm">
                Voltar
              </Link>
            </div>
          </div>
        </header>

        <main className="mx-6 mt-6 pb-8">
          <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="card-glass p-8 mb-8">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white">
                  {idea.icon}
                </div>
                <div>
                  <h1 className="text-3xl font-bold mb-2">{idea.title}</h1>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                      {idea.category}
                    </span>
                    <span>•</span>
                    <span>{idea.area}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-lg">
                <Star className="h-5 w-5 text-green-600" />
                <span className="text-green-800 font-semibold">{idea.successRate}% sucesso</span>
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {idea.fullContent}
            </p>

            {/* Quick Metrics */}
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-center mb-2">
                  <BarChart3 className="h-5 w-5 text-gray-600 mr-1" />
                  <span className="text-sm text-gray-600">Dificuldade</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyColor(idea.difficulty)}`}>
                  {idea.difficulty}
                </span>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-center mb-2">
                  <DollarSign className="h-5 w-5 text-gray-600 mr-1" />
                  <span className="text-sm text-gray-600">Custo</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCostColor(idea.cost)}`}>
                  {idea.cost}
                </span>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="h-5 w-5 text-gray-600 mr-1" />
                  <span className="text-sm text-gray-600">Tempo</span>
                </div>
                <span className="text-gray-800 font-semibold">{idea.timeToImplement}</span>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-5 w-5 text-gray-600 mr-1" />
                  <span className="text-sm text-gray-600">Taxa de Sucesso</span>
                </div>
                <span className="text-green-600 font-semibold">{idea.successRate}%</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Implementation Guide */}
              <div className="card-glass p-8">
                <div className="flex items-center mb-6">
                  <Settings className="h-6 w-6 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold">Guia de Implementação</h2>
                </div>

                <div className="space-y-4">
                  {idea.implementationGuide.steps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-gray-700">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact */}
              <div className="card-glass p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-6 w-6 text-green-600 mr-3" />
                  <h2 className="text-2xl font-bold">Impacto Esperado</h2>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <p className="text-green-800 text-lg">{idea.impact}</p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Team */}
              <div className="card-glass p-6">
                <div className="flex items-center mb-4">
                  <Users className="h-5 w-5 text-purple-600 mr-2" />
                  <h3 className="font-bold">Time Mínimo</h3>
                </div>
                <p className="text-gray-700 text-sm">{idea.implementationGuide.team}</p>
              </div>

              {/* Costs */}
              <div className="card-glass p-6">
                <div className="flex items-center mb-4">
                  <DollarSign className="h-5 w-5 text-green-600 mr-2" />
                  <h3 className="font-bold">Custos Típicos</h3>
                </div>
                <p className="text-gray-700 text-sm">{idea.implementationGuide.costs}</p>
              </div>

              {/* Indicators */}
              <div className="card-glass p-6">
                <div className="flex items-center mb-4">
                  <BarChart3 className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="font-bold">Indicadores</h3>
                </div>
                <p className="text-gray-700 text-sm">{idea.implementationGuide.indicators}</p>
              </div>

              {/* Risks */}
              <div className="card-glass p-6">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="h-5 w-5 text-red-600 mr-2" />
                  <h3 className="font-bold">Riscos & Mitigação</h3>
                </div>
                <p className="text-gray-700 text-sm">{idea.implementationGuide.risks}</p>
              </div>

              {/* Tags */}
              <div className="card-glass p-6">
                <h3 className="font-bold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {idea.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="card-glass p-6">
                <h3 className="font-bold mb-4">Ações</h3>
                <div className="space-y-3">
                  <Link href="/register" className="w-full btn-glass-primary py-3 text-center block rounded-lg">
                    Implementar Agora
                  </Link>
                  <Link href="/dashboard" className="w-full btn-glass py-3 text-center block rounded-lg">
                    Simular no Quadro
                  </Link>
                  <button className="w-full btn-glass py-3 text-center block rounded-lg">
                    Exportar Guia PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default IdeaDetailPage;