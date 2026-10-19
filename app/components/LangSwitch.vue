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
    class="btn-icon px-3 text-xs font-semibold font-mono uppercase tracking-wider"
    :aria-label="`Switch language to ${locale === 'en' ? 'Spanish' : 'English'}`"
  >
    {{ locale === 'en' ? 'ES' : 'EN' }}
  </button>
</template>
