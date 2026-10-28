# Presentations (Slidev)

Three English decks are published side-by-side. Pick one by URL path:

| # | Deck | Local | Deployed (GitHub Pages) |
|---|------|-------|-------------------------|
| 1 | The 48-Hour Rebellion | `pnpm dev:1` | `https://<user>.github.io/pptx/1/` |
| 2 | The Mark We Leave | `pnpm dev:2` | `https://<user>.github.io/pptx/2/` |
| 3 | Sleep: The Endangered Asset | `pnpm dev:3` | `https://<user>.github.io/pptx/3/` |

Root `https://<user>.github.io/pptx/` is a switcher. Shortcuts: `?deck=1` / `#1`.

## Develop

```bash
pnpm install
pnpm dev:1   # or dev:2 / dev:3
```

Sources: `deck-1.md`, `deck-2.md`, `deck-3.md` (project root so shared `public/` and `components/` resolve).

## Build

```bash
# builds dist/1 dist/2 dist/3 + root switcher
BASE_PATH=/pptx/ pnpm run build
```

`BASE_PATH` defaults to `/pptx/` (repo name). For a root site, use `BASE_PATH=/`.

## Archive

The previous GAD-7 English deck is kept under `archive/` and is not part of the multi-deck build.
