# Auditoria de mobile/UX e acessibilidade — financasnojapao.com — 7 de agosto de 2026

> Feita com Opus, escopo: ergonomia de toque, menu mobile, calculadora de furusato,
> viewport/responsividade, acessibilidade básica e formulários.
> Somente leitura — nenhum arquivo do site foi alterado nesta auditoria.
> Performance e SEO/conteúdo/afiliados foram auditados separadamente e não se repetem aqui.

---

## Resumo geral

A base responsiva é melhor do que a média de site estático feito à mão: **viewport correto
em 18/18 páginas**, `lang="pt-BR"` em 18/18, **todos os inputs numéricos do site em 16px ou
mais** (zero risco de zoom automático do iOS — isso normalmente é o primeiro erro que se
acha), `aria-label` em todos os botões-ícone, `aria-hidden` nos SVGs decorativos, e a tabela
de 6 colunas da pilar vira cartões empilhados abaixo de 760px, que é a solução cara e certa.

**O bug do CSS duplicado do submenu não existe em nenhuma outra página** — confirmado
mecanicamente: nenhum dos 17 HTMLs restantes tem regra de `.main-nav .submenu` no `<style>`
inline, e nenhum tem um `@media(hover:none)` próprio. Aquele bloco em `furusato-nozei.html`
era um caso isolado e já morreu. Esse item está fechado.

Os problemas de verdade estão em dois lugares, e nenhum deles é de layout:

1. **A calculadora principal do site — a de furusato — é a única das quatro que não avisa
   ninguém quando termina de calcular.** As outras três (nenkin, dependentes, jūminzei) têm
   botão "Calcular", rolagem até o resultado e/ou `aria-live`. A de furusato não tem nada
   disso na aba simples, e ainda tem dois botões que não recalculam.
2. **A paleta.** `--color-text-faint` (#8d939b) reprova AA com folga e está aplicada
   justamente nos textos de 11–13px — inclusive no disclosure de afiliado. O botão verde de
   WhatsApp é o pior contraste do site inteiro, 1,98:1.

Alvos de toque são o terceiro tema: os dois únicos controles do cabeçalho no celular (menu
hambúrguer e lupa) têm 37px e 31px de altura.

---

## 🔴 Crítico

### 1. Na aba simples da calculadora, o resultado aparece fora da tela e ninguém é avisado

`furusato-nozei.html` — a aba "Simulação simples" **não tem botão "Calcular"**. O cálculo roda
sozinho 650ms depois que a pessoa para de digitar (`furusato-nozei.html:1752-1761`), e
`mostrarLimite()` só rola até o resultado se `rolarAteResultado` for `true`
(`furusato-nozei.html:1917`) — flag que só é ligada pelo botão da aba **detalhada**
(`:1036`) e pela tecla Enter (`:1948`).

O `#resultado` (`:1040`) fica depois dos dois painéis. Num celular de 360×640 com o teclado
numérico aberto (~300px de área visível), a sequência é: `.fu-calc-esq` (título + descrição
+ aviso + link + botão compartilhar, ~200px) → abas (~60px) → 5 campos empilhados
(`@media(max-width:420px){.fu-calc-linha{grid-template-columns:1fr}}`, `:332`), ~90px cada →
a nota longa em vermelho (`:907`). O resultado nasce **700–900px abaixo** do campo onde a
pessoa está digitando, sem rolagem, sem som, sem nada.

E a tecla Enter, que seria a saída, não existe: o teclado numérico do iOS para
`type="number"` não tem tecla Enter.

O contraste com o resto do site é o que torna isso grave — as outras três calculadoras
acertaram:

| Página | Botão "Calcular" | Rola até o resultado | `aria-live` |
|---|---|---|---|
| `aposentadoria-nenkin.html:358` | sim | sim (`:733`) | não |
| `dependentes-no-brasil.html:324` | sim | adjacente | sim (`:326`) |
| `imposto-residencial-juminzei.html:311` | sim | adjacente | sim (`:313`) |
| `furusato-nozei.html` (aba simples) | **não** | **não** | **não** |

A calculadora mais visitada do site é a única que não segue o padrão que o próprio site
estabeleceu.

### 2. Os botões "Cônjuge" e "Financiamento da casa" não recalculam nada

`furusato-nozei.html:1763-1770` — o handler dos `.opcao` só troca a classe `ativa`:

```js
b.addEventListener('click', function(){
  document.querySelectorAll(seletor + ' .opcao').forEach(function(x){ x.classList.remove('ativa'); });
  b.classList.add('ativa');
});
```

Não há chamada a `calcularLimite()`. O stepper de dependentes chama (`:1743`), digitar renda
chama (`:1758`), mas os dois toggles não. Quem já tem um número na tela e depois marca
"Cônjuge: Sim" vê o valor antigo continuar lá, errado.

Pior: a exibição do `#aviso-financiamento` está **dentro** de `calcularLimite()`
(`furusato-nozei.html:1829`). Ou seja, o aviso mais importante da página — *"o seu limite
real pode ser bem menor que o calculado aqui — em alguns casos, quase zero"* (`:911`) —
**nunca aparece** a menos que a pessoa volte e mude a renda depois de marcar "Sim". Quem
marca financiamento e para por aí recebe um número que o próprio site considera não
confiável, sem nenhum aviso.

Isso é bug funcional, não só de UX, mas entra aqui porque o impacto é quase todo em celular
(no desktop dá pra pressionar Enter e forçar o recálculo).

### 3. `--color-text-faint` reprova contraste AA em todo o site

`style.css:33` — `#8d939b` sobre `#ffffff` = **3,10:1**; sobre `--color-bg` (#f7f6f4) =
**2,87:1**; sobre `#f2f0ed` = **2,72:1**. O mínimo AA para texto normal é 4,5:1.

E está aplicada exatamente onde o texto é menor, o que agrava:

| Onde | Arquivo | Tamanho | Contraste |
|---|---|---|---|
| `.fu-disclosure` (disclosure de afiliado) | `furusato-nozei.html:179`, `amazon-furusato-nozei.html:197` | 11,2px | 3,10:1 |
| `.rk-af-nota` | `style.css:715` | 11,5px | 3,10:1 |
| `.rk-indice-rot` | `style.css:687` | 11,5px | 3,10:1 |
| `.logo .logo-texto i` ("NO JAPÃO") | `style.css:598` | 11,5px | 3,10:1 |
| `.fu-calc-aviso` | `furusato-nozei.html:133` | 12,0px | 3,10:1 |
| `.footer-bottom` | `style.css:576` | 13,5px | **2,87:1** |
| `.fu-campo label small` | `furusato-nozei.html:338` | 12,2px | 3,10:1 |
| `.tool-card.is-soon .card-action` | `style.css:311` | 15,0px | 3,10:1 |
| `.fu-conf-fonte` | `style.css:656` | 12,0px | 3,10:1 |

São 22 usos em 12 páginas (`grep -c color-text-faint`). O caso do disclosure de afiliado é o
mais sensível: é o texto que a auditoria de conteúdo apontou como obrigatório por contrato
com a Amazon, e ele está em 11px com 3,1:1 — legalmente presente, praticamente invisível.

**Levar #8d939b para ~#6f757d resolve tudo de uma vez** (#6f757d dá 4,6:1 sobre branco).

### 4. Botão verde do WhatsApp: 1,98:1 — o pior contraste do site

`furusato-nozei.html:602` — `.botao-whatsapp{background:#25D366;color:#fff}`. Branco sobre
#25D366 = **1,98:1**. Reprova AA (4,5:1) e reprova até AAA-large (3:1). É a cor de marca do
WhatsApp, mas o WhatsApp usa branco sobre verde-escuro (#075E54 / #128C7E), não sobre o
verde-claro. Trocar por `#128C7E` (4,7:1) ou manter o fundo e usar texto `#0b3d2e`.

Na mesma família:

- `.pill-best` — branco sobre `--color-accent` #00a866 = **3,09:1**, em texto de 11,2px bold
  (`style.css:430-440`). Aparece na tabela de resultados da remessa.
- `.tool-card .card-action` — #00a866 sobre branco = **3,09:1** em 15px (`style.css:310`).
  É o "Abrir calculadora →" dos cards da home.

`--color-accent` (#00a866) simplesmente não serve como cor de texto nem como fundo de texto
branco. `--color-accent-dark` (#00854f, 4,70:1 sobre branco) serve, e já existe.

### 5. Os dois controles do cabeçalho no celular são pequenos demais

No celular o cabeçalho tem exatamente três coisas: logo, hambúrguer e lupa. Duas das três
falham o mínimo de 44×44px:

- **`.nav-toggle`** (`style.css:159-170`) — `padding:8px 12px` + `font-size:.95rem` +
  `border:1px`, sem `line-height` declarado (botão não herda o `1.65` do body). Altura
  computada ≈ **37px**. É o único acesso à navegação em telas ≤900px, em todas as 18 páginas.
- **`.fu-busca`** (`style.css:615-620`) — `padding:6px` num SVG de 19×19 → **31×31px**.
  E fica a 12px do CTA (`.fu-header-acoes{gap:12px}`, `style.css:613`), abaixo dos 8px de
  folga que a WCAG 2.5.8 pede.

Correção mecânica: `min-height:44px` no `.nav-toggle` e `padding:12px` (ou
`min-width/min-height:44px`) no `.fu-busca`. Nenhum dos dois muda o layout — o cabeçalho já
tem `min-height:72px`.

### 6. Tabelas sem contenção horizontal em `remessa-japao-brasil.html`

Três páginas resolveram isso direito, com wrapper de rolagem:

- `furusato-nozei-vale-a-pena.html:127` `.vp-table-wrap{overflow-x:auto}`
- `melhores-presentes-furusato-nozei.html:99` `.mp-table-wrap{overflow-x:auto}`
- `onde-fazer-furusato-nozei.html:94` `.of-table-wrap{overflow-x:auto}`

E `furusato-nozei.html:465-495` fez melhor ainda: a `.fu-tabela` de 6 colunas vira cartões
empilhados abaixo de 760px, com `data-rot` virando rótulo via `::before`.

`remessa-japao-brasil.html` não tem nem uma coisa nem outra, e é a única página sem `<style>`
inline nenhum:

- **`:208` `.results-table`, 4 colunas** — "Provedor", "Você recebe (líquido)", "Custo total
  estimado", "Prazo típico". Com `padding:12px 10px` por célula (`style.css:422-426`) e
  palavras longas e inquebráveis ("tradicional", "estimado", "competitivo"), a largura
  mínima fica em torno de 390px. A 360px o conteúdo disponível é 312px (`.container` tem
  `padding:0 24px` abaixo de 640px, `style.css:88`). **Estoura ~80px**, e é conteúdo gerado
  por JS, então nem dá pra ver no HTML estático.
- **`:227` `.data-table`, 3 colunas** — a terceira coluna tem *"Estimativa de mercado com
  base em tarifas típicas de transferência internacional"*. Largura mínima ~337px, estoura
  ~25px.

Como não há `overflow:hidden` em lugar nenhum da cadeia, isso vira **scroll horizontal na
página inteira** — o sintoma clássico de "o site treme quando eu arrasto pro lado".

Correção mecânica: envolver as duas em `<div style="overflow-x:auto">` (ou reaproveitar o
padrão `-table-wrap` das outras três páginas, que já é idêntico nas três).

---

## 🟡 Atenção

### 7. `scroll-margin-top` só existe em 6 elementos, e há ~35 âncoras internas

`style.css:102-110` — o `.site-header` é `position:sticky` com ~73px de altura. Toda âncora
interna cai **debaixo** do cabeçalho.

Só `furusato-nozei.html:631` e `aposentadoria-nenkin.html:128` (`.calc-destaque`) e quatro
elementos de `amazon-furusato-nozei.html` têm `scroll-margin-top`. Ficam descobertos, entre
outros:

- `furusato-nozei.html#faq` — **7 links internos apontam pra lá**
- `rakuten-furusato-nozei.html#glossario`, `#passo-a-passo`, `#onestop`, `#vale-a-pena`, `#faq`
- `onde-fazer-furusato-nozei.html#comparacao`
- `one-stop-furusato-nozei.html#passo-a-passo`
- `privacidade.html#publicidade`
- todos os itens do `.rk-indice` das páginas longas

Correção de uma linha em `style.css`: `[id]{scroll-margin-top:88px;}`. Resolve as 35 de uma vez.

### 8. Seis `<label>` sem `for` — todos em campos de calculadora

| Arquivo:linha | Rótulo |
|---|---|
| `furusato-nozei.html:880` | Cônjuge |
| `furusato-nozei.html:888` | Dependentes |
| `furusato-nozei.html:898` | Financiamento da casa |
| `furusato-nozei.html:1018` | Cônjuge sem renda (ou com renda baixa) como dependente? |
| `aposentadoria-nenkin.html:338` | Você trabalha (ou trabalhava) registrado em empresa? |
| `imposto-residencial-juminzei.html:298` | Tem cônjuge dependente? |

Todos são rótulos de grupos de botões, não de um input único — então `for` não é a correção
certa. O certo é `<fieldset>` + `<legend>`, ou um `<div role="group" aria-labelledby="...">`.
Do jeito que está, quem usa leitor de tela ouve "Sim, botão / Não, botão" sem saber sim ou
não pra quê.

### 9. Os botões de opção não dizem qual está selecionado

`furusato-nozei.html:882-883, 900-901, 1020-1021`, `imposto-residencial-juminzei.html:300-301`
— o estado selecionado é só a classe `.ativa` (`furusato-nozei.html:364` pinta de vermelho).
Nenhum `aria-pressed`, nenhum `role="radio"`. Visualmente funciona; para leitor de tela os
dois botões são idênticos.

Mesma coisa nas abas da calculadora (`furusato-nozei.html:856-857`): sem `role="tab"`,
`aria-selected` nem `aria-controls`, e os painéis (`:860`, `:916`) sem `role="tabpanel"`.

E o `#dependentes-visor` (`:891`) muda de número sem nenhum anúncio — quem aperta "+" no
leitor de tela não ouve o valor novo. Um `aria-live="polite"` no `<span>` resolve.

### 10. `aria-expanded` do submenu fica mentindo depois de fechar por fora

`main.js:41-50` — os handlers de clique-fora e de Esc removem a classe `.aberto`, mas não
resetam o `aria-expanded` do `<a>` gatilho:

```js
document.addEventListener("click", function (e) {
  if (e.target.closest(".main-nav .tem-sub")) return;
  itensComSub.forEach(function (x) { x.classList.remove("aberto"); });
});
```

Só o caminho "clicar no próprio gatilho" (`main.js:28-36`) faz o reset. Depois de abrir
"Impostos" e tocar em qualquer outro lugar, o DOM diz `aria-expanded="true"` com o submenu
fechado. Duas linhas resolvem.

### 11. O menu principal não fecha ao tocar fora, e Esc não fecha ele

`main.js:7-13` — o `.nav-toggle` faz `nav.classList.toggle("is-open")`, e nada mais mexe
nessa classe. O handler de clique-fora (`:41`) e o de Esc (`:45`) só cuidam dos submenus e
do campo de busca — o menu principal fica aberto.

Impacto real hoje é baixo porque todos os itens do menu vão pra outra página (o CTA
`#calculadora` fica `display:none` abaixo de 900px, `style.css:629`). Mas é comportamento
que a pessoa espera, e vira problema no dia em que entrar um link de âncora no menu.

### 12. Em janela estreita com mouse, o submenu abre errado

O menu vira hambúrguer por **largura** (`@media(max-width:900px)`, `style.css:172-179`), mas
o submenu muda de comportamento por **capacidade de hover** (`@media(hover:none)`,
`style.css:632-640`). Os dois critérios são independentes, e a combinação
"janela estreita + mouse" cai num vão:

- `.main-nav` empilha vertical (`style.css:177`), mas `.main-nav .submenu` continua
  `position:absolute; left:-14px; min-width:230px` (`style.css:602-607`) → o submenu de 11
  itens abre como um cartão flutuante **por cima** dos itens de baixo, em vez da lista
  indentada.
- O handler de clique retorna cedo quando `hover:hover` (`main.js:24`), sem `preventDefault`
  → clicar em "Impostos" navega pra `href="#"` e joga a página pro topo.

No celular de verdade está tudo certo. O problema é que **é justamente isso que se vê
testando no devtools do desktop** (que reporta `hover:hover` a menos que se ligue a simulação
de toque) — foi assim que o bug anterior escapou. Vale amarrar os dois critérios:
`@media (max-width:900px), (hover:none)`.

Bônus do mesmo ponto: `href="#"` no gatilho do submenu significa que, no teclado, apertar
Enter em "Impostos" navega em vez de abrir. O submenu abre por `:focus-within`
(`style.css:609`), então tabular funciona — mas Enter não. `href="#"` deveria ser
`<button>` ou pelo menos ter `preventDefault` incondicional.

### 13. Alvos de toque secundários abaixo de 44px

Além do cabeçalho (item 5):

| Elemento | Arquivo:linha | Altura computada |
|---|---|---|
| Links do rodapé | `style.css:554, 571` (0,9375rem, `li{margin-bottom:9px}`) | ~25px + 9px de folga |
| `.aba` (abas da calculadora) | `furusato-nozei.html:649` | ~39px |
| `.main-nav .submenu a` | `style.css:610` | ~43px, `gap:0` entre 11 itens |
| `.botao-rede` (Facebook/X) | `furusato-nozei.html:665` | ~42px |
| `.btn-compartilhar-calc` | `furusato-nozei.html:633-639` | ~42px |
| `.btn-sm` (botão "Buscar") | `style.css:408` | 42px (`min-height`) |
| `.fu-stepper button` (−/+) | `furusato-nozei.html:370-374` | 45px de altura, **40px de largura** |
| `.rk-indice a` | `style.css:691` (`gap:9px` em coluna ≤640px) | ~25px + 9px |
| `.breadcrumb a` | `style.css:538-543` | ~22px |

O rodapé é o mais relevante: é onde mora a navegação completa no celular (o menu do topo é
curto), são ~20 links empilhados com 25px de altura e 9px de separação. Um `padding:6px 0`
no `.site-footer li a` com `display:inline-block` resolve sem mexer no visual.

Os que **passam** e vale registrar: `.btn` (52px, `style.css:384`), `.opcao` da aba detalhada
(48px, `furusato-nozei.html:588`), `.faq-item summary` (~56px), `.botao-whatsapp` e
`.botao-copiar` (46px), `.fu-toggle .opcao` (~44px, no limite), `.main-nav a` no celular
(~45px), e os cards inteiros (`.tool-card`, `.fu-cat`) que são o link todo.

### 14. Hierarquia de headings: 6 saltos h2→h4 dentro do conteúdo

| Arquivo:linha | Heading |
|---|---|
| `furusato-nozei.html:1466` | ⚠ As 3 pegadinhas que derrubam todo mundo |
| `amazon-furusato-nozei.html:538` | O valor doado e o desconto são iguais em qualquer site |
| `aposentadoria-nenkin.html:482` | ⚠ Um detalhe importante do acordo |
| `aposentadoria-nenkin.html:505` | Prazo: 2 anos, e ele não perdoa |
| `remessa-japao-brasil.html:260` | Estes números são estimativas, não cotações garantidas |
| `sobre.html:135` | Este site não é consultoria financeira, contábil ou jurídica |

Todos são o `h4` dentro de `.callout` (`style.css:471`) usado como subtítulo de destaque.
Trocar por `h3` (ou por `<strong>`/`<p class="callout-titulo">`, já que na maioria dos casos
não é uma seção de verdade) resolve. Só `rakuten-furusato-nozei.html` está limpo.

Separadamente: **todas as 18 páginas** pulam h2→h4 no rodapé, porque `.site-footer h4`
(`style.css:562`) é o título das colunas. Como está dentro do `<footer>`, o impacto prático é
baixo, mas é o que faz todo validador automático acusar a mesma coisa 18 vezes.

### 15. Nenhuma página tem link de pular para o conteúdo

Zero ocorrências de skip link em 18 páginas. O cabeçalho tem logo + 5 itens de menu + 11
itens de submenu (alcançáveis por `:focus-within`, `style.css:609`) + CTA + lupa + campo de
busca. Quem navega por teclado passa por ~20 tabulações antes de chegar no `<h1>`, **em cada
página**. Um `<a class="skip-link" href="#conteudo">` antes do `<header>` + `id="conteudo"`
no `<main>` é a correção padrão.

### 16. `.fu-afiliado-topo` estoura a tela abaixo de ~370px

`furusato-nozei.html:504-507` — a caixa tem `padding:26px 28px` e o filho flex tem
`min-width:260px`. A 360px: 360 − 48 (container) − 56 (padding da caixa) = **256px**
disponíveis para um item que exige 260px. Estoura 4px. Num iPhone SE (320px) estoura 44px.

Bloco B (mesmo tipo, mas OK por pouco): `.hero-amazon-conteudo{min-width:240px}` em
`amazon-furusato-nozei.html:122`, dentro de uma caixa com `padding:30px 28px` → 256 ≥ 240,
passa a 360px mas estoura a 320px.

Trocar `min-width:260px` por `min-width:min(260px,100%)` ou simplesmente `min-width:0`
resolve os dois.

### 17. A paleta verde e o vermelho ficam entre 4,2 e 4,4:1 em vários fundos claros

Não são reprovações graves como o item 3, mas ficam logo abaixo dos 4,5:1:

| Combinação | Onde | Contraste |
|---|---|---|
| `--color-accent-dark` #00854f sobre `#e3f7ec` | `.categoria-etiqueta` (12,2px bold), `style.css:643` — em 9 páginas | **4,20:1** |
| `--color-accent-dark` sobre `#e3f7ec` | `.aba-detalhada` (14,1px), `furusato-nozei.html:652` | **4,20:1** |
| `--color-accent-dark` sobre `--color-accent-soft` #e8faf1 | `.fu-confianca` (12px), `style.css:646-651` | **4,34:1** |
| `--color-accent-dark` sobre `#e8faf1` | `.fu-res-rot` (13,6px), `furusato-nozei.html:389` | **4,34:1** |
| `--color-red` #e02b25 sobre `--color-bg` #f7f6f4 | `.eyebrow` (13px bold), `style.css:91-99` em `.section-alt` | **4,28:1** |

Escurecer `--color-accent-dark` de #00854f para ~#007143 leva as quatro primeiras para 5,3:1
sem mudança visual perceptível. O `.eyebrow` sobre fundo bege passa se usar
`--color-red-dark` (#b81f1a → 5,98:1), que já existe.

Registrando o que **passa**: `--color-text` #16181d = 17,8:1 no branco e 16,4:1 no bege;
`--color-text-muted` #5c6169 = 6,2:1 / 5,8:1; `--color-link` #b81f1a = 6,5:1; branco sobre
`.btn` vermelho = 4,62:1 (passa por pouco); painel escuro `.leitor` = 9,1 a 12,3:1.

### 18. `inputmode` inconsistente entre as calculadoras

Onze inputs têm `inputmode="numeric"`, cinco não:

- `aposentadoria-nenkin.html:333, 348, 354`
- `remessa-japao-brasil.html:196, 200`

Na prática o `type="number"` já traz teclado numérico nos dois sistemas, então o impacto é
zero hoje — mas vale uniformizar, é uma linha por input, e o `inputmode` é o que sobrevive se
algum dia esses campos virarem `type="text"` (o que seria melhor, aliás: `type="number"`
esconde o valor no `.value` quando o usuário digita algo inválido, e não aceita separador de
milhar — daí a nota "Digite os valores sem ponto" em `furusato-nozei.html:907`).

### 19. O erro de cotação da remessa não é anunciado nem ligado ao campo

`calculadora-remessa.js:177-182` escreve mensagens de status (inclusive a de falha:
*"Não foi possível buscar a cotação ao vivo agora... Confira e edite o campo antes de
calcular"*, `:223-228`) dentro de `#cotacao-status`, que é um `<p class="hint">`
(`remessa-japao-brasil.html:201`).

Falta:
- `role="status"` ou `aria-live="polite"` — a mensagem entra e sai sem ser anunciada;
- `aria-describedby="cotacao-status"` no `#cotacao-referencia` — a mensagem não está
  programaticamente ligada ao campo que ela descreve;
- a cor de erro é aplicada por JS (`statusEl.style.color = "#b45309"`, `:181`) — cor sozinha
  como único indicador de erro (WCAG 1.4.1).

E `handleSubmit` (`:165-168`) trata valor inválido com `amountInput.focus(); return;` — foco
silencioso, sem mensagem. Na prática o `required` + `min="1"` faz o navegador barrar antes,
então esse caminho quase nunca roda; mas quando roda, não explica nada.

### 20. `.calc-destaque` sem redução de padding no celular em duas páginas

`furusato-nozei.html:642-644` e `aposentadoria-nenkin.html:136` reduzem o padding para
`26px 20px` abaixo de 640px. `dependentes-no-brasil.html:121` e
`imposto-residencial-juminzei.html:120` mantêm `padding:32px 30px` em qualquer largura — a
360px isso come 60px dos 312px disponíveis (19% da tela) só de margem interna. Copiar o
`@media` das outras duas.

### 21. Mais de 60 declarações de fonte abaixo de 13px

O corpo de texto está certo (17px, `style.css:55`, com `line-height:1.65`), mas os textos de
apoio descem muito. As menores:

- **10,6px** — `.aba-badge` e `.fu-selo-flutuante .rot` (`furusato-nozei.html:222, 224, 653`)
- **11,2px** — `.fu-disclosure`, `.pill-best` (`style.css:434`, `furusato-nozei.html:179`,
  `amazon-furusato-nozei.html:187, 197`, `rakuten-furusato-nozei.html:122`)
- **11,5px** — `.logo .logo-texto i`, `.rk-indice-rot`, `.rk-af-nota` (`style.css:598, 687, 715`)

Não é uma reprovação formal (a WCAG não estipula tamanho mínimo), mas para um público
majoritariamente adulto lendo no celular, em pé, com uma mão, 11px é hostil. Onde isso se
soma ao item 3 (cor #8d939b), a combinação 11px + 3,1:1 é efetivamente ilegível.

### 22. `scroll-behavior:smooth` global sem `prefers-reduced-motion`

`style.css:47` aplica rolagem suave em toda a página, e há transições de `transform` em
cards, botões e imagens (`style.css:289, 291-295`; `furusato-nozei.html:287, 299`). Zero
ocorrências de `@media (prefers-reduced-motion: reduce)` no site. Um bloco de 5 linhas no
`style.css` cobre tudo.

---

## 🟢 OK — vale registrar

- **`<meta name="viewport" content="width=device-width, initial-scale=1.0">` em 18/18
  páginas**, sempre na linha 5, sem `user-scalable=no` nem `maximum-scale` (que bloqueariam
  o zoom). Impecável.
- **O bug do CSS duplicado do submenu não se repete.** Verificado mecanicamente nas 18
  páginas: nenhuma outra tem `.main-nav .submenu`, `@media(hover:none)` ou `.tem-sub.aberto`
  em `<style>` inline. Item fechado.
- **Zero risco de zoom automático do iOS.** Todos os 14 inputs numéricos do site estão em
  1rem (16px) ou 1,05rem (16,8px) — `style.css:352-359`, `furusato-nozei.html:345-351`,
  `dependentes-no-brasil.html:129`, `imposto-residencial-juminzei.html:128`. O `<select>` da
  aba detalhada também está coberto (`furusato-nozei.html:585`), que é o lugar onde isso
  costuma escapar.
- **A `.fu-tabela` de 6 colunas vira cartões abaixo de 760px** (`furusato-nozei.html:465-495`),
  com `thead` escondido de forma acessível (`clip:rect(0 0 0 0)`, não `display:none`) e os
  rótulos vindo de `data-rot` via `::before`. É a melhor peça de responsividade do site.
- **3 das 4 tabelas largas restantes têm wrapper com `overflow-x:auto`** — só a
  `remessa-japao-brasil.html` ficou de fora (item 6).
- **`lang="pt-BR"` em 18/18** e `<main>` em 17/18 (falta só em `conceito-visual-novo.html`,
  que está bloqueada no robots.txt).
- **Botões-ícone todos com `aria-label`** (`.nav-toggle`, `.fu-busca`, `.fu-step-menos`,
  `.fu-step-mais`, input de busca) e **SVGs decorativos todos com `aria-hidden="true"`**; os
  dois SVGs informativos têm `role="img"` + `aria-label` descritivo
  (`furusato-nozei.html:918, 1600`).
- **`aria-expanded` no `.nav-toggle` é alternado de verdade** pelo JS (`main.js:10-11`) — o
  padrão certo, melhor do que trocar o `aria-label`.
- **Foco visível preservado.** Os cinco `outline:none` do site sempre vêm acompanhados de
  substituto visual (`box-shadow` de 3px ou mudança de cor de borda) — `style.css:410-413`,
  `furusato-nozei.html:352-355`, `dependentes-no-brasil.html:130`,
  `imposto-residencial-juminzei.html:129`.
- **Breakpoints coerentes.** 900px (nav + heros), 760px (tabela), 640px (container +
  seções), 560/520/420px (grids finos). Nenhum breakpoint órfão ou contraditório.
- **`aria-live="polite"` já usado corretamente** em `dependentes-no-brasil.html:326`,
  `imposto-residencial-juminzei.html:313` e `remessa-japao-brasil.html:208` — o padrão existe,
  só não chegou na calculadora de furusato.
- Alvos de toque que passam: `.btn` (52px), `.opcao` da aba detalhada (48px),
  `.faq-item summary` (~56px), `.botao-whatsapp`/`.botao-copiar` (46px), links do menu no
  celular (~45px), e todos os cards clicáveis (o card inteiro é o link).

---

## O que dá pra corrigir mecanicamente, sem risco

Tudo abaixo é substituição direta, sem decisão de design:

1. `[id]{scroll-margin-top:88px;}` no `style.css` — resolve as ~35 âncoras do item 7 de uma vez.
2. `min-height:44px` no `.nav-toggle` (`style.css:159`) e `padding:12px` no `.fu-busca`
   (`style.css:615`) — item 5.
3. Envolver as duas tabelas de `remessa-japao-brasil.html` (`:208` e `:227`) num
   `<div style="overflow-x:auto">`, reaproveitando o padrão `-table-wrap` que já existe em
   três páginas — item 6.
4. Chamar `calcularLimite()` no handler dos `.opcao` (`furusato-nozei.html:1763-1770`) — três
   linhas, corrige o item 2 inteiro (inclusive o aviso de financiamento que nunca aparece).
5. Resetar `aria-expanded="false"` nos dois handlers de fechamento do submenu
   (`main.js:41-50`) — item 10.
6. `display:inline-block; padding:6px 0` no `.site-footer li a` (`style.css:554`) — item 13,
   sem mudança visual.
7. Copiar o `@media(max-width:640px){.calc-destaque{padding:26px 20px}}` para
   `dependentes-no-brasil.html` e `imposto-residencial-juminzei.html` — item 20.
8. `min-width:260px` → `min-width:min(260px,100%)` em `furusato-nozei.html:507` e
   `amazon-furusato-nozei.html:122` — item 16.
9. `inputmode="numeric"` nos 5 inputs que faltam — item 18.
10. Bloco `@media (prefers-reduced-motion: reduce)` no `style.css` — item 22.
11. `h4` → `h3` nos 6 `.callout` do item 14.
12. Trocar `@media(hover:none)` por `@media (max-width:900px), (hover:none)` em
    `style.css:632` — item 12.

## O que precisa de decisão sua

Em ordem sugerida:

1. **A calculadora de furusato (itens 1 e 2).** O item 2 é mecânico (correção 4 acima), mas o
   item 1 é decisão de produto: colocar botão "Calcular" na aba simples igual às outras três
   calculadoras (mais previsível, mais um toque), ou manter o auto-cálculo e adicionar
   `aria-live` + rolagem automática (mais fluido, mais risco de rolar a página enquanto a
   pessoa ainda está digitando). Recomendo o botão — é o padrão que o resto do site já usa, e
   resolve os três problemas de uma vez.

2. **`--color-text-faint` (item 3).** #8d939b → ~#6f757d muda o tom de "cinza claro" para
   "cinza médio" em 22 lugares. É mudança visual de verdade, mas é a única forma de o
   disclosure de afiliado ficar legível.

3. **Botão do WhatsApp (item 4).** Manter o verde de marca #25D366 com texto escuro, ou usar
   o verde-escuro #128C7E (que é o que o próprio WhatsApp usa com texto branco)? As duas
   passam; é escolha estética.

4. **`--color-accent` como cor de texto (itens 4 e 17).** #00a866 não serve como cor de texto
   nem como fundo de texto branco. Trocar os usos textuais por `--color-accent-dark`, e
   escurecer o `--color-accent-dark` de #00854f para ~#007143 resolve todos os casos de
   4,2:1. Impacto visual pequeno, mas mexe na identidade.

5. **`<fieldset>`/`<legend>` nos 6 grupos de botões (item 8)** e `aria-pressed`/`role="tab"`
   (item 9) — implicam mexer no HTML e no CSS dos grupos de opção. Não é arriscado, mas é
   mais do que substituição de string.

6. **Skip link (item 15)** — precisa decidir onde ancorar e como estilizar o estado visível
   no foco.

7. **Tamanhos de fonte abaixo de 12px (item 21)** — decisão editorial pura. Se subir só os
   `.fu-disclosure` de 11,2px para 12,8px já cobre o caso mais sensível.

8. **`type="number"` → `type="text" inputmode="numeric"` nas calculadoras** — resolveria de
   uma vez a nota "Digite os valores sem ponto" e o comportamento do `.value` vazio em
   entrada inválida, mas é refatoração de todos os `parseFloat` do site. Não urgente.
