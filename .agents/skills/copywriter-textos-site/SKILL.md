---
name: copywriter-textos-site
description: >
  Use esta skill sempre que o usuário pedir para escrever/redigir o TEXTO/COPY de um site,
  landing page, página institucional ou seção específica (Hero, Sobre, Serviços, FAQ, CTA etc.),
  a partir de especificações do negócio (nicho, diferenciais, público, serviços). Acione com
  pedidos como "cria o texto do site", "escreve a copy da landing page", "redige o conteúdo do
  site do cliente", "texto persuasivo para o site de X", ou ao receber um briefing pedindo o
  conteúdo pronto. Aplica copywriting persuasivo (AIDA/PAS, gatilhos mentais) + SEO (keyword,
  meta title/description, headings) e entrega em **HTML puro**, pronto para colar no site, focado
  em levar o visitante a clicar no botão de ação (WhatsApp, formulário, compra). Ativar mesmo sem
  o usuário mencionar "copywriter" ou "skill" — qualquer pedido de texto/conteúdo para site ou
  landing page deve acionar esta skill.
---

# Skill: Copywriter de Sites (SEO + Persuasão + HTML)

Esta skill transforma as especificações de um negócio/cliente em todo o **texto do site**,
escrito com copywriting persuasivo e otimizado para SEO, entregue em **HTML puro** (sem
framework, sem CSS embutido de layout), pronto para o usuário colar no template do site.

O foco final de cada bloco de texto é sempre o mesmo: levar o visitante a clicar no botão de
ação principal (WhatsApp, formulário de contato/orçamento, compra, agendamento etc.).

---

## PASSO 1 — Receber as especificações

Antes de escrever, é preciso saber:

1. **Tipo de site**: landing page de conversão (foco em 1 único CTA, geralmente 1 página) ou
   site institucional multi-página (Home, Sobre, Serviços, Contato). Se o usuário já deixou isso
   claro no pedido, não pergunte de novo — apenas confirme rapidamente no início da resposta.
2. **Negócio/nicho do cliente** (ex: clínica odontológica, energia solar, advogado, restaurante).
3. **Diferenciais principais** (o que o cliente quer destacar: preço, qualidade, atendimento,
   experiência, tecnologia, localização etc.).
4. **Público-alvo** (quem compra/contrata: pessoa física, empresa, classe social, faixa etária,
   dor específica).
5. **Serviços/produtos a listar** (se for site institucional ou landing com múltiplos serviços).
6. **Para onde aponta o botão de ação principal** — isso varia por projeto, então pergunte
   sempre que não estiver especificado: WhatsApp (pedir número, se disponível), formulário de
   contato/orçamento, link de compra, agendamento, ligação telefônica etc.
7. **Tom de voz** (opcional) — profissional/sério, próximo/humano, premium/sofisticado,
   descontraído. Se não for informado, use tom profissional e direto como padrão, adaptado ao
   nicho (ex: advogado = mais formal; salão de beleza = mais próximo e caloroso).

**Regra de ouro:** se as especificações já vieram completas no pedido (nicho, diferenciais,
serviços, CTA), não trave o fluxo com perguntas — assuma o que for razoável, avise a suposição em
uma linha no início da resposta, e escreva o site. Use `ask_user_input_v0` apenas para o que
realmente muda a estrutura do texto (tipo de site e destino do CTA são os itens mais importantes
de confirmar quando não estiverem claros).

---

## PASSO 2 — Planejar a estrutura de SEO antes de escrever

Definir mentalmente (mostrar ao usuário só se ele pedir):

- **Keyword principal**: termo que o público-alvo buscaria no Google para achar esse negócio
  (ex: "clínica odontológica em Natal", "advogado trabalhista SP").
- **Title tag** (50-60 caracteres, keyword perto do início).
- **Meta description** (120-156 caracteres, keyword + benefício + leve urgência/curiosidade,
  sempre escrita como copy persuasivo, nunca como resumo neutro).
- **Keywords secundárias/long-tail** (3-6 termos relacionados, variações semânticas).
- **Hierarquia de headings**: 1 `<h1>` por página (na Home/landing, geralmente dentro do Hero),
  `<h2>` para cada seção principal, `<h3>` quando uma seção se desdobra (ex: cada serviço dentro
  de "Serviços", cada pergunta dentro do FAQ).

---

## PASSO 3 — Escrever o texto aplicando copywriting + SEO

### Estrutura para LANDING PAGE (1 página, foco total em conversão)

Nesta ordem, cada bloco em HTML:

1. **Hero** (`<h1>` + parágrafo + botão): promessa central + dor/desejo do público resolvido +
   CTA já no topo. Direto, sem enrolação. É a seção mais importante da página inteira.
2. **Prova/autoridade** (opcional, sem inventar dados): selo de confiança, anos de experiência,
   diferencial competitivo, se o usuário informou algo verificável.
3. **Dor → Solução** (`<h2>`): apresentar o problema que o público sente, depois a solução que o
   serviço/produto entrega (base do método PAS: Problema, Agitação, Solução).
4. **Benefícios/Serviços** (`<h2>` + `<h3>` por item ou `<ul><li>`): o que o cliente ganha, não
   só o que é oferecido — sempre traduzir características em benefícios.
5. **Como funciona** (opcional, `<h2>`): passo a passo simples de como contratar/comprar, reduz
   fricção e objeção.
6. **Diferenciais** (`<h2>`): por que escolher esse negócio e não o concorrente.
7. **FAQ** (`<h2>` + `<h3>` por pergunta): responder objeções comuns de quem ainda não converteu.
8. **CTA final** (`<h2>` + parágrafo curto + botão): reforçar a promessa do Hero e repetir a
   chamada para ação, com leve urgência/escassez se fizer sentido (sem inventar prazos/números
   falsos).

### Estrutura para SITE INSTITUCIONAL (multi-página)

Gerar o texto de cada página separadamente, sempre indicando com um comentário HTML qual página é
(ex: `<!-- PÁGINA: HOME -->`):

1. **Home**: Hero (`<h1>` + promessa + CTA) → resumo dos principais serviços/diferenciais (com
   link/CTA secundário para a página de Serviços) → prova/diferenciais → CTA final.
2. **Sobre**: história do negócio, missão, valores, o que torna o negócio confiável — sem inventar
   fatos que o usuário não informou. Terminar com um CTA suave.
3. **Serviços**: um `<h2>` por serviço (ou `<h3>` se dentro de uma única seção "Serviços"),
   sempre traduzindo característica em benefício, terminando cada bloco ou a página inteira com
   CTA.
4. **Contato**: reforço final do motivo para entrar em contato agora + CTA principal em destaque.

Se o usuário não especificar quais páginas quer, assuma Home + Sobre + Serviços + Contato como
padrão e avise a suposição.

---

## REGRAS DE COPYWRITING (válidas para os dois formatos)

- Frases ativas, diretas, sem voz passiva em excesso.
- Cada seção deve ter **um objetivo claro**: gerar interesse, remover objeção, ou levar ao clique.
- Gatilhos mentais permitidos, com moderação: prova social implícita, autoridade, escassez/
  urgência real, comparação antes/depois, especificidade (números concretos quando fornecidos
  pelo usuário).
- **Nunca inventar** números, estatísticas, prazos, depoimentos ou nomes de clientes que o
  usuário não forneceu. Se for necessário um placeholder (ex: depoimento), deixar marcado
  claramente como `[INSERIR DEPOIMENTO DO CLIENTE]`.
- Parágrafos curtos (2-4 linhas), fáceis de escanear — visitante de site não lê, escaneia.
- Botão de ação sempre com texto de CTA específico e no verbo de ação (ex: "Chamar no WhatsApp
  agora", "Solicitar orçamento grátis", "Agendar minha avaliação") — nunca genérico como "Clique
  aqui" ou "Enviar".
- Adaptar o tom ao nicho informado (ver Passo 1, item 7).

## REGRAS DE SEO

- Keyword principal: presente no `<h1>`, no primeiro parágrafo do Hero/introdução, e distribuída
  naturalmente 3-6 vezes ao longo do texto (sem keyword stuffing).
- Variações semânticas/long-tail espalhadas pelas outras seções.
- Cada `<h2>`/`<h3>` deve, quando possível, conter uma variação natural da keyword ou de um termo
  relacionado que o público pesquisaria.
- Incluir sempre, como comentário HTML no topo do arquivo (fora das tags visíveis), a sugestão de
  `<title>` e meta description prontos para colar no `<head>`.

---

## PASSO 4 — Montar o HTML final

Entregar em HTML semântico puro (sem CSS, sem framework, sem `<html>/<head>/<body>` — apenas os
elementos de conteúdo prontos para colar dentro do template existente do site):

- Tags permitidas: `<h1>`, `<h2>`, `<h3>`, `<p>`, `<ul>`, `<li>`, `<strong>`, `<a>` (para o botão
  de CTA, com `href` no destino informado pelo usuário — ex: link de WhatsApp
  `https://wa.me/55NUMERO` quando o CTA for WhatsApp), e `<!-- comentários -->` para indicar
  seções/páginas.
- No topo do arquivo, sempre incluir como comentário:
  ```html
  <!-- SEO
  Title: ...
  Meta description: ...
  Keyword principal: ...
  -->
  ```
- Landing page → um único arquivo/bloco de HTML com todas as seções na ordem do Passo 3.
- Site institucional → separar por página com comentário `<!-- PÁGINA: NOME -->` antes de cada
  bloco, dentro do mesmo arquivo (ou arquivos separados, se o usuário pedir).

## PASSO 5 — Entregar o arquivo

1. Nome do arquivo em kebab-case baseado no nicho/negócio (ex: `landing-page-clinica-odonto.html`
   ou `site-institucional-advocacia-silva.html`).
2. Criar o arquivo com `create_file` em `/home/claude/` e copiar para `/mnt/user-data/outputs/` (ou usar as pastas de artefatos padrão da sessão).
3. Usar `present_files` para entregar.
4. **Validação da Spec e Checklist:** Leia fisicamente o arquivo `specs/check/checklist.md`. Cruze o texto gerado com esse checklist e MARQUE COM `[x]` (atualizando o arquivo fisicamente usando ferramentas de edição) todos os itens de conteúdo que foram redigidos com sucesso. Se houver seções desmarcadas (ex: Serviços), você DEVE redigi-las.
5. Na resposta (fora do arquivo), informar rapidamente: keyword principal escolhida, título e
   meta description sugeridos, e confirmar a adesão ao checklist.

---

## CHECKLIST ANTES DE ENTREGAR

- [ ] Tipo de site confirmado (landing page ou institucional) e páginas corretas geradas
- [ ] **100% dos requisitos textuais/seções da Spec original foram contemplados e marcados com `[x]` no Checklist do Orquestrador**
- [ ] Comentário de SEO (title, meta description, keyword) presente no topo do HTML
- [ ] `<h1>` único contendo a keyword principal
- [ ] Keyword principal no primeiro parágrafo e distribuída naturalmente pelo texto
- [ ] Todos os botões de CTA com texto específico (nunca "clique aqui") e `href` correto para o destino informado
- [ ] Nenhum dado, estatística ou depoimento inventado sem fonte do usuário
- [ ] Parágrafos curtos, HTML semântico, sem CSS/framework misturado
- [ ] Arquivo `.html` em kebab-case entregue

