# Marketing de Momentos — posts e links (13/08/2026)

Registro dos 3 testes aprovados (ver `ROADMAP-E-IDEIAS.md`, seção 1.2). UTM segue o padrão histórico de `utm-facebook.md`: `utm_campaign` = vertical, `utm_content` = post específico. O gatilho psicológico do experimento entra dentro do `utm_content`, não vira campanha nova — correção pedida pelo Kai em 13/08, revertendo uma primeira versão deste arquivo que tinha criado `utm_campaign=marketing_momentos`.

## 1. Working Holiday (aspiração/oportunidade) — JÁ PUBLICADO

Foi pra Oficial em 12/08 e pra Comunidade (Olho) em 13/08.

**⚠️ PENDENTE:** não tenho registro da URL/UTM que foi efetivamente usada nesses dois posts — não fui eu quem publicou, e isso não estava documentado em nenhum arquivo do repo antes de hoje. Preciso que a Lilly (ou o Kai) me passe o link exato que foi colado no Facebook, pra eu registrar aqui o que realmente aconteceu, não uma reconstrução. Fica em aberto de propósito em vez de inventar um valor.

## 2. Holerite (perda/confusão) — PRONTO, NÃO PUBLICADO

**Link:**
```
https://financasnojapao.com/entenda-seu-holerite-japao.html?utm_source=facebook&utm_medium=organic_social&utm_campaign=holerite&utm_content=post_01_confusao
```

**Texto do post:**
> Seu salário veio menor esse mês e você não entendeu por quê?
>
> O holerite japonês (給与明細書) sempre tem a mesma estrutura: horas trabalhadas, o que foi pago, o que foi descontado. Só que ninguém explica isso em português.
>
> Fiz um guia mostrando bloco por bloco — 勤怠, 支給, 控除 — e por que o líquido muda de mês pra mês. Gratuito, em português:
> [link]

## 3. Auxílio-parto (proteção/descoberta) — PRONTO, NÃO PUBLICADO

**Link:**
```
https://financasnojapao.com/auxilio-parto-japao.html?utm_source=facebook&utm_medium=organic_social&utm_campaign=auxilio_parto&utm_content=post_01_protecao
```

**Texto do post (já com a correção factual abaixo aplicada):**
> Vai ter bebê no Japão? Veja quais valores e direitos podem entrar nessa fase.
>
> Não importa se você é empregada, autônoma, freelancer ou está desempregada no momento — desde que esteja inscrita num seguro-saúde japonês, você tem direito a ¥500.000 por bebê (Shussan Ikuji Ichijikin).
>
> Reuni num guia: quem tem direito, prazo pra pedir (2 anos) e como funciona na prática:
> [link]

**Checagem factual (pedida pelo Kai, feita antes de publicar):** conferido contra o conteúdo já publicado e sourced em `auxilio-parto-japao.html` (fontes: MHLW e Kyōkai Kenpo). O FAQ da própria página diz: "Não depende de estar empregada registrada — autônomas, freelancers e desempregadas também têm direito, desde que estejam inscritas no seguro." O rascunho original do post dizia "se o seguro-saúde tá em dia" — não é a mesma coisa que "inscrita": "em dia" sugere que atraso no pagamento desqualificaria, algo que a página nunca afirma e que eu não tinha verificado. Troquei para "desde que esteja inscrita num seguro-saúde japonês", que é exatamente a condição confirmada na fonte. Com essa correção o post pode ser publicado.

## Padrão de UTM

Sem exceção — vale o `utm-facebook.md`: `utm_campaign` = vertical/assunto, `utm_content` = identificador do post (aqui, o gatilho psicológico entra no `utm_content` pra permitir comparar os 3 testes no GA4 sem criar taxonomia nova).
