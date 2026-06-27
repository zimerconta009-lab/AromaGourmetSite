# Aroma Gourmet — Landing Page (Estática)

Entrega: versão estática pronta para deploy. Siga as instruções abaixo.

## Arquivos incluídos
- index.html — página principal (contém critical CSS inline)
- styles.css — estilos adicionais e tokens
- scripts.js — lazy load, reveal on scroll, CTA tracking
- /assets/* — (substitua pelos seus WebP)
  - hero-1920.webp, hero-1200.webp, hero-768.webp
  - sobre-800.webp
  - pratos-400.webp, saladas-400.webp, sobremesas-400.webp, bebidas-400.webp
  - ambiente-1-600.webp ... ambiente-4-600.webp
  - map-placeholder.webp
  - favicon.svg

## Passos para deploy
1. Coloque os arquivos em um servidor estático (Netlify, Vercel, GitHub Pages ou seu host).
2. Substitua as imagens em `/assets` por suas imagens WebP em múltiplos crops.
3. Self-host das fontes:
   - Gere subsets WOFF2 para: Cormorant Garamond (headings), Manrope (body), Caveat (accent).
   - Atualize <link rel="preload"> e @font-face no CSS conforme o caminho /fonts/*.woff2.
   - Use font-display: swap.
4. Teste Lighthouse (mobile/desktop) e ajuste:
   - Garanta imagens responsivas e sizes/srcset se necessário.
   - Evite scripts de terceiros render-blocking.
5. SEO local:
   - Adicione meta tags og: e twitter: para compartilhamento.
   - Atualize structured data (JSON-LD) com horário de funcionamento completos.

## Checklist rápido (prioridade)
- [ ] Substituir imagens por WebP otimizadas e com srcset.
- [ ] Incluir fontes self-hosted (woff2) e preload.
- [ ] Validar contrastes (WCAG AA) com as imagens finais.
- [ ] Testar navegação por teclado e leitores de tela.
- [ ] Executar Lighthouse — objetivo >95 em Performance/SEO/A11y/Best Practices.

## Link WhatsApp usado em CTAs
Número: +55 47 99695-8604  
Link (pré-preenchido):  
https://wa.me/5547996958604?text=Ol%C3%A1%2C+gostaria+de+fazer+uma+reserva+no+Aroma+Gourmet.

## Quer que eu:
- Gerar o ZIP do site para baixar? (responda "zip")
- Subir para um repositório GitHub (informe owner/repo e permissões)? (responda "github")
- Gerar uma versão adaptada para um framework (React/Vue/Nuxt)? (diga qual)
