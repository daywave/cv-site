<script setup lang="ts">
import { Mail, Phone, MapPin, Linkedin, ArrowRight } from 'lucide-vue-next'
const { t } = useI18n()
</script>

<template>
  <section id="contact" class="section">
    <div class="container-xl max-w-4xl">
      <Reveal class="text-center mb-12">
        <p class="section-kicker">{{ t('contact.kicker') }}</p>
        <h2 class="section-title">{{ t('contact.title') }}</h2>
        <p class="text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
          {{ t('contact.copy') }}
        </p>
      </Reveal>

      <Reveal :delay="100">
        <a
          href="mailto:djjceja@gmail.com"
          class="card block hover:border-brand-500 hover:shadow-xl hover:shadow-brand-500/10 transition-all group mb-6"
        >
          <div class="flex items-center gap-4">
            <div
              class="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-fuchsia-600 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
            >
              <Mail class="w-6 h-6" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm text-slate-500 dark:text-slate-400 mb-1">
                {{ t('contact.emailLabel') }}
              </p>
              <p class="font-display font-semibold text-lg truncate">
                djjceja@gmail.com
              </p>
            </div>
            <ArrowRight
              class="w-5 h-5 text-slate-400 group-hover:translate-x-1 group-hover:text-brand-500 transition-all"
            />
          </div>
        </a>
      </Reveal>

      <Reveal :delay="200">
        <div class="grid sm:grid-cols-3 gap-4">
          <a
            href="tel:+524491974620"
            class="card flex items-center gap-3 hover:border-brand-500/50 hover:-translate-y-0.5 transition-all"
          >
            <Phone class="w-5 h-5 text-brand-500 flex-shrink-0" />
            <span class="text-sm font-medium">+52 449 197 4620</span>
          </a>
          <div class="card flex items-center gap-3">
            <MapPin class="w-5 h-5 text-brand-500 flex-shrink-0" />
            <span class="text-sm font-medium">Ciudad de México</span>
          </div>
          <a
            href="https://linkedin.com/in/donovan-jerez-ceja/"
            target="_blank"
            rel="noopener"
            class="card flex items-center gap-3 hover:border-brand-500/50 hover:-translate-y-0.5 transition-all"
          >
            <Linkedin class="w-5 h-5 text-brand-500 flex-shrink-0" />
            <span class="text-sm font-medium">LinkedIn</span>
          </a>
        </div>
      </Reveal>
    </div>
  </section>
</template>
