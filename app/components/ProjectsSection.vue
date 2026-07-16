<script setup lang="ts">
import { Github, ExternalLink, Sparkles, Server, Home, FolderGit2 } from 'lucide-vue-next'
const { t, locale } = useI18n()

const projects = [
  {
    icon: Sparkles,
    gradient: 'from-amber-400/30 to-brand-400/30',
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
    gradient: 'from-brand-400/30 to-rose-400/30',
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
    gradient: 'from-rose-400/30 to-amber-400/30',
    title: 'OPPO Reporting Platform',
    desc: {
      en: 'Large-scale reporting system in PHP (Laravel/Zend) with REST APIs.',
      es: 'Sistema de reportería a gran escala en PHP (Laravel/Zend) con APIs REST.',
    },
    tech: ['PHP', 'Laravel', 'Zend', 'MySQL'],
    link: '',
    github: '',
  },
  {
    icon: FolderGit2,
    gradient: 'from-amber-400/30 to-rose-600/30',
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
  <section id="projects" class="section bg-stone-50/40 dark:bg-stone-900/20">
    <div class="container-xl">
      <Reveal class="mb-12">
        <p class="section-kicker">{{ t('projects.kicker') }}</p>
        <h2 class="section-title">{{ t('projects.title') }}</h2>
      </Reveal>

      <div class="grid md:grid-cols-2 gap-5">
        <Reveal v-for="(p, i) in projects" :key="i" :delay="i * 90">
          <article
            class="card h-full hover:border-brand-500/40 dark:hover:border-brand-700/50 transition-all group overflow-hidden relative"
          >
            <!-- album art strip -->
            <div :class="`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${p.gradient}`" />

            <div class="flex items-start gap-4 mb-4">
              <!-- album art icon -->
              <div
                :class="`w-12 h-12 rounded-xl bg-gradient-to-br ${p.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`"
              >
                <component :is="p.icon" class="w-5 h-5 text-brand-600 dark:text-brand-400" />
              </div>
              <div class="min-w-0">
                <h3 class="font-display font-bold text-base leading-snug mb-0.5 truncate">{{ p.title }}</h3>
                <div class="flex flex-wrap gap-1">
                  <span v-for="tag in p.tech.slice(0, 3)" :key="tag" class="text-xs text-stone-400 dark:text-stone-600">{{ tag }}</span>
                </div>
              </div>
            </div>

            <p class="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-4">
              {{ locale === 'es' ? p.desc.es : p.desc.en }}
            </p>

            <div class="flex flex-wrap gap-1.5 mb-4">
              <span v-for="tag in p.tech" :key="tag" class="chip">{{ tag }}</span>
            </div>

            <div v-if="p.link || p.github" class="flex gap-3 text-sm">
              <a
                v-if="p.link"
                :href="p.link"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center gap-1 text-brand-500 dark:text-brand-400 hover:underline font-medium"
              >
                <ExternalLink class="w-4 h-4" /> Live
              </a>
              <a
                v-if="p.github"
                :href="p.github"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center gap-1 text-stone-600 dark:text-stone-400 hover:underline font-medium"
              >
                <Github class="w-4 h-4" /> Code
              </a>
            </div>
          </article>
        </Reveal>
      </div>
    </div>
  </section>
</template>
