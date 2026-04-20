<script setup lang="ts">
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const { t } = useI18n()
const { stats } = useCv()

const el = ref<HTMLElement | null>(null)
const values = ref<number[]>(stats.map(() => 0))
const started = ref(false)

const animate = () => {
  if (started.value) return
  started.value = true
  stats.forEach((s, i) => {
    const duration = 1600
    const start = performance.now()
    const step = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      values.value[i] = Math.floor(s.value * eased)
      if (p < 1) requestAnimationFrame(step)
      else values.value[i] = s.value
    }
    requestAnimationFrame(step)
  })
}

useIntersectionObserver(
  el,
  ([{ isIntersecting }]) => {
    if (isIntersecting) animate()
  },
  { threshold: 0.3 },
)

const fmt = (v: number) => v.toLocaleString()
</script>

<template>
  <section
    ref="el"
    class="relative overflow-hidden py-20 md:py-24 bg-gradient-to-br from-brand-600 via-brand-700 to-fuchsia-700 text-white"
  >
    <div class="absolute inset-0 bg-grid opacity-30" />
    <div class="absolute inset-0 bg-gradient-to-t from-brand-900/40 to-transparent" />

    <div class="relative container-xl">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div v-for="(s, i) in stats" :key="i" class="text-center">
          <div class="text-4xl md:text-6xl font-display font-bold mb-2 tabular-nums">
            {{ fmt(values[i] || 0) }}<span class="text-brand-200">{{ s.suffix }}</span>
          </div>
          <div class="text-xs md:text-sm text-brand-100/90 font-medium uppercase tracking-wider">
            {{ t(s.labelKey) }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
