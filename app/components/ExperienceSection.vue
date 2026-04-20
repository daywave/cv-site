<script setup lang="ts">
import { Building2, MapPin, Calendar } from 'lucide-vue-next'
const { t } = useI18n()
const { experiences } = useCv()
</script>

<template>
  <section id="experience" class="section bg-slate-50/60 dark:bg-slate-900/30">
    <div class="container-xl">
      <Reveal class="mb-16 text-center">
        <p class="section-kicker">{{ t('experience.kicker') }}</p>
        <h2 class="section-title">{{ t('experience.title') }}</h2>
      </Reveal>

      <div class="relative max-w-4xl mx-auto">
        <!-- timeline rail -->
        <div
          class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/70 via-slate-300 dark:via-slate-700 to-transparent"
        />

        <div class="space-y-10">
          <Reveal v-for="(exp, i) in experiences" :key="i" :delay="i * 80">
            <div
              :class="[
                'relative flex md:items-start gap-8',
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse',
              ]"
            >
              <!-- node -->
              <div
                class="absolute left-4 md:left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-brand-500 ring-4 ring-white dark:ring-slate-950 shadow-lg shadow-brand-500/50 top-6 z-10"
              />

              <div
                class="pl-12 md:pl-0 md:w-1/2"
                :class="i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'"
              >
                <div class="card hover:border-brand-500/50 hover:shadow-xl transition-all">
                  <div
                    :class="[
                      'flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2 font-mono',
                      i % 2 === 0 ? 'md:justify-end' : '',
                    ]"
                  >
                    <Calendar class="w-3.5 h-3.5" />
                    <span>{{ exp.period }}</span>
                  </div>
                  <h3 class="font-display font-bold text-xl mb-1">{{ exp.role }}</h3>
                  <div
                    :class="[
                      'flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-4 flex-wrap',
                      i % 2 === 0 ? 'md:justify-end' : '',
                    ]"
                  >
                    <span
                      class="inline-flex items-center gap-1.5 font-semibold text-brand-600 dark:text-brand-400"
                    >
                      <Building2 class="w-3.5 h-3.5" />
                      {{ exp.company }}
                    </span>
                    <span class="inline-flex items-center gap-1.5">
                      <MapPin class="w-3.5 h-3.5" />
                      {{ exp.location }}
                    </span>
                  </div>
                  <ul
                    :class="[
                      'space-y-2 text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed',
                      i % 2 === 0 ? 'md:text-right' : '',
                    ]"
                  >
                    <li v-for="(h, hi) in exp.highlights" :key="hi">
                      {{ h }}
                    </li>
                  </ul>
                  <div
                    :class="[
                      'flex flex-wrap gap-1.5',
                      i % 2 === 0 ? 'md:justify-end' : '',
                    ]"
                  >
                    <span v-for="tech in exp.tech" :key="tech" class="chip">{{ tech }}</span>
                  </div>
                </div>
              </div>

              <div class="hidden md:block md:w-1/2" />
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
</template>
