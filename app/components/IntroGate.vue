<!-- Entry screen — monogram + plane; "Enter" sends the plane flying, then the page appears.
 * states: default · hover (underline accent) · focus (ring) · active · leaving (flight) · reduced-motion (150ms fade)
 * shown once per browser session; Esc also enters.
 -->
<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

const { t } = useI18n()
const open = ref(true)
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
  btn.value?.focus()
  window.addEventListener('keydown', onKey)
})
onBeforeUnmount(() => { window.removeEventListener('keydown', onKey); lock(false) })
</script>

<template>
  <div
    v-if="open"
    class="gate fixed inset-0 z-[60] bg-paper flex flex-col items-center justify-center gap-12 px-4"
    :class="{ 'gate--leaving': leaving }"
    role="dialog"
    aria-modal="true"
    aria-label="Donovan Jerez"
  >
    <div class="flex items-center gap-8 sm:gap-14 text-ink select-none">
      <span class="gate__letter font-sans font-semibold text-5xl sm:text-6xl tracking-tight">D</span>
      <PaperPlane class="gate__plane w-28 sm:w-36" />
      <span class="gate__letter font-sans font-semibold text-5xl sm:text-6xl tracking-tight">J</span>
    </div>
    <button
      ref="btn"
      type="button"
      class="gate__enter link font-display italic uppercase text-xl tracking-wide whitespace-nowrap"
      @click="close"
    >
      {{ t('gate.enter') }}
    </button>
  </div>
</template>

<style scoped>
.gate { transition: opacity 400ms var(--ease-out) 900ms; }
.gate--leaving { opacity: 0; pointer-events: none; }
.gate__letter, .gate__enter { transition: opacity 300ms var(--ease-out); }
.gate--leaving .gate__letter, .gate--leaving .gate__enter { opacity: 0; }
.gate--leaving .gate__plane { animation: fly 1100ms var(--ease-in) forwards; }

/* climb out to the right, banking slightly */
@keyframes fly {
  0%   { transform: translate(0, 0) rotate(0); }
  20%  { transform: translate(-4vw, 2vh) rotate(4deg); }
  100% { transform: translate(70vw, -45vh) rotate(-12deg) scale(0.6); opacity: 0.2; }
}

@media (prefers-reduced-motion: reduce) {
  .gate { transition: opacity 150ms linear; }
  .gate--leaving .gate__plane { animation: none; }
}
</style>
