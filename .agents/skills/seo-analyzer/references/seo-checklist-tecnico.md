# SEO Checklist Técnico — Referência Completa

## 1. META TAGS ESSENCIAIS

### Title Tag
```html
<title>Palavra-chave Principal | Nome do Site</title>
```
- Mínimo: 30 caracteres | Máximo: 60 caracteres (550px em pixels)
- Palavra-chave no início (mais peso)
- Separadores recomendados: `|`, `—`, `-`
- Sem CAPS LOCK excessivo

### Meta Description
```html
<meta name="description" content="Descrição persuasiva com palavra-chave, benefício claro e call-to-action. Entre 120–160 caracteres.">
```
- Não afeta ranking diretamente, mas afeta CTR (click-through rate)
- Cada página deve ter uma meta description única

### Meta Robots
```html
<!-- Permitir indexação (padrão, pode omitir) -->
<meta name="robots" content="index, follow">

<!-- Bloquear indexação de página específica -->
<meta name="robots" content="noindex, nofollow">

<!-- Permitir indexar mas não seguir links -->
<meta name="robots" content="index, nofollow">
```

### Canonical
```html
<link rel="canonical" href="https://www.seusite.com.br/pagina/">
```
- Sempre com protocolo completo (https://)
- Consistência: com ou sem `/` final, sempre igual
- Sem parâmetros de rastreamento no canonical

### Viewport (obrigatório para mobile)
```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

### Charset
```html
<meta charset="UTF-8">
```

---

## 2. OPEN GRAPH E TWITTER CARDS

### Open Graph completo
```html
<meta property="og:type" content="website">
<meta property="og:title" content="Título da Página">
<meta property="og:description" content="Descrição para redes sociais.">
<meta property="og:url" content="https://www.seusite.com.br/pagina/">
<meta property="og:image" content="https://www.seusite.com.br/img/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:site_name" content="Nome do Site">
<meta property="og:locale" content="pt_BR">
```

### Twitter Cards
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Título da Página">
<meta name="twitter:description" content="Descrição para Twitter.">
<meta name="twitter:image" content="https://www.seusite.com.br/img/twitter-image.jpg">
```

---

## 3. SCHEMA MARKUP (JSON-LD)

### Organization (para homepage)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Nome da Empresa",
  "url": "https://www.seusite.com.br",
  "logo": "https://www.seusite.com.br/img/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+55-84-9999-9999",
    "contactType": "customer service"
  },
  "sameAs": [
    "https://www.facebook.com/suaempresa",
    "https://www.instagram.com/suaempresa"
  ]
}
</script>
```

### WebSite com SearchAction
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Nome do Site",
  "url": "https://www.seusite.com.br",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.seusite.com.br/busca?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
</script>
```

### Article (para blog/notícias)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Título do Artigo",
  "description": "Descrição do artigo",
  "image": "https://www.seusite.com.br/img/artigo.jpg",
  "author": {
    "@type": "Person",
    "name": "Nome do Autor"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Nome do Site",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.seusite.com.br/img/logo.png"
    }
  },
  "datePublished": "2024-01-01",
  "dateModified": "2024-01-15"
}
</script>
```

### LocalBusiness (para negócios locais)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Nome do Negócio",
  "image": "https://www.seusite.com.br/img/foto.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua Exemplo, 123",
    "addressLocality": "Natal",
    "addressRegion": "RN",
    "postalCode": "59000-000",
    "addressCountry": "BR"
  },
  "telephone": "+55-84-9999-9999",
  "openingHours": "Mo-Fr 09:00-18:00",
  "url": "https://www.seusite.com.br"
}
</script>
```

### BreadcrumbList
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.seusite.com.br"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Categoria",
      "item": "https://www.seusite.com.br/categoria/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Página Atual"
    }
  ]
}
</script>
```

### FAQPage
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Qual é a pergunta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Esta é a resposta completa para a pergunta."
      }
    }
  ]
}
</script>
```

---

## 4. ROBOTS.TXT — MODELOS

### Modelo básico (permitir tudo)
```
User-agent: *
Allow: /
Sitemap: https://www.seusite.com.br/sitemap.xml
```

### Modelo com bloqueios seletivos
```
User-agent: *
Disallow: /admin/
Disallow: /checkout/
Disallow: /conta/
Disallow: /busca/
Allow: /

# Googlebot específico
User-agent: Googlebot
Disallow: /staging/

Sitemap: https://www.seusite.com.br/sitemap.xml
```

### ⚠️ Erros comuns no robots.txt
```
# ERRADO — bloqueia o site inteiro
User-agent: *
Disallow: /

# ERRADO — sitemap sem protocolo
Sitemap: www.seusite.com.br/sitemap.xml

# ERRADO — bloqueia CSS e JS (prejudica renderização do Google)
Disallow: /assets/
Disallow: *.css
Disallow: *.js
```

---

## 5. SITEMAP XML — MODELO

### Sitemap simples
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.seusite.com.br/</loc>
    <lastmod>2024-01-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.seusite.com.br/sobre/</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

### Valores de priority
| Tipo de Página | Priority |
|---------------|----------|
| Homepage | 1.0 |
| Categorias principais | 0.8 |
| Páginas de produto/serviço | 0.7 |
| Posts de blog | 0.6 |
| Páginas secundárias | 0.4–0.5 |
| Tags, arquivos | 0.3 |

---

## 6. PERFORMANCE — BOAS PRÁTICAS NO HTML

### Preload de recursos críticos
```html
<!-- Preload da imagem LCP (hero) -->
<link rel="preload" as="image" href="/img/hero.webp">

<!-- Preload de fonte -->
<link rel="preload" as="font" href="/fonts/Inter.woff2" crossorigin>

<!-- Preconnect para domínios externos -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

### Scripts assíncronos
```html
<!-- Analytics e scripts não-críticos -->
<script src="analytics.js" defer></script>
<script src="widget.js" async></script>

<!-- NÃO fazer (bloqueia renderização) -->
<script src="script.js"></script>
```

### Imagens otimizadas
```html
<!-- Lazy loading + dimensões definidas -->
<img 
  src="produto.webp" 
  alt="Descrição do produto com palavra-chave"
  width="800" 
  height="600"
  loading="lazy"
>

<!-- Imagem LCP (acima do fold) — NÃO usar lazy loading -->
<img 
  src="hero.webp" 
  alt="Descrição do hero"
  width="1200" 
  height="500"
  fetchpriority="high"
>
```

### Picture com formatos modernos
```html
<picture>
  <source srcset="imagem.avif" type="image/avif">
  <source srcset="imagem.webp" type="image/webp">
  <img src="imagem.jpg" alt="Descrição" width="800" height="600" loading="lazy">
</picture>
```

---

## 7. ESTRUTURA HTML SEMÂNTICA

### Template HTML básico otimizado para SEO
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
  <!-- SEO Básico -->
  <title>Palavra-chave Principal | Nome do Site</title>
  <meta name="description" content="Descrição persuasiva 120–160 chars.">
  <link rel="canonical" href="https://www.seusite.com.br/pagina/">
  
  <!-- Open Graph -->
  <meta property="og:title" content="Título">
  <meta property="og:description" content="Descrição">
  <meta property="og:image" content="https://www.seusite.com.br/og.jpg">
  <meta property="og:url" content="https://www.seusite.com.br/pagina/">
  <meta property="og:type" content="website">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  
  <!-- Preconnect para performance -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  
  <!-- CSS crítico inline ou preload -->
  <link rel="stylesheet" href="/css/style.css">
  
  <!-- Schema.org -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Título da Página",
    "url": "https://www.seusite.com.br/pagina/"
  }
  </script>
</head>
<body>
  <header>
    <nav aria-label="Navegação principal">
      <!-- Menu de navegação -->
    </nav>
  </header>

  <main>
    <article> <!-- ou <section>, conforme contexto -->
      <h1>Título Principal com Palavra-chave</h1>
      <p>Parágrafo de introdução com keyword nos primeiros 100 caracteres...</p>
      
      <h2>Subtítulo Relevante</h2>
      <p>Conteúdo...</p>
      
      <h3>Subtópico</h3>
      <!-- Hierarquia H1 > H2 > H3 > H4 -->
    </article>
  </main>

  <footer>
    <!-- Footer com links importantes -->
  </footer>

  <!-- Scripts não-críticos no final com defer -->
  <script src="/js/main.js" defer></script>
</body>
</html>
```

---

## 8. CHECKLIST GOOGLE SEARCH CONSOLE

Após implementar todas as correções, orientar o usuário a:

1. **Verificar propriedade** no Google Search Console
2. **Enviar sitemap**: GSC → Sitemaps → Adicionar novo sitemap
3. **Solicitar indexação** de páginas importantes: GSC → Inspeção de URL → Solicitar indexação
4. **Verificar Core Web Vitals**: GSC → Experiência → Core Web Vitals
5. **Checar cobertura**: GSC → Indexação → Páginas
6. **Testar robots.txt**: GSC → Rastreamento → Testador de robots.txt
7. **Validar dados estruturados**: https://search.google.com/test/rich-results

---

## 9. PONTUAÇÃO — CRITÉRIOS DETALHADOS

### Como calcular a pontuação de cada categoria (0–10):

**SEO Técnico** (robots, sitemap, canonical, HTTPS, URLs)
- 10: Tudo implementado e sem erros
- 7–9: Pequenos ajustes necessários
- 4–6: Problemas moderados afetando rastreamento
- 0–3: Bloqueios sérios à indexação

**SEO On-Page** (title, description, headings, conteúdo, alt, links)
- 10: Todas as meta tags otimizadas, conteúdo estruturado
- 7–9: Ausências menores (alguns alts, meta descriptions)
- 4–6: Título duplicado, H1 ausente, conteúdo fraco
- 0–3: Sem title, sem H1, conteúdo irrelevante

**Dados Estruturados**
- 10: Schema correto e validado para o contexto
- 5–9: Schema parcialmente implementado
- 0–4: Ausente ou com erros graves

**Performance**
- 10: Scripts defer, imagens lazy+WebP, preload LCP
- 7–9: Maioria implementado
- 4–6: Scripts bloqueando, imagens sem otimização
- 0–3: Sem qualquer otimização de performance

**Mobile/Acessibilidade**
- 10: Viewport correto, responsivo, acessível
- 7–9: Pequenos problemas de responsividade
- 0–6: Sem viewport ou não responsivo

**Social/OG**
- 10: OG completo + Twitter Card
- 5–9: OG parcial
- 0–4: Ausente
