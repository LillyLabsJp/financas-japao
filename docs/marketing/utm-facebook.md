# Convenção de UTM para o Facebook — Finanças no Japão

Documento de referência pra marcar todo link postado no Facebook (Oficial e Olho), pra depois conseguir medir no GA4 o que realmente trouxe clique.

Regra de ouro: **não mudar esse padrão toda semana.** UTM só serve se for consistente ao longo do tempo.

## Verificação pendente

Antes desse documento valer 100%, precisa confirmar que o site tem o Google Analytics (GA4) instalado. Hoje (checado em 11/08/2026) não existe nenhum script de rastreamento em nenhuma página do site. Duas situações possíveis:

- **Já existe uma propriedade GA4** criada em analytics.google.com, só falta colocar o código no site → me passe o ID (formato `G-XXXXXXXXXX`) e eu instalo em todas as páginas.
- **Não existe nada ainda** → precisamos criar a propriedade (gratuita, leva 5 minutos) e depois instalar o código.

Sem esse passo, os links com UTM funcionam normalmente (o visitante chega no site sem problema), só que ninguém fica registrando de onde ele veio.

## Convenção de nomes

Todo link do Facebook leva 4 parâmetros, sempre nessa ordem, sempre em minúsculo, sem acento, sem espaço (usar `_` no lugar de espaço):

| Parâmetro | Valor | Muda? |
|---|---|---|
| `utm_source` | `facebook` | Fixo, sempre |
| `utm_medium` | `organic_social` | Fixo, sempre — só muda pra `paid_social` se um dia vocês investirem em anúncio pago |
| `utm_campaign` | tema do post | Um valor por assunto/vertical |
| `utm_content` | identificador do post específico | Único por post, sequencial |

### Valores padrão de `utm_campaign`

Usar sempre um destes (criar um novo só quando abrir uma vertical nova):

- `furusato` — cluster de Furusato Nozei
- `familia` — cluster de benefícios família (geral / página-pilar)
- `auxilio_parto`
- `isencao_nenkin`
- `auxilio_infantil`
- `licenca_parental`
- `reducao_jornada`
- `geral` — posts institucionais, sobre a página, etc.

### Padrão de `utm_content`

Formato: `post_NN_descricao-curta`, numerado em sequência, uma descrição breve do post (2-3 palavras, sem acento).

Exemplos: `post_01_calculadora`, `post_02_erro_comum`, `post_03_nagoya_toyota`.

## Exemplos prontos

**Primeiro teste (calculadora de Furusato Nozei):**
```
https://financasnojapao.com/furusato-nozei.html?utm_source=facebook&utm_medium=organic_social&utm_campaign=furusato&utm_content=post_01_calculadora
```

**Vertical Família (quando começar os testes):**
```
https://financasnojapao.com/auxilio-infantil-japao.html?utm_source=facebook&utm_medium=organic_social&utm_campaign=auxilio_infantil&utm_content=post_01_valores_por_idade
```

**Conteúdo localizado por cidade (Aichi/Shizuoka/Gunma):**
```
https://financasnojapao.com/auxilio-infantil-japao.html?utm_source=facebook&utm_medium=organic_social&utm_campaign=auxilio_infantil&utm_content=post_02_nagoya_toyota
```

## Onde ver isso no GA4 (depois de instalado)

1. Entre em [analytics.google.com](https://analytics.google.com) e abra a propriedade do site.
2. No menu à esquerda: **Relatórios → Ciclo de vida → Aquisição → Aquisição de tráfego**.
3. Na tabela, mude a dimensão principal pra **Sessão origem/mídia** — você vai ver linhas tipo `facebook / organic_social`.
4. Pra ver por campanha e por post específico: clique em **Explorar → Exploração livre**, adicione as dimensões **Campanha da sessão** e **Conteúdo do anúncio da sessão** (esse último mostra o `utm_content`). Aí dá pra comparar post por post: quantas sessões, quantos cliques em cada página.
5. Pra ver páginas mais visitadas por esse tráfego: em **Relatórios → Engajamento → Páginas e telas**, aplique um filtro de comparação com origem = facebook.

## Ferramenta pra gerar os links sem errar

Arquivo `gerador-utm-facebook.html` (na raiz do repositório, não indexado, não publicado no menu do site) — abre no navegador, escolhe a página e a campanha em dropdown, digita o identificador do post, e ele monta a URL certa automaticamente, já corrigindo acentos/espaços/maiúsculas.
