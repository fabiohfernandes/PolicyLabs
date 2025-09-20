import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface RegistrationForm {
  email: string;
  password: string;
  full_name: string;
  phone?: string;
  municipality_name?: string;
}

interface RegistrationResponse {
  message: string;
  user_id: string;
  secret: string;
  qr_code: string;
  backup_codes: string[];
  requires_2fa_setup: boolean;
  verification_code: string;
  note: string;
}

export default function RegisterPage() {
  const router = useRouter();
  const [step, setStep] = useState<'register' | 'setup-2fa' | 'complete'>('register');
  const [formData, setFormData] = useState<RegistrationForm>({
    email: '',
    password: '',
    full_name: '',
    phone: '',
    municipality_name: ''
  });
  const [registrationData, setRegistrationData] = useState<RegistrationResponse | null>(null);
  const [tofaCode, setTofaCode] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const complete2FASetup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/complete-registration`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          totp_code: tofaCode
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store tokens for immediate login
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('refresh_token', data.refresh_token);

        setStep('complete');
        setSuccess('🎉 Conta criada e 2FA configurado com sucesso! Você já está logado.');

        setTimeout(() => {
          router.push('/dashboard');
        }, 2000);
      } else {
        setError(data.detail || 'Código 2FA inválido. Tente novamente.');
      }
    } catch (err) {
      setError('Erro de conexão. Verifique sua internet e tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setSuccess('Copiado para a área de transferência!');
    setTimeout(() => setSuccess(''), 2000);
  };

  const downloadBackupCodes = () => {
    if (!registrationData) return;

    const content = `PolicyLabs APSS - Códigos de Backup 2FA\n\nGerados em: ${new Date().toLocaleDateString()}\n\n${registrationData.backup_codes.join('\n')}\n\nGuarde estes códigos em local seguro! Cada código só pode ser usado uma vez.`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'policylabs-codigos-backup.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!acceptTerms) {
      setError('Você deve aceitar os Termos de Uso e Política de Privacidade');
      return;
    }

    if (formData.password.length < 8) {
      setError('A senha deve ter pelo menos 8 caracteres');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          full_name: formData.full_name,
          phone: formData.phone || undefined,
          municipality_name: formData.municipality_name || undefined
        }),
      });

      const data: RegistrationResponse = await response.json();

      if (response.ok) {
        setRegistrationData(data);
        setStep('setup-2fa');
        setSuccess('🎉 Conta criada com sucesso! Configure agora o 2FA para ativar sua conta.');
      } else {
        setError(data.detail || 'Erro ao criar conta. Tente novamente.');
      }
    } catch (err) {
      setError('Erro de conexão. Verifique sua internet e tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const getStepTitle = () => {
    switch (step) {
      case 'register': return 'Criar Conta';
      case 'setup-2fa': return 'Configurar 2FA';
      case 'complete': return 'Conta Criada!';
      default: return 'Criar Conta';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Head>
        <title>Criar Conta - PolicyLabs APSS</title>
        <meta name="description" content="Crie sua conta gratuita PolicyLabs APSS com 2FA obrigatório" />
      </Head>

      {/* Navigation */}
      <nav className="card-glass fixed top-0 w-full z-50 px-6 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="PolicyLabs" className="h-8 w-8" />
            <span className="text-xl font-bold">PolicyLabs APSS</span>
          </Link>

          <div className="flex space-x-4">
            <Link href="/login" className="btn-glass">Entrar</Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 px-6 min-h-screen flex items-center justify-center">
        <div className="card-glass p-8 w-full max-w-2xl">

          {/* Progress indicator */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step === 'register' ? 'bg-blue-600 text-white' : step === 'setup-2fa' || step === 'complete' ? 'bg-green-600 text-white' : 'bg-gray-300'}`}>
                {step === 'register' ? '1' : step === 'setup-2fa' || step === 'complete' ? '✓' : '1'}
              </div>
              <div className="w-16 h-1 bg-gray-300">
                <div className={`h-full ${step === 'setup-2fa' || step === 'complete' ? 'bg-green-600' : 'bg-gray-300'} transition-all duration-300`}></div>
              </div>
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step === 'setup-2fa' ? 'bg-blue-600 text-white' : step === 'complete' ? 'bg-green-600 text-white' : 'bg-gray-300'}`}>
                {step === 'complete' ? '✓' : '2'}
              </div>
              <div className="w-16 h-1 bg-gray-300">
                <div className={`h-full ${step === 'complete' ? 'bg-green-600' : 'bg-gray-300'} transition-all duration-300`}></div>
              </div>
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step === 'complete' ? 'bg-green-600 text-white' : 'bg-gray-300'}`}>
                {step === 'complete' ? '✓' : '3'}
              </div>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-center mb-8">{getStepTitle()}</h1>

          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              {success}
            </div>
          )}

          {/* Step 1: Registration Form */}
          {step === 'register' && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nome Completo *</label>
                  <input
                    type="text"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                </div>

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
                    minLength={8}
                    className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Mínimo 8 caracteres"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Telefone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Município</label>
                <input
                  type="text"
                  name="municipality_name"
                  value={formData.municipality_name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Nome do seu município"
                />
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="mr-2 mt-1"
                  required
                />
                <span className="text-sm">
                  Aceito os{' '}
                  <Link href="/terms" className="text-blue-600 hover:underline">
                    Termos de Uso
                  </Link>{' '}
                  e{' '}
                  <Link href="/privacy" className="text-blue-600 hover:underline">
                    Política de Privacidade
                  </Link>
                </span>
              </div>

              <button
                type="submit"
                disabled={isLoading || !acceptTerms}
                className="bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-sm border border-white/30 rounded-xl w-full py-3 text-lg font-medium transition-all duration-300 text-white hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Criando conta...' : '1. Criar Conta → Configurar 2FA'}
              </button>
            </form>
          )}

          {/* Step 2: 2FA Setup */}
          {step === 'setup-2fa' && registrationData && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-xl font-semibold mb-2">🔐 Configure a Autenticação de Dois Fatores</h2>
                <p className="text-gray-600">
                  Para completar seu cadastro, configure o 2FA escaneando o QR code com seu app autenticador
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-lg font-semibold mb-4">1. Escaneie o QR Code</h3>
                <div className="bg-white p-4 rounded-lg inline-block mb-4">
                  <img src={registrationData.qr_code} alt="QR Code for 2FA" className="w-48 h-48 mx-auto" />
                </div>

                <p className="text-sm text-gray-500 mb-4">
                  Use Google Authenticator, Authy ou Microsoft Authenticator
                </p>

                <div className="bg-gray-100 p-3 rounded-lg text-sm font-mono break-all">
                  {registrationData.secret}
                  <button
                    onClick={() => copyToClipboard(registrationData.secret)}
                    className="ml-2 text-blue-600 hover:text-blue-800"
                  >
                    📋 Copiar
                  </button>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">2. Códigos de Backup</h3>
                <p className="text-gray-600 mb-4">
                  Guarde estes códigos em local seguro. Use se perder acesso ao autenticador.
                </p>

                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <div className="grid grid-cols-2 gap-2 text-sm font-mono">
                    {registrationData.backup_codes.map((code, index) => (
                      <div key={index} className="bg-white p-2 rounded text-center">
                        {code}
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={downloadBackupCodes}
                  className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  📥 Baixar Códigos
                </button>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">3. Verificar e Ativar</h3>
                <p className="text-gray-600 mb-4">
                  Digite o código de 6 dígitos do seu aplicativo autenticador
                </p>

                <form onSubmit={complete2FASetup} className="space-y-4">
                  <input
                    type="text"
                    value={tofaCode}
                    onChange={(e) => setTofaCode(e.target.value)}
                    maxLength={6}
                    placeholder="000000"
                    className="w-full p-4 text-center text-2xl tracking-widest rounded-lg bg-white/20 border border-white/30 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />

                  <button
                    type="submit"
                    disabled={isLoading || tofaCode.length !== 6}
                    className="w-full bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-sm border border-white/30 rounded-xl py-3 text-lg font-medium transition-all duration-300 text-white hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Verificando...' : '2. Ativar 2FA e Concluir Cadastro'}
                  </button>
                </form>
              </div>

            </div>
          )}

          {/* Step 3: Complete */}
          {step === 'complete' && (
            <div className="text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-2xl font-bold mb-4">Conta Criada com Sucesso!</h2>
              <p className="text-gray-600 mb-8">
                Sua conta foi criada e o 2FA foi configurado. Você já está logado e sendo redirecionado para o Quadro.
              </p>

              <Link
                href="/dashboard"
                className="inline-block bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-sm border border-white/30 rounded-xl px-8 py-3 text-lg font-medium transition-all duration-300 text-white hover:scale-105"
              >
                Voltar
              </Link>
            </div>
          )}

          {step === 'register' && (
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                Já tem uma conta?{' '}
                <Link href="/login" className="text-blue-600 hover:underline">
                  Entrar
                </Link>
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}