import { defineSlidevConfig } from '@slidev/types'

// Per-deck base paths are passed on the CLI by scripts/build-decks.mjs
// (e.g. /pptx/1/, /pptx/2/, /pptx/3/). Do not hardcode a single site base here.
export default defineSlidevConfig({
  vite: {
    css: {
      devSourcemap: true,
    },
  },
})
