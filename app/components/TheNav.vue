<!-- N9 edge-aligned: stacked wordmark hard-left, one action hard-right, nothing between. -->
<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <header class="fixed top-0 inset-x-0 z-50 bg-paper/90 backdrop-blur-sm">
    <div class="container-xl flex items-start justify-between pt-6 pb-4">
      <a href="#top" class="font-sans font-semibold text-xl sm:text-2xl leading-[0.95] tracking-tight text-ink select-none">
        Donovan<br>Jerez
      </a>
      <div class="flex items-center gap-1 sm:gap-3">
        <LangSwitch />
        <ThemeToggle />
        <a href="#contact" class="link text-sm font-medium ml-2 whitespace-nowrap">{{ t('nav.contact') }}</a>
      </div>
    </div>
  </header>
</template>
