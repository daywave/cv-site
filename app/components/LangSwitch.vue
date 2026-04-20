<script setup lang="ts">
const { locale, setLocale } = useI18n()
const toggle = () => {
  setLocale(locale.value === 'en' ? 'es' : 'en')
}
</script>

<template>
  <button
    type="button"
    @click="toggle"
    class="px-3 py-1.5 rounded-lg text-xs font-semibold font-mono uppercase tracking-wider
           hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
    :aria-label="`Switch language to ${locale === 'en' ? 'Spanish' : 'English'}`"
  >
    {{ locale === 'en' ? 'ES' : 'EN' }}
  </button>
</template>
