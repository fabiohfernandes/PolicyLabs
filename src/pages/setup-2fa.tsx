import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ThemeToggle } from '@/components/ThemeToggle';

interface TwoFASetupResponse {
  secret: string;
  qr_code: string;
  backup_codes: string[];
  message: string;
}

export default function Setup2FAPage() {
  const router = useRouter();
  const [step, setStep] = useState<'loading' | 'setup' | 'verify' | 'complete'>('loading');
  const [qrCode, setQrCode] = useState<string>('');
  const [secret, setSecret] = useState<string>('');
  const [backupCodes, setBackupCodes] = useState<string[]>([]);
  const [verificationCode, setVerificationCode] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  useEffect(() => {
    initiate2FASetup();
  }, []);

  const initiate2FASetup = async () => {
    try {
      const token = localStorage.getItem('access_token');
      if (!token) {
        router.push('/login');
        return;
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/setup-2fa`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data: TwoFASetupResponse = await response.json();
        setQrCode(data.qr_code);
        setSecret(data.secret);
        setBackupCodes(data.backup_codes);
        setStep('setup');
      } else {
        const errorData = await response.json();
        setError(errorData.detail || 'Failed to initiate 2FA setup');
        setStep('setup');
      }
    } catch (err) {
      setError('Network error. Please try again.');
      setStep('setup');
    }
  };

  const verify2FA = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const token = localStorage.getItem('access_token');
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/verify-2fa`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          totp_code: verificationCode
        }),
      });

      if (response.ok) {
        setSuccess('2FA has been successfully enabled for your account!');
        setStep('complete');
      } else {
        const errorData = await response.json();
        setError(errorData.detail || 'Invalid verification code');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setSuccess('Copied to clipboard!');
    setTimeout(() => setSuccess(''), 2000);
  };

  const downloadBackupCodes = () => {
    const content = `PolicyLabs APSS - 2FA Backup Codes\n\nGenerated: ${new Date().toLocaleDateString()}\n\n${backupCodes.join('\n')}\n\nKeep these codes safe! Each code can only be used once.`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'policylabs-backup-codes.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Head>
        <title>Configurar 2FA - PolicyLabs</title>
        <meta name="description" content="Configure two-factor authentication for your PolicyLabs account" />
      </Head>

      {/* Navigation */}
      <header className="mx-6 mt-4 px-6 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <Link href="/dashboard" className="flex items-center space-x-4">
              <img src="/logo.svg" alt="PolicyLabs" className="h-8 w-8" />
              <span className="text-xl font-bold text-gray-900 dark:text-gray-100">PolicyLabs</span>
            </Link>
          </div>

          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Configurar 2FA</h1>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle variant="icon" size="sm" />
            <Link href="/dashboard" className="btn-glass text-sm">
              Voltar
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-6 px-6 min-h-screen flex items-center justify-center">
        <div className="bg-white/25 backdrop-blur-sm border border-white/30 rounded-2xl p-8 w-full max-w-2xl">

          {step === 'loading' && (
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-4">Configurando 2FA...</h1>
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            </div>
          )}

          {step === 'setup' && (
            <>
              <h1 className="text-3xl font-bold text-center mb-8">Configurar Autenticação de Dois Fatores</h1>

              {error && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  {error}
                </div>
              )}

              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-xl font-semibold mb-4">1. Escaneie o QR Code</h2>
                  <p className="text-gray-600 mb-4">
                    Use um aplicativo autenticador como Google Authenticator, Authy ou Microsoft Authenticator
                  </p>

                  {qrCode && (
                    <div className="bg-white p-4 rounded-lg inline-block mb-4">
                      <img src={qrCode} alt="QR Code for 2FA" className="w-48 h-48 mx-auto" />
                    </div>
                  )}

                  <p className="text-sm text-gray-500 mb-4">
                    Não consegue escanear? Use este código manual:
                  </p>
                  <div className="bg-gray-100 p-3 rounded-lg text-sm font-mono break-all">
                    {secret}
                    <button
                      onClick={() => copyToClipboard(secret)}
                      className="ml-2 text-blue-600 hover:text-blue-800"
                    >
                      📋 Copiar
                    </button>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h2 className="text-xl font-semibold mb-4">2. Códigos de Backup</h2>
                  <p className="text-gray-600 mb-4">
                    Salve estes códigos em um local seguro. Você pode usá-los se perder acesso ao seu autenticador.
                  </p>

                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <div className="grid grid-cols-2 gap-2 text-sm font-mono">
                      {backupCodes.map((code, index) => (
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
                  <h2 className="text-xl font-semibold mb-4">3. Verificar Configuração</h2>
                  <p className="text-gray-600 mb-4">
                    Digite o código de 6 dígitos do seu aplicativo autenticador
                  </p>

                  <form onSubmit={verify2FA} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                        maxLength={6}
                        placeholder="000000"
                        className="w-full p-4 text-center text-2xl tracking-widest rounded-lg bg-white/20 border border-white/30 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading || verificationCode.length !== 6}
                      className="w-full bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-sm border border-white/30 rounded-xl py-3 text-lg font-medium transition-all duration-300 text-white hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? 'Verificando...' : 'Ativar 2FA'}
                    </button>
                  </form>
                </div>
              </div>
            </>
          )}

          {step === 'complete' && (
            <div className="text-center">
              <div className="text-6xl mb-4">✅</div>
              <h1 className="text-3xl font-bold mb-4">2FA Ativado com Sucesso!</h1>
              <p className="text-gray-600 mb-8">
                Sua conta agora está protegida com autenticação de dois fatores.
              </p>

              <div className="space-y-4">
                <Link
                  href="/dashboard"
                  className="inline-block bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-sm border border-white/30 rounded-xl px-8 py-3 text-lg font-medium transition-all duration-300 text-white hover:scale-105"
                >
                  Voltar
                </Link>

                <div className="pt-4">
                  <p className="text-sm text-gray-500">
                    A partir de agora, você precisará inserir um código do seu autenticador ao fazer login.
                  </p>
                </div>
              </div>
            </div>
          )}

          {success && step !== 'complete' && (
            <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              {success}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}