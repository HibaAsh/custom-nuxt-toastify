// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    'vue3-toastify/dist/index.css',
  ],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n',
  ],
  googleFonts: {
    families: {
      Roboto: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      'Noto+Kufi+Arabic': [400, 700],
    }
  },
  i18n: {
    strategy: 'no_prefix', // optional, keeps clean URLs
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json', dir: 'ltr', name: 'English' },
      { code: 'ar', iso: 'ar-SA', file: 'ar.json', dir: 'rtl', name: 'العربية' }
    ],
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'locale',
      fallbackLocale: 'en'
    },
    lazy: true,
    langDir: 'locales/',
    vueI18n: './i18n.config.ts'
  }
})