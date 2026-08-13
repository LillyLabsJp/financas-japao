# Auditoria AdSense — valor diferencial — 13 de agosto de 2026

> Motivada pela recusa do AdSense com motivo específico "Conteúdo de baixo valor" (print + e-mail do Google, 13/08/2026). Escopo: valor diferencial por página, não SEO tradicional. Feita pelo Sonnet, lendo o texto real de cada página e medindo estrutura (ferramentas, tabelas, links internos de corpo de texto) programaticamente — não é opinião solta. **Nenhum arquivo foi alterado.**

> **Nota de correção — acrescentada em 13/08/2026, ao fim da Etapa 3.**
> Na conversa em que esta auditoria foi produzida, a linha de
> `onde-fazer-furusato-nozei.html` foi defendida com uma citação literal do
> arquivo — células com "Confirmar antes: Municípios, entrega e caminho do
> One-Stop" — que **não existe na página**. Verificado depois: zero
> ocorrências no repositório inteiro. A página não tinha sido lida naquele
> momento. A citação inventada não chegou a entrar neste arquivo, mas a nota
> **B** da linha 32 foi atribuída sem leitura integral da página e deve ser
> tratada como provisória. A Etapa 4 começa relendo `onde-fazer` do zero, e a
> Etapa 5 reavalia a nota. As demais linhas da tabela vieram de medição
> programática e de leitura do texto, e não são afetadas por isto.

## Método

Para as 27 páginas indexáveis do sitemap: contei palavras dentro de `<main>`, listei H2s, contei elementos de ferramenta real (`<input>`, `<select>`, `<table>`), contei links internos **de corpo de texto** (não do menu/rodapé, que aparece em toda página e não sinaliza relação editorial real) — de saída e de entrada — e li o texto integral das seções-chave (homepage, cluster família, cluster furusato).

## Classificação por página

| Página | Nota | Por quê |
|---|---|---|
| `furusato-nozei.html` | **A** | Calculadora real (5 inputs, 1 select, 3 tabelas), simulação completa, maior hub do site (11 links de entrada), 3.794 palavras |
| `beneficios-familia-japao.html` | **A** | Quiz de triagem interativo (lógica ramificada, resultado personalizado) + tabela comparativa dos 6 benefícios — não é só um índice |
| `entenda-seu-holerite-japao.html` | **A** | Holerite fictício anotado campo por campo — ferramenta pedagógica própria, não existe equivalente em português |
| `meu-salario-no-japao.html` | **A** | Calculadora real (input + 2 selects) de salário líquido |
| `remessa-japao-brasil.html` | **A** | Comparador nomeando serviços reais (Wise, Brastel, Remitly, banco) — não é conteúdo genérico |
| `aposentadoria-nenkin.html` | **A** | Calculadora + ângulo de decisão exclusivo (resgate x acordo Brasil-Japão) que nenhuma tradução oficial cobre |
| `imposto-residencial-juminzei.html` | **A** | Calculadora + detalhe "insider" (demissão entre jan-mai, risco na renovação de visto) |
| `dependentes-no-brasil.html` | **A** | Calculadora + alerta específico sobre fiscalização apertada desde 2023 |
| `auxilio-infantil-japao.html` | **A** | Único benefício da família com calculadora por idade — mais "ferramenta" que os outros 4 |
| `o-que-e-furusato-nozei.html` | B | Bom resumo de entrada, mas sobrepõe com o que `furusato-nozei.html` já explica |
| `working-holiday-japao.html` | B | Conteúdo sólido e bem fundamentado (10 FAQs), mas **0 links editoriais de entrada** — nenhuma outra página do site menciona ou linka pra ela no corpo do texto. Isolada |
| `auxilio-parto-japao.html` | B | Bem fundamentado, específico, mas sem tabela/ferramenta própria — estrutura idêntica às outras 3 páginas de benefício "planas" |
| `isencao-nenkin-bebe.html` | B | Mesma razão |
| `reducao-jornada-japao.html` | B | Mesma razão |
| `licenca-parental-japao.html` | B | Mesma razão |
| `auxilio-mae-solo-japao.html` | B | Tem tabela de teto de renda (melhor que as 4 acima), mas **só 1 link editorial de entrada** — publicada há poucas horas, ainda não foi referenciada pelas páginas irmãs |
| `one-stop-furusato-nozei.html` | B | Bom how-to, mas o procedimento One-Stop já é explicado inteiro dentro de `furusato-nozei.html` — mesma informação, duas vezes |
| `furusato-nozei-vale-a-pena.html` | B | Ângulo próprio (decisão), mas parte do raciocínio do limite já está no pilar |
| `como-conferir-desconto-furusato-nozei.html` | B | Útil, mas é uma extensão pequena do pilar, não um tópico independente |
| `onde-fazer-furusato-nozei.html` | B | Comparação Amazon x Rakuten que também aparece, resumida, no pilar |
| `amazon-furusato-nozei.html` | B | Screenshots recriados são diferencial visual real, mas a explicação de limite e One-Stop repete o pilar pela 3ª vez no cluster |
| `rakuten-furusato-nozei.html` | B | Mesma razão; único satélite sem bloco de FAQ |
| `melhores-presentes-furusato-nozei.html` | B/C | A mais fraca do cluster furusato em utilidade própria — é guia de compra, com só 1 link editorial de entrada |
| `index.html` | B | O diferencial existe e é real (grade de ferramentas + seção "por que existe"), mas só aparece explicitamente na 3ª seção da página, não logo de cara |
| `sobre.html` | C | A página com menos conteúdo próprio do site (453 palavras) — e é justamente a página que mais deveria comunicar quem está por trás do conteúdo (E-E-A-T) |
| `contato.html` | C | Institucional, esperado, não é problema |
| `privacidade.html` | C | Institucional, esperado, não é problema |

**Resumo:** 9 páginas A, 15 B, 3 C. O padrão structural é claro: toda página com calculadora, tabela comparativa ou ferramenta interativa própria caiu em A. Praticamente todo o cluster de furusato satélite (6 de 9 páginas do tema) e 4 das 6 páginas de benefício família caíram em B pela mesma razão — texto bem escrito e bem fundamentado, mas organizacionalmente repetitivo (mesma estrutura, mesma informação básica reaparecendo em mais de uma página) e sem elemento que uma tradução cuidadosa da fonte oficial não conseguiria replicar.

## Achados específicos pedidos

**O que diferencia de tradução/resumo oficial:** nas páginas A, sempre uma ferramenta real ou um ângulo de decisão que a fonte oficial nunca daria (ex.: "a escolha que ninguém te conta" do nenkin, o risco de visto do jūminzei). Nas páginas B, o diferencial é o português claro e a organização — real, mas replicável por qualquer concorrente que também traduza bem.

**Sobreposição excessiva entre páginas:** concentrada no cluster furusato. A lógica de cálculo do limite aparece em `furusato-nozei.html`, `o-que-e-furusato-nozei.html` e `furusato-nozei-vale-a-pena.html`. O procedimento One-Stop aparece inteiro em `furusato-nozei.html` e de novo em `one-stop-furusato-nozei.html`, e parcialmente em `amazon-furusato-nozei.html` e `rakuten-furusato-nozei.html`. É o maior cluster do site (9 de 27 páginas) sobre o mecanismo mais restrito.

**Páginas isoladas (0-1 link editorial de entrada, fora de menu/rodapé):** `working-holiday-japao.html` (0), `auxilio-mae-solo-japao.html` (1), `melhores-presentes-furusato-nozei.html` (1), `contato.html` e `privacidade.html` (1, esperado).

**Clareza da navegação:** o dropdown "Impostos" no menu mistura 11 itens, sendo 9 deles do tema furusato — um visitante vendo o menu não percebe que furusato é o pilar real do site, porque está rotulado como só mais um item de "Impostos" ao lado de jūminzei e dependentes.

**Homepage:** o diferencial está lá — a seção "Por que existe" diz claramente "a maior parte do conteúdo disponível é genérico ou traduzido sem considerar as regras... este hub reúne calculadoras com números reais" — mas só aparece depois da grade de ferramentas e da grade "pontos que pesam", ou seja, na 3ª seção da página, não nos primeiros parágrafos.

## As 5 mudanças de maior impacto provável, em ordem de prioridade

1. **Reduzir a sobreposição no cluster furusato.** É o maior bloco do site (9 páginas) sobre o assunto mais restrito, com a mesma lógica de limite e o mesmo passo a passo do One-Stop reexplicados em 3-4 lugares. Escolher um local canônico por subtópico e fazer os satélites linkarem com resumo curto, em vez de reexplicar inteiro.

2. **Dar às 4 páginas "planas" da família (parto, isenção nenkin, redução de jornada, licença parental) um elemento próprio** — tabela comparativa ou mini-calculadora de elegibilidade, no padrão do que `auxilio-infantil-japao.html` e `auxilio-mae-solo-japao.html` já têm. Ataca a causa raiz (falta de elemento difícil de replicar), não só a forma.

3. **Resolver o isolamento editorial.** Linkar `working-holiday-japao.html` de dentro do conteúdo de holerite/salário/família (e vice-versa) e cross-linkar `auxilio-mae-solo-japao.html` a partir das outras 5 páginas de benefício, não só da pilar.

4. **Fortalecer `sobre.html`.** É a página com menos conteúdo próprio do site inteiro, mas é a que mais pesa pra sinal de confiança/autoria que revisão de qualidade costuma olhar.

5. **Deixar o diferencial da homepage explícito mais cedo**, e considerar reorganizar o dropdown "Impostos" pra separar Furusato Nozei como cluster próprio no menu, deixando claro que é o pilar do site.

Nenhuma mudança foi aplicada. Aguardando decisão sobre quais dessas cinco (se alguma) seguir.
