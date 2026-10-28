#!/usr/bin/env node
/**
 * Build decks into dist/{id}/ and write the options page at dist/index.html (site default).
 * BASE_PATH env (default /pptx/) → /pptx/ , /pptx/1/ , /pptx/2/ , ...
 */
import { spawnSync } from 'node:child_process'
import { mkdirSync, writeFileSync, cpSync, existsSync, rmSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')

const rawBase = process.env.BASE_PATH || '/pptx/'
const siteBase = rawBase.endsWith('/') ? rawBase : `${rawBase}/`

const decks = [
  {
    id: '1',
    entry: 'decks/1/slides.md',
    title: 'The 48-Hour Rebellion',
    subtitle: 'Finding Agency in the Age of Algorithms',
  },
  {
    id: '2',
    entry: 'decks/2/slides.md',
    title: 'The Mark We Leave',
    subtitle: 'Entering the Anthropocene',
  },
  {
    id: '3',
    entry: 'decks/3/slides.md',
    title: 'Sleep: The Endangered Asset',
    subtitle: 'The Sleep Economy',
  },
  {
    id: '4',
    entry: 'decks/4/slides.md',
    title: 'GAD-7 AI-Assisted Assessment',
    subtitle: 'Conversational anxiety screening · GLM-5 + LoRA',
  },
]

const deckIds = decks.map(d => d.id)
const deckIdPattern = `^[${deckIds.join('')}]$`

if (existsSync(dist))
  rmSync(dist, { recursive: true, force: true })
mkdirSync(dist, { recursive: true })

const slidevBin = join(root, 'node_modules/@slidev/cli/bin/slidev.mjs')

for (const deck of decks) {
  // Slidev resolves --out relative to entry dirname (decks/N), so use an absolute path.
  const outDir = join(dist, deck.id)
  const base = `${siteBase}${deck.id}/`
  console.log(`\n▶ Building deck ${deck.id}: ${deck.title}`)
  console.log(`  entry=${deck.entry}  out=${outDir}  base=${base}`)

  const result = spawnSync(
    process.execPath,
    [slidevBin, 'build', deck.entry, '--out', outDir, '--base', base],
    { cwd: root, stdio: 'inherit', env: process.env },
  )

  if (result.status !== 0)
    process.exit(result.status ?? 1)

  const indexHtml = join(outDir, 'index.html')
  if (existsSync(indexHtml))
    cpSync(indexHtml, join(outDir, '404.html'))
}

const pathList = deckIds.map(id => `<code>${siteBase}${id}/</code>`).join(', ')

const switcher = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>选项 · Presentations</title>
  <style>
    :root {
      --bg: #0f1419;
      --fg: #e8eef4;
      --muted: #8b9aab;
      --line: rgba(232,238,244,0.12);
      --accent: #7eb8d4;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      font-family: "Iowan Old Style", "Palatino Linotype", Palatino, Georgia, serif;
      color: var(--fg);
      background:
        radial-gradient(1200px 600px at 10% -10%, rgba(126,184,212,0.18), transparent 55%),
        radial-gradient(900px 500px at 100% 0%, rgba(180,140,100,0.12), transparent 50%),
        var(--bg);
      display: grid;
      place-items: center;
      padding: 2rem;
    }
    main { width: min(720px, 100%); }
    h1 {
      font-size: clamp(1.75rem, 4vw, 2.4rem);
      font-weight: 600;
      letter-spacing: -0.02em;
      margin: 0 0 0.35rem;
    }
    .lead {
      color: var(--muted);
      font-size: 1rem;
      margin: 0 0 2rem;
      line-height: 1.5;
    }
    .lead code {
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
      font-size: 0.9em;
      color: var(--accent);
    }
    ol {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      gap: 0.85rem;
    }
    a.deck {
      display: grid;
      grid-template-columns: 3rem 1fr auto;
      gap: 1rem;
      align-items: center;
      padding: 1.1rem 1.25rem;
      text-decoration: none;
      color: inherit;
      border: 1px solid var(--line);
      background: rgba(255,255,255,0.03);
      transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
    }
    a.deck:hover {
      border-color: rgba(126,184,212,0.45);
      background: rgba(126,184,212,0.08);
      transform: translateY(-1px);
    }
    .num {
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
      font-size: 1.25rem;
      color: var(--accent);
    }
    .title { font-size: 1.15rem; font-weight: 600; margin: 0; }
    .sub { margin: 0.2rem 0 0; color: var(--muted); font-size: 0.92rem; }
    .go { color: var(--muted); font-size: 0.9rem; }
    footer {
      margin-top: 1.75rem;
      color: var(--muted);
      font-size: 0.85rem;
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    }
  </style>
  <script>
    // Optional deep-link: ?deck=1 or #1 → that deck. Bare / stays on this options page.
    (function () {
      var params = new URLSearchParams(location.search);
      var q = params.get('deck') || params.get('n');
      var hash = (location.hash || '').replace(/^#/, '');
      var id = q || (new RegExp(${JSON.stringify(deckIdPattern)}).test(hash) ? hash : '');
      if (new RegExp(${JSON.stringify(deckIdPattern)}).test(id)) {
        location.replace(${JSON.stringify(siteBase)} + id + '/');
      }
    })();
  </script>
</head>
<body>
  <main>
    <h1>选项</h1>
    <p class="lead">
      默认进入本页。打开具体幻灯片：${pathList}
      · 或 <code>?deck=1</code>
    </p>
    <ol>
      ${decks.map(d => `
      <li>
        <a class="deck" href="${siteBase}${d.id}/">
          <span class="num">${d.id}</span>
          <span>
            <p class="title">${d.title}</p>
            <p class="sub">${d.subtitle}</p>
          </span>
          <span class="go">${siteBase}${d.id}/ →</span>
        </a>
      </li>`).join('')}
    </ol>
    <footer>${siteBase}</footer>
  </main>
</body>
</html>
`

writeFileSync(join(dist, 'index.html'), switcher)
writeFileSync(join(dist, '404.html'), switcher)

console.log(`\n✓ Options page → ${join(dist, 'index.html')} (site default)`)
console.log(`✓ Decks → ${siteBase}{${deckIds.join(',')}}/`)
