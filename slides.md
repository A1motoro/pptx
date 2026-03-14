---
theme: default
layout: cover
class: text-center cover-gradient
---

<div class="cover-content">
<h1>AI-Powered Psychological Assessment System</h1>
<h2>GAD-7 Evaluation with Automated Scoring</h2>
<p class="cover-subtitle">Streamlining anxiety screening through natural language dialogue</p>
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

# Problem & Goals

<p class="text-slate-600 mb-6">GAD-7 is a widely used 7-item anxiety screening tool. Traditional paper-based or clinician-led assessment creates bottlenecks in schools and clinics.</p>

<div class="grid grid-cols-2 gap-8 mt-6">

<div v-click class="slide-card p-6 rounded-xl border border-red-200 bg-gradient-to-br from-red-50 to-white shadow-md min-h-48">
  <h3 class="text-xl font-semibold text-red-800 mb-4 pb-3 border-b-2 border-red-200">Problem</h3>
  <ul class="space-y-3 text-base text-gray-700">
    <li class="problem-item">Traditional assessment takes 15-20 minutes</li>
    <li class="problem-item">Manual scoring required, prone to errors</li>
    <li class="problem-item">Not suitable for large-scale deployment</li>
  </ul>
</div>

<div v-click class="slide-card p-6 rounded-xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white shadow-md min-h-48">
  <h3 class="text-xl font-semibold text-emerald-800 mb-4 pb-3 border-b-2 border-emerald-200">Goals</h3>
  <ul class="space-y-3 text-base text-gray-700">
    <li class="goal-item">Develop automated AI assessment system</li>
    <li class="goal-item">Enable natural language dialogue interaction</li>
    <li class="goal-item">Automated scoring and report generation</li>
  </ul>
</div>

</div>

<div v-click class="mt-6 p-6 rounded-xl bg-gradient-to-r from-slate-100 to-slate-50 border border-slate-200 shadow-sm">
  <h3 class="text-lg font-semibold text-slate-800 mb-4">Expected Outcomes</h3>
  <div class="grid grid-cols-3 gap-4 text-base">
    <div class="p-4 rounded-lg bg-white/80"><span class="font-semibold">Time:</span> 20 min → 5-8 min per assessment</div>
    <div class="p-4 rounded-lg bg-white/80"><span class="font-semibold">Accuracy:</span> 100% GAD-7 compliant scoring</div>
    <div class="p-4 rounded-lg bg-white/80"><span class="font-semibold">Scale:</span> Large cohorts (e.g. campus-wide screening)</div>
  </div>
</div>

---
layout: default
class: px-12
---

# System Architecture

<p class="text-slate-600 mb-6">Three-layer design: dialogue handles conversation, scoring maps answers to GAD-7 scale, reporting produces actionable output.</p>

<div class="grid grid-cols-3 gap-6 mt-6">

<div v-click class="slide-card p-6 rounded-xl bg-gradient-to-b from-blue-50 to-blue-100/50 border-l-4 border-blue-500 shadow-sm min-h-56 flex flex-col justify-center">
  <h3 class="text-lg font-bold text-blue-900 mb-3">Layer 1: Dialogue</h3>
  <p class="text-base text-blue-800 mb-2">Natural language interaction; fine-tuned LLM asks one question at a time.</p>
  <p class="text-sm text-blue-700/90">Handles greetings, context, and conversational flow. Reduces user burden vs. paper forms.</p>
</div>

<div v-click class="slide-card p-6 rounded-xl bg-gradient-to-b from-indigo-50 to-indigo-100/50 border-l-4 border-indigo-500 shadow-sm min-h-56 flex flex-col justify-center">
  <h3 class="text-lg font-bold text-indigo-900 mb-3">Layer 2: Scoring</h3>
  <p class="text-base text-indigo-800 mb-2">Understand response → Map 0-3 → Clarify when needed.</p>
  <p class="text-sm text-indigo-700/90">Interpret "several days" as 1, "more than half" as 2, etc. Calls clarify_response() on vague answers.</p>
</div>

<div v-click class="slide-card p-6 rounded-xl bg-gradient-to-b from-violet-50 to-violet-100/50 border-l-4 border-violet-500 shadow-sm min-h-56 flex flex-col justify-center">
  <h3 class="text-lg font-bold text-violet-900 mb-3">Layer 3: Reporting</h3>
  <p class="text-base text-violet-800 mb-2">Aggregate scores → Diagnosis → Recommendations & referral.</p>
  <p class="text-sm text-violet-700/90">Total 0–21; bands: minimal (0–4), mild (5–9), moderate (10–14), severe (15–21).</p>
</div>

</div>

---
layout: default
class: px-12
---

# Data Generation Pipeline

<p class="text-slate-600 mb-6">Training data is created in two stages: AI generates diverse response texts, then annotators assign GAD-7 scores. This produces labeled examples for fine-tuning.</p>

<div class="grid grid-cols-2 gap-8 mt-6">

<div v-click class="slide-card p-6 rounded-xl bg-amber-50 border-l-4 border-amber-500 shadow-sm min-h-64">
  <h4 class="text-lg font-bold text-amber-900 mb-4">Step 1: AI-Generated Short Text</h4>
  <ul class="text-base text-amber-800/90 space-y-3">
    <li>700 samples total: 7 questions × 100 per question</li>
    <li>Use LLM to generate varied response expressions (e.g. "a few days," "almost every day," "not at all")</li>
    <li>Covers all severity levels (0–3) per item for balanced training</li>
    <li>Output: plain-text responses ready for human scoring</li>
  </ul>
</div>

<div v-click class="slide-card p-6 rounded-xl bg-amber-50 border-l-4 border-amber-500 shadow-sm min-h-64">
  <h4 class="text-lg font-bold text-amber-900 mb-4">Step 2: Manual Annotation</h4>
  <ul class="text-base text-amber-800/90 space-y-3">
    <li>4-person team annotates each sample independently</li>
    <li>Fields: score (0–3) + confidence (high/medium/low) for disagreement analysis</li>
    <li>Consistency check: Cohen's Kappa > 0.80 before inclusion</li>
    <li>Final dataset ~650–680 valid samples after quality filtering</li>
  </ul>
</div>

</div>

---
layout: default
class: px-12
---

# Core Functions & Prompts

<p class="text-slate-600 mb-6">The model uses structured function calls to manage assessment state. Each response triggers one of three actions depending on clarity and completion.</p>

<div class="mt-6 space-y-6">

<div v-click class="p-5 rounded-xl bg-slate-100 border border-slate-200 text-base">
  <span class="font-semibold">System prompt:</span> GAD-7 assistant — empathetic, one question at a time, auto-map to scores.
</div>

<div class="grid grid-cols-3 gap-6">
  <div v-click class="slide-card p-5 rounded-xl bg-indigo-50 border border-indigo-200 min-h-40">
    <span class="font-mono font-bold text-indigo-700 text-base">record_score()</span>
    <p class="text-sm text-slate-600 mt-2">When the user's answer clearly maps to 0–3. Saves score, advances to next item.</p>
  </div>
  <div v-click class="slide-card p-5 rounded-xl bg-indigo-50 border border-indigo-200 min-h-40">
    <span class="font-mono font-bold text-indigo-700 text-base">clarify_response()</span>
    <p class="text-sm text-slate-600 mt-2">When answer is vague (e.g. "sometimes"). Asks follow-up to narrow to a score.</p>
  </div>
  <div v-click class="slide-card p-5 rounded-xl bg-indigo-50 border border-indigo-200 min-h-40">
    <span class="font-mono font-bold text-indigo-700 text-base">calculate_and_report()</span>
    <p class="text-sm text-slate-600 mt-2">After all 7 items scored. Sums total, assigns severity, returns recommendations.</p>
  </div>
</div>

<div v-click class="p-5 rounded-xl bg-violet-50 border border-violet-200 text-base">
  <span class="font-semibold">User prompts:</span> Opening (build rapport, explain purpose), 7 standard GAD-7 questions, clarification prompts when needed, and results with evidence-based recommendations (e.g. self-help, therapy referral).
</div>

</div>

---
layout: default
class: px-12
---

# Quick Demo

<p class="text-slate-600 mb-6">Example flow: AI asks Q1, user replies naturally, system maps to score 1 and moves to Q2. After 7 items, it produces a total and recommendations.</p>

<div class="grid grid-cols-2 gap-6 mt-6 text-base">

<div class="space-y-4">
  <div v-click class="p-5 rounded-xl bg-slate-100 border-l-4 border-slate-400">
    <span class="font-bold text-slate-700">AI</span>
    <p class="mt-2">"How often have you felt nervous or anxious in the past two weeks?"</p>
  </div>
  <div v-click class="p-5 rounded-xl bg-blue-50 border-l-4 border-blue-500 ml-6">
    <span class="font-bold text-blue-700">User</span>
    <p class="mt-2">"Several days"</p>
  </div>
  <div v-click class="p-5 rounded-xl bg-slate-100 border-l-4 border-slate-400">
    <span class="font-bold text-slate-700">AI (internal)</span>
    <p class="mt-2 font-mono text-sm">record_score("gad7_1", 1) → Next Q</p>
  </div>
</div>

<div class="space-y-4">
  <div v-click class="p-5 rounded-xl bg-slate-100 border-l-4 border-slate-400">
    <span class="font-bold text-slate-700">AI</span>
    <p class="mt-2">"Recorded. Q2: How often unable to stop worrying?"</p>
  </div>
  <div v-click class="p-5 rounded-xl bg-emerald-50 border-l-4 border-emerald-500">
    <span class="font-bold text-emerald-700">AI (final)</span>
    <p class="mt-2">"GAD-7 total: 10 (moderate). Recommendations: relaxation, exercise, or professional consult."</p>
  </div>
</div>

</div>

---
layout: end
class: text-center thank-you-slide
---

<div class="flex flex-col items-center justify-center h-full">
  <h1 class="text-4xl font-bold mb-4">Thank You!</h1>
  <p class="text-xl">Questions?</p>
</div>

<style>
.slidev-layout.thank-you-slide { background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%) !important; }
.slidev-layout.thank-you-slide h1,
.slidev-layout.thank-you-slide p { color: #fff !important; text-shadow: 0 1px 4px rgba(0,0,0,0.3); }
</style>
