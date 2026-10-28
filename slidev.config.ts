import { defineSlidevConfig } from '@slidev/types'

// Per-deck base is set on the CLI by scripts/build-decks.mjs.
// When entry is decks/N/slides.md, Slidev userRoot is decks/N (symlinks provide public/).
export default defineSlidevConfig({
  vite: {
    css: {
      devSourcemap: true,
    },
  },
})
