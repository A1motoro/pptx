---
theme: seriph
background: https://images.unsplash.com/photo-1511216113906-8f57bb83e776?auto=format&fit=crop&q=80
class: text-center
highlighter: shiki
drawings:
  persist: false
transition: slide-left
title: Sleep - The Endangered Asset
mdc: true
---

# Sleep: The Endangered Asset

## The Sleep Economy

<p class="mt-8 text-sm opacity-60">125090877 · YuJia · Group 3</p>

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer hover:bg-white hover:bg-opacity-10">
    Press Space to Start <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.prev" title="Previous" class="text-xl slidev-icon-btn opacity-50 fill-current hover:opacity-100">
    <carbon:chevron-left />
  </button>
  <button @click="$slidev.nav.next" title="Next" class="text-xl slidev-icon-btn opacity-50 fill-current hover:opacity-100">
    <carbon:chevron-right />
  </button>
</div>

---
layout: default
class: biological-price-tag
---

# Summary Of the TED Talk

<p class="text-amber-400 font-semibold text-lg tracking-wider uppercase">Sleep is our core biological asset — Matt Walker's findings</p>

<div class="grid grid-cols-3 gap-8 pt-8 text-center">

  <div v-click class="flex flex-col items-center">
    <div class="w-28 h-28 mb-6 flex items-center justify-center rounded-2xl bg-red-500/20 border-2 border-red-500/50 shadow-[0_0_30px_rgba(239,68,68,0.4)]">
      <div class="i-ph-floppy-disk text-7xl opacity-80"></div>
    </div>
    <h3 class="font-black text-xl mb-3 drop-shadow">Memory</h3>
    <p class="text-sm opacity-90 leading-relaxed">Failed to <span class="text-red-400 font-bold">"Save"</span> new information into the brain's hard drive.</p>
  </div>

  <div v-click class="flex flex-col items-center">
    <div class="relative w-28 h-28 mb-6 flex flex-col items-center justify-end rounded-2xl bg-amber-500/20 border-2 border-amber-500/50 overflow-hidden shadow-[0_0_30px_rgba(245,158,11,0.3)]">
      <div 
        class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-amber-500 to-amber-400 transition-all duration-1500 ease-out" 
        :class="$slidev.nav.clicks >= 2 ? 'h-[24%]' : 'h-0'"
      ></div>
      <div v-if="$slidev.nav.clicks >= 2" class="absolute top-2 left-0 right-0 text-3xl font-black text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.8)]">+24%</div>
      <div v-else class="text-4xl font-black text-amber-500/50">?</div>
    </div>
    <h3 class="font-black text-xl mb-3 drop-shadow">Cardiovascular</h3>
    <p class="text-sm opacity-90 leading-relaxed"><span class="text-amber-400 font-bold">24%</span> spike in heart attacks following Daylight Saving time.</p>
  </div>

  <div v-click class="flex flex-col items-center">
    <div class="relative w-28 h-28 mb-6 flex flex-col items-center justify-end rounded-2xl bg-red-600/30 border-2 border-red-500/60 overflow-hidden shadow-[0_0_30px_rgba(220,38,38,0.4)]">
      <div 
        class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-red-600 to-red-500 transition-all duration-1500 ease-in-out" 
        :class="$slidev.nav.clicks >= 3 ? 'h-[30%]' : 'h-full'"
      ></div>
      <div v-if="$slidev.nav.clicks >= 3" class="absolute top-2 left-0 right-0 text-3xl font-black text-red-400 animate-pulse drop-shadow-[0_0_10px_rgba(248,113,113,0.8)]">-70%</div>
      <div v-else class="text-4xl font-black text-red-500/50">?</div>
    </div>
    <h3 class="font-black text-xl mb-3 drop-shadow">Immune System</h3>
    <p class="text-sm opacity-90 leading-relaxed"><span class="text-red-400 font-bold">70%</span> drop in Natural Killer cell activity after one night of short sleep.</p>
  </div>

</div>

<p v-click class="mt-10 text-lg opacity-80 max-w-2xl mx-auto">But this asset is being severely depleted by modern workplace systems.</p>

<style>
.biological-price-tag h1 { font-size: 2.5rem !important; font-weight: 900 !important; text-shadow: 0 2px 20px rgba(0,0,0,0.5); }
.transition-all { transition-property: all; }
.duration-1500 { transition-duration: 1500ms; }
</style>

---
layout: center
class: text-center
---

# A Sanctioned Hazard

<p class="mt-4 opacity-60 text-sm tracking-wider uppercase">Part 2 — Occupation as asset depletion</p>

<v-clicks>

<div class="mt-12 max-w-2xl mx-auto">
  <blockquote class="text-xl opacity-90 border-l-4 border-red-500 pl-6 py-4 text-left">
    "The World Health Organization has classified night shift work as a <strong>probable carcinogen</strong>."
  </blockquote>
</div>

<p class="mt-10 text-lg opacity-90">
  Jobs that cause sleep loss are <strong>harmful extraction</strong> of the body — not "dedication," but <strong>occupational hazard</strong>.
</p>

</v-clicks>

---
layout: default
class: text-center economy-section
---

# The Sleep Economy

<p class="mt-6 opacity-70 text-lg">When work depletes biological asset, sleep enters the realm of economic exchange.</p>

<div class="mt-12 grid grid-cols-2 gap-12 max-w-2xl mx-auto">
  <div v-click class="flex flex-col items-center p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30">
    <div class="i-ph-cpu text-5xl mb-3 opacity-70"></div>
    <p class="font-bold">Sleep pods</p>
    <p class="text-sm opacity-70 mt-1">Tech giants, "tool maintenance"</p>
  </div>
  <div v-click class="flex flex-col items-center p-6 rounded-2xl bg-red-500/10 border border-red-500/30">
    <div class="i-ph-moon text-5xl mb-3 opacity-70"></div>
    <p class="font-bold">Night workers</p>
    <p class="text-sm opacity-70 mt-1">Delivery, nurses, drivers...</p>
  </div>
</div>

<style>
.economy-section h1 { font-size: 2.5rem !important; font-weight: 900 !important; }
.sleep-section h1 { font-size: 2.5rem !important; font-weight: 900 !important; }
</style>

---
layout: default
class: sleep-section
---

<div class="flex justify-center items-center gap-1 mb-6">
  <span class="w-2.5 h-2.5 rounded-full bg-current opacity-100"></span>
  <span class="w-12 h-0.5 bg-current opacity-20"></span>
  <span class="w-2.5 h-2.5 rounded-full bg-current opacity-30"></span>
</div>

# Sleep Pods: Tools, Not Welfare

<p class="mt-2 opacity-60 text-sm">Part 4 — Depletion, extraction, instrumentalization</p>

<div class="mt-8 max-w-2xl mx-auto space-y-5">
  <div v-click class="flex items-center gap-6">
    <div class="w-16 h-16 shrink-0 flex items-center justify-center rounded-xl bg-amber-500/20 border-2 border-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.3)]">
      <div class="i-ph-cpu text-4xl opacity-80"></div>
    </div>
    <div>
      <p class="font-bold">Nap pods in tech offices</p>
      <p class="text-sm opacity-80">Google, Meta — sleep facilities as workplace "perk."</p>
    </div>
  </div>
  <div v-click class="flex items-center gap-6">
    <div class="w-16 h-16 shrink-0 flex items-center justify-center rounded-xl bg-amber-500/20 border-2 border-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.3)]">
      <div class="i-ph-chart-line-up text-4xl opacity-80"></div>
    </div>
    <div>
      <p class="font-bold">Investment in sleep as means of production</p>
      <p class="text-sm opacity-80">Not welfare — capital invested in the worker's biological asset to maximize output.</p>
    </div>
  </div>
  <div v-click class="flex items-center gap-6">
    <div class="w-16 h-16 shrink-0 flex items-center justify-center rounded-xl bg-amber-500/20 border-2 border-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.3)]">
      <div class="i-ph-wrench text-4xl opacity-80"></div>
    </div>
    <div>
      <p class="font-bold">Tool maintenance</p>
      <p class="text-sm opacity-80">Shorten repair time, faster return to the next production cycle.</p>
    </div>
  </div>
</div>

---
layout: default
class: sleep-section
---

<div class="flex justify-center items-center gap-1 mb-6">
  <span class="w-2.5 h-2.5 rounded-full bg-current opacity-30"></span>
  <span class="w-12 h-0.5 bg-current opacity-20"></span>
  <span class="w-2.5 h-2.5 rounded-full bg-current opacity-100"></span>
</div>

# The Consumption of Health

<p class="mt-2 opacity-60 text-sm">Certain jobs force workers to "sell" sleep quality</p>

<div class="mt-8 grid grid-cols-2 gap-x-10 gap-y-8 max-w-4xl mx-auto">
  <div v-click class="flex items-start gap-5 p-4 rounded-xl bg-white/5 border border-white/10">
    <div class="w-16 h-16 shrink-0 flex items-center justify-center rounded-xl bg-red-500/20 border-2 border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.3)]">
      <div class="i-ph-moon text-4xl opacity-80"></div>
    </div>
    <div>
      <p class="font-bold">Night shift workers</p>
      <p class="text-sm opacity-80 mt-1">Nurses, security, factory workers — circadian rhythm destroyed.</p>
    </div>
  </div>
  <div v-click class="flex items-start gap-5 p-4 rounded-xl bg-white/5 border border-white/10">
    <div class="w-16 h-16 shrink-0 flex items-center justify-center rounded-xl bg-red-500/20 border-2 border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.3)]">
      <div class="i-ph-package text-4xl opacity-80"></div>
    </div>
    <div>
      <p class="font-bold">Delivery workers</p>
      <p class="text-sm opacity-80 mt-1">Late-night orders, irregular schedules, no fixed rest.</p>
    </div>
  </div>
  <div v-click class="flex items-start gap-5 p-4 rounded-xl bg-white/5 border border-white/10">
    <div class="w-16 h-16 shrink-0 flex items-center justify-center rounded-xl bg-red-500/20 border-2 border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.3)]">
      <div class="i-ph-truck text-4xl opacity-80"></div>
    </div>
    <div>
      <p class="font-bold">Truck / long-haul drivers</p>
      <p class="text-sm opacity-80 mt-1">Tight deadlines, sleep in fragments.</p>
    </div>
  </div>
  <div v-click class="flex items-start gap-5 p-4 rounded-xl bg-white/5 border border-white/10">
    <div class="w-16 h-16 shrink-0 flex items-center justify-center rounded-xl bg-red-500/20 border-2 border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.3)]">
      <div class="i-ph-phone text-4xl opacity-80"></div>
    </div>
    <div>
      <p class="font-bold">On-call workers</p>
      <p class="text-sm opacity-80 mt-1">IT, doctors — sleep never guaranteed.</p>
    </div>
  </div>
</div>

---
layout: default
class: sleep-section
---

# Support & Compensation: What We Deserve

<p class="mt-2 opacity-60 text-sm">Part 5 — From personal will to institutional justice</p>

<div class="mt-8 max-w-2xl mx-auto space-y-5">
  <div v-click class="flex items-center gap-6">
    <div class="w-16 h-16 shrink-0 flex items-center justify-center rounded-xl bg-green-500/20 border-2 border-green-500/50 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
      <div class="i-ph-headset text-4xl opacity-80"></div>
    </div>
    <div>
      <p class="font-bold">Counseling & sleep experts</p>
      <p class="text-sm opacity-80">Psychological and sleep specialist support for affected workers.</p>
    </div>
  </div>
  <div v-click class="flex items-center gap-6">
    <div class="w-16 h-16 shrink-0 flex items-center justify-center rounded-xl bg-green-500/20 border-2 border-green-500/50 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
      <div class="i-ph-currency-dollar text-4xl opacity-80"></div>
    </div>
    <div>
      <p class="font-bold">Night shift subsidies</p>
      <p class="text-sm opacity-80">Economic compensation for work that damages sleep.</p>
    </div>
  </div>
  <div v-click class="flex items-center gap-6">
    <div class="w-16 h-16 shrink-0 flex items-center justify-center rounded-xl bg-green-500/20 border-2 border-green-500/50 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
      <div class="i-ph-scales text-4xl opacity-80"></div>
    </div>
    <div>
      <p class="font-bold">Legal oversight</p>
      <p class="text-sm opacity-80">Regulations on work hours and shift patterns that harm health.</p>
    </div>
  </div>
</div>

<p v-click class="mt-8 text-sm opacity-70 max-w-2xl mx-auto">Society and employers must provide compensation — not rely on individual effort alone.</p>

---
layout: center
class: text-center
---

# Conclusion

<v-clicks>

### Sleep health must be part of occupational safety.

### Sleep should not be a commodity to be sold indefinitely.

<h2 class="pt-12 font-bold">
  It should be an <span class="text-amber-400">inviolable human right</span>.
</h2>

</v-clicks>

---
layout: center
---

# Thank You!

<p class="opacity-50">References: Matt Walker, Ted 2019 / WHO IARC Monographs</p>

<div class="pt-10 flex gap-8 justify-center items-center flex-wrap">
  <a href="mailto:125090877@link.cuhk.edu.cn" class="flex flex-col items-center gap-1 p-2 opacity-50 hover:opacity-100">
    <div class="i-ph-envelope-simple text-2xl"></div>
    <span class="text-xs">Contact</span>
  </a>
  <a href="https://github.com/slidevjs/slidev" target="_blank" class="flex flex-col items-center gap-1 p-2 opacity-50 hover:opacity-100">
    <carbon:logo-github class="text-2xl" />
    <span class="text-xs">Slidev</span>
  </a>
  <a href="https://github.com/A1motoro/pptx" target="_blank" class="flex flex-col items-center gap-1 p-2 opacity-50 hover:opacity-100">
    <carbon:logo-github class="text-2xl" />
    <span class="text-xs">This Project</span>
  </a>
</div>

---
layout: center
class: text-center
---

# Q&A Session

<p class="mt-8 text-2xl opacity-80">Questions?</p>

<p class="mt-4 text-sm opacity-50">125090877 · YuJia · Group 3</p>

