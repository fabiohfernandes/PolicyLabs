import { useState, useEffect } from 'react';
import { getSession, signIn, getProviders, getCsrfToken } from 'next-auth/react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import {
  EyeIcon,
  EyeSlashIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';
import { Button, Card, CardContent, CardHeader, CardTitle, Input } from '@/components/ui';
import { cn } from '@/utils/cn';
import { toast } from 'react-hot-toast';

interface SignInPageProps {
  csrfToken?: string;
}

export default function SignIn({ csrfToken }: SignInPageProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    mfaCode: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showMFA, setShowMFA] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const { error, callbackUrl } = router.query;

  useEffect(() => {
    // Check if user is already signed in
    getSession().then((session) => {
      if (session) {
        router.push(callbackUrl as string || '/dashboard');
      }
    });
  }, [router, callbackUrl]);

  useEffect(() => {
    // Display error messages
    if (error) {
      const errorMessages: { [key: string]: string } = {
        Signin: 'Erro ao fazer login. Tente novamente.',
        OAuthSignin: 'Erro ao fazer login com provedor externo.',
        OAuthCallback: 'Erro no callback de autenticação.',
        OAuthCreateAccount: 'Erro ao criar conta.',
        EmailCreateAccount: 'Erro ao criar conta com email.',
        Callback: 'Erro no callback de autenticação.',
        OAuthAccountNotLinked: 'Esta conta não está vinculada. Use o mesmo método de login.',
        EmailSignin: 'Erro ao enviar email de verificação.',
        CredentialsSignin: 'Credenciais inválidas. Verifique email e senha.',
        default: 'Ocorreu um erro inesperado. Tente novamente.',
      };

      toast.error(errorMessages[error as string] || errorMessages.default);
    }
  }, [error]);

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Formato de email inválido';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Senha é obrigatória';
    } else if (formData.password.length < 12) {
      newErrors.password = 'Senha deve ter pelo menos 12 caracteres';
    }

    // MFA validation (if shown)
    if (showMFA && !formData.mfaCode) {
      newErrors.mfaCode = 'Código 2FA é obrigatório';
    } else if (showMFA && !/^\d{6}$/.test(formData.mfaCode)) {
      newErrors.mfaCode = 'Código deve ter 6 dígitos';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const result = await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        mfaCode: formData.mfaCode,
        redirect: false,
      });

      if (result?.error) {
        // Check if MFA is required
        if (result.error.includes('2FA')) {
          setShowMFA(true);
          toast.error('Código 2FA necessário');
        } else {
          toast.error(result.error);
        }
      } else if (result?.ok) {
        toast.success('Login realizado com sucesso!');
        router.push(callbackUrl as string || '/dashboard');
      }
    } catch (error) {
      console.error('Sign in error:', error);
      toast.error('Erro interno. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-secondary-950 dark:via-secondary-900 dark:to-secondary-950 flex items-center justify-center p-4">
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">PL</span>
            </div>
            <span className="text-2xl font-bold text-gradient">PolicyLabs</span>
          </div>
          <h1 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100 mb-2">
            Acesso ao Sistema
          </h1>
          <p className="text-secondary-600 dark:text-secondary-400">
            Sistema AI Policy Simulation - Acesso Governamental
          </p>
        </div>

        {/* Security Notice */}
        <Card variant="warning" className="mb-6">
          <CardContent className="p-4">
            <div className="flex items-start space-x-3">
              <ShieldCheckIcon className="h-5 w-5 text-warning-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-warning-800 dark:text-warning-200 mb-1">
                  Sistema Governamental Seguro
                </p>
                <p className="text-warning-700 dark:text-warning-300">
                  Este sistema é protegido por criptografia de nível governamental.
                  Todas as ações são auditadas e registradas.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Login Form */}
        <Card variant="elevated">
          <CardHeader>
            <CardTitle className="text-center">Fazer Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input name="csrfToken" type="hidden" defaultValue={csrfToken} />

              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                  Email Governamental
                </label>
                <Input
                  type="email"
                  placeholder="prefeito@cidade.gov.br"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  error={errors.email}
                  disabled={isLoading}
                  className="w-full"
                  autoComplete="email"
                  required
                />
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                  Senha
                </label>
                <div className="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Digite sua senha"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    error={errors.password}
                    disabled={isLoading}
                    className="w-full pr-10"
                    autoComplete="current-password"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary-400 hover:text-secondary-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeSlashIcon className="h-5 w-5" />
                    ) : (
                      <EyeIcon className="h-5 w-5" />
                    )}
                  </button>
                </div>
                <p className="text-xs text-secondary-500 mt-1">
                  Mínimo 12 caracteres para segurança governamental
                </p>
              </div>

              {/* MFA Code Input (conditional) */}
              {showMFA && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                    Código 2FA
                  </label>
                  <Input
                    type="text"
                    placeholder="000000"
                    value={formData.mfaCode}
                    onChange={(e) => handleInputChange('mfaCode', e.target.value.replace(/\D/g, '').slice(0, 6))}
                    error={errors.mfaCode}
                    disabled={isLoading}
                    className="w-full text-center text-lg tracking-widest"
                    maxLength={6}
                    autoComplete="one-time-code"
                  />
                  <p className="text-xs text-secondary-500 mt-1">
                    Digite o código de 6 dígitos do seu aplicativo autenticador
                  </p>
                </motion.div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                fullWidth
                size="lg"
                loading={isLoading}
                disabled={isLoading}
                className="mt-6"
              >
                {isLoading ? 'Autenticando...' : 'Entrar no Sistema'}
              </Button>

              {/* Additional Options */}
              <div className="text-center space-y-2 pt-4 border-t border-secondary-200 dark:border-secondary-700">
                <a
                  href="/auth/forgot-password"
                  className="text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                >
                  Esqueceu sua senha?
                </a>
                <br />
                <a
                  href="/auth/register"
                  className="text-sm text-secondary-600 hover:text-secondary-700 dark:text-secondary-400 dark:hover:text-secondary-300"
                >
                  Primeiro acesso? Registre-se aqui
                </a>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Footer Info */}
        <div className="text-center mt-6 text-xs text-secondary-500">
          <p>PolicyLabs APSS v1.0 - Sistema Certificado para Governo</p>
          <p>Conforme LGPD e normas de segurança governamental</p>
        </div>
      </motion.div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}