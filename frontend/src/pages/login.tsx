import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Head>
        <title>Entrar - PolicyLabs APSS</title>
        <meta name="description" content="Acesse sua conta PolicyLabs APSS" />
      </Head>

      {/* Navigation */}
      <nav className="nav-glass px-6 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="PolicyLabs" className="h-8 w-8" />
            <span className="text-xl font-bold">PolicyLabs APSS</span>
          </Link>

          <div className="flex space-x-4">
            <Link href="/register" className="btn-glass">Criar Conta</Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 px-6 min-h-screen flex items-center justify-center">
        <div className="card-glass p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-8">Entrar</h1>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="input-glass"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Senha</label>
              <input
                type="password"
                className="input-glass"
                placeholder="Sua senha"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Lembrar de mim</span>
              </label>
              <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                Esqueci minha senha
              </Link>
            </div>

            <button className="btn-glass w-full py-3 text-lg">
              Entrar
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Não tem uma conta?{' '}
              <Link href="/register" className="text-primary hover:underline">
                Criar conta gratuita
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}