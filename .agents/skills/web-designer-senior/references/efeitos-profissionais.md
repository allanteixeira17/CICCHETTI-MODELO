# Efeitos Profissionais para Web Designer Sênior

Biblioteca de efeitos visuais prontos para elevar a percepção de qualidade de um site. Use com intenção — cada efeito deve reforçar hierarquia, contar uma história de scroll ou dar feedback, nunca ser decoração vazia. Prefira CSS puro/vanilla JS; use libs (GSAP, Framer Motion) só se o stack permitir e o pedido justificar.

---

## 1. Scroll Reveal (entrada de elementos ao rolar)

```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```
```js
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => e.isIntersecting && e.target.classList.add('is-visible'));
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
```
Variações: stagger em listas (delay incremental via `transition-delay` calculado por `nth-child` ou inline style), slide lateral (`translateX`), scale-in (`transform: scale(0.9)` → `scale(1)`).

---

## 2. Parallax Sutil

```css
.parallax-bg {
  will-change: transform;
}
```
```js
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  document.querySelectorAll('[data-parallax]').forEach(el => {
    const speed = parseFloat(el.dataset.parallax) || 0.3;
    el.style.transform = `translateY(${y * speed}px)`;
  });
}, { passive: true });
```
Uso: hero background, elementos decorativos, imagens grandes. Evite em textos (prejudica leitura) e limite a `speed` entre 0.1–0.4 para não causar enjoo.

---

## 3. Glassmorphism (vidro fosco)

```css
.glass {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
}
```
Funciona melhor sobre fundos com gradiente, imagem ou blob colorido — nunca sobre fundo sólido plano.

---

## 4. Gradiente Animado (background vivo)

```css
.gradient-animated {
  background: linear-gradient(120deg, var(--primary), var(--accent), var(--primary));
  background-size: 200% 200%;
  animation: gradientShift 8s ease infinite;
}
@keyframes gradientShift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```
Ideal para hero sections e CTAs de destaque. Mantenha duração ≥ 6s para não distrair.

---

## 5. Hover 3D / Tilt em Cards

```js
function applyTilt(el, max = 8) {
  el.addEventListener('mousemove', (e) => {
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(800px) rotateX(${-y * max}deg) rotateY(${x * max}deg)`;
  });
  el.addEventListener('mouseleave', () => {
    el.style.transform = 'perspective(800px) rotateX(0) rotateY(0)';
  });
}
```
```css
.tilt-card { transition: transform 0.15s ease-out; transform-style: preserve-3d; }
```
Ótimo para cards de produto, portfólio e pricing em destaque. Não aplique em listas longas (custo de perf).

---

## 6. Magnetic Button (botão que "gruda" no cursor)

```js
function magneticButton(el, strength = 0.35) {
  el.addEventListener('mousemove', (e) => {
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * strength;
    const y = (e.clientY - r.top - r.height / 2) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  });
  el.addEventListener('mouseleave', () => { el.style.transform = 'translate(0,0)'; });
}
```
Uso: CTA principal do hero, botão de destaque em landing pages premium.

---

## 7. Cursor Customizado

```css
.cursor-dot {
  position: fixed; width: 8px; height: 8px; border-radius: 50%;
  background: var(--primary); pointer-events: none; z-index: 9999;
  transform: translate(-50%, -50%);
  transition: width 0.2s, height 0.2s, background 0.2s;
}
.cursor-dot.hover { width: 40px; height: 40px; background: rgba(var(--primary-rgb), 0.2); }
```
```js
const dot = document.querySelector('.cursor-dot');
window.addEventListener('mousemove', e => {
  dot.style.left = e.clientX + 'px';
  dot.style.top = e.clientY + 'px';
});
document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => dot.classList.add('hover'));
  el.addEventListener('mouseleave', () => dot.classList.remove('hover'));
});
```
Use só em landing pages/portfólios desktop-first — sempre `display: none` em telas touch (`@media (hover: none)`).

---

## 8. Texto com Reveal por Palavra/Letra

```css
.word { display: inline-block; opacity: 0; transform: translateY(100%); animation: wordUp 0.6s ease forwards; }
@keyframes wordUp { to { opacity: 1; transform: translateY(0); } }
```
```js
// Envolver cada palavra em <span class="word" style="animation-delay: Xs">
el.innerHTML = el.textContent.split(' ').map((w, i) =>
  `<span class="word" style="animation-delay:${i * 0.06}s">${w}&nbsp;</span>`
).join('');
```
Ideal para headlines de hero. Não usar em parágrafos longos (cansa a leitura).

---

## 9. Contador Animado (números que sobem)

```js
function animateCounter(el, target, duration = 1500) {
  const start = performance.now();
  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    el.textContent = Math.floor(eased * target).toLocaleString();
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
```
Disparar via IntersectionObserver quando a seção de estatísticas entra em viewport.

---

## 10. Marquee / Scroll Infinito (logos, tags, depoimentos)

```css
.marquee-track {
  display: flex; gap: 3rem; width: max-content;
  animation: marquee 25s linear infinite;
}
@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
.marquee-track:hover { animation-play-state: paused; }
```
Duplique o conteúdo dentro da track (2x) para o loop ficar contínuo.

---

## 11. Blob / Shape Orgânica Animada (fundo decorativo)

```css
.blob {
  border-radius: 42% 58% 65% 35% / 45% 45% 55% 55%;
  animation: blobMorph 8s ease-in-out infinite;
  filter: blur(40px);
  opacity: 0.5;
}
@keyframes blobMorph {
  0%, 100% { border-radius: 42% 58% 65% 35% / 45% 45% 55% 55%; }
  50%      { border-radius: 60% 40% 30% 70% / 50% 60% 40% 50%; }
}
```
Use atrás de heros e seções de destaque com `position: absolute` + `z-index: -1`. Combine com gradiente na cor de acento.

---

## 12. Progress Bar de Scroll (topo da página)

```css
.scroll-progress {
  position: fixed; top: 0; left: 0; height: 3px;
  background: var(--accent); z-index: 9999; width: 0%;
  transition: width 0.1s linear;
}
```
```js
window.addEventListener('scroll', () => {
  const h = document.documentElement;
  const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  document.querySelector('.scroll-progress').style.width = pct + '%';
});
```
Ótimo para blogs, artigos longos e páginas de storytelling.

---

## 13. Botão com Efeito Ripple (clique)

```css
.ripple { position: relative; overflow: hidden; }
.ripple-effect {
  position: absolute; border-radius: 50%; transform: scale(0);
  background: rgba(255,255,255,0.4); animation: rippleAnim 0.6s ease-out;
}
@keyframes rippleAnim { to { transform: scale(4); opacity: 0; } }
```
```js
el.addEventListener('click', function (e) {
  const circle = document.createElement('span');
  const r = this.getBoundingClientRect();
  circle.className = 'ripple-effect';
  circle.style.left = (e.clientX - r.left) + 'px';
  circle.style.top = (e.clientY - r.top) + 'px';
  this.appendChild(circle);
  circle.addEventListener('animationend', () => circle.remove());
});
```

---

## 14. Image Reveal com Clip-path (fotos "abrindo")

```css
.img-reveal {
  clip-path: inset(0 100% 0 0);
  transition: clip-path 1s cubic-bezier(0.77, 0, 0.175, 1);
}
.img-reveal.is-visible { clip-path: inset(0 0% 0 0); }
```
Combine com IntersectionObserver (mesmo padrão do item 1). Excelente para portfólios e cases.

---

## 15. Sticky Section com Pin (storytelling de scroll)

```css
.pin-section {
  position: sticky; top: 0; height: 100vh;
  display: flex; align-items: center; justify-content: center;
}
```
Use quando o conteúdo dentro da section muda (via scroll-linked JS ou troca de classe) enquanto o container fica fixo — comum em páginas de produto que "explicam" um processo em etapas.

---

## Regras de Uso

- **Performance primeiro**: prefira `transform` e `opacity` (GPU-accelerated); evite animar `width`, `height`, `top/left` diretamente.
- **`prefers-reduced-motion`**: sempre envolva animações não-essenciais:
  ```css
  @media (prefers-reduced-motion: reduce) {
    * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
  }
  ```
- **Mobile**: desative cursor customizado, tilt 3D e parallax pesado em telas touch (`@media (hover: hover) and (pointer: fine)`).
- **Dosagem**: 1 efeito de assinatura (hero) + 2–3 efeitos de suporte (scroll reveal, hover) já elevam a percepção de qualidade. Empilhar muitos efeitos ao mesmo tempo passa impressão de poluição, não de sofisticação.
- **Coerência com a direção estética**: o efeito escolhido deve combinar com o estilo declarado no bloco `🎨 DECISÃO DE DESIGN` — glassmorphism pede fundo com gradiente/imagem; brutalism pede movimento seco (sem easing suave, sem blur).
