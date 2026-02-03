import { defineSlidevConfig } from '@slidev/types'

export default defineSlidevConfig({
  // GitHub Pages 部署路径：仓库名是 pptx，所以 base 是 /pptx/
  base: '/pptx/',
  vite: {
    css: {
      // 注入全局样式：双栏页右侧居中、减少留白
      devSourcemap: true,
    },
  },
})

