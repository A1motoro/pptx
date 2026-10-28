# Presentations (Slidev)

站点默认进入**选项页**（`/pptx/`），再选具体 deck。

| # | Deck | 源文件 | URL |
|---|------|--------|-----|
| — | 选项页 | `scripts/build-decks.mjs` | `/pptx/` |
| 1 | The 48-Hour Rebellion | `decks/1/slides.md` | `/pptx/1/` |
| 2 | The Mark We Leave | `decks/2/slides.md` | `/pptx/2/` |
| 3 | Sleep: The Endangered Asset | `decks/3/slides.md` | `/pptx/3/` |
| 4 | GAD-7 AI-Assisted Assessment | `decks/4/slides.md` | `/pptx/4/` |

快捷跳转：`/pptx/?deck=1` 或 `/pptx/#1`。

## 目录

```
decks/{1,2,3,4}/slides.md   # 各套幻灯片（4 含 style.css）
public/                     # 共享静态资源（各 deck 内 symlink）
components/ setup/ …        # 共享（各 deck 内 symlink）
scripts/build-decks.mjs     # 构建全部 deck + 选项页
archive/                    # 历史备份
```

## 开发 / 构建

```bash
pnpm install
pnpm dev:1   # 或 dev:2 / dev:3 / dev:4
BASE_PATH=/pptx/ pnpm build
```
