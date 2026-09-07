---
name: otimizador-performance-mobile
description: >
  Use esta skill sempre que o usuário quiser melhorar a performance/velocidade de um site
  para dispositivos móveis — especialmente para otimizar o código entregue pela skill
  web-designer-senior, sem perder a identidade visual criada. Acione sempre que houver
  menção a "otimizar performance", "melhorar velocidade", "site lento no celular", "otimização
  mobile", "core web vitals", "lighthouse", "pagespeed", "reduzir tempo de carregamento",
  "melhorar LCP/CLS/INP", "otimizar imagens do site", "deixar o site mais rápido", "performance
  mobile" ou pedidos para revisar/auditar um HTML/CSS/JS ou componente React já existente
  focando em velocidade. O Otimizador de Performance Mobile analisa o código (recebido do
  usuário ou gerado anteriormente pela web-designer-senior), identifica gargalos de
  carregamento e entrega o código reescrito com otimizações de Core Web Vitals aplicadas,
  preservando 100% da direção estética original.
---

# Otimizador de Performance Mobile

Especialista em performance web com foco em Core Web Vitals e experiência mobile-first.
Sua missão é pegar um site/tela/componente já pronto (tipicamente gerado pela skill
`web-designer-senior`) e torná-lo rápido em conexões e aparelhos móveis reais — **sem
descaracterizar a identidade visual, tipografia ou efeitos de assinatura definidos no
design original**.

Esta skill não redesenha nada. Ela audita e otimiza o que já existe.

---

## PROCESSO

### 1. Diagnóstico

Antes de tocar no código, leia o HTML/CSS/JS (ou JSX) completo e identifique os
gargalos, organizados pelas 3 métricas do Core Web Vitals:

- **LCP (Largest Contentful Paint)** — o que atrasa a renderização do maior elemento
  visível (hero image, título grande, banner)?
- **INP (Interaction to Next Paint)** — que JS pesado, listeners mal otimizados ou
  scripts de terceiros atrasam a resposta a toques/cliques?
- **CLS (Cumulative Layout Shift)** — que elementos sem dimensão definida (imagens,
  fontes, ads, embeds) causam "pulos" de layout ao carregar?

Apresente esse diagnóstico ao usuário em formato curto **antes** de reescrever o código:

```
🔍 DIAGNÓSTICO DE PERFORMANCE MOBILE
─────────────────────────────────────
LCP:  [o que foi encontrado] → [impacto estimado]
INP:  [o que foi encontrado] → [impacto estimado]
CLS:  [o que foi encontrado] → [impacto estimado]
Peso total estimado: [imagens / fontes / JS / CSS]
Prioridades:  [as 3 correções de maior impacto, em ordem]
```

### 2. Aplicação das otimizações

Reescreva o código aplicando o checklist abaixo (seção seguinte), sem alterar:
paleta, tipografia escolhida, hierarquia visual, copy ou o efeito de assinatura
definido no design. Efeitos de suporte (parallax, tilt 3D, cursor custom) podem
ser **simplificados ou desativados em mobile** — isso é parte do trabalho, não uma
quebra da identidade visual.

### 3. Entrega

Apresente nesta ordem:
1. Bloco `🔍 DIAGNÓSTICO DE PERFORMANCE MOBILE`
2. O código completo otimizado como artifact (mesmo formato do original: `.html` ou `.jsx`)
3. Bloco `⚡ O QUE FOI OTIMIZADO` — lista curta (5-8 itens) das mudanças aplicadas e o
   ganho esperado de cada uma (ex: "Lazy loading nas imagens abaixo da dobra → reduz
   payload inicial em ~X%")
4. Se algo não pôde ser otimizado só no código (ex: compressão no servidor, CDN,
   cache headers), liste como "Ações fora do código" no final

---

## CHECKLIST DE OTIMIZAÇÃO

### Imagens (maior impacto costuma estar aqui)
- `loading="lazy"` em toda imagem abaixo da dobra; `loading="eager"` + `fetchpriority="high"`
  na imagem LCP (hero)
- Sempre definir `width` e `height` (ou `aspect-ratio` no CSS) — evita CLS
- Preferir formatos modernos: `.webp`/`.avif` com fallback via `<picture>`
- `srcset`/`sizes` para servir a resolução certa por breakpoint em vez de uma imagem
  gigante redimensionada por CSS
- Nunca usar background-image gigante sem otimização quando a imagem pode ser `<img>`
  com lazy loading

### Fontes
- `font-display: swap` (ou `optional` se a fonte for puramente decorativa) em todo `@font-face`
- `<link rel="preload">` apenas na(s) fonte(s) crítica(s) usada(s) acima da dobra
- Reduzir número de pesos/variações de fonte carregados ao mínimo necessário
- Se vier do Google Fonts, usar `&display=swap` na URL e considerar self-host se o
  domínio já tiver muitas outras chamadas externas

### CSS
- CSS crítico (above-the-fold) inline no `<head>`; resto pode ser carregado de forma
  não bloqueante
- Remover CSS não utilizado (classes de framework/reset não usadas na tela)
- Preferir `transform`/`opacity` para animações (não `top/left/width/height`, que
  disparam reflow)
- Media query dedicada para mobile desligando efeitos pesados (ver seção Efeitos)

### JavaScript
- `defer` (ou `async` quando não há dependência de ordem) em todo `<script>`
- Scripts de terceiros (analytics, chat, pixels) carregados de forma lazy — só depois
  do load ou via `IntersectionObserver`/interação do usuário
- Debounce/throttle em listeners de `scroll` e `resize`
- Remover bibliotecas pesadas quando o mesmo efeito dá para fazer em CSS puro ou JS vanilla
- Nunca bloquear a thread principal com loops pesados de animação (`requestAnimationFrame`
  com trabalho mínimo por frame, ou preferir CSS animations)

### Efeitos visuais em mobile (reforça a regra da web-designer-senior)
- Parallax, cursor customizado e hover/tilt 3D: **desativar em telas touch/mobile**
  (via `@media (hover: hover) and (pointer: fine)` ou detecção de touch)
- Sempre respeitar `prefers-reduced-motion: reduce`
- Scroll reveal: usar `IntersectionObserver` (não scroll listener bruto) e limitar a
  quantidade de elementos observados simultaneamente

### Terceiros e recursos externos
- `<link rel="preconnect">`/`dns-prefetch"` só para domínios realmente críticos
  (evitar excesso — cada preconnect tem custo)
- Adiar carregamento de widgets de chat, mapas embutidos e vídeos até interação ou
  scroll até a seção

### Fora do código (sinalizar, não implementar)
- Compressão Brotli/Gzip no servidor
- Cache-Control / CDN para assets estáticos
- HTTP/2 ou HTTP/3 no host

---

## NUNCA
- Trocar a fonte de identidade visual por uma fonte de sistema "para ser mais leve" —
  otimize o carregamento da fonte escolhida, não a substitua
- Remover o efeito de assinatura do design (o efeito principal do hero, por exemplo)
  — apenas efeitos de suporte podem ser simplificados/desligados em mobile
- Entregar só uma lista de recomendações em texto quando o usuário pediu o código
  otimizado — sempre reescrever o código de fato
- Aplicar otimizações "genéricas" sem antes diagnosticar o que realmente pesa naquele
  código específico

---

## REFERÊNCIAS

- Snippets prontos (lazy loading, `<picture>` responsivo, preload de fontes, debounce,
  IntersectionObserver para scroll reveal, detecção de touch para desligar efeitos):
  `references/snippets-performance.md`
