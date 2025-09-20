import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface LoginForm {
  email: string;
  password: string;
  totp_code?: string;
  remember_me: boolean;
}

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<LoginForm>({
    email: '',
    password: '',
    totp_code: '',
    remember_me: false
  });

  // Pre-fill email from query parameter (from registration redirect)
  React.useEffect(() => {
    if (router.query.email) {
      setFormData(prev => ({
        ...prev,
        email: router.query.email as string
      }));
    }
  }, [router.query.email]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          totp_code: formData.totp_code || undefined,
          remember_me: formData.remember_me
        }),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.requires_2fa) {
          setError('Por favor, preencha o código 2FA para continuar.');
        } else {
          // Store tokens
          localStorage.setItem('access_token', data.access_token);
          localStorage.setItem('refresh_token', data.refresh_token);
          localStorage.setItem('user', JSON.stringify(data.user));

          // Redirect to dashboard
          router.push('/dashboard');
        }
      } else {
        if (data.detail?.includes('verify')) {
          setError('⚠️ Conta não verificada. Para testes, todas as contas são auto-verificadas. Tente registrar uma nova conta.');
        } else {
          setError(data.detail || 'Erro ao fazer login. Verifique suas credenciais.');
        }
      }
    } catch (err) {
      setError('Erro de conexão. Verifique sua internet e tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Head>
        <title>Entrar - PolicyLabs APSS</title>
        <meta name="description" content="Acesse sua conta PolicyLabs APSS" />
      </Head>

      {/* Navigation */}
      <nav className="bg-white/25 backdrop-blur-sm border border-white/30 rounded-2xl mx-6 mt-4 px-6 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="PolicyLabs" className="h-8 w-8" />
            <span className="text-xl font-bold">PolicyLabs APSS</span>
          </Link>

          <div className="flex space-x-4">
            <Link href="/register" className="bg-white/25 backdrop-blur-sm border border-white/30 rounded-xl px-6 py-3 font-medium transition-all duration-300 text-gray-800 hover:scale-105">Criar Conta</Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 px-6 min-h-screen flex items-center justify-center">
        <div className="bg-white/25 backdrop-blur-sm border border-white/30 rounded-2xl p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-8">Entrar</h1>

          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          <div className="mb-4 p-3 bg-blue-100 border border-blue-400 text-blue-700 rounded-lg">
            🔐 2FA é obrigatório para todas as contas
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Senha *</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Sua senha"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Código 2FA *</label>
              <input
                type="text"
                name="totp_code"
                value={formData.totp_code}
                onChange={handleChange}
                required
                maxLength={6}
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-2xl tracking-widest"
                placeholder="000000"
              />
              <p className="text-xs text-gray-600 mt-1">
                Digite o código de 6 dígitos do seu aplicativo autenticador
              </p>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="remember_me"
                  checked={formData.remember_me}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span className="text-sm">Lembrar de mim</span>
              </label>
              <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                Esqueci minha senha
              </Link>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-sm border border-white/30 rounded-xl w-full py-3 text-lg font-medium transition-all duration-300 text-white hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Entrando...' : 'Entrar'}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Não tem uma conta?{' '}
              <Link href="/register" className="text-blue-600 hover:underline">
                Criar conta gratuita
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}