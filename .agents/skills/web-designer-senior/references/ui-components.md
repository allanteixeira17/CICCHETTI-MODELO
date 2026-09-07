# Componentes UI — Referência Rápida

## Componentes Essenciais por Categoria

### Navegação
- **Sidebar**: `nav > ul > li > a` com active state, collapse icon
- **Top Nav**: logo + menu items + user avatar + notifications bell
- **Breadcrumb**: `nav[aria-label="breadcrumb"] > ol > li`
- **Tabs**: `role="tablist"` com `aria-selected`
- **Pagination**: prev/next + números com ellipsis

### Dados e Tabelas
- **Data Table**: thead + tbody + footer com total; sorting icons; row actions
- **KPI Card**: ícone + label + valor grande + delta (positivo/negativo)
- **Chart container**: title + legend + chart area + tooltip
- **Empty State**: ilustração + título + subtítulo + CTA

### Formulários
- **Input Group**: label (acima) + input + helper text + error state
- **Select**: aparência customizada com chevron, sem `<select>` nativo feio
- **Checkbox/Radio**: customizados com CSS, não nativos
- **File Upload**: drag & drop zone com preview
- **Date Picker**: inline ou popover

### Feedback e Notificações
- **Toast/Snackbar**: sucesso (verde), erro (vermelho), warning (amarelo), info (azul)
- **Modal**: overlay + container + header + body + footer com actions
- **Tooltip**: `role="tooltip"` aparece no hover/focus
- **Progress Bar**: linear e circular (spinner)
- **Badge**: número ou label em chip colorido

### Cards e Listas
- **Content Card**: imagem + title + description + footer com metadata
- **List Item**: leading icon/avatar + primary text + secondary + trailing action
- **Stat Block**: label + big number + sparkline + trend

---

## Templates HTML Base

### Dashboard Shell
```html
<div class="app-shell">
  <aside class="sidebar">
    <div class="logo">...</div>
    <nav class="nav-menu">...</nav>
    <div class="user-profile">...</div>
  </aside>
  <div class="main-content">
    <header class="topbar">...</header>
    <main class="page-content">...</main>
  </div>
</div>
```

### CSS Variables padrão
```css
:root {
  /* Cores */
  --color-primary: #6366F1;
  --color-primary-hover: #4F46E5;
  --color-accent: #EC4899;
  --color-surface: #FFFFFF;
  --color-surface-2: #F9FAFB;
  --color-border: #E5E7EB;
  --color-text: #111827;
  --color-text-muted: #6B7280;
  
  /* Tipografia */
  --font-display: 'Syne', sans-serif;
  --font-body: 'Plus Jakarta Sans', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  
  /* Espaçamento */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  
  /* Bordas */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-full: 9999px;
  
  /* Sombras */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.10);
  --shadow-lg: 0 8px 30px rgba(0,0,0,0.12);
  --shadow-xl: 0 20px 60px rgba(0,0,0,0.15);
}
```
