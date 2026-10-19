<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section id="contact" class="section">
    <div class="container-xl grid md:grid-cols-12 gap-10 items-end">
      <Reveal class="md:col-span-7">
        <h2 class="section-title">{{ t('contact.title') }}</h2>
        <p class="section-lede prose-measure">{{ t('contact.copy') }}</p>
        <p class="mt-10">
          <a href="mailto:djjceja@gmail.com" class="link font-display text-3xl sm:text-4xl md:text-5xl overflow-wrap-anywhere">djjceja@gmail.com</a>
        </p>
        <p class="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm text-ink-2">
          <a href="tel:+524491974620" class="link whitespace-nowrap tabular">+52 449 197 4620</a>
          <a href="https://linkedin.com/in/donovan-jerez-ceja/" target="_blank" rel="noopener" class="link whitespace-nowrap">LinkedIn</a>
          <span class="whitespace-nowrap">Ciudad de México</span>
        </p>
      </Reveal>

      <!-- studied box: square, hairline, condensed label bottom-left -->
      <Reveal :delay="150" class="md:col-span-4 md:col-start-9 flex md:justify-end">
        <a href="mailto:djjceja@gmail.com" class="label-box">{{ t('contact.emailLabel') }}</a>
      </Reveal>
    </div>
  </section>
</template>
