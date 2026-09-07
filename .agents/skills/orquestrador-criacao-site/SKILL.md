---
name: orquestrador-criacao-site
description: >
  Orquestra o fluxo COMPLETO de criação de site do zero para um cliente, executando em
  sequência: 1) analista-requisitos (briefing/requisitos), 2) copywriter-textos-site (texto), 
  3) avaliador-copywriting (avaliação do texto), 4) web-designer-senior (layout e design visual com o texto), 
  5) avaliador-design (avaliação do design), 6) gerador-imagens-nano-banana (geração de imagens). Por fim, cria os arquivos HTML, CSS e JS. 
  Use quando o usuário pedir "criar um site completo", "montar o site inteiro", "fazer todo o processo 
  de criação de site", "site completo para [nicho]", "do briefing até o site pronto". 
  NÃO use para UMA etapa isolada — nesses casos acione a skill específica diretamente.
---

# Orquestrador de Criação de Site Completo

Esta skill não substitui as skills que orquestra — ela **encadeia** todo o processo, passando o contexto de uma fase para a próxima, para que o usuário faça um único pedido e receba, ao final, um site pronto, validado e com arquivos criados.

Leia o `SKILL.md` de cada uma das skills orquestradas no momento em que a fase correspondente começar (carregue cada uma sob demanda):

- `analista-requisitos/SKILL.md`
- `copywriter-textos-site/SKILL.md`
- `avaliador-copywriting/SKILL.md`
- `web-designer-senior/SKILL.md`
- `avaliador-design/SKILL.md`
- `gerador-imagens-nano-banana/SKILL.md`
- `desenvolvedor-chat-ia/SKILL.md`
- `seo-analyzer/SKILL.md`
- `seo-implementer/SKILL.md`
- `precificacao-software/SKILL.md`

---

## Visão geral do fluxo

```
FASE 1: Briefing/Requisitos (analista-requisitos)
  ↓
FASE 2: Texto e Copy (copywriter-textos-site)
  ↓
FASE 3: Avaliação do Texto (avaliador-copywriting) ⟲ (Volta para a Fase 2 se nota < 9)
  ↓
FASE 4: Layout e Interface (web-designer-senior)
  ↓
FASE 5: Avaliação do Design (avaliador-design) ⟲ (Volta para a Fase 4 se nota < 9)
  ↓
FASE 6: Geração de Imagens (gerador-imagens-nano-banana)
  ↓
FASE 7: Integração de Inteligência Artificial (desenvolvedor-chat-ia) (Opcional - Perguntar ao usuário)
  ↓
FASE 8: Geração dos Arquivos HTML, CSS e JS
  ↓
FASE 9: Auditoria de SEO e GEO Final (seo-analyzer)
  ↓
FASE 10: Implementação de Correções SEO (seo-implementer)
  ↓
FASE 11: Precificação do Projeto (precificacao-software)
```

Cada fase produz uma saída que vira **insumo** da próxima. Nunca peça ao usuário uma informação que ele já deu em uma fase anterior.

---

## FASE 1 — Levantamento de Requisitos

Siga o processo de `analista-requisitos` focado em um site/landing page:
- Nicho/negócio do cliente e diferencial
- Público-alvo
- Serviços/produtos
- Tipo de site (landing page ou institucional)
- Destino do CTA e Tom de voz
- Referências visuais/estilo

**Saída da Fase 1:** Briefing resumido e a CRIAÇÃO OBRIGATÓRIA do arquivo físico `specs/check/checklist.md` contendo todas as seções, páginas e funcionalidades (ex: formulários, botões) mapeados na Spec. As demais skills irão ler e marcar este arquivo. Confirme brevemente com o usuário e siga.

---

## FASE 2 — Criação de Texto (Copywriting)

Siga o processo de `copywriter-textos-site` usando o briefing e o Checklist da Fase 1.
- Gere o texto de cada seção/página usando copywriting persuasivo (AIDA/PAS) e regras de SEO.
- Entregue a copy completa e estruturada.
- **Marque com `[x]` no Checklist** todas as seções e requisitos textuais que foram implementados.

**Saída da Fase 2:** Texto persuasivo pronto para o site e Checklist atualizado. Se houver algum `[ ]` pendente referente a texto/conteúdo, não avance.

---

## FASE 3 — Avaliação da Copy

Siga o processo de `avaliador-copywriting`.
- Avalie o texto gerado na Fase 2 com rigor.
- Verifique obrigatoriamente se a copy atende a **100% do Checklist de Requisitos**.
- Se a nota for menor que 9/10 ou se faltar algum requisito do checklist, aponte as falhas e **obrigatoriamente acione novamente a skill `copywriter-textos-site`** para reescrever. Repita até a nota ser ≥ 9 e o checklist textual estar 100% coberto.

**Saída da Fase 3:** Texto avaliado, aprovado e finalizado.

---

## FASE 4 — Layout e Design (Web Designer Sênior)

Siga o processo de `web-designer-senior` utilizando o briefing (Fase 1) e o **texto final aprovado (Fase 3)**.
- Declare o bloco `🎨 DECISÃO DE DESIGN` (cores, tipografia, estilo).
- Projete a interface incorporando o texto real aprovado (sem lorem ipsum).
- Gere o código da interface visual.
- **Marque com `[x]` no Checklist** os requisitos técnicos, visuais e de seções implementados no código.

**Saída da Fase 4:** Design de interface com o texto já integrado e Checklist 100% preenchido. Se houver algum `[ ]` pendente, corrija antes de avançar.

---

## FASE 5 — Avaliação do Design

Siga o processo de `avaliador-design`.
- Avalie a estética, usabilidade, cores e harmonia do layout criado na Fase 4.
- Verifique obrigatoriamente se o design implementou **todas as seções da Copy e 100% do Checklist de Requisitos**.
- Se a nota for menor que 9/10 ou se algo foi esquecido, liste as correções e **obrigatoriamente acione novamente a skill `web-designer-senior`** para refazer/ajustar o design. Repita até a nota ser ≥ 9.

**Saída da Fase 5:** Design aprovado com nota de excelência, sem requisitos esquecidos.

---

## FASE 6 — Geração de Imagens (Nano Banana)

Siga o processo da skill `gerador-imagens-nano-banana`.
- Utilize o texto (Fase 3) e as diretrizes visuais aprovadas (Fase 5).
- Gere os prompts otimizados para a criação das imagens de cada seção do site.

**Saída da Fase 6:** Prompts de imagem prontos e estruturados entregues ao usuário para que ele os utilize na ferramenta de geração.

---

## FASE 7 — Integração de Inteligência Artificial (Chatbot)

Após a fase de imagens, **PERGUNTE EXPLICITAMENTE AO USUÁRIO**: "Você deseja incluir um Chat de Inteligência Artificial no seu site?".
- Se a resposta for **NÃO**: Pule para a FASE FINAL.
- Se a resposta for **SIM**: Acione a skill `desenvolvedor-chat-ia`. 
  - Forneça a ela o Briefing aprovado (Fase 1) para gerar a Engenharia de Prompt e o código Frontend criado na Fase 4 para a integração visual.
  - A skill gerará o Chat IA de forma segura (Frontend + Backend Node.js).

**Saída da Fase 7:** Código do chat e do servidor embutidos/preparados para o projeto final.

---

## FASE 8 — Geração de Arquivos HTML, CSS e JS

Após a aprovação do design, geração de imagens (Fase 6) e a inclusão do Chat (Fase 7, se solicitado), é a hora de consolidar o código.
1. Crie os arquivos fisicamente (`.html`, `.css`, `.js`, `server.js`, `.env`).
2. Garanta que as tags de SEO (title, meta description) da copy estejam no HTML.
3. Garanta que o estilo visual e responsividade estejam perfeitos.

**Saída da Fase 8:** O projeto completo gravado em arquivos prontos para uso.

---

## FASE 9 — Auditoria de SEO e GEO Final

Siga o processo da skill `seo-analyzer`.
- Analise os arquivos físicos gerados na Fase 8.
- Gere o relatório detalhado avaliando tanto SEO técnico quanto GEO (Generative Engine Optimization).
- Gere o Plano de Ação Priorizado.

**Saída da Fase 9:** Relatório de auditoria com diagnóstico e plano de ação.

---

## FASE 10 — Implementação de Correções SEO

Acione a skill `seo-implementer`.
- Passe o Plano de Ação gerado na Fase 9.
- O implementador irá modificar fisicamente os arquivos gerados (inserir schemas, ajustar tags meta, corrigir acessibilidade).

**Saída da Fase 10:** Arquivos finais otimizados e prontos para publicação.

---

## FASE 11 — Precificação do Projeto

Acione a skill `precificacao-software`.
- Apresente todo o escopo do que foi construído (páginas, funcionalidades, chat IA, otimização SEO).
- O especialista irá analisar a complexidade técnica, o valor de mercado e entregar uma precificação detalhada para o projeto.

**Saída Final:** Relatório de precificação, relatório de auditoria final e arquivos prontos. Use `present_files` para entregar os arquivos ao usuário.

## Regras Finais
- Se o usuário já enviou o briefing, gere o Checklist de Requisitos antes de ir para a Fase 2.
- O arquivo físico `specs/check/checklist.md` deve ser lido e atualizado fisicamente (`[ ]` para `[x]`) em cada fase pelas respectivas skills, garantindo um estado compartilhado real e evitando esquecimentos.
- Todas as validações (Fase 3 e Fase 5) devem ocorrer de forma transparente e autônoma, buscando a maior nota possível e a aderência de 100% ao checklist antes de apresentar o site final ao usuário.
