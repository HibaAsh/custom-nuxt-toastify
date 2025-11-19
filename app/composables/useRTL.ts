// composables/useRTL.ts
export const useRTL = () => {
  const updateVuetifyRTL = (isRTL: boolean) => {
    if (process.client) {
      const { $vuetify } = useNuxtApp()
      if ($vuetify) {
        $vuetify.rtl = isRTL
        
        // Force update by temporarily changing theme and reverting
        const currentTheme = $vuetify.theme.global.name.value
        $vuetify.theme.global.name.value = currentTheme === 'dark' ? 'light' : 'dark'
        setTimeout(() => {
          $vuetify.theme.global.name.value = currentTheme
        }, 50)
      }
    }
  }

  const setRTLAttributes = (lang: string) => {
    if (process.client) {
      const html = document.documentElement
      const isRTL = lang === 'ar'
      html.setAttribute('dir', isRTL ? 'rtl' : 'ltr')
      html.setAttribute('lang', lang)
      return isRTL
    }
    return false
  }

  return {
    updateVuetifyRTL,
    setRTLAttributes
  }
}