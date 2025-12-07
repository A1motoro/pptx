<script setup lang="ts">
defineProps<{
  click: number
  title: string
  subtitle: string
}>()
</script>

<template>
  <div class="flex flex-col items-center w-32">
    <!-- Dot Container -->
    <div class="relative w-6 h-6">
      <!-- Inactive State (Gray Dot) - hidden on click -->
      <div 
        v-click-hide="click" 
        class="absolute inset-0 w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-600 ring-4 ring-white dark:ring-[var(--slidev-theme-background)]"
      ></div>
      <!-- Active State (Blue Dot) - shown on click -->
      <div 
        v-click="click" 
        class="absolute inset-0 w-6 h-6 rounded-full bg-blue-600 shadow-lg ring-4 ring-white dark:ring-[var(--slidev-theme-background)]"
      ></div>
    </div>
    <!-- Text - shown on click -->
    <div v-click="click" class="mt-4 text-center">
      <div class="font-bold text-lg">{{ title }}</div>
      <div class="text-xs opacity-60">{{ subtitle }}</div>
    </div>
  </div>
</template>
