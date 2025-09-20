import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChartBarIcon,
  GlobeAltIcon,
  UserGroupIcon,
  CogIcon,
  PlayIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import { MainLayout } from '@/components/layout/MainLayout';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { useTheme } from '@/contexts/ThemeContext';

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
  const { theme } = useTheme();
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

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: theme.colors.background.overlay,
        backdropFilter: theme.blur.heavy,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
      }}
      onClick={onClose}
    >
      <GlassCard
        variant="elevated"
        style={{
          maxWidth: '600px',
          width: '100%',
          padding: '32px',
        }}
        onClick={(e: any) => e.stopPropagation()}
      >
        <div style={{ marginBottom: '24px' }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: '700',
            color: theme.colors.text.primary,
            marginBottom: '8px',
          }}>
            Agendar Demonstração
          </h2>
          <p style={{
            color: theme.colors.text.secondary,
            fontSize: '16px',
          }}>
            Vamos apresentar como o APSS pode transformar a gestão do seu município
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
            <div>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: theme.colors.text.primary,
                marginBottom: '8px',
              }}>
                Nome Completo
              </label>
              <input
                type="text"
                placeholder="Seu nome"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '8px',
                  background: theme.colors.glass.background,
                  border: `1px solid ${theme.colors.glass.border}`,
                  color: theme.colors.text.primary,
                  fontSize: '16px',
                  outline: 'none',
                  backdropFilter: theme.blur.light,
                }}
              />
            </div>
            <div>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: theme.colors.text.primary,
                marginBottom: '8px',
              }}>
                Email
              </label>
              <input
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '8px',
                  background: theme.colors.glass.background,
                  border: `1px solid ${theme.colors.glass.border}`,
                  color: theme.colors.text.primary,
                  fontSize: '16px',
                  outline: 'none',
                  backdropFilter: theme.blur.light,
                }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
            <div>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: theme.colors.text.primary,
                marginBottom: '8px',
              }}>
                Município
              </label>
              <input
                type="text"
                placeholder="Nome do município"
                value={formData.municipality}
                onChange={(e) => setFormData({ ...formData, municipality: e.target.value })}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '8px',
                  background: theme.colors.glass.background,
                  border: `1px solid ${theme.colors.glass.border}`,
                  color: theme.colors.text.primary,
                  fontSize: '16px',
                  outline: 'none',
                  backdropFilter: theme.blur.light,
                }}
              />
            </div>
            <div>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: theme.colors.text.primary,
                marginBottom: '8px',
              }}>
                Cargo
              </label>
              <select
                value={formData.position}
                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '8px',
                  background: theme.colors.glass.background,
                  border: `1px solid ${theme.colors.glass.border}`,
                  color: theme.colors.text.primary,
                  fontSize: '16px',
                  outline: 'none',
                  backdropFilter: theme.blur.light,
                }}
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
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              color: theme.colors.text.primary,
              marginBottom: '8px',
            }}>
              Telefone (opcional)
            </label>
            <input
              type="tel"
              placeholder="(00) 00000-0000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                background: theme.colors.glass.background,
                border: `1px solid ${theme.colors.glass.border}`,
                color: theme.colors.text.primary,
                fontSize: '16px',
                outline: 'none',
                backdropFilter: theme.blur.light,
              }}
            />
          </div>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '24px' }}>
            <GlassButton variant="ghost" onClick={onClose}>
              Cancelar
            </GlassButton>
            <GlassButton variant="primary" onClick={handleSubmit}>
              Agendar Demo
            </GlassButton>
          </div>
        </form>
      </GlassCard>
    </div>
  );
}


export default function LandingPage() {
  const { theme } = useTheme();
  const [showDemo, setShowDemo] = useState(false);

  // Helper function to safely get theme colors
  const getThemeColor = (colorKey: string, fallback: string) => {
    if (!theme || !theme.colors) return fallback;
    const keys = colorKey.split('.');
    let value: any = theme.colors;
    for (const key of keys) {
      value = value?.[key];
      if (!value) return fallback;
    }
    return value;
  };

  // Safe theme access with fallbacks
  const safeTheme = {
    colors: {
      background: {
        overlay: theme?.colors?.background?.overlay || 'rgba(0, 0, 0, 0.5)',
      },
      text: {
        primary: theme?.colors?.text?.primary || '#1f2937',
        secondary: theme?.colors?.text?.secondary || '#6b7280',
        inverse: theme?.colors?.text?.inverse || '#ffffff',
      },
      glass: {
        background: theme?.colors?.glass?.background || 'rgba(255, 255, 255, 0.1)',
        border: theme?.colors?.glass?.border || 'rgba(255, 255, 255, 0.2)',
      },
      brand: {
        gradient: theme?.colors?.brand?.gradient || 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
        primary: theme?.colors?.brand?.primary || '#3b82f6',
      },
      status: {
        success: theme?.colors?.status?.success || '#10b981',
        warning: theme?.colors?.status?.warning || '#f59e0b',
      },
      interactive: {
        primary: theme?.colors?.interactive?.primary || '#8b5cf6',
      },
    },
    blur: {
      heavy: theme?.blur?.heavy || 'blur(20px)',
      light: theme?.blur?.light || 'blur(10px)',
    },
    shadows: {
      glass: theme?.shadows?.glass || '0 8px 32px rgba(0, 0, 0, 0.1)',
    },
  };

  const features = [
    {
      icon: ChartBarIcon,
      title: 'PolicyDNA™',
      description: 'IA que analisa 85% de precisão em políticas similares para seu contexto municipal',
      colorFallback: '#6366f1',
      colorKey: 'brand.primary',
    },
    {
      icon: GlobeAltIcon,
      title: 'Gêmeo Digital',
      description: 'Simulação em tempo real do seu município com dados IoT e cenários realistas',
      colorFallback: '#10b981',
      colorKey: 'status.success',
    },
    {
      icon: UserGroupIcon,
      title: 'Engajamento Cidadão',
      description: 'Plataforma democrática onde cidadãos participam ativamente das decisões',
      colorFallback: '#8b5cf6',
      colorKey: 'interactive.primary',
    },
    {
      icon: CogIcon,
      title: 'Ultra-Simplicidade',
      description: 'Interface desenhada para prefeitos sem formação técnica - 5 cliques máximo',
      colorFallback: '#f59e0b',
      colorKey: 'status.warning',
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
    <MainLayout title="PolicyLabs APSS" showHeader={false}>
      <div style={{ minHeight: '100vh' }}>
        {/* Custom Navigation for Landing Page */}
        <nav style={{
          position: 'sticky',
          top: 0,
          zIndex: 40,
          padding: '16px 24px',
        }}>
          <GlassCard variant="elevated" style={{
            padding: '16px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: getThemeColor('brand.gradient', '#3B82F6'),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: getThemeColor('text.inverse', '#FFFFFF'),
                fontWeight: 'bold',
                fontSize: '14px',
              }}>
                PL
              </div>
              <span style={{
                fontSize: '20px',
                fontWeight: 'bold',
                background: theme.colors.brand.gradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                PolicyLabs
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
              <div style={{ display: 'flex', gap: '24px' }}>
                <a href="#features" style={{
                  color: theme.colors.text.secondary,
                  textDecoration: 'none',
                  transition: theme.animations.glass,
                  fontSize: '16px',
                }}>
                  Recursos
                </a>
                <a href="#pricing" style={{
                  color: theme.colors.text.secondary,
                  textDecoration: 'none',
                  transition: theme.animations.glass,
                  fontSize: '16px',
                }}>
                  Preços
                </a>
                <a href="#contact" style={{
                  color: theme.colors.text.secondary,
                  textDecoration: 'none',
                  transition: theme.animations.glass,
                  fontSize: '16px',
                }}>
                  Contato
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <ThemeToggle variant="switch" showLabel={false} />
                <GlassButton variant="primary" onClick={() => setShowDemo(true)}>
                  Agendar Demo
                </GlassButton>
              </div>
            </div>
          </GlassCard>
        </nav>

        {/* Hero Section */}
        <section style={{ padding: '80px 24px 80px 24px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <motion.div
              style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.h1
                style={{
                  fontSize: 'clamp(3rem, 8vw, 5rem)',
                  fontWeight: '700',
                  background: theme.colors.brand.gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '24px',
                  lineHeight: '1.1',
                }}
                variants={fadeInUp}
              >
                Onde a Política
                <br />
                Encontra a Precisão
              </motion.h1>

              <motion.p
                style={{
                  fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                  color: theme.colors.text.secondary,
                  marginBottom: '48px',
                  maxWidth: '800px',
                  margin: '0 auto 48px auto',
                  lineHeight: '1.5',
                }}
                variants={fadeInUp}
              >
                O primeiro sistema de IA que simula políticas públicas com 85% de precisão,
                transformando prefeitos em gestores de excelência
              </motion.p>

              <motion.div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '64px',
                }}
                variants={fadeInUp}
              >
                <GlassButton
                  size="xl"
                  onClick={() => setShowDemo(true)}
                  icon={<PlayIcon style={{ width: '20px', height: '20px' }} />}
                  style={{ minWidth: '200px' }}
                >
                  Ver Demo Ao Vivo
                </GlassButton>

                <GlassButton
                  variant="secondary"
                  size="xl"
                  icon={<ArrowRightIcon style={{ width: '20px', height: '20px' }} />}
                  iconPosition="right"
                  style={{ minWidth: '200px' }}
                >
                  Começar Grátis
                </GlassButton>
              </motion.div>

              {/* Stats */}
              <motion.div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '24px',
                }}
                variants={scaleInCenter}
              >
                {stats.map((stat, index) => (
                  <GlassCard key={index} variant="default" style={{ textAlign: 'center', padding: '24px' }}>
                    <div style={{
                      fontSize: '2.5rem',
                      fontWeight: '700',
                      background: theme.colors.brand.gradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      marginBottom: '8px',
                    }}>
                      {stat.number}
                    </div>
                    <div style={{
                      fontSize: '14px',
                      color: theme.colors.text.secondary,
                    }}>
                      {stat.label}
                    </div>
                  </GlassCard>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" style={{
          padding: '80px 24px',
          background: `linear-gradient(90deg, transparent 0%, ${theme.colors.background.overlay} 50%, transparent 100%)`,
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <motion.div
              style={{ textAlign: 'center', marginBottom: '64px' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                background: theme.colors.brand.gradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '16px',
              }}>
                Tecnologia que Transforma Governos
              </h2>
              <p style={{
                fontSize: '1.25rem',
                color: theme.colors.text.secondary,
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: '1.6',
              }}>
                Desenvolvido especificamente para a realidade brasileira, onde 73% dos prefeitos
                carecem de formação em administração pública
              </p>
            </motion.div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '32px',
            }}>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <GlassCard variant="elevated" style={{ height: '100%', padding: '32px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                      <div style={{
                        padding: '12px',
                        borderRadius: '12px',
                        background: theme?.colors?.glass?.background || 'rgba(255, 255, 255, 0.1)',
                        border: `1px solid ${theme?.colors?.glass?.border || 'rgba(255, 255, 255, 0.2)'}`,
                        color: getThemeColor(feature.colorKey, feature.colorFallback),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        <feature.icon style={{ width: '24px', height: '24px' }} />
                      </div>
                      <h3 style={{
                        fontSize: '1.5rem',
                        fontWeight: '600',
                        color: theme.colors.text.primary,
                        margin: 0,
                      }}>
                        {feature.title}
                      </h3>
                    </div>
                    <p style={{
                      color: theme.colors.text.secondary,
                      lineHeight: '1.6',
                      margin: 0,
                    }}>
                      {feature.description}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" style={{ padding: '80px 24px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <motion.div
              style={{ textAlign: 'center', marginBottom: '64px' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                background: theme.colors.brand.gradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '16px',
              }}>
                Planos Para Cada Município
              </h2>
              <p style={{
                fontSize: '1.25rem',
                color: theme.colors.text.secondary,
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: '1.6',
              }}>
                Do freemium ao enterprise, temos a solução ideal para o seu tamanho e orçamento
              </p>
            </motion.div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '32px',
            }}>
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <GlassCard
                    variant={tier.highlighted ? "elevated" : "default"}
                    style={{
                      height: '100%',
                      padding: '32px',
                      transform: tier.highlighted ? 'scale(1.05)' : 'scale(1)',
                      border: tier.highlighted ? `2px solid ${theme.colors.brand.primary}` : undefined,
                    }}
                  >
                    <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                      <h3 style={{
                        fontSize: '1.5rem',
                        fontWeight: '600',
                        color: theme.colors.text.primary,
                        marginBottom: '8px',
                      }}>
                        {tier.name}
                      </h3>
                      <div style={{
                        fontSize: '2rem',
                        fontWeight: '700',
                        background: theme.colors.brand.gradient,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        marginBottom: '8px',
                      }}>
                        {tier.price}
                      </div>
                      <p style={{
                        fontSize: '0.875rem',
                        color: theme.colors.text.secondary,
                      }}>
                        {tier.description}
                      </p>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {tier.features.map((feature, featureIndex) => (
                          <li key={featureIndex} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            marginBottom: '12px',
                          }}>
                            <div style={{
                              width: '20px',
                              height: '20px',
                              borderRadius: '50%',
                              background: theme.colors.status.success,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                            }}>
                              <span style={{
                                color: 'white',
                                fontSize: '12px',
                                fontWeight: 'bold',
                              }}>
                                ✓
                              </span>
                            </div>
                            <span style={{
                              fontSize: '0.875rem',
                              color: theme.colors.text.primary,
                            }}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <GlassButton
                      variant={tier.highlighted ? "primary" : "secondary"}
                      fullWidth
                      onClick={() => setShowDemo(true)}
                    >
                      {tier.cta}
                    </GlassButton>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{
          padding: '80px 24px',
          background: theme.colors.brand.gradient,
          position: 'relative',
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: theme.colors.text.inverse,
                marginBottom: '16px',
              }}>
                Pronto para Transformar Seu Município?
              </h2>
              <p style={{
                fontSize: '1.25rem',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '32px',
                maxWidth: '600px',
                margin: '0 auto 32px auto',
                lineHeight: '1.6',
              }}>
                Junte-se aos 247 municípios que já usam o APSS para tomar decisões
                baseadas em evidências e maximizar o impacto social
              </p>
              <GlassButton
                size="xl"
                variant="ghost"
                onClick={() => setShowDemo(true)}
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                }}
              >
                Começar Agora - É Grátis
              </GlassButton>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          padding: '48px 24px',
          background: theme.colors.background.secondary,
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '16px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: theme.colors.brand.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: theme.colors.text.inverse,
                  fontWeight: 'bold',
                  fontSize: '14px',
                }}>
                  PL
                </div>
                <span style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: theme.colors.text.primary,
                }}>
                  PolicyLabs
                </span>
              </div>

              <div style={{
                fontSize: '0.875rem',
                color: theme.colors.text.secondary,
              }}>
                © 2025 PolicyLabs. Todos os direitos reservados.
              </div>
            </div>
          </div>
        </footer>

        {/* Demo Modal */}
        <DemoModal isOpen={showDemo} onClose={() => setShowDemo(false)} />
      </div>
    </MainLayout>
  );
}