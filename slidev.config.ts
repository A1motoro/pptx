import { defineSlidevConfig } from '@slidev/types'

export default defineSlidevConfig({
  // 如果部署到 GitHub Pages 的子目录，需要设置 base
  // 例如：如果仓库名是 pptx，URL 是 https://username.github.io/pptx/
  // 则 base 应该是 '/pptx/'
  // 如果部署到个人主页根目录 (username.github.io)，base 应该是 '/'
  base: process.env.BASE_PATH || '/',
})

