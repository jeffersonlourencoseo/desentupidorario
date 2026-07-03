# Desentupidora Rio de Janeiro

Site institucional de alta conversão para a **Desentupidora Rio de Janeiro**, com atendimento 24h em toda a cidade do Rio de Janeiro.

🚀 **Status: Pronto para Produção**

---

## Tecnologias

- **Astro 7.x** — framework estático com geração de páginas rápidas e otimizadas
- **Tailwind CSS 4.x** — utilitários de estilo com sistema de design customizado
- **TypeScript** — tipagem estrita desde a fundação do projeto
- **Google Fonts** — `Syne` (display) + `DM Sans` (corpo)
- **Content Collections** — blog e páginas de serviço gerenciáveis em Markdown
- **Schema.org LocalBusiness** — dados estruturados para SEO local
- **Open Graph / Twitter Cards** — compartilhamento otimizado
- **Sitemap automático** — `@astrojs/sitemap`

---

## Estrutura de páginas

- `/` — Página inicial com hero, diferenciais, serviços, depoimentos e CTA
- `/sobre/` — História, missão, visão, valores e equipe
- `/servicos/` — Listagem de serviços de desentupimento
- `/servicos/[slug]/` — Página individual de cada serviço
- `/blog/` — Listagem de artigos
- `/blog/[slug]/` — Artigo individual com sidebar de CTA
- `/contato/` — Canais de contato + formulário
- `/privacidade/` e `/termos/` — Páginas legais

---

## Scripts

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview da build local
npm run preview
```

---

## Deploy na Vercel

1. Crie um repositório no GitHub e envie este projeto.
2. No dashboard da Vercel, clique em **Add New Project** > **Import Git Repository**.
3. Selecione o repositório e clique em **Deploy**.
4. (Opcional) Configure o domínio final em `Settings > Domains`.

O site é 100% estático e não requer adapter serverless.

---

## Central de dados

Todos os dados do negócio (NAP, telefone, e-mail, endereço, domínio) estão centralizados em:

```
src/data/config.ts
```

Antes de publicar, confirme que os valores estão corretos, especialmente:

- `domain`
- `phone` / `whatsapp`
- `email`
- `address` (rua, número, bairro, cidade, CEP)
- `cnpj` *(ainda com placeholder `[SUBSTITUIR]`)*

---

## SEO e Performance

- Meta tags dinâmicas por página
- Sitemap XML automático
- Dados estruturados `LocalBusiness` (Schema.org)
- Lazy-loading de fontes do Google
- Botão flutuante de WhatsApp
- Layout responsivo e menu mobile com travamento de scroll

---

## Licença

Projeto proprietário — Desentupidora Rio de Janeiro.
