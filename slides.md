---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## The 48-Hour Rebellion
  Reaction Presentation
drawings:
  persist: false
transition: slide-left
css: unocss
---

# The 48-Hour Rebellion
## Finding Agency in the Age of Algorithms

<div class="abs-br m-6 text-xl opacity-50">
  Yu Jia 125090877
</div>

<!-- note
中文提示：
开场定调。
抛弃了复杂的理论，我们今天只谈一个核心：如何在算法时代通过一个简单的法则夺回主导权。
-->

---
layout: image-right
image: /Bryce.png
class: my-auto
---

# The Speaker
### The Authority of Experience

**Bryce Dallas Howard**
<div class="opacity-80 text-sm mb-4">Actress / Director / Star of <i>Black Mirror</i>'s "Nosedive"</div>

*   **3rd Generation Entertainer**
    *   Daughter of Ron Howard.
*   **70 Years in the Spotlight**
    *   Her family has navigated public life for decades.

<div v-click class="mt-6 p-3 bg-gray-100 dark:bg-gray-800 border-l-4 border-red-500 rounded-r text-left text-sm">
  <b>Why listen to her?</b><br>
  She isn't guessing. She possesses a <span class="text-red-600 font-bold">Blueprint</span> for survival that we desperately need.
</div>

<div class="mt-4 text-xs opacity-50 text-left">
  Resource: www.ted.com
</div>

<!-- note
中文提示：
1. 介绍权威：Bryce Dallas Howard。
2. 重点：她家族三代都在聚光灯下，对于“公开生活”的压力，她比任何人都懂。
-->

---
layout: default
---

# The Context
### The "Global Social Experiment"

<div class="grid grid-cols-2 gap-8 mt-10">

<div v-click>
  <h3 class="text-xl font-bold text-blue-600">The "Nosedive" Reality</h3>
  <p class="opacity-80 mt-2">
    In 2016, Bryce filmed a world governed by social ratings.
    <br><br>
    We aren't there yet, but we have entered a <b>New Era</b>.
  </p>
</div>

<div v-click>
  <h3 class="text-xl font-bold text-red-600">The Problem</h3>
  <ul class="list-disc list-inside mt-2 opacity-80">
    <li>Everyone has a global audience.</li>
    <li>We live publicly without guidance.</li>
    <li>We seek "relevance" at any cost.</li>
  </ul>
</div>

</div>

<div v-click class="mt-12 text-center font-serif text-3xl italic opacity-60">
  "We are making life-altering decisions about our boundaries with no precedent."
</div>

<!-- note
中文提示：
1. 背景：我们正处在一个巨大的社会实验中。
2. 痛点：每个人都有观众，但没人教我们怎么应对。
-->

---

# The Trap
### Why do we feel anxious?

<div class="text-sm mb-4 opacity-60">We are fighting human nature against supercomputers.</div>

<div class="grid grid-cols-2 gap-6">

<div class="border border-gray-300 p-5 rounded-lg shadow-sm hover:shadow-md transition">
  <div class="text-4xl mb-2">🍭</div>
  <div class="font-bold text-lg mb-1">The Validation Loop</div>
  <div class="text-sm opacity-80">
    We crave instant connection.
    <br>When something happens, our first instinct is: <b>"I must share this now."</b>
  </div>
</div>

<div class="border border-gray-300 p-5 rounded-lg shadow-sm hover:shadow-md transition bg-red-50 dark:bg-red-900/20 border-red-200">
  <div class="text-4xl mb-2">⚡</div>
  <div class="font-bold text-lg mb-1 text-red-700 dark:text-red-400">The Urgency Trap</div>
  <div class="text-sm opacity-80">
    Algorithms thrive on <b>Impulse</b>.
    <br>They want our raw, unfiltered emotions because that drives engagement.
  </div>
</div>

</div>

<div v-click class="mt-6 text-center font-serif text-2xl italic">
  "We are trading our private moments for public metrics."
</div>

<!-- note
中文提示：
逻辑修正：这里不再引用Reference，而是讲心理机制。
1. 验证循环：我们要即时反馈。
2. 紧急陷阱：算法想要我们的“冲动”。
这就是我们失去主导权的原因。
-->

---
layout: default
---

# The Evidence
### The Cycle of Regret

<div class="w-full max-w-3xl mx-auto mt-12">
  
  <!-- Timeline Container -->
  <div class="relative flex justify-between items-start pt-8 pb-16">
    
    <!-- Background Line (Gray) -->
    <div class="absolute left-0 top-11 w-full h-1 bg-gray-200 dark:bg-gray-700 rounded"></div>

    <!-- Timeline Nodes -->
    <TimelineNode :click="1" title="Trigger" subtitle="Strong Emotion" />
    <TimelineNode :click="2" title="Reaction" subtitle="Instant Post" />
    <TimelineNode :click="3" title="Result" subtitle="Public Data" />

  </div>

</div>

<div v-click="4" class="mt-8 p-4 bg-gray-100 dark:bg-gray-800 border-l-4 border-gray-500 rounded text-center italic opacity-80">
  "Without a pause, your temporary emotion becomes permanent data."
</div>

<!-- note
中文提示：
1. 极简时间轴：灰线串联三个点。
2. 动画逻辑：
   - Click 1: 点亮"Trigger" (触发)。
   - Click 2: 点亮"Reaction" (反应)。
   - Click 3: 点亮"Result" (结果)。
3. 视觉：没有任何花哨的颜色变化，只有“未发生(灰)”和“发生(蓝)”，非常清晰。
-->

---

# The Solution
### The "Cheryl Method"

Bryce offers a rule from her mother to break this cycle.

<div class="flex justify-center items-center my-10">
  <div class="relative p-8 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-2xl transform hover:scale-105 transition duration-500">
    <div class="text-5xl font-bold mb-2">The 2-Day Delay</div>
    <div class="text-lg opacity-90">Rule: Wait 48 hours before posting anything.</div>
  </div>
</div>

<div class="flex items-center justify-center mt-8 relative h-32">
  <div class="flex items-center justify-center gap-8 absolute inset-0 transition-all duration-500">
    <div class="flex-1 text-center">
      <h4 class="font-bold text-xl mb-2">Step 1: Experience</h4>
      <p class="text-sm opacity-70">Be present in private.</p>
    </div>
    <div class="flex-shrink-0 w-32 text-center"></div>
    <div class="flex-1 text-center">
      <h4 class="font-bold text-xl mb-2">Step 2: Exhibition</h4>
      <p class="text-sm opacity-70">Calculate the public position later.</p>
    </div>
  </div>
  
  <div v-click class="flex items-center justify-center gap-8 absolute inset-0 transition-all duration-500 bg-white/90 dark:bg-black/90 backdrop-blur-sm z-10">
     <div class="text-center">
        <div class="text-4xl mb-2">⏸️</div>
        <div class="text-2xl font-bold text-blue-600">The Magic Pause</div>
        <div class="text-sm opacity-70">Turning "Reaction" into "Reflection"</div>
     </div>
  </div>
</div>

<!-- note
中文提示：
1. 解法：48小时法则。
2. 重点：在“体验”和“展示”之间插入一个巨大的暂停键。
-->

---

# Why It Works
### My Reaction & Takeaway

How a simple rule defeats the Complex System.

<div class="grid grid-cols-3 gap-2 mt-8 items-center">

  <div class="text-center p-4 border rounded bg-red-50 dark:bg-red-900/10">
    <div class="font-bold text-red-600">The Algorithm</div>
    <div class="text-xs mt-2">Feeds on <b>Impulse</b></div>
    <div class="text-xs">(Stimulus <carbon-arrow-right /> Reaction)</div>
  </div>

  <div class="text-center text-2xl text-gray-400">
    <carbon-close-filled />
  </div>

  <div class="text-center p-4 border rounded bg-green-50 dark:bg-green-900/10">
    <div class="font-bold text-green-600">The 48h Rule</div>
    <div class="text-xs mt-2">Creates <b>Autonomy</b></div>
    <div class="text-xs">(Stimulus <span class="text-blue-500">|| Pause ||</span> Choice)</div>
  </div>

</div>

<br>

<div v-click class="mt-4 text-center">
  <div class="mb-2"><b>Starve the Machine:</b> You withhold the raw data it craves.</div>
  <div class="mb-2"><b>Protect the Self:</b> You ensure your public self is mature.</div>
</div>

<div v-click class="mt-8 p-4 bg-gray-100 dark:bg-gray-800 border-l-4 border-blue-500 rounded-r text-center italic text-lg text-gray-700 dark:text-gray-300">
  "The Algorithm is a beast that eats our Impulse. <br>If we don't feed it immediately, we regain control."
</div>

<!-- note
中文提示：
1. 原理总结：饿死算法，夺回控制。
2. 左边：算法吃“冲动”。
3. 右边：延迟创造“自主”。
4. 结论：这是我们作为普通人能做的最有效的反叛。
-->

---
layout: center
class: text-center
---

# Conclusion

<div class="text-3xl font-serif italic mb-8 text-gray-600 dark:text-gray-300">
  "A private life makes a public life worth living."
</div>

<div class="text-left max-w-lg mx-auto">
  <p class="mb-4">
    <carbon-checkmark-filled class="inline text-green-500 mr-2"/>
    Privacy is not dead, but it requires work.
  </p>
  <p class="mb-4">
    <carbon-checkmark-filled class="inline text-green-500 mr-2"/>
    Don't wait for legislation.
  </p>
  <p>
    <carbon-checkmark-filled class="inline text-green-500 mr-2"/>
    <b>Start the 48-Hour Rebellion today.</b>
  </p>
</div>

<div class="mt-12 opacity-50 text-sm">
  Thank You
</div>

<!-- note
中文提示：
1. 总结：引用金句。
2. 呼吁行动：别等法律，现在就开始。
-->

---
layout: center
class: text-center
---

<div class="relative">
  <div class="absolute inset-0 flex items-center justify-center">
    <div class="w-96 h-96 border-4 border-blue-200 dark:border-blue-800 rounded-full opacity-20"></div>
  </div>
  <div class="absolute inset-0 flex items-center justify-center">
    <div class="w-64 h-64 border-2 border-purple-200 dark:border-purple-800 rounded-full opacity-30"></div>
  </div>
  <div class="relative z-10">
    <h1 class="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      Q&A Session
    </h1>
  </div>
</div>