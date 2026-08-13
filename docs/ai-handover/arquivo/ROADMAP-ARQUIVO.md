# Arquivo do ROADMAP-E-IDEIAS.md

Histórico de itens concluídos ou descartados, tirados do documento principal
em 13 de agosto de 2026 pra reduzir o tamanho dele. Nada aqui é acionável —
é registro, não pendência.

---

## Página dos melhores presentes — `CONCLUÍDA`

- **Descrição:** página sobre como escolher presentes, mantendo a pessoa no site e conduzindo aos links de afiliado.
- **Estado:** construída e publicada em 6 de agosto de 2026 — `melhores-presentes-furusato-nozei.html`.
- **Observação:** links apontam para página de coleção, nunca para município específico — norma do Sōmushō.

---

## Cluster Furusato Nozei — concluído em 6 de agosto de 2026

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

---

## Ideias descartadas ou substituídas

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
