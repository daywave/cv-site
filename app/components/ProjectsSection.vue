<script setup lang="ts">
import { Github, ExternalLink, FolderGit2, Sparkles, Server, Home } from 'lucide-vue-next'
const { t, locale } = useI18n()

const projects = [
  {
    icon: Sparkles,
    title: 'Prepa Abierta Aguascalientes',
    desc: {
      en: 'Government education portal built with Vue.js, integrating GEA services. Vue + Tailwind delivered under Scrum.',
      es: 'Portal educativo del gobierno hecho con Vue.js, integrando servicios de GEA. Vue + Tailwind bajo Scrum.',
    },
    tech: ['Vue.js', 'Tailwind', 'Scrum'],
    link: '',
    github: '',
  },
  {
    icon: Home,
    title: 'Domotics Automation Suite',
    desc: {
      en: 'Smart home automation for TecnoDom — device orchestration and user flow optimization.',
      es: 'Automatización de hogar inteligente para TecnoDom — orquestación de dispositivos y flujos de usuario.',
    },
    tech: ['IoT', 'Automation', 'Dart'],
    link: '',
    github: '',
  },
  {
    icon: Server,
    title: 'OPPO Reporting Platform',
    desc: {
      en: 'Large-scale reporting system in PHP (Laravel/Zend) with REST APIs serving 100k+ concurrent users.',
      es: 'Sistema de reportería a gran escala en PHP (Laravel/Zend) con APIs REST para 100k+ usuarios concurrentes.',
    },
    tech: ['PHP', 'Laravel', 'Zend', 'MySQL'],
    link: '',
    github: '',
  },
  {
    icon: FolderGit2,
    title: 'Flutter Mobile Apps',
    desc: {
      en: 'Multiple Flutter apps with Clean Architecture, MVVM — modernized Google services integration across projects.',
      es: 'Varias apps Flutter con Clean Architecture, MVVM — integraciones Google services modernizadas.',
    },
    tech: ['Flutter', 'Dart', 'Clean Arch', 'MVVM'],
    link: '',
    github: '',
  },
]
</script>

<template>
  <section id="projects" class="section bg-slate-50/60 dark:bg-slate-900/30">
    <div class="container-xl">
      <Reveal class="mb-12 text-center">
        <p class="section-kicker">{{ t('projects.kicker') }}</p>
        <h2 class="section-title">{{ t('projects.title') }}</h2>
      </Reveal>

      <div class="grid md:grid-cols-2 gap-6">
        <Reveal v-for="(p, i) in projects" :key="i" :delay="i * 90">
          <article
            class="card h-full hover:border-brand-500/50 hover:-translate-y-1 transition-all group relative overflow-hidden"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-brand-500/0 via-brand-500/0 to-fuchsia-500/0 group-hover:from-brand-500/5 group-hover:to-fuchsia-500/5 transition-all pointer-events-none"
            />
            <div class="relative">
              <div
                class="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-fuchsia-600 text-white flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform"
              >
                <component :is="p.icon" class="w-6 h-6" />
              </div>
              <h3 class="font-display font-bold text-xl mb-2">{{ p.title }}</h3>
              <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                {{ locale === 'es' ? p.desc.es : p.desc.en }}
              </p>
              <div class="flex flex-wrap gap-1.5 mb-5">
                <span v-for="tag in p.tech" :key="tag" class="chip">{{ tag }}</span>
              </div>
              <div class="flex gap-3 text-sm">
                <a
                  v-if="p.link"
                  :href="p.link"
                  target="_blank"
                  rel="noopener"
                  class="inline-flex items-center gap-1 text-brand-600 dark:text-brand-400 hover:underline font-medium"
                >
                  <ExternalLink class="w-4 h-4" /> Live
                </a>
                <a
                  v-if="p.github"
                  :href="p.github"
                  target="_blank"
                  rel="noopener"
                  class="inline-flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:underline font-medium"
                >
                  <Github class="w-4 h-4" /> Code
                </a>
                <span v-if="!p.link && !p.github" class="text-xs text-slate-500 italic">
                  {{ t('projects.placeholder') }}
                </span>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </div>
  </section>
</template>
