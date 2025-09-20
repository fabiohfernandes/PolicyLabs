import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    municipality: '',
    role: '',
    phone: '',
    message: '',
    interest: 'demo'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Obrigado pelo contato! Entraremos em contato em até 24h.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Head>
        <title>Contato | PolicyLabs APSS</title>
        <meta name="description" content="Entre em contato com a equipe PolicyLabs APSS" />
      </Head>

      {/* Navigation Header */}
      <header className="card-glass mx-6 mt-4 px-6 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/logo.svg" alt="PolicyLabs" className="h-8 w-8" />
              <span className="text-xl font-bold">PolicyLabs APSS</span>
            </Link>
          </div>

          <div className="hidden md:flex space-x-6">
            <Link href="/product" className="hover:text-blue-600">Produto</Link>
            <Link href="/pricing" className="hover:text-blue-600">Preços</Link>
            <Link href="/cases" className="hover:text-blue-600">Casos de Sucesso</Link>
            <Link href="/resources" className="hover:text-blue-600">Recursos</Link>
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            <Link href="/contact" className="text-blue-600 font-medium">Contato</Link>
          </div>

          <div className="flex space-x-4">
            <Link href="/login" className="btn-glass">Entrar</Link>
            <Link href="/register" className="btn-glass-primary">Começar Grátis</Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="pt-4">
        <section className="card-glass mx-6 mt-8 p-12 text-center">
          <h1 className="text-5xl font-bold mb-6 text-gradient">
            Fale Conosco
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Transforme sua gestão pública com o PolicyLabs APSS
          </p>
          <p className="text-lg text-gray-500 mb-8 max-w-4xl mx-auto">
            Entre em contato para agendar uma demonstração ou esclarecer dúvidas sobre nossa plataforma
          </p>
        </section>

        <div className="mx-6 mt-16 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="card-glass p-8">
            <h2 className="text-2xl font-bold mb-6">
              Solicitar Demonstração
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Município *
                  </label>
                  <input
                    type="text"
                    name="municipality"
                    value={formData.municipality}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nome do município"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cargo/Função *
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Selecione...</option>
                    <option value="prefeito">Prefeito(a)</option>
                    <option value="vice-prefeito">Vice-Prefeito(a)</option>
                    <option value="secretario">Secretário(a)</option>
                    <option value="assessor">Assessor(a)</option>
                    <option value="ti">Responsável TI</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Interesse Principal
                </label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="demo">Agendar Demonstração</option>
                  <option value="pricing">Informações sobre Preços</option>
                  <option value="implementation">Implementação</option>
                  <option value="support">Suporte Técnico</option>
                  <option value="partnership">Parceria</option>
                  <option value="other">Outros</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Conte-nos mais sobre suas necessidades..."
                />
              </div>

              <button
                type="submit"
                className="btn-glass-primary w-full text-lg py-4"
              >
                Enviar Solicitação
              </button>

              <p className="text-sm text-gray-500 text-center">
                Responderemos em até 24 horas úteis
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div className="card-glass p-8">
              <h2 className="text-2xl font-bold mb-6">
                Contato Direto
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">contato@policylabs.ai</p>
                    <p className="text-sm text-gray-500">Resposta em até 24h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-xl">📱</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">WhatsApp</h3>
                    <p className="text-gray-600">+55 (11) 99999-0000</p>
                    <p className="text-sm text-gray-500">Seg-Sex, 8h às 18h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Telefone</h3>
                    <p className="text-gray-600">+55 (11) 3000-0000</p>
                    <p className="text-sm text-gray-500">Seg-Sex, 8h às 18h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-xl">🏢</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Escritório</h3>
                    <p className="text-gray-600">
                      Av. Paulista, 1000<br />
                      São Paulo - SP, 01310-100
                    </p>
                    <p className="text-sm text-gray-500">Visitas com agendamento</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card-glass p-8">
              <h2 className="text-2xl font-bold mb-6">
                Ações Rápidas
              </h2>

              <div className="space-y-4">
                <Link href="/register" className="btn-glass-primary w-full py-3 text-center block">
                  🚀 Começar Teste Gratuito
                </Link>

                <Link href="/pricing" className="btn-glass w-full py-3 text-center block">
                  💰 Ver Planos e Preços
                </Link>

                <Link href="/resources" className="btn-glass w-full py-3 text-center block">
                  📚 Centro de Recursos
                </Link>

                <Link href="/cases" className="btn-glass w-full py-3 text-center block">
                  ⭐ Casos de Sucesso
                </Link>
              </div>
            </div>

            {/* FAQ Quick */}
            <div className="card-glass p-8">
              <h2 className="text-2xl font-bold mb-6">
                Perguntas Frequentes
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-sm mb-1">
                    Quanto tempo leva a implementação?
                  </h3>
                  <p className="text-sm text-gray-600">
                    Entre 15 a 30 dias úteis, dependendo do porte do município.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-sm mb-1">
                    Oferece suporte técnico?
                  </h3>
                  <p className="text-sm text-gray-600">
                    Sim, suporte 24/7 via chat, email e telefone.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-sm mb-1">
                    Posso testar antes de assinar?
                  </h3>
                  <p className="text-sm text-gray-600">
                    Sim, oferecemos 30 dias gratuitos para teste completo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="card-glass mx-6 mt-16 p-8">
        <div className="text-center">
          <Link href="/" className="text-blue-600 hover:text-blue-700">
            ← Voltar para Home
          </Link>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; 2025 PolicyLabs Tecnologia Ltda. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}