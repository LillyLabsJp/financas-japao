# Etapa 5 — auditoria final, SEO e GEO — 13 de agosto de 2026

> Feita depois das Etapas 1 a 4, com as cinco páginas reescritas já publicadas.
> Método igual ao da auditoria original: medição programática das 27 páginas do
> sitemap, não impressão. Onde há julgamento editorial, está dito que é julgamento.

## O que mudou desde a auditoria original

| Página | Antes | Agora |
|---|---:|---:|
| `melhores-presentes-furusato-nozei.html` | 668 | **3.540** |
| `onde-fazer-furusato-nozei.html` | 691 | **3.194** |
| `como-conferir-desconto-furusato-nozei.html` | 612 | **2.561** |
| `o-que-e-furusato-nozei.html` | ~950 | **2.700** |

As três páginas mais curtas do cluster de Furusato deixaram de ser as mais curtas
do site. Nenhuma página do cluster está abaixo de 1.000 palavras.

## Estado das 27 páginas indexáveis

Medido em 13/08/2026. "ferr" = elementos de ferramenta real (`input`, `select`,
`table`). "out" e "in" = links internos **de corpo de texto**, não de menu ou rodapé.
"FAQ" = perguntas com schema. "RR" = bloco de Resposta Rápida.

| Página | Palavras | ferr | out | in | FAQ | RR | Fontes |
|---|---:|---:|---:|---:|---:|:--:|:--:|
| `furusato-nozei.html` | 3.817 | 9 | 9 | 11 | 11 | S | S |
| `melhores-presentes-furusato-nozei.html` | 3.540 | 3 | 7 | 3 | 8 | S | S |
| `onde-fazer-furusato-nozei.html` | 3.194 | 1 | 8 | 4 | 7 | S | S |
| `o-que-e-furusato-nozei.html` | 2.700 | 2 | 5 | 5 | 6 | S | S |
| `aposentadoria-nenkin.html` | 2.591 | 5 | 3 | 4 | 8 | S | S |
| `como-conferir-desconto-furusato-nozei.html` | 2.561 | 1 | 6 | 3 | 8 | S | S |
| `rakuten-furusato-nozei.html` | 2.127 | 1 | 4 | 4 | 0 | S | — |
| `imposto-residencial-juminzei.html` | 1.947 | 4 | 4 | 8 | 8 | S | S |
| `entenda-seu-holerite-japao.html` | 1.917 | 1 | 6 | 5 | 8 | — | S |
| `dependentes-no-brasil.html` | 1.849 | 2 | 5 | 2 | 8 | S | S |
| `working-holiday-japao.html` | 1.673 | 1 | 3 | 2 | 10 | — | S |
| `amazon-furusato-nozei.html` | 1.525 | 0 | 3 | 5 | 7 | S | — |
| `auxilio-mae-solo-japao.html` | 1.472 | 1 | 6 | 6 | 7 | — | S |
| `one-stop-furusato-nozei.html` | 1.458 | 0 | 7 | 8 | 4 | S | S |
| `beneficios-familia-japao.html` | 1.333 | 1 | 7 | 7 | 6 | — | S |
| `auxilio-parto-japao.html` | 1.265 | 0 | 8 | 7 | 7 | — | S |
| `auxilio-infantil-japao.html` | 1.239 | 2 | 7 | 7 | 7 | — | S |
| `licenca-parental-japao.html` | 1.169 | 0 | 7 | 6 | 7 | — | S |
| `reducao-jornada-japao.html` | 1.092 | 0 | 6 | 6 | 7 | — | S |
| `privacidade.html` | 1.081 | 0 | 1 | 1 | 0 | — | — |
| `furusato-nozei-vale-a-pena.html` | 1.012 | 1 | 5 | 3 | 4 | S | S |
| `isencao-nenkin-bebe.html` | 949 | 0 | 8 | 7 | 7 | — | S |
| `remessa-japao-brasil.html` | 829 | 4 | 1 | 3 | 5 | — | — |
| `meu-salario-no-japao.html` | 795 | 4 | 3 | 2 | 5 | — | S |
| `index.html` | 726 | 0 | 7 | 0 | 0 | — | S |
| `sobre.html` | 554 | 0 | 0 | 19 | 0 | — | S |
| `contato.html` | 320 | 0 | 3 | 1 | 0 | — | — |

## SEO técnico — o que está limpo

Verificado nas 27 páginas, sem exceção:

- **H1 único** em todas. Nenhuma página com zero ou com dois.
- **Canonical** presente e correto em todas, apontando para a própria URL absoluta.
- **Sitemap consistente**: 27 URLs, todas com arquivo correspondente; nenhum arquivo
  indexável fora do sitemap. As três páginas de rascunho estão no `robots.txt`.
- **Títulos e descriptions únicos**: zero duplicatas no site inteiro.
- **Imagens**: nenhuma `<img>` sem `alt`.
- **JSON-LD válido** em todas as páginas que têm (privacidade não tem, e não precisa).
- **Breadcrumb** em todas as páginas de conteúdo.

### Falso alarme registrado, para não voltar

Durante esta auditoria levantei a suspeita de que 40 das 155 perguntas com schema
FAQ teriam resposta não visível na página — o que seria violação de política do
Google. **Era erro do meu detector**, que exigia correspondência literal das
primeiras palavras. Refeito com medição de sobreposição de conteúdo: **zero
perguntas abaixo de 62% de cobertura**. O schema de FAQ do site está correto.
Fica o registro para a próxima sessão não repetir o susto.

## SEO — o que precisa de decisão da Lilly

Nada aqui é erro; são escolhas de exibição na busca.

### Títulos acima de 65 caracteres (cortam no resultado do Google)

| Caracteres | Página |
|---:|---|
| 106 | `imposto-residencial-juminzei.html` |
| 94 | `dependentes-no-brasil.html` |
| 93 | `furusato-nozei.html` |
| 91 | `aposentadoria-nenkin.html` |
| 86 | `remessa-japao-brasil.html` |
| 82 | `rakuten-furusato-nozei.html` |
| 81 | `como-conferir-desconto-furusato-nozei.html`, `amazon-furusato-nozei.html` |
| 77 | `one-stop-furusato-nozei.html` |
| 76 | `onde-fazer-furusato-nozei.html` |
| 73 | `o-que-e-furusato-nozei.html`, `working-holiday-japao.html` |
| 71 | `melhores-presentes-furusato-nozei.html` |
| 70 | `index.html`, `furusato-nozei-vale-a-pena.html` |

Corte não é penalidade de posicionamento, é perda de clique. O sufixo
`| Finanças no Japão` come 21 caracteres sozinho — em páginas longas, vale
considerar tirá-lo. **Não mexi em nenhum título**: são páginas que já rankeiam e
a decisão é editorial.

### Descriptions acima de 165 caracteres

`imposto-residencial-juminzei` (247), `furusato-nozei` (231), `dependentes-no-brasil`
(220), `aposentadoria-nenkin` (211), `remessa-japao-brasil` (207),
`o-que-e-furusato-nozei` (203), `amazon-furusato-nozei` (200),
`rakuten-furusato-nozei` (195), `beneficios-familia-japao` (190), `index` (189),
`auxilio-mae-solo-japao` (186), `meu-salario-no-japao` (179),
`working-holiday-japao` (166), `isencao-nenkin-bebe` (166).

As três que eu mesmo escrevi hoje (`melhores-presentes`, `onde-fazer`,
`como-conferir`) estavam com 223, 215 e 228 — **já corrigidas para ~150**.

### Corrigido nesta etapa

- **`sitemap.xml`**: o `lastmod` das cinco páginas com mudança real de conteúdo
  passou de 07/08 para 13/08. As outras 22 foram deixadas como estavam de
  propósito: o commit que unificou o rodapé tocou os 27 arquivos, então usar a
  data do git marcaria tudo como "modificado hoje" e tornaria o `lastmod` ruído.

## GEO — estado

O que já está bom, e é a base do desempenho em resposta gerada por IA:

- **11 páginas com Resposta Rápida** autossuficiente no topo.
- **155 perguntas com schema FAQ**, todas com a resposta presente no corpo.
- **20 páginas com bloco de fontes**, várias com link direto para documento primário.
- **Autoria declarada** em todas as páginas de conteúdo, com link para `sobre.html`.
- As reescritas das Etapas 3 a 5 entregaram **regras de decisão citáveis** em vez de
  listas de produto — que é o ativo que uma IA consegue reproduzir e atribuir.

### Lacunas de GEO, em ordem de valor

1. **11 páginas de conteúdo sem Resposta Rápida**: todo o cluster família
   (`beneficios-familia-japao`, `auxilio-parto-japao`, `isencao-nenkin-bebe`,
   `auxilio-infantil-japao`, `reducao-jornada-japao`, `licenca-parental-japao`,
   `auxilio-mae-solo-japao`), mais `entenda-seu-holerite-japao`,
   `meu-salario-no-japao`, `working-holiday-japao` e `remessa-japao-brasil`.
   É a lacuna mais barata de fechar e a de maior retorno: são páginas que já têm
   conteúdo bom, faltando só o bloco que a IA cita.
2. **`rakuten-furusato-nozei` e `amazon-furusato-nozei` sem bloco de fontes** —
   as duas únicas páginas de conteúdo do cluster Furusato sem ele.
3. **`rakuten-furusato-nozei` sem schema de FAQ**, apesar de ter perguntas
   frequentes visíveis na página.

## As páginas que ainda puxam o site para baixo

Em ordem de prioridade para o reenvio do AdSense. As três primeiras são de conteúdo,
não de técnica.

### 1. `sobre.html` — 554 palavras, 19 links de entrada

**É a página mais linkada do site e a mais fina entre as que importam.** Para uma
recusa por "conteúdo de baixo valor", a página de autoria é o principal sinal de
confiança que o avaliador procura: quem escreve, com que experiência, por que
merece crédito em assunto de dinheiro e imposto.

Não reescrevi porque não posso inventar credenciais da Lilly. **É a decisão de maior
impacto que sobrou, e depende de informação que só ela tem.** O que a página
precisaria responder: há quanto tempo mora no Japão, qual a experiência concreta com
os assuntos do site, o que já passou pessoalmente (holerite, nenkin, furusato,
remessa), como o conteúdo é apurado e revisado, e por que o site existe.

### 2. `remessa-japao-brasil.html` — 829 palavras, 1 link de saída, sem fontes

Página de dinheiro (YMYL), com calculadora real, mas **isolada do resto do site** e
**sem nenhum bloco de fontes**. É o pior par possível para avaliação de valor:
assunto sensível, pouca profundidade, nenhuma origem declarada para os números.

### 3. `index.html` — 726 palavras, zero links de entrada de corpo

A home é curta para o papel que exerce. Não é grave em si — homes costumam ser
curtas — mas ela também não distribui autoridade: os 7 links que ela tem saem, e
nenhuma página de corpo aponta de volta para ela.

### 4. `meu-salario-no-japao.html` — 795 palavras

Tem calculadora real (4 elementos), o que compensa parte da brevidade, mas é a
página de ferramenta mais fina do site.

### Não são problema

`contato.html` (320) e `privacidade.html` (1.081) são páginas utilitárias. O Google
espera que existam e não as avalia por profundidade. Deixar como estão.

## Recomendação de ordem

1. `sobre.html` — depende da Lilly, e é o item de maior impacto.
2. Resposta Rápida nas 11 páginas que não têm — barato, mecânico, ganho de GEO.
3. `remessa-japao-brasil.html` — profundidade e bloco de fontes.
4. Fontes na `amazon-` e na `rakuten-`, e schema de FAQ na `rakuten-`.
5. Títulos e descriptions longos — cosmético, faz por último.

Só depois disso vale reenviar o AdSense.
