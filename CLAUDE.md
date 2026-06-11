# Portfolio — Caio Barreto de Albuquerque

Site estático single-page em PT-BR. HTML puro. Publicado na Vercel.

## Arquivos

- `index.html`: página única (hero, atuação, projetos, stack, sobre, contato)
- `styles.css`: todo o estilo; variáveis CSS no `:root`
- `script.js`: mínimo (ano do rodapé + copiar e-mail)
- `favicon.svg`, `og.png`: assets (og.png gerado com PIL, layout rubro-negro)

## Regras inegociáveis

1. **Nunca adicionar framework, build step ou lib externa de JS/CSS** sem ordem explícita do Caio.
2. **Nunca inventar fatos, números ou métricas.** Toda copy vem de fonte real (GitHub github.com/Caiobadv, LinkedIn, ou do próprio Caio). Sem dado, escreve o status real.
3. Posicionamento correto: **"Dev/Engenheiro de software @ kinid · CloudIn"**. kinid = identidade digital do ativo imobiliário, com IA aplicada ao produto; CloudIn = tecnologia para hotelaria (reservas, login/autenticação de usuários, backend FastAPI, IA no atendimento). **Não chamar de "founder/fundador".**
4. Design: dark rubro-negro, estética sóbria inspirada no Flamengo. Acento único vermelho em dois tons: `--accent: #e84a50` (texto/links, AA sobre bg e surface) e `--accent-deep: #c52613` (vermelho oficial do clube: botão primário e badges com texto branco, barra de 3px no topo). **Proibida qualquer referência verbal ao Flamengo na copy**; a alusão é só visual. System font stack, mobile-first. Sem animação de entrada; só transição de hover.
5. Acessibilidade: HTML semântico, contraste AA, `alt` em qualquer imagem nova, skip-link preservado.
6. Página total < 200KB (sem contar foto, se um dia entrar).
7. **Nunca usar travessão (—) em nenhum texto.** Caio considera padrão claro de texto de IA. Reestruturar com vírgula, dois-pontos, ponto ou "·".

## Deploy

```bash
vercel --prod
```

(Primeira vez: `npm i -g vercel && vercel login`.)

Produção: https://portfolio-xi-eight-byzzeubxff.vercel.app. `og:image`, `og:url` e `canonical` no `index.html` apontam para esse domínio em URL absoluta. Se um dia entrar domínio próprio, atualizar os três.

## Verificação antes de qualquer commit

- Abrir local: `python3 -m http.server 8000` e testar em 375px e 1440px.
- Zero erro no console.
- Links externos com `rel="noopener" target="_blank"`.
