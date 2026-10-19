<script setup lang="ts">
import { GraduationCap } from 'lucide-vue-next'
const { t, locale } = useI18n()
const { education } = useCv()

const pillars = [
  {
    titleEn: 'Clean code',
    titleEs: 'Código limpio',
    bodyEn: 'Clean Architecture, MVVM, maintainable by default.',
    bodyEs: 'Clean Architecture, MVVM, mantenible por defecto.',
  },
  {
    titleEn: 'Team player',
    titleEs: 'Trabajo en equipo',
    bodyEn: 'Scrum, code reviews, international teams.',
    bodyEs: 'Scrum, code reviews, equipos internacionales.',
  },
  {
    titleEn: 'Scale-ready',
    titleEs: 'Listo para escalar',
    bodyEn: 'Real-time services, cloud migrations, optimized REST APIs.',
    bodyEs: 'Servicios en tiempo real, migraciones a la nube, APIs REST optimizadas.',
  },
]
</script>

<template>
  <section id="about" class="section">
    <div class="container-xl grid md:grid-cols-12 gap-10">
      <Reveal class="md:col-span-5">
        <h2 class="section-title">{{ t('about.kicker') }}</h2>
      </Reveal>

      <div class="md:col-span-6 md:col-start-7 md:pt-3">
        <Reveal :delay="100">
          <div class="space-y-5 text-base text-ink-2 leading-[1.7] prose-measure">
            <p>{{ t('about.p1') }}</p>
            <p>{{ t('about.p2') }}</p>
            <p>{{ t('about.p3') }}</p>
          </div>
        </Reveal>

        <Reveal :delay="200">
          <p v-for="(e, i) in education" :key="i" class="mt-8 text-sm text-ink-2">
            <GraduationCap class="inline w-4 h-4 mr-1.5 -mt-0.5 text-brand-ink" />{{ e.degree }} · {{ e.school }} · <span class="tabular">{{ e.period }}</span>
          </p>
        </Reveal>
      </div>

      <dl class="md:col-span-12 grid sm:grid-cols-3 gap-8 mt-10">
        <Reveal v-for="(p, i) in pillars" :key="i" :delay="i * 100" class="card">
          <dt class="font-display text-2xl text-ink">{{ locale === 'es' ? p.titleEs : p.titleEn }}</dt>
          <dd class="card-body mt-2">{{ locale === 'es' ? p.bodyEs : p.bodyEn }}</dd>
        </Reveal>
      </dl>
    </div>
  </section>
</template>
