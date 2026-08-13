# Resultado das ações do plano AdSense — 13 de agosto de 2026

> Segue a auditoria `AUDITORIA-ADSENSE-VALOR-2026-08-13.md`. Plano aprovado pela Lilly com correções do Kai. Itens 2, 3, 4 e 5 implementados e validados (JSON-LD, balanceamento de tags, wordCount). Item 1 **não concluído** — motivo abaixo, honesto, não forçado.

## Before/after por item

### Item 5 — Sobre.html
**Antes:** metodologia mencionada de forma genérica (3 bullets).
**Depois:** 4 bullets — adicionado "escrito primeiro, verificado depois" (processo real de checagem linha por linha contra fonte oficial, e a disciplina de cortar frases sem comprovação, já praticada no site) e a menção explícita a que páginas de conteúdo (não só calculadoras) trazem data de revisão e são reabertas quando a regra muda. Nada de enchimento — só descrição do que o site já faz.

### Item 3 — Homepage
**Antes:** lead do hero genérico ("Calculadoras gratuitas e guias em português... com fontes citadas").
**Depois:** lead contrasta explicitamente com as duas alternativas ruins ("não uma tradução genérica de regra brasileira, nem um resumo de site japonês"), diferencial visível na primeira tela, não só na 3ª seção.

### Item 4 — Menu
**Antes:** dropdown "Impostos" com 11 itens, 9 deles de furusato — pilar do site escondido dentro de categoria genérica.
**Depois:** "Furusato Nozei" é dropdown próprio (9 itens); "Impostos" fica com 2 (imposto residencial, dependentes no Brasil). Aplicado mecanicamente nas 27 páginas, confirmado sem conflito com o `BreadcrumbList` (que já usava "Furusato Nozei" como categoria própria).

### Item 2 — Isolamento editorial
**Working Holiday:** 0 → 2 links editoriais de entrada (frase natural em `entenda-seu-holerite-japao.html` e `meu-salario-no-japao.html`, contextualizada — "esse costuma ser o seu primeiro holerite no país").
**Mãe solo:** 1 → 6 links editoriais de entrada (frase natural adicionada em `auxilio-parto-japao.html`, `isencao-nenkin-bebe.html`, `auxilio-infantil-japao.html`, `licenca-parental-japao.html`, `reducao-jornada-japao.html` — cada uma no ponto onde já existia uma lista "veja também outros benefícios").

Todas as 7 páginas tocadas foram revalidadas: JSON-LD válido, tags balanceadas, `wordCount` recalculado e sincronizado, `dateModified` atualizado.

## Item 1 — Furusato: não concluído, e por quê

Antes de cortar qualquer coisa, reli o texto real das seções que a auditoria apontou como sobrepostas — não só os títulos dos H2. Resultado: a sobreposição é menor do que a auditoria inicial sugeriu.

- O passo a passo do One-Stop dentro de `furusato-nozei.html` **já é** um resumo de 5 passos com uma frase de saída explícita pro guia completo ("Quer preencher o formulário campo a campo... veja o guia completo do One-Stop") — já é o padrão "contexto curto + link" que o Kai pediu, não uma reexplicação completa.
- O mesmo vale pra seção "Como e quando o desconto chega": já linka pro `como-conferir-desconto-furusato-nozei.html` em vez de reexplicar.
- A seção "A jornada dos ¥2.000" de `furusato-nozei-vale-a-pena.html` não é a mesma informação da tabela do pilar — é um infográfico próprio (SVG customizado) com um ângulo de decisão diferente (fatores + exemplo ilustrativo). Cortar isso destruiria conteúdo genuinamente diferenciado, não redundância.

Isso não significa que não haja sobreposição nenhuma — significa que ela provavelmente está mais em como cada satélite **reintroduz o básico do mecanismo** (o que é furusato nozei, como funciona o ¥2.000) na própria abertura, satélite a satélite, do que em blocos inteiros repetidos. Cortar isso direito exige comparar as 9 páginas entre si, não só cada satélite contra o pilar — é um trabalho mais fino do que "definir 1 local canônico e linkar", e essa é a cluster que mais importa pro dinheiro real do site. Prefiro fazer esse próximo passo com mais precisão do que entregar um corte apressado agora.

**Proposta:** rodar essa comparação satélite-a-satélite antes de tocar em qualquer arquivo do cluster furusato, e mostrar o que encontrar antes de editar — assim como fiz aqui antes de agir. Posso fazer isso agora, ou esperar pra ver se os itens 2-5 já mudam o status do AdSense antes de investir mais tempo na parte mais arriscada.

## Auditoria A/B/C — o que mudou

| Página | Antes | Depois | Motivo |
|---|---|---|---|
| `sobre.html` | C | **B** | Metodologia agora explícita (fontes, verificação, processo de atualização) — real, não padding |
| `working-holiday-japao.html` | B (isolada) | B, isolamento resolvido | Ainda sem ferramenta própria — grade não sobe sem isso, mas deixou de estar desconectada |
| `auxilio-mae-solo-japao.html` | B (isolada) | B, isolamento resolvido | Mesma razão |
| `auxilio-parto-japao.html`, `isencao-nenkin-bebe.html`, `licenca-parental-japao.html`, `reducao-jornada-japao.html` | B | B (sem mudança) | Cross-linkadas, mas ainda sem tabela/ferramenta própria — combinado com o item 1.5 do Kai (propor antes de construir), aguardando essa proposta |
| Homepage (`index.html`) | Diferencial presente mas tardio | Diferencial explícito na 1ª tela | Não é página com nota A/B/C própria, mas o ponto da auditoria original foi resolvido |
| Cluster furusato (9 páginas) | 6 B / 3 A | Sem mudança ainda | Item 1 pendente de revisão mais precisa (ver acima) |

Nenhuma página foi apagada, nenhuma URL, title ou H1 mudou. Nenhuma ferramenta nova foi criada nas páginas de família.
