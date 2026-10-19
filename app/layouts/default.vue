<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useWindowScroll } from '@vueuse/core'

const { t } = useI18n()
const { y } = useWindowScroll()
const progress = ref(0)
const today = ref('')

onMounted(() => {
  const d = new Date()
  today.value = [d.getDate(), d.getMonth() + 1, d.getFullYear()].map((n) => String(n).padStart(2, '0')).join('.')
})

// scroll progress — transform only, no layout
watchEffect(() => {
  if (typeof document === 'undefined') return
  const max = document.documentElement.scrollHeight - window.innerHeight
  progress.value = max > 0 ? Math.min(y.value / max, 1) : 0
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <IntroGate />

    <!-- scroll progress line -->
    <div class="fixed top-0 inset-x-0 h-[3px] z-[55] bg-ink origin-left pointer-events-none" :style="{ transform: `scaleX(${progress})` }" aria-hidden="true" />

    <!-- HP1 vertical rails -->
    <div class="hidden xl:flex fixed left-5 bottom-10 z-40 flex-col items-center gap-16 meta [writing-mode:vertical-rl] rotate-180 pointer-events-none" aria-hidden="true">
      <span>{{ t('rails.role') }}</span>
      <span>{{ today }}</span>
    </div>

    <TheNav />
    <main class="flex-1">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>
