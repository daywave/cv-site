<script setup lang="ts">
const { t } = useI18n()

const challenges = [
  { key: 'access', tech: ['WebSockets', 'CentOS 8', 'Firmware', 'Real-time sync'], paragraphs: [1, 2, 3, 4] },
  { key: 'payroll', tech: ['Attendance systems', 'Business rules', 'HR collaboration'], paragraphs: [1, 2, 3, 4] },
  {
    key: 'commissions',
    tech: ['PHP / Zend Framework', 'MySQL', 'Rule engine', 'Data snapshots', 'Background jobs', 'Excel reporting'],
    paragraphs: [1, 2, 3, 4],
    deep: [1, 2, 3, 4, 5, 6, 7, 8],
  },
]
</script>

<template>
  <section id="challenges" class="section bg-sunk">
    <div class="container-xl">
      <Reveal class="section-head">
        <h2 class="section-title">{{ t('challenges.title') }}</h2>
        <p class="section-lede prose-measure">{{ t('challenges.intro') }}</p>
      </Reveal>

      <!-- ordinal content, so numbered (Long Document syntax, not decoration) -->
      <ol class="space-y-20">
        <Reveal v-for="(c, i) in challenges" :key="c.key" :delay="i * 80" as="li" class="grid md:grid-cols-12 gap-6 border-t border-line pt-8">
          <p class="md:col-span-1 font-display text-2xl text-ink-3 tabular">{{ String(i + 1).padStart(2, '0') }}</p>
          <h3 class="md:col-span-4 font-display text-3xl leading-tight overflow-wrap-anywhere min-w-0">{{ t(`challenges.${c.key}.title`) }}</h3>
          <div class="md:col-span-6 md:col-start-7">
            <div class="space-y-4 card-body prose-measure">
              <p v-for="n in c.paragraphs" :key="n">{{ t(`challenges.${c.key}.p${n}`) }}</p>
            </div>
            <p class="flex flex-wrap gap-x-4 gap-y-1 mt-6">
              <span v-for="tag in c.tech" :key="tag" class="chip">{{ tag }}</span>
            </p>

            <!-- native disclosure: keyboard + screen-reader support for free -->
            <details v-if="c.deep" class="group mt-8 border-t border-line">
              <summary class="flex items-center justify-between gap-4 py-4 cursor-pointer text-sm font-medium text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                <span class="whitespace-nowrap">{{ t('challenges.deepDive') }}</span>
                <span class="text-ink-3 text-lg leading-none transition-transform duration-200 ease-out group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <dl class="space-y-6 pb-2">
                <div v-for="d in c.deep" :key="d">
                  <dt class="font-display text-xl text-ink leading-snug">{{ t(`challenges.${c.key}.d${d}.q`) }}</dt>
                  <dd class="card-body mt-2">{{ t(`challenges.${c.key}.d${d}.a`) }}</dd>
                </div>
              </dl>
            </details>
          </div>
        </Reveal>
      </ol>
    </div>
  </section>
</template>
