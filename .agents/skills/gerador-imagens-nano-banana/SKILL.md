---
name: gerador-imagens-nano-banana
description: >
  Use esta skill sempre que o usuário quiser gerar as IMAGENS de um site/landing page a partir
  do que já foi produzido pelas skills /copywriter-textos-site (texto/copy) e
  /web-designer-senior (identidade visual, paleta, tipografia, estilo estético). Transforma esse
  material em prompts de imagem otimizados para o Nano Banana (Gemini 2.5 Flash Image), prontos
  para colar na ferramenta e gerar. Acione com pedidos como "cria as imagens do site", "gera os
  prompts pro nano banana", "preciso das imagens da landing page", "cria o prompt de imagem do
  hero/sobre/serviços", "imagem para essa seção do site", ou sempre que o usuário já tiver rodado
  o copywriter ou o web-designer-senior nesta conversa e pedir para seguir com as imagens.
  Ativar mesmo sem o usuário mencionar "nano banana", "skill" ou "prompt" explicitamente —
  qualquer pedido de imagem para complementar um site/landing/copy já estruturado deve acionar
  esta skill.
---

# Skill: Gerador de Imagens para Site (Nano Banana)

## Objetivo

Pegar o que já foi definido em duas outras skills — o **texto** (`/copywriter-textos-site`) e a
**identidade visual** (`/web-designer-senior`) — e transformar isso em um prompt de imagem por
seção do site, pronto para colar no Nano Banana (Gemini 2.5 Flash Image) e gerar a imagem.

O resultado final não é uma imagem gerada por esta skill (Claude não gera a imagem aqui) — é o
**prompt em português**, pronto para copiar e colar na ferramenta de geração.

---

## PASSO 1 — Coletar o contexto das duas skills

Antes de montar qualquer prompt, é preciso ter em mãos:

1. **Do `/copywriter-textos-site`**: a estrutura de seções do site (Hero, Sobre, Serviços, FAQ,
   CTA final etc.), a keyword principal, e principalmente o **texto de cada seção** — é ele que
   diz o que a imagem precisa comunicar (a dor, o benefício, o diferencial daquela seção).
2. **Do `/web-designer-senior`**: o bloco `🎨 DECISÃO DE DESIGN` — paleta de cores, tipografia,
   tom visual e o diferencial estético escolhido. As imagens precisam ser consistentes com essa
   identidade, não genéricas.

Se essas informações já estão na conversa (o usuário rodou as skills antes), reutilize-as
diretamente — não peça de novo. Se **não** estiverem disponíveis, pergunte objetivamente:

> "Você já tem o texto do site (copywriter) e a identidade visual (web-designer-senior) prontos?
> Pode colar aqui, ou se quiser eu rodo essas duas skills antes de gerar os prompts de imagem."

Nunca invente paleta de cores, tipografia ou textos de seção — se algum dado estiver faltando,
pergunte ou assuma algo genérico profissional e avise que foi uma suposição.

---

## PASSO 2 — Mapear quais imagens são necessárias

Percorra a estrutura de seções do site e liste **uma imagem por seção que faz sentido ter
imagem**. Regra prática:

| Seção | Precisa de imagem? |
|---|---|
| Hero | Sim — sempre. É a imagem mais importante da página. |
| Sobre | Geralmente sim (foto/ilustração institucional, equipe, ambiente) |
| Serviços | Uma imagem por serviço, ou um ícone/ilustração por item se forem muitos (5+) |
| Prova/Diferenciais | Opcional — só se ajudar a reforçar (ex: selo, ambiente, equipamento) |
| FAQ | Normalmente não precisa |
| CTA final | Opcional — reforço visual leve, não obrigatório |

Se o site tiver muitas seções de serviço (5+), sugira ícones/ilustrações simples em vez de fotos
completas para cada uma, para não sobrecarregar o usuário com prompts demais — mas pergunte a
preferência dele se não estiver claro.

---

## PASSO 3 — Como o Nano Banana espera o prompt

O Nano Banana (Gemini 2.5 Flash Image) responde muito melhor a **frases narrativas e descritivas**
do que a listas soltas de palavras-chave (diferente de Midjourney/Stable Diffusion). Regras para
todo prompt gerado por esta skill:

- Escrever como se estivesse **descrevendo uma fotografia real** para um fotógrafo, não listando
  tags. Frases completas, em parágrafo corrido.
- Ser **hiper-específico**: quem/o que aparece, ação, ambiente, ângulo de câmera, tipo de lente
  (ex: "lente 35mm", "grande angular"), iluminação (ex: "luz natural suave de fim de tarde",
  "luz de estúdio com softbox"), e o clima/emoção da cena.
- Incorporar a **paleta de cores** e o **tom visual** vindos do `/web-designer-senior` como parte
  da descrição da cena (ex: "com tons predominantes de azul vibrante e branco, ambiente clean"),
  não como uma lista de hexadecimais solta.
- Se a imagem precisa ter **texto renderizado** (ex: uma peça com headline), colocar o texto exato
  entre aspas dentro do prompt — o Nano Banana é bom em renderizar texto legível quando o texto é
  claramente especificado. Nunca inventar esse texto: usar exatamente o que veio do
  `/copywriter-textos-site` (headline, CTA etc.).
- Especificar **proporção/formato** da imagem (ex: "proporção 16:9 para banner", "quadrada 1:1
  para post", "vertical 4:5") de acordo com onde a imagem será usada no site.
- Evitar negativos genéricos ("sem marca d'água", "sem texto borrado") só quando fizer sentido —
  não é o foco do Nano Banana, mas pode ajudar se a imagem tiver texto.
- Nunca usar marcas, personagens ou pessoas reais e identificáveis como referência.

---

## PASSO 4 — Template de prompt (uma por imagem)

Para cada imagem mapeada no Passo 2, montar um bloco assim:

```
### [Nome da seção — ex: Hero]

Fotografia [ou ilustração, se for o estilo definido] de [descrição da cena: quem/o que aparece,
ação, ambiente], em [ângulo de câmera/enquadramento]. Iluminação [tipo de luz, direção,
qualidade]. Paleta de cores predominante em [cores da identidade visual definida], transmitindo
[tom visual/emoção que a seção precisa passar, ex: confiança e modernidade]. Estilo [fotográfico
realista / ilustração flat / 3D render / etc., conforme identidade definida].

[SE HOUVER TEXTO NA IMAGEM]: A imagem deve conter o texto "[texto exato]" em destaque, com
tipografia [estilo da tipografia definida], legível e bem posicionado.

Proporção: [ex: 16:9, 1:1, 4:5]. Sem marcas, logotipos ou pessoas reais identificáveis.
```

Repita esse bloco para cada imagem necessária, numerando na ordem em que aparecem no site (Hero
primeiro, depois na ordem das seções).

---

## PASSO 5 — Entregar

1. Monte todos os prompts em um único arquivo Markdown (`.md`), um bloco por imagem, na ordem das
   seções do site.
2. No topo do arquivo, incluir um resumo curto: nome do site/cliente, paleta e tipografia usadas
   como referência (herdadas do `/web-designer-senior`), para o usuário saber que veio de lá.
3. Nome do arquivo em kebab-case (ex: `prompts-imagens-clinica-odonto.md`).
4. Salvar o arquivo obrigatoriamente dentro da pasta `specs/imagens` na raiz do projeto, criando a pasta se necessário.
5. Entregar ao usuário informando o caminho do arquivo criado.
6. Na resposta (fora do arquivo), listar rapidamente quantas imagens foram mapeadas e para quais
   seções — sem repetir os prompts inteiros no chat.

---

## CHECKLIST ANTES DE ENTREGAR

- [ ] Texto (copywriter) e identidade visual (web-designer-senior) confirmados, não inventados
- [ ] Uma imagem mapeada por seção que faz sentido (Hero sempre incluído)
- [ ] Cada prompt escrito em frase narrativa/descritiva, não lista de keywords
- [ ] Paleta de cores e tom visual do web-designer-senior refletidos em cada prompt
- [ ] Texto exato (quando aplicável) vindo do copywriter, entre aspas, sem invenção
- [ ] Proporção especificada em cada prompt, de acordo com o uso no site
- [ ] Arquivo `.md` em kebab-case salvo corretamente na pasta `specs/imagens`
