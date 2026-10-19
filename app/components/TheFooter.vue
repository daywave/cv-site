<!-- Ft6 letter close -->
<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <footer class="container-xl pt-16 pb-20 border-t border-line">
    <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-10">
      <div class="prose-measure">
        <p class="font-display italic text-3xl leading-snug text-ink">
          {{ t('letter.close') }}<br>
          <span class="not-italic font-sans font-semibold text-xl">— Donovan Jerez</span>
        </p>
        <p class="mt-5 text-sm text-ink-2">
          {{ t('letter.ps') }} <a href="mailto:djjceja@gmail.com" class="link">djjceja@gmail.com</a>.
        </p>
        <p class="mt-6 flex gap-5 text-sm">
          <a href="https://linkedin.com/in/donovan-jerez-ceja/" target="_blank" rel="noopener" class="link">LinkedIn</a>
          <a href="https://github.com/daywave" target="_blank" rel="noopener" class="link">GitHub</a>
        </p>
      </div>
      <PaperPlane class="w-20 text-ink self-start sm:self-end" trail />
    </div>
  </footer>
</template>
