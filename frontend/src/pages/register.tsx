import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Head>
        <title>Criar Conta - PolicyLabs APSS</title>
        <meta name="description" content="Crie sua conta gratuita PolicyLabs APSS" />
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
        <div className="card-glass p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-8">Criar Conta</h1>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Nome Completo</label>
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30"
                placeholder="Seu nome completo"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Senha</label>
              <input
                type="password"
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30"
                placeholder="Mínimo 8 caracteres"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Cargo/Função</label>
              <select className="w-full p-3 rounded-lg bg-white/20 border border-white/30">
                <option value="">Selecione seu cargo</option>
                <option value="prefeito">Prefeito(a)</option>
                <option value="secretario">Secretário(a)</option>
                <option value="assessor">Assessor(a)</option>
                <option value="vereador">Vereador(a)</option>
                <option value="funcionario">Funcionário Público</option>
                <option value="cidadao">Cidadão</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Município</label>
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30"
                placeholder="Nome do seu município"
              />
            </div>

            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">
                Aceito os{' '}
                <Link href="/terms" className="text-primary hover:underline">
                  Termos de Uso
                </Link>{' '}
                e{' '}
                <Link href="/privacy" className="text-primary hover:underline">
                  Política de Privacidade
                </Link>
              </span>
            </div>

            <button className="btn-glass w-full py-3 text-lg">
              Criar Conta Gratuita
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Já tem uma conta?{' '}
              <Link href="/login" className="text-primary hover:underline">
                Entrar
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}