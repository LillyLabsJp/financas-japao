# PLANO — Quiz de triagem de benefícios (cluster Família)

> Rascunho para revisão da Lilly antes de qualquer implementação.
> Nada aqui foi codado ainda.

## Objetivo

Camada de triagem entre o hero e a tabela "Os 5 benefícios, resumidos" em
`beneficios-familia-japao.html`. Pessoa responde 4 a 6 perguntas, recebe uma
lista personalizada de quais dos 5 benefícios provavelmente se aplicam a ela,
cada um com link pra página específica (e pra calculadora, no caso do
auxílio infantil). 100% client-side, sem backend, sem guardar dados.

## Por que essas perguntas e não outras

As regras reais dos 5 benefícios (extraídas das próprias páginas do site,
não da proposta que você recebeu) têm uma condição que muita gente esquece:
licença-parental e redução de jornada exigem **pelo menos 12 meses de
histórico no seguro-emprego** antes de começar a licença. Sem essa pergunta,
o quiz diria "você tem direito à licença-parental" pra alguém que acabou de
ser contratada — e isso é o tipo de erro que machuca a credibilidade do site.
Por isso incluí uma pergunta a mais do que a proposta original.

## Árvore de perguntas

**P1 — Situação**
"Você está grávida ou já tem filho?"
- Estou grávida
- Tenho filho(a)

**P2 — Idade do filho mais novo** (pula se "estou grávida")
- Menos de 1 ano
- 1 a 2 anos
- 3 a 17 anos
- 18 anos ou mais → encerra o quiz com uma mensagem específica (ver seção
  "Casos de saída antecipada")

**P3 — Situação de trabalho**
"Como você trabalha hoje?"
- Empregada registrada (seishain ou contrato com seguro-emprego)
- Autônoma ou freelancer
- Não estou trabalhando no momento

**P4 — Seguro-saúde**
"Você está inscrita no seguro-saúde japonês (da empresa ou nacional)?"
- Sim
- Não / não sei

**P5 — Só aparece se P3 = "Empregada registrada"**
"Há quanto tempo você trabalha registrada nessa empresa, com seguro-emprego?"
- Menos de 1 ano
- 1 ano ou mais

**P6 — Só aparece se P3 = "Empregada registrada" E P2 = "menos de 1 ano" ou "1 a 2 anos"**
"Qual sua situação agora?"
- Estou de licença parental
- Voltei trabalhando em jornada reduzida
- Nenhum dos dois ainda

## Casos de saída antecipada

- **P2 = "18 anos ou mais"**: nenhum dos 5 benefícios se aplica (todos são
  pra gravidez ou filho até 17 anos, no caso do auxílio infantil). Mensagem:
  "Esses benefícios são voltados pra quem está grávida ou tem filho até 17
  anos. Se for esse o seu caso mais adiante, volte aqui — vamos guardar essa
  página pra você." Sem redirecionar pra lugar nenhum, sem parecer um beco
  sem saída.

## Lógica de resultado (por benefício)

Todo resultado usa linguagem de probabilidade ("costuma se aplicar",
"provavelmente"), nunca afirmação categórica — e sempre linka pra página que
tem os requisitos completos e a fonte oficial.

**Auxílio-parto** — aparece se P4 = Sim E P2 ≠ "18 anos ou mais".
Texto: "¥500.000 — Auxílio-parto. Pago pelo seguro-saúde no nascimento, e
você tem até 2 anos após o parto pra pedir. [Ver como pedir →]"
Se P4 = Não/não sei: aparece do mesmo jeito, mas com aviso: "Esse benefício
depende de estar inscrita no seguro-saúde japonês — confirme sua situação
antes de contar com ele. [Ver como funciona →]"

**Isenção do Nenkin por filho** — aparece se P3 = Autônoma/freelancer E
P2 ≠ "18 anos ou mais".
Texto: "Isenção do Nenkin por filho. Vale a partir de 1º de outubro de 2026
pra quem paga o Kokumin Nenkin por conta própria — até 12 meses sem pagar,
sem reduzir a aposentadoria futura. [Ver as regras →]"

**Auxílio infantil (Jidō Teate)** — aparece sempre que P2 ∈ {menos de 1 ano,
1-2 anos, 3-17 anos}. É o único praticamente universal (sem teto de renda
desde out/2024, qualquer nacionalidade).
Texto: "¥10.000 a ¥15.000/mês — Auxílio infantil. Cai direto na conta, 6
vezes por ano, até os 18 anos — sem depender de quanto você ganha. [Calcular
quanto você recebe →]" (linka pra calculadora dentro de
`auxilio-infantil-japao.html`)

**Licença-parental** — aparece se P3 = Empregada registrada E P5 = "1 ano ou
mais" E P2 ∈ {menos de 1 ano, 1-2 anos}.
Texto: "67% a 80% do salário — Licença-parental. Com seu tempo de empresa,
esse benefício costuma se aplicar. [Ver as regras →]"
Se P5 = "Menos de 1 ano": **não mostra** esse card — mostra em vez disso um
aviso curto: "Licença-parental costuma exigir 12 meses de empresa antes de
começar — ainda não é o seu caso, mas guarde a página pra quando completar."

**Redução de jornada** — aparece se P3 = Empregada registrada E P5 = "1 ano
ou mais" E P2 ∈ {menos de 1 ano, 1-2 anos} E P6 ≠ "Estou de licença parental"
(porque não dá pra estar nos dois ao mesmo tempo).
Texto: "Até 10% do salário compensado — Redução de jornada. Se você reduziu
a carga horária pra cuidar do seu filho, pode ter direito. [Entender o
benefício →]"

## O que muda na página-pilar (sem tocar no SEO existente)

Ordem proposta, mantendo tudo que já existe:

1. Hero (igual)
2. Resposta rápida (igual)
3. **Novo bloco**: "Descubra o que pode valer para você" — quiz, "leva menos
   de 1 minuto, sem cadastro"
4. Resultado personalizado (aparece só depois de responder)
5. "Os 5 benefícios, resumidos" (igual, continua indexável)
6. Resto da página (igual)

O texto corrido continua todo lá pro Google — o quiz é uma camada em cima,
não uma substituição.

## O que NÃO está decidido ainda

- Se isso vira base de campanha paga no Facebook/Instagram (decisão
  separada, maior escopo — orçamento, política de anúncio do Meta pra
  conteúdo financeiro)
- Investigar grupos de Facebook (preciso saber quais grupos e como teria
  acesso — pergunto separado)

## Próximo passo

Se você aprovar essa árvore (ou pedir ajustes), o próximo passo é construir
o quiz em HTML/CSS/JS puro, sem sair do formato estático do site, encaixado
exatamente no ponto 3 acima.
