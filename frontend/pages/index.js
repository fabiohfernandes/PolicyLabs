export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        background: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.2)',
        borderRadius: '20px',
        padding: '60px 40px',
        textAlign: 'center',
        color: 'white',
        maxWidth: '600px'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>
          🏛️ PolicyLabs APSS
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '30px', opacity: 0.9 }}>
          Sistema de Simulação de Políticas Públicas com IA
        </p>
        <p style={{ fontSize: '1rem', marginBottom: '40px', opacity: 0.8 }}>
          Onde a Política Encontra a Precisão
        </p>
        <div style={{
          background: 'rgba(255,255,255,0.2)',
          padding: '20px',
          borderRadius: '10px',
          marginBottom: '30px'
        }}>
          <p>✅ Deploy AWS Amplify Funcionando!</p>
          <p>✅ OpenAI Integration Ready</p>
          <p>✅ Next.js Production Build</p>
        </div>
        <a
          href="/create/project"
          style={{
            background: 'rgba(255,255,255,0.2)',
            color: 'white',
            padding: '15px 30px',
            borderRadius: '10px',
            textDecoration: 'none',
            border: '1px solid rgba(255,255,255,0.3)',
            display: 'inline-block',
            margin: '10px',
            transition: 'all 0.3s ease'
          }}
        >
          🚀 Criar Projeto
        </a>
        <a
          href="/local-ia"
          style={{
            background: 'rgba(255,255,255,0.2)',
            color: 'white',
            padding: '15px 30px',
            borderRadius: '10px',
            textDecoration: 'none',
            border: '1px solid rgba(255,255,255,0.3)',
            display: 'inline-block',
            margin: '10px'
          }}
        >
          🤖 Chat IA
        </a>
      </div>
    </div>
  )
}