# Design Patterns para Web Designer Sênior

## Padrões de Layout por Tipo de Sistema

### Dashboard / Admin Panel
- **Padrão recomendado**: Sidebar fixa + área de conteúdo com header
- **Variações**:
  - Top nav + content area (mais leve, ideal para SaaS B2C)
  - Side nav colapsável (ideal para sistemas com muitos módulos)
  - Holy grail layout (sidebar + main + aside)
- **Componentes típicos**: KPI cards, charts, tabelas paginadas, filtros, notificações

### E-commerce / Catálogo
- **Padrão recomendado**: Header global + grid de produtos + filtros laterais
- **Variações**: Masonry grid, lista vs grid toggle, filtros inline vs sidebar
- **Componentes típicos**: Product card, cart preview, breadcrumb, rating, badges

### Landing Page / Marketing
- **Padrão recomendado**: Full-width sections com scroll vertical
- **Variações**: One-page vs multi-page, dark vs light, minimal vs rich
- **Componentes típicos**: Hero, features grid, testimonials, pricing, CTA

### Form-heavy / Cadastro
- **Padrão recomendado**: Wizard multi-step ou formulário único com seções
- **Variações**: Progressive disclosure, inline validation, smart defaults
- **Componentes típicos**: Form groups, progress indicator, field validation, preview

### Aplicativo Mobile-first
- **Padrão recomendado**: Bottom navigation + content area
- **Variações**: Tab bar, hamburger menu, gestures
- **Componentes típicos**: Cards, FAB, bottom sheet, pull-to-refresh

---

## Paletas por Segmento

### Fintech / Banking
```css
--primary: #0D1B2A;      /* Azul navy profundo */
--accent: #00C896;        /* Verde emerald */
--surface: #F8FAFC;
--text: #1E293B;
```

### Saúde / Clínica
```css
--primary: #0EA5E9;       /* Sky blue confiável */
--accent: #10B981;        /* Verde saúde */
--surface: #FAFAFA;
--text: #374151;
```

### Agência / Criativo
```css
--primary: #18181B;       /* Preto quase puro */
--accent: #F97316;        /* Laranja vibrante */
--surface: #FAFAF9;
--text: #09090B;
```

### SaaS B2B
```css
--primary: #6366F1;       /* Indigo moderno */
--accent: #EC4899;        /* Pink acento */
--surface: #FFFFFF;
--text: #111827;
```

### E-commerce Premium
```css
--primary: #292524;       /* Warm black */
--accent: #D97706;        /* Âmbar ouro */
--surface: #FFFBEB;
--text: #1C1917;
```

---

## Tipografia por Estilo

### Corporativo Sério
- Display: `Playfair Display` ou `DM Serif Display`
- Body: `DM Sans` ou `Plus Jakarta Sans`

### SaaS Moderno
- Display: `Syne` ou `Bricolage Grotesque`
- Body: `Outfit` ou `Nunito Sans`

### Minimalista Clean
- Display: `Cormorant Garamond` ou `Instrument Serif`
- Body: `Karla` ou `Work Sans`

### Tech / Developer
- Display: `Space Grotesk` (permitido apenas aqui) ou `Geist`
- Body: `IBM Plex Sans` ou `Fira Sans`

### Criativo / Agência
- Display: `Clash Display` ou `Cabinet Grotesk`
- Body: `Satoshi` ou `General Sans`

---

## Micro-interações Recomendadas

```css
/* Hover de card com elevação */
.card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.12);
}

/* Botão com feedback tátil */
.btn:active {
  transform: scale(0.97);
}

/* Input focus ring com cor primária */
.input:focus {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}

/* Skeleton loading */
.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```
