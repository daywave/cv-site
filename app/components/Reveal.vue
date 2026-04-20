<script setup lang="ts">
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const props = defineProps<{
  delay?: number
  as?: string
  threshold?: number
}>()

const el = ref<HTMLElement | null>(null)
const visible = ref(false)

const { stop } = useIntersectionObserver(
  el,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      visible.value = true
      stop()
    }
  },
  { threshold: props.threshold ?? 0.12 },
)
</script>

<template>
  <component
    :is="as || 'div'"
    ref="el"
    :class="[
      'transition-all duration-700 ease-out will-change-transform',
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
    ]"
    :style="{ transitionDelay: `${delay || 0}ms` }"
  >
    <slot />
  </component>
</template>
