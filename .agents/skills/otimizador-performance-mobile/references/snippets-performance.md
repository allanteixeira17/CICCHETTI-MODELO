# Snippets de Performance Mobile

Trechos prontos para aplicar durante a otimização. Adapte nomes de classes/variáveis
ao código que está sendo otimizado.

## Imagem responsiva com lazy loading e sem CLS

```html
<picture>
  <source type="image/avif" srcset="hero-480.avif 480w, hero-960.avif 960w, hero-1600.avif 1600w" sizes="100vw">
  <source type="image/webp" srcset="hero-480.webp 480w, hero-960.webp 960w, hero-1600.webp 1600w" sizes="100vw">
  <img
    src="hero-960.jpg"
    width="1600" height="900"
    alt="Descrição real da imagem"
    loading="eager" fetchpriority="high" decoding="async"
  >
</picture>

<!-- imagens abaixo da dobra -->
<img src="card.jpg" width="600" height="400" alt="..." loading="lazy" decoding="async">
```

## Fonte com font-display e preload seletivo

```html
<link rel="preload" href="/fonts/Sora-Bold.woff2" as="font" type="font/woff2" crossorigin>

<style>
@font-face {
  font-family: "Sora";
  src: url("/fonts/Sora-Bold.woff2") format("woff2");
  font-weight: 700;
  font-display: swap;
}
</style>
```

Google Fonts (adicionar `display=swap` sempre):
```html
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;700&display=swap" rel="stylesheet">
```

## Script não bloqueante

```html
<script src="/js/app.js" defer></script>

<!-- script de terceiro (ex: chat widget) carregado só após interação/scroll -->
<script>
  let widgetLoaded = false;
  function loadChatWidget() {
    if (widgetLoaded) return;
    widgetLoaded = true;
    const s = document.createElement("script");
    s.src = "https://widget.exemplo.com/chat.js";
    document.body.appendChild(s);
  }
  window.addEventListener("scroll", loadChatWidget, { once: true, passive: true });
  document.addEventListener("pointerdown", loadChatWidget, { once: true });
</script>
```

## Debounce/throttle para scroll e resize

```js
function throttle(fn, wait) {
  let last = 0;
  return (...args) => {
    const now = Date.now();
    if (now - last >= wait) {
      last = now;
      fn(...args);
    }
  };
}

window.addEventListener("scroll", throttle(handleScroll, 100), { passive: true });
window.addEventListener("resize", throttle(handleResize, 200));
```

## Scroll reveal performático com IntersectionObserver

```js
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target); // para de observar após revelar
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll("[data-reveal]").forEach((el) => revealObserver.observe(el));
```

```css
[data-reveal] {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
[data-reveal].is-visible {
  opacity: 1;
  transform: translateY(0);
}
@media (prefers-reduced-motion: reduce) {
  [data-reveal] { opacity: 1; transform: none; transition: none; }
}
```

## Desligar efeitos pesados em touch/mobile

```css
/* parallax, tilt 3D e cursor customizado só em dispositivos com mouse real */
@media (hover: hover) and (pointer: fine) {
  .card { transition: transform 0.3s ease; }
  .card:hover { transform: perspective(800px) rotateX(4deg) rotateY(-4deg); }
}

/* em touch, sem transform 3D nenhum — evita jank */
@media (hover: none), (pointer: coarse) {
  .card { transform: none !important; }
}
```

```js
const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
if (isFinePointer) {
  initCustomCursor();
  initParallax();
}
```

## CSS crítico inline (above-the-fold) + resto assíncrono

```html
<head>
  <style>
    /* apenas o CSS necessário para o hero/primeira dobra */
    :root { --bg: #0e0e10; --text: #f5f5f5; }
    body { margin: 0; background: var(--bg); color: var(--text); }
    .hero { min-height: 100svh; display: flex; align-items: center; }
  </style>

  <link rel="preload" href="/css/full.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="/css/full.css"></noscript>
</head>
```
