---
name: avaliador-copywriting
description: >
  Use esta skill para avaliar e dar nota a uma copy/texto de site, landing page ou anúncio,
  aplicando um critério rígido de qualidade (nota mínima 9/10). Acione sempre que o usuário pedir
  para "avaliar a copy", "dar nota pro texto", "revisar a copy", "essa copy tá boa?", "corrige e
  avalia o texto do site", ou logo depois que a skill /copywriter-textos-site gerar um texto —
  toda copy produzida para site/landing page deve passar por esta avaliação antes de ser
  considerada finalizada. Se a nota final ficar abaixo de 9/10, esta skill OBRIGATORIAMENTE aciona
  de novo a skill copywriter-textos-site para reescrever a copy com base nos pontos fracos
  apontados, repetindo o ciclo avaliação → reescrita até a nota ficar igual ou maior que 9/10 (ou
  até o limite de tentativas). Ativar mesmo sem o usuário mencionar "avaliador" ou "skill" —
  qualquer pedido de nota/qualidade sobre uma copy deve acionar esta skill.
---

# Skill: Avaliador de Copywriting (Nota Mínima 9/10)

Esta skill audita uma copy (texto de site, landing page, seção específica ou anúncio) usando uma
rubrica objetiva com 6 critérios. A copy só é aprovada com **nota final ≥ 9,0/10**. Abaixo disso,
esta skill devolve a copy para a skill `copywriter-textos-site` reescrever com base nos pontos
fracos, e reavalia a nova versão, repetindo o ciclo até aprovar ou até esgotar o limite de
tentativas.

---

## PASSO 1 — Obter a copy a ser avaliada

- Se a copy já foi gerada nesta mesma conversa (ex: acabou de sair da skill
  `copywriter-textos-site`), use-a diretamente — não peça de novo.
- Se o usuário só falou "avalia essa copy" sem colar o texto, peça o HTML/texto e, se souber, o
  nicho/público-alvo e a keyword principal pretendida (ajuda a avaliar o SEO com precisão). Não
  trave o fluxo por isso: se o nicho não vier, infira pelo conteúdo do próprio texto.

## PASSO 2 — Aplicar a rubrica (6 critérios, peso total = 10 pontos)

Avalie cada critério de 0 a 10 e aplique o peso. Justifique cada nota em 1-2 linhas, apontando
trechos concretos (bons ou ruins) — nunca dê nota sem justificativa.

| Critério | Peso | O que avaliar |
|---|---|---|
| **1. Persuasão / Gatilhos mentais** | 25% | Estrutura AIDA/PAS presente e bem executada; gatilhos (prova social, autoridade, escassez/urgência real, especificidade) usados com moderação e sem forçar; a copy gera desejo real de agir. |
| **2. Clareza e escaneabilidade** | 15% | Frases ativas e diretas; parágrafos curtos (2-4 linhas); hierarquia de leitura fácil de escanear; sem enrolação ou jargão desnecessário. |
| **3. SEO** | 20% | Keyword principal no `<h1>`, no primeiro parágrafo e distribuída naturalmente (3-6x, sem stuffing); `<title>`/meta description persuasivos e dentro do tamanho ideal; hierarquia `<h1>/<h2>/<h3>` coerente; variações long-tail presentes. |
| **4. CTA** | 15% | Todo botão com texto específico e verbo de ação (nunca "clique aqui"/"enviar"); `href` aponta pro destino certo (WhatsApp, formulário etc.); CTA repetido no início e no fim quando aplicável. |
| **5. Benefício vs. Característica** | 15% | Cada característica/serviço é traduzido em benefício concreto para quem lê, não só listado. |
| **6. Autenticidade, Gramática e Aderência à Spec** | 10% | A copy cobre **100% das seções e requisitos do Checklist da Spec**? Nenhum dado inventado sem fonte; português correto. |

**Nota final = soma ponderada das 6 notas** (ex: nota do critério × peso, somado), arredondada
para 1 casa decimal.

**CRITÉRIO DE CORTE FATAL:** Se a copy omitir *qualquer* seção, funcionalidade ou requisito listado no **Checklist de Requisitos da Spec**, a nota final será **travada em no máximo 8.0**, independentemente da qualidade do texto. Isso força a reprovação automática e obriga o copywriter a implementar o que faltou.

## PASSO 3 — Decisão

- **Nota final ≥ 9,0** → Copy aprovada. Apresente a tabela de notas, a nota final, e um resumo
  breve dos pontos fortes. Não é necessário reescrever nada.
- **Nota final < 9,0** → Copy reprovada. Você **deve**:
  1. Listar de forma objetiva e acionável os pontos fracos por critério (o que exatamente precisa
     mudar — não só "melhorar o SEO", e sim "incluir a keyword no `<h1>` e repetir no primeiro
     parágrafo do Hero").
  2. Acionar a skill `copywriter-textos-site` para reescrever a copy, passando explicitamente essa
     lista de pontos fracos como instrução de correção (mantendo o nicho/diferenciais/CTA originais
     — a reescrita corrige os problemas apontados, não recomeça do zero sem necessidade).
  3. Reavaliar a nova versão do zero, do Passo 2 em diante.
  4. Repetir esse ciclo **no máximo 3 vezes**. Se depois da 3ª tentativa a nota ainda ficar abaixo
     de 9,0, entregue a melhor versão obtida, deixe claro qual é a nota dela e quais pontos fracos
     persistem, e explique ao usuário que pode ser necessário ajustar manualmente algo estrutural
     (ex: falta de informação real do negócio, como diferenciais ou dados concretos, que impede
     nota mais alta sem inventar conteúdo).

## PASSO 4 — Entregar o resultado

Ao final (aprovado ou não), mostre ao usuário:

- Tabela com as 6 notas e a nota final.
- Se houve reescrita: quantas tentativas foram necessárias e o que mudou a cada rodada (resumido,
  não repita o texto inteiro de cada versão intermediária — só a versão final).
- A copy final aprovada (ou a melhor obtida), no mesmo formato de entrega da
  `copywriter-textos-site` (HTML puro, arquivo `.html` via `create_file` + `present_files`, se for
  o caso).

---

## REGRAS IMPORTANTES

- Nunca infle a nota para "aprovar logo" — a rubrica existe justamente para evitar isso. Seja
  rigoroso e específico nas críticas.
- Nunca invente conteúdo (números, depoimentos, prazos) durante a reescrita só para tentar subir a
  nota de "Autenticidade" — isso derruba a nota do mesmo critério.
- Se a copy avaliada não foi gerada pela `copywriter-textos-site` (ex: o usuário colou um texto de
  outro lugar), ainda assim aplique a mesma rubrica e, se reprovada, acione a
  `copywriter-textos-site` para reescrever do zero seguindo as boas práticas dela.
- O limite de 3 tentativas existe para evitar loop infinito quando a nota não sobe por falta de
  informação real do negócio (não por falha de escrita) — nesses casos, avise o usuário em vez de
  insistir indefinidamente.

## CHECKLIST ANTES DE ENTREGAR

- [ ] Os 6 critérios foram avaliados individualmente com justificativa
- [ ] Nota final calculada corretamente (soma ponderada, 1 casa decimal)
- [ ] Se nota < 9,0: pontos fracos acionáveis listados e `copywriter-textos-site` acionada para
      reescrever
- [ ] Ciclo de reavaliação repetido até nota ≥ 9,0 ou até 3 tentativas
- [ ] Resultado final apresentado com tabela de notas + copy aprovada (ou melhor versão obtida)

---

## TRAVAS ANTI-INFLAÇÃO (OBRIGATÓRIO — NUNCA PULE ESTA SEÇÃO)

Estas regras existem porque o avaliador tem um viés comprovado de inflar notas para aprovar rápido e evitar o ciclo de correção. Isso DESTRÓI a qualidade do produto final entregue ao cliente. Cada trava abaixo é uma verificação objetiva. Se qualquer trava falhar, a nota É REDUZIDA automaticamente.

### Trava 1 — Proibição de aprovação na primeira passada
**NUNCA aprove uma copy na primeira avaliação com nota ≥ 9.0.** Na primeira passada, o avaliador DEVE encontrar pelo menos 2 pontos de melhoria concretos e enviar para reescrita. Copy perfeita de primeira NÃO EXISTE. Se você acha que está tudo perfeito, você NÃO está avaliando — está passando pano.

A única exceção é quando a copy já passou por pelo menos 1 ciclo de reescrita anterior.

### Trava 2 — Verificação objetiva do HTML gerado
Antes de dar nota, VERIFIQUE se os seguintes elementos existem LITERALMENTE no HTML da copy:

- [ ] Comentário `<!-- SEO ... -->` no topo com title, meta description e keyword principal?
- [ ] Exatamente 1 tag `<h1>` contendo a keyword principal ou variação dela?
- [ ] Pelo menos 6 tags `<h2>` (uma para cada seção principal do site)?
- [ ] Pelo menos 3 tags `<a>` com href funcional apontando para WhatsApp (`wa.me`) ou seções internas?
- [ ] Todos os CTAs com texto de verbo de ação (verificar que NENHUM diz "Clique aqui", "Enviar", "Saiba mais")?
- [ ] Pelo menos 2 seções com conteúdo substantivo (mais de 3 parágrafos cada)?

**Regra:** Se mais de 2 itens acima estiverem ausentes, a nota de SEO (critério 3) NÃO PODE ser maior que 6/10, e a nota de CTA (critério 4) NÃO PODE ser maior que 6/10.

### Trava 3 — Contagem mínima de conteúdo
- Copy com menos de **1500 palavras** para site institucional com 7+ seções → a nota de "Persuasão" (critério 1) NÃO PODE ser maior que 7/10. Não existe persuasão eficaz em texto superficial.
- Se a seção "Sobre Nós" tem menos de 80 palavras → a nota de "Benefício vs. Característica" (critério 5) NÃO PODE ser maior que 6/10.

### Trava 4 — Justificativa com citação obrigatória
Para CADA critério com nota acima de 8/10, o avaliador DEVE citar pelo menos 1 trecho ESPECÍFICO da copy (frase real, tag HTML, texto do CTA) que justifica a nota alta. Exemplo:
- ✅ "Critério 4: 9/10 — CTAs específicos como 'Reservar uma Mesa Agora' com href para #reservas, e 'Fazer Pedido via WhatsApp' com href wa.me/55..."
- ❌ "Critério 4: 9/10 — CTAs bem escritos" (PROIBIDO — sem citação, nota não é válida)

### Trava 5 — Aderência verificável ao Checklist da Spec
O avaliador DEVE listar CADA item do Checklist de Requisitos da Spec e marcar explicitamente se a copy o cobre ou não. Não é permitido dizer "cobre 100% do checklist" sem listar item por item. Se um único item estiver descoberto, aplicar o critério de corte fatal (nota travada em 8.0 máximo).

### ENTREGÁVEL ADICIONAL — Relatório de Travas
Após a tabela de notas padrão, o avaliador DEVE incluir:

```
🔒 VERIFICAÇÃO ANTI-INFLAÇÃO
─────────────────────────────────────
Palavras totais da copy:    [número]  (mínimo 1500 para site 7+ seções)
Tags <h2> encontradas:      [número]  (mínimo 6)
CTAs com href funcional:    [número]  (mínimo 3)
Primeira passada?           [SIM/NÃO]
Citações por critério:      [número de critérios com citação de trecho]
Checklist items cobertos:   [X] / [total]
```

Se este relatório não estiver presente, a avaliação é considerada INVÁLIDA e deve ser refeita.
