<script setup lang="ts">
import { Plus } from 'lucide-vue-next'
import { ref, unref } from 'vue'

const { t } = useI18n()
const { experiences } = useCv()

const expanded = ref(unref(experiences).map(() => false))
const toggle = (i: number) => { expanded.value[i] = !expanded.value[i] }
</script>

<template>
  <section id="experience" class="section">
    <div class="container-xl">
      <Reveal class="section-head">
        <h2 class="section-title">{{ t('experience.title') }}</h2>
      </Reveal>

      <ol class="border-b border-line">
        <Reveal v-for="(exp, i) in experiences" :key="i" :delay="i * 60" as="li" class="border-t border-line">
          <button
            type="button"
            class="group w-full grid grid-cols-[minmax(0,1fr)_auto] md:grid-cols-[10rem_minmax(0,1fr)_14rem_auto] items-baseline gap-x-6 gap-y-1 py-7 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
            :aria-expanded="expanded[i]"
            @click="toggle(i)"
          >
            <span class="meta order-3 md:order-none col-span-2 md:col-span-1">{{ exp.period }}</span>
            <span class="min-w-0">
              <span class="block font-display text-2xl md:text-3xl text-ink leading-tight group-hover:text-brand-ink transition-colors duration-200 ease-out">{{ exp.role }}</span>
              <span class="block text-sm text-ink-2 mt-1">{{ exp.company }}</span>
            </span>
            <span class="hidden md:block text-sm text-ink-3 truncate">{{ exp.location }}</span>
            <Plus class="w-4 h-4 text-ink-3 transition-transform duration-200 ease-out" :class="expanded[i] && 'rotate-45 text-accent-ink'" />
          </button>

          <Transition
            enter-active-class="transition-opacity duration-200 ease-out"
            enter-from-class="opacity-0"
            leave-active-class="transition-opacity duration-150 ease-in"
            leave-to-class="opacity-0"
          >
            <div v-if="expanded[i]" class="pb-8 md:pl-[calc(10rem+1.5rem)]">
              <ul class="space-y-2.5 card-body prose-measure list-disc pl-5 marker:text-ink-3">
                <li v-for="(h, hi) in exp.highlights" :key="hi">{{ h }}</li>
              </ul>
              <p class="flex flex-wrap gap-x-4 gap-y-1 mt-5">
                <span v-for="tech in exp.tech" :key="tech" class="chip">{{ tech }}</span>
              </p>
            </div>
          </Transition>
        </Reveal>
      </ol>
    </div>
  </section>
</template>
