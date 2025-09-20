# PRD — Página de Avaliação de Consultas Públicas (Analytics Admin)

## A) Visão & Objetivo
Criar um **módulo analítico** para que a Administração Municipal avalie, com clareza e rapidez, o **humor da população (mood)**, **engajamento** e **aceitação** de cada consulta pública. O módulo deve:
1) listar todas as consultas (ativas e encerradas),  
2) abrir uma **página de resultados** por consulta,  
3) oferecer **gráficos, tabelas e indicadores** padronizados,  
4) gerar um **Resumo de Avaliação** padronizado (para o **PolicyDNA**), e  
5) permitir **comparações** entre consultas.

## B) Personas & Usuários
- **Gestor(a) de Políticas Públicas**: visão executiva, indicadores-chave, tendências e comparações.
- **Analista de Dados/Planejamento**: exploração detalhada, filtros avançados, exportações e auditoria.
- **Controladoria/Auditoria**: trilha de auditoria, integridade dos dados, amostragem e evidências.
- **Comunicação**: extrair gráficos e highlights para relatórios e redes sociais institucionais.

## C) Escopo (MVP)
- Lista de consultas (filtros e busca).
- Página de resultados por consulta com:  
  - KPIs principais, séries temporais, mapas, demografia, ranking de ideias/respostas mais curtidas, análise de texto com temas recorrentes.
- Exportação (CSV/JSON/PDF).
- **Resumo de Avaliação** automático para PolicyDNA.
- Controle de acesso por papéis (RBAC).
- LGPD: dados pessoais anonimizados/pseudonimizados.

**Fora do escopo (MVP):** modelagem estatística preditiva avançada; atribuição causal/impacto econométrico completo; integrações externas além do PolicyDNA.

## D) Navegação & IA de Produto
### D1. Barra superior (persistente)
- **Consultas** (lista), **Comparar** (duas ou mais), **Relatórios**, **Configurações**.
- Busca global por título/ID/setor.
- Indicativo de ambiente (Prod/Homolog).

### D2. Página “Consultas”
- **Tabela** com: Título, Setor, Status (Ativa/Encerrada/Futura), Período, Participações, %Apoio, Índice de Engajamento, Última atualização.
- **Filtros**: setor, status, período, palavra-chave.
- **Ações**: Abrir Resultados, Exportar sumário, Fixar como destaque.

### D3. Página “Resultados da Consulta — {Nome}”
Blocos (cards) e abas:
1. **Resumo Executivo**  
   - KPIs: Participações, **%Apoio** (like vs não), **Índice de Engajamento (IE)**, Taxa de Conclusão, Denúncias/1k respostas, Tempo Médio de Resposta, Distribuição por Canal (Web/App).  
   - “Semáforos” (verde/amarelo/vermelho) por faixas-alvo.
2. **Evolução Temporal**  
   - Série diária/horária de participações e de %Apoio.  
   - Detecção de picos (campanhas, imprensa, bots).
3. **Mapa & Demografia**  
   - Mapa por bairro/região (participações e apoio).  
   - Faixas etárias, relação com tema (morador/comerciante/estudante/servidor/visitante).
4. **Ranking de Ideias/Respostas**  
   - Tabela: Item, Curtidas, Não Curtidas, **Net Score** (likes − dislikes), %Apoio, Qtd. Comentários (se habilitado).  
   - Ordenação por Net Score, Curtidas, Participações.
5. **Análise de Texto (qualitativa)**  
   - Palavras-chave e temas frequentes (n-grams), **nuvem de temas**.  
   - Sentimento agregado (positivo/negativo/neutro) — opcional no MVP.  
   - Amostras de citações (com moderação).
6. **Qualidade e Integridade**  
   - Métricas antifraude (respostas repetidas, IPs anômalos, padrões de bot).  
   - Taxa de respostas textuais moderadas/excluídas.
7. **Custos & Resultados (se houver input de custos)**  
   - Painel de **Custo Estimado** vs **Benefício Esperado** (se informado pela secretaria).  
   - Indicadores financeiros (ROI estimado, payback) e **IDH-alvo** (ver integração PolicyDNA).
8. **Resumo de Avaliação (para PolicyDNA)**  
   - Texto padronizado + métricas consolidadas + **Score PolicyDNA** calculado.  
   - Botão “Enviar/Atualizar no PolicyDNA”.

### D4. Página “Comparar”
- Seletor de até 4 consultas.  
- Gráficos lado a lado: Participações, %Apoio, IE, Mapa (mini), Demografia.  
- Tabela comparativa com KPIs e resumo (exportável).

### D5. Página “Relatórios”
- Modelos pré-definidos: **Executivo (1 pág.)**, **Completo (10–20 págs.)**, **Transparência**.  
- Opções: logotipos, sumário, anexos (tabelas completas).

## E) Definições de Métricas (com fórmulas)
Assumindo dados consolidados por consulta `S`:

- **Participações (P)**: nº de respostas válidas.
- **Apoio (A%)**: `A% = likes / (likes + dislikes) * 100`.
- **Net Score (NS)** por item: `NS = likes − dislikes`.
- **Taxa de Conclusão (TC%)**: respostas completas / respostas iniciadas * 100.
- **Tempo Médio de Resposta (TMR)**: média (t_submit − t_start).
- **Índice de Engajamento (IE)** – composição simples (MVP):
  - Normalizar 0–100 e ponderar:  
    - participação por mil habitantes do bairro (40%),  
    - taxa de conclusão (30%),  
    - proporção de respostas com texto (20%),  
    - compartilhamentos/visitas (10%).  
  - `IE = 0,4*PPM + 0,3*TC + 0,2*TXT + 0,1*SHR` (cada componente já em 0–100).
- **Densidade de Participação (DP)** por bairro: P_bairro / população_bairro.
- **Sentimento (opcional)**: frações positiva/neg/neutra por NLP.

### Métricas financeiras (quando informadas)
- **Custo Estimado (C)**, **Benefício Estimado (B)** anual.  
- **ROI**: `(B − C) / C`.  
- **Payback**: `C / fluxo_de_caixa_anual`.  
- **Impacto IDH estimado** (proxy): ponderação de sub-índices afetados (educação, saúde, renda) com base no tipo de projeto (metodologia definida com Secretaria de Planejamento).

## F) Integração com PolicyDNA (Resumo & Score)
Gerar **Resumo de Avaliação da Consulta** (texto + JSON) contendo:
- Metadados: id_consulta, setor, período, status.  
- KPIs: P, A%, IE, TC, TMR, top 5 itens por Net Score, mapa de apoio (por bairro).  
- Custos/Benefícios (se houver), viabilidade percebida, riscos apontados.  
- Conclusões do gestor (campo editável).  
- **Score PolicyDNA** (0–100) para priorização municipal:

### Fórmula do Score PolicyDNA (proposta inicial)
`Score = 0,35*A% + 0,25*IE + 0,15*Viabilidade + 0,15*ROI_norm + 0,10*IDH_potencial`

- **A%**: apoio (0–100).  
- **IE**: índice (0–100).  
- **Viabilidade**: nota do gestor 0–100 (custos, prazos, capacidades).  
- **ROI_norm**: ROI normalizado 0–100 (cap de outliers).  
- **IDH_potencial**: 0–100 estimado pelo impacto em sub-índices.  
> Pesos ajustáveis por decreto/portaria. O módulo deve permitir **configurar pesos** por administração.

### Payload JSON para o PolicyDNA (exemplo)
```json
{
  "survey_id": "svy_2025_001",
  "sector": "Saúde",
  "period": {"start": "2025-10-01", "end": "2025-10-31"},
  "kpis": {"participants": 4321, "support_pct": 68.4, "engagement_idx": 57.2, "completion_pct": 81.0},
  "top_items": [
    {"item": "Telemedicina Triagem", "likes": 1290, "dislikes": 240, "net_score": 1050},
    {"item": "Ampliação Exames", "likes": 980, "dislikes": 180, "net_score": 800}
  ],
  "geo_support": [{"neighborhood": "Centro", "support_pct": 72.3}],
  "costs": {"capex": 1200000, "opex_annual": 380000},
  "benefits": {"savings_annual": 520000, "revenue_annual": 0},
  "roi_norm": 63.5,
  "idh_potential": 41.0,
  "feasibility": 70.0,
  "policydna_score": 60.7,
  "summary_text": "Apoio majoritário ... riscos concentrados em prazos e teleinfraestrutura ..."
}
```

## G) Requisitos Funcionais (RF)
- **RF1** Listar consultas com filtros, busca e paginação.  
- **RF2** Abrir página de resultados da consulta com KPIs, gráficos e tabelas.  
- **RF3** Filtros intra-consulta: período, bairro, faixa etária, canal, relação com tema.  
- **RF4** Ranking de ideias/respostas por Net Score, curtidas, participação.  
- **RF5** Série temporal e heatmap por horário/dia; mapa por bairro.  
- **RF6** Análise textual: temas recorrentes; (sentimento opcional).  
- **RF7** Indicadores de qualidade/integridade (antifraude).  
- **RF8** Inserção/edição de **Custos/Benefícios** e **Viabilidade** (admin).  
- **RF9** Geração automática do **Resumo de Avaliação** (texto + JSON).  
- **RF10** Cálculo e exibição do **Score PolicyDNA** (com pesos configuráveis).  
- **RF11** Comparador entre consultas (até 4).  
- **RF12** Exportação (CSV/JSON/PDF) com carimbo de data e hash de integridade.  
- **RF13** RBAC: permissões de leitura/edição/export.  
- **RF14** Trilhas de auditoria e versionamento do resumo.

## H) Requisitos Não Funcionais (RNF)
- **Segurança:** TLS 1.3; RBAC; MFA opcional; OWASP Top 10; criptografia at-rest para PII e custos.  
- **Privacidade (LGPD):** minimização; pseudonimização; retenção definida (ex.: 24 meses); direito de revogação/anonimização.  
- **Desempenho:** P95 < 300ms (consultas com índice e cache); P95 < 1s para exports assíncronos.  
- **Disponibilidade:** 99,9%/mês; backups automáticos; DR (RPO 15min/RTO 1h).  
- **Acessibilidade:** WCAG 2.1 AA; gráficos com descrições e alto contraste.  
- **Observabilidade:** logs estruturados, métricas (Prometheus), tracing, auditoria assinada.

## I) Arquitetura & Tecnologias (sugestão)
- **Frontend Admin:** React/Next.js + lib de gráficos (Recharts/ECharts) + Mapas (Leaflet/Mapbox).  
- **API Analytics:** NestJS/Node ou FastAPI (Python) + GraphQL/REST.  
- **Data Store:** Postgres (particionado) + índices TS para séries; Redis para cache.  
- **Jobs ETL:** workers para agregações diárias/horárias; detecção de anomalias.  
- **PDF Service:** geração via headless Chromium.  
- **Infra:** Docker, CI/CD, Terraform, CDN para assets; região BR (latência).

## J) Modelo de Dados (extensões ao que já existe)
Novas tabelas/materializadas para analytics:
- **survey_daily_metrics**(date, survey_id, participants, support_pct, completion_pct, engagement_idx, shares, channel_web, channel_app)
- **idea_stats**(survey_id, idea_id, likes, dislikes, net_score, comments, last_calc_at)
- **question_choice_stats**(survey_id, question_id, option_value, count, likes, dislikes)
- **geo_stats**(survey_id, neighborhood, participants, support_pct, engagement_idx)
- **text_topics**(survey_id, topic, count, example_answer_id)
- **sentiment_stats**(survey_id, positive_pct, negative_pct, neutral_pct) _(opcional MVP)_
- **costs_benefits**(survey_id, capex, opex_annual, savings_annual, revenue_annual, updated_by, updated_at)
- **feasibility_scores**(survey_id, score_0_100, notes, updated_by, updated_at)
- **policydna_scores**(survey_id, weights_json, score_0_100, version, created_at)
- **exports_audit**(export_id, survey_id, type, filters_json, file_url, checksum, requested_by, created_at)

## K) Exemplos de Consultas/Agregações
**%Apoio por dia**
```sql
SELECT date_trunc('day', created_at) AS dia,
       SUM(CASE WHEN vote_type='like' THEN 1 ELSE 0 END)::float /
       NULLIF(SUM(CASE WHEN vote_type IN ('like','dislike') THEN 1 ELSE 0 END),0) * 100 AS apoio_pct
FROM votes
WHERE survey_id = $1
GROUP BY 1 ORDER BY 1;
```
**Ranking de itens por Net Score**
```sql
SELECT i.title, s.likes, s.dislikes, (s.likes - s.dislikes) AS net_score
FROM idea_stats s
JOIN ideas i ON i.id = s.idea_id
WHERE s.survey_id = $1
ORDER BY net_score DESC
LIMIT 10;
```

## L) UX — Componentes/Gráficos (padrões)
- **KPIs Cards:** grandes, com tendência (▲▼) e intervalo selecionado.  
- **Line Charts:** participações/dia e apoio/dia.  
- **Bars/Stacked:** distribuição por faixa etária, relação com tema.  
- **Choropleth Map:** apoio por bairro (legenda clara).  
- **Tables:** ranking (sticky header, ordenação, export).  
- **Nuvem de temas** ou lista ponderada (com link para respostas exemplo).

## M) API (exemplos)
- `GET /analytics/surveys?status=active&sector=Saúde`  
- `GET /analytics/surveys/{id}/summary?k=7d` (KPIs + tendências)  
- `GET /analytics/surveys/{id}/geo?granularity=bairro`  
- `GET /analytics/surveys/{id}/ranking?type=ideas&limit=20`  
- `POST /analytics/surveys/{id}/costs-benefits` (auth: admin)  
- `POST /analytics/surveys/{id}/feasibility` (auth: gestor)  
- `POST /analytics/surveys/{id}/policydna/score` (gera e persiste)  
- `POST /analytics/reports/{id}.pdf` (gera PDF assíncrono)  
- `GET /analytics/compare?ids=...` (compare KPIs)

## N) RBAC & Auditoria
- **Papéis:** admin_prefeitura (tudo), analista (ler/export), gestor (editar viabilidade/resumo), auditor (somente leitura + trilha).  
- **Auditoria:** toda exportação e alteração de custos/viabilidade/score gera evento com hash.

## O) Critérios de Aceite (MVP)
1. Página de lista carrega < 1s com 1k consultas.  
2. Página de resultados exibe KPIs, séries, mapa e ranking sem erros (consulta com >10k respostas).  
3. Exportações CSV/JSON/PDF disponíveis e auditadas.  
4. Resumo de Avaliação gerado e enviado ao PolicyDNA com **score**.  
5. RBAC aplicado corretamente (testes de permissão).  
6. Acessibilidade AA validada em páginas e gráficos.

## P) Testes
- **Unitários:** cálculo de métricas, normalizações, agregações.  
- **Integração:** endpoints analytics, geração de PDF, cache.  
- **Carga:** 100 req/s sustentado; 10M linhas em `answers`.  
- **Segurança:** OWASP (Injeção, XSS, IDOR), tokens e auditoria.

## Q) Roadmap (sugerido)
- **Sprints 1–2:** Lista + Resultados (KPIs, séries, ranking) + Export CSV/JSON.  
- **Sprints 3–4:** Mapa, comparador, PDF, custos/benefícios, viabilidade.  
- **Sprints 5–6:** Resumo PolicyDNA + pesos configuráveis + dashboard financeiro/IDH.  
- **Futuro:** sentimento/NLP avançado, forecasts, alertas proativos, API pública.

---

## Modelo de **Resumo de Avaliação** (texto curto gerado no fim)
> **Consulta:** Telemedicina na Atenção Primária (Saúde) — Out/2025  
> **Participações:** 4.321 | **Apoio:** 68,4% | **IE:** 57,2 | **TC:** 81%  
> **Top 3 Itens (Net Score):** Teletriagem (+1050), Ampliação de Exames (+800), Farmácia Digital (+540)  
> **Bairros com maior apoio:** Centro (72,3%), João Paulo (70,1%), Trindade (69,4%)  
> **Custos/Benefícios:** CAPEX R$ 1,2 mi | OPEX R$ 380 mil/ano | ROI norm.: 63,5 | Payback: ~2,3 anos  
> **Riscos:** conectividade nas UBS, capacitação, comunicação com idosos  
> **Conclusão do Gestor:** Recomenda-se fase piloto em 3 UBS com reforço de infraestrutura e capacitação.  
> **Score PolicyDNA (v1):** 60,7/100 (Apoio e IE bons; viabilidade média; ROI atrativo moderado; IDH potencial moderado).
