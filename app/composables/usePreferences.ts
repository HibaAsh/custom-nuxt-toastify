// composables/usePreferences.ts
export function usePreferences() {
  const locale = useCookie('locale', { default: () => 'en' })
  const theme = useCookie('theme', { default: () => 'dark' })

  const { locale: i18nLocale, setLocale } = useI18n()

  const setLanguage = async (lang: string) => {
    locale.value = lang
    i18nLocale.value = lang
    await setLocale(lang)

    if (process.client) {
      document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr')
      document.documentElement.setAttribute('lang', lang)
    }
  }

  const setTheme = (newTheme: string) => {
    theme.value = newTheme

    if (process.client) {
      document.documentElement.classList.remove('dark', 'light')
      document.documentElement.classList.add(newTheme)
    }
  }

  return { locale, theme, setLanguage, setTheme }
}
