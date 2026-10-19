<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section id="top" class="relative min-h-[100svh] flex items-end pt-36 pb-16 md:pb-24">
    <!-- plane enters top-right, trail behind it -->
    <Reveal :delay="300" class="absolute right-4 sm:right-10 lg:right-[8vw] top-[22vh] pointer-events-none">
      <PaperPlane class="w-24 md:w-36 text-ink hero-plane" trail />
    </Reveal>

    <div class="container-xl w-full">
      <Reveal>
        <h1 class="text-[clamp(3.5rem,13vw,10.5rem)] leading-[0.88] tracking-[-0.035em] overflow-wrap-anywhere min-w-0">
          Donovan<br>Jerez
        </h1>
      </Reveal>

      <div class="mt-10 md:mt-14 grid md:grid-cols-12 gap-8 md:gap-10 border-t border-line pt-8">
        <Reveal :delay="120" class="md:col-span-4">
          <p class="font-display text-2xl md:text-3xl leading-tight text-ink">{{ t('hero.role') }}</p>
          <p class="meta mt-3">Ciudad de México</p>
        </Reveal>

        <Reveal :delay="200" class="md:col-span-5">
          <p class="text-base md:text-lg text-ink-2 leading-relaxed max-w-[42ch]">{{ t('hero.tagline') }}</p>
        </Reveal>

        <Reveal :delay="280" class="md:col-span-3 md:justify-self-end">
          <p class="flex md:flex-col gap-x-8 gap-y-3 text-sm font-medium md:text-right">
            <a href="#contact" class="link whitespace-nowrap">{{ t('hero.ctaContact') }}</a>
            <a href="/dev_en_djjc.pdf" download class="link whitespace-nowrap">{{ t('hero.ctaResume') }}</a>
          </p>
        </Reveal>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* slow drift — the one signature motion on the page */
.hero-plane { animation: drift 7s var(--ease-in-out) infinite alternate; }
@keyframes drift {
  from { transform: translate(0, 0) rotate(0deg); }
  to   { transform: translate(-10px, 8px) rotate(2deg); }
}
</style>
