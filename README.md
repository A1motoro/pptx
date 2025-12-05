# Welcome to [Slidev](https://github.com/slidevjs/slidev)!

To start the slide show:

- `pnpm install`
- `pnpm dev`
- visit <http://localhost:3030>

Edit the [slides.md](./slides.md) to see the changes.

Learn more about Slidev at the [documentation](https://sli.dev/).

## 部署到 GitHub Pages

本项目已配置 GitHub Actions 自动部署到 GitHub Pages。

### 部署步骤

1. **将代码推送到 GitHub**
   ```bash
   git add .
   git commit -m "准备部署"
   git push origin main
   ```

2. **启用 GitHub Pages**
   - 进入仓库的 Settings > Pages
   - 在 "Source" 部分选择 "GitHub Actions"
   - 保存设置

3. **自动部署**
   - 推送代码后，GitHub Actions 会自动构建并部署
   - 在 Actions 标签页可以查看部署进度
   - 部署完成后，访问 `https://你的用户名.github.io/仓库名/` 即可查看幻灯片

### 访问地址

- 如果仓库名是 `pptx`，访问地址为：`https://你的用户名.github.io/pptx/`
- 如果部署到个人主页根目录（仓库名为 `你的用户名.github.io`），访问地址为：`https://你的用户名.github.io/`

### 本地构建

如果需要本地构建测试：

```bash
# 构建到 dist 目录
pnpm run build

# 如果部署到子目录，需要指定 base 路径
pnpm run build -- --base /仓库名/
```
