<script setup lang="ts">
import { MapPin, Music2, ChevronDown } from 'lucide-vue-next'
import { ref, unref } from 'vue'

const { t } = useI18n()
const { experiences } = useCv()

const expanded = ref(unref(experiences).map(() => false))
const toggle = (i: number) => { expanded.value[i] = !expanded.value[i] }
</script>

<template>
  <section id="experience" class="section bg-stone-50/60 dark:bg-stone-900/20">
    <div class="container-xl">
      <Reveal class="mb-14">
        <p class="section-kicker">{{ t('experience.kicker') }}</p>
        <h2 class="section-title">{{ t('experience.title') }}</h2>
      </Reveal>

      <!-- tracklist table -->
      <div class="max-w-3xl border border-stone-200/80 dark:border-stone-800/50 rounded-2xl overflow-hidden bg-white dark:bg-stone-900/40 shadow-sm">

        <!-- column headers -->
        <div class="flex items-center gap-4 px-5 py-3 border-b border-stone-100 dark:border-stone-800/60 bg-stone-50/80 dark:bg-stone-900/60">
          <span class="w-7 text-center text-xs font-mono text-stone-400 dark:text-stone-600">#</span>
          <span class="flex-1 text-xs font-mono text-stone-400 dark:text-stone-600 uppercase tracking-wider">{{ t('experience.kicker') }}</span>
          <span class="hidden sm:block text-xs font-mono text-stone-400 dark:text-stone-600 uppercase tracking-wider">Location</span>
          <span class="w-28 text-right text-xs font-mono text-stone-400 dark:text-stone-600 uppercase tracking-wider">Period</span>
          <span class="w-5" />
        </div>

        <!-- tracks -->
        <div>
          <Reveal v-for="(exp, i) in experiences" :key="i" :delay="i * 80">
            <div
              class="border-b border-stone-100 dark:border-stone-800/40 last:border-0"
              :class="expanded[i] ? 'bg-brand-50/50 dark:bg-brand-950/20' : ''"
            >
              <!-- track row (clickable) -->
              <button
                type="button"
                class="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-stone-50 dark:hover:bg-stone-800/30 transition-colors"
                :class="expanded[i] ? 'hover:bg-brand-50/50 dark:hover:bg-brand-950/20' : ''"
                @click="toggle(i)"
              >
                <!-- track number / now-playing icon -->
                <div class="w-7 flex-shrink-0 flex items-center justify-center">
                  <Music2
                    v-if="expanded[i]"
                    class="w-3.5 h-3.5 text-brand-500 animate-pulse"
                  />
                  <span
                    v-else
                    class="text-xs font-mono text-stone-400 dark:text-stone-600"
                  >{{ String(i + 1).padStart(2, '0') }}</span>
                </div>

                <!-- role + company -->
                <div class="flex-1 min-w-0">
                  <p class="font-display font-semibold text-sm text-stone-900 dark:text-stone-100 leading-snug truncate">
                    {{ exp.role }}
                  </p>
                  <p class="text-xs text-brand-500 dark:text-brand-400 font-medium mt-0.5">
                    {{ exp.company }}
                  </p>
                </div>

                <!-- location -->
                <span class="hidden sm:flex items-center gap-1 text-xs text-stone-400 dark:text-stone-600 flex-shrink-0 min-w-0">
                  <MapPin class="w-3 h-3 flex-shrink-0" />
                  <span class="truncate">{{ exp.location }}</span>
                </span>

                <!-- period -->
                <span class="text-xs font-mono text-stone-400 dark:text-stone-600 flex-shrink-0 w-28 text-right">
                  {{ exp.period }}
                </span>

                <!-- expand chevron -->
                <ChevronDown
                  class="w-4 h-4 text-stone-400 dark:text-stone-600 flex-shrink-0 transition-transform duration-200"
                  :class="expanded[i] ? 'rotate-180' : ''"
                />
              </button>

              <!-- expanded "lyrics" / highlights -->
              <Transition
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 max-h-0"
                enter-to-class="opacity-100 max-h-[500px]"
                leave-active-class="transition-all duration-200 ease-in"
                leave-from-class="opacity-100 max-h-[500px]"
                leave-to-class="opacity-0 max-h-0"
              >
                <div v-if="expanded[i]" class="overflow-hidden">
                  <div class="px-5 pb-5 pt-1 ml-11 border-t border-stone-100 dark:border-stone-800/30">
                    <ul class="space-y-2 text-sm text-stone-600 dark:text-stone-400 mb-4 leading-relaxed mt-3">
                      <li v-for="(h, hi) in exp.highlights" :key="hi" class="flex gap-2.5 items-start">
                        <span class="w-1 h-1 rounded-full bg-brand-500/50 mt-2 flex-shrink-0" />
                        <span>{{ h }}</span>
                      </li>
                    </ul>
                    <div class="flex flex-wrap gap-1.5">
                      <span v-for="tech in exp.tech" :key="tech" class="chip">{{ tech }}</span>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
</template>
