<script setup lang="ts">
import { ref } from 'vue'
import { Menu, X, Music2 } from 'lucide-vue-next'

const { t } = useI18n()
const open = ref(false)

const links = [
  { to: '#about', key: 'nav.about' },
  { to: '#experience', key: 'nav.experience' },
  { to: '#challenges', key: 'nav.challenges' },
  { to: '#skills', key: 'nav.skills' },
  { to: '#projects', key: 'nav.projects' },
  { to: '#contact', key: 'nav.contact' },
]
</script>

<template>
  <header
    class="fixed top-0 inset-x-0 z-50 bg-[#FAF9F7]/95 dark:bg-[#160E08]/95 backdrop-blur-md border-b border-stone-200/80 dark:border-stone-800/50 transition-colors duration-300"
  >
    <div class="container-xl flex items-center justify-between h-16">
      <a href="#top" class="flex items-center gap-2 font-display font-bold text-lg tracking-tight select-none">
        <span class="w-6 h-6 rounded-full bg-brand-500 flex items-center justify-center flex-shrink-0">
          <Music2 class="w-3 h-3 text-white" />
        </span>
        Donovan<span class="text-brand-500">.</span>
      </a>

      <nav class="hidden md:flex items-center gap-7">
        <a
          v-for="l in links"
          :key="l.to"
          :href="l.to"
          class="text-sm font-medium text-stone-600 dark:text-stone-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
        >
          {{ t(l.key) }}
        </a>
      </nav>

      <div class="flex items-center gap-1">
        <LangSwitch />
        <ThemeToggle />
        <button
          type="button"
          @click="open = !open"
          class="md:hidden p-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800/60 transition-colors"
          aria-label="Toggle menu"
        >
          <component :is="open ? X : Menu" class="w-5 h-5" />
        </button>
      </div>
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open"
        class="md:hidden bg-[#FAF9F7]/98 dark:bg-[#160E08]/98 backdrop-blur border-b border-stone-200 dark:border-stone-800/50"
      >
        <nav class="container-xl py-4 flex flex-col gap-1">
          <a
            v-for="l in links"
            :key="l.to"
            :href="l.to"
            @click="open = false"
            class="py-3 px-2 text-sm font-medium text-stone-700 dark:text-stone-300 hover:text-brand-500 dark:hover:text-brand-400 border-b border-stone-100 dark:border-stone-800/50 last:border-0 transition-colors"
          >
            {{ t(l.key) }}
          </a>
        </nav>
      </div>
    </Transition>
  </header>
</template>
