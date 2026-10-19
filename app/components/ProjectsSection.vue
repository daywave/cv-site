<script setup lang="ts">
import { Sparkles, Server, Home, Disc3, Smartphone, Car } from 'lucide-vue-next'
const { t, locale } = useI18n()

type Bi = { en: string; es: string }
type Project = {
  icon: typeof Sparkles
  title: string
  desc: Bi
  tech: string[]
  link: string
  github: string
  featured?: { label: Bi; steps: { title: Bi; body: Bi }[] }
  apps?: { name: string; desc: Bi; play: string; appStore: string; challenge?: string }[]
  stores?: { play: string; appStore: string }
}

const projects: Project[] = [
  {
    icon: Disc3,
    title: 'cochi.exe — Music Recommendation Engine',
    desc: {
      en: 'A conversational music companion that recommends tracks with retrieval-augmented generation (RAG): a Pinecone vector index finds the music, Gemini explains it, and my Spotify listening history makes it personal.',
      es: 'Un compañero musical conversacional que recomienda canciones con generación aumentada por recuperación (RAG): un índice vectorial en Pinecone encuentra la música, Gemini la explica y mi historial de Spotify la personaliza.',
    },
    tech: ['Python', 'FastAPI', 'Pinecone', 'RAG', 'Gemini 2.5 Flash', 'Spotify API', 'Docker'],
    link: '',
    github: 'https://github.com/daywave/music-rec-engine',
    featured: {
      label: { en: 'Personal project', es: 'Proyecto personal' },
      steps: [
        {
          title: { en: 'Enrich', es: 'Enriquecer' },
          body: {
            en: 'Tracks pulled from Spotify go to Gemini in batches of 15. It writes a 2–3 sentence description of each song’s sound, plus mood tags and an energy level.',
            es: 'Las canciones de Spotify pasan a Gemini en lotes de 15. Escribe una descripción de 2–3 frases del sonido de cada una, más etiquetas de ánimo y nivel de energía.',
          },
        },
        {
          title: { en: 'Index', es: 'Indexar' },
          body: {
            en: 'Records are upserted into a Pinecone integrated index (multilingual-e5-large), so embeddings are generated server-side. Genres, moods and energy are stored as filterable metadata.',
            es: 'Los registros se insertan en un índice integrado de Pinecone (multilingual-e5-large), que genera los embeddings en el servidor. Géneros, ánimo y energía quedan como metadatos filtrables.',
          },
        },
        {
          title: { en: 'Retrieve + rerank', es: 'Recuperar + reordenar' },
          body: {
            en: 'A plain-language request like “dark synths for a night drive” runs a semantic search for 4× the needed candidates, with optional mood, energy and genre filters. pinecone-rerank-v0 then keeps the best 5.',
            es: 'Una petición en lenguaje natural como “synths oscuros para manejar de noche” hace una búsqueda semántica de 4× los candidatos necesarios, con filtros opcionales de ánimo, energía y género. pinecone-rerank-v0 conserva los 5 mejores.',
          },
        },
        {
          title: { en: 'Generate', es: 'Generar' },
          body: {
            en: 'The retrieved tracks, the listener’s Spotify taste profile (recent, 6-month and all-time favourites) and recent chat turns go into the Gemini prompt. Answers stay grounded in real catalogue results instead of invented songs.',
            es: 'Las canciones recuperadas, el perfil de gusto de Spotify (favoritas recientes, de 6 meses y de siempre) y los últimos mensajes van al prompt de Gemini. Las respuestas se basan en resultados reales del catálogo, no en canciones inventadas.',
          },
        },
      ],
    },
  },
  {
    icon: Smartphone,
    title: 'Published on Google Play & App Store — Posibilidades',
    desc: {
      en: 'Developer on the team behind three production apps. I took part in the whole cycle: planning, development, and publishing to Google Play and the App Store. Built with Clean Architecture and MVVM, and modernized the Google services integrations across projects.',
      es: 'Desarrollador en el equipo de tres apps en producción. Participé en todo el ciclo: planeación, desarrollo y publicación en Google Play y App Store. Construidas con Clean Architecture y MVVM, y modernicé las integraciones con servicios de Google entre proyectos.',
    },
    tech: ['Flutter', 'Dart', 'Clean Architecture', 'MVVM', 'iOS', 'Android', 'QR access control', 'Online payments', 'App store releases'],
    link: '',
    github: '',
    apps: [
      {
        name: 'Hank',
        desc: {
          en: 'Residential community app: QR passes for visitors, fee payments by card, notices, shared-area bookings and financial statements.',
          es: 'App para fraccionamientos: pases QR para visitas, pago de cuotas con tarjeta, avisos, reservación de áreas comunes y estados financieros.',
        },
        play: 'https://play.google.com/store/apps/details?id=mx.posibilidades.hank',
        appStore: 'https://apps.apple.com/mx/app/hank/id1537878701',
      },
      {
        name: 'Hank Access',
        desc: {
          en: 'Gate-side access control: security guards verify residents’ and visitors’ QR codes for vehicle and pedestrian entry.',
          es: 'Control de acceso en caseta: los guardias verifican los códigos QR de residentes y visitas para entrada vehicular y peatonal.',
        },
        play: 'https://play.google.com/store/apps/details?id=mx.posibilidades.hankaccesos',
        appStore: 'https://apps.apple.com/mx/app/hank-access/id6748323201',
        challenge: '#challenges',
      },
      {
        name: 'Macro Life',
        desc: {
          en: 'Scan food with the phone camera to get calories, protein, fat and carbs instantly.',
          es: 'Escanea alimentos con la cámara del celular y obtén al instante calorías, proteínas, grasas y carbohidratos.',
        },
        play: 'https://play.google.com/store/apps/details?id=mx.posibilidades.macrolife',
        appStore: 'https://apps.apple.com/mx/app/macro-life-contar-calor%C3%ADas/id6739363488',
      },
    ],
  },
  {
    icon: Car,
    title: 'Depfly',
    desc: {
      en: 'Peer-to-peer car rental marketplace in Mexico: rent directly from local owners, from a day to several weeks, with delivery anywhere in the city and insurance on every rental. I worked on the production apps as a freelance mobile developer: user flows, REST API integrations and mobile architecture.',
      es: 'Marketplace de renta de autos entre personas en México: renta directo a dueños locales, de un día a varias semanas, con entrega en cualquier punto de la ciudad y seguro en cada renta. Trabajé en las apps de producción como desarrollador móvil freelance: flujos de usuario, integraciones con APIs REST y arquitectura móvil.',
    },
    tech: ['Mobile', 'REST APIs', 'iOS', 'Android'],
    link: '',
    github: '',
    stores: {
      play: 'https://play.google.com/store/apps/details?id=com.depfly.app',
      appStore: 'https://apps.apple.com/mx/app/depfly/id6499595014',
    },
  },
  {
    icon: Sparkles,
    title: 'Prepa Abierta Aguascalientes',
    desc: {
      en: 'Official website and platform for Prepa Abierta de Aguascalientes (Instituto de Educación de Aguascalientes), designed and built as a freelance web developer with Vue.js under Scrum — focused on accessibility, performance and responsive design.',
      es: 'Sitio y plataforma oficial de Prepa Abierta de Aguascalientes (Instituto de Educación de Aguascalientes), diseñado y construido como desarrollador web freelance con Vue.js bajo Scrum — con foco en accesibilidad, rendimiento y diseño responsivo.',
    },
    tech: ['Vue.js', 'Tailwind', 'Scrum'],
    link: 'https://www.iea.gob.mx/prepa-abierta',
    github: '',
  },
  {
    icon: Home,
    title: 'Domotics Automation Suite',
    desc: {
      en: 'Smart home automation for TecnoDom — device orchestration and user flow optimization.',
      es: 'Automatización de hogar inteligente para TecnoDom — orquestación de dispositivos y flujos de usuario.',
    },
    tech: ['IoT', 'Automation', 'Dart'],
    link: '',
    github: '',
  },
  {
    icon: Server,
    title: 'OPPO Reporting Platform',
    desc: {
      en: 'Large-scale reporting system in PHP (Laravel/Zend) with REST APIs.',
      es: 'Sistema de reportería a gran escala en PHP (Laravel/Zend) con APIs REST.',
    },
    tech: ['PHP', 'Laravel', 'Zend', 'MySQL'],
    link: '',
    github: '',
  },
]
</script>

<template>
  <section id="projects" class="section bg-sunk">
    <div class="container-xl">
      <Reveal class="section-head">
        <h2 class="section-title">{{ t('projects.title') }}</h2>
      </Reveal>

      <div class="space-y-20">
        <Reveal v-for="(p, i) in projects" :key="i" :delay="60" as="article" class="grid md:grid-cols-12 gap-6 border-t border-line pt-8">
          <!-- title column -->
          <div class="md:col-span-5 min-w-0">
            <p v-if="p.featured" class="meta text-accent-ink mb-3">{{ locale === 'es' ? p.featured.label.es : p.featured.label.en }}</p>
            <h3 class="font-display text-3xl md:text-4xl leading-tight overflow-wrap-anywhere">{{ p.title }}</h3>
            <p class="flex flex-wrap gap-x-4 gap-y-1 mt-5">
              <span v-for="tag in p.tech" :key="tag" class="chip">{{ tag }}</span>
            </p>
          </div>

          <!-- body column -->
          <div class="md:col-span-6 md:col-start-7 min-w-0">
            <p class="card-body prose-measure" :class="p.featured && 'text-base text-ink'">{{ locale === 'es' ? p.desc.es : p.desc.en }}</p>

            <!-- RAG pipeline — ordinal, so numbered -->
            <ol v-if="p.featured" class="mt-8 space-y-6">
              <li v-for="(step, si) in p.featured.steps" :key="si" class="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-3">
                <span class="font-display text-xl text-ink-3 tabular leading-snug">{{ String(si + 1).padStart(2, '0') }}</span>
                <span>
                  <span class="block font-display text-xl text-ink leading-snug">{{ locale === 'es' ? step.title.es : step.title.en }}</span>
                  <span class="block card-body mt-1">{{ locale === 'es' ? step.body.es : step.body.en }}</span>
                </span>
              </li>
            </ol>

            <!-- published apps -->
            <ul v-if="p.apps" class="mt-8 divide-y divide-line border-y border-line">
              <li v-for="app in p.apps" :key="app.name" class="py-5">
                <p class="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <span class="font-display text-2xl text-ink">{{ app.name }}</span>
                  <span class="flex gap-5 text-sm">
                    <a :href="app.play" target="_blank" rel="noopener" class="link whitespace-nowrap">Google Play</a>
                    <a :href="app.appStore" target="_blank" rel="noopener" class="link whitespace-nowrap">App Store</a>
                  </span>
                </p>
                <p class="card-body mt-2">{{ locale === 'es' ? app.desc.es : app.desc.en }}</p>
                <a v-if="app.challenge" :href="app.challenge" class="link text-sm mt-2 inline-block whitespace-nowrap">
                  {{ locale === 'es' ? 'Lee el reto técnico detrás' : 'Read the engineering story' }} →
                </a>
              </li>
            </ul>

            <p v-if="p.link || p.github || p.stores" class="flex flex-wrap gap-x-6 gap-y-2 text-sm mt-6">
              <template v-if="p.stores">
                <a :href="p.stores.play" target="_blank" rel="noopener" class="link whitespace-nowrap">Google Play</a>
                <a :href="p.stores.appStore" target="_blank" rel="noopener" class="link whitespace-nowrap">App Store</a>
              </template>
              <a v-if="p.link" :href="p.link" target="_blank" rel="noopener" class="link whitespace-nowrap">{{ locale === 'es' ? 'Ver sitio' : 'Visit site' }}</a>
              <a v-if="p.github" :href="p.github" target="_blank" rel="noopener" class="link whitespace-nowrap">{{ locale === 'es' ? 'Ver código' : 'View code' }}</a>
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
</template>
