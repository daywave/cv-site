<script setup lang="ts">
import { Sun, Moon } from 'lucide-vue-next'
const colorMode = useColorMode()
const toggle = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button
    type="button"
    @click="toggle"
    class="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
    :aria-label="`Switch to ${colorMode.value === 'dark' ? 'light' : 'dark'} mode`"
  >
    <ClientOnly>
      <Sun v-if="colorMode.value === 'dark'" class="w-5 h-5" />
      <Moon v-else class="w-5 h-5" />
      <template #fallback>
        <div class="w-5 h-5" />
      </template>
    </ClientOnly>
  </button>
</template>
