<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X } from 'lucide-vue-next'

const { t } = useI18n()
const scrolled = ref(false)
const open = ref(false)

const onScroll = () => {
  scrolled.value = window.scrollY > 24
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const links = [
  { to: '#about', key: 'nav.about' },
  { to: '#experience', key: 'nav.experience' },
  { to: '#skills', key: 'nav.skills' },
  { to: '#projects', key: 'nav.projects' },
  { to: '#contact', key: 'nav.contact' },
]
</script>

<template>
  <header
    :class="[
      'fixed top-0 inset-x-0 z-50 transition-all duration-300',
      scrolled
        ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/70 dark:border-slate-800/70'
        : 'bg-transparent',
    ]"
  >
    <div class="container-xl flex items-center justify-between h-16">
      <a href="#top" class="font-display font-bold text-lg tracking-tight">
        Donovan<span class="text-brand-500">.</span>
      </a>

      <nav class="hidden md:flex items-center gap-8">
        <a
          v-for="l in links"
          :key="l.to"
          :href="l.to"
          class="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
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
          class="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
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
        class="md:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur border-b border-slate-200 dark:border-slate-800"
      >
        <nav class="container-xl py-4 flex flex-col gap-1">
          <a
            v-for="l in links"
            :key="l.to"
            :href="l.to"
            @click="open = false"
            class="py-3 px-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 border-b border-slate-100 dark:border-slate-800/60 last:border-0"
          >
            {{ t(l.key) }}
          </a>
        </nav>
      </div>
    </Transition>
  </header>
</template>
