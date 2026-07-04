# Blog Strategy: Desentupidora Rio de Janeiro

## Executive Summary

O blog da Desentupidora Rio de Janeiro será um motor de **demanda local capturada**, não apenas uma página de dicas genéricas. A estratégia foca em pessoas e empresas no Rio de Janeiro que já estão procurando solução para um problema imediato (vaso entupido, fossa cheia, esgoto voltando) ou querendo prevenir um problema recorrente (gordura na pia, caixa de gordura de restaurante). O posicionamento é de **autoridade prática de emergência**: cada post responde rapidamente, usa experiência real do atendimento 24h e converte para WhatsApp/ligação em no máximo 2-3 toques de scroll.

A arquitetura será de **4 clusters hub-and-spoke** com intenção comercial predominante: (1) Emergências residenciais, (2) Serviços comerciais/condomínios, (3) Manutenção preventiva, e (4) Custo/orçamento/como escolher. Cada cluster terá um pillar page de 3.000-4.000 palavras e 4-6 spokes de 1.500-2.500 palavras, todos interligados e apontando para as páginas de serviço e localização.

---

## Audience Mapping

### Segmento 1: Morador do Rio em emergência residencial
- **Role**: Dono de casa, inquilino, síndico de pequeno condomínio
- **Pain points**: Vaso transbordando à noite, mau cheiro, pia parada, medo de pagar caro
- **Search behavior**: "desentupidora 24h Rio de Janeiro", "como desentupir vaso sanitário", "desentupidora zona sul RJ", "preço desentupimento esgoto RJ"
- **AI behavior**: "qual a melhor desentupidora 24h no Rio?", "quanto custa desentupir vaso no RJ?", "o que fazer quando esgoto volta pelo ralo?"
- **Buying stage**: Decisão / transacional
- **Conteúdo preferido**: Respostas rápidas, preços reais, telefone/WhatsApp no topo

### Segmento 2: Comércios, restaurantes e condomínios
- **Role**: Gerente de restaurante, administradora de condomínio, dono de comércio
- **Pain points**: Caixa de gordura cheia, fossa com prazo de manutenção, fiscalização ambiental, interrupção do negócio
- **Search behavior**: "limpeza de caixa de gordura restaurante Rio", "limpeza de fossa condomínio RJ", "desentupidora para empresas 24h"
- **AI behavior**: "qual a frequência de limpeza de fossa em condomínio?", "quanto custa limpar caixa de gordura de restaurante no Rio?"
- **Buying stage**: Consideração / contrato recorrente
- **Conteúdo preferido**: Dados de manutenção preventiva, custo, compliance

### Segmento 3: Prevenção e DIY (faz você mesmo)
- **Role**: Morador que quer evitar chamados, manter encanamento
- **Pain points**: Entupimentos repetidos, quer resolver sozinho antes de chamar profissional
- **Search behavior**: "como evitar entupimento de pia", "sinais fossa cheia", "desentupidor de vaso qual comprar"
- **AI behavior**: "como impedir que pia de cozinha entupa?", "quando devo chamar uma desentupidora?"
- **Buying stage**: Consciência / informacional
- **Conteúdo preferido**: Listas, passo a passo, quando chamar profissional

---

## Content Pillars & Cluster Architecture

### Cluster 1: Emergências Residenciais de Desentupimento
**Pilar (hub)**: "Guia Completo de Emergências de Entupimento no Rio de Janeiro: O Que Fazer Antes de Chamar a Desentupidora"
- **Keyword pilar**: desentupidora 24h Rio de Janeiro
- **Template**: pillar-page
- **Purpose**: Capturar toda a demanda de busca por emergências residenciais e posicionar a marca como a resposta imediata
- **Estimated posts**: 1 pillar + 6 spokes
- **AI citation potential**: Alto — respostas diretas para perguntas de emergência

#### Spokes
| # | Spoke Topic | Template | Target Keyword | Word Count | Internal Links |
|---|------------|----------|---------------|-----------|----------------|
| 1 | Vaso sanitário entupido: o que fazer em 5 passos (e quando chamar ajuda) | how-to-guide | vaso sanitário entupido o que fazer | 1.500-2.000 | Pilar, vaso, cano, WhatsApp |
| 2 | Esgoto voltando pelo ralo: 7 causas e soluções rápidas | how-to-guide | esgoto voltando pelo ralo RJ | 1.500-2.000 | Pilar, esgoto, ralo, fossa |
| 3 | Pia entupida: como desentupir sozinho e quando ligar para desentupidora | how-to-guide | pia entupida como desentupir | 1.800-2.200 | Pilar, pia, cano |
| 4 | Ralo entupido: guia por tipo de ralo (banheiro, área, quintal) | faq-knowledge | ralo entupido banheiro | 1.500-2.000 | Pilar, ralo, cano |
| 5 | Quanto custa chamar uma desentupidora no Rio de Janeiro em 2026 | data-research | preço desentupidora Rio de Janeiro | 2.000-2.500 | Pilar, serviços, FAQ |
| 6 | Melhores desentupidoras do Rio de Janeiro: como escolher | comparison | melhor desentupidora Rio de Janeiro | 1.800-2.200 | Pilar, quem-somos, serviços |

### Cluster 2: Limpeza de Fossa e Caixa de Gordura (Residencial + Comercial)
**Pilar (hub)**: "Limpeza de Fossa e Caixa de Gordura no Rio de Janeiro: Guia Completo para Residências e Comércios"
- **Keyword pilar**: limpeza de fossa e caixa de gordura Rio de Janeiro
- **Template**: pillar-page
- **Purpose**: Domar a parte mais lucrativa do negócio (serviços recorrentes para restaurantes e condomínios)
- **Estimated posts**: 1 pillar + 5 spokes
- **AI citation potential**: Alto — dados de frequência, normas, custos

#### Spokes
| # | Spoke Topic | Template | Target Keyword | Word Count | Internal Links |
|---|------------|----------|---------------|-----------|----------------|
| 1 | 5 sinais de que a fossa está cheia e precisa de limpeza urgente | listicle | sinais fossa cheia Rio de Janeiro | 1.500-2.000 | Pilar, limpeza-fossa |
| 2 | De quanto em quanto tempo limpar a fossa? Frequência ideal por tipo de imóvel | faq-knowledge | de quanto em quanto tempo limpar fossa | 1.500-2.000 | Pilar, limpeza-fossa |
| 3 | Limpeza de caixa de gordura para restaurantes no Rio: normas e frequência | how-to-guide | limpeza caixa gordura restaurante RJ | 2.000-2.500 | Pilar, limpeza-fossa, pia |
| 4 | Caixa de gordura entupida: sintomas, riscos e como resolver | how-to-guide | caixa de gordura entupida o que fazer | 1.800-2.200 | Pilar, limpeza-fossa, cano |
| 5 | Sucção e descarte de fossa no Rio: como funciona o serviço | thought-leadership | sucção fossa Rio de Janeiro | 1.800-2.200 | Pilar, limpeza-fossa, serviços |

### Cluster 3: Manutenção Preventiva e Cuidados com Encanamento
**Pilar (hub)**: "Como Evitar Entupimentos no Rio de Janeiro: Manual de Prevenção para Casas e Empresas"
- **Keyword pilar**: como evitar entupimentos Rio de Janeiro
- **Template**: pillar-page
- **Purpose**: Educar o público, capturar tráfego informacional e converter visitantes recorrentes
- **Estimated posts**: 1 pillar + 5 spokes
- **AI citation potential**: Médio-Alto — listas e dicas são altamente citáveis por IA

#### Spokes
| # | Spoke Topic | Template | Target Keyword | Word Count | Internal Links |
|---|------------|----------|---------------|-----------|----------------|
| 1 | 10 hábitos que evitam entupimento de pia de cozinha | listicle | evitar entupimento pia cozinha | 1.500-2.000 | Pilar, pia, cano |
| 2 | Produtos que não devem ir no vaso sanitário (e no ralo) | listicle | o que não jogar no vaso sanitário | 1.500-2.000 | Pilar, vaso, ralo |
| 3 | Hidrojateamento: quando vale a pena para desentupir canos no RJ | thought-leadership | hidrojateamento Rio de Janeiro | 2.000-2.500 | Pilar, cano, esgoto |
| 4 | Manutenção preventiva de encanamento em condomínios | how-to-guide | manutenção preventiva encanamento condomínio | 2.000-2.500 | Pilar, esgoto, limpeza-fossa |
| 5 | Por que não usar soda cáustica para desentupir canos | thought-leadership | soda cáustica desentupir cano perigoso | 1.500-2.000 | Pilar, cano, pia |

### Cluster 4: Atendimento por Região do Rio
**Pilar (hub)**: "Desentupidora no Rio de Janeiro: Atendimento por Zona e Bairro"
- **Keyword pilar**: desentupidora Rio de Janeiro bairros
- **Template**: pillar-page
- **Purpose**: Fortalecer sinais locais e capturar buscas por bairro; servir como hub para futuras páginas de localização
- **Estimated posts**: 1 pillar + 4 spokes
- **AI citation potential**: Médio — respostas de "atende em X bairro?" são úteis para IA e local pack

#### Spokes
| # | Spoke Topic | Template | Target Keyword | Word Count | Internal Links |
|---|------------|----------|---------------|-----------|----------------|
| 1 | Desentupidora na Zona Sul do Rio: atendimento rápido em Copacabana, Ipanema, Leblon | listicle | desentupidora zona sul Rio de Janeiro | 1.800-2.200 | Pilar, todos serviços |
| 2 | Desentupidora na Zona Norte: Tijuca, Méier, Madureira e região | listicle | desentupidora zona norte Rio | 1.800-2.200 | Pilar, todos serviços |
| 3 | Desentupidora na Zona Oeste e Barra da Tijuca: atendimento 24h | listicle | desentupidora Barra da Tijuca | 1.800-2.200 | Pilar, todos serviços |
| 4 | Centro do Rio: desentupidora para comércios e empresas | case-study | desentupidora Centro Rio de Janeiro | 1.800-2.200 | Pilar, limpeza-fossa, esgoto |

---

## Prioritized Blog Post Ideas (18 posts)

Lista priorizada considerando: intenção comercial, volume de busca local estimado, facilidade de ranqueamento, oportunidade de conversão e ciclo de emergência.

| Priority | Title | Target Keyword | Search Intent | Template | Expected Outcome |
|---|---|---|---|---|---|
| 1 | Quanto custa chamar uma desentupidora no Rio de Janeiro em 2026 | preço desentupidora Rio de Janeiro | Comercial investigação | data-research | Lead/orçamento via WhatsApp |
| 2 | Vaso sanitário entupido: o que fazer em 5 passos (e quando chamar ajuda) | vaso sanitário entupido o que fazer | Informacional + transacional | how-to-guide | Ligação/WhatsApp emergencial |
| 3 | Guia Completo de Emergências de Entupimento no Rio de Janeiro | desentupidora 24h Rio de Janeiro | Transacional + informacional | pillar-page | WhatsApp/ligação 24h |
| 4 | Limpeza de caixa de gordura para restaurantes no Rio: normas e frequência | limpeza caixa gordura restaurante RJ | Comercial B2B | how-to-guide | Contrato recorrente/WhatsApp |
| 5 | Esgoto voltando pelo ralo: 7 causas e soluções rápidas | esgoto voltando pelo ralo RJ | Informacional + transacional | how-to-guide | Ligação/WhatsApp emergencial |
| 6 | 5 sinais de que a fossa está cheia e precisa de limpeza urgente | sinais fossa cheia Rio de Janeiro | Informacional + transacional | listicle | WhatsApp/orçamento limpeza fossa |
| 7 | Como evitar entupimentos no Rio de Janeiro: Manual de Prevenção | como evitar entupimentos Rio de Janeiro | Informacional | pillar-page | Newsletter/retargeting + serviços |
| 8 | Desentupidora na Zona Sul do Rio: atendimento rápido em Copacabana, Ipanema, Leblon | desentupidora zona sul Rio de Janeiro | Local + transacional | listicle | WhatsApp/orçamento |
| 9 | Pia entupida: como desentupir sozinho e quando ligar para desentupidora | pia entupida como desentupir | Informacional + transacional | how-to-guide | WhatsApp/orçamento |
| 10 | Limpeza de Fossa e Caixa de Gordura no Rio de Janeiro: Guia Completo | limpeza de fossa e caixa de gordura Rio de Janeiro | Comercial + informacional | pillar-page | Contrato recorrente/orçamento |
| 11 | De quanto em quanto tempo limpar a fossa? Frequência ideal | de quanto em quanto tempo limpar fossa | Informacional + comercial | faq-knowledge | Orçamento limpeza fossa |
| 12 | Hidrojateamento: quando vale a pena para desentupir canos no RJ | hidrojateamento Rio de Janeiro | Comercial investigação | thought-leadership | Orçamento serviço técnico |
| 13 | 10 hábitos que evitam entupimento de pia de cozinha | evitar entupimento pia cozinha | Informacional | listicle | Engajamento + serviço pia |
| 14 | Caixa de gordura entupida: sintomas, riscos e como resolver | caixa de gordura entupida o que fazer | Informacional + transacional | how-to-guide | WhatsApp comercial |
| 15 | Melhores desentupidoras do Rio de Janeiro: como escolher | melhor desentupidora Rio de Janeiro | Comercial investigação | comparison | WhatsApp/orçamento |
| 16 | Desentupidora na Zona Norte do Rio: Tijuca, Méier, Madureira | desentupidora zona norte Rio | Local + transacional | listicle | WhatsApp/orçamento |
| 17 | Por que não usar soda cáustica para desentupir canos | soda cáustica desentupir cano perigoso | Informacional | thought-leadership | Confiança + serviço cano |
| 18 | Desentupidora no Rio de Janeiro: Atendimento por Zona e Bairro | desentupidora Rio de Janeiro bairros | Local | pillar-page | WhatsApp/orçamento por bairro |

---

## Recommended Cadence

O site está no ar com conteúdo placeholder (apenas 2 posts de blog). Para um site novo no nicho local, a velocidade deve ser **consistente e moderada**, focando em qualidade e cobertura de cluster, não em volume bruto.

### Fase 1: Fundação (Mês 1)
- **Objetivo**: Cobrir as queries de emergência e preço mais valiosas
- **1 post por semana** (4 posts no mês)
- Ordem sugerida: Prioridades 1, 2, 3, 5 da tabela acima
- Publicar o Pillar 1 (Emergências) + 2 spokes de maior urgência

### Fase 2: Expansão Comercial (Mês 2)
- **Objetivo**: Capturar demanda B2B (restaurantes, condomínios) e preventiva
- **1-2 posts por semana** (6 posts no mês)
- Publicar Pillar 2 (Fossa/cxa gordura) + 2 spokes, Pillar 3 (Prevenção) + 1 spoke

### Fase 3: Autoridade Local + GEO (Mês 3)
- **Objetivo**: Fortalecer sinais locais e criar superfície para citações de IA
- **1 post por semana** (4 posts no mês)
- Publicar Pillar 4 (Regiões/bairros) + 2 spokes, + 2 spokes remanescentes dos clusters 1-3

### Velocidade de longo prazo
- **Após 90 dias**: 2-3 posts por mês de manutenção, focados em atualização e expansão de clusters
- **Atualizações**: revisar posts críticos a cada 90 dias; posts de preço e emergência a cada 60 dias
- **Expansão futura**: adicionar spokes por bairro específico (ex: "desentupidora Copacabana", "desentupidora Tijuca") e por nicho (hospitais, escolas, shopping)

---

## Internal Linking Structure

A estrutura segue o modelo hub-and-spoke, com todas as páginas apontando para conversão (serviços, WhatsApp, telefone).

### Regras de linkagem
- **Mínimo 3 links internos por post**, ideal 5-7
- **Pillar link presente em todos os spokes** do mesmo cluster
- **Spokes devem linkar de volta para o pillar** e para 2-3 spokes relacionados
- **Todo post de blog deve linkar para pelo menos 1 página de serviço relevante**
- **Todo post deve ter 1 CTA contextual para WhatsApp ou telefone** (não apenas no final)
- **Não usar âncoras genéricas** como "clique aqui" ou "saiba mais"; usar âncoras descritivas como "desentupimento de vaso sanitário no Rio", "orçamento grátis de limpeza de fossa"

### Mapa de linkagem por cluster

#### Cluster 1: Emergências Residenciais
- Pillar `/blog/guia-emergencias-entupimento-rio/` linka para:
  - Todos os 6 spokes
  - `/servicos/desentupimento-de-esgoto/`, `/servicos/desentupimento-de-vaso-sanitario/`, `/servicos/desentupimento-de-pia/`, `/servicos/desentupimento-de-cano/`, `/servicos/desentupimento-de-ralo/`
  - `/perguntas-frequentes/`
- Spokes linkam de volta ao pillar e cross-linkam entre:
  - vaso ↔ cano ↔ esgoto ↔ ralo
  - pia ↔ cano ↔ ralo

#### Cluster 2: Fossa e Caixa de Gordura
- Pillar `/blog/limpeza-fossa-caixa-gordura-rio/` linka para:
  - Todos os 5 spokes
  - `/servicos/limpeza-de-fossa-e-caixa-de-gordura/`
  - `/servicos/desentupimento-de-pia/` (restaurantes)
  - `/servicos/desentupimento-de-esgoto/`
- Spokes linkam de volta ao pillar e cross-linkam:
  - fossa cheia ↔ frequência limpeza fossa
  - caixa gordura entupida ↔ restaurantes

#### Cluster 3: Prevenção
- Pillar `/blog/como-evitar-entupimentos-rio/` linka para:
  - Todos os 5 spokes
  - `/servicos/desentupimento-de-pia/`, `/servicos/desentupimento-de-vaso-sanitario/`, `/servicos/desentupimento-de-cano/`
- Spokes linkam de volta ao pillar e cross-linkam:
  - pia cozinha ↔ produtos vaso ↔ soda cáustica
  - hidrojateamento ↔ manutenção condomínio

#### Cluster 4: Regiões do Rio
- Pillar `/blog/desentupidora-rio-bairros/` linka para:
  - Todos os 4 spokes
  - Todas as 6 páginas de serviço
  - `/contato/` e WhatsApp
- Spokes linkam de volta ao pillar e para serviços mais relevantes daquela região

### Ligação obrigatória em todo post
1. Link para a página de serviço mais relevante no primeiro 1/3 do conteúdo
2. Link para o pillar do cluster
3. Link para 1 spoke relacionado (quando houver)
4. Link para `/perguntas-frequentes/` ou `/servicos/` no final
5. CTA com link de WhatsApp

---

## GEO / AI Citation Opportunities

Serviços locais de emergência têm vantagem em GEO porque as respostas de IA para "desentupidora 24h próxima" e "o que fazer com vaso entupido" exigem respostas diretas, locais e confiáveis.

### On-site GEO optimization
- **Answer-first em cada H2**: toda seção começa com resposta direta em 40-60 palavras (ex: "Se o vaso sanitário estiver entupido, pare de usar a descarga imediatamente. A água parada pode transbordar em 10-15 minutos dependendo do volume.")
- **Capsulas de citação**: criar parágrafos auto-contidos com estatística + fonte + resposta, exemplo: "Segundo a Cedae, 35% dos entupimentos residenciais no Rio são causados por descarte incorreto de óleo de cozinha. Por isso, nunca despeje óleo na pia."
- **FAQPage schema em todos os posts**: o site já tem SchemaFAQPage; replicar no frontmatter dos posts do blog para cada pergunta-resposta
- **Comentários consistentes da entidade**: usar sempre "Desentupidora Rio de Janeiro", "Rio de Janeiro", "24h", "orçamento grátis" com grafia idêntica
- **Estrutura de dados**: garantir Article schema, BreadcrumbList, LocalBusiness, FAQPage
- **Frescura**: atualizar posts de preço e emergência a cada 60 dias com data de atualização visível

### Off-site presence (88-92% das citações de IA vêm de fora do site)
- **YouTube**: criar vídeos curtos (2-3 min) para os 4 pilares, com títulos otimizados ("Vaso sanitário entupido no Rio - o que fazer em 1 minuto", "Como evitar entupimento de pia | Desentupidora RJ"). Incluir transcrição, descrição com telefone e link do site.
- **Google Business Profile**: manter ativo com posts semanais reutilizando trechos dos posts do blog, respondendo perguntas comuns e com link para posts relevantes
- **Reddit / fóruns locais**: participar autenticamente em subreddits como r/riodejaneiro, r/brasil respondendo dúvidas sobre entupimento sem linkar diretamente (construir autoridade); eventualmente citar experiência profissional
- **Avaliações e depoimentos**: incentivar clientes a deixarem avaliações no Google mencionando o serviço específico (ex: "desentupimento de vaso sanitário na Tijuca"); as reviews citam a marca e reforçam sinais locais
- **Listas e diretórios locais**: manter NAP consistente em sites como Reclame Aqui, Google Maps, Bing Places, Páginas Amarelas locais

### Plataformas específicas
| Platform | Foco | Ação |
|---|---|---|
| ChatGPT | Recência + autoridade da marca | Manter posts atualizados, usar formato de resposta direta, reforçar nome da marca |
| Perplexity | Citações + fontes diversas | Citar fontes locais (Cedae, Procon RJ, normas municipais), usar tabelas e listas |
| Google AI Overviews | Schema + autoridade tópica | FAQPage/HowTo schema, clusters completos, respostas em formato snippet |

### Oportunidades de citação local específicas
- Responder perguntas comuns em formato citável: "Qual o telefone da Desentupidora Rio de Janeiro?", "A Desentupidora Rio atende 24h?", "Quais bairros do Rio a desentupidora atende?"
- Criar conteúdo com dados próprios do atendimento (ex: "Em 2025, 40% dos chamados de emergência no Rio foram para vaso sanitário entupido entre 22h e 6h") — dados originais aumentam citação
- Comparar métodos (químico vs mecânico vs hidrojateamento) em tabelas — tabelas têm 47% mais chance de citação em IA
- Publicar "Perguntas Frequentes" expandidas: transformar a página `/perguntas-frequentes/` em hub FAQ-knowledge com seções por serviço

---

## Content Quality Standards

| Metric | Target | Measured By |
|---|---|---|
| Blog quality score | 80+ | `/blog analyze` |
| E-E-A-T compliance | Autor nomeado + experiência real (ex: "nossa equipe atendeu X casos") | Manual review |
| AI citation readiness | Answer-first + FAQ + citação com estatísticas | `/blog analyze` |
| Visual minimum | 1 diagrama/imagem por post (foto de equipamento, infográfico simples) | Asset count |
| Internal links | 5+ por post | Link audit |
| Schema markup | Article + FAQ | Structured data test |
| Word count | 1.500+ spokes, 3.000+ pillars | Word count tool |
| Frescura | Posts críticos atualizados a cada 60-90 dias | Frontmatter updatedDate |

---

## Distribution Channel Strategy

| Channel | Priority | Tactics |
|---|---|---|
| Blog/owned site | 1 | Publicar clusters, manter freshness, schema completo |
| Google Business Profile | 2 | Posts semanais reutilizando blog, responder Q&A, foto de equipe/equipamento |
| YouTube | 3 | 1 vídeo por pillar (4 vídeos iniciais), transcrição, link no site |
| WhatsApp | 4 | CTA em todo post, mensagem automática com link do artigo relevante |
| Reddit/fóruns locais | 5 | Participação autêntica em dúvidas de encanamento no Rio |
| Email/retargeting | 6 | Lista de "dicas de prevenção" para quem pediu orçamento mas não fechou |

---

## 90-Day Roadmap

### Mês 1: Fundação
- [ ] Publicar Pillar 1 + 2 spokes (prioridades 1, 2, 3)
- [ ] Configurar Google Business Profile e vincular posts do blog
- [ ] Adicionar FAQPage schema em todos os novos posts
- [ ] Criar template padrão de frontmatter para posts do blog
- [ ] Estabelecer dashboard de métricas: ranking local, cliques WhatsApp, chamadas

### Mês 2: Expansão Comercial e Preventiva
- [ ] Publicar Pillar 2 + 2 spokes (fossa/cxa gordura)
- [ ] Publicar Pillar 3 + 1 spoke (prevenção)
- [ ] Criar 2 vídeos para YouTube (vaso entupido + fossa cheia)
- [ ] Iniciar atualização dos posts do Mês 1 (freshness)
- [ ] Capturar 3 depoimentos de clientes para usar nos posts

### Mês 3: Autoridade Local + GEO
- [ ] Publicar Pillar 4 + 2 spokes (regiões/bairros)
- [ ] Completar os spokes restantes dos clusters 1-3
- [ ] Auditar todos os posts com `/blog analyze` (target 80+)
- [ ] Criar mais 2 vídeos para YouTube
- [ ] Revisar citações de IA manualmente para 10 queries principais
- [ ] Planejar expansão de spokes por bairro específico

---

## Measurement

### SEO tradicional
- Tráfego orgânico mensal (GA4)
- Rankings para keywords alvo no Google (top 10, top 3)
- Chamadas e cliques no WhatsApp a partir do blog
- Taxa de conversão de visitante do blog para contato

### Métricas locais
- Aparecimento no Google Local Pack para "desentupidora + bairro"
- Reviews e avaliações no Google Business Profile
- Citações NAP consistentes em diretórios

### GEO / AI citation
- Citações da marca em ChatGPT, Perplexity e Google AI Overviews para 10 queries principais (rastreamento manual mensal)
- Tráfego referido por chatgpt.com, perplexity.ai, claude.ai (GA4)
- Volume de busca pela marca "Desentupidora Rio de Janeiro"

---

## Next Steps

1. Rodar `/blog brief` para o primeiro pillar: "Guia Completo de Emergências de Entupimento no Rio de Janeiro"
2. Rodar `/blog write` para gerar os 2 primeiros spokes (vaso sanitário + preço)
3. Atualizar `/perguntas-frequentes/` com novas perguntas dos clusters
4. Configurar Google Business Profile e vincular posts do blog
5. Criar 1 vídeo para YouTube acompanhando o primeiro pillar
