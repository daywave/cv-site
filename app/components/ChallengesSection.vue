<!-- Hallmark · component: section · genre: atmospheric (music-player) · theme: Bloom
 * macrostructure: Liner Notes (narrative cards, open — no expand/collapse)
 * contrast: pass · responsive: pass
 -->
<script setup lang="ts">
import { Server, Receipt, TrendingUp } from 'lucide-vue-next'
const { t } = useI18n()

const challenges = [
  {
    key: 'access',
    icon: Server,
    tech: ['WebSockets', 'CentOS 8', 'Firmware', 'Real-time sync'],
    paragraphs: [1, 2, 3, 4],
  },
  {
    key: 'payroll',
    icon: Receipt,
    tech: ['Attendance systems', 'Business rules', 'HR collaboration'],
    paragraphs: [1, 2, 3, 4],
  },
  {
    key: 'commissions',
    icon: TrendingUp,
    tech: ['Sales automation', 'Rule engine', 'Data processing'],
    paragraphs: [1, 2, 3, 4],
  },
]
</script>

<template>
  <section id="challenges" class="section bg-vinyl bg-stone-50/40 dark:bg-stone-900/10">
    <div class="container-xl">
      <Reveal class="mb-14">
        <p class="section-kicker">{{ t('challenges.kicker') }}</p>
        <h2 class="section-title overflow-wrap-anywhere min-w-0">{{ t('challenges.title') }}</h2>
        <p class="text-base text-stone-600 dark:text-stone-400 max-w-2xl mt-4 leading-relaxed">
          {{ t('challenges.intro') }}
        </p>
      </Reveal>

      <div class="max-w-3xl space-y-5">
        <Reveal v-for="(c, i) in challenges" :key="c.key" :delay="i * 100">
          <div class="card group hover:border-brand-500/30 dark:hover:border-brand-600/30 transition-colors duration-200">
            <div class="flex items-start gap-4">

              <!-- number + icon badge -->
              <div
                class="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500/15 to-rose-500/15 dark:from-brand-500/20 dark:to-rose-500/20 flex flex-col items-center justify-center flex-shrink-0 mt-0.5 gap-0"
              >
                <span class="text-[10px] font-mono font-bold text-brand-500 dark:text-brand-400 leading-none">
                  {{ String(i + 1).padStart(2, '0') }}
                </span>
                <component
                  :is="c.icon"
                  class="w-3.5 h-3.5 text-brand-500/70 dark:text-brand-400/70 mt-0.5"
                />
              </div>

              <!-- content -->
              <div class="flex-1 min-w-0">
                <h3 class="font-display font-semibold text-base sm:text-lg text-stone-900 dark:text-stone-100 leading-snug mb-3 overflow-wrap-anywhere min-w-0">
                  {{ t(`challenges.${c.key}.title`) }}
                </h3>

                <div class="space-y-2.5 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                  <p v-for="n in c.paragraphs" :key="n">
                    {{ t(`challenges.${c.key}.p${n}`) }}
                  </p>
                </div>

                <div class="flex flex-wrap gap-1.5 mt-4">
                  <span v-for="tag in c.tech" :key="tag" class="chip">{{ tag }}</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
</template>
