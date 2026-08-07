# Auditoria de performance — financasnojapao.com — 7 de agosto de 2026

> Feita com Opus. Correções mecânicas (preload de fonte, lazy loading, width/height)
> foram aplicadas direto. O resto fica registrado aqui para decisão.

---

## Resumo geral

O site tem base técnica boa: fonte própria com `font-display:swap`, WebP em todas as
imagens servidas, heroes com `fetchpriority="high"`, scripts no fim do `<body>`, um
único domínio de terceiro (AdSense) e CSS/JS pequenos o bastante pra dispensar
minificação. Os problemas reais são de higiene de assets, não de arquitetura.

---

## 🔴 Crítico

1. **Hero quebrado em `o-que-e-furusato-nozei.html:225`** — aponta para
   `img/hero-o-que-e-furusato-nozei.webp`, que não existe e nunca existiu no repo.
   Com `fetchpriority="high"` e `onerror="this.remove()"`, isso gera 404 na prioridade
   máxima de rede e layout shift garantido (o layout reserva 1400×900, a imagem some
   depois). Todas as páginas irmãs usam `.svg` no hero — só essa aponta pra `.webp`
   inexistente. **Precisa de decisão: criar a imagem ou trocar por SVG como as outras.**

2. **614 KB de ícones mal comprimidos na home** — os 9 ícones `img/ico-*.webp` (256×256)
   pesam 50–95 KB cada; deveriam pesar 5–15 KB. Já estão em WebP e com `loading="lazy"`,
   o problema é só compressão na origem. Recomprimir levaria a home de ~800 KB pra ~200 KB.
   **Precisa de ferramenta de otimização de imagem (Squoosh, cwebp) que não existe neste ambiente.**

3. **AdSense carrega em 18 páginas sem nenhum anúncio pra mostrar** — o script (~100 KB
   + conexões em cascata) roda em toda visita, mas não há um único bloco `<ins class="adsbygoogle">`
   no site. É o item de terceiro mais pesado, entregando zero hoje. **Decisão de negócio**
   (provavelmente ligado à revisão de conta pendente do Google).

## 🟡 Atenção

4. **Cache-busting do CSS desatualizado** — todas as páginas usam `style.css?v=2026-07-31`,
   mas o `style.css` foi alterado depois, em 05/08. Quem visitou entre 31/07 e 05/08 pode
   estar servindo CSS velho do cache. Correção de uma linha (`?v=2026-08-07` em todas),
   não apliquei por não ter certeza do valor que vocês consideram canônico.

5. **CSS duplicado e desatualizado em `furusato-nozei.html:225-276`** — cópia antiga de
   regras que já estão em `style.css`, faltando um bloco de mobile do submenu. Pode estar
   fazendo o menu mobile abrir diferente nessa página específica. Vale conferir visualmente.

6. **`.categoria-etiqueta` copiada em 9 páginas** (e outros seletores em 3-4 páginas) —
   candidatos a mover pro `style.css` compartilhado em vez de repetir em cada HTML.

7. **4,6 MB de imagens órfãs em `img/`** — 33 arquivos PNG/SVG que já foram convertidos
   pra WebP e não são mais referenciados por nenhuma página. Não afeta o visitante, só
   infla o repositório.

8. **`furusato-nozei.html` é o único HTML acima de 100 KB** (123 KB) — comprime bem
   (31 KB gzip), mas 33 KB são o `<style>` inline duplicado do item 5.

## 🟢 OK

Formato de imagem (100% WebP/SVG), atributos `alt` (100% cobertos), heroes com LCP bem
configurado, AdSense com `async`, scripts próprios no fim do body, CSS/JS pequenos, fonte
própria sem depender de Google Fonts, um único domínio externo no site inteiro.

---

## O que foi corrigido direto (mecânico, sem risco)

- `rel="preload"` da fonte `inter-variable.woff2` adicionado nas 18 páginas — a maior
  correção de LCP disponível sem tocar em imagem.
- `loading="lazy"` adicionado em 13 imagens abaixo da dobra (`furusato-nozei-vale-a-pena.html`,
  `melhores-presentes-furusato-nozei.html`, `one-stop-furusato-nozei.html`).
- `width`/`height` adicionados em 2 imagens que não tinham, inferidos do próprio CSS/SVG
  (`one-stop-furusato-nozei.html`).

Resultado: 100% dos `<img>` do site agora têm `alt` + dimensões + `loading` correto.

## O que precisa de decisão seu (ordem sugerida)

1. Resolver o hero 404 da `o-que-e-furusato-nozei.html` (o mais urgente — é bug ativo numa página publicada).
2. Recomprimir os ícones da home (precisa de ferramenta fora deste ambiente).
3. Decidir sobre o AdSense (inserir blocos ou tirar o carregador por enquanto).
4. Atualizar `?v=` do style.css pra data mais recente.
5. Conferir visualmente o menu mobile de `furusato-nozei.html`.
6-8. Limpeza de CSS duplicado e imagens órfãs — baixa prioridade, sem urgência.
