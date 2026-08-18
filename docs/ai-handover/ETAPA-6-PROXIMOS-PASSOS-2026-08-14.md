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

### 2. Bloco de fontes — são três, não duas, e a pior é o pilar

**Reconferido em 14/08 arquivo por arquivo.** O item dizia "as duas únicas
páginas do cluster Furusato sem bloco de fontes: `amazon-` e `rakuten-`".
São três, e a que falta mais é a `furusato-nozei` — a página pilar.

| Página | Bloco de fontes | Schema FAQ | Links `.go.jp` |
|---|---|---|---|
| ~~`furusato-nozei`~~ (pilar) | **FEITO** | sim | 2 → **5** |
| ~~`rakuten-furusato-nozei`~~ | **FEITO** | **FEITO** | 1 → **4** |
| ~~`amazon-furusato-nozei`~~ | **FEITO** | sim | 0 → **4** |

As outras 22 páginas de conteúdo têm bloco de fontes. Confirmado.

**Ordem de valor, que não é a ordem do item original:**

1. ~~**`amazon-`** é a mais grave~~ — **feito em 14/08.** Era a única página do
   site sem nenhuma fonte oficial: zero links `.go.jp` na página inteira, o
   perfil exato de "conteúdo de baixo valor". Ganhou bloco de fontes com quatro
   links oficiais (Sōmushō ×3, NTA ×1), todos abertos e conferidos na data.
   O bloco também separa o que é norma do governo do que é afirmação da
   própria Amazon, declara que o guia da Amazon não pôde ser reconferido em
   14/08 — a página não abre para leitura automatizada — e marca os três
   perfis de limite como estimativa, não valor oficial.
2. ~~**`furusato-nozei`**~~ — **feito em 14/08.** Citava só as home pages do
   Sōmushō e do NTA; passou a ter os quatro links profundos, o mesmo conjunto
   das outras duas. O bloco também abre o método da calculadora — premissa de
   15% de seguro social, margem de segurança, arredondamento para baixo de
   propósito, e o que ela **não** cobre. E declara que a renda digitada não sai
   do navegador, o que foi conferido no código antes de escrever: nenhum
   `fetch`, nenhum XHR, nenhum evento de Analytics com os valores.

**O item 2 está fechado.** As três páginas têm bloco de fontes.

> **Achado que não foi tratado:** o pilar é a única página do cluster que **não
> menciona a mudança de outubro de 2026** — zero ocorrências, enquanto a
> `onde-fazer` dedica uma seção a ela. É conteúdo fiscal, que pela regra 13 do
> `HANDOVER-SONNET` precisa de revisão específica, então ficou registrado em
> vez de escrito.
3. ~~**`rakuten-`**~~ — **feito em 14/08.** Ganhou o mesmo bloco de fontes da
   `amazon-`, com quatro links oficiais. O `FAQPage` que faltava foi gerado a
   partir das perguntas visíveis: eram **oito**, não seis — o item original
   contou errado. Schema conferido contra o HTML, as oito batem na ordem.

**Sobra só o pilar `furusato-nozei`.** É o único do cluster sem bloco de fontes.

**Cuidado com o detector aqui.** A `aposentadoria-nenkin` parece não ter bloco
se você procurar por `<h2>Fontes`: ela usa `<div class="fontes">` com um
`<strong>`, não um heading. Tem bloco. Qualquer varredura precisa cobrir as
duas marcações — foi o quinto falso positivo evitado nesta série.

Modelo de estrutura para copiar: `onde-fazer-furusato-nozei.html`, linha 460,
que separa "Fontes oficiais" do que não deu para reconferir.

### 3. Títulos acima de 65 caracteres

**Reconferido em 14/08: quinze, confirmado, e os números batem.** Piores:
`imposto-residencial-juminzei` (106), `dependentes-no-brasil` (94),
`furusato-nozei` (93), `aposentadoria-nenkin` (91), `remessa-japao-brasil` (86),
`rakuten-furusato-nozei` (82).
Corte não é penalidade de posição, é perda de clique. O sufixo
`| Finanças no Japão` come 21 caracteres. **Decisão editorial da Lilly** — são
páginas que já rankeiam. Lista completa na auditoria da Etapa 5.

### 4. Descriptions acima de 165 caracteres

**Reconferido em 14/08: quatorze, confirmado.** Piores:
`imposto-residencial-juminzei` (247), `furusato-nozei` (231),
`dependentes-no-brasil` (220), `aposentadoria-nenkin` (211),
`remessa-japao-brasil` (207), `o-que-e-furusato-nozei` (203),
`amazon-furusato-nozei` (200), `rakuten-furusato-nozei` (195),
`beneficios-familia-japao` (190), `index` (189), `auxilio-mae-solo-japao` (186),
`meu-salario-no-japao` (179), `isencao-nenkin-bebe` (166),
`working-holiday-japao` (166).

As duas últimas passam por 1 caractere — não vale sessão.

## Resultado da reconferência de 14/08

Os itens 2, 3 e 4 saíram da auditoria da Etapa 5 e nunca tinham sido
revalidados. Foram medidos por código, arquivo por arquivo:

| Item | O documento dizia | Verificado |
|---|---|---|
| 1. Resposta Rápida | 11 páginas | **2** — errado, e já feito |
| 2. Bloco de fontes | 2 páginas | **3**, e a pior é o pilar |
| 3. Títulos > 65 | 15 páginas | 15 — **certo**, números batem |
| 4. Descriptions > 165 | 14 páginas | 14 — **certo**, números batem |
| 5. Analytics | pendente de decisão | decidido e feito |

**Leitura:** o detector errou onde procurava uma marcação de HTML (itens 1 e 2)
e acertou onde só contava caracteres (itens 3 e 4). Faz sentido — contar
caractere não depende de adivinhar como a página foi escrita. Regra prática
para a próxima auditoria: **medida numérica pode confiar; presença de bloco
tem que abrir o arquivo.**

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

---

## Estado em 17 de agosto de 2026 — leia antes de começar

**A pasta do projeto mudou de lugar.** Saiu de
`C:\Users\lilia\OneDrive\Documentos\GitHub\financas-japao` e passou a ser
`C:\Users\lilia\GitHub\financas-japao`. O motivo: o repositório estava dentro do
OneDrive, que tentava sincronizar os 1.600 arquivos da pasta `.git` a cada
commit. É causa provável da lentidão do computador dela e dos `index.lock` que
travaram o GitHub Desktop várias vezes. **Trabalhe pela pasta nova.**

### Situação em 19/08 — mudança de pasta CONCLUÍDA

**O projeto agora vive em `C:\Users\lilia\GitHub\financas-japao`, fora do
OneDrive. A pasta antiga foi apagada.** Confirmado: `C:\Users\lilia\OneDrive\
Documentos\GitHub` está vazia, 0 bytes. O repositório antigo também foi removido
da lista do GitHub Desktop.

Antes de apagar foi conferido que a cópia antiga estava no mesmo commit, com zero
commits não enviados, zero alterações não commitadas, zero arquivos ignorados, e
nenhum arquivo que não existisse também na pasta nova.

#### Duas descobertas técnicas que valem para as próximas sessões

**1. Neste ambiente, renomear funciona e apagar não — até pedir permissão.**
Foi a chave de tudo. O Git grava trocando `arquivo.lock` pelo arquivo final, e
essa troca exige apagar o destino; sem permissão de exclusão, toda escrita do Git
falha e deixa uma trava nova. A solução é chamar `allow_cowork_file_delete`
apontando para um arquivo **dentro da pasta montada** — aí a exclusão é liberada
para a pasta inteira e o Git volta a funcionar normalmente. Se um dia o Git
travar de novo com "another git process seems to be running", é isso.

**2. As pastas do sistema estão em japonês por baixo.** O caminho real é
`C:\Users\lilia\OneDrive\ドキュメント\...`, mas o Explorador mostra
"Documentos". Foi por isso que apagar pelo Explorador dava "item não encontrado"
repetidamente — o Windows procurava um caminho que não existe. Não é defeito da
pasta nem erro da Lilly. Pelo terminal, com o caminho real, funciona.

**3. O OneDrive recria a pasta vazia depois de apagada.** Aconteceu duas vezes;
na terceira parou. Se reaparecer uma pasta `financas-japao` vazia no OneDrive, é
resíduo de sincronização, não o projeto voltando.

#### O que o sandbox consegue e o que não consegue

- **Consegue:** editar, montar pastas, apagar (depois de liberar a permissão),
  e **fazer commit**.
- **Não consegue: enviar ao GitHub.** As credenciais ficam no Gerenciador de
  Credenciais do Windows, fora do alcance do sandbox. O `git push` falha com
  "could not read Username for https://github.com". O envio continua sendo um
  clique da Lilly no GitHub Desktop.
- **Não consegue operar o GitHub Desktop por controle de tela.** O sistema
  concede acesso ao aplicativo com o nome "GitHub Desktop" mas o reconhece como
  "Githubdesktop" na hora de clicar, e recusa. Não insistir por esse caminho.

### AdSense

Revisão **pedida em 16/08**, domingo. Aguardando resposta por e-mail. A
conferência que embasou o pedido está em `CONFERENCIA-ADSENSE-2026-08-14.md`.

### O que segue em aberto no site

- Botões de compartilhar do pilar ainda são os antigos (Facebook e X). Os novos,
  com WhatsApp e LINE, só estão na `amazon-` e na `rakuten-`.
- O pilar não menciona a mudança de outubro de 2026. Conteúdo fiscal, precisa de
  revisão específica pela regra 13.
- 15 títulos acima de 65 caracteres e 14 descriptions acima de 165. Decisão
  editorial da Lilly.
- Quatro padrões de hero no site. A home e a `remessa` entraram no
  `.rk-hero-foto` em 17/08; sobram `fam-hero--foto` (7 páginas), `hero-grid`
  (6) e `holerite-hero` (3).
- Guia "como usar a Wise" com link de afiliado, separado do comparador de
  remessa, que fica sem afiliado. Ideia aprovada em conversa, não começada.
  **Não fazer página fina só para pendurar afiliado** — o site foi recusado por
  conteúdo de baixo valor há quatro dias.

### Onde o projeto parou — 19 de agosto de 2026

**Nada em execução. Nenhuma pendência técnica bloqueando.** O site está no ar e
correto: 29 páginas, 129 imagens, HTML sem erro de estrutura em nenhuma página,
computador e GitHub no mesmo commit.

**Esperando resposta do AdSense.** Revisão pedida em 16/08. Chega por e-mail,
entre dias e algumas semanas. Se for negada, o motivo virá mais específico do
que "conteúdo de baixo valor" — e é esse motivo que deve guiar o trabalho
seguinte, não palpite.

**Enquanto espera, o gargalo real é audiência, não conteúdo.** Medido no Search
Console em 19/08: 22 páginas indexadas, "detectada mas não indexada" em **zero**
— ou seja, o Google não está recusando nada. Em 28 dias: 25 cliques, 354
impressões, CTR 7,1%, posição média 7,4. O site é bom e quase não aparece. Isso
não se resolve com mais páginas nem com reescrita de título.

**Cuidado com relatórios de terceiros.** O relatório do Haiku de 13/08 continha
erros que valem lembrar: usou dados do Analytics de quando ele ainda apontava
para a propriedade errada; tratou como "problema crítico" o fato de as consultas
listadas terem zero cliques, quando o Search Console só mostra uma fração das
consultas; e projetou receita de 1.500 a 7.500 dólares por mês, cerca de cem
vezes acima do que 300 cliques mensais rendem. A recomendação de criar 20 a 50
artigos é a mais arriscada de todas, quatro dias depois de uma recusa por
conteúdo de baixo valor.

### O que continua pendente

Em ordem de valor, nenhuma urgente:

1. **Botões de compartilhar no pilar** ainda são os antigos, só Facebook e X. Os
   novos, com WhatsApp e LINE, estão apenas na `amazon-` e na `rakuten-`.
   Mecânico, o componente `.fu-share` já existe no `style.css`.
2. **Outubro de 2026 ausente no pilar.** `furusato-nozei.html` é a única página
   do cluster que não menciona a mudança de critérios. Conteúdo fiscal, precisa
   de revisão específica pela regra 13.
3. **Guia "como usar a Wise"**, separado do comparador de remessa. A ideia foi
   aprovada em conversa: o comparador fica **sem** afiliado, o guia carrega o
   link. Wise e Brastel têm programa de afiliados, confirmado. **Não fazer
   página fina só para pendurar o link** — precisa ser guia de verdade, no nível
   da `amazon-`.
4. **15 títulos acima de 65 caracteres e 14 descriptions acima de 165.** Decisão
   editorial da Lilly, em páginas que já ranqueiam.
5. **Quatro padrões de hero no site.** A home e a `remessa` entraram no
   `.rk-hero-foto` em 17/08. Sobram `fam-hero--foto` (7 páginas), `hero-grid`
   (6) e `holerite-hero` (3). O `.rk-hero-foto` é o melhor: usa imagem de
   verdade, com texto alternativo e carregamento prioritário.
6. **Guardar as imagens originais do Kai** em tamanho cheio, fora do repositório.
   Hoje só existem as versões WebP já comprimidas e cortadas. Quando o hero da
   home precisou de um corte diferente para o celular, foi a original que
   resolveu.

### Regras aprendidas sobre imagem, que economizam retrabalho

- **Hero e imagem social não compartilham corte.** O hero precisa de metade
  limpa de um lado, porque o texto entra por cima; a `og:image` precisa do
  assunto centrado, em 1200x630. Reaproveitar um pelo outro produz imagem
  quebrada nos dois.
- **O Facebook não processa WebP em prévia de link.** Onze páginas usavam WebP
  como `og:image` e nenhuma mostrava imagem ao ser compartilhada. Hoje todas
  usam JPEG.
- **A prévia fica congelada na mensagem já enviada.** Depurar no Facebook só
  afeta compartilhamentos novos.
- **No celular o texto sai de cima da foto.** Foto com metade vazia vira uma
  imagem grande e vazia. A solução é `<picture>` com um corte fechado até 860px.
- **A foto é dimensionada pela altura do bloco.** Hero com pouco conteúdo produz
  foto estreita e emenda dura no meio da tela. Resolve com altura mínima.

### Regra que se repetiu a semana toda

Seis vezes uma busca por texto literal quase virou afirmação errada — Resposta
Rápida, bloco de fontes, FAQ do Rakuten, `.passo .num`, assinatura da `sobre`,
âncoras da `remessa`. **Antes de afirmar que algo falta, abra o arquivo.**
