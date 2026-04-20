<script setup lang="ts">
import { Github, Linkedin, Mail } from 'lucide-vue-next'
const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-slate-200 dark:border-slate-800 py-10">
    <div class="container-xl flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
      <p class="text-sm text-slate-500 dark:text-slate-400">
        © {{ year }} Donovan Jerez. {{ t('footer.rights') }}
      </p>
      <div class="flex items-center gap-4 text-slate-500 dark:text-slate-400">
        <a
          href="mailto:djjceja@gmail.com"
          aria-label="Email"
          class="hover:text-brand-500 transition-colors"
        >
          <Mail class="w-4 h-4" />
        </a>
        <a
          href="https://linkedin.com/in/donovan-jerez-ceja/"
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn"
          class="hover:text-brand-500 transition-colors"
        >
          <Linkedin class="w-4 h-4" />
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener"
          aria-label="GitHub"
          class="hover:text-brand-500 transition-colors"
        >
          <Github class="w-4 h-4" />
        </a>
      </div>
      <p class="text-xs text-slate-400 dark:text-slate-500 font-mono">
        {{ t('footer.built') }}
      </p>
    </div>
  </footer>
</template>
