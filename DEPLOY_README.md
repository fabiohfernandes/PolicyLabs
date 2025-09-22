# 🚀 PolicyLabs - Branch de Deploy AWS Amplify

## 📋 Informações de Deploy

**Branch**: `deploy/amplify`
**Plataforma**: AWS Amplify
**Tipo**: Frontend com API Routes

## 🔐 Variáveis de Ambiente Necessárias

Configure estas variáveis no AWS Amplify Console:

| Variável | Valor | Descrição |
|----------|-------|-----------|
| `OPENAI_API_KEY` | `sk-proj-2TJ8...` | Chave da API OpenAI |
| `NODE_ENV` | `production` | Ambiente de produção |
| `NEXT_PUBLIC_APP_URL` | `https://seu-app.amplifyapp.com` | URL da aplicação |

## ✅ Recursos Funcionais

- ✅ **Landing pages** - Páginas estáticas
- ✅ **Chat com IA** - `/local-ia`
- ✅ **Criador de Projetos** - `/create/project`
- ✅ **Análise IA** - `/modules/ai-analysis`
- ✅ **API OpenAI** - `/api/chat`
- ✅ **Design Glassmorphic** - Interface moderna

## 🏗️ Configuração de Build

O arquivo `amplify.yml` está configurado para:
1. Instalar dependências com `--legacy-peer-deps`
2. Build otimizado do Next.js
3. Cache de node_modules
4. Artefatos em `.next`

## 🌐 Deploy no AWS Amplify

1. **Conectar Repositório**:
   - Repositório: `fabiohfernandes/PolicyLabs`
   - Branch: `deploy/amplify`

2. **Configurar Build**:
   - Arquivo: `amplify.yml` (auto-detectado)
   - Diretório raiz: `frontend`

3. **Variáveis de Ambiente**:
   - Adicionar `OPENAI_API_KEY`
   - Configurar `NODE_ENV=production`

4. **Deploy**:
   - Deploy automático a cada push
   - URL gerada automaticamente
   - SSL/HTTPS habilitado

## 🔄 Fluxo de Desenvolvimento

```bash
# Trabalhar na branch principal
git checkout master
# ... fazer mudanças ...

# Merge para deploy
git checkout deploy/amplify
git merge master
git push origin deploy/amplify
# Deploy automático no Amplify
```

## 📞 Suporte

Para problemas de deploy, verificar:
1. Build logs no AWS Amplify Console
2. Variáveis de ambiente configuradas
3. Chave OpenAI válida
4. Dependências instaladas corretamente

---
**🚀 Última atualização**: 21 de Setembro de 2025