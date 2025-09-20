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

export default function LocalIAPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentChatId, setCurrentChatId] = useState<string>('1');
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Mock data - replace with real API calls
  const [chats, setChats] = useState<Chat[]>([
    {
      id: '1',
      title: 'Chat sobre Políticas Urbanas',
      type: 'generic',
      lastMessage: 'Como implementar políticas de sustentabilidade?',
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      messages: [
        {
          id: '1',
          type: 'user',
          content: 'Como implementar políticas de sustentabilidade na minha cidade?',
          timestamp: new Date(Date.now() - 1000 * 60 * 30)
        },
        {
          id: '2',
          type: 'assistant',
          content: 'Para implementar políticas de sustentabilidade eficazes, recomendo começar com:\n\n1. **Diagnóstico Municipal**: Análise da situação atual dos recursos naturais\n2. **Engajamento Cidadão**: Consultas públicas para identificar prioridades\n3. **Parcerias Estratégicas**: Colaboração com universidades e ONGs\n4. **Implementação Gradual**: Projetos piloto antes da expansão\n\nGostaria que eu detalhe algum desses pontos?',
          timestamp: new Date(Date.now() - 1000 * 60 * 25)
        }
      ]
    },
    {
      id: '2',
      title: 'Projeto: Mobilidade Urbana 2024',
      type: 'project',
      projectId: 'proj_1',
      lastMessage: 'Análise de dados de tráfego...',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
      messages: [
        {
          id: '3',
          type: 'user',
          content: 'Preciso analisar os dados de tráfego do projeto de mobilidade urbana',
          timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
          context: 'Projeto: Mobilidade Urbana 2024'
        },
        {
          id: '4',
          type: 'assistant',
          content: 'Baseado no projeto "Mobilidade Urbana 2024", posso ajudar com:\n\n📊 **Análise de Dados Disponíveis:**\n- Fluxo de veículos nos principais corredores\n- Horários de pico identificados\n- Pontos de congestionamento recorrentes\n\n🎯 **Recomendações Imediatas:**\n- Implementar semáforos inteligentes na Av. Principal\n- Criar faixas exclusivas para transporte público\n- Estabelecer rotas alternativas para cargas\n\nQuer que eu aprofunde alguma dessas análises?',
          timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2)
        }
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
      setUser(JSON.parse(userData));
    } else {
      router.push('/login');
      return;
    }
    setIsLoading(false);
  }, []);

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

    const welcomeMessages = {
      generic: 'Olá! Como IA especializada em gestão pública, posso ajudar com políticas, projetos e soluções municipais. Qual é o seu desafio específico?',
      project: `Baseado no projeto "${projects.find(p => p.id === projectId)?.name || 'Projeto'}", posso analisar dados, sugerir melhorias e acompanhar o progresso. Como posso auxiliar?`,
      ideas: 'Conectado ao Banco de Ideias municipal. Posso sugerir ideias inovadoras, avaliar propostas e conectar conceitos. O que você gostaria de explorar?',
      projects: 'Conectado ao Banco de Projetos. Posso analisar projetos similares, sugerir metodologias e identificar melhores práticas. Em que posso ajudar?',
      docs: 'Conectado ao Banco de Documentos municipal. Posso buscar documentos relevantes, analisar conteúdo e extrair insights. Que informação você precisa?'
    };

    const welcomeMessage: Message = {
      id: 'welcome-' + Date.now(),
      type: 'assistant',
      content: welcomeMessages[type],
      timestamp: new Date()
    };

    const newChat: Chat = {
      id: Date.now().toString(),
      title: chatTitles[type],
      type,
      projectId,
      timestamp: new Date(),
      messages: [welcomeMessage]
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

    setMessage('');
    setIsTyping(true);

    try {
      // Prepare messages for API
      const apiMessages = currentChat.messages.map(msg => ({
        role: msg.type === 'user' ? 'user' : 'assistant',
        content: msg.content,
        timestamp: msg.timestamp
      }));

      // Add the new user message
      apiMessages.push({
        role: 'user',
        content: userMessage.content,
        timestamp: userMessage.timestamp
      });

      // Call the real API
      const token = localStorage.getItem('access_token');
      const response = await fetch('http://localhost:8000/api/chat/completion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          messages: apiMessages,
          chat_type: currentChat.type,
          project_id: currentChat.projectId,
          max_tokens: 1000,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();

      const assistantMessage: Message = {
        id: Date.now().toString(),
        type: 'assistant',
        content: data.message.content,
        timestamp: new Date(data.message.timestamp)
      };

      setChats(prev => prev.map(chat =>
        chat.id === currentChatId
          ? { ...chat, messages: [...chat.messages, assistantMessage] }
          : chat
      ));

    } catch (error) {
      console.error('Error sending message:', error);

      // Fallback response on error
      const errorMessage: Message = {
        id: Date.now().toString(),
        type: 'assistant',
        content: 'Desculpe, ocorreu um erro ao processar sua mensagem. Verifique sua conexão e tente novamente.',
        timestamp: new Date()
      };

      setChats(prev => prev.map(chat =>
        chat.id === currentChatId
          ? { ...chat, messages: [...chat.messages, errorMessage] }
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
        <title>Pesquisa IA | PolicyLabs APSS</title>
        <meta name="description" content="Assistente de IA para gestão pública municipal" />
      </Head>

      <div className="h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex">
        {/* Sidebar */}
        <div className="w-80 card-glass border-r border-white/30 flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-white/20">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-lg font-bold">🔍 Pesquisa IA</h1>
              <Link href="/dashboard" className="btn-glass px-4 py-2 rounded-lg text-sm inline-flex items-center space-x-2">
                <span>←</span>
                <span>Voltar</span>
              </Link>
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
              {/* Chat Header */}
              <div className="card-glass border-b border-white/20 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-semibold">{getCurrentChat()?.title}</h2>
                    <p className="text-sm text-gray-500">
                      {getCurrentChat()?.type === 'generic' && 'Chat geral com IA especializada em gestão pública'}
                      {getCurrentChat()?.type === 'project' && `Análise específica do projeto selecionado`}
                      {getCurrentChat()?.type === 'ideas' && 'Conectado ao Banco de Ideias municipal'}
                      {getCurrentChat()?.type === 'projects' && 'Conectado ao Banco de Projetos municipal'}
                      {getCurrentChat()?.type === 'docs' && 'Conectado ao Banco de Documentos municipal'}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/30 text-green-700">
                      🟢 Online
                    </span>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {getCurrentChat()?.messages.map(msg => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-3xl rounded-lg p-4 ${
                        msg.type === 'user'
                          ? 'btn-glass-primary text-white'
                          : 'card-glass border border-white/30'
                      }`}
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
                    <div className="card-glass border border-white/30 rounded-lg p-4">
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
          ) : null}
        </div>
      </div>
    </>
  );
}