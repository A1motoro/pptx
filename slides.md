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
layout: default
class: px-12
---

# 系统架构

<p class="text-slate-600 mb-5 text-sm leading-relaxed">整体流程：<strong>对话交互</strong> → <strong>GAD-7 单项分值映射</strong> → <strong>报告与分流建议</strong>。以下三层在工程上解耦，便于分别迭代模型、规则与合规策略。</p>

<div class="grid grid-cols-3 gap-5 mt-2 text-sm">

<div v-click class="slide-card p-5 rounded-xl border border-blue-200 bg-gradient-to-b from-blue-50/80 to-white shadow-md">
  <h3 class="text-base font-bold text-blue-900 mb-2 pb-2 border-b border-blue-200">第一层：对话与交互</h3>
  <ul class="space-y-2 text-slate-700 leading-snug">
    <li><strong>状态化多轮：</strong>一次只问一题，降低认知负担，支持插话与续接上下文。</li>
    <li><strong>语气与安全：</strong>基于心理咨询语料的微调（SFT），保持支持性、非评判表述。</li>
    <li><strong>工程栈：</strong>大语言模型 + 对话状态机（如 LangGraph），流式输出降低等待感。</li>
  </ul>
</div>

<div v-click class="slide-card p-5 rounded-xl border border-indigo-200 bg-gradient-to-b from-indigo-50/80 to-white shadow-md">
  <h3 class="text-base font-bold text-indigo-900 mb-2 pb-2 border-b border-indigo-200">第二层：计分与对齐</h3>
  <ul class="space-y-2 text-slate-700 leading-snug">
    <li><strong>语义对齐：</strong>将「好几天」「几乎每天」等自然语言稳定映射到临床 <strong>0–3</strong> 分档。</li>
    <li><strong>主动澄清：</strong>回答模糊时追问，直至可落到合法分值或明确弃权。</li>
    <li><strong>结构化输出：</strong>函数调用 / 工具调用抽取分值，Schema 校验（如 Pydantic）防止越界。</li>
  </ul>
</div>

<div v-click class="slide-card p-5 rounded-xl border border-violet-200 bg-gradient-to-b from-violet-50/80 to-white shadow-md">
  <h3 class="text-base font-bold text-violet-900 mb-2 pb-2 border-b border-violet-200">第三层：报告与交付</h3>
  <ul class="space-y-2 text-slate-700 leading-snug">
    <li><strong>临床分流：</strong>按 GAD-7 总分（0–21）划分严重度区间，匹配相应建议话术。</li>
    <li><strong>行动建议：</strong>自助策略、随访或转介提示可按机构资源库配置。</li>
    <li><strong>安全交付：</strong>API 汇总结果；可对接工作台或加密导出的 PDF（依部署环境而定）。</li>
  </ul>
</div>

</div>

---
layout: default
class: px-12
---

# 训练数据构建

<p class="text-slate-600 mb-4 text-sm leading-relaxed">监督微调需要「用户自然语言表述 ↔ GAD-7 合规分值」成对样本。我们采用 <strong>生成 + 人工标注</strong> 两阶段：先扩大表述多样性，再用标注一致性筛选高质量子集。每条标注同时记录 <strong>分值（0–3）</strong> 与 <strong>置信度</strong>，用于训练与分析歧义。</p>

<div class="grid grid-cols-2 gap-6 mt-2">

<div v-click class="slide-card p-5 rounded-xl border-l-4 border-amber-500 bg-amber-50/60 shadow-sm">
  <h4 class="text-base font-bold text-amber-950 mb-3">阶段一：模型生成候选表述</h4>
  <ul class="text-slate-800 space-y-2 text-sm leading-relaxed">
    <li>按 7 个 GAD-7 题项分别生成多种口语化回答（不同强度与措辞）。</li>
    <li>规模示例：约 <strong>700</strong> 条候选（7 题 × 每题约 100 条），覆盖各分档以利类别平衡。</li>
    <li>输出为纯文本答复，进入人工打标环节。</li>
  </ul>
</div>

<div v-click class="slide-card p-5 rounded-xl border-l-4 border-amber-500 bg-amber-50/60 shadow-sm">
  <h4 class="text-base font-bold text-amber-950 mb-3">阶段二：人工标注与质控</h4>
  <ul class="text-slate-800 space-y-2 text-sm leading-relaxed">
    <li>多人独立标注：每条样本标注 <strong>GAD-7 单项分值（0–3）</strong> + <strong>置信度</strong>（如高 / 中 / 低）。</li>
    <li>质量控制：经一致性审核与质控流程筛选后，合格样本纳入训练集。</li>
    <li>质控后有效样本约 <strong>650–680</strong> 条，用于微调与评测分析。</li>
  </ul>
</div>

</div>

<p v-click class="mt-4 text-xs text-slate-500 leading-relaxed">说明：<strong>严重度</strong>由 0–3 分值体现；<strong>置信度</strong>反映标注员对该句应属分档的把握，可用于难例挖掘或与模型不确定度对照。</p>

---
layout: default
class: px-12
---

# 示例

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
