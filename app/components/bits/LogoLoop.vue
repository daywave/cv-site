<!-- Hallmark · component: logo loop · genre: atmospheric (music-player) · theme: custom (green + orange)
 * Vue port of React Bits LogoLoop — line layout only (wave/arc/orbit, drag, tilt skipped)
 * states: default · hover (pause + zoom item) · focus (pause + ring) · reduced-motion (static, scrollable)
 -->
<script setup lang="ts">
import { computed, ref } from 'vue'
import { useElementSize } from '@vueuse/core'

export type LogoItem = { name: string; src?: string; href?: string }

const props = withDefaults(defineProps<{
  logos: LogoItem[]
  speed?: number         // px per second
  direction?: 'left' | 'right'
  gap?: number           // px
  logoHeight?: number    // px — image height / wordmark size
  pauseOnHover?: boolean
  scaleOnHover?: boolean
  fadeOut?: boolean
  ariaLabel?: string
}>(), {
  speed: 60,
  direction: 'left',
  gap: 48,
  logoHeight: 28,
  pauseOnHover: true,
  scaleOnHover: true,
  fadeOut: true,
  ariaLabel: 'Logos',
})

// two identical sets; the track slides exactly one set width, then loops seamlessly
const set = ref<HTMLElement | null>(null)
const { width } = useElementSize(set)
const duration = computed(() => `${Math.max(width.value / props.speed, 1)}s`)
</script>

<template>
  <div
    class="loop"
    :class="{ 'loop--fade': fadeOut, 'loop--pause': pauseOnHover, 'loop--scale': scaleOnHover, 'loop--right': direction === 'right' }"
    :style="{ '--gap': `${gap}px`, '--h': `${logoHeight}px`, '--dur': duration }"
    role="region"
    :aria-label="ariaLabel"
  >
    <div class="loop__track">
      <ul v-for="copy in 2" :key="copy" :ref="copy === 1 ? (el) => (set = el as HTMLElement) : undefined" class="loop__set" :aria-hidden="copy === 2 || undefined">
        <li v-for="logo in logos" :key="logo.name" class="loop__item">
          <component
            :is="logo.href ? 'a' : 'span'"
            :href="logo.href"
            :target="logo.href ? '_blank' : undefined"
            :rel="logo.href ? 'noopener' : undefined"
            :tabindex="copy === 2 ? -1 : undefined"
            class="loop__logo"
          >
            <img v-if="logo.src" :src="logo.src" :alt="logo.name" :style="{ height: 'var(--h)' }" loading="lazy" />
            <span v-else>{{ logo.name }}</span>
          </component>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.loop { overflow: hidden; }
.loop--fade {
  mask-image: linear-gradient(to right, transparent, #000 12%, #000 88%, transparent);
}
.loop__track {
  display: flex;
  width: max-content;
  animation: loop var(--dur) linear infinite;
}
.loop--right .loop__track { animation-direction: reverse; }
.loop--pause:hover .loop__track,
.loop--pause:focus-within .loop__track { animation-play-state: paused; }

.loop__set {
  display: flex;
  align-items: center;
  gap: var(--gap);
  padding-right: var(--gap); /* trailing gap so both sets are equal width */
  flex-shrink: 0;
}
.loop__logo {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-display);
  font-weight: 400;
  font-size: var(--h);
  line-height: 1;
  white-space: nowrap;
  color: oklch(var(--ink-3));
  transition: color var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out);
}
a.loop__logo:hover, .loop__logo:hover { color: oklch(var(--brand-ink)); }
.loop--scale .loop__logo:hover { transform: scale(1.08); }
a.loop__logo:focus-visible {
  outline: 2px solid oklch(var(--accent));
  outline-offset: 4px;
  border-radius: 4px;
}

@keyframes loop {
  to { transform: translateX(-50%); }
}

/* reduced motion: no autoplay, let people scroll it themselves */
@media (prefers-reduced-motion: reduce) {
  .loop { overflow-x: auto; mask-image: none; }
  .loop__track { animation: none; }
  .loop__set[aria-hidden] { display: none; }
}
</style>
