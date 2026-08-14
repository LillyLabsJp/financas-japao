# Conferência para a revisão do AdSense — 14 de agosto de 2026

> Para a Lilly ler antes de marcar a caixa "Confirmo que corrigi os problemas".
> Tudo aqui foi medido no repositório em 14/08/2026, não estimado.
> **Quem clica é ela.** Este documento existe para que ela clique sabendo
> exatamente o que está confirmando — e sabendo o que ainda está aberto.

## O que o Google apontou

Recusa de 13/08/2026, motivo específico: **"Conteúdo de baixo valor"**.
Não é uma acusação de plágio nem de violação de política. É a avaliação de que
as páginas não entregavam o suficiente para justificar anúncios.

## O que mudou entre 13 e 14 de agosto

Esta é a resposta se o Google pedir detalhe.

| # | Mudança | Onde |
|---|---|---|
| 1 | **Cinco páginas reescritas**, com ganho de 3 a 5 vezes em profundidade | `melhores-presentes` 668 → 3.540 · `onde-fazer` 691 → 3.194 · `como-conferir-desconto` 612 → 2.561 · `sobre` 554 → 1.339 · `remessa-japao-brasil` 829 → 2.224 |
| 2 | **Página de autoria expandida**, com método de trabalho e declaração de conflito de interesse | `sobre.html` |
| 3 | **Política de privacidade corrigida** — ela negava usar Google Analytics, e o site usava | `privacidade.html` |
| 4 | **Analytics apontado para a propriedade certa** | 27 arquivos |
| 5 | **Resposta Rápida** onde faltava | `meu-salario-no-japao`, `remessa-japao-brasil` |
| 6 | **Bloco de fontes primárias japonesas** nas três páginas que não tinham | `amazon-`, `rakuten-`, `furusato-nozei` (pilar) |
| 7 | **Schema de FAQ** que faltava, com 8 perguntas | `rakuten-` |
| 8 | **Método da calculadora aberto** — premissas, margem de erro e o que ela não cobre | `furusato-nozei` |

O item 6 é o mais relevante para a violação apontada. A `amazon-` era a única
página do site **sem nenhuma fonte oficial** — zero links `.go.jp` no arquivo
inteiro. Hoje tem quatro.

## Estado medido hoje — 27 páginas

| Indicador | Resultado |
|---|---|
| Total de palavras no site | **48.899** |
| Páginas de conteúdo com bloco de fontes | **23 de 23** |
| Páginas com schema de FAQ | 23 |
| Links de afiliado com aviso visível | **3 de 3** |
| Páginas abaixo de 900 palavras | 2 — `contato` (320) e `index` (726) |

As duas páginas curtas são normais: página de contato é curta por natureza, e
home curta com navegação forte também. Nenhuma página de conteúdo está na faixa
que motivou a recusa — a menor é `isencao-nenkin-bebe`, com 949 palavras.

## O que ainda está aberto — leia antes de clicar

### 1. Quatro páginas sem assinatura visível — recomendo corrigir antes

Nestas quatro, o nome da autora aparece **apenas dentro do schema JSON-LD**, que
é código. Um revisor humano abre a página e não vê quem escreveu:

- `dependentes-no-brasil.html`
- `entenda-seu-holerite-japao.html`
- `imposto-residencial-juminzei.html`
- `meu-salario-no-japao.html`

São justamente as quatro páginas de calculadora de imposto — onde "quem está me
dizendo isto?" é a pergunta mais razoável que um leitor pode fazer. As outras 19
páginas de conteúdo já têm o bloco de assinatura. **É conserto mecânico: o
componente existe, é colar em quatro arquivos.**

### 2. O pilar não menciona a mudança de outubro de 2026

`furusato-nozei.html` é a única página do cluster que não fala da revisão dos
critérios que entra em vigor em outubro de 2026, enquanto a `onde-fazer` dedica
uma seção ao assunto. Não é problema de AdSense — é de conteúdo desatualizado
numa página que ranqueia. Precisa de revisão fiscal, não de execução mecânica.

### 3. Títulos e descriptions fora do tamanho

15 títulos acima de 65 caracteres e 14 descriptions acima de 165. **Não afeta a
revisão do AdSense** — afeta clique no Google. Fica para depois.

### 4. Imagens de compartilhamento

16 páginas com `og:image` mal cortado, e `meu-salario-no-japao` apontando para um
caminho que não existe. **Não afeta a revisão** — afeta alcance em rede social.
Fica para depois.

## Antes de clicar

1. **Corrija as quatro assinaturas** do item 1. É a única pendência que fala
   diretamente com o motivo da recusa.
2. **Espere o recrawl.** As mudanças de 13 e 14 de agosto precisam de dois ou
   três dias para o Google reler. Pedir revisão em 16 ou 17 de agosto dá essa
   folga. Pedir hoje é pedir para o Google avaliar a versão antiga.
3. **Abra três páginas você mesma** antes de confirmar — sugestão:
   `furusato-nozei`, `amazon-furusato-nozei` e `sobre`. A caixa que você vai
   marcar diz que *você* corrigiu os problemas. Vale ter visto.

## O que este documento não faz

Não garante aprovação. "Conteúdo de baixo valor" é avaliação humana com margem
de julgamento, e nenhuma medição de palavras ou de links prova valor. O que dá
para afirmar com honestidade é que as páginas apontadas foram reescritas, que
toda página de conteúdo agora declara suas fontes primárias, e que o site diz
abertamente o que não conseguiu verificar. Se a revisão for negada de novo, o
motivo virá mais específico — e aí se trabalha em cima dele.
