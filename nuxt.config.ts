// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@nuxt/image',
  ],

  css: ['~~/tokens.css', '~/assets/css/main.css'],

  tailwindcss: {
    cssPath: ['~/assets/css/main.css', { injectPosition: 'first' }],
  },

  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'dark',
  },

  i18n: {
    defaultLocale: 'en',
    strategy: 'no_prefix',
    locales: [
      { code: 'en', name: 'English' },
      { code: 'es', name: 'Español' },
    ],
    vueI18n: './i18n.config.ts',
  },

  app: {
    head: {
      title: 'Donovan Jerez — Cloud & Full-Stack Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Cloud & Full-Stack Developer — backend architectures, real-time WebSocket services, and cloud migrations (AWS to Alibaba Cloud OSS). PHP, Python, Node.js, Vue and Flutter.',
        },
        { name: 'author', content: 'Donovan Jerez' },
        { name: 'theme-color', content: '#1E513B' },
        { property: 'og:title', content: 'Donovan Jerez — Cloud & Full-Stack Developer' },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:description',
          content: 'Backend architectures, real-time services and cloud migrations.',
        },
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },
})
