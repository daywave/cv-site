<script setup lang="ts">
import { Brain, Server, Layers, Smartphone, Boxes, Wrench, Globe } from 'lucide-vue-next'
const { t, locale } = useI18n()
const { skills } = useCv()

const icons = [Brain, Server, Layers, Smartphone, Boxes, Wrench, Globe]
</script>

<template>
  <section id="skills" class="section">
    <div class="container-xl">
      <Reveal class="mb-12">
        <p class="section-kicker">{{ t('skills.kicker') }}</p>
        <h2 class="section-title">{{ t('skills.title') }}</h2>
      </Reveal>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Reveal v-for="(g, i) in skills" :key="i" :delay="i * 60">
          <div class="card h-full hover:border-brand-500/40 dark:hover:border-brand-700/50 transition-all group">
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500/20 to-rose-500/20 text-brand-500 dark:text-brand-400 flex items-center justify-center group-hover:from-brand-500/30 group-hover:to-rose-500/30 transition-colors"
              >
                <component :is="icons[i] || Boxes" class="w-4 h-4" />
              </div>
              <h3 class="font-display font-semibold text-sm text-stone-700 dark:text-stone-300">
                {{ locale === 'es' ? g.group.es : g.group.en }}
              </h3>
            </div>
            <div class="flex flex-wrap gap-1.5">
              <span v-for="item in g.items" :key="item" class="chip">{{ item }}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
</template>
