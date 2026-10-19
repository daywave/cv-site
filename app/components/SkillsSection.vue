<script setup lang="ts">
const { t, locale } = useI18n()
const { skills } = useCv()

// ponytail: wordmarks, not brand SVGs — no icon dependency; pass `src` per item to switch to images
const stack = ['PHP', 'Laravel', 'Python', 'Node.js', 'Vue.js', 'React', 'Flutter', 'Dart', 'MySQL', 'Redis', 'Docker', 'FastAPI', 'Pinecone', 'Gemini', 'WebSockets', 'Tailwind CSS', 'Git']
  .map((name) => ({ name }))
</script>

<template>
  <section id="skills" class="section">
    <div class="container-xl">
      <Reveal class="section-head">
        <h2 class="section-title">{{ t('skills.title') }}</h2>
      </Reveal>

      <Reveal class="mb-16 -mx-4 sm:mx-0">
        <BitsLogoLoop :logos="stack" :speed="40" :gap="56" :logo-height="30" aria-label="Tech stack" />
      </Reveal>

      <dl class="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
        <Reveal v-for="(g, i) in skills" :key="i" :delay="i * 50" class="card">
          <dt class="meta">{{ locale === 'es' ? g.group.es : g.group.en }}</dt>
          <dd class="mt-3 text-[15px] text-ink leading-relaxed">{{ g.items.join(' · ') }}</dd>
        </Reveal>
      </dl>
    </div>
  </section>
</template>
