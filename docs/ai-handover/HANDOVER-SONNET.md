# HANDOVER — Finanças no Japão

Documento operacional para continuidade do projeto em uma nova conversa.
Última atualização: 5 de agosto de 2026.

---

## 1. Propósito do documento

Este handover foi criado para que uma nova conversa (Claude Sonnet) assuma a
execução técnica do projeto **sem depender do histórico da conversa anterior**.

Ele descreve o estado real do repositório, o fluxo de publicação, as decisões já
tomadas e os limites de autonomia.

> **Regra fundamental:** o repositório e o site publicado confirmam o estado
> atual. A instrução explícita mais recente da Lilly define o que deve ser
> executado.

Documentos complementares, na mesma pasta:

| Arquivo | Função |
|---|---|
| `START-SONNET.md` | Prompt inicial pronto para colar numa conversa nova |
| `COMO-TRABALHAR-COM-LILLY.md` | Preferências de colaboração |
| `ROADMAP-E-IDEIAS.md` | Estratégia e ideias — **não é lista de tarefas** |

---

## 2. Identificação do projeto

| | |
|---|---|
| Nome | Finanças no Japão |
| Domínio | financasnojapao.com |
| URL principal | https://financasnojapao.com/ |
| Finalidade | Calculadoras e guias financeiros em português para brasileiros residentes no Japão |
| Público | Brasileiros que moram no Japão e pagam imposto lá |
| Tecnologia | HTML, CSS e JavaScript puros — sem framework, sem build, sem gerador estático |
| Tipo | Site estático, arquivos planos na raiz do repositório |
| Hospedagem | GitHub Pages, servindo a branch `main` |
| Domínio → hospedagem | Arquivo `CNAME` na raiz aponta o domínio para o GitHub Pages |
| Deploy | Automático após o push. Leva de 1 a 3 minutos |
| Etapa extra | Nenhuma. Não há build nem comando de publicação |

Há cache de CDN. Depois do deploy, use um parâmetro de consulta
(`?v=2`, `?nc=123`) ao verificar, senão a versão antiga pode aparecer.

---

## 3. Repositório e ambiente de trabalho

| | |
|---|---|
| Repositório | https://github.com/LillyLabsJp/financas-japao |
| Organização/usuário | `LillyLabsJp` |
| Público ou privado | **NÃO CONFIRMADO** — verificar antes de assumir |
| Branch principal | `main` |
| Branch ativa | `main` |
| Último commit | `37a1949` — *"Telas reais nos seis cards do passo a passo do Rakuten"* — 5 ago 2026, 08:23 |

### Como o ambiente funciona

Os arquivos do site ficam numa pasta local da máquina da Lilly, sincronizada
com o GitHub pelo **GitHub Desktop**. A edição é feita direto nos arquivos e a
publicação é feita pela interface do GitHub Desktop.

| Acesso | Natureza |
|---|---|
| Leitura e escrita nos arquivos do projeto | Persistente no ambiente |
| Terminal (shell isolado) para inspecionar arquivos e rodar Python | Persistente no ambiente |
| GitHub Desktop já autenticado na máquina | Persistente na conta da Lilly |
| Navegador para abrir o site publicado | Persistente no ambiente |
| Sessões logadas em painéis externos (AdSense, Search Console, afiliados) | **Específicas da sessão — podem não continuar** |

> Se a nova conversa não conseguir acessar uma integração que estava disponível
> antes, deve informar exatamente qual acesso falta. Não deve fingir que
> publicou, e não deve pedir senha, token ou credencial pelo chat.

---

## 4. Acesso ao GitHub, hospedagem e site

O fluxo real usado até hoje:

1. Os arquivos são editados diretamente na pasta do projeto.
2. O **GitHub Desktop** é aberto e mostra os arquivos alterados.
3. O texto do commit é escrito no campo *Summary*.
4. Clica-se em **Commit to main**.
5. Clica-se em **Push origin**.
6. Espera-se de 1 a 3 minutos pelo deploy do GitHub Pages.
7. Abre-se a URL publicada com um parâmetro de cache (`?v=N`) para conferir.

Observações confirmadas:

- Não há login de GitHub sendo feito pelo navegador. A autenticação já está no GitHub Desktop.
- A publicação acontece **apenas** pelo push para `main`. Não há painel de hospedagem separado.
- A verificação do site é feita abrindo a URL pública no navegador.
- O renderizador do navegador automatizado é instável nesta configuração. Prefira **medir por JavaScript** (dimensões, contagem de elementos, `naturalWidth` das imagens) em vez de depender de capturas de tela.

### Como a publicação realmente acontece — leia antes de tentar

**Não existe acesso ao GitHub nem ao Git por linha de comando.** A publicação é
feita **controlando o GitHub Desktop na tela da Lilly**, que já está aberto e
autenticado na máquina dela.

Passos reais:

1. Pedir acesso de controle ao aplicativo **GitHub Desktop** (`request_access`).
2. Trazer o GitHub Desktop para a frente (`open_application`).
3. Tirar um screenshot para localizar os elementos — a posição da janela muda entre sessões.
4. Clicar no campo **Summary (required)**, no canto inferior esquerdo.
5. Digitar a mensagem do commit.
6. Clicar em **Commit to main**.
7. Clicar em **Push origin**, no topo.
8. Esperar de 1 a 3 minutos e abrir a URL publicada com parâmetro de cache (`?v=N`).

> **Armadilha conhecida:** não rode comandos `git` pelo terminal isolado. Ele lê
> os arquivos, mas **não tem permissão de escrita na pasta `.git`**. Um simples
> `git status` pode deixar um `.git/index.lock` para trás que o terminal não
> consegue apagar e que **bloqueia o GitHub Desktop**. Isso já aconteceu e
> exigiu que a Lilly apagasse o arquivo à mão.
>
> Para inspecionar o projeto, use o terminal apenas para **ler** (listar
> arquivos, contar tags com Python, medir imagens). Para ver o que mudou, use a
> própria interface do GitHub Desktop.

### Pendência atual do Git

`git status` mostra três arquivos modificados que **não foram alterados por
edição de conteúdo**:

```
 M CNAME
 M calculadora-remessa.js
 M robots.txt
```

O diff é de **quebra de linha** (LF → CRLF), efeito da configuração
`core.autocrlf` do Git no Windows. O conteúdo é idêntico.

> **Não commite esses três arquivos sem confirmar com a Lilly.** Um commit de
> quebra de linha polui o histórico e não muda nada no site.

---

## 5. Fluxo completo de execução e publicação

1. Ler este handover.
2. Conferir repositório e branch (`git remote -v`, `git branch --show-current`).
3. Verificar alterações não commitadas (`git status --porcelain`).
4. Localizar os arquivos relevantes.
5. Abrir e entender o trecho a alterar.
6. Fazer a **menor alteração necessária**.
7. Conferir caminhos relativos (`img/...`, sem barra inicial) e âncoras.
8. Verificar a estrutura (tags abertas e fechadas) por script.
9. Conferir no desktop.
10. Conferir no celular (largura de 390 px ou simulando as regras do media query).
11. Verificar links internos e carregamento das imagens.
12. Conferir o `git diff`.
13. Commit com mensagem descritiva, uma tarefa por commit.
14. Push.
15. Aguardar o deploy.
16. Abrir a URL publicada com parâmetro de cache.
17. Confirmar o resultado por medição.
18. Informar arquivos, commit, URL e testes feitos.

---

## 6. Estrutura real de pastas

```
financas-japao/
├── index.html                          Home
├── furusato-nozei.html                 Guia principal + calculadora
├── amazon-furusato-nozei.html          Guia da Amazon
├── rakuten-furusato-nozei.html         Guia do Rakuten
├── imposto-residencial-juminzei.html   Jūminzei + calculadora
├── aposentadoria-nenkin.html           Nenkin + calculadora
├── dependentes-no-brasil.html          Dependentes + calculadora
├── remessa-japao-brasil.html           Comparador de remessa
├── sobre.html                          Sobre (E-E-A-T)
├── contato.html                        Contato
├── privacidade.html                    Política de privacidade
├── conceito-visual-novo.html           Rascunho interno — bloqueado no robots.txt
│
├── style.css                           CSS compartilhado de todo o site
├── main.js                             JS do cabeçalho (menu, submenu, busca)
├── calculadora-remessa.js              JS da calculadora de remessa
│
├── img/                                Todas as imagens
├── sitemap.xml                         10 URLs
├── robots.txt                          Bloqueia conceito-visual-novo e og-source
├── ads.txt                             Autorização do AdSense
├── CNAME                               Domínio do GitHub Pages
├── favicon.svg
├── og-image.jpg / og-image.png         Imagem de compartilhamento
├── inter-variable.woff2                Fonte auto-hospedada
│
└── docs/ai-handover/                   Esta documentação
```

O CSS é **um arquivo só** para o site inteiro. Algumas páginas ainda têm um
bloco `<style>` local com regras específicas — ao mexer em estilo, verifique os
dois lugares.

---

## 7. Inventário de páginas

Todas confirmadas no repositório. Todas usam o mesmo cabeçalho e rodapé.

| Arquivo | URL | Finalidade | Estado |
|---|---|---|---|
| `index.html` | `/` | Home, 5 cartões de calculadora + seção de conteúdo | Publicada |
| `furusato-nozei.html` | `/furusato-nozei.html` | Guia principal, calculadora de limite, grade de 8 categorias, tabela comparativa | Publicada |
| `amazon-furusato-nozei.html` | `/amazon-furusato-nozei.html` | Como doar pela Amazon | Publicada |
| `rakuten-furusato-nozei.html` | `/rakuten-furusato-nozei.html` | Como doar pelo Rakuten, 6 cards | Publicada |
| `imposto-residencial-juminzei.html` | `/imposto-residencial-juminzei.html` | Jūminzei + simulador | Publicada |
| `aposentadoria-nenkin.html` | `/aposentadoria-nenkin.html` | Nenkin, saque vs aposentadoria | Publicada |
| `dependentes-no-brasil.html` | `/dependentes-no-brasil.html` | Dependentes no exterior | Publicada |
| `remessa-japao-brasil.html` | `/remessa-japao-brasil.html` | Comparador de remessa | Publicada |
| `sobre.html` | `/sobre.html` | Autoria e metodologia | Publicada |
| `contato.html` | `/contato.html` | Contato | Publicada |
| `privacidade.html` | `/privacidade.html` | Privacidade e AdSense | Publicada |
| `conceito-visual-novo.html` | — | Rascunho interno | **Não indexável.** Não linkar, não divulgar |

Correções pequenas e delimitadas podem ser feitas direto. **Redesenho, mudança
de estrutura ou de conteúdo fiscal exige autorização.**

---

## 8. Estado atual da página Rakuten

**Concluída e publicada.**

| Campo | Valor |
|---|---|
| Arquivo | `rakuten-furusato-nozei.html` |
| URL | https://financasnojapao.com/rakuten-furusato-nozei.html |
| `<title>` | Rakuten Furusato Nozei em português: guia passo a passo (2026) \| Finanças no Japão |
| Meta description | "Como doar pelo Rakuten Furusato Nozei sem saber japonês: o passo a passo com as telas traduzidas, o erro de endereço que anula o desconto, o One-Stop e o que mudou desde o fim dos pontos em 2025." |
| Canonical | https://financasnojapao.com/rakuten-furusato-nozei.html |
| H1 | **Rakuten Furusato Nozei em português** |
| Dados estruturados | `Article` (com `Person`, `Organization` e duas citações `WebPage`) e `BreadcrumbList` |

### Hero

- Largura total, imagem de fundo posicionada à direita, texto sobre o degradê claro à esquerda.
- Imagem: `img/hero-rakuten.webp` (1600 × 1029, ~108 KB), carregada com `fetchpriority="high"`.
- Subtítulo: "Passo a passo completo para doar pelo Rakuten, com os termos das telas em japonês traduzidos."
- Checklist com 4 itens.
- Dois botões: **Calcular meu limite** → `furusato-nozei.html#calculadora`; **Abrir Rakuten Furusato** → link de afiliado.
- Aviso: "Link de afiliado: você não paga nada a mais por usar nossos links."
- Classes: `.rk-hero.rk-hero-foto`, `.rk-hero-bg`, `.rk-hero-txt`, `.rk-hero-lista`, `.rk-af-nota`.
- No mobile (≤860 px) a imagem passa a ocupar a largura toda e o texto vai abaixo.

### Âncoras existentes

`#vale-a-pena` · `#endereco` · `#passo-a-passo` · `#onestop` · `#glossario` · `#faq`

A âncora do One-Stop é **`#onestop`**, sem hífen. Termos japoneses no texto
(ワンストップ特例制度 e ワンストップ特例申請書の送付について) apontam para ela.
"jūminhyō" aponta para `#endereco`.

### Links de afiliado

5 links, todos com `rel="sponsored nofollow noopener"` e `target="_blank"`.
Todos apontam para a **página de coleção** do furusato do Rakuten, nunca para
município ou produto específico — exigência da norma do Sōmushō.

### Seção dos seis cards

Grade `.rk-cards`: 3 colunas no desktop, 2 até 1000 px, 1 até 640 px.
Cada card `.rk-card` tem número (`.rk-card-num`), imagem da tela
(`.rk-card-tela`), título `<h3>`, texto e os termos japoneses (`.rk-card-jp`).
Os cards 3, 4 e 6 têm a classe `destaque` (fundo rosado) por serem os pontos
onde a pessoa perde o desconto se errar.

### Assets dos seis passos

Todos em `img/`, formato **WebP**, 760 px de largura, `loading="lazy"`.

| Arquivo | Dimensões | Peso | Função |
|---|---|---|---|
| `passo-1-buscar.webp` | 760 × 746 | 20 KB | Busca por valor e por região |
| `passo-2-escolher.webp` | 760 × 818 | 42 KB | Página do presente, valor da doação |
| `passo-3-onestop.webp` | 760 × 652 | 18 KB | Opções de envio do formulário One-Stop |
| `passo-4-endereco.webp` | 760 × 767 | 28 KB | Dados do doador e aviso do jūminhyō |
| `passo-5-pagamento.webp` | 760 × 746 | 26 KB | Resumo do pedido e forma de pagamento |
| `passo-6-acompanhar.webp` | 760 × 679 | 26 KB | Painel pessoal e status do presente |

Total: ~163 KB. Todos têm `alt` descritivo em português.
Regra CSS: `.rk-card-tela img { width:100%; height:auto; border-radius:10px; border:1px solid var(--color-border); }`

### Registros importantes sobre essas imagens

- São **recriações**, não capturas do site do Rakuten. O texto de introdução da seção diz isso explicitamente.
- Números e títulos estão em **HTML de verdade**, não dentro da imagem, para o Google conseguir ler.
- Os SVGs esquemáticos anteriores foram substituídos e **não devem voltar**.
- A pasta correta é `img/` (caminho relativo, sem barra inicial).
- Não duplicar rodapé nem e-mail de contato — já estão corretos em todas as páginas.
- Não recriar componentes já publicados sem necessidade.

**Último commit relacionado:** `37a1949`.

---

## 9. Assets e convenções de imagens

- **Pasta:** sempre `img/`. Caminho relativo, sem barra inicial.
- **Nomes:** minúsculas, sem acento, separados por hífen, descrevendo a função (`passo-3-onestop`, `ico-nenkin`, `cat-carnes`).
- **Formato:** WebP para foto e ilustração. SVG apenas para desenho vetorial simples feito à mão (ícones inline, diagramas). PNG só quando houver motivo específico.
- **Peso:** manter cada imagem abaixo de ~100 KB. Redimensionar antes de converter.
- **Nitidez:** exportar com cerca de 2× a largura de exibição. Ícone exibido a 44 px → arquivo de 256 a 512 px.
- **Distorção:** nunca esticar para caber. Recortar mantendo a proporção do conteúdo.
- **Dimensões:** sempre declarar `width` e `height` no HTML, para evitar deslocamento de layout.
- **`alt`:** descritivo, em português, dizendo o que a imagem mostra.
- **Lazy loading:** `loading="lazy"` em tudo abaixo da primeira dobra. A imagem do hero usa `loading="eager"` e `fetchpriority="high"`.
- **Cache:** ao substituir uma imagem mantendo o nome, incrementar o parâmetro (`?v=2`), senão o navegador serve a antiga.
- **Texto dentro de imagem:** evitar. Título e conteúdo importante ficam em HTML.

### Assets legados — não reutilizar

| Arquivo | Situação |
|---|---|
| `img/furusato-hero.svg` | Substituído pelo hero fotográfico |
| `img/hero-furusato.png` | Versão PNG pesada, substituída pelo WebP |
| `img/cat-*.png` | Versões PNG das categorias; o site usa os `.webp` |
| `img/furusato-calc-vazia.svg` | Não referenciado atualmente |

---

## 10. Padrão visual existente

Confirmado no `style.css`, em variáveis CSS no `:root`:

| Papel | Variável | Valor |
|---|---|---|
| Preto da marca | `--color-primary` | `#16181d` |
| Vermelho de ação | `--color-red` | `#e02b25` |
| Vermelho escuro | `--color-red-dark` | `#b81f1a` |
| Vermelho claro | `--color-red-soft` | `#fdecea` |
| Verde de valor positivo | `--color-accent` | `#00a866` |
| Verde escuro | `--color-accent-dark` | `#00854f` |
| Verde claro | `--color-accent-soft` | `#e8faf1` |
| Fundo | `--color-bg` | `#f7f6f4` |
| Borda | `--color-border` | `#e7e4df` |
| Texto | `--color-text` | `#16181d` |
| Texto secundário | `--color-text-muted` | `#5c6169` |
| Texto fraco | `--color-text-faint` | `#8d939b` |

**Regra de cor:** o vermelho age (botão, destaque, alerta). O verde é sempre
valor positivo ou confirmação. Não trocar os papéis.

- **Tipografia:** Inter, auto-hospedada (`inter-variable.woff2`).
- **Largura máxima:** `.container` até 1180 px.
- **Cantos:** 10 a 18 px conforme o componente.
- **Botões:** `.btn` vermelho preenchido; `.btn-secondary` contornado.
- **Cabeçalho:** logo circular + submenu "Impostos" + botão Calculadora + busca. Igual nas 11 páginas, controlado por `main.js`.
- **Breakpoints usados:** 1100, 1000, 900, 860, 760, 720, 640, 560, 520, 420 px.
- **Mobile:** a tabela comparativa vira cartões empilhados por CSS puro, sem duplicar markup.

---

## 11. SEO e estrutura editorial técnica

Implementado em todas as páginas:

- `<title>` e meta description próprios
- `<link rel="canonical">` apontando para a URL final
- Open Graph e Twitter Card
- Um `<h1>` por página, hierarquia de headings coerente
- Links internos entre guias e calculadoras
- Todo o texto em HTML rastreável — nada preso em imagem ou gerado por JS
- `alt` em todas as imagens
- `sitemap.xml` com 10 URLs, enviado ao Search Console
- `robots.txt` bloqueando os rascunhos internos
- Links de afiliado com `rel="sponsored nofollow noopener"` e aviso visível

Dados estruturados por tipo de página:

| Tipo | Onde |
|---|---|
| `WebSite` | Home |
| `Article` + `BreadcrumbList` | Guias |
| `FAQPage` | Páginas com FAQ visível |
| `WebApplication` | As 5 páginas com calculadora |
| `AboutPage` / `ContactPage` | Sobre e Contato |

Bloco de **resposta direta** (`.resposta-rapida`) logo após a introdução em
cinco guias: responde a pergunta central em duas ou três frases.

> O Sonnet pode executar alterações de SEO previamente aprovadas, mas **não deve
> alterar informação fiscal, valor, prazo, cálculo ou recomendação** sem
> autorização e revisão específica.

---

## 12. Conteúdo fiscal e informações sensíveis

O site trata de imposto japonês. Erro aqui custa dinheiro real ao leitor.

Precauções já adotadas, que devem ser mantidas:

- **Não inventar valores.** Todo número vem de fonte oficial ou da calculadora do próprio site.
- **Não alterar limites, prazos ou regras de elegibilidade** sem verificação em fonte japonesa oficial.
- **Não alterar instruções do One-Stop.** O prazo do formulário em papel é *chegada* até 10 de janeiro (必着), não data de postagem. Isso já foi verificado e corrigido uma vez.
- **Não substituir conteúdo fiscal por conhecimento geral do modelo.**
- **Não usar superlativo sem comprovação.** Já houve uma correção por causa de "o maior catálogo do Japão", que contradizia a própria tabela comparativa do site.
- **Não apresentar estimativa como garantia.** A calculadora aplica margem de segurança e arredonda para baixo, de propósito.

Quando uma tarefa envolver conteúdo fiscal, executar **apenas o que estiver
claramente aprovado**, e sinalizar qualquer dúvida antes de publicar.

---

## 13. Decisões congeladas

Não alterar sem autorização explícita da Lilly:

1. Não redesenhar páginas aprovadas.
2. Não substituir o hero aprovado da página Rakuten.
3. Não apagar links internos existentes.
4. Não mudar a identidade visual (paleta, papéis do vermelho e do verde, tipografia).
5. Não criar link externo quando a dúvida se resolve dentro do próprio portal — usar âncora interna.
6. Pasta de imagens: `img/`, caminho relativo.
7. Âncora do One-Stop: `#onestop`, sem hífen.
8. Títulos e números dos cards continuam em HTML, não dentro de imagem.
9. WebP para foto e ilustração; SVG só quando for a melhor solução vetorial.
10. Manter o aviso de afiliado visível em toda página com link de afiliado.
11. Links de afiliado apontam para página de coleção, nunca para município ou produto específico.
12. Não duplicar componentes (rodapé, e-mail de contato, cabeçalho).
13. Não alterar conteúdo fiscal sem revisão.
14. Não publicar mudança que não foi pedida.
15. Não alterar vários arquivos sem necessidade.
16. Não misturar tarefas independentes no mesmo commit.
17. Não reintroduzir asset substituído (ver a lista da seção 9).
18. Anúncios automáticos do AdSense permanecem **desativados**. Os blocos serão posicionados à mão depois da aprovação.

---

## 14. Responsabilidade do Sonnet

**Pode, quando a tarefa estiver clara:** consultar o repositório, localizar
arquivos, editar HTML, CSS e JavaScript, instalar assets, converter imagens,
corrigir caminhos, testar responsividade, conferir links e imagens, fazer
commit e push, acompanhar o deploy, verificar a publicação e relatar o
resultado.

**Não deve:** alterar estratégia por conta própria, redesenhar sem autorização,
mudar arquitetura, substituir conteúdo aprovado, tomar decisão fiscal, ampliar o
escopo, iniciar tarefa não pedida, editar arquivo não relacionado, fazer
auditoria repetitiva sem necessidade, prometer publicação sem verificar, ou
afirmar que fez algo sem confirmar.

---

## 15. Protocolo antes de cada tarefa

1. Ler este handover.
2. Conferir o repositório.
3. Confirmar a branch.
4. Verificar o estado do Git.
5. Verificar alterações não commitadas.
6. Abrir apenas os arquivos relevantes.
7. Resumir em até cinco linhas: tarefa entendida, arquivos que pretende alterar, resultado esperado, risco real se houver.
8. Executar somente o que foi pedido.
9. Testar.
10. Conferir o `git diff`.
11. Commit.
12. Push.
13. Acompanhar o deploy.
14. Abrir a URL publicada.
15. Informar: arquivos criados, arquivos alterados, commit, branch, URL, testes e pendências reais.

---

## 16. Protocolo de segurança

- Não apagar arquivo sem autorização.
- Nunca usar `force push`.
- Não sobrescrever página inteira quando uma edição localizada resolve.
- Não inserir credencial no código.
- Não expor token, cookie ou chave.
- Não alterar domínio, `CNAME` ou hospedagem sem autorização.
- Não mudar configuração global sem necessidade.
- Não reverter trabalho publicado sem explicar antes.
- Criar um ponto seguro (commit) antes de mudança ampla.
- Parar antes de publicar quando houver risco não resolvido.
- Nunca afirmar que um deploy terminou sem ter verificado a URL.
- Nunca pedir que a Lilly cole senha, token ou credencial no chat.

---

## 17. Como agir com contexto incompleto

Ordem de consulta:

1. Repositório.
2. Site publicado.
3. `HANDOVER-SONNET.md`.
4. `COMO-TRABALHAR-COM-LILLY.md`.
5. `ROADMAP-E-IDEIAS.md`, só quando a tarefa envolver planejamento.
6. Perguntar à Lilly apenas o que não puder ser resolvido pelos itens acima.

Não pedir que ela reconte algo que está no código ou nestes documentos.

---

## 18. Estado atual e pendências reais

### Concluído

- Página Rakuten completa e publicada, com os seis cards em WebP.
- Home refeita com hero fotográfico, nove ícones e seção de conteúdo.
- Cabeçalho unificado nas 11 páginas, com submenu funcionando no toque.
- Script do AdSense instalado em todas as páginas, com anúncios automáticos desativados.
- Amazon Associates ativa: tag `financasnojap-22` nos links.
- Rakuten Afiliados ativo: link na página do Rakuten e na tabela comparativa.
- E-mail de contato e rodapé padronizados.

### Pendência técnica

> Nenhuma pendência técnica conhecida na página Rakuten no momento deste handover.

Única observação em aberto: os três arquivos com diferença de quebra de linha
(`CNAME`, `calculadora-remessa.js`, `robots.txt`). Ver a seção 3.

### Aguardando terceiros — não é tarefa

- **AdSense:** site com status "Preparando" na fila de revisão do Google. Quando aprovar, criar e posicionar os blocos à mão.
- **Indexação:** 4 de 11 páginas indexadas na última verificação; as demais foram enviadas manualmente ao Search Console.
- **Amazon Associates:** precisa de 3 vendas qualificadas até o fim de janeiro de 2027 para manter a conta.

---

## 19. Último estado publicado

| | |
|---|---|
| Data | 5 de agosto de 2026 |
| Horário | ~08:25 JST |
| Branch | `main` |
| Commit | `37a1949` |
| Mensagem | Telas reais nos seis cards do passo a passo do Rakuten |
| URL verificada | https://financasnojapao.com/rakuten-furusato-nozei.html |
| Testes | 6 imagens carregando (`naturalWidth > 0`), 3 colunas no desktop, 1 coluna no celular, 6 títulos em HTML, estrutura HTML balanceada |

**Limitação da verificação:** o renderizador do navegador automatizado estava
instável; a conferência foi feita por medição via JavaScript, não por captura
de tela. A verificação visual final é da Lilly.

---

## 20. Atualização futura deste handover

Atualizar quando houver mudança **operacional ou estrutural**:

- nova página;
- nova pasta;
- mudança no fluxo de deploy;
- mudança de branch;
- novo componente reutilizável;
- mudança de arquitetura;
- nova decisão congelada;
- mudança de acesso ou de integração.

**Não** atualizar por causa de correção pequena de texto ou de CSS.
