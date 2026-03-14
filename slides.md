---
theme: default
layout: cover
class: text-center cover-gradient
---

<div class="cover-content">
<h1>AI-Powered Psychological Assessment System</h1>
<h2>GAD-7 Evaluation with Automated Scoring</h2>
</div>

<style>
.slidev-layout.cover-gradient { background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 50%, #4a90c4 100%) !important; }
.cover-content h1 { color: #fff; font-weight: 700; letter-spacing: -0.02em; text-shadow: 0 2px 20px rgba(0,0,0,0.2); }
.cover-content h2 { color: rgba(255,255,255,0.9); font-weight: 400; margin-top: 0.5em; }
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

<div class="grid grid-cols-2 gap-6 mt-4">

<div v-click class="slide-card p-4 rounded-xl border border-red-200 bg-gradient-to-br from-red-50 to-white shadow-md">
  <h3 class="text-lg font-semibold text-red-800 mb-2 pb-2 border-b-2 border-red-200">Problem</h3>
  <ul class="space-y-1 text-sm text-gray-700">
    <li class="problem-item">Traditional assessment takes 15-20 minutes</li>
    <li class="problem-item">Manual scoring required, prone to errors</li>
    <li class="problem-item">Not suitable for large-scale deployment</li>
  </ul>
</div>

<div v-click class="slide-card p-4 rounded-xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white shadow-md">
  <h3 class="text-lg font-semibold text-emerald-800 mb-2 pb-2 border-b-2 border-emerald-200">Goals</h3>
  <ul class="space-y-1 text-sm text-gray-700">
    <li class="goal-item">Develop automated AI assessment system</li>
    <li class="goal-item">Enable natural language dialogue interaction</li>
    <li class="goal-item">Automated scoring and report generation</li>
  </ul>
</div>

</div>

<div v-click class="mt-4 p-4 rounded-xl bg-gradient-to-r from-slate-100 to-slate-50 border border-slate-200 shadow-sm">
  <h3 class="text-base font-semibold text-slate-800 mb-2">Expected Outcomes</h3>
  <div class="grid grid-cols-3 gap-3 text-sm">
    <div class="p-2 rounded-lg bg-white/80">20 min → 5-8 min</div>
    <div class="p-2 rounded-lg bg-white/80">100% GAD-7 compliant</div>
    <div class="p-2 rounded-lg bg-white/80">Large-scale scalable</div>
  </div>
</div>

---
layout: default
class: px-12
---

# System Architecture

<div class="grid grid-cols-3 gap-4 mt-4">

<div v-click class="slide-card p-4 rounded-xl bg-gradient-to-b from-blue-50 to-blue-100/50 border-l-4 border-blue-500 shadow-sm">
  <h3 class="text-base font-bold text-blue-900">Layer 1: Dialogue</h3>
  <p class="text-sm text-blue-800 mt-1">Natural language interaction, fine-tuned LLM asks one question at a time</p>
</div>

<div v-click class="slide-card p-4 rounded-xl bg-gradient-to-b from-indigo-50 to-indigo-100/50 border-l-4 border-indigo-500 shadow-sm">
  <h3 class="text-base font-bold text-indigo-900">Layer 2: Scoring</h3>
  <p class="text-sm text-indigo-800 mt-1">Understand response → Map 0-3 → Clarify when needed</p>
</div>

<div v-click class="slide-card p-4 rounded-xl bg-gradient-to-b from-violet-50 to-violet-100/50 border-l-4 border-violet-500 shadow-sm">
  <h3 class="text-base font-bold text-violet-900">Layer 3: Reporting</h3>
  <p class="text-sm text-violet-800 mt-1">Aggregate scores → Diagnosis → Recommendations & referral</p>
</div>

</div>

---
layout: default
class: px-12
---

# Data Generation Pipeline

<div class="grid grid-cols-2 gap-6 mt-4">

<div v-click class="slide-card p-4 rounded-xl bg-amber-50 border-l-4 border-amber-500 shadow-sm">
  <h4 class="font-bold text-amber-900 mb-2">Step 1: AI-Generated Short Text</h4>
  <ul class="text-sm text-amber-800/90 space-y-1">
    <li>700 samples total: 7 questions × 100 per question</li>
    <li>Use LLM to generate varied response expressions</li>
    <li>Covers different severity levels (0–3) per item</li>
  </ul>
</div>

<div v-click class="slide-card p-4 rounded-xl bg-amber-50 border-l-4 border-amber-500 shadow-sm">
  <h4 class="font-bold text-amber-900 mb-2">Step 2: Manual Annotation</h4>
  <ul class="text-sm text-amber-800/90 space-y-1">
    <li>4-person team annotates each sample</li>
    <li>Fields: score (0–3) + confidence (high/medium/low)</li>
    <li>Consistency check: Cohen's Kappa > 0.80</li>
  </ul>
</div>

</div>

---
layout: default
class: px-12
---

# Core Functions & Prompts

<div class="mt-4 space-y-4">

<div v-click class="p-3 rounded-lg bg-slate-100 border border-slate-200 text-sm">
  <span class="font-semibold">System prompt:</span> GAD-7 assistant — empathetic, one question at a time, auto-map to scores.
</div>

<div class="grid grid-cols-3 gap-3">
  <div v-click class="slide-card p-3 rounded-lg bg-indigo-50 border border-indigo-200">
    <span class="font-mono font-bold text-indigo-700">record_score()</span>
    <p class="text-xs text-slate-600 mt-1">Clear response → record → next question</p>
  </div>
  <div v-click class="slide-card p-3 rounded-lg bg-indigo-50 border border-indigo-200">
    <span class="font-mono font-bold text-indigo-700">clarify_response()</span>
    <p class="text-xs text-slate-600 mt-1">Ambiguous → ask for clarification</p>
  </div>
  <div v-click class="slide-card p-3 rounded-lg bg-indigo-50 border border-indigo-200">
    <span class="font-mono font-bold text-indigo-700">calculate_and_report()</span>
    <p class="text-xs text-slate-600 mt-1">All 7 done → generate report</p>
  </div>
</div>

<div v-click class="p-3 rounded-lg bg-violet-50 border border-violet-200 text-sm">
  <span class="font-semibold">User prompts:</span> Opening, 7 GAD-7 questions, clarification when needed, results with recommendations.
</div>

</div>

---
layout: default
class: px-12
---

# Quick Demo

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">

<div>
  <div v-click class="p-3 rounded-lg bg-slate-100 mb-2">
    <span class="font-bold text-slate-700">AI</span>
    <p class="mt-1">"How often have you felt nervous or anxious in the past two weeks?"</p>
  </div>
  <div v-click class="p-3 rounded-lg bg-blue-50 ml-4 mb-2">
    <span class="font-bold text-blue-700">User</span>
    <p class="mt-1">"Several days"</p>
  </div>
  <div v-click class="p-3 rounded-lg bg-slate-100">
    <span class="font-bold text-slate-700">AI</span>
    <p class="mt-1 font-mono text-xs">record_score("gad7_1", 1) → Next Q</p>
  </div>
</div>

<div>
  <div v-click class="p-3 rounded-lg bg-slate-100 mb-2">
    <span class="font-bold text-slate-700">AI</span>
    <p class="mt-1">"Recorded. Q2: How often unable to stop worrying?"</p>
  </div>
  <div v-click class="p-3 rounded-lg bg-emerald-50">
    <span class="font-bold text-emerald-700">AI (final)</span>
    <p class="mt-1">"GAD-7 total: 10 (moderate). Recommendations: relaxation, exercise, or professional consult."</p>
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
