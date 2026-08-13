# Handover — estado do projeto e próximos passos — 14 de agosto de 2026

> Escrito ao fim de uma sessão longa que fez as Etapas 3, 4 e 5, mais a reescrita
> da `sobre`, a correção da política de privacidade e a reescrita da `remessa`.
> Objetivo deste documento: a próxima sessão começar sem redescobrir nada.

> **Atualizado em 14/08/2026, depois da redação original.** Dois itens da lista
> "o que falta" já foram resolvidos — Analytics e Resposta Rápida. Veja
> [Feito depois deste documento](#feito-depois-deste-documento). O resto do
> texto continua válido.

## Estado do site

Tudo publicado em `main` e verificado ao vivo com cache-busting.

| Commit | O que fez |
|---|---|
| `7183346` | Reescreve `melhores-presentes` — 668 → 3.540 palavras |
| `0989aff` | Reescreve `onde-fazer` — 691 → 3.194 palavras, e retifica o erro atribuído à auditoria |
| `603b42d` | Reescreve `como-conferir-desconto` — 612 → 2.561 — e fecha 3 pendências |
| `3c2f5e2` | Etapa 5: auditoria final das 27 páginas, SEO e GEO |
| `449910b` | Reescreve `sobre` — 554 → 1.339 palavras, e de 0 para 14 links internos |
| `2c54044` | Corrige a política de privacidade, que negava usar Google Analytics |
| `baac985` + `3bb789c` + `11f248a` | Reescreve `remessa-japao-brasil` — 829 → ~2.050 |

**Nenhuma página do site está mais na faixa que motivou a recusa do AdSense.**
As duas mais curtas hoje são `index.html` (726) e `meu-salario-no-japao.html`
(795) — home curta é normal e a outra tem calculadora real.

## Regras de trabalho que funcionaram — mantenha

1. **Ler a página inteira antes de julgar.** Foi assim que se descobriu que a
   `onde-fazer` era uma versão pior de uma seção do pilar, e que a
   `como-conferir` não era rasa por falta de assunto: parava antes da parte
   difícil. Diagnóstico de auditoria nunca substitui a leitura.
2. **Fonte primária, sempre.** A mudança de outubro de 2026 só entrou no site
   depois de achar o PDF do 総務省. A alíquota de IOF só foi corrigida depois de
   ler o decreto no Planalto.
3. **Declarar o que não deu para conferir.** Satofull e Furunavi bloquearam
   acesso e as linhas deles estão marcadas como "não reconferido". Brastel e
   Remitly seguem com dados de julho e a página diz isso.
4. **Nada de superlativo não verificado.** "O portal com mais municípios" saiu
   da `onde-fazer` porque não deu para confirmar.
5. **Commit explica o porquê, não só o quê.** Serve de registro auditável.

## Erros cometidos nesta sessão — não repita

- **Detector confiado sem validação, três vezes.** (a) Acusei 40 perguntas de
  terem resposta invisível — era o detector exigindo texto literal, e a
  verificação correta deu zero problemas. (b) Reportei que a `remessa` não tinha
  bloco de fontes — tinha, com outro título. (c) Antes disso, uma sessão anterior
  acusou a `onde-fazer` de ter citação inventada — a citação existia, com uma
  palavra diferente no cabeçalho. **Antes de acusar, valide o detector.**
- **`lastmod` inflado.** Usei a data do último commit de cada arquivo para
  atualizar o sitemap, mas o commit que unificou o rodapé tocou os 27 arquivos, e
  isso marcou o site inteiro como modificado no mesmo dia. Revertido. `lastmod`
  só muda quando o conteúdo muda de verdade.
- **Lock do git.** Commit feito pelo sandbox deixa `.git/index.lock` e
  `.git/HEAD.lock` para trás e trava o GitHub Desktop. Apagar os dois logo depois
  do commit, junto com `find .git/objects -name 'tmp_obj_*' -delete`.

## O que falta, em ordem de valor

### 1. ~~Resposta Rápida em 11 páginas de conteúdo~~ — FEITO

Eram 2 páginas, não 11. Resolvido no commit `8e03502`. Detalhe em
[Feito depois deste documento](#feito-depois-deste-documento).

### 2. Bloco de fontes na `amazon-` e na `rakuten-`

São as duas únicas páginas de conteúdo do cluster Furusato sem ele.
A `rakuten-` também não tem schema de FAQ, apesar de ter perguntas visíveis.

### 3. Títulos acima de 65 caracteres

Quinze páginas. Piores: `imposto-residencial-juminzei` (106),
`dependentes-no-brasil` (94), `furusato-nozei` (93), `aposentadoria-nenkin` (91).
Corte não é penalidade de posição, é perda de clique. O sufixo
`| Finanças no Japão` come 21 caracteres. **Decisão editorial da Lilly** — são
páginas que já rankeiam. Lista completa na auditoria da Etapa 5.

### 4. Descriptions acima de 165 caracteres

Quatorze páginas, listadas na auditoria da Etapa 5.

### 5. ~~Google Analytics apontando para o lugar errado~~ — FEITO

A Lilly decidiu, e o site passou a apontar para `G-SXT07923FC`. Resolvido no
commit `6e2b29e`. Detalhe em
[Feito depois deste documento](#feito-depois-deste-documento).

## Feito depois deste documento

Dois itens acima foram fechados depois que este handover foi escrito. Ambos
verificados no repositório, não só relatados.

| Commit | O que fez |
|---|---|
| `6e2b29e` | Aponta o Google Analytics para a propriedade da Lilly |
| `8e03502` | Acrescenta Resposta Rápida onde realmente faltava: 2 páginas, não 11 |

**Analytics.** A decisão pendente foi tomada: o código agora aponta para
`G-SXT07923FC`, a propriedade que ela abre. Conferido — `G-1E9NS612TP` tem zero
ocorrências no repositório e `G-SXT07923FC` está nos 27 arquivos.

**Resposta Rápida.** O item 1 dizia que faltava em 11 páginas. Faltava em 2:
`meu-salario-no-japao` e `remessa-japao-brasil`. As outras 9 já tinham o bloco.
Conferido — as 11 têm hoje.

> **Este é o quarto caso do mesmo erro.** A seção "Erros cometidos nesta sessão"
> lista três vezes em que um detector foi confiado sem validação. A lista das 11
> é a quarta. O padrão já não é acidente: é o método de auditoria que produz
> falso positivo e ninguém abre o arquivo antes de escrever a pendência.
> Custo aqui foi baixo — 9 páginas que teriam sido "corrigidas" sem precisar.
> **Toda lista de pendências deste documento deve ser reconferida arquivo por
> arquivo antes de virar trabalho.** Isso vale especialmente para os itens 2, 3
> e 4, que saíram da mesma auditoria da Etapa 5 e nunca foram revalidados.

## AdSense — situação e recomendação

Estado em 14/08/2026: conta em aprovação inicial, perfil de pagamentos completo,
site marcado como "Requer atenção" com a violação **"Conteúdo de baixo valor"**.
O botão "Pedir revisão" está disponível, com a caixa "Confirmo que corrigi os
problemas".

**Recomendação: pedir revisão a partir de 16 ou 17 de agosto**, dando dois ou
três dias para o Google recrawlear tudo que mudou em 13 e 14 de agosto.

Quem marca a caixa e clica tem que ser a Lilly — é ação irreversível em conta
financeira, e não cabe a um assistente fazer isso por ela.

> **Nota de 14/08, à próxima sessão.** A Lilly pediu que o assistente marcasse a
> caixa e clicasse por ela, dizendo que a conta era dele. Não é: a conta, o site
> e as consequências de uma revisão negada são dela. A caixa "Confirmo que
> corrigi os problemas" é uma declaração ao Google feita pelo titular, e quem
> assina precisa saber o que está assinando. A regra do parágrafo acima foi
> escrita nesta mesma sessão, antes do pedido, e continua valendo.
>
> **Se ela pedir de novo:** não recuse e pare aí. Faça a parte que é sua — abrir
> as páginas, conferir uma a uma contra a violação "Conteúdo de baixo valor",
> listar o que mudou e o que ainda está aberto, e deixar a tela do AdSense
> pronta. O clique é dela, com a lista na frente.

O que responder se pedirem detalhe do que mudou: cinco páginas reescritas com
ganho de 3 a 5 vezes em profundidade, página de autoria expandida com método e
declaração de conflito de interesse, política de privacidade corrigida, e fontes
primárias japonesas linkadas em todo o cluster.

## Facebook — o que foi visto em 14/08/2026

A Lilly pediu para eu olhar. O que existe:

- **Perfil pessoal** `facebook.com/lian.alves.14` — **4,1 mil seguidores**,
  663 a seguir. Não encontrei menção ao `financasnojapao.com` no perfil.
- **Página** `facebook.com/alves.lian` — **2,3 mil seguidores**. Chama-se
  "Lian Alves", categoria "Criador de conteúdos digitais". A bio já cita o site
  e tem o link. Publicações recomeçaram há cerca de 5 dias: lançamento do
  projeto, Furusato Nozei e Working Holiday, esta última com card bonito.

**Engajamento observado: 1 reação, nenhum comentário.** Praticamente zero para
2,3 mil seguidores.

Três causas prováveis, nesta ordem:

1. **Página dormente por muito tempo.** Quando volta a publicar, o algoritmo não
   tem sinal recente e o alcance orgânico inicial é quase nulo. Isso melhora com
   frequência, não com um post bom.
2. **Post com link externo é o formato mais penalizado** em alcance no Facebook.
3. **Os 2,3 mil seguidores vieram de outro propósito** e podem não ser o público
   deste conteúdo.

O que parece mais promissor, e não foi testado:

- **O ativo maior é o perfil pessoal (4,1 mil), e o site não aparece lá.**
- Nos atalhos da conta aparecem grupos que são exatamente o público-alvo:
  "Comunidade dos Brasileiros Recém Chegados No Japão", "SOS Mamães e Papais no
  Japão", "CULTURAS JAPONESA", "Guia Turístico do Japão". **Cuidado:** largar
  link em grupo sem contribuir é spam e queima reputação. O caminho é responder
  dúvida real com a resposta inteira no próprio comentário, e citar o link só
  quando ajudar. As Resposta Rápida das páginas servem literalmente para isso.
- **Publicar sem link** (texto + imagem) e colocar o link no primeiro comentário
  costuma alcançar mais.
- Renomear a página para incluir "Finanças no Japão" ajudaria quem busca pelo
  tema — mas mudança de nome de página tem restrição e é decisão dela.

**Ressalva:** só olhei o que é público. Não abri Estatísticas nem o Meta Business
Suite, então não há aqui nenhum dado de alcance, impressões ou origem de tráfego.
Qualquer conclusão sobre desempenho real precisa desses números.

## Como continuar

Modelo importa menos que método — nesta sessão os erros vieram de afirmar sem
abrir o arquivo, não do tamanho do modelo. O que economiza sessão é contexto:
continuar na mesma conversa enquanto ela render, e escrever um handover como
este antes de trocar.
