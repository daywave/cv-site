<!-- Hand-built line mark — folded paper plane with engraving-style hatching. Colour follows currentColor. -->
<script setup lang="ts">
withDefaults(defineProps<{ trail?: boolean }>(), { trail: false })

// hatch the lower fold: short strokes between the centre crease and the keel edge
const hatch = Array.from({ length: 9 }, (_, i) => {
  const t = 0.12 + i * 0.085
  const p = [116 - 70 * t, 8 + 42 * t]
  const q = [116 - 58 * t, 8 + 66 * t]
  const k = 0.72 // stop short of the edge, like a burin stroke
  return { x1: p[0], y1: p[1], x2: p[0] + (q[0] - p[0]) * k, y2: p[1] + (q[1] - p[1]) * k }
})
</script>

<template>
  <svg viewBox="0 0 120 80" class="overflow-visible" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" aria-hidden="true">
    <path v-if="trail" class="plane-trail" d="M-40 76 C -18 74, -6 62, 18 64" stroke-dasharray="2 5" stroke-linecap="round" opacity="0.6" />
    <!-- upper wing -->
    <path d="M116 8 L4 40 L46 50 Z" fill="oklch(var(--paper))" />
    <!-- wing ribs -->
    <path d="M116 8 L30 41" stroke-width="0.8" opacity="0.55" />
    <path d="M116 8 L60 30" stroke-width="0.6" opacity="0.4" />
    <!-- keel -->
    <path d="M116 8 L46 50 L58 74 Z" fill="oklch(var(--paper))" />
    <line v-for="(h, i) in hatch" :key="i" v-bind="h" stroke-width="0.7" stroke-linecap="round" />
    <!-- tucked rear flap -->
    <path d="M46 50 L34 62 L58 74" />
  </svg>
</template>
