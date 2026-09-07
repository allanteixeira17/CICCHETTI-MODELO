---
name: criador-artigos-blog
description: >
  Use esta skill para criar artigos de blog estruturados com técnicas de copywriting e SEO, prontos para
  serem inseridos no banco de dados do site allancriacaodesites/ALN Soluções Digitais (status: publicado). Acione sempre que o usuário mandar um
  tema e pedir um "artigo", "post de blog", "conteúdo para o blog", "artigo de SEO", ou disser
  algo como "escreve um artigo sobre X" ou "cria um post sobre X para o blog". Aplica copywriting
  (PAS/AIDA, gatilhos mentais) e SEO (keyword principal, meta description, title, schema
  JSON-LD) e insere o artigo diretamente no banco de dados através da model `App\Models\Artigo`, preenchendo os
  campos de SEO e definindo a categoria apropriada. O texto deve ser puramente HTML.
  Ativar mesmo sem o usuário mencionar "skill" — qualquer pedido de artigo/post de blog deve acionar esta skill.
---

# Skill: Criador de Artigos de Blog (Blade + SEO + Copywriting)

Esta skill transforma um tema (enviado pelo Allan) em um artigo de blog completo, em **médio
porte (1000-1500 palavras)**, escrito com técnicas de copywriting e otimizado para SEO, que deve ser
**inserido diretamente no banco de dados** do projeto Laravel (usando a model `App\Models\Artigo`).

O output final não é um arquivo `.blade.php`, mas sim a inserção real do conteúdo, campos de SEO, schema e slug
no banco de dados através de um script automatizado. O corpo (`conteudo`) deve estar formatado apenas com tags HTML base, sem heranças do Blade.

---

## CONTEXTO DO PROJETO (fixo, não perguntar)

- **Framework:** Laravel (Model `App\Models\Artigo`)
- **Tabela/Model:** `Artigo` (campos: `slug`, `titulo`, `descricao`, `conteudo`, `categoria`, `meta_description`, `keywords`, `schema`, `status`)
- **Status padrão:** 'publicado'
- **Autor padrão:** Allan Teixeira
- **Marca:** ALN Soluções Digitais / ALN Criação de Sites
- **Instagram:** `@allancriacaodesites`
- **CTA fixo do layout:** O layout do site já exibe o botão do WhatsApp. Logo, não recrie botões visuais complexos no texto, apenas direcione no fechamento.
- **Cores de marca (úteis se o conteúdo citar a marca):** azul vibrante `#156BFF` / `#0074D9`, azul escuro `#001F3F` / `#0B1220`.

Não pergunte essas informações ao usuário — elas já são fixas. Pergunte **apenas** o que for
específico do artigo (ver Passo 1).

---

## PROCESSO DE CRIAÇÃO

### Passo 1 — Receber o tema e validar o essencial

Quando o Allan mandar um tema, normalmente uma frase ou palavra-chave já é suficiente para
começar. Só pare para perguntar se faltar algo que **mude a estratégia do artigo**:

1. **Palavra-chave principal de SEO** — se o tema já é claro e específico (ex: "landing page vs
   site completo"), assuma a própria frase do tema como base da keyword e siga direto. Só
   pergunte se o tema for muito genérico (ex: "fala sobre sites").
2. **Público-alvo do artigo** (se não estiver implícito no tema) — dono de negócio local,
   profissional liberal (advogado, médico, etc.), empreendedor da diáspora brasileira no exterior,
   ou geral.
3. **Ângulo/dor principal** (opcional) — se o usuário já deu uma direção, use-a. Caso contrário,
   escolha o ângulo mais natural para o tema e siga.

**Regra de ouro:** não trave o processo com perguntas se o tema já permite começar. Prefira
assumir um ângulo razoável e avisar a escolha no início da resposta, do que interromper o fluxo.
Use a ferramenta de perguntas (`ask_user_input_v0`) apenas quando a ambiguidade for real.

### Passo 2 — Planejar a estrutura de SEO antes de escrever

Defina mentalmente (não precisa mostrar isso ao usuário, a menos que ele peça):

- **Title tag** (50-60 caracteres, com a keyword principal perto do início - usado no campo `titulo`)
- **Meta description** (120-156 caracteres, com a keyword + benefício + leve urgência/curiosidade)
- **Keywords** (3-5 termos/variações relacionadas à keyword principal, separadas por vírgula —
  seguir o padrão visto no artigo de referência: termos long-tail naturais, não apenas a palavra
  isolada)
- **Slug sugerido** (kebab-case, baseado na keyword principal)
- **Estrutura de headings:** O H1 já será gerado pelo front a partir do `titulo`. Use 4-7 `<h2>` cobrindo os subtemas principais e `<h3>` quando um
  `<h2>` se desdobra em subtópicos (ex: "quando usar X" → 3-4 `<h3>` de cenários)

### Passo 3 — Escrever o artigo aplicando copywriting + SEO

Seguir esta estrutura de copy (variação de PAS/AIDA adaptada para artigo educativo de SEO):

1. **Abertura (2-4 parágrafos, sem h2):**
   - 1º parágrafo: apresentar a dor/pergunta/dúvida do leitor em tom direto e pessoal, citando a
     keyword principal de forma natural já nas primeiras linhas (importante para SEO).
   - Parágrafos seguintes: ampliar o contexto, mostrar que essa dúvida é comum, e prometer
     implicitamente que o artigo vai resolver isso.
   - Nunca abrir com "Neste artigo, vamos falar sobre..." de forma robótica — seguir o tom mais
     conversacional do artigo de referência ("Quando uma empresa decide investir...").

2. **Corpo (vários `<h2>`, com `<h3>` quando fizer sentido):**
   - Cada `<h2>` deve responder a uma sub-pergunta real que o público tem sobre o tema (pensar
     como quem está pesquisando no Google).
   - Usar `<ul><li>` para listas de benefícios, exemplos, casos de uso — igual ao artigo de
     referência.
   - Usar `<strong>` para destacar a keyword principal e termos-chave 2-4 vezes ao longo do
     artigo (sem forçar, sem keyword stuffing).
   - Incluir pelo menos uma seção comparativa, prática ou de "quando usar X" sempre que o tema
     permitir — esse formato converte bem e tende a rankear bem.
   - Parágrafos curtos (3-5 linhas), nunca blocos longos de texto.
   - Tom: profissional, direto, confiável — nem informal demais, nem acadêmico. Mesmo registro do
     artigo de referência sobre landing page vs site completo.

3. **Conclusão (`<h2>Conclusão</h2>`):**
   - Resumir a decisão/aprendizado central do artigo.
   - Reforçar o benefício de agir (ex: ter um site profissional, investir em SEO, etc.) sem ser
     um CTA agressivo — o CTA de conversão já vem pronto no layout depois do content.
   - Pode citar sutilmente o tipo de solução que a ALN oferece, sem soar como anúncio (ex: "...e é
     exatamente esse tipo de estrutura que ajudamos negócios a construir").

**Regras de copywriting:**
- Frases ativas, evitar voz passiva em excesso.
- Gatilhos mentais permitidos: prova social implícita, autoridade, escassez/urgência (com
  moderação), comparação antes/depois.
- Nunca inventar estatísticas ou dados específicos não verificáveis (ex: "90% dos clientes...")
  a menos que o usuário forneça a fonte ou quando for uma referência geral conhecida de mercado —
  nesse caso, suavizar para "a maioria dos clientes" ou similar quando não houver fonte confiável.
- Evitar jargão técnico sem explicação — o público geralmente não é técnico.

**Regras de SEO:**
- Keyword principal: presente no 1º parágrafo, em pelo menos 1 `<h2>`, e distribuída
  naturalmente 4-8 vezes no total (artigo de 1000-1500 palavras).
- Variações semânticas (sinônimos, long-tail) espalhadas pelo texto — não repetir a keyword exata
  o tempo todo.
- Meta description sempre escrita como copy persuasivo, não como resumo neutro.
- Schema JSON-LD sempre incluído (ver template).

### Passo 4 — Preparar o conteúdo para inserção no Banco de Dados

Você precisará estruturar o conteúdo em formato HTML limpo (usando `<p>`, `<h2>`, `<h3>`, `<ul>`, `<li>`, `<strong>`), que será salvo no campo `conteudo` do banco.

**Os campos requeridos no banco (App\Models\Artigo) são:**
- `slug`: kebab-case baseado na keyword/título
- `titulo`: O título do artigo otimizado para SEO
- `descricao`: Breve resumo que aparecerá nas listagens
- `conteudo`: O texto do artigo em formato HTML
- `categoria`: Uma categoria coerente (ex: 'Marketing', 'Saúde', 'Geral')
- `meta_description`: Texto persuasivo para SEO
- `keywords`: 3-5 keywords separadas por vírgula
- `schema`: Bloco `<script type="application/ld+json">...`
- `status`: 'publicado'

**Nunca incluir no `conteudo`:**
- Tags `<h1>` (isso já vai pro campo `titulo` e é renderizado pelo front)
- O bloco de CTA do WhatsApp (já vem fixo no front-end)
- `<html>`, `<head>`, `<body>`, diretivas `@extends`, `@section` ou qualquer coisa fora do escopo HTML interno.

### Passo 5 — Inserir o artigo no sistema

1. Crie um script temporário PHP na raiz do projeto (ex: `insert_article.php`) que dê require no `vendor/autoload.php` e no `bootstrap/app.php` para usar o Laravel.
2. No script, use a model `App\Models\Artigo` com `updateOrCreate` para salvar todos os campos definidos acima.
3. Execute o script com a ferramenta `run_command` (`php insert_article.php`).
4. Apague o script temporário logo após o sucesso da inserção usando comandos do terminal ou `manage_task`.
5. No texto da resposta, avise o usuário que o artigo foi criado e inserido no banco com sucesso, informando o título, slug e meta description.

---

## REFERÊNCIA DE ESTRUTURA

Você **não** precisa mais gerar um arquivo Blade. Apenas foque em escrever o texto HTML limpo para inserir na variável `$conteudo`.
O arquivo `references/exemplo-completo.blade.php` contém um artigo real (o texto interno serve de inspiração) — use como referência de tom, tamanho de parágrafo, proporção de `<h2>`/`<h3>`, e estilo de escrita.

---

## CHECKLIST ANTES DE ENTREGAR

- [ ] Script PHP temporário gerado e executado corretamente com `App\Models\Artigo`
- [ ] `titulo`, `meta_description`, `keywords` e `slug` preenchidos e otimizados (não genéricos)
- [ ] Bloco `schema` salvo no banco com JSON-LD válido (headline, description, author, publisher)
- [ ] Corpo `conteudo` HTML entre 1000-1500 palavras
- [ ] Nenhum `<h1>`, diretiva `@section` ou `@extends` no conteúdo do banco
- [ ] Nenhum bloco de CTA/WhatsApp duplicado no HTML
- [ ] Keyword principal aparece no 1º parágrafo e em pelo menos um `<h2>`
- [ ] Pelo menos uma lista (`<ul>`) e uso moderado de `<strong>`
- [ ] Parágrafos curtos, tom direto e conversacional
- [ ] Conclusão presente com `<h2>Conclusão</h2>`
- [ ] Status definido como 'publicado' e `categoria` preenchida
- [ ] Script temporário apagado no final do processo
