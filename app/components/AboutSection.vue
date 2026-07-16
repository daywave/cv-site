<script setup lang="ts">
import { Code2, Users, Rocket, GraduationCap } from 'lucide-vue-next'
const { t, locale } = useI18n()
const { education } = useCv()

const pillars = [
  {
    icon: Code2,
    titleEn: 'Clean code',
    titleEs: 'Código limpio',
    bodyEn: 'Clean Architecture, MVVM, maintainable by default.',
    bodyEs: 'Clean Architecture, MVVM, mantenible por defecto.',
  },
  {
    icon: Users,
    titleEn: 'Team player',
    titleEs: 'Trabajo en equipo',
    bodyEn: 'Scrum, code reviews, international teams.',
    bodyEs: 'Scrum, code reviews, equipos internacionales.',
  },
  {
    icon: Rocket,
    titleEn: 'Scale-ready',
    titleEs: 'Listo para escalar',
    bodyEn: '100k+ user systems, optimized REST APIs.',
    bodyEs: 'Sistemas 100k+ usuarios, APIs REST optimizadas.',
  },
]
</script>

<template>
  <section id="about" class="section">
    <div class="container-xl">
      <div class="grid md:grid-cols-5 gap-12">
        <div class="md:col-span-3">
          <Reveal>
            <p class="section-kicker">{{ t('about.kicker') }}</p>
            <h2 class="section-title">{{ t('about.title') }}</h2>
          </Reveal>

          <Reveal :delay="100">
            <div class="space-y-5 text-stone-600 dark:text-stone-400 leading-relaxed text-base">
              <p>{{ t('about.p1') }}</p>
              <p>{{ t('about.p2') }}</p>
              <p>{{ t('about.p3') }}</p>
            </div>
          </Reveal>

          <Reveal :delay="200">
            <div class="mt-8 card">
              <div class="flex items-start gap-4">
                <div
                  class="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500/20 to-rose-500/20 text-brand-500 dark:text-brand-400 flex items-center justify-center flex-shrink-0"
                >
                  <GraduationCap class="w-4 h-4" />
                </div>
                <div v-for="(e, i) in education" :key="i">
                  <h4 class="font-semibold text-sm text-stone-900 dark:text-stone-100">{{ e.degree }}</h4>
                  <p class="text-xs font-mono text-stone-500 dark:text-stone-500 mt-0.5">
                    {{ e.school }} · {{ e.period }}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div class="md:col-span-2 space-y-3">
          <Reveal v-for="(p, i) in pillars" :key="i" :delay="i * 100">
            <div class="card hover:border-brand-500/40 dark:hover:border-brand-700/50 group transition-all">
              <div class="flex items-start gap-4">
                <div
                  class="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500/20 to-rose-500/20 text-brand-500 dark:text-brand-400 flex items-center justify-center flex-shrink-0 group-hover:from-brand-500/30 group-hover:to-rose-500/30 transition-colors"
                >
                  <component :is="p.icon" class="w-4 h-4" />
                </div>
                <div>
                  <h3 class="font-display font-semibold text-sm mb-1 text-stone-900 dark:text-stone-100">
                    {{ locale === 'es' ? p.titleEs : p.titleEn }}
                  </h3>
                  <p class="text-xs text-stone-500 dark:text-stone-500 leading-relaxed">
                    {{ locale === 'es' ? p.bodyEs : p.bodyEn }}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
</template>
