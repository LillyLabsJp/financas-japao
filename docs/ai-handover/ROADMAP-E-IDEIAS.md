# ROADMAP E IDEIAS — Finanças no Japão

> **Este documento preserva contexto estratégico e ideias. Ele não autoriza
> implementação automática. Toda nova tarefa precisa de uma instrução explícita
> da Lilly.**

Estado técnico do projeto: ver `HANDOVER-SONNET.md`.

---

## 1. Visão estratégica

O portal existe porque informação financeira confiável em português, específica
para quem mora no Japão, é rara. O conteúdo disponível ou é genérico, feito para
o Brasil, ou é tradução que ignora as regras japonesas.

**Foco atual:** furusato nozei. A temporada vai de outubro a dezembro, com prazo
final em 31 de dezembro. É o tema com maior intenção de busca e maior potencial
de conversão no ano.

**Prioridade confirmada pela Lilly (6 de agosto de 2026):** SEO, GEO e a
compreensão de quem lê a página vêm antes de qualquer decisão visual. Conteúdo
precisa ser fácil de entender, sem complicação — texto rastreável, claro, sem
depender de imagem ou design elaborado para passar a informação. Qualquer
proposta de redesenho ou reformulação visual deve ser avaliada contra esse
critério antes de ser considerada.

**Monetização discutida e ativa:**

- Google AdSense — script instalado, site na fila de revisão
- Amazon Associates — ativa, tag `financasnojap-22`
- Rakuten Afiliados — ativa

**Público:** brasileiros residentes no Japão, que pagam imposto residencial lá.

**O que constrói autoridade neste nicho:** calculadoras próprias que funcionam,
fontes oficiais citadas, data de atualização visível, e conteúdo que reconhece o
que mudou. O maior diferencial identificado é que quase todo conteúdo em
português ainda diz que os portais dão pontos por doação — o que foi proibido
pelo Sōmushō em 1º de outubro de 2025.

**Restrição de calendário conhecida:** o cookie de afiliado da Amazon e do
Rakuten dura 24 horas. Tráfego de agosto e setembro raramente converte, porque
a pessoa está pesquisando, não doando. O que monetiza é tráfego de outubro a
dezembro.

---

## 2. Aprovado e planejado

Itens que a Lilly aprovou mas que ainda não foram implementados.

### Vídeo sobre furusato nozei — `APROVADA`

- **Descrição:** vídeo explicativo para o canal de YouTube dela.
- **Objetivo:** distribuição que não depende de indexação do Google; caminho mais curto para as 3 vendas qualificadas da Amazon.
- **Prioridade:** alta, segundo a própria Lilly.
- **Estado:** roteiro escrito e gráficos animados prontos, salvos fora do repositório.
- **Dependência:** narração da Lilly.
- **Próximo passo possível:** ela gravar a narração.

### Blocos de anúncio manuais do AdSense — `APROVADA`

- **Descrição:** criar e posicionar os blocos à mão, longe da calculadora e dos links de afiliado.
- **Estado:** bloqueado até a aprovação do Google. Não é possível criar bloco antes.
- **Decisão tomada:** anúncios automáticos ficam desativados.

### Padrão de hero "keyword + hook/revelação" nas outras páginas — `APROVADA, ROLLOUT PENDENTE`

- **Descrição:** trocar o H1 burocrático ("Auxílio pra X no Japão: quanto você recebe") por um formato de duas partes — pergunta/gancho com a keyword ainda preservada (ex.: "Mãe solo no Japão?") seguida de uma linha de promessa/revelação ("Veja o que você pode receber além do auxílio infantil"), com CTA levando pro conteúdo. Testado e aprovado em 13 de agosto de 2026 na página `auxilio-mae-solo-japao.html`.
- **Por que funciona sem prejudicar SEO/GEO:** a keyword continua na primeira linha do H1, e o bloco "Resposta rápida" logo abaixo já entrega a resposta direta e completa — o hero vira só o gancho, quem responde de verdade é o bloco seguinte. `<title>` e meta description continuam descritivos, sem mudança.
- **Rollout recomendado (avaliação do Sonnet, aceita pela Lilly):** por etapas, não tudo de uma vez.
  1. Páginas ainda não indexadas primeiro (risco zero).
  2. Páginas indexadas mas fora do cluster furusato, uma de cada vez.
  3. Cluster furusato (o que mais importa pra outubro–dezembro) por último, com mais cautela — trocar uma página, observar impressões/CTR no Search Console antes de seguir pra próxima.
- **Estado:** aprovado o padrão, mas a aplicação nas outras páginas explicitamente adiada. **Não implementar em outras páginas sem instrução explícita da Lilly na conversa, página por página.**

---

## 1.2 Direção estratégica — Marketing de Momentos (Facebook)

`DIREÇÃO ESTRATÉGICA — NÃO É LISTA DE TAREFAS`

Nasceu de uma pesquisa comportamental do Haiku em 19 grupos brasileiros no
Facebook (13 de agosto de 2026), discutida entre a Lilly e o Kai. Pesquisa
bruta salva em `docs/ai-handover/PESQUISA-HAIKU-COMPORTAMENTAL-2026-08-13.txt`.

**A virada de raciocínio:** o Facebook não deve ser organizado pelas
categorias do site (impostos, benefícios, salário). Deve ser organizado pelo
momento de vida em que o dinheiro aparece sem a pessoa estar procurando por
dinheiro — chegada ao Japão, primeiro salário, carta da prefeitura, filho,
mudança de emprego/visto, volta ao Brasil, entre outros.

**O que muda, concretamente, por enquanto:** só a camada de aquisição e
apresentação no Facebook. Holerite continua sendo holerite, benefício de
família continua sendo benefício de família, Working Holiday continua sendo
Working Holiday — muda como a gente encontra a pessoa, não o que já foi
construído.

**Alerta de qualidade, confirmado por leitura completa do documento:** o
relatório do Haiku continha números inventados, não sustentados pela própria
metodologia dele ("47% ganham menos", "80% não entendem a carta", "conversão
60%+", "3x mais engagement"). Nenhum desses números — nem variações deles —
vai para qualquer publicação. Mesmo padrão já aplicado a frases sem
comprovação descartadas anteriormente (seção 6).

**Experimento aprovado pra rodar primeiro**, antes de qualquer expansão de
site — 3 testes, cada um mapeado numa motivação humana diferente, usando só
páginas que já existem, com post, grupo e UTM próprios:

1. Working Holiday → aspiração/oportunidade ("Você poderia passar até 1 ano
   no Japão?")
2. Holerite → perda/confusão ("Seu salário veio menor do que você
   esperava?")
3. Família/benefícios → proteção/descoberta ("Vai ter bebê no Japão? Veja o
   que pode ter direito.")

**O que medir:** não só cliques — cliques rastreados por UTM, sessões no
site, comportamento depois do clique (ficou e explorou outra página, ou
saiu), e sinais de compartilhamento disponíveis no Facebook.

**Fora de escopo, explicitamente:** qualquer monetização envolvendo serviços
jurídicos, financeiros, empréstimo, consultoria ou intermediação — apareceram
na pesquisa do Haiku ("conexão com advogado", "intermediação com lender",
"consultoria via chat", "gestão de patrimônio"). É negócio regulado,
categoricamente diferente do que o site faz hoje (conteúdo, ferramenta
digital, AdSense, afiliados). Fica fora até eventual pesquisa regulatória
separada — não é decisão de conteúdo.

**As 10 ferramentas/páginas sugeridas pelo relatório do Haiku** (decodificador
de holerite, simulador de salário líquido, banco de dados de salários, mapa
de custo de vida, assistente de cartas, etc.) ficam registradas como ideias,
não como tarefas.

**Nova regra de produto, proposta pelo Kai:** antes de criar uma página nova
porque imaginamos que existe demanda, procurar evidência de que brasileiros
estão realmente tentando resolver aquele problema — grupo, busca, pergunta
recorrente — não só intuição.

**Próximo passo:** rodar os 3 testes, medir, só então decidir se o framework
"momentos de vida" vira algo maior do que uma camada de marketing.

**Checagem de monetização (Sonnet):** hoje a única receita realmente ativa do
site vem de Amazon Associates e Rakuten Afiliados, os dois presos ao cluster
furusato — AdSense ainda está bloqueado esperando aprovação do Google. Nenhum
dos 3 testes aponta pra furusato, e isso está correto: a divulgação de
furusato em grupo já foi deliberadamente congelada até outubro por causa da
janela de 24h do cookie de afiliado (ver seção 5). Então este experimento não
gera ¥ agora — o retorno dele é framework validado e audiência aquecida pra
apontar pro furusato em setembro/outubro, e pro AdSense quando aprovar. Vale
manter isso claro: é investimento em aquisição, não receita imediata.

## 1.1 Cluster Furusato Nozei — concluído em 6 de agosto de 2026

`CONCLUÍDA` — histórico completo movido para
`docs/ai-handover/arquivo/ROADMAP-ARQUIVO.md`. Resumo: as 6 páginas de
profundidade sobre furusato nozei foram construídas, publicadas, interligadas
e indexadas. Próximo item da ordem de prioridade (seção 7 abaixo): o vídeo
sobre furusato nozei, que depende da Lilly gravar a narração.

---

## 3. Em avaliação

`EM AVALIAÇÃO — NÃO IMPLEMENTAR SEM AUTORIZAÇÃO`

### Campo de inscrição de e-mail no site

- **Benefício:** construir uma lista com consentimento real, usando um gancho sazonal ("avisamos quando o prazo do furusato estiver acabando").
- **Dúvida pendente:** a Lilly não decidiu.
- **Contexto:** surgiu depois da conversa sobre mala direta.

### Restante do mockup visual da página Rakuten

- **Descrição:** transformar os blocos "onde ganha × onde complica" e "One-Stop papel × online" em cartões visuais, hoje em formato de lista.
- **Estado:** o Kai entregou imagens; não foram instaladas.
- **Risco:** baixo, é ajuste visual localizado.

### Mockup visual tipo infográfico para a página da Amazon

- **Descrição:** a Lilly recebeu um mockup (poster/infográfico) para
  `amazon-furusato-nozei.html`, com paleta verde/amarelo, formato "6 passos"
  ilustrado, tabela comparativa e simulação de tela de checkout.
- **Estado:** só uma imagem de referência recebida, nada implementado.
- **Avaliação do Sonnet:** não recomendado implementar como está. A paleta
  foge da identidade visual aprovada (vermelho/preto/verde discreto), e o
  formato é mais pôster do que texto corrido — o que reduz o conteúdo
  rastreável que o site prioriza para SEO e GEO. A simulação de tela de
  checkout da Amazon tem o mesmo risco de marca de terceiro que já foi
  descartado para as capturas do Rakuten (ver seção 6).
- **O que pode valer a pena aproveitar:** o resumo visual "6 passos" e a
  tabela comparativa Amazon × site convencional, adaptados à paleta real do
  site, como complemento ao texto já existente — não como substituição da
  página.
- **Dúvida pendente:** a Lilly ainda não decidiu. Não implementar sem
  autorização explícita.

### Glossário em formato recolhível

- **Descrição:** mostrar 4 dos 15 termos e esconder o resto atrás de um clique.
- **Ressalva registrada:** se for feito, tem de ser com CSS puro, mantendo os 15 termos no HTML.

---

## 4. Ideias futuras

`FUTURA — NÃO É PENDÊNCIA TÉCNICA`

### Versão em inglês da página do furusato

- Discutida em profundidade. O Japão passou de 4 milhões de residentes estrangeiros.
- **Recomendação registrada:** inglês é a única língua adicional viável no curto prazo, porque a qualidade pode ser verificada. Vietnamita, chinês e indonésio foram descartados por não haver como conferir o conteúdo fiscal.
- **Momento sugerido:** depois de outubro. Página nova leva meses para ranquear.

### Página do Facebook

- **Papel definido:** endereço fixo e sinal de marca, não canal de alcance.
- **Observação registrada:** alcance orgânico de página nova é quase nulo. O público está nos grupos, e a maioria dos grupos proíbe divulgação direta.
- **Estado:** a Lilly pediu para guardar para a fase de divulgação.

### Conteúdo de profundidade ligado ao furusato

Temas identificados como busca real:

- ~~One-Stop passo a passo, como página própria~~ — concluído, ver seção 1.1
- ~~Furusato Nozei vale a pena / quando compensa~~ — concluído, ver seção 1.1
- ~~Onde fazer / comparativo de plataformas~~ — concluído, ver seção 1.1
- ~~Como conferir o desconto no jūminzei~~ — concluído, ver seção 1.1
- Furusato com financiamento imobiliário — ainda não escrito
- "Posso doar ganhando pouco?" — ainda não escrito (parcialmente coberto pela seção "quando não compensa" de `furusato-nozei-vale-a-pena.html`, mas não em profundidade)

---

## 5. Ideias congeladas para depois

`CONGELADA`

- **Divulgação nos grupos de Facebook.** Deliberadamente adiada para outubro, por causa da janela de 24 horas do cookie.
- **Mala direta para a lista de e-mails existente.** Congelada por questão legal: a lista é mistura de origens e o Japão exige opt-in prévio.
- **Acordeão no FAQ.** Adiado para depois da aprovação do AdSense, para a página não parecer curta na revisão humana.
- **Aplicar a identidade visual nova às demais páginas.** A Lilly disse "começamos por essa, depois arrumamos o visual das outras". O cabeçalho já foi padronizado; o restante não.

---

## 6. Ideias descartadas ou substituídas

`DESCARTADAS/SUBSTITUÍDAS` — histórico completo movido para
`docs/ai-handover/arquivo/ROADMAP-ARQUIVO.md` (carrossel de presentes,
capturas do Rakuten, link externo em termo japonês, redirect 301 de
`/index.html`, frases sem comprovação). Mantido aqui só pra não repetir essas
sugestões: nenhuma delas volta a ser considerada sem motivo novo.

---

## 7. Ordem de prioridade conhecida

Definida pela própria Lilly, em conversa:

1. Vídeo sobre furusato nozei — maior retorno, não depende do Google
2. Profundidade no tema furusato, em vez de largura de temas
3. Divulgação nos grupos, a partir de outubro

Versão em inglês fica depois de outubro. Não há data ou cronograma definido
além disso.

---

## 8. Regra de uso deste documento

> Uma ideia listada aqui **não é** uma tarefa autorizada. Antes de implementar
> qualquer item, é preciso uma instrução explícita da Lilly na conversa.
