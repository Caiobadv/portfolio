# Portfolio — Caio Barreto de Albuquerque

Site estático single-page em PT-BR. HTML puro. Publicado na Vercel.

## Arquivos

- `index.html` — página única (hero, atuação, projetos, stack, sobre, contato)
- `styles.css` — todo o estilo; variáveis CSS no `:root`
- `script.js` — mínimo: ano do rodapé + copiar e-mail
- `favicon.svg`, `og.png` — assets

## Regras inegociáveis

1. **Nunca adicionar framework, build step ou lib externa de JS/CSS** sem ordem explícita do Caio.
2. **Nunca inventar fatos, números ou métricas.** Toda copy vem de fonte real (GitHub github.com/Caiobadv, LinkedIn, ou do próprio Caio). Sem dado, escreve o status real.
3. Posicionamento correto: **"Dev/Engenheiro de software @ kinid · CloudIn"** — kinid = identidade digital do ativo imobiliário; CloudIn = tecnologia para hotelaria. **Não chamar de "founder/fundador".**
4. Design: dark, 1 cor de acento (`--accent: #2dd4bf`), system font stack, mobile-first. Sem animação de entrada; só transição de hover.
5. Acessibilidade: HTML semântico, contraste AA, `alt` em qualquer imagem nova, skip-link preservado.
6. Página total < 200KB (sem contar foto, se um dia entrar).

## Deploy

```bash
vercel --prod
```

(Primeira vez: `npm i -g vercel && vercel login`.)

Pós-deploy pendente: trocar `og:image` para URL absoluta de produção no `index.html`.

## Verificação antes de qualquer commit

- Abrir local: `python3 -m http.server 8000` e testar em 375px e 1440px.
- Zero erro no console.
- Links externos com `rel="noopener" target="_blank"`.
