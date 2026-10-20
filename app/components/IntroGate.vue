<!-- Hallmark · component: entry gate · genre: editorial · theme: studied-DNA (petithunan.com, as inspiration)
 * states: idle (plane bobs) · armed (hover/focus on Enter: nose up, trail out, monogram parts)
 *         · focus (ring, keyboard only) · active · leaving (take-off) · reduced-motion (no bob/flight, 150ms fade)
 * shown once per browser session; Esc also enters.
 -->
<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

const { t } = useI18n()
const open = ref(true)
const armed = ref(false)
const leaving = ref(false)
const btn = ref<HTMLButtonElement | null>(null)
const KEY = 'dj-gate-seen'

const lock = (on: boolean) => { document.documentElement.style.overflow = on ? 'hidden' : '' }

const close = () => {
  if (leaving.value) return
  leaving.value = true
  try { sessionStorage.setItem(KEY, '1') } catch {}
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  setTimeout(() => { open.value = false; lock(false) }, reduced ? 150 : 1300)
}
const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }

onMounted(() => {
  let seen = false
  try { seen = sessionStorage.getItem(KEY) === '1' } catch {}
  if (seen) { open.value = false; return }
  lock(true)
  // focus for keyboard users without painting the ring on load
  btn.value?.focus({ preventScroll: true, focusVisible: false } as FocusOptions)
  window.addEventListener('keydown', onKey)
})
onBeforeUnmount(() => { window.removeEventListener('keydown', onKey); lock(false) })
</script>

<template>
  <div
    v-if="open"
    class="gate fixed inset-0 z-[60] bg-paper flex flex-col items-center justify-center gap-14 px-4"
    :class="{ 'gate--armed': armed && !leaving, 'gate--leaving': leaving }"
    role="dialog"
    aria-modal="true"
    aria-label="Donovan Jerez Ceja"
  >
    <div class="flex items-center gap-6 sm:gap-12 text-ink select-none" aria-hidden="true">
      <span class="gate__mono gate__mono--l">DJ</span>
      <span class="gate__plane-wrap">
        <PaperPlane class="gate__plane w-24 sm:w-32" trail />
      </span>
      <span class="gate__mono gate__mono--r">JC</span>
    </div>

    <button
      ref="btn"
      type="button"
      class="gate__enter link font-display italic uppercase text-xl tracking-[0.08em] whitespace-nowrap"
      @mouseenter="armed = true"
      @mouseleave="armed = false"
      @focus="armed = true"
      @blur="armed = false"
      @click="close"
    >
      {{ t('gate.enter') }}
    </button>
  </div>
</template>

<style scoped>
.gate__mono {
  font-family: var(--font-body);
  font-weight: 600;
  font-size: clamp(2.75rem, 7vw, 4rem);
  letter-spacing: -0.04em;
  line-height: 1;
  transition: transform var(--dur-slow) var(--ease-out), opacity 300ms var(--ease-out);
}

/* idle: plane floats */
.gate__plane-wrap { display: inline-block; animation: bob 3.2s var(--ease-in-out) infinite alternate; }
.gate__plane { transition: transform var(--dur-slow) var(--ease-out); }
.gate__plane :deep(.plane-trail) { opacity: 0; transform: translateX(16px); transition: opacity var(--dur-slow) var(--ease-out), transform var(--dur-slow) var(--ease-out); }
@keyframes bob {
  from { transform: translateY(0) rotate(0deg); }
  to   { transform: translateY(-6px) rotate(-1.5deg); }
}

/* armed: ready for take-off */
.gate--armed .gate__mono--l { transform: translateX(-10px); }
.gate--armed .gate__mono--r { transform: translateX(10px); }
.gate--armed .gate__plane { transform: translate(6px, -8px) rotate(-12deg) scale(1.06); }
.gate--armed .gate__plane :deep(.plane-trail) { opacity: 0.7; transform: translateX(0); }

/* leaving: take-off, then the screen fades */
.gate { transition: opacity 400ms var(--ease-out) 900ms; }
.gate--leaving { opacity: 0; pointer-events: none; }
.gate--leaving .gate__mono, .gate--leaving .gate__enter { opacity: 0; transition: opacity 300ms var(--ease-out); }
.gate--leaving .gate__plane-wrap { animation: none; }
.gate--leaving .gate__plane { animation: fly 1100ms var(--ease-in) forwards; }
.gate--leaving .gate__plane :deep(.plane-trail) { opacity: 0.7; }
@keyframes fly {
  0%   { transform: translate(6px, -8px) rotate(-12deg) scale(1.06); }
  100% { transform: translate(70vw, -50vh) rotate(-22deg) scale(0.55); opacity: 0.15; }
}

@media (prefers-reduced-motion: reduce) {
  .gate__plane-wrap { animation: none; }
  .gate { transition: opacity 150ms linear; }
  .gate--leaving .gate__plane { animation: none; }
}
</style>
