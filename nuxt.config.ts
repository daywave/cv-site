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

  css: ['~/assets/css/main.css'],

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
      title: 'Donovan Jerez — Full-Stack Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Full-Stack Developer specializing in PHP, Laravel, Flutter, Vue.js and Node.js. Building scalable REST APIs and mobile apps for 100k+ users.',
        },
        { name: 'author', content: 'Donovan Jerez' },
        { name: 'theme-color', content: '#2563eb' },
        { property: 'og:title', content: 'Donovan Jerez — Full-Stack Developer' },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:description',
          content: 'Scalable backends, Flutter apps, clean architecture.',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
})
