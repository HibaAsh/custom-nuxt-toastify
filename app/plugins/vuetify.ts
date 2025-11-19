// plugins/vuetify.ts
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { useCookie } from '#app'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

export default defineNuxtPlugin((nuxtApp) => {
  const localeCookie = useCookie('locale', { default: () => 'en' })
  const themeCookie = useCookie('theme', { default: () => 'dark' })

  const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: { mdi }
    },

    // ✔ Vuetify will reevaluate this automatically
    locale: {
      locale: computed(() => localeCookie.value), // "en" or "ar"
      rtl: {
        ar: true,                 // RTL for Arabic
      }
    },

    theme: {
      defaultTheme: computed(() => themeCookie.value),
      themes: {
        light: {
          dark: false,
          colors: {
            primary: '#1976D2',
            secondary: '#424242',
            accent: '#82B1FF',
            error: '#FF5252',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FFC107'
          }
        },
        dark: {
          dark: true,
          colors: {
            primary: '#90CAF9',
            secondary: '#424242',
            accent: '#FF4081',
            error: '#FF5252',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FB8C00'
          }
        }
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})
