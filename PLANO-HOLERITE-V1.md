# Plano — Holerite no Japão V1

**Status:** planejamento. Não implementar / não codificar ainda.
**Página:** `entenda-seu-holerite-japao.html`
**Data do registro:** 2026-08-12
**Origem:** plano conjunto Lilly + Kai, revisado por Claude (financasnojapao.com)

## 1. Objetivo

Ajudar brasileiros no Japão a entender um holerite japonês (給与明細書) de forma visual, simples e confiável — sem cálculo personalizado, sem upload, sem coleta de dado pessoal nesta V1.

## 2. Title, H1, hero

- Title: `Holerite no Japão: como ler seu contracheque (給与明細書)`
- H1: igual ao title.
- Primeira frase visível (definição extraível, formato GEO): *"O holerite japonês (給与明細書, kyūyo meisaisho) costuma ser organizado em três blocos principais: 勤怠 (frequência e horas trabalhadas), 支給 (valores pagos) e 控除 (descontos)."*
- Subtítulo: *"Veja onde estão seu salário bruto, os descontos e o valor líquido — e entenda o que significa cada termo em japonês."*
- CTA principal: "Explorar o holerite". CTA secundário: "Ver termos principais".

## 3. Resposta rápida (antes do widget)

Os 4 pontos que a pessoa deve localizar primeiro:

- 総支給額 / 支給合計 — total bruto
- 控除合計 / 控除額合計 — total de descontos
- 差引支給額 / 手取り — valor líquido recebido
- 勤怠 — dias e horas trabalhadas

Se usarmos valores fictícios: deixar explícito "Exemplo fictício. Os campos e valores variam conforme empresa, salário, cidade e situação pessoal." — mesmo padrão de disclaimer já usado nas páginas de benefício.

## 4. Holerite fictício interativo

Três blocos fixos, clicáveis/expansíveis, com anatomia visível sem precisar clicar em tudo:

**勤怠 (cinza/neutro)** — 出勤日数, 欠勤日数, 有給日数, 残業時間, 深夜時間, 休日出勤.

**支給 (verde)** — 基本給, 残業手当, 深夜手当, 休日手当, 通勤手当, 住宅手当 (quando houver), 家族手当 (quando houver), 資格手当 (quando houver), 総支給額/支給合計.

**控除 (vermelho)** — 健康保険, 厚生年金, 雇用保険, 介護保険 (quando aplicável), 所得税, 住民税, その他控除, 控除合計/控除額合計.

Final: 差引支給額 / 手取り.

Cada campo abre explicação curta: o que é, por que aparece, quando pode mudar. Identidade visual do site (grafite `#16181d`, vermelho `#e02b25`, verde `#00a866`, branco, bege suave só de apoio) — nenhuma identidade nova.

## 5. Tabela HTML equivalente (sempre visível, não só no widget)

Colunas: Termo japonês | Leitura | Em português | O que significa.

Motivo: o widget interativo depende de JavaScript; buscadores e IAs nem sempre executam JS. A tabela é a rede de segurança que garante que o conteúdo real fique legível e extraível mesmo sem interação — não é redundância por acaso, é redundância proposital para GEO/SEO/acessibilidade.

## 6. Bloco diferencial — "Por que esse valor mudou?"

Motivos comuns: variação de horas extras, mudança em faltas/dias trabalhados, início do 住民税 no segundo ano, alteração nas contribuições do seguro social, revisão do 標準報酬月額, início do 介護保険 aos 40 anos, alteração em dependentes, bônus/adicionais. Não é diagnóstico individual — é educativo, com link interno para a página específica quando já existir.

Este é o ângulo que nenhuma fonte concorrente (nem a versão em português do YutoJP, que já existe e cobre bem o glossário) trata — é o diferencial real da página.

## 7. FAQ

`<details>`/`<summary>`, padrão do site. `FAQPage` em JSON-LD espelhando exatamente o texto visível (regra já em vigor no site).

Perguntas iniciais: o que é 健康保険 no holerite / o que é 厚生年金 / o que significa 控除 / diferença entre 総支給額 e 差引支給額 / por que o 住民税 pode não aparecer no primeiro período no Japão / o que é 介護保険 / por que o salário líquido mudou mesmo com o mesmo salário-base / o que significa 手取り.

## 8. Glossário / GEO

`DefinedTerm` (schema.org) nos termos principais, se não gerar trabalho desproporcional — primeira aplicação desse tipo no site. Se complicar a V1, HTML claro tem prioridade sobre o schema extra.

Termos candidatos: 給与明細書, 勤怠, 支給, 控除, 厚生年金, 住民税, 所得税, 手取り, 総支給額, 差引支給額.

## 9. SEO on-page

H2 com o termo japonês no cabeçalho (não só em português — gente busca "kojo japão", "shikyu significado"): 勤怠（きんたい）, 支給（しきゅう）, 控除（こうじょ）, Por que meu salário mudou?, Termos comuns do holerite japonês, Perguntas frequentes. Meta description, canonical, breadcrumb, sitemap, alt text com termo japonês incluído.

## 10. Onde a página entra na navegação (site atual)

Hoje o nav principal tem: Furusato Nozei (dropdown), Aposentadoria (link solo → `aposentadoria-nenkin.html`), Remessa (link solo → `remessa-japao-brasil.html`), Família (dropdown, com `beneficios-familia-japao.html` como hub), Sobre.

Não existe hoje uma categoria de "salário/trabalho" — o holerite não encaixa bem em Furusato nem em Família. Recomendação: entrar como **link solo no nav principal**, no mesmo padrão de "Aposentadoria" e "Remessa" (não força um dropdown novo por uma página só). Se V2/V3 (calculadora de salário, "por que mudou" comparativo) forem construídas depois, esse link solo pode evoluir pra dropdown/hub — mesmo caminho que Família fez, de link único pra hub com 5 páginas. Adicionar também no footer, no mesmo bloco onde estão Remessa/Nenkin/Furusato/Imposto residencial/Dependentes.

## 11. Reaproveitamento de conteúdo existente

Checado no repositório atual:

- `imposto-residencial-juminzei.html` já cobre em profundidade por que o jūminzei não é cobrado no primeiro ano e como o valor é montado, com calculadora própria e fontes oficiais. **Reaproveitar via link** no campo/FAQ de 住民税 — não reescrever essa explicação na página do holerite, só um resumo de uma frase + "saiba mais".
- `aposentadoria-nenkin.html` cobre o resgate do nenkin ao sair do Japão (脱退一時金), não o desconto mensal em si. **Reaproveitar via link** no campo 厚生年金 como "quer saber como recuperar esse valor depois? veja nossa página de nenkin" — mas a explicação de *por que* o desconto aparece no holerite ainda precisa ser escrita do zero, é ângulo diferente.
- `dependentes-no-brasil.html` cobre dedução de dependentes que moram no Brasil. **Reaproveitar via link** nos campos 家族手当/扶養手当.
- Não existe hoje conteúdo no site sobre 健康保険, 雇用保険, 介護保険 ou 所得税 isoladamente, nem sobre 勤怠 ou os adicionais de 支給. Esses precisam ser escritos originalmente para esta página — não há o que reaproveitar.

Conclusão: cerca de metade dos descontos (住民税, parte do 厚生年金) já tem página profunda para linkar; a outra metade (saúde, desemprego, cuidado, imposto de renda, todos os itens de 勤怠 e 支給) é conteúdo novo.

## 12. Fontes oficiais a consultar por seção

- 厚生年金 / 標準報酬月額: **verificado** — [定時決定（算定基礎届）](https://www.nenkin.go.jp/service/kounen/hokenryo/hoshu/20121017.html), Japan Pension Service, atualizado em 21/05/2026. Confirma oficialmente: o valor é redeterminado uma vez por ano com base na remuneração de abril-junho ("teiji kettei"), e o novo valor vale de setembro até agosto do ano seguinte. Sustenta com segurança o item "revisão do 標準報酬月額 em setembro" na seção 6 (Por que esse valor mudou).
- 健康保険 / 介護保険: MHLW (mhlw.go.jp) ou site da seguradora de saúde relevante (Kyokai Kenpo).
- 雇用保険: MHLW / Hello Work.
- 所得税 / 源泉徴収 / 年末調整: NTA (National Tax Agency).
- 住民税: já coberto em `imposto-residencial-juminzei.html`, checar se as fontes lá continuam válidas.
- Estrutura geral 勤怠/支給/控除: já validada em 6 fontes secundárias nesta pesquisa (money.m-ri.co.jp, YutoJP, JN8, Hataraku Japan, Small Business Japan) — nenhuma delas é fonte oficial do governo, então qualquer número específico (não só a estrutura) ainda precisa de confirmação oficial antes de publicar.

## 13. Guardrails da V1

Esta versão NÃO deve: receber upload de holerite; usar OCR; armazenar documento; pedir salário real da pessoa; calcular imposto personalizado; declarar que o holerite está correto ou incorreto; oferecer diagnóstico trabalhista; funcionar como consultoria. A V1 é educativa e visual, com exemplo fictício.

## 14. Fora de escopo agora / versões futuras

- **V2 — Meu salário no Japão**: estimativas orientativas de bruto → descontos → líquido, com config de regras versionada por ano.
- **V3 — Por que meu salário mudou?**: comparação educativa entre dois períodos.
- **V4 — Leitor de holerite**: usuário envia/fotografa um holerite, a ferramenta identifica campos e explica em português. **Bloqueada por padrão** — requer arquitetura de privacidade definida e aprovada antes de qualquer implementação, justamente porque envolve armazenar documento pessoal. Nenhuma dessas versões entra na V1.

## 15. Próximo passo

Plano registrado. Antes de qualquer código: revisar reaproveitamento (seção 11) e fontes pendentes (seção 12, especialmente Japan Pension Service) com a Lilly, confirmar posição no nav (seção 10), e só então desenhar o layout final para aprovação.
