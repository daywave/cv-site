<script setup lang="ts">
import { ArrowRight, Download, MapPin } from 'lucide-vue-next'
const { t } = useI18n()
</script>

<template>
  <section
    id="top"
    class="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12"
  >
    <div class="absolute inset-0 -z-10 pointer-events-none">
      <div
        class="absolute top-1/4 -left-24 w-96 h-96 bg-brand-500/25 dark:bg-brand-500/30 rounded-full blur-3xl animate-float"
      />
      <div
        class="absolute bottom-1/4 -right-24 w-[28rem] h-[28rem] bg-fuchsia-500/15 dark:bg-fuchsia-500/25 rounded-full blur-3xl animate-float"
        style="animation-delay: 2s"
      />
      <div class="absolute inset-0 bg-grid opacity-60" />
      <div
        class="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-950 via-transparent to-transparent"
      />
    </div>

    <div class="container-xl w-full">
      <div class="max-w-4xl">
        <Reveal>
          <p
            class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-600 dark:text-brand-400 mb-5"
          >
            <span class="relative flex h-2 w-2">
              <span class="absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75 animate-ping" />
              <span class="relative inline-flex rounded-full h-2 w-2 bg-brand-500" />
            </span>
            {{ t('hero.greeting') }}
          </p>
        </Reveal>

        <Reveal :delay="80">
          <h1
            class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-4 leading-[1.05]"
          >
            Donovan Jerez
          </h1>
        </Reveal>

        <Reveal :delay="160">
          <h2 class="text-2xl md:text-3xl font-display mb-6">
            <span
              class="bg-gradient-to-r from-brand-500 via-fuchsia-500 to-brand-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
            >
              {{ t('hero.role') }}
            </span>
          </h2>
        </Reveal>

        <Reveal :delay="240">
          <p
            class="max-w-2xl text-base md:text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed"
          >
            {{ t('hero.tagline') }}
          </p>
        </Reveal>

        <Reveal :delay="320">
          <div class="flex flex-wrap gap-3 mb-10">
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
          <div class="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <MapPin class="w-4 h-4" />
            <span>Ciudad de México, México</span>
          </div>
        </Reveal>
      </div>
    </div>

    <!-- scroll hint -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
      <div class="w-5 h-8 rounded-full border-2 border-slate-400 dark:border-slate-600 flex items-start justify-center p-1">
        <div class="w-1 h-1.5 rounded-full bg-slate-500 dark:bg-slate-400 animate-bounce" />
      </div>
    </div>
  </section>
</template>
