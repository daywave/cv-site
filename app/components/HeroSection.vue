<script setup lang="ts">
import { ArrowRight, Download, MapPin } from 'lucide-vue-next'
const { t } = useI18n()
</script>

<template>
  <section
    id="top"
    class="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16 bg-vinyl"
  >
    <!-- warm ambient glows -->
    <div class="absolute inset-0 -z-10 pointer-events-none">
      <div class="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-brand-400/10 dark:bg-brand-600/15 blur-[100px]" />
      <div class="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-amber-300/10 dark:bg-amber-700/10 blur-[90px]" />
    </div>

    <div class="container-xl w-full">
      <div class="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

        <!-- vinyl record art -->
        <Reveal class="flex justify-center md:justify-end order-last md:order-first" :delay="200">
          <div class="relative select-none">
            <!-- outer record disk -->
            <div
              class="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full relative animate-spin-slow"
              style="background: radial-gradient(circle at 50% 50%, #2a1810 0%, #1a0d08 60%, #120906 100%)"
            >
              <!-- groove rings -->
              <div class="absolute inset-[10%] rounded-full border border-white/[0.04]" />
              <div class="absolute inset-[18%] rounded-full border border-white/[0.04]" />
              <div class="absolute inset-[26%] rounded-full border border-white/[0.04]" />
              <div class="absolute inset-[34%] rounded-full border border-white/[0.03]" />
              <!-- glare streak — makes rotation visible -->
              <div class="absolute inset-0 rounded-full" style="background: linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 45%, transparent 100%)" />
              <!-- edge marker dot -->
              <div class="absolute top-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/25" />
              <!-- center label -->
              <div class="absolute inset-[40%] rounded-full bg-gradient-to-br from-brand-400 via-brand-500 to-rose-700 flex items-center justify-center shadow-lg">
                <span class="font-display font-bold text-white text-xs tracking-wide">DJ</span>
              </div>
            </div>
            <!-- record shadow -->
            <div class="absolute inset-0 rounded-full shadow-2xl shadow-brand-800/20 dark:shadow-brand-900/40 -z-10" />
          </div>
        </Reveal>

        <!-- artist info -->
        <div class="min-w-0">
          <Reveal>
            <p class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-500 dark:text-brand-400 mb-5">
              <span class="relative flex h-2 w-2">
                <span class="absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-70 animate-ping" />
                <span class="relative inline-flex rounded-full h-2 w-2 bg-brand-500" />
              </span>
              {{ t('hero.greeting') }}
            </p>
          </Reveal>

          <Reveal :delay="80">
            <h1
              class="text-5xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight mb-3 leading-[1.05] overflow-wrap-anywhere min-w-0"
            >
              Donovan Jerez
            </h1>
          </Reveal>

          <Reveal :delay="160">
            <h2 class="text-xl md:text-2xl font-display font-medium mb-6 text-stone-600 dark:text-stone-400">
              <span class="bg-gradient-to-r from-brand-500 to-rose-700 dark:from-brand-400 dark:to-rose-500 bg-clip-text text-transparent">
                {{ t('hero.role') }}
              </span>
            </h2>
          </Reveal>

          <Reveal :delay="240">
            <p class="max-w-lg text-base text-stone-600 dark:text-stone-400 mb-8 leading-relaxed">
              {{ t('hero.tagline') }}
            </p>
          </Reveal>

          <Reveal :delay="320">
            <div class="flex flex-wrap gap-3 mb-8">
              <a href="#contact" class="btn-primary">
                {{ t('hero.ctaContact') }}
                <ArrowRight class="w-4 h-4" />
              </a>
              <a href="/djjc_en.pdf" download class="btn-ghost">
                <Download class="w-4 h-4" />
                {{ t('hero.ctaResume') }}
              </a>
            </div>
          </Reveal>

          <Reveal :delay="400">
            <div class="flex items-center gap-2 text-sm text-stone-500 dark:text-stone-500">
              <MapPin class="w-4 h-4 text-brand-500" />
              <span>Ciudad de México, México</span>
            </div>
          </Reveal>
        </div>

      </div>
    </div>
  </section>
</template>
