import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import {
  ChartBarIcon,
  GlobeAltIcon,
  UserGroupIcon,
  CogIcon,
  PlayIcon,
  ArrowRightIcon,
  SunIcon,
  MoonIcon,
} from '@heroicons/react/24/outline';
import { Button, Card, CardContent, CardHeader, CardTitle, Modal, ModalBody, ModalFooter } from '@/components/ui';
import { cn } from '@/utils/cn';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleInCenter = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, ease: 'easeOut' }
};

// Demo Modal Component
function DemoModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    municipality: '',
    position: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement demo booking logic
    console.log('Demo booking:', formData);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Agendar Demonstração"
      description="Vamos apresentar como o APSS pode transformar a gestão do seu município"
      size="lg"
    >
      <ModalBody>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Nome Completo</label>
              <input
                type="text"
                className="input-glass w-full"
                placeholder="Seu nome"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="input-glass w-full"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Município</label>
              <input
                type="text"
                className="input-glass w-full"
                placeholder="Nome do município"
                value={formData.municipality}
                onChange={(e) => setFormData({ ...formData, municipality: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Cargo</label>
              <select
                className="input-glass w-full"
                value={formData.position}
                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                required
              >
                <option value="">Selecione seu cargo</option>
                <option value="prefeito">Prefeito(a)</option>
                <option value="secretario">Secretário(a)</option>
                <option value="assessor">Assessor(a)</option>
                <option value="vereador">Vereador(a)</option>
                <option value="outro">Outro</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Telefone (opcional)</label>
            <input
              type="tel"
              className="input-glass w-full"
              placeholder="(00) 00000-0000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button variant="ghost" onClick={onClose}>
          Cancelar
        </Button>
        <Button onClick={handleSubmit} variant="primary">
          Agendar Demo
        </Button>
      </ModalFooter>
    </Modal>
  );
}

// Theme Toggle Component
function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="glass"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="fixed top-4 right-4 z-50"
      aria-label="Alternar tema"
    >
      {theme === 'dark' ? (
        <SunIcon className="h-5 w-5" />
      ) : (
        <MoonIcon className="h-5 w-5" />
      )}
    </Button>
  );
}

export default function LandingPage() {
  const [showDemo, setShowDemo] = useState(false);

  const features = [
    {
      icon: ChartBarIcon,
      title: 'PolicyDNA™',
      description: 'IA que analisa 85% de precisão em políticas similares para seu contexto municipal',
      color: 'text-primary-500',
    },
    {
      icon: GlobeAltIcon,
      title: 'Gêmeo Digital',
      description: 'Simulação em tempo real do seu município com dados IoT e cenários realistas',
      color: 'text-accent-500',
    },
    {
      icon: UserGroupIcon,
      title: 'Engajamento Cidadão',
      description: 'Plataforma democrática onde cidadãos participam ativamente das decisões',
      color: 'text-success-500',
    },
    {
      icon: CogIcon,
      title: 'Ultra-Simplicidade',
      description: 'Interface desenhada para prefeitos sem formação técnica - 5 cliques máximo',
      color: 'text-warning-500',
    },
  ];

  const stats = [
    { number: '85%', label: 'Precisão em Predições' },
    { number: '50%', label: 'Redução de Tempo' },
    { number: '2.1M', label: 'Cidadãos Impactados' },
    { number: '247', label: 'Municípios Ativos' },
  ];

  const pricingTiers = [
    {
      name: 'APSS Free',
      price: 'Gratuito',
      description: 'Para municípios até 25k habitantes',
      features: [
        '3 simulações por mês',
        'Templates básicos',
        'Suporte comunitário',
        'Citizen engagement limitado',
      ],
      cta: 'Começar Grátis',
      highlighted: false,
    },
    {
      name: 'APSS Starter',
      price: 'R$ 20k/mês',
      description: 'Para municípios 25k-50k habitantes',
      features: [
        '10 simulações por mês',
        'PolicyDNA™ básico',
        'Citizen engagement completo',
        'Suporte por email',
        'Documentos automáticos',
      ],
      cta: 'Agendar Demo',
      highlighted: true,
    },
    {
      name: 'APSS Professional',
      price: 'R$ 50k/mês',
      description: 'Para municípios 50k-100k habitantes',
      features: [
        'Simulações ilimitadas',
        'CausalAI Framework',
        'Digital Twin básico',
        'Suporte telefônico',
        'Integrações avançadas',
      ],
      cta: 'Falar com Vendas',
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-secondary-950 dark:via-secondary-900 dark:to-secondary-950">
      <ThemeToggle />

      {/* Navigation */}
      <nav className="nav-glass dark:nav-glass-dark">
        <div className="container-glass py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PL</span>
              </div>
              <span className="text-xl font-bold text-gradient">PolicyLabs</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-secondary-600 hover:text-primary-600 transition-colors">
                Recursos
              </a>
              <a href="#pricing" className="text-secondary-600 hover:text-primary-600 transition-colors">
                Preços
              </a>
              <a href="#contact" className="text-secondary-600 hover:text-primary-600 transition-colors">
                Contato
              </a>
              <Button variant="glass-primary" onClick={() => setShowDemo(true)}>
                Agendar Demo
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container-glass">
          <motion.div
            className="text-center max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-gradient mb-6"
              variants={fadeInUp}
            >
              Onde a Política
              <br />
              Encontra a Precisão
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-secondary-600 dark:text-secondary-300 mb-8 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              O primeiro sistema de IA que simula políticas públicas com 85% de precisão,
              transformando prefeitos em gestores de excelência
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              variants={fadeInUp}
            >
              <Button
                size="xl"
                onClick={() => setShowDemo(true)}
                leftIcon={<PlayIcon className="h-5 w-5" />}
                className="min-w-[200px]"
              >
                Ver Demo Ao Vivo
              </Button>

              <Button
                variant="glass-primary"
                size="xl"
                rightIcon={<ArrowRightIcon className="h-5 w-5" />}
                className="min-w-[200px]"
              >
                Começar Grátis
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              variants={scaleInCenter}
            >
              {stats.map((stat, index) => (
                <Card key={index} variant="glass" className="text-center">
                  <CardContent className="p-4">
                    <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
                    <div className="text-sm text-secondary-600 dark:text-secondary-400">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-r from-transparent via-white/50 to-transparent dark:via-secondary-900/50">
        <div className="container-glass">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gradient mb-4">
              Tecnologia que Transforma Governos
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
              Desenvolvido especificamente para a realidade brasileira, onde 73% dos prefeitos
              carecem de formação em administração pública
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card variant="elevated" className="h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className={cn('p-3 rounded-xl glass', feature.color)}>
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-secondary-600 dark:text-secondary-300">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container-glass">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gradient mb-4">
              Planos Para Cada Município
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
              Do freemium ao enterprise, temos a solução ideal para o seu tamanho e orçamento
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  variant={tier.highlighted ? "primary" : "default"}
                  className={cn(
                    "h-full",
                    tier.highlighted && "scale-105 shadow-glass-xl"
                  )}
                >
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <div className="text-3xl font-bold text-gradient mb-2">{tier.price}</div>
                    <p className="text-sm text-secondary-600 dark:text-secondary-400">
                      {tier.description}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <svg
                            className="h-5 w-5 text-success-500 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      variant={tier.highlighted ? "primary" : "glass-primary"}
                      fullWidth
                      onClick={() => setShowDemo(true)}
                    >
                      {tier.cta}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-accent-500">
        <div className="container-glass text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Pronto para Transformar Seu Município?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Junte-se aos 247 municípios que já usam o APSS para tomar decisões
              baseadas em evidências e maximizar o impacto social
            </p>
            <Button
              size="xl"
              variant="glass"
              onClick={() => setShowDemo(true)}
              className="bg-white/20 text-white border-white/30 hover:bg-white/30"
            >
              Começar Agora - É Grátis
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-secondary-900 dark:bg-secondary-950">
        <div className="container-glass">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PL</span>
              </div>
              <span className="text-xl font-bold text-white">PolicyLabs</span>
            </div>

            <div className="text-secondary-400 text-sm">
              © 2025 PolicyLabs. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>

      {/* Demo Modal */}
      <DemoModal isOpen={showDemo} onClose={() => setShowDemo(false)} />
    </div>
  );
}