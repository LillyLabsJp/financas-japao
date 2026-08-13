# Etapa 3 — `melhores-presentes-furusato-nozei.html`

> Handover escrito em 13/08/2026 ao fim da Etapa 2, com a sessão de contexto quase cheia.
> A Etapa 3 **não foi iniciada**. Este documento existe para que a próxima sessão comece
> sem ter que redescobrir nada.

## Estado do site neste ponto

Publicado em `main`, tudo verificado ao vivo com cache-busting:

| Commit | O que fez |
|---|---|
| `945aefb` | Menu: Furusato separado de Impostos. Hero com o diferencial. Sobre com "Escrito primeiro, verificado depois". Links de mãe solo e Working Holiday. Footer unificado nas 27 páginas |
| `41a87a7` | Conserta o header que quebrava em duas linhas com 9 itens de menu. Sanduíche passa a aparecer abaixo de 1280px |
| `bac05e7` | Conserta o submenu que não abria no sanduíche em notebook (o `main.js` testava hover; agora testa se o botão sanduíche está visível) |
| `4a4c0de` | Reescreve `o-que-e-furusato-nozei.html` como porta de entrada conceitual |
| `e42b8dc` | Barra de composição no celular |

Etapas 1 e 2 aprovadas pela Lilly. Etapa 4 (`onde-fazer`) e Etapa 5 (auditoria final) pendentes.

## Tamanho real das páginas do cluster (palavras dentro de `<main>`)

Medido em 13/08/2026. Este é o dado que importa para o diagnóstico de "baixo valor":

| Página | Palavras |
|---|---|
| `furusato-nozei.html` (pilar) | 3.794 |
| `o-que-e-furusato-nozei.html` | 2.700 *(era ~950 antes da Etapa 2)* |
| `rakuten-furusato-nozei.html` | 2.127 |
| `amazon-furusato-nozei.html` | 1.527 |
| `one-stop-furusato-nozei.html` | 1.458 |
| `furusato-nozei-vale-a-pena.html` | 1.012 |
| **`onde-fazer-furusato-nozei.html`** | **691** ← Etapa 4 |
| **`melhores-presentes-furusato-nozei.html`** | **668** ← Etapa 3 |
| `como-conferir-desconto-furusato-nozei.html` | 612 |

`como-conferir` não está no plano das etapas, mas é a terceira mais curta. Vale decidir depois.

## O que já se sabe sobre `melhores-presentes` (lido em 13/08/2026)

Estrutura atual: hero → Resposta rápida → 6 categorias (carne, arroz, frutos do mar, frutas,
itens do dia a dia, experiências) → tabela "Como comparar dois presentes" (6 critérios) →
"Escolha em quatro passos" → callout "Ranking não significa melhor para você" →
4 erros comuns → 4 FAQs → CTA.

Problemas confirmados:

- O título promete seleção; a página **não nomeia um único presente**.
- Sem preço, sem município, sem calendário de safra, sem fonte.
- **Não tem bloco "Fontes consultadas"** — é a única do cluster junto com a antiga `o-que-e`.
- O CTA "Comparar plataformas" aponta para `furusato-nozei.html#onde-doar` em vez da página
  dedicada `onde-fazer-furusato-nozei.html`. Corrigir.
- Os selos do hero dizem "Sem ranking de produto específico" e "Guia que não envelhece" —
  hoje funcionam como desculpa para a página não entregar o que o título promete.
  Se a página passar a ter exemplos, esses selos precisam mudar.

## Material verificado que já existe no site e pode ser reaproveitado

`amazon-furusato-nozei.html` já traz 6 exemplos reais com valor, conferidos em **30/07/2026**
contra o ranking semanal da Amazon Furusato:

- Arroz Koshihikari 5 kg — Ibaraki — ¥8.000
- Filé de salmão ~2,4 kg — Chiba — ¥12.000
- Hambúrguer de wagyu 12 un. — Saga — ¥12.000
- Papel higiênico, caixa fechada — ¥20.500
- Lenço de papel, 60 caixas — ¥14.000
- Arroz branco 5 kg — ¥7.500

Cuidado: se forem reusados tal e qual, viram duplicação com a página da Amazon.
O caminho é a `melhores-presentes` ser **agnóstica de plataforma** e a da Amazon continuar
sendo a dona dos exemplos específicos da Amazon.

## Dados oficiais já apurados (総務省, levantamento de 31/07/2026)

Fonte: https://www.soumu.go.jp/main_content/001084951.pdf

Úteis para esta página, e ainda não usados nela:

- Teto legal do presente: **30% do valor doado** (地方税法). Teto de custo total de captação: 50%.
- Custo médio nacional do presente em 2025: **26,5%** do valor doado.
- Nova exigência de parcela mínima que sobra para o município: 52,5% em 2026 → 60% em 2029.
  **Consequência prática para esta página: a tendência é o presente encolher em relação
  ao valor doado nos próximos anos.** Isso é um argumento editorial forte e verificável.
- Já usados na `o-que-e`: composição 52,1/26,5/13,6/7,9, ¥1,33 trilhão em 2025, rankings de
  municípios. Não repetir aqui.

## Análise do briefing do Kai — pontos a decidir antes de executar

O briefing do Kai está bem calibrado no diagnóstico e na arquitetura. Cinco ressalvas
levantadas pelo Opus e ainda **não decididas pela Lilly**:

1. **Viabilidade da verificação.** Amazon e Rakuten furusato são renderizados em JavaScript e
   têm proteção contra automação. Pode não ser possível verificar 8–12 ofertas de dentro da
   ferramenta. Decidir antes: o que fazer se só der para confirmar 3 ou 4. Sugestão do Opus —
   publicar com menos exemplos e mais estrutura durável, nunca completar com invenção.
2. **Risco de "thin affiliate".** Uma página de indicação de produtos com link de afiliado é
   um perfil que o Google avalia por um critério diferente de "conteúdo de baixo valor", e
   mais severo. Teste de segurança: a página tem que continuar útil com zero links de afiliado.
3. **Cortar "melhor para quem quer algo premium".** Premium em furusato significa doação alta,
   e isso empurra o leitor na direção do erro mais caro do sistema — doar acima do limite.
   Reformular como "quando um item caro faz sentido, e quando não".
4. **Falta no briefing: calendário de sazonalidade.** Que mês cada fruta e cada fruto do mar
   é enviado. É o ativo mais durável possível para esta página, é verificável nas páginas dos
   municípios, não envelhece, e atende de frente a long-tail "frutas furusato nozei".
   O Opus considera isso mais valioso que qualquer lista de SKU.
5. **Cores.** O Kai passou hex fixos. Usar as variáveis do `style.css`
   (`--color-primary`, `--color-red`, `--color-accent-soft` etc.), nunca hex hardcoded —
   a identidade visual do site é decisão congelada da Lilly.

## Nota de GEO

Para resposta gerada por IA, o ativo que ganha nesta consulta não é lista de produto — é
**regra de decisão citável**, do tipo "arroz e itens de uso diário para quem tem limite baixo;
carne porcionada para família; fruta só se você estiver em casa na janela de safra".
SKU é o pior ativo de GEO que existe: não é verificável pelo modelo e está velho antes
mesmo de ser indexado.

## Erro conhecido da auditoria original, a corrigir na Etapa 5

Na auditoria de 13/08/2026 o Opus atribuiu a `onde-fazer-furusato-nozei.html` uma citação
literal — células com "Confirmar antes: Municípios, entrega e caminho do One-Stop" — que
**não existe no arquivo**. Foi verificado: zero ocorrências. A página nunca tinha sido lida
naquele momento. O julgamento de fundo (página curta, 691 palavras, comparação pouco
conclusiva) segue de pé, mas a evidência citada era inventada. A Etapa 4 tem que começar
lendo a página de verdade, e a Etapa 5 tem que reavaliar `onde-fazer` do zero.

---

## Teste de viabilidade da verificação — feito em 13/08/2026

**Resultado: `web_fetch` NÃO consegue ver o catálogo do Rakuten Furusato.**

Testado: `https://event.rakuten.co.jp/furusato/ranking/` (ranking geral TOP 100).
A resposta traz só a moldura do site — menu, categorias, links de faixa de preço,
lista de províncias, banners. **Zero produtos.** A página devolve literalmente
「ご使用のブラウザでJavaScriptが無効なため、一部の機能をご利用できません」
(“seu navegador está com JavaScript desativado, parte das funções não está disponível”).
A lista de produtos é montada por JavaScript no cliente.

Consequência: qualquer verificação de oferta real precisa passar pelo **Claude in Chrome**,
que renderiza a página de verdade. Isso funciona, mas é caro em contexto — cada página de
ranking ou de produto lida consome bastante. Planejar a sessão da Etapa 3 contando com isso.

### Caminho recomendado para a próxima sessão

Ordem sugerida, do mais barato ao mais caro, parando quando tiver material suficiente:

1. **Ranking por categoria via Chrome**, não o TOP 100 geral. As URLs já estão mapeadas e
   são estáveis — dão exatamente as categorias que a página precisa:
   - carne: `https://event.rakuten.co.jp/furusato/ranking/meat/`
   - frutos do mar: `.../ranking/seafood/`
   - arroz: `.../ranking/rice/`
   - frutas: `.../ranking/fruit/`
   - papel higiênico: `.../ranking/toilet-paper/`
   - lenço de papel: `.../ranking/tissue-paper/`
   - entrega no dia seguinte: `.../ranking/saikyo-delivery/`
2. Duas páginas de especial que servem direto a duas seções previstas da página:
   - **定期便 / entregas parceladas**: `https://event.rakuten.co.jp/furusato/special/regular/`
     (resolve “melhor para receber em várias entregas”, com oferta real)
   - **お手頃返礼品 / valor baixo**: `.../special/affordable/`
     (resolve “melhor para quem tem limite pequeno”)
   - existe também `.../special/calendar/` (“ふるさと納税年間計画”), que é o ponto de partida
     natural para o **calendário de sazonalidade** — o ativo mais durável da página.
3. Só depois, se sobrar orçamento, conferir produto a produto.

### Regra operacional

Ler o ranking de uma categoria com o Chrome e extrair **nome, município e valor da doação**
já é verificação suficiente para o padrão editorial do site — é o mesmo nível de evidência
usado na página da Amazon em 30/07/2026. Não é preciso abrir cada produto.

Se ao fim da coleta houver menos de 8 exemplos confirmados, **publicar com menos**.
A Lilly já aprovou esse princípio: estrutura durável primeiro, exemplos como ilustração.

---

## RECEITA DE EXTRAÇÃO QUE FUNCIONA — testada em 13/08/2026

O Claude in Chrome renderiza o ranking do Rakuten sem problema. E o custo é baixíssimo
**desde que não se leia a página**: basta rodar JavaScript e devolver só os campos.
Testado em `ranking/rice/`: 150 links de produto, 60 preços, extração em ~200 tokens.

Passo 1 — `navigate` para a URL do ranking da categoria.
Passo 2 — `javascript_tool` com este código (não usar `get_page_text`, não tirar screenshot):

```js
const out=[];
document.querySelectorAll('li,div').forEach(el=>{
 const a=el.querySelector(':scope a[href*="item.rakuten.co.jp"]');
 if(!a||out.length>=8)return;
 const t=(a.textContent||'').replace(/\s+/g,' ').trim();
 if(t.length<15)return;
 const p=(el.innerText.match(/([0-9][0-9,]{2,})円/)||[])[1];
 const shop=(a.href.match(/item\.rakuten\.co\.jp\/([^/]+)/)||[])[1];
 if(!p)return;
 if(out.some(o=>o.t===t.slice(0,60)))return;
 out.push({t:t.slice(0,60),p,shop});
});
JSON.stringify(out)
```

Se der timeout de 45s na primeira chamada, repetir — a segunda passa (a página termina
de montar enquanto isso). Não colocar `await setTimeout` dentro: estoura o limite do CDP.

### O código da loja identifica o município — e isso é ouro

O `shop` vem no formato `fPPMMM-nome`, onde os **dois primeiros dígitos são o código
oficial da província (JIS)** e o nome no fim é o município. Exemplos reais colhidos
no ranking de arroz em 13/08/2026:

| shop | município | província | doação |
|---|---|---|---|
| `f434281-takamori` | Takamori | Kumamoto (43) | ¥5.500 |
| `f063223-nishikawa` | Nishikawa | Yamagata (06) | ¥7.000 |
| `f152021-nagaoka` | Nagaoka | Niigata (15) | ¥7.000 |
| `f413453-kamimine` | Kamimine | Saga (41) | ¥6.400 |
| `f434418-mifune` | Mifune | Kumamoto (43) | ¥10.000 |
| `f406091-aka` | Aka | Fukuoka (40) | ¥6.000 |

Ou seja: **nome do presente, valor da doação e município saem todos da mesma extração**,
sem abrir uma única página de produto. É exatamente o conjunto de campos que o briefing
pede. Conferir o par código→província contra a tabela oficial antes de publicar.

Observação editorial colhida de brinde: vários títulos de arroz trazem
「新米先行予約受付中」 (pré-venda da nova safra) e 「発送時期が選べる」 (dá para escolher
o mês de envio). Isso confirma, com evidência, duas seções previstas — sazonalidade
e entrega parcelada — e vale como gancho verificado.

### Orçamento realista revisado

Com esta receita, cada categoria custa ~1 navigate + 1 ou 2 javascript_tool ≈ poucos
milhares de tokens. Sete categorias mais dois especiais cabem tranquilamente numa sessão,
sobrando espaço de sobra para escrever a página. **A Etapa 3 é viável numa sessão só.**
