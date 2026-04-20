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
            <div class="space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
              <p>{{ t('about.p1') }}</p>
              <p>{{ t('about.p2') }}</p>
              <p>{{ t('about.p3') }}</p>
            </div>
          </Reveal>

          <Reveal :delay="200">
            <div class="mt-8 card">
              <div class="flex items-start gap-4">
                <div
                  class="w-10 h-10 rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center flex-shrink-0"
                >
                  <GraduationCap class="w-5 h-5" />
                </div>
                <div v-for="(e, i) in education" :key="i">
                  <h4 class="font-semibold">{{ e.degree }}</h4>
                  <p class="text-sm text-slate-600 dark:text-slate-400">
                    {{ e.school }} · {{ e.period }}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div class="md:col-span-2 space-y-4">
          <Reveal v-for="(p, i) in pillars" :key="i" :delay="i * 120">
            <div
              class="card hover:border-brand-500/50 hover:shadow-lg hover:shadow-brand-500/5 group"
            >
              <div class="flex items-start gap-4">
                <div
                  class="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-500/20 to-fuchsia-500/20 text-brand-600 dark:text-brand-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                >
                  <component :is="p.icon" class="w-5 h-5" />
                </div>
                <div>
                  <h3 class="font-semibold mb-1">
                    {{ locale === 'es' ? p.titleEs : p.titleEn }}
                  </h3>
                  <p class="text-sm text-slate-600 dark:text-slate-400">
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
