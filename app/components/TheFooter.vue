<script setup lang="ts">
import { Github, Linkedin, Mail, Music2 } from 'lucide-vue-next'
const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-stone-200/80 dark:border-stone-800/50 bg-[#FAF9F7] dark:bg-[#160E08]">
    <div class="container-xl py-10">
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <!-- mini player identity -->
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center shadow-md shadow-brand-500/20 flex-shrink-0">
            <Music2 class="w-4 h-4 text-white" />
          </div>
          <div>
            <p class="font-display font-bold text-sm text-stone-900 dark:text-stone-100">
              Donovan Jerez
            </p>
            <p class="text-xs text-stone-500 dark:text-stone-500">
              Full-Stack Developer · Mexico City
            </p>
          </div>
        </div>

        <!-- social links -->
        <div class="flex items-center gap-1">
          <a
            href="mailto:djjceja@gmail.com"
            aria-label="Email"
            class="p-2 rounded-lg text-stone-400 dark:text-stone-600 hover:text-brand-500 dark:hover:text-brand-400 hover:bg-stone-100 dark:hover:bg-stone-800/60 transition-colors focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:outline-none"
          >
            <Mail class="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/donovan-jerez-ceja/"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
            class="p-2 rounded-lg text-stone-400 dark:text-stone-600 hover:text-brand-500 dark:hover:text-brand-400 hover:bg-stone-100 dark:hover:bg-stone-800/60 transition-colors focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:outline-none"
          >
            <Linkedin class="w-4 h-4" />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
            class="p-2 rounded-lg text-stone-400 dark:text-stone-600 hover:text-brand-500 dark:hover:text-brand-400 hover:bg-stone-100 dark:hover:bg-stone-800/60 transition-colors focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:outline-none"
          >
            <Github class="w-4 h-4" />
          </a>
        </div>
      </div>

    </div>
  </footer>
</template>
