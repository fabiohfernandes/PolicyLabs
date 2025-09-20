# PRD — Gêmeo Digital Municipal (Cidade Pequena)

> **Objetivo:** projetar e implementar uma plataforma de **mapas interativos** e **gêmeo digital** para prefeituras municipais, com camadas geográficas (plano diretor, bairros, topografia, meio ambiente, distrito industrial, vias e acessos, áreas de risco/inundação, hidrografia, pontos turísticos), indicadores demográficos e socioeconômicos, além de recursos de **consulta pública**, **participação social** e **transparência**.

---

## 1) Visão & Valor
- **Visão:** criar um “painel vivo” do município — um gêmeo digital 2D/3D que integra dados espaciais, indicadores e feedback da população para **planejamento urbano**, **gestão de riscos**, **desenvolvimento econômico** e **turismo**.
- **Para quem:** Gabinete do Prefeito, Planejamento/Obras, Meio Ambiente/Defesa Civil, Turismo, Educação, Desenvolvimento Econômico, Controladoria e cidadãos.
- **Benefícios-chave:**
  - Tomada de decisão baseada em dados (evidências espaciais + séries históricas).
  - Transparência ativa e engajamento por **consultas públicas** georreferenciadas.
  - Redução de custos com estudos repetitivos/fragmentados; reuso de camadas oficiais.
  - Atração de investimentos (portfólio territorial claro e atualizado).

---

## 2) Escopo do MVP
**Funcionalidades principais:**
1. **Mapa 2D interativo** com múltiplas camadas ligadas/desligadas via **menu lateral** e **legenda** dinâmica.
2. **Camadas base (layers):**
   - **Plano Diretor** (zoneamentos, gabaritos, parâmetros de uso/ocupação).
   - **Bairros/Setores Censitários**.
   - **Topografia** (curvas de nível, MDE/MDT sombreado).
   - **Meio Ambiente** (APPs, unidades de conservação, áreas verdes, cobertura do solo).
   - **Distrito Industrial** (lotes, vocações, infraestrutura).
   - **Vias Principais e Acessos** (classificação viária, hierarquia, pontos de entrada).
   - **Áreas de Risco e Inundação** (manchas históricas, cenários de cheias).
   - **Hidrografia** (rios, córregos, nascentes, bacias).
   - **Pontos Turísticos** (atrativos, rotas, mirantes, centros culturais).
3. **Ferramentas de navegação e anotação:**
   - Zoom/pan, **bússola**/**Norte geográfico**, escala, **medir distância/área**.
   - **Setas/indicações**, **caminhos sugeridos** e **quadros de informação** (callouts).
4. **Painéis de informações (cards)** ao clicar em um objeto (parâmetros do zoneamento, dados do lote, estatísticas do bairro, fotos e links).
5. **Filtros e buscas** (por endereço, lote, bairro, zona, atrativo turístico).
6. **Consulta pública** embutida: votos (curtir/não), enquetes e formulário georreferenciado (**“apontar no mapa e comentar”**).
7. **Exportação** (PNG do mapa com legenda e norte, CSV de tabelas, GeoJSON recortado).
8. **Responsividade** (web e **app mobile** “lite”: navegação, consulta e participação).

**Fora do escopo (MVP):**
- Simulações dinâmicas 3D em tempo real (obras/fluxos) e integração IoT contínua (ver Fase 2/3).
- Ferramentas avançadas CAD/BIM in-app (apenas visualização 3D simples no MVP).

---

## 3) Camadas e Dados — Estrutura & Padrões
### 3.1 Estrutura de dados (resumo)
- **Geometrias:** GeoJSON/Tippecanoe (MBTiles/Vector Tiles), PostGIS (EPSG:4674/SIRGAS 2000 ou UTM local — definir CRS oficial municipal).
- **Metadados:** ISO 19115 simplificado (origem, escala, data, responsável, contato).
- **Versionamento:** carimbo de data por layer (ex.: `plano_diretor_v2025_09`).
- **Acesso:** público/leitura e privado/admin (camadas sensíveis).

### 3.2 Tabela padrão de atributos (exemplos)
- **Plano Diretor (`zoneamentos`)**
  - `id`, `zona`, `uso_principal`, `coef_aprov`, `tx_ocup`, `gabarito`, `recuos`, `observacoes`, `fonte`.
- **Bairros (`bairros`)**
  - `id`, `nome`, `populacao`, `densidade_hab_km2`, `renda_media`, `idh_aprox`, `equipamentos_publicos` (array), `observacoes`.
- **Distrito Industrial (`di_lotes`)**
  - `id`, `lote`, `area_m2`, `status`(disponível/ocupado), `infra`(energia, água, gás, fibra), `atividade`, `contato`(opcional).
- **Risco/Inundação (`risco_inund`)**
  - `id`, `classe_risco`(baixa/média/alta), `periodo_retorno`(anos), `eventos_historicos`, `orientacoes_defesa_civil`.
- **Turismo (`pontos_turisticos`)**
  - `id`, `nome`, `tipo`, `horario`, `ingresso`, `acessibilidade`, `descricao`, `midia_url`, `avaliacao_media`.

### 3.3 Indicadores demográficos/socioeconômicos (tabela `indicadores`)
- `id`, `nivel`(municipio/bairro/setor), `referencia_geoid`, `ano`, `populacao`, `faixas_etarias` (json), `renda_media`, `empregos_formais`, `taxa_desemprego`, `matriculas_escolares`, `cobertura_saude`, `casos_dengue`, `crime_rate`, `turistas_ano`, `ipi_icms_aprox` (quando disponível).

### 3.4 Exemplo de schema JSON (camada)
```json
{
  "layer_id": "plano_diretor",
  "title": "Plano Diretor - Zoneamento",
  "crs": "EPSG:4674",
  "style": {
    "fill": "categorical(zona)",
    "outline": true,
    "opacity": 0.6
  },
  "popup_fields": ["zona", "uso_principal", "gabarito", "coef_aprov", "tx_ocup"],
  "legend": "auto",
  "source": {
    "type": "vector-tiles",
    "url": "https://tiles.prefeitura.gov.br/tiles/plano_diretor/{z}/{x}/{y}.pbf"
  },
  "last_updated": "2025-09-01"
}
```

---

## 4) UX/UI — Interação e Navegação
- **Topo:** nome do município, **busca** (endereço/lote/atrativo), seleção de **base map** (satélite, ruas, cinza).
- **Lateral (menu):** árvore de **camadas** com on/off, **transparência** (slider), **ordem** (drag).
- **Mapa:** **norte geográfico**, escala gráfica, **grade UTM** opcional, **medir** área/linha, **marcadores** com **setas** e **callouts** informativos.
- **Painéis:** cards com **quadros de informação**, gráficos (ex.: barras/linhas), fotos e links normativos.
- **Consulta Pública:** botão flutuante “**Participar**” → votação (curtir/não) por projeto/camada/objeto + **comentário georreferenciado** (pin).
- **Acessibilidade:** contraste AA, navegação por teclado, textos alternativos, tamanho de fonte ajustável.
- **Impressão/Export:** “**Exportar Mapa**” (PNG com legenda, data, logotipo e norte).

---

## 5) Arquitetura Técnica
- **Front-end:** React/Next.js + MapLibre GL (ou Leaflet para 2D); suporte a **3D Tiles** (CesiumJS) em fases futuras.
- **Mobile:** React Native (módulo de mapa nativo); cache offline de áreas selecionadas.
- **Back-end:** Node/NestJS ou Python/FastAPI; **PostGIS**; **Tile server** (Tegola/TileServer GL/MapTiler Server).
- **Armazenamento:** S3-compatível para assets, MBTiles; CDN para tiles estáticos.
- **Autenticação & Perfis:** público (leitura) e administrativo (cadastro/edição); **MFA** para admin.
- **Observabilidade:** logs estruturados, métricas (Prometheus), traços (OpenTelemetry).
- **Desempenho:** tiles vetoriais, simplificação por zoom, cache CDN, pré-render (ISR).
- **Compatibilidade legal:** camadas de **Plano Diretor** com vínculo a leis/decretos (links e ementas).

---

## 6) Governança de Dados & LGPD
- **Base legal:** interesse público + transparência; dados pessoais minimizados e agregados.
- **Anonimização:** consultas públicas registram **hash anônimo** + município/bairro, sem PII por padrão.
- **Política de retenção:** metadados e versões; descarte de comentários após período definido (ex.: 24 meses), mantendo agregados.
- **Licenças:** camadas públicas sob **ODbL/CC BY 4.0** quando aplicável; garantir direitos de uso de satélite/imagens.
- **Controle de qualidade:** checklist de validação (topologia, CRS, atributos obrigatórios, datas).

---

## 7) Integrações
- **IBGE/SEADE/Atlas Brasil** (indicadores), **Defesa Civil** (alertas), **Turismo** (cadastrur/local), **Trânsito** (Waze CCP ou dados locais), **Meteorologia** (alertas de chuva).  
- **Protocolo Eletrônico**: linkar processos relativos a zoneamento/obras (consulta “abrir processo”).

---

## 8) Funcionalidades Avançadas (Fase 2/3)
1. **Gêmeo Digital 3D** (LOD por bairro/centro), importação **CityGML/3D Tiles**, volumes e gabaritos com **cortes seccionais** e **sombras solares** (análise por horário/estação).
2. **Simulação de cheias** com cenários (tempo de retorno, lâmina d’água) + **planos de evacuação** e **rotas seguras** (setas/caminhos dinâmicos).
3. **IoT/Tempo real:** camadas de sensores (chuva, nível de rio, qualidade do ar), painéis em tempo real.
4. **Orçamento Participativo** georreferenciado com **priorização multicritério** (matriz AHP) e **enquetes temáticas**.
5. **AR/VR/Tours Virtuais** de pontos turísticos, trilhas educativas e visitas técnicas a obras.
6. **API Pública de Transparência** para pesquisadores e desenvolvedores (chaves/limites).

---

## 9) Requisitos Funcionais
- RF1 Visualizar camadas e metadados; ligar/desligar e ajustar opacidade.
- RF2 Pesquisar por endereço/lote/bairro/atrativo; localizar coordenadas.
- RF3 Exibir **norte geográfico**, escala, medir áreas/linhas, imprimir mapa.
- RF4 Ver cards informativos com dados administrativos/demográficos contextuais.
- RF5 Participar de consultas (curtir/não, comentários com pin no mapa).
- RF6 Painel Admin: upload de layers, estilização (cores/legenda), controle de versões, publicação.
- RF7 Exportar dados (CSV/GeoJSON) e mapas (PNG) com selo/assinatura.
- RF8 Dashboard com **indicadores** e séries temporais por bairro/tema.
- RF9 Auditoria e trilha de alterações (logs encadeados).

## 10) Requisitos Não Funcionais
- **Disponibilidade:** 99,5% (MVP), SLOs de latência P95 < 400ms em tiles cacheados.
- **Segurança:** TLS 1.3, CSP, headers seguros, RBAC; backups automáticos; scanning OWASP.
- **Acessibilidade:** WCAG 2.1 AA; suporte leitor de tela e foco visível.
- **Escalabilidade:** CDN + cache; sharding de tiles; filas para pré-processamento (Tippecanoe).

---

## 11) Métricas de Sucesso (KPIs)
- Usuários únicos/mês (web e app), tempo médio no mapa, camadas mais vistas.
- % de engajamento nas consultas (votos/comentários) por bairro.
- Taxa de conclusão de formulários; NPS dos usuários administrativos.
- Tempo de publicação de novas camadas (desde entrega até ir ao ar).
- Redução de retrabalho em análises (pesquisas internas).

---

## 12) Roadmap Proposto
- **Sprint 1–2:** setup infra, tile server, base map, camadas **bairros** e **vias**; UI básica (menu, legenda, norte).
- **Sprint 3–4:** Plano Diretor, pontos turísticos, hidrografia; cards informativos; busca e filtros.
- **Sprint 5–6:** Áreas de risco/inundação; consulta pública georreferenciada; export PNG/CSV.
- **Sprint 7–8:** app mobile “lite”; cache offline; acessibilidade AA; auditoria.
- **Fase 2:** 3D (CityGML/3D Tiles), simulações, IoT.
- **Fase 3:** orçamento participativo multicritério, AR/VR, API pública.

---

## 13) Exemplo de Dados Municipais & Demográficos (placeholders)
- **Município:** <Nome da Cidade>, **População:** 28.450 (2025), **Área:** 145 km², **Densidade:** 196 hab/km².
- **Faixa etária:** 0–14 (18%), 15–24 (14%), 25–59 (52%), 60+ (16%).
- **Renda média:** R$ 2.450; **Empregos formais:** 5.800; **Turistas/ano:** 120 mil.
- **Educação:** 8 escolas municipais, 2 estaduais; **Saúde:** 1 UPA, 6 UBS.
- **Segurança:** taxa aprox. 12 ocorrências/1.000 hab/ano (registro municipal).
- **Indústria/Distrito:** 42 lotes, 31 ocupados, infraestrutura (energia/água/fibra).
- **Turismo:** 14 atrativos cadastrados, 3 rotas (centro histórico, cachoeiras, gastronômica).

---

## 14) API (rascunho)
- `GET /layers` — lista camadas (nome, versão, data, público/privado).
- `GET /tiles/{layer}/{z}/{x}/{y}.pbf` — tiles vetoriais.
- `GET /features?layer=zoneamentos&bbox=...` — recortes GeoJSON.
- `GET /indicators?level=bairro&id=12&year=2025` — indicadores agregados.
- `POST /public/feedback` — votar/comentar com `lat/lng` e `layer_id/object_id`.
- `POST /admin/layers/upload` — upload (GeoPackage/GeoJSON/MBTiles), validação e publicação.
- `POST /admin/style` — estilos (cores, opacidade, classificação) por layer.
- `GET /exports/map.png?layers=...` — export de mapa com legenda e norte.

---

## 15) Segurança, Auditoria e Compliance
- **LGPD:** consentimento e minimização; comentários moderados e passíveis de anonimização.
- **Auditoria:** logs imutáveis (hash encadeado) para publicações e alterações de estilo/dados.
- **Resiliência:** backups diários (RPO 24h) e plano de recuperação (RTO 4h).

---

## 16) Requisitos de Design (mapa & UI)
- **Elementos fixos:** logotipo, **seta de norte**, escala, legenda recolhível, botões de zoom, “Minha localização” (com consentimento).
- **Marcadores e setas:** ícones padronizados; camadas de **trajetos/caminhos** com setas direcionais.
- **Quadros de informação:** bordas suaves, contraste alto; links para leis/planos.
- **Modo impressão:** título, data, carimbo de versão, logos, **norte**, **legenda** e créditos do dado.

---

## 17) Checklist de Implantação (cidade-alvo)
1. Reunir fontes oficiais (plano diretor, malha viária, hidrografia, bairros, riscos).
2. Definir CRS padrão e converter dados (SIRGAS 2000 / UTM).
3. Normalizar atributos (dicionário de dados) e metadados.
4. Processar tiles (Tippecanoe) e publicar em CDN.
5. Configurar estilos/legendas e testes de performance.
6. Inserir indicadores demográficos (último censo/estimativas).
7. Habilitar consulta pública e políticas de moderação.
8. Treinar equipe municipal (admin/painel).
9. Comunicar à população (site, redes, escolas, postos de saúde).
10. Publicar **Relatório de Transparência** (metodologia/limitações).

---

## 18) Riscos & Mitigações
- **Dados desatualizados:** cronograma de atualização por camada + alertas.
- **Direitos autorais/licenças:** auditoria de fontes e contratos; padronização de créditos.
- **Baixa adesão pública:** UX simples, campanhas educativas, app com notificações.
- **Sobrecarga de tráfego:** CDN e cache; rate limit na API pública.
- **Interpretação jurídica do zoneamento:** avisos legais e link para atos normativos.

---

### Anexos (opcional)
- **Modelo de dicionário de dados** por camada.
- **Template de metadados (ISO simplificado)**.
- **Estilos base** (paletas e simbologia para zoneamento, risco, turismo, etc.).

