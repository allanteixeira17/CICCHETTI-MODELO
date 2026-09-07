# Boas Práticas para Especificação de Requisitos

Referência estendida baseada no IEEE 830 e metodologias ágeis modernas.

---

## Classificação de Requisitos (MoSCoW)

| Prioridade | Significado | Quando usar |
|------------|-------------|-------------|
| **OBRIGATÓRIO** (Must Have) | Sem isso, o sistema não funciona | Requisitos de negócio críticos |
| **DESEJÁVEL** (Should Have) | Importante, mas há workaround | Melhorias significativas de UX |
| **FUTURO** (Could Have) | Nice-to-have, baixo impacto | Features de diferenciação |
| **FORA** (Won't Have) | Explicitamente excluído desta entrega | Evitar scope creep |

---

## Critérios de Aceite com Gherkin (BDD)

Formato padrão para critérios verificáveis:

```
Dado que [contexto inicial]
Quando [ação do usuário ou evento]
Então [resultado esperado no sistema]
E [resultado adicional, se houver]
```

**Exemplo:**
```
Dado que o usuário está autenticado e tem itens no carrinho
Quando ele clica em "Finalizar Compra"
Então o sistema deve exibir o resumo do pedido com valor total
E deve solicitar confirmação do método de pagamento
```

---

## Tipos de Requisitos Não Funcionais

### Performance
- Tempo de resposta: "A busca deve retornar resultados em menos de 2 segundos para 95% das requisições"
- Throughput: "O sistema deve suportar 500 requisições simultâneas"
- Latência: "A latência P99 não deve exceder 500ms"

### Segurança
- Autenticação: qual mecanismo (JWT, OAuth2, SSO)
- Autorização: RBAC, ABAC, permissões por recurso
- Dados sensíveis: criptografia em trânsito e em repouso
- Auditoria: quais ações devem ser logadas

### Usabilidade
- Acessibilidade: WCAG 2.1 AA
- Responsividade: breakpoints mobile/tablet/desktop
- Internacionalização: idiomas suportados

### Disponibilidade / Resiliência
- SLA: "99.9% de uptime = máx 8.7h de downtime/ano"
- RPO/RTO: Recovery Point Objective / Recovery Time Objective
- Estratégia de fallback em caso de falha de integrações

---

## Identificação de Stakeholders

Ao analisar o input, identifique e documente:

| Tipo | Quem são | O que precisam |
|------|----------|----------------|
| **Usuário final** | Quem usa o sistema no dia a dia | Facilidade, velocidade, confiabilidade |
| **Administrador** | Quem configura e mantém | Controle, visibilidade, rastreabilidade |
| **Integrador** | Sistemas externos que consomem/produzem dados | Contratos de API estáveis, documentação |
| **Negócio** | Quem define regras e objetivos | Aderência às regras, KPIs alcançados |
| **Regulatório** | LGPD, compliance, auditoria | Logs, consentimento, retenção de dados |

---

## Armadilhas Comuns em Requisitos

### Requisitos Incompletos
❌ "O usuário pode filtrar os dados"
✅ "O usuário pode filtrar a lista de pedidos por: status (aberto/fechado/cancelado), período (data inicial e final), e valor mínimo/máximo"

### Requisitos Ambíguos
❌ "O sistema deve processar pedidos rapidamente"
✅ "O sistema deve processar e confirmar pedidos em até 3 segundos após a submissão"

### Requisitos Contraditórios
Sinalize quando dois requisitos se conflitam:
> ⚠️ **CONFLITO DETECTADO**: RF-03 exige aprovação manual de todos os pedidos acima de R$1.000, enquanto RF-07 exige processamento automático 24/7. Requer decisão do Product Owner.

### Requisitos Desnecessários
Se identificar um requisito que não serve ao objetivo declarado, questione:
> 💡 **Questão**: O requisito RF-12 (exportar para PDF) foi solicitado, mas o objetivo declarado é agilizar o processo interno. Vale a pena incluir nesta entrega?

---

## Estimativa de Complexidade (para orientar o time)

Ao finalizar a spec, inclua uma estimativa qualitativa:

| Área | Complexidade | Justificativa |
|------|-------------|---------------|
| Frontend | Média | 3 telas novas + componentes de tabela |
| Backend | Alta | Lógica de negócio complexa + 2 integrações |
| Banco de dados | Baixa | 2 novas tabelas, sem migração complexa |
| Integrações | Alta | API externa sem documentação completa |
| Total estimado | Alta | - |

---

## Checklist Final da Spec

Antes de entregar, verifique:

- [ ] Todos os atores foram identificados
- [ ] Cada requisito tem um ID único
- [ ] Requisitos são verificáveis (podem ser testados)
- [ ] Fluxos alternativos e de erro foram cobertos
- [ ] Critérios de aceite existem para os requisitos OBRIGATÓRIOS
- [ ] Dúvidas foram listadas e direcionadas
- [ ] Fora de escopo foi declarado explicitamente
- [ ] Integrações e dependências foram mapeadas
- [ ] Não há requisitos contraditórios não resolvidos
