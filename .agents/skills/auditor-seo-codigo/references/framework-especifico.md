# SEO específico por framework

Adapte a auditoria à tecnologia identificada na etapa de descoberta da stack.

## Next.js

Verifique: `metadata`/`generateMetadata`, sitemap (arquivo ou rota dinâmica), `robots.ts`/`robots.txt`, metadata definida em layouts vs. páginas (duplicação), estratégia SSR/SSG/ISR por rota, dynamic routes e seus metadados.

## React / Vite (SPA)

Verifique: uso de `react-helmet` ou equivalente para metadata dinâmica, estratégia de renderização (CSR puro vs. SSR/SSG via algum framework adicional), como as rotas são definidas, se existe pré-renderização para conteúdo crítico.

## Laravel / Blade

Verifique: layouts e uso de `@yield`/`@section` para title/description, rotas em `routes/web.php`, templates Blade, sitemap (estático ou gerado), `robots.txt`, canonical, redirects, se o conteúdo é renderizado no servidor (geralmente sim em Blade tradicional).

## WordPress

Verifique: qual plugin de SEO está em uso (Rank Math, Yoast, etc.), templates do tema, title/description configurados, canonical, sitemap, schema gerado pelo plugin, estrutura de headings nos templates, plugins que podem pesar na performance.

## HTML puro

Verifique diretamente cada documento HTML do projeto — não há camada de framework para inspecionar, então o checklist técnico se aplica arquivo por arquivo.

## Auditoria cruzada de rotas

Compare, para cada página relevante: rota existe? / tem link interno apontando pra ela? / está no sitemap? / tem canonical correto? Inconsistências (ex: rota existe, sem link interno, ausente do sitemap) geram oportunidade de correção — registre isso explicitamente no relatório.
