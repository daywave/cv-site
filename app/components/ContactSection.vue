<script setup lang="ts">
import { Mail, Phone, MapPin, Linkedin, ArrowRight } from 'lucide-vue-next'
const { t } = useI18n()
</script>

<template>
  <section id="contact" class="section">
    <div class="container-xl max-w-3xl">
      <Reveal class="mb-12">
        <p class="section-kicker">{{ t('contact.kicker') }}</p>
        <h2 class="section-title">{{ t('contact.title') }}</h2>
        <p class="text-base text-stone-600 dark:text-stone-400 max-w-xl">
          {{ t('contact.copy') }}
        </p>
      </Reveal>

      <Reveal :delay="100">
        <a
          href="mailto:djjceja@gmail.com"
          class="card block hover:border-brand-500/50 dark:hover:border-brand-600/50 transition-all group mb-4"
        >
          <div class="flex items-center gap-4">
            <div
              class="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-500/20 to-rose-500/20 text-brand-500 dark:text-brand-400 flex items-center justify-center flex-shrink-0 group-hover:from-brand-500/30 group-hover:to-rose-500/30 transition-colors"
            >
              <Mail class="w-5 h-5" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-xs font-mono text-stone-400 dark:text-stone-600 mb-0.5">
                {{ t('contact.emailLabel') }}
              </p>
              <p class="font-mono font-medium truncate text-stone-900 dark:text-stone-100">
                djjceja@gmail.com
              </p>
            </div>
            <ArrowRight
              class="w-4 h-4 text-stone-400 group-hover:translate-x-1 group-hover:text-brand-500 transition-all"
            />
          </div>
        </a>
      </Reveal>

      <Reveal :delay="200">
        <div class="grid sm:grid-cols-3 gap-3">
          <a
            href="tel:+524491974620"
            class="card flex items-center gap-3 hover:border-brand-500/40 dark:hover:border-brand-700/50 transition-all"
          >
            <Phone class="w-4 h-4 text-brand-500 flex-shrink-0" />
            <span class="text-sm font-mono text-stone-700 dark:text-stone-400">+52 449 197 4620</span>
          </a>
          <div class="card flex items-center gap-3">
            <MapPin class="w-4 h-4 text-brand-500 flex-shrink-0" />
            <span class="text-sm font-mono text-stone-700 dark:text-stone-400">Ciudad de México</span>
          </div>
          <a
            href="https://linkedin.com/in/donovan-jerez-ceja/"
            target="_blank"
            rel="noopener"
            class="card flex items-center gap-3 hover:border-brand-500/40 dark:hover:border-brand-700/50 transition-all"
          >
            <Linkedin class="w-4 h-4 text-brand-500 flex-shrink-0" />
            <span class="text-sm font-mono text-stone-700 dark:text-stone-400">LinkedIn</span>
          </a>
        </div>
      </Reveal>
    </div>
  </section>
</template>
