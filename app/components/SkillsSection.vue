<script setup lang="ts">
import { Server, Palette, Smartphone, Boxes, Wrench, Globe } from 'lucide-vue-next'
const { t, locale } = useI18n()
const { skills } = useCv()

const icons = [Server, Palette, Smartphone, Boxes, Wrench, Globe]
</script>

<template>
  <section id="skills" class="section">
    <div class="container-xl">
      <Reveal class="mb-12 text-center">
        <p class="section-kicker">{{ t('skills.kicker') }}</p>
        <h2 class="section-title">{{ t('skills.title') }}</h2>
      </Reveal>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <Reveal v-for="(g, i) in skills" :key="i" :delay="i * 70">
          <div
            class="card h-full hover:border-brand-500/50 hover:-translate-y-1 transition-all"
          >
            <div class="flex items-center gap-3 mb-5">
              <div
                class="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-500/20 to-fuchsia-500/20 text-brand-600 dark:text-brand-400 flex items-center justify-center"
              >
                <component :is="icons[i] || Boxes" class="w-5 h-5" />
              </div>
              <h3 class="font-display font-semibold text-lg">
                {{ locale === 'es' ? g.group.es : g.group.en }}
              </h3>
            </div>
            <div class="flex flex-wrap gap-2">
              <span v-for="item in g.items" :key="item" class="chip">{{ item }}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
</template>
