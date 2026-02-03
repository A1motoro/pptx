# Slidev 原生语法讲解

## 1. 幻灯片分隔符

使用 `---` 来分隔不同的幻灯片：

```markdown
# 第一页

---

# 第二页
```

## 2. Frontmatter（前置配置）

每页幻灯片开头可以用 `---` 包裹的 YAML 配置：

```yaml
---
layout: two-cols        # 布局：default, cover, center, two-cols, image, etc.
class: text-center     # 自定义 CSS 类名
background: /image.jpg  # 背景图片或颜色
---

# 内容
```

### 常用布局选项：
- `default` - 默认布局
- `center` - 居中布局
- `two-cols` - 双栏布局
- `cover` - 封面布局
- `image` - 图片布局

## 3. 图片展示方式

### 方式一：Markdown 原生语法（推荐）

```markdown
![图片描述](/path/to/image.png)
```

**特点：**
- 简洁，符合 Markdown 标准
- Slidev 会自动处理路径（public 文件夹中的文件用 `/filename.png`）
- 可以使用 UnoCSS 类名控制样式

### 方式二：HTML img 标签

```html
<img src="/image.png" class="rounded-lg shadow-xl" />
```

**特点：**
- 更灵活，可以添加更多属性
- 可以使用 UnoCSS 工具类

### 方式三：背景图片（Frontmatter）

```yaml
---
background: /image.png
background-size: cover
background-position: center
---
```

## 4. 双栏布局（two-cols）

### 基本语法：

```markdown
---
layout: two-cols
---

左侧内容

::right::

右侧内容
```

### 使用 ::left:: 和 ::right:: 明确指定：

```markdown
---
layout: two-cols
---

::left::

左侧内容

::right::

右侧内容
```

## 5. UnoCSS 工具类（样式控制）

Slidev 内置了 UnoCSS，可以使用 Tailwind CSS 风格的类名：

### 图片大小控制：
- `w-full` - 宽度 100%
- `w-1/2` - 宽度 50%
- `w-64` - 宽度 256px
- `max-w-md` - 最大宽度 448px
- `max-w-lg` - 最大宽度 512px
- `h-full` - 高度 100%
- `h-64` - 高度 256px
- `max-h-screen` - 最大高度 100vh

### 图片样式：
- `rounded-lg` - 圆角（中等）
- `rounded-xl` - 圆角（较大）
- `rounded-full` - 完全圆形
- `shadow-lg` - 阴影（大）
- `shadow-xl` - 阴影（超大）
- `object-cover` - 覆盖（裁剪）
- `object-contain` - 包含（完整显示）

### 对齐和间距：
- `mx-auto` - 水平居中
- `my-auto` - 垂直居中
- `m-4` - 外边距 1rem
- `p-4` - 内边距 1rem
- `mt-4` - 上边距
- `mb-4` - 下边距
- `ml-4` - 左边距
- `mr-4` - 右边距

### Flexbox 布局：
- `flex` - 启用 flex
- `items-center` - 垂直居中
- `justify-center` - 水平居中
- `justify-between` - 两端对齐

## 6. 图片大小示例

### 小图片（约 30-40%）：
```markdown
![Image](/image.png)
```
配合 CSS：
```css
img {
  max-width: 40%;
  max-height: 50vh;
}
```

### 中等图片（约 50-60%）：
```markdown
![Image](/image.png)
```
配合 CSS：
```css
img {
  max-width: 60%;
  max-height: 70vh;
}
```

### 大图片（填满）：
```markdown
![Image](/image.png)
```
配合 CSS：
```css
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

## 7. 自定义 CSS

在文件末尾添加 `<style>` 标签：

```html
<style>
/* 针对特定布局的样式 */
.slidev-layout.two-cols .slidev-layout>div:first-child img {
  max-width: 50%;
  max-height: 60vh;
}

/* 针对特定类的样式 */
.my-custom-class img {
  width: 300px;
  height: auto;
}
</style>
```

## 8. 图片路径说明

- **public 文件夹**：使用 `/filename.png`（如 `/Elizabeth.png`）
- **相对路径**：使用 `./images/file.png`
- **外部 URL**：直接使用完整 URL

## 9. 实际应用示例

### 双栏布局，左侧图片居中：

```markdown
---
layout: two-cols
class: my-layout
---

![Elizabeth](/Elizabeth.png)

::right::

# 标题
内容
```

```css
<style>
.slidev-layout.my-layout .slidev-layout>div:first-child {
  display: flex;
  align-items: center;
  justify-content: center;
}
.slidev-layout.my-layout .slidev-layout>div:first-child img {
  max-width: 50%;
  max-height: 70vh;
  border-radius: 0.75rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}
</style>
```

## 10. 常用组合

### 圆角阴影图片：
```markdown
![Image](/image.png)
```
```css
img {
  border-radius: 0.75rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}
```

### 居中显示：
```markdown
<div class="flex items-center justify-center">
  ![Image](/image.png)
</div>
```

### 响应式大小：
```markdown
![Image](/image.png)
```
```css
img {
  max-width: min(50%, 400px);
  height: auto;
}
```

## 提示

1. **优先使用 Markdown 语法**：`![alt](path)` 更简洁
2. **使用 UnoCSS 类名**：避免写太多自定义 CSS
3. **利用 Flexbox**：`flex items-center justify-center` 实现居中
4. **测试不同尺寸**：调整 `max-width` 和 `max-height` 找到合适的比例
