import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  context?: string;
}

interface Chat {
  id: string;
  title: string;
  type: 'generic' | 'project' | 'ideas' | 'projects' | 'docs';
  projectId?: string;
  lastMessage?: string;
  timestamp: Date;
  messages: Message[];
}

interface Project {
  id: string;
  name: string;
  description: string;
}

interface User {
  id: string;
  email: string;
  full_name: string;
  role: string;
  is_verified: boolean;
  two_factor_enabled: boolean;
  created_at: string;
}

export default function LocalIAPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentChatId, setCurrentChatId] = useState<string>('2');
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Mock data with one existing chat
  const [chats, setChats] = useState<Chat[]>([
    {
      id: '2',
      title: 'Projeto: Mobilidade Urbana 2024',
      type: 'project',
      projectId: 'proj_1',
      lastMessage: 'Análise de dados de tráfego...',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
      messages: [
      ]
    }
  ]);

  const [projects] = useState<Project[]>([
    { id: 'proj_1', name: 'Mobilidade Urbana 2024', description: 'Melhoria do transporte público e redução de congestionamentos' },
    { id: 'proj_2', name: 'Parque Sustentável', description: 'Criação de área verde com energia renovável' },
    { id: 'proj_3', name: 'Digitalização Municipal', description: 'Modernização dos serviços públicos digitais' }
  ]);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
    } else {
      // Temporary bypass for testing - create a mock user
      const mockUser = {
        id: 'test-user',
        email: 'test@test.com',
        full_name: 'Usuário Teste',
        role: 'admin',
        is_verified: true,
        two_factor_enabled: false,
        created_at: new Date().toISOString()
      };
      setUser(mockUser);
    }
    setIsLoading(false);
  }, [router]);

  useEffect(() => {
    scrollToBottom();
  }, [currentChatId, chats]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const createNewChat = (type: Chat['type'], projectId?: string) => {
    const chatTitles = {
      generic: 'Novo Chat',
      project: `Chat: ${projects.find(p => p.id === projectId)?.name || 'Projeto'}`,
      ideas: 'Chat: Banco de Ideias',
      projects: 'Chat: Banco de Projetos',
      docs: 'Chat: Banco de Documentos'
    };

    const newChat: Chat = {
      id: Date.now().toString(),
      title: chatTitles[type],
      type,
      projectId,
      timestamp: new Date(),
      messages: []
    };

    setChats(prev => [newChat, ...prev]);
    setCurrentChatId(newChat.id);
  };

  const sendMessage = async () => {
    if (!message.trim() || !currentChatId) return;

    const currentChat = chats.find(c => c.id === currentChatId);
    if (!currentChat) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: message.trim(),
      timestamp: new Date(),
      context: currentChat.type !== 'generic' ? currentChat.title : undefined
    };

    // Add user message
    setChats(prev => prev.map(chat =>
      chat.id === currentChatId
        ? { ...chat, messages: [...chat.messages, userMessage], lastMessage: message.trim() }
        : chat
    ));

    const messageToSend = message.trim();
    setMessage('');
    setIsTyping(true);

    try {
      // For static deployment - mock response
      const data = {
        response: `Esta é uma resposta de demonstração do PolicyLabs APSS para: "${messageToSend}"\n\nEste sistema de IA está otimizado para auxiliar gestores públicos brasileiros com:\n\n• Análise de políticas públicas\n• Sugestões de implementação\n• Benchmarking municipal\n• Simulações de impacto\n\nPara acessar a funcionalidade completa com OpenAI GPT-4, entre em contato conosco para ativar sua conta.`
      };

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: data.response,
        timestamp: new Date()
      };

      setChats(prev => prev.map(chat =>
        chat.id === currentChatId
          ? { ...chat, messages: [...chat.messages, assistantMessage] }
          : chat
      ));
    } catch (error) {
      console.error('Error calling OpenAI:', error);

      // Fallback response in case of error
      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: 'Desculpe, ocorreu um erro ao processar sua mensagem. Por favor, tente novamente ou verifique sua conexão.',
        timestamp: new Date()
      };

      setChats(prev => prev.map(chat =>
        chat.id === currentChatId
          ? { ...chat, messages: [...chat.messages, errorResponse] }
          : chat
      ));
    } finally {
      setIsTyping(false);
    }
  };

  const getCurrentChat = () => chats.find(c => c.id === currentChatId);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Chat PolicyLabs | PolicyLabs</title>
        <meta name="description" content="Assistente de IA para gestão pública municipal" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Standard Navbar */}
        <header className="card-glass mx-6 mt-4 px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="flex items-center space-x-2">
                <img src="/logo.svg" alt="PolicyLabs" className="h-8 w-8" />
                <span className="text-xl font-bold">PolicyLabs</span>
              </Link>
              <span className="text-sm text-gray-600">
                Olá, {user?.full_name}
              </span>
            </div>

            <div className="flex items-center">
              <h1 className="text-xl font-semibold">Chat PolicyLabs</h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">
                  {new Date().toLocaleString('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
              </div>
              <Link href="/dashboard" className="btn-glass text-sm">
                Voltar
              </Link>
            </div>
          </div>
        </header>

        <main className="mx-6 mt-6 pb-8">
          <div className="h-[calc(100vh-150px)] flex">
            {/* Sidebar */}
            <div className="w-80 card-glass border-r border-white/30 flex flex-col">
              {/* Header */}
              <div className="p-4 border-b border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-lg font-bold">🔍 Pesquisa IA</h1>
                </div>

                {/* New Chat Buttons */}
                <div className="space-y-2">
                  <button
                    onClick={() => createNewChat('generic')}
                    className="w-full btn-glass-primary px-4 py-2 rounded-lg transition-colors text-sm"
                  >
                    ➕ Novo Chat
                  </button>

                  {/* Project Chats */}
                  <div className="relative group">
                    <button className="w-full btn-glass px-4 py-2 rounded-lg transition-colors text-sm">
                      📁 Chat por Projeto ▼
                    </button>
                    <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 shadow-lg rounded-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                      <div className="p-2 space-y-1">
                        {projects.map(project => (
                          <button
                            key={project.id}
                            onClick={() => createNewChat('project', project.id)}
                            className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded text-gray-800"
                          >
                            📁 {project.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bank Connections */}
                  <div className="grid grid-cols-3 gap-1">
                    <button
                      onClick={() => createNewChat('ideas')}
                      className="btn-glass px-2 py-2 rounded text-xs transition-colors"
                    >
                      💡 Ideias
                    </button>
                    <button
                      onClick={() => createNewChat('projects')}
                      className="btn-glass px-2 py-2 rounded text-xs transition-colors"
                    >
                      📁 Projetos
                    </button>
                    <button
                      onClick={() => createNewChat('docs')}
                      className="btn-glass px-2 py-2 rounded text-xs transition-colors"
                    >
                      📄 Docs
                    </button>
                  </div>
                </div>
              </div>

              {/* Chat List */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-2 space-y-1">
                  {chats.map(chat => (
                    <button
                      key={chat.id}
                      onClick={() => setCurrentChatId(chat.id)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        currentChatId === chat.id
                          ? 'bg-white/30 border border-white/40'
                          : 'hover:bg-white/20'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-xs">
                              {chat.type === 'generic' && '💬'}
                              {chat.type === 'project' && '📁'}
                              {chat.type === 'ideas' && '💡'}
                              {chat.type === 'projects' && '📊'}
                              {chat.type === 'docs' && '📄'}
                            </span>
                            <span className="text-sm font-medium truncate">{chat.title}</span>
                          </div>
                          {chat.lastMessage && (
                            <p className="text-xs text-gray-500 truncate">{chat.lastMessage}</p>
                          )}
                        </div>
                        <span className="text-xs text-gray-400 ml-2">
                          {chat.timestamp.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col">
              {currentChatId ? (
                <>
                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {getCurrentChat()?.messages.map(msg => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-3xl rounded-lg p-5 ${
                            msg.type === 'user'
                              ? 'btn-glass-primary text-white'
                              : 'card-glass border border-white/30'
                          }`}
                          style={{ minHeight: '1.2em' }}
                        >
                          {msg.context && (
                            <div className="text-xs opacity-75 mb-2">
                              📎 {msg.context}
                            </div>
                          )}
                          <div className="whitespace-pre-wrap">{msg.content}</div>
                          <div className={`text-xs mt-2 ${msg.type === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                            {msg.timestamp.toLocaleTimeString('pt-BR')}
                          </div>
                        </div>
                      </div>
                    ))}

                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="card-glass border border-white/30 rounded-lg p-5" style={{ minHeight: '1.2em' }}>
                          <div className="flex items-center space-x-2">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                            </div>
                            <span className="text-sm text-gray-500">IA digitando...</span>
                          </div>
                        </div>
                      </div>
                    )}

                    <div ref={messagesEndRef} />
                  </div>

                  {/* Message Input */}
                  <div className="card-glass border-t border-white/20 p-4">
                    <div className="flex items-end space-x-4">
                      <div className="flex-1">
                        <textarea
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                              e.preventDefault();
                              sendMessage();
                            }
                          }}
                          placeholder="Digite sua mensagem... (Enter para enviar, Shift+Enter para nova linha)"
                          className="w-full resize-none border border-white/30 rounded-lg px-4 py-3 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white/70"
                          rows={3}
                        />
                      </div>
                      <button
                        onClick={sendMessage}
                        disabled={!message.trim() || isTyping}
                        className="btn-glass-primary px-6 py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        Enviar
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-600 mb-4">Bem-vindo ao Chat PolicyLabs</h2>
                    <p className="text-gray-500 mb-6">Selecione um chat existente ou crie um novo para começar</p>
                    <button
                      onClick={() => createNewChat('generic')}
                      className="btn-glass-primary px-6 py-3 rounded-lg"
                    >
                      ➕ Iniciar Novo Chat
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}