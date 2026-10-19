<script setup lang="ts">
const { t } = useI18n()
const { stats } = useCv()
</script>

<template>
  <section class="container-xl" aria-label="Numbers">
    <dl class="grid grid-cols-2 md:grid-cols-4 border-y border-line">
      <div
        v-for="(s, i) in stats"
        :key="i"
        class="py-8 md:py-10 px-1 md:px-6 md:first:pl-0 border-line [&:nth-child(odd)]:border-r md:border-r md:last:border-r-0 [&:nth-child(-n+2)]:border-b md:[&:nth-child(-n+2)]:border-b-0"
      >
        <dd class="font-display text-5xl md:text-6xl text-ink tabular leading-none">
          {{ s.prefix }}{{ s.value.toLocaleString() }}{{ s.suffix }}
        </dd>
        <dt class="meta mt-3">{{ t(s.labelKey) }}</dt>
      </div>
    </dl>
  </section>
</template>
