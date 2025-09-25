import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, context } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Dynamic import to avoid build issues
    const { default: OpenAI } = await import('openai');

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // Specialized prompts based on context
    let systemPrompt = '';

    if (context === 'project_creation') {
      systemPrompt = `Você é o PolicyDNA™, uma IA especializada em análise e criação de projetos de políticas públicas brasileiras.

Seu papel é:
1. Analisar projetos de política pública
2. Fornecer recomendações baseadas em dados
3. Sugerir implementação prática
4. Calcular viabilidade e impacto
5. Identificar stakeholders e recursos necessários

Sempre responda em português brasileiro, de forma profissional e técnica, como um consultor especializado em gestão pública.`;
    } else {
      systemPrompt = `Você é um assistente especializado em políticas públicas brasileiras e gestão municipal.

Ajude prefeitos, secretários e gestores públicos com:
- Análise de políticas públicas
- Sugestões de implementação
- Benchmarking entre municípios
- Soluções para desafios da administração pública
- Interpretação de dados e indicadores

Sempre responda em português brasileiro, de forma clara e prática.`;
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: systemPrompt
        },
        {
          role: "user",
          content: message
        }
      ],
      max_tokens: 1000,
      temperature: 0.7,
    });

    const response = completion.choices[0]?.message?.content || 'Não foi possível gerar uma resposta no momento.';

    res.status(200).json({ response });
  } catch (error) {
    console.error('OpenAI API Error:', error);
    res.status(500).json({
      error: 'Erro interno do servidor',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}