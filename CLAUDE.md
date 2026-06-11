# Portfolio — Caio Barreto de Albuquerque

Site estático single-page em PT-BR. HTML + CSS puros, zero build step. Publicado na Vercel. Redesign de junho/2026 vindo do Claude Design (material de trabalho em `claude-design/`, fora do git): formato "editorial de engenharia", com case studies em vez de cards.

## Arquivos

- `index.html`: página única (hero, case 01 flagship, cases 02-05, stack em 4 grupos, sobre, contato)
- `styles.css`: todo o estilo; tokens no `:root`
- `script.js`: mínimo (ano do rodapé + copiar e-mail)
- `favicon.svg`, `og.png`: assets (og.png gerado com PIL + Space Grotesk baixada em /tmp; layout com listras diagonais)

## Regras inegociáveis

1. **Zero framework, build step ou lib de JS.** Única dependência externa: Google Fonts (Space Grotesk 500/600, Newsreader 400 + itálico, IBM Plex Mono 400/500), autorizada pelo Caio no redesign. Se um dia cortar, self-host woff2 subset latin.
2. **Nunca inventar fatos, números ou métricas.** Toda copy vem de fonte real (repos públicos e privados do Caio, READMEs, ou do próprio Caio). Sem dado real: placeholder `[MÉTRICA: o que medir]` no componente `.metric`, nunca número chutado.
3. Posicionamento: **engenheiro de software**; na kinid (identidade digital do ativo imobiliário) e construindo de ponta a ponta o produto de IA para hotelaria (case 01; nome CloudIn não aparece na copy do case por decisão de design). **Nunca "founder/fundador".**
4. Design: dark "editorial de engenharia" rubro-negro. Tokens: `--accent #E84A50` (texto/acentos, AA) e `--accent-deep #C52613` (vermelho oficial do Flamengo: botão primário, barra 3px, ::selection). Duas superfícies (`--bg #0A0A0C`, `--bg-raise #0F0F13`). Vermelho NUNCA em texto corrido nem fundo de bloco de leitura. Alusão ao Flamengo apenas visual (paleta + listras 135° aria-hidden): **zero menção verbal, escudo ou asset do clube**. Sem animação de entrada; só transição de hover. Layout sem media queries (flex-wrap + clamp); única exceção: esconder `.stripes` em telas < 720px para decoração nunca ficar atrás de texto.
5. Acessibilidade: HTML semântico, contraste AA (cinza mínimo `--faint #8A8A93`; #71717A foi reprovado em auditoria), foco visível 2px em tudo, skip-link, decorações aria-hidden, `alt` em imagem nova.
6. Página total < 200KB com fontes incluídas (og.png fora do critical path).
7. **Nunca usar travessão (—) em nenhum texto.** Reestruturar com vírgula, dois-pontos, ponto ou "·".
8. Clichês banidos: "apaixonado por tecnologia", "transformando ideias em realidade", "movido a desafios", emojis decorativos.

## Estrutura dos cases

Anatomia (HANDOFF do Claude Design): `.case` flex-wrap com `.case-meta` (CASE nº, CONTEXTO/STATUS, CÓDIGO, STACK) + `.case-body` (título, subtítulo serifado itálico, PROBLEMA → DECISÕES TÉCNICAS numeradas → RESULTADO, métricas). Fontes dos fatos por case: 01 repo local `~/Desktop/CLOUDIN/cloudin_hotel_chat_project`, 02 `reinvent-flow-mvp` (privado), 03 `TCC` (privado; números RMSE 0,8333 vs 1,0387 são do `documentacao/README.md`), 04 `cloudin-reserva-hotel` (privado), 05 `Segmenta-oIA` (público, único com link).

## Deploy

```bash
vercel --prod
```

Produção: https://portfolio-xi-eight-byzzeubxff.vercel.app. `og:image`, `og:url` e `canonical` apontam para esse domínio em URL absoluta. Domínio próprio um dia: atualizar os três. Repo: https://github.com/Caiobadv/portfolio (push manual; Vercel ainda não conectada ao GitHub).

## Pendências

1. 5 placeholders `[MÉTRICA: ...]` aguardando dados reais (3 no case 01, 1 no case 02, 1 no case 05).
2. Versão EN: copy completa pronta no `claude-design/handoff/HANDOFF.md` seção 5.1 (estrutura `en/index.html` + hreflang). Implementar quando o Caio pedir.

## Verificação antes de qualquer commit

- Abrir local: `python3 -m http.server 8000` e testar em 375px e 1440px.
- Zero erro no console.
- Links externos com `rel="noopener" target="_blank"`.
- `grep -c "—"` em index.html deve dar 0.
