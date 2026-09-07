# SPEC — Site Cicchetti Natal
**Versão:** 1.0  
**Data:** 2026-09-07  
**Autor:** Analista de Requisitos Sênior (IA)  
**Status:** Aprovado para FASE 2  

---

## 1. Visão Geral
Criação do site oficial da unidade Cicchetti Natal, um restaurante focado em gastronomia e aperitivo italiano. O site visa apresentar o conceito sofisticado da casa, disponibilizar cardápios digitais interativos, e facilitar reservas, atraindo o público local e turistas.

## 2. Contexto e Problema
A marca precisa de uma presença online forte, requintada e independente, alinhada à matriz `cicchetti.com.br`, para a filial de Natal (localizada no Midway Mall). O site deve transmitir a experiência veneziana, com navegação fluída, visual atraente (focado em fotografia gastronômica) e facilidade na conversão (reservas de mesa e eventos).

## 3. Objetivos
- OBJ-01: Apresentar o conceito e a arquitetura do Cicchetti Natal de forma imersiva e sofisticada.
- OBJ-02: Disponibilizar menus digitais categorizados para fácil navegação do usuário.
- OBJ-03: Direcionar o usuário para a plataforma de reserva de mesas e eventos de maneira intuitiva.
- OBJ-04: Transmitir informações operacionais (horários, localização) com clareza.

## 4. Atores / Usuários
| Ator | Descrição | Permissões esperadas |
|------|-----------|----------------------|
| Visitante / Cliente | Usuário em busca de informações sobre o restaurante, cardápios e reservas. | Navegação pública, visualização de menu, clique em CTA de reserva e contato. |

## 5. Requisitos Funcionais
### 5.1 Site e Navegação Principal
- **RF-01** [OBRIGATÓRIO]: O sistema deve apresentar uma Home page com destaque rotativo (Prato do Mês, Brunch, Ações especiais).
- **RF-02** [OBRIGATÓRIO]: O sistema deve ter uma seção "O Conceito" que explica a história e proposta veneziana.
- **RF-03** [OBRIGATÓRIO]: O sistema deve apresentar os Cardápios divididos em categorias (Tapas, Massas, Sobremesas, Drinks e Vinhos) de forma interativa.
- **RF-04** [OBRIGATÓRIO]: O sistema deve incluir uma seção específica para Brunch & Almoço Executivo.
- **RF-05** [OBRIGATÓRIO]: O sistema deve ter uma seção de "Reservas & Eventos Privados" com integração ou link para o sistema de reservas online.
- **RF-06** [OBRIGATÓRIO]: O sistema deve possuir integração com Google Maps na seção de Localização (Midway Mall).
- **RF-07** [OBRIGATÓRIO]: O sistema deve exibir horários de funcionamento específicos para cada modalidade e endereçamento claro.

## 6. Requisitos Não Funcionais
- **RNF-01** Design e Identidade: O site deve utilizar a paleta de cores verde botânico/sálvia, terracota, madeira clara, dourado e off-white.
- **RNF-02** Estética: Visual clean, contemporâneo europeu, com foco em fotografias de altíssima qualidade, sem poluição visual.
- **RNF-03** Responsividade: O site deve ser 100% responsivo (mobile-first, já que a maioria acessará via celular).
- **RNF-04** Performance (Core Web Vitals): Carregamento rápido das imagens de alta resolução (uso de lazy loading e formatos webp).

## 7. Fluxos Principais (Happy Path)
**Fluxo 1: Visualização de Menu e Reserva**
1. Usuário acessa a Home do site.
2. Navega pelas categorias do cardápio digital (ex: Tapas).
3. Clica no CTA flutuante ou botão da seção "Reservas".
4. É direcionado para a plataforma parceira (Tagme, Goomer) ou WhatsApp.

## 8. Regras de Negócio e Políticas
- **RN-01**: Cumprimento das diretrizes da LGPD para captura de dados (formulários/reservas).
- **RN-02**: Política de cancelamento de reservas de grandes grupos: aviso com 4h de antecedência.
- **RN-03**: Horários definidos (Almoço Executivo de Seg-Sex; Brunch aos Sáb/Dom 10h-15h; Jantar diariamente).

## 9. Dúvidas e Pontos em Aberto
| # | Dúvida | Para quem | Status |
|---|--------|-----------|--------|
| 1 | O sistema de reservas será Tagme, Goomer ou apenas um redirecionamento pro WhatsApp? | Cliente | Em aberto |
| 2 | Deseja incluir um chat IA (Chatbot) para responder dúvidas frequentes sobre horários/menu? | Cliente | Em aberto |
