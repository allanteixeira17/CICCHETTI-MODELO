# Checklist técnico — auditoria via código-fonte

Percorra estas categorias analisando os arquivos reais do projeto. Não assuma nada que não esteja no código.

## HTML / `<head>`

Verifique: `lang` no `<html>`, `<head>`, `<title>`, meta description, viewport, charset, meta robots, canonical, favicon, Open Graph, Twitter Cards.

## Title

Para cada página/rota: existência, duplicidade entre páginas, tamanho aproximado, presença de palavra-chave, marca, intenção de busca. Sinalize titles genéricos como "Home", "Página Inicial", "Site", "Untitled".

## Meta description

Existência, duplicidade, tamanho, conteúdo, presença de CTA, relevância para a página.

## Canonical

Existência, URL absoluta vs. relativa, duplicação, canonical apontando para página errada, páginas sem canonical quando deveriam ter.

## Robots

Procure `robots.txt`, meta robots no código, `noindex`/`nofollow`. Sinalize páginas que deveriam ser indexadas mas têm `<meta name="robots" content="noindex">` (ou equivalente do framework).

## Sitemap

Procure `sitemap.xml` ou geração dinâmica no framework. Verifique coerência com as rotas reais — não apenas se o arquivo existe, mas se as URLs nele batem com o que o projeto realmente tem.

## Headings

Para cada página: H1 (existência, quantidade — mais de um é problema), hierarquia (H1→H2→H3), headings vazios, headings usados só para estilização, H1 genérico ou ausente.

## Imagens

Para cada imagem: `alt`, `width`/`height`, lazy loading, formato, indício de peso excessivo, nome de arquivo, imagens decorativas vs. de conteúdo. Priorize hero, logo e imagens de serviço/produto.

## Links internos

Links entre páginas, páginas órfãs (sem link interno apontando para elas), links quebrados, anchor text genérico ("clique aqui", "saiba mais") vs. contextual, profundidade de navegação.

## Links externos

`target="_blank"` com `rel="noopener"`, links patrocinados/afiliados sem `rel="sponsored"` ou `nofollow`, redes sociais, links potencialmente perigosos.

## JavaScript / renderização

Conteúdo importante dependendo exclusivamente de JavaScript client-side, ausência de SSR/SSG onde faria diferença, excesso de scripts, bibliotecas desnecessárias, scripts bloqueando renderização. Nunca afirme categoricamente que "o Google não consegue renderizar" sem evidência — use: "Existe risco de indexação/renderização dependendo da estratégia utilizada."

## Performance (análise estática do código)

Imagens grandes sem otimização, JS/CSS excessivo, fontes externas em excesso, scripts de terceiros, animações pesadas, vídeos, ausência de lazy loading. Se não houver ferramenta de benchmark disponível, escreva "Performance não foi medida diretamente" — nunca invente LCP, INP, CLS ou PageSpeed Score.

## Core Web Vitals

Só informe valores reais se houver como medir. Caso contrário: "Não mensurado." Depois, faça a análise estática do código para apontar possíveis causas (imagens pesadas, JS bloqueante, fontes não otimizadas, CLS por elementos sem dimensão reservada).

## Mobile

Viewport, breakpoints, CSS responsivo, overflow, larguras fixas em elementos críticos (ex: `width: 1200px` fora de um container responsivo), tamanho de fonte, tamanho de botões/área de toque, menu mobile.

## Acessibilidade

`alt`, `label`, atributos `aria-*`, uso de `<button>` vs. `<div onclick="...">`, contraste (quando verificável), hierarquia de headings, formulários com labels associados, foco visível, navegação por teclado.

## Schema.org

Procure blocos `application/ld+json`. Verifique: JSON válido, tipos usados (Organization, LocalBusiness, Person, ProfessionalService, Article, BreadcrumbList, WebSite, FAQPage, etc.), consistência com o conteúdo real da página, dados conflitantes. Nunca recomende propriedades inventadas.

## SEO Local

Se for negócio local, procure no código: nome, endereço, cidade, estado, telefone, área de atendimento, bairro, link/embed de mapa, NAP (Name/Address/Phone) consistente, schema LocalBusiness. Avalie se o conteúdo tem sinais claros de "[serviço] + [cidade]".

## Páginas estratégicas

Compare as rotas existentes com os serviços/temas importantes do negócio. Não recomende criar página só para aumentar quantidade — cada página nova sugerida precisa representar uma intenção de busca real.

## Conteúdo

Conteúdo genérico, duplicado entre páginas, textos muito curtos, ausência de diferenciais, falta de autoridade, falta de localização, ausência de FAQ, ausência de CTA claro.

## E-E-A-T

Sinais de autor, profissão, formação, registro profissional, experiência, credenciais, fontes citadas, contato, endereço, políticas (privacidade/termos). Para profissionais regulamentados (saúde, direito, etc.), seja especialmente rigoroso.

## Copy e conversão

Hero/headline/subtítulo, CTA, benefícios, diferenciais, prova social, depoimentos, FAQ, formulário, WhatsApp, agendamento. Pergunta-guia: "o usuário sabe exatamente o que fazer depois de chegar à página?"

## Chatbot / IA (se houver)

Implementação, objetivo, CTA, transparência sobre ser IA, coleta de dados, integração. Se for da área de saúde, recomende que a IA não faça diagnóstico ou tratamento.

## Segurança relacionada a SEO/confiança

Não é uma auditoria de segurança completa — analise só o que afeta SEO/confiança: HTTPS, dados sensíveis expostos no frontend, chaves de API expostas, URLs administrativas indexáveis, `.env` exposto, source maps públicos com risco, páginas de teste indexáveis. Segredo real encontrado: não reproduza no relatório, apenas informe o arquivo e recomende remoção/rotação.
