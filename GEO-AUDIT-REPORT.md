# GEO Audit Report — Desentupidora Rio de Janeiro

**URL:** https://desentupidorario.vercel.app  
**Data do audit:** 2026-07-04  
**Tipo de negócio:** Local Service (desentupidora 24h no Rio de Janeiro)  
**Score GEO composto:** 68/100

---

## Executive Summary

A Desentupidora Rio de Janeiro tem uma base digital sólida: site rápido, mobile responsivo, robots.txt aberto, sitemap funcionando e um llms.txt já publicado. O maior gargalo para visibilidade em IA está na **escassez de sinais de autoridade externa** e na **fragmentação dos schemas estruturados**. O conteúdo é citável, mas carece de profundidade técnica, presença por bairro e evidências de E-E-A-T (fotos reais, certificações, reviews verificáveis).

| Categoria | Peso | Score | Status |
|-----------|------|-------|--------|
| AI Citability & Visibility | 25% | 72/100 | 🟡 Boa |
| Brand Authority Signals | 20% | 15/100 | 🔴 Fraca |
| Content Quality & E-E-A-T | 20% | 66/100 | 🟡 Média |
| Technical Foundations | 15% | 82/100 | 🟢 Forte |
| Structured Data | 10% | 45/100 | 🟡 Média |
| Platform Optimization | 10% | 69/100 | 🟡 Média |
| **Score GEO Composto** | **100%** | **68/100** | 🟡 |

---

## 1. AI Citability & Visibility (72/100)

### Status dos crawlers de IA

| Bot | Acesso | Nomeado em robots.txt |
|-----|--------|----------------------|
| GPTBot | ✅ Sim | ❌ Não |
| ChatGPT-User | ✅ Sim | ❌ Não |
| Claude-Web | ✅ Sim | ❌ Não |
| PerplexityBot | ✅ Sim | ❌ Não |
| Google-Extended | ✅ Sim | ❌ Não |

**robots.txt:** `User-agent: * Allow: /` com referência ao `llms.txt` e `sitemap-index.xml`.

**Recomendação:** manter o wildcard, mas adicionar declarações explícitas de `User-agent` para GPTBot, Claude-Web, PerplexityBot, Google-Extended e ChatGPT-User para sinalizar controle intencional.

### llms.txt

- **URL:** https://desentupidorario.vercel.app/llms.txt
- **Existe:** ✅ Sim
- **Formato:** parcialmente padronizado
- **Pontuação:** 75/100

**Pontos fortes:**
- Dados de contato completos
- Lista de serviços
- Fluxo de atendimento e diferenciais
- 6 perguntas e respostas

**Falhas:**
- Não usa campos padronizados `Name`, `Description`, `Base URL`, `Contact`
- Não indica `Language: pt-BR` nem data de atualização
- Não referencia `llms-full.txt`
- Repetições entre seções dificultam parsing

### Plataformas

| Plataforma | Score | Justificativa |
|------------|-------|---------------|
| ChatGPT | 70/100 | Conteúdo citável, llms.txt ajuda, mas falta schema |
| Perplexity | 72/100 | Listas e FAQs claras favorecem citações |
| Google AI Overviews | 65/100 | Depende de entity signals e schema locais |
| Bing Copilot | 68/100 | Indexação OK, mas faltam sinais off-page |

---

## 2. Brand Authority Signals (15/100)

A marca praticamente **não existe fora do próprio site**. Nenhuma menção relevante encontrada em:

- Reddit
- YouTube
- LinkedIn
- Wikipedia
- Quora
- TikTok
- GitHub
- Twitter/X

**Impacto:** IAs cruzam fontes externas para validar entidade. Sem presença em diretórios locais, reviews ou redes, a autoridade da marca é fraca.

---

## 3. Content Quality & E-E-A-T (66/100)

| Subscore | Valor |
|----------|-------|
| Content Quality | 70/100 |
| E-E-A-T | 64/100 |
| Local Signals | 58/100 |

### Formatação AI-friendly por página

| Página | H1 | Headings | Listas | FAQ | Parágrafos curtos |
|--------|-----|----------|--------|-----|-------------------|
| Home | ✅ | ✅ | ✅ | ❌ | ✅ |
| /servicos/ | ✅ | ✅ | ✅ | ❌ | ✅ |
| /perguntas-frequentes/ | ✅ | ✅ | ✅ | ✅ | ✅ |
| /blog/ | ✅ | ✅ | ✅ | ❌ | ✅ |
| /quem-somos/ | ✅ | ✅ | ✅ | ❌ | ✅ |
| /contato/ | ✅ | ✅ | ✅ | ❌ | ✅ |

### Passagens facilmente citáveis

- "A empresa atende em toda a cidade do Rio: residências, comércios, condomínios e indústrias em todas as regiões e zonas da cidade."
- "Quanto custa chamar uma desentupidora no Rio de Janeiro? A empresa faz orçamento grátis e sem compromisso."
- "Chegar rápido, resolver de verdade e deixar o local limpo."

### Passagens que precisam de melhoria

- Descrição genérica da home falta diferenciação técnica
- Cards de serviços com apenas 1 frase — faltam método, tempo médio, garantia detalhada
- Equipe técnica descrita de forma vaga, sem nomes, fotos ou certificações

---

## 4. Technical Foundations (82/100)

| Item | Status |
|------|--------|
| HTTPS | ✅ |
| Mobile responsivo | ✅ |
| Sitemap | ✅ `/sitemap-index.xml` responde 200 |
| robots.txt | ✅ Aberto para todos |
| Canonical | ✅ Presente |
| Core Web Vitals (estimado) | 78/100 |
| Mobile score | 86/100 |

### Problemas técnicos encontrados

1. **`/sitemap.xml` retorna 404** — robots.txt aponta corretamente para `/sitemap-index.xml`, mas algumas ferramentas ainda tentam o caminho padrão.
2. **Sem imagens `<img>` na home** — apenas SVGs. Pode prejudicar LCP e rich results visuais.
3. **Schema presente apenas na home** — páginas internas precisam de schemas próprios.

---

## 5. Structured Data (45/100)

### Schemas encontrados na home

| Schema | Status |
|--------|--------|
| WebSite | ✅ JSON-LD |
| LocalBusiness | ✅ JSON-LD (endereço, geo, telefone, horário, área de atuação) |

### Schemas ausentes

| Schema | Prioridade |
|--------|------------|
| BreadcrumbList | 🔴 Alta |
| FAQPage | 🔴 Alta |
| Service | 🔴 Alta |
| Article | 🟡 Média |
| AggregateRating / Review | 🟡 Média |
| WebPage | 🟡 Média |
| AboutPage / ContactPage | 🟢 Baixa |

---

## 6. Platform Optimization (69/100)

Média ponderada das plataformas. O site está razoavelmente preparado para ChatGPT e Perplexity, mas precisa de schema e sinais locais para Google AI Overviews e Bing Copilot.

---

## Plano de Ação Prioritário

### 🔴 Crítico — fazer primeiro

1. **Adicionar `BreadcrumbList` schema em todas as páginas internas** e exibir navegação visível de breadcrumbs.
2. **Implementar `FAQPage` schema** na home e na página `/perguntas-frequentes/`.
3. **Criar schemas `Service` individuais** para cada serviço (`/servicos/desentupimento-de-.../`).
4. **Padronizar o `llms.txt`** com campos `Name`, `Description`, `Base URL`, `Contact`, `Language: pt-BR`, `Last Updated` e referência ao `llms-full.txt`.
5. **Criar páginas de destino por região/bairro** para capturar buscas locais long-tail (Zona Norte, Zona Sul, Barra, Copacabana, Tijuca, etc.).

### 🟡 Médio — fazer em seguida

6. Expandir cada página de serviço com método, tempo médio, garantia detalhada e FAQ específico.
7. Melhorar E-E-A-T: fotos reais da equipe, certificações/licenças, depoimentos verificáveis com data/bairro.
8. Incluir imagens reais de atendimento com tag `<img>`, alt text e preload da imagem LCP.
9. Criar `llms-full.txt` com conteúdo expandido sobre cada serviço e região.
10. Publicar mais artigos no blog: prevenção, manutenção de fossa, preços médios, mitos.

### 🟢 Contínuo

11. Criar e otimizar **Google Business Profile**.
12. Construir presença em diretórios locais e reviews (Reclame Aqui, LinkedIn, listagens regionais).
13. Monitorar brand mentions e conquistar citações em fórios e vídeos locais.
14. Redirecionar `/sitemap.xml` para `/sitemap-index.xml`.
15. Adicionar `User-agent` específicos para crawlers de IA no `robots.txt`.

---

## Conclusão

O site da Desentupidora Rio de Janeiro está **bem posicionado para começar a trabalhar GEO**, mas precisa urgentemente de **schema estruturado completo**, **presença off-page** e **conteúdo localizado por região/bairro**. As correções técnicas são rápidas e terão alto impacto em visibilidade em IA, especialmente no Google AI Overviews e em respostas diretas do ChatGPT/Perplexity.
