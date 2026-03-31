---
theme: default
layout: cover
class: text-center cover-gradient
---

<div class="cover-content">
<h1>基于 AI 的心理评估系统</h1>
<h2>GAD-7 自动化评分测评</h2>
<p class="cover-subtitle">用自然语言对话简化焦虑筛查流程</p>
</div>

<style>
.slidev-layout.cover-gradient { background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 50%, #4a90c4 100%) !important; }
.cover-content h1 { color: #fff; font-weight: 700; letter-spacing: -0.02em; text-shadow: 0 2px 20px rgba(0,0,0,0.2); }
.cover-content h2 { color: rgba(255,255,255,0.9); font-weight: 400; margin-top: 0.5em; }
.cover-subtitle { color: rgba(255,255,255,0.8); font-size: 1rem; margin-top: 1.5em; font-weight: 400; }
.slide-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
.slide-card:hover { transform: translateY(-2px); box-shadow: 0 12px 24px rgba(0,0,0,0.1); }
.problem-item::before { content: "•"; color: #dc2626; font-weight: bold; margin-right: 0.5em; }
.goal-item::before { content: "•"; color: #059669; font-weight: bold; margin-right: 0.5em; }
</style>

---
layout: default
class: px-12
---

# 问题与目标

<p class="text-slate-600 mb-6">GAD-7 是广泛使用的 7 题焦虑筛查量表。传统纸质或由人工主导的测评在学校、诊所等场景容易形成瓶颈。</p>

<div class="grid grid-cols-2 gap-8 mt-6">

<div v-click class="slide-card p-6 rounded-xl border border-red-200 bg-gradient-to-br from-red-50 to-white shadow-md min-h-48">
  <h3 class="text-xl font-semibold text-red-800 mb-4 pb-3 border-b-2 border-red-200">问题</h3>
  <ul class="space-y-3 text-base text-gray-700">
    <li class="problem-item">传统测评单次约需 15–20 分钟</li>
    <li class="problem-item">依赖人工计分，易产生差错</li>
    <li class="problem-item">难以支撑大规模部署</li>
  </ul>
</div>

<div v-click class="slide-card p-6 rounded-xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white shadow-md min-h-48">
  <h3 class="text-xl font-semibold text-emerald-800 mb-4 pb-3 border-b-2 border-emerald-200">目标</h3>
  <ul class="space-y-3 text-base text-gray-700">
    <li class="goal-item">构建自动化的 AI 测评系统</li>
    <li class="goal-item">支持自然语言多轮对话交互</li>
    <li class="goal-item">实现自动计分与报告生成</li>
  </ul>
</div>

</div>

<div v-click class="mt-6 p-6 rounded-xl bg-gradient-to-r from-slate-100 to-slate-50 border border-slate-200 shadow-sm">
  <h3 class="text-lg font-semibold text-slate-800 mb-4">预期效果</h3>
  <div class="grid grid-cols-3 gap-4 text-base">
    <div class="p-4 rounded-lg bg-white/80"><span class="font-semibold">时长：</span>单次测评由约 20 分钟缩短至 5–8 分钟</div>
    <div class="p-4 rounded-lg bg-white/80"><span class="font-semibold">准确性：</span>计分严格符合 GAD-7 规范</div>
    <div class="p-4 rounded-lg bg-white/80"><span class="font-semibold">规模：</span>可支撑大样本（如全校筛查）</div>
  </div>
</div>

---
layout: center
class: px-12
---

# 系统架构

<p class="text-lg text-slate-600 mt-4 max-w-3xl mx-auto">对话交互 → GAD-7 分值映射 → 报告输出。<span class="text-slate-400">（短讲版本省略各层实现细节。）</span></p>

---
layout: default
class: px-12
---

# 训练数据（概览）

<p class="text-slate-600 mb-6">用于微调的有标签样本来自人工标注：每条样本包含临床量表定义的 <strong>GAD-7 单项得分</strong>（<strong>0–3</strong> 分档），以及标注员的 <strong>置信度</strong>。严重度与置信度共同刻画每条训练样本——本场无需展开完整数据流水线。</p>

---
layout: default
class: px-12
---

# 示例（可选——时间紧可跳过）

<p class="text-slate-500 text-sm mb-4">约 30 秒：用户例如回答「好几天」→ 映射为分值 1 → 七题完成后给出总分与简要建议。</p>

<div v-click class="p-6 rounded-xl bg-slate-50 border border-slate-200 text-base max-w-4xl">
  <p><span class="font-bold text-slate-700">AI：</span>「过去两周里，您有多少时间感到紧张、焦虑或急切？」</p>
  <p class="mt-3"><span class="font-bold text-blue-700">用户：</span>「好几天。」</p>
  <p class="mt-3 text-slate-600">→ 该题得分 <strong>1</strong>；重复七题后得到 <strong>GAD-7 总分</strong>及与严重度相关的建议。</p>
</div>

---
layout: end
class: text-center thank-you-slide
---

<div class="flex flex-col items-center justify-center h-full">
  <h1 class="text-4xl font-bold mb-4">谢谢！</h1>
  <p class="text-xl">欢迎提问</p>
</div>

<style>
.slidev-layout.thank-you-slide { background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%) !important; }
.slidev-layout.thank-you-slide h1,
.slidev-layout.thank-you-slide p { color: #fff !important; text-shadow: 0 1px 4px rgba(0,0,0,0.3); }
</style>
