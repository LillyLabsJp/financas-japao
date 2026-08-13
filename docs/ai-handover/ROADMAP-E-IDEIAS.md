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

### Página dos melhores presentes — `CONCLUÍDA`

- **Descrição:** página sobre como escolher presentes, mantendo a pessoa no site e conduzindo aos links de afiliado.
- **Estado:** construída e publicada em 6 de agosto de 2026 — `melhores-presentes-furusato-nozei.html`.
- **Observação:** links apontam para página de coleção, nunca para município específico — norma do Sōmushō.

### Padrão de hero "keyword + hook/revelação" nas outras páginas — `APROVADA, ROLLOUT PENDENTE`

- **Descrição:** trocar o H1 burocrático ("Auxílio pra X no Japão: quanto você recebe") por um formato de duas partes — pergunta/gancho com a keyword ainda preservada (ex.: "Mãe solo no Japão?") seguida de uma linha de promessa/revelação ("Veja o que você pode receber além do auxílio infantil"), com CTA levando pro conteúdo. Testado e aprovado em 13 de agosto de 2026 na página `auxilio-mae-solo-japao.html`.
- **Por que funciona sem prejudicar SEO/GEO:** a keyword continua na primeira linha do H1, e o bloco "Resposta rápida" logo abaixo já entrega a resposta direta e completa — o hero vira só o gancho, quem responde de verdade é o bloco seguinte. `<title>` e meta description continuam descritivos, sem mudança.
- **Rollout recomendado (avaliação do Sonnet, aceita pela Lilly):** por etapas, não tudo de uma vez.
  1. Páginas ainda não indexadas primeiro (risco zero).
  2. Páginas indexadas mas fora do cluster furusato, uma de cada vez.
  3. Cluster furusato (o que mais importa pra outubro–dezembro) por último, com mais cautela — trocar uma página, observar impressões/CTR no Search Console antes de seguir pra próxima.
- **Estado:** aprovado o padrão, mas a aplicação nas outras páginas explicitamente adiada. **Não implementar em outras páginas sem instrução explícita da Lilly na conversa, página por página.**

---

## 1.1 Cluster Furusato Nozei — concluído em 6 de agosto de 2026

`CONCLUÍDA`

As 6 páginas de profundidade sobre furusato nozei, identificadas na seção 4
como conteúdo nunca escrito, foram todas construídas, publicadas e
interligadas na mesma sessão: `o-que-e-furusato-nozei.html` (pilar),
`melhores-presentes-furusato-nozei.html`, `one-stop-furusato-nozei.html`,
`furusato-nozei-vale-a-pena.html`, `como-conferir-desconto-furusato-nozei.html`
e `onde-fazer-furusato-nozei.html`. Conteúdo bruto veio de pacotes do Kai
(designer externo), sempre reconstruído no template real do site — nunca
usado com o HTML/CSS self-styled original. Indexação solicitada manualmente
no Search Console para as 6 páginas. Detalhes técnicos completos em
`HANDOVER-SONNET.md`, seções 6 e 7.

Próximo item da ordem de prioridade (seção 7 abaixo): o vídeo sobre furusato
nozei, que depende da Lilly gravar a narração.

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

### Carrossel horizontal nas categorias de presente — `DESCARTADA`

- **Original:** sugestão de carrossel estilo Netflix.
- **Decisão:** grade fixa, 4 colunas no desktop e 2 no celular, todos os itens visíveis.
- **Motivo:** carrossel esconde metade dos itens no celular e prejudica a leitura pelo buscador.

### Capturas reais das telas do Rakuten — `SUBSTITUÍDA`

- **Original:** usar capturas do site do Rakuten no passo a passo.
- **Decisão:** recriações próprias.
- **Motivo:** interface e marca de terceiro.
- **Solução atual:** seis imagens WebP recriadas, com o texto de introdução dizendo explicitamente que são recriações.

### Link externo nos termos japoneses — `SUBSTITUÍDA`

- **Original:** linkar 「ワンストップ特例制度」 para a página japonesa do Rakuten.
- **Decisão:** âncora interna para a seção One-Stop da própria página.
- **Motivo:** mandar o leitor para uma página em japonês é o oposto do que a página se propõe a fazer.

### Redirecionamento 301 de `/index.html` para `/` — `DESCARTADA`

- **Motivo:** GitHub Pages não permite configurar redirecionamento de servidor. E é desnecessário: as duas URLs servem exatamente o mesmo arquivo.
- **Solução atual:** canonical apontando para a raiz, sitemap com apenas `/`, e todos os links internos usando `/`.

### Frases sem comprovação — `DESCARTADAS`

Propostas que chegaram em revisões externas e foram recusadas por não terem
base verificável: "milhares de brasileiros já utilizam", "100% legal e seguro",
"100% fontes citadas", "o maior catálogo do Japão".

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
