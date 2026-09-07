{{--
  TEMPLATE BASE - ARTIGO DE BLOG (ALN Soluções Digitais)

  Como usar:
  1. Substitua cada @section conforme as instruções nos comentários.
  2. NÃO remova @extends('artigos.layout') — o layout já cuida de header, footer,
     H1 visual, botão flutuante do WhatsApp e CTA final.
  3. Dentro de @section('content'), use SOMENTE: <p>, <h2>, <h3>, <ul>/<li>, <strong>.
     Nunca <h1>, nunca o bloco de CTA (ele já vem fixo no layout).
  4. Remova todos os comentários Blade ({{-- --}}) antes de entregar o arquivo final.
--}}

@extends('artigos.layout')

{{-- Título otimizado SEO: 50-60 caracteres, keyword principal perto do início.
     Este título também é renderizado como <h1> pelo layout — não duplicar como h1 no content. --}}
@section('title', 'TÍTULO OTIMIZADO PARA SEO AQUI')

{{-- Meta description: 120-156 caracteres. Escrever como copy persuasivo
     (benefício + leve gatilho de curiosidade/urgência), não como resumo neutro. --}}
@section('meta_description', 'META DESCRIPTION PERSUASIVA AQUI')

{{-- 3-5 keywords/variações long-tail relacionadas, separadas por vírgula.
     Seguir o padrão: termo principal + variações naturais de busca. --}}
@section('keywords', 'palavra-chave principal, variação 1, variação 2, variação 3')

@section('schema')
  <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "MESMO TÍTULO DO @section('title')",
        "description": "MESMA META DESCRIPTION",
        "author": {
          "@type": "Person",
          "name": "Allan Teixeira"
        },
        "publisher": {
          "@type": "Organization",
          "name": "ALN Criação de Sites"
        }
      }
      </script>
@endsection

@section('content')
  {{-- Abertura: 2-4 parágrafos, sem heading. Citar a keyword principal
       de forma natural já no primeiro parágrafo. --}}
  <p>Parágrafo de abertura apresentando a dor/dúvida do leitor...</p>

  <p>Parágrafo de contexto, ampliando a relevância do tema...</p>

  {{-- Corpo: 4-7 h2, com h3 quando o tópico se desdobra em subcenários --}}
  <h2>Primeiro subtema (responde a uma dúvida real de busca)</h2>

  <p>Texto explicativo...</p>

  <ul>
    <li>Item de lista 1;</li>
    <li>Item de lista 2;</li>
    <li>Item de lista 3.</li>
  </ul>

  <h2>Segundo subtema</h2>

  <p>Texto explicativo com <strong>termo-chave em destaque</strong> quando relevante...</p>

  <h3>Subtópico específico (cenário, caso de uso)</h3>
  <p>Detalhamento...</p>

  <h3>Outro subtópico específico</h3>
  <p>Detalhamento...</p>

  {{-- Seção comparativa ou prática costuma converter bem em SEO --}}
  <h2>Comparação / Quando escolher cada opção</h2>

  <p>Texto comparativo...</p>

  <h2>Conclusão</h2>

  <p>Resumo da decisão central do artigo, reforçando o benefício de agir,
     sem CTA agressivo (o CTA de WhatsApp já vem fixo no layout depois do content).</p>
@endsection
