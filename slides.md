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
layout: section-title
class: px-12
---

# System Architecture

---
layout: default
class: px-12
---

# Layer 1: Dialogue - Interaction Engine

<p class="text-slate-600 mb-6">Focuses on natural, empathetic engagement. We transform a rigid clinical form into a supportive conversation using state-of-the-art LLM orchestration.</p>

<div class="grid grid-cols-2 gap-8 mt-4">

<div v-click class="slide-card p-6 rounded-xl border border-blue-200 bg-white shadow-md">
  <h3 class="text-xl font-bold text-blue-800 mb-4 border-b pb-2">Dialogue Logic</h3>
  <ul class="space-y-3 text-sm text-gray-700">
    <li><strong>Stateful Conversation:</strong> One question at a time to prevent cognitive overload.</li>
    <li><strong>Empathy Tuning:</strong> SFT (Supervised Fine-Tuning) on counseling scripts for supportive tone.</li>
    <li><strong>Context Awareness:</strong> Handles interjections (e.g., "I'm not sure...") without losing place.</li>
  </ul>
</div>

<div v-click class="slide-card p-6 rounded-xl border border-blue-200 bg-blue-50 shadow-md">
  <h3 class="text-xl font-bold text-blue-900 mb-4 border-b border-blue-200 pb-2">Tech Stack</h3>
  <div class="space-y-4">
    <div class="flex items-start gap-3">
      <div class="bg-blue-500 text-white px-2 py-1 rounded text-xs font-mono">LLM</div>
      <p class="text-xs">GPT-4o / Llama-3-70B (SFT optimized for psychological safety)</p>
    </div>
    <div class="flex items-start gap-3">
      <div class="bg-blue-500 text-white px-2 py-1 rounded text-xs font-mono">Flow</div>
      <p class="text-xs">LangGraph for complex state-machine dialogue management</p>
    </div>
    <div class="flex items-start gap-3">
      <div class="bg-blue-500 text-white px-2 py-1 rounded text-xs font-mono">Real-time</div>
      <p class="text-xs">WebSocket + Redis for low-latency streaming responses</p>
    </div>
  </div>
</div>

</div>

---
layout: default
class: px-12
---

# Layer 2: Scoring - Precision Mapping

<p class="text-slate-600 mb-6">The "Brain" of the system. It bridges the gap between vague human expressions and strict GAD-7 clinical scoring (0–3 scale).</p>

<div class="grid grid-cols-2 gap-8 mt-4">

<div v-click class="slide-card p-6 rounded-xl border border-indigo-200 bg-white shadow-md">
  <h3 class="text-xl font-bold text-indigo-800 mb-4 border-b pb-2">Intelligence Logic</h3>
  <ul class="space-y-3 text-sm text-gray-700">
    <li><strong>Semantic Alignment:</strong> Maps "a few times" to 1, "constantly" to 3.</li>
    <li><strong>Active Clarification:</strong> Triggers follow-up if user says "it varies" or "maybe."</li>
    <li><strong>Structure Enforcement:</strong> Forces the model to output valid tool calls only.</li>
  </ul>
</div>

<div v-click class="slide-card p-6 rounded-xl border border-indigo-200 bg-indigo-50 shadow-md">
  <h3 class="text-xl font-bold text-indigo-900 mb-4 border-b border-indigo-200 pb-2">Tech Stack</h3>
  <div class="space-y-4">
    <div class="flex items-start gap-3">
      <div class="bg-indigo-500 text-white px-2 py-1 rounded text-xs font-mono">Reasoning</div>
      <p class="text-xs">Function Calling (Tool Use) to extract <code>record_score()</code></p>
    </div>
    <div class="flex items-start gap-3">
      <div class="bg-indigo-500 text-white px-2 py-1 rounded text-xs font-mono">Prompting</div>
      <p class="text-xs">Few-Shot Chain-of-Thought (CoT) for scoring consistency</p>
    </div>
    <div class="flex items-start gap-3">
      <div class="bg-indigo-500 text-white px-2 py-1 rounded text-xs font-mono">Validation</div>
      <p class="text-xs">Pydantic for strict schema and integer range (0-3) verification</p>
    </div>
  </div>
</div>

</div>

---
layout: default
class: px-12
---

# Layer 3: Reporting - Security & Insights

<p class="text-slate-600 mb-6">The final stage translates scores into actionable reports while maintaining the highest standards of data privacy and clinical validity.</p>

<div class="grid grid-cols-2 gap-8 mt-4">

<div v-click class="slide-card p-6 rounded-xl border border-violet-200 bg-white shadow-md">
  <h3 class="text-xl font-bold text-violet-800 mb-4 border-b pb-2">Output Logic</h3>
  <ul class="space-y-3 text-sm text-gray-700">
    <li><strong>Clinical Triage:</strong> Automated severity banding (0-21 score range).</li>
    <li><strong>Dynamic Referral:</strong> Tailored advice based on local resource databases.</li>
    <li><strong>Secure Delivery:</strong> Direct push to clinician dashboards or encrypted PDFs.</li>
  </ul>
</div>

<div v-click class="slide-card p-6 rounded-xl border border-violet-200 bg-violet-50 shadow-md">
  <h3 class="text-xl font-bold text-violet-900 mb-4 border-b border-violet-200 pb-2">Tech Stack</h3>
  <div class="space-y-4">
    <div class="flex items-start gap-3">
      <div class="bg-violet-500 text-white px-2 py-1 rounded text-xs font-mono">API Layer</div>
      <p class="text-xs">FastAPI (Python) for high-performance async processing</p>
    </div>
    <div class="flex items-start gap-3">
      <div class="bg-violet-500 text-white px-2 py-1 rounded text-xs font-mono">Storage</div>
      <p class="text-xs">PostgreSQL with AES-256 encryption (HIPAA-compliant design)</p>
    </div>
    <div class="flex items-start gap-3">
      <div class="bg-violet-500 text-white px-2 py-1 rounded text-xs font-mono">Export</div>
      <p class="text-xs">ReportLab / WeasyPrint for automated PDF generation</p>
    </div>
  </div>
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
