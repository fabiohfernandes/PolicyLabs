import { NextApiRequest, NextApiResponse } from 'next';

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

    const systemPrompt = context === 'project_creation'
      ? `Você é um consultor especializado em gestão pública e desenvolvimento de projetos governamentais brasileiros.

        Sua missão é ajudar administrações públicas a desenvolver, refinar e estruturar projetos públicos de forma completa e eficaz.

        Características do seu atendimento:
        - Sempre responda em português brasileiro
        - Seja específico e prático nas suas sugestões
        - Considere o contexto brasileiro de gestão pública
        - Faça perguntas para esclarecer aspectos importantes
        - Ofereça soluções viáveis considerando recursos limitados
        - Foque em resultados mensuráveis e sustentabilidade
        - Considere aspectos legais e burocráticos do setor público
        - Estruture suas respostas de forma clara e organizada

        Sempre que possível, ofereça:
        1. Análise crítica construtiva
        2. Sugestões de melhorias específicas
        3. Perguntas para aprofundar o entendimento
        4. Próximos passos recomendados`
      : `Você é um assistente especializado da PolicyLabs. Responda de forma útil e profissional em português brasileiro.`;

    // Dynamic import to avoid build issues
    const { default: OpenAI } = await import('openai');

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

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
      max_tokens: 2000,
      temperature: 0.7,
      presence_penalty: 0.1,
      frequency_penalty: 0.1,
    });

    const response = completion.choices[0]?.message?.content;

    if (!response) {
      throw new Error('No response from OpenAI');
    }

    res.status(200).json({ response });

  } catch (error) {
    console.error('OpenAI API error:', error);

    if (error instanceof Error) {
      res.status(500).json({
        error: 'Failed to get AI response',
        details: error.message
      });
    } else {
      res.status(500).json({
        error: 'Failed to get AI response',
        details: 'Unknown error occurred'
      });
    }
  }
}

export const config = {
  api: {
    responseLimit: false,
  },
};