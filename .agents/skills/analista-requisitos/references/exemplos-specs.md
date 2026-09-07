# Exemplos de Specs Completas

---

## Exemplo 1 — Melhoria de Sistema Existente (a partir de transcrição)

**Input original (transcrição de reunião):**
> "O cliente reclamou que não consegue ver o histórico de pedidos antigos. Ele disse que fica perdido quando precisa consultar uma compra de 6 meses atrás. Também pediu pra poder baixar nota fiscal direto do sistema."

---

**SPEC gerada:**

# SPEC — Histórico de Pedidos Ampliado com Download de NF
**Versão:** 1.0 | **Status:** Rascunho para Validação

## 1. Visão Geral
Ampliação do módulo de pedidos para permitir consulta ao histórico completo sem limitação de período, e download de nota fiscal diretamente pela interface do cliente.

## 2. Contexto e Problema
Atualmente, o sistema exibe apenas pedidos dos últimos 30 dias. Clientes que precisam consultar compras antigas não encontram as informações, gerando chamados de suporte e insatisfação.

## 5. Requisitos Funcionais

### 5.1 Histórico de Pedidos
- **RF-01** [OBRIGATÓRIO]: O sistema deve exibir todos os pedidos do cliente, sem limitação de período
- **RF-02** [OBRIGATÓRIO]: O cliente deve poder filtrar pedidos por: período (data inicial/final), status e valor
- **RF-03** [DESEJÁVEL]: O sistema deve exibir um indicador de carregamento durante a busca de pedidos antigos

### 5.2 Download de Nota Fiscal
- **RF-04** [OBRIGATÓRIO]: Cada pedido com NF emitida deve exibir botão "Baixar NF"
- **RF-05** [OBRIGATÓRIO]: O download deve gerar arquivo PDF da nota fiscal
- **RF-06** [OBRIGATÓRIO]: Pedidos sem NF emitida devem exibir status "NF em processamento" **[REQUER DEFINIÇÃO: prazo de emissão — ver Dúvida #1]**

## 13. Dúvidas e Pontos em Aberto
| # | Dúvida | Para quem | Status |
|---|--------|-----------|--------|
| 1 | Qual o prazo máximo para emissão de NF após pedido? | Financeiro | Em aberto |
| 2 | As NFs são armazenadas no sistema atual ou em sistema externo (ERP)? | TI | Em aberto |
| 3 | Há limitação de quantos pedidos podem ser exibidos por performance? | TI | Em aberto |

---

## Exemplo 2 — Sistema Novo (a partir de briefing)

**Input original:**
> "Quero um sistema pra controlar as escalas dos meus funcionários. Hoje faço tudo em planilha e fica uma bagunça. Preciso saber quem tá de folga, quem tá de férias e conseguir trocar turnos."

---

**SPEC gerada:**

# SPEC — Sistema de Gestão de Escalas
**Versão:** 1.0 | **Status:** Rascunho para Validação

## 1. Visão Geral
Sistema web para gestão de escalas de trabalho, substituindo planilhas manuais. Permite visualização de disponibilidade, controle de folgas e férias, e solicitação de troca de turnos.

## 4. Atores
| Ator | Descrição |
|------|-----------|
| Gestor | Cria e gerencia escalas, aprova trocas e férias |
| Funcionário | Consulta sua escala, solicita folgas e trocas |

## 5. Requisitos Funcionais

### 5.1 Cadastro e Configuração
- **RF-01** [OBRIGATÓRIO]: O gestor deve poder cadastrar funcionários com nome, cargo e turno padrão
- **RF-02** [OBRIGATÓRIO]: O sistema deve suportar turnos configuráveis (manhã, tarde, noite, personalizado) **[REQUER DEFINIÇÃO: quais turnos existem na operação?]**

### 5.2 Visualização de Escala
- **RF-03** [OBRIGATÓRIO]: O sistema deve exibir escala semanal e mensal em formato de calendário
- **RF-04** [OBRIGATÓRIO]: A escala deve indicar visualmente: trabalhando, folga, férias, feriado
- **RF-05** [DESEJÁVEL]: Funcionários devem receber notificação quando a escala do mês seguinte for publicada

### 5.3 Gestão de Folgas e Férias
- **RF-06** [OBRIGATÓRIO]: O funcionário deve poder solicitar folga com justificativa
- **RF-07** [OBRIGATÓRIO]: O gestor deve aprovar ou recusar solicitações com campo de observação
- **RF-08** [OBRIGATÓRIO]: O sistema deve controlar o saldo de dias de férias por funcionário **[REQUER DEFINIÇÃO: regra de acúmulo de férias]**

### 5.4 Troca de Turnos
- **RF-09** [OBRIGATÓRIO]: O funcionário deve poder propor troca de turno com outro colega
- **RF-10** [OBRIGATÓRIO]: O colega deve aceitar ou recusar a proposta
- **RF-11** [OBRIGATÓRIO]: A troca só deve ser efetivada após aprovação do gestor

## 14. Sugestões de Melhoria
- App mobile para acesso rápido à escala (funcionários raramente usam computador)
- Integração com folha de pagamento para desconto automático de faltas
- Relatório de horas extras e banco de horas
