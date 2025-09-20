"""
Chat routes for PolicyLabs APSS
OpenAI integration for real-time chat functionality
"""

from typing import List, Dict, Any
from fastapi import APIRouter, HTTPException, Depends, status
from pydantic import BaseModel
from openai import AsyncOpenAI
import os
from datetime import datetime

from app.auth import get_current_user
from app.models import User

router = APIRouter(prefix="/api/chat", tags=["chat"])

# OpenAI Configuration
client = AsyncOpenAI(api_key=os.getenv("OPENAI_API_KEY"))

class ChatMessage(BaseModel):
    role: str  # "user" or "assistant"
    content: str
    timestamp: datetime = None

class ChatRequest(BaseModel):
    messages: List[ChatMessage]
    chat_type: str = "generic"  # generic, project, ideas, projects, docs
    project_id: str = None
    max_tokens: int = 1000
    temperature: float = 0.7

class ChatResponse(BaseModel):
    message: ChatMessage
    usage: Dict[str, Any] = None
    model: str = "gpt-3.5-turbo"

# System prompts for different chat types
SYSTEM_PROMPTS = {
    "generic": """Você é um assistente de IA especializado em gestão pública brasileira.
    Você ajuda prefeitos, secretários e gestores municipais com:
    - Políticas públicas eficazes
    - Gestão administrativa
    - Engajamento cidadão
    - Soluções para problemas municipais
    - Melhores práticas em administração pública

    Responda sempre em português brasileiro, seja prático e ofereça soluções concretas.""",

    "project": """Você é um especialista em gestão de projetos públicos municipais.
    Ajude com análise, planejamento, execução e monitoramento de projetos.
    Foque em resultados mensuráveis e impacto social positivo.""",

    "ideas": """Você está conectado ao Banco de Ideias municipal.
    Ajude a gerar, avaliar e desenvolver ideias inovadoras para problemas públicos.
    Seja criativo mas mantenha viabilidade prática.""",

    "projects": """Você tem acesso ao Banco de Projetos municipais.
    Analise projetos similares, sugira metodologias e identifique melhores práticas.
    Compare com casos de sucesso de outros municípios.""",

    "docs": """Você está conectado ao Banco de Documentos municipal.
    Ajude a encontrar, analisar e extrair insights de documentos relevantes.
    Cite fontes quando aplicável."""
}

@router.post("/completion", response_model=ChatResponse)
async def chat_completion(
    request: ChatRequest,
    current_user: User = Depends(get_current_user)
):
    """
    Generate AI response using OpenAI GPT
    """
    try:
        # Prepare messages for OpenAI
        system_prompt = SYSTEM_PROMPTS.get(request.chat_type, SYSTEM_PROMPTS["generic"])

        openai_messages = [
            {"role": "system", "content": system_prompt}
        ]

        # Add conversation history
        for msg in request.messages:
            openai_messages.append({
                "role": msg.role,
                "content": msg.content
            })

        # Call OpenAI API
        response = await client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=openai_messages,
            max_tokens=request.max_tokens,
            temperature=request.temperature,
            user=str(current_user.id)  # For usage tracking
        )

        # Extract response
        ai_message = response.choices[0].message.content
        usage_info = response.usage

        return ChatResponse(
            message=ChatMessage(
                role="assistant",
                content=ai_message,
                timestamp=datetime.utcnow()
            ),
            usage=usage_info.model_dump() if usage_info else None,
            model=response.model
        )

    except Exception as e:
        error_msg = str(e)
        if "rate_limit" in error_msg.lower():
            raise HTTPException(
                status_code=status.HTTP_429_TOO_MANY_REQUESTS,
                detail="Rate limit exceeded. Please try again later."
            )
        elif "invalid_request" in error_msg.lower():
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"Invalid request: {error_msg}"
            )
        elif "authentication" in error_msg.lower():
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="OpenAI authentication failed"
            )
        else:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail=f"Chat completion failed: {str(e)}"
            )

@router.get("/health")
async def chat_health():
    """
    Check chat service health
    """
    try:
        # Test OpenAI connection
        models = await client.models.list()
        return {
            "status": "healthy",
            "openai_connected": True,
            "available_models": len(models.data) if models else 0,
            "timestamp": datetime.utcnow()
        }
    except Exception as e:
        return {
            "status": "unhealthy",
            "openai_connected": False,
            "error": str(e),
            "timestamp": datetime.utcnow()
        }