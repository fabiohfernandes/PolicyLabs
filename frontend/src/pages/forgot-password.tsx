import React from 'react';
n<div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
import Head from 'next/head';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  return (
    <>
      <Head>
        <title>Recuperar Senha - PolicyLabs APSS</title>
        <meta name="description" content="Recupere sua senha PolicyLabs APSS" />
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
            <Link href="/register" className="btn-glass">Criar Conta</Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 px-6 min-h-screen flex items-center justify-center">
        <div className="card-glass p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-8">Recuperar Senha</h1>

          <p className="text-center text-gray-600 mb-8">
            Digite seu email e enviaremos um link para redefinir sua senha.
          </p>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30"
                placeholder="seu@email.com"
              />
            </div>

            <button className="btn-glass w-full py-3 text-lg">
              Enviar Link de Recuperação
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Lembrou da senha?{' '}
              <Link href="/login" className="text-primary hover:underline">
                Entrar
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
</div>
}