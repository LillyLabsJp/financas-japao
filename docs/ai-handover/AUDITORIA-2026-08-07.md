# Auditoria — financasnojapao.com — 7 de agosto de 2026

> Feita com Opus, escopo: conteúdo/consistência, SEO técnico e links de afiliado.
> Somente leitura — nenhum arquivo foi alterado nesta auditoria.

---

## Resumo geral

O site está em boa forma e a disciplina editorial é notável: zero links internos quebrados, zero contradições factuais entre as 9 páginas do cluster, zero parágrafos copiados, zero títulos ou descriptions duplicados, e alt text descritivo de verdade em todas as imagens. A frente de compliance é a mais forte do trabalho — as 14 tags Amazon estão corretas, os 20 links de afiliado têm `rel="sponsored"`, todos apontam para páginas de catálogo geral, e a regra dos pontos do Sōmushō está aplicada de forma consistente e datada em todas as páginas onde o assunto aparece, sem uma única promessa de ponto.

Os quatro problemas críticos são pontuais e todos de correção rápida: a página Amazon monetiza sem declarar afiliação, o botão da calculadora na página Rakuten está quebrado, o `isPartOf` das 6 páginas novas aponta para um `@id` que não existe em `index.html`, e a pilar não linka para duas das filhas — deixando `melhores-presentes` com um único link de entrada em todo o site.

O padrão que se repete: **as 6 páginas do cluster novo foram construídas rápido e ficaram desconectadas da infraestrutura** — sem autoria no schema, sem selo de revisão, fora do menu, com breadcrumb apontando pra um grafo inexistente, e finas (694–803 palavras). O conteúdo é sólido e original; falta plugá-las no resto do site.

---

## Consertar primeiro (correção de 1 a 5 linhas cada)

1. **Disclosure de afiliado ausente em `amazon-furusato-nozei.html`** — a página tem 4 links de afiliado (linhas 248, 254, 543, 684) e zero menção a "afiliado/comissão/patrocinado". Risco real: o Amazon Associates Operating Agreement exige declaração em toda página com link de afiliado.
2. **Botão quebrado em `rakuten-furusato-nozei.html:149`** — `href="#calculadora"` não existe nessa página (a calculadora mora em `furusato-nozei.html`). Deveria ser `href="furusato-nozei.html#calculadora"`.
3. **`isPartOf` órfão** — as 6 páginas novas apontam para `"@id":"https://financasnojapao.com/#website"`, mas o JSON-LD de `index.html` não declara esse `@id`. O grafo do site nunca se conecta.
4. **Erro de romanização em `imposto-residencial-juminzei.html:102`** — JSON-LD diz "nakazei kanrinin", o FAQ visível (linha 473) diz "nōzei kanrinin" (forma correta, 納税管理人).

## Esta semana

5. A página pilar (`furusato-nozei.html`) não linka para `o-que-e-furusato-nozei.html` nem `melhores-presentes-furusato-nozei.html` — as duas com maior potencial de cauda longa. `melhores-presentes` recebe **1 único link de entrada em todo o site**.
6. As 6 páginas novas não têm `author`/`Person` no JSON-LD nem byline visível — todas as outras 7 páginas de conteúdo têm. Maior perda de E-E-A-T do cluster novo.
7. O menu "Impostos" (dropdown do cabeçalho) não lista nenhuma das 6 páginas novas, e `o-que-e-furusato-nozei.html` é a única página com um item a mais no próprio dropdown — navegação global inconsistente entre páginas.
8. `lastmod` do sitemap desatualizado em várias páginas editadas recentemente (ex.: `furusato-nozei.html` marcado como 30/jul, último commit 07/08).

## Notado, sem ação necessária agora

- Meta descriptions estouradas (>160 caracteres) em 8 páginas antigas (`imposto-residencial-juminzei.html` é a pior, 247 caracteres) — as 6 páginas novas estão todas na faixa saudável.
- Titles longos (>60 caracteres) em 14 de 18 páginas — o corte no SERP geralmente come só o sufixo "| Finanças no Japão", exceto em `imposto-residencial-juminzei.html`, onde come "(calculadora 2026)".
- `og:image:width/height` ausente em 7 páginas do cluster novo — pode afetar preview no WhatsApp/Slack.
- `amazon-furusato-nozei.html` usa uma paleta azul-marinho/verde (`#0b3d59`, `#1f9d6b`) só dentro dos SVGs inline, não vaza pro layout — mas é a paleta do redesign descartado (`conceito-visual-novo.html`), não a do site.
- `conceito-visual-novo.html` está bloqueado no `robots.txt` mas não tem `noindex` — risco baixo, ninguém linka pra ela hoje.
- `BreadcrumbList` ausente em `furusato-nozei.html`, `amazon-furusato-nozei.html`, `remessa-japao-brasil.html`, `index.html`.

## O que está impecável — vale registrar

- Zero links internos quebrados no site inteiro.
- Zero contradições de números/regras entre as páginas do cluster (¥2.000, prazo de 10/jan, limite de 5 municípios, ano-calendário).
- 14/14 links Amazon com a tag `financasnojap-22` correta.
- 20/20 links de afiliado com `rel="sponsored nofollow noopener"`.
- Nenhum link de doação aponta para município específico — regra do Sōmushō respeitada em 100% dos casos.
- A regra dos pontos (proibida desde 1º/out/2025) está mencionada corretamente em todas as páginas relevantes, sempre no contexto "isso acabou", nunca prometendo pontos — inclusive com a data exata citada em 5 páginas.
