<template>
  <v-app :class="locale === 'ar' ? 'v-locale--is-rtl' : 'v-locale--is-ltr'">
    <v-main class="d-flex flex-column align-center justify-center">
      <v-container>
        <div class="header">
          <h1>
            {{ t('header.title') }}
          </h1>
          <h4>
            {{ t('header.text') }}
          </h4>
        </div>

        <div class="d-flex align-center ga-4 pt-4">
          <v-select
            v-model="locale"
            :items="languages"
            item-title="name"
            item-value="code"
            @update:model-value="setLanguage"
            style="max-width: 7.5rem"
            variant="outlined"
          />
  
          <v-select
            v-model="theme"
            :items="themes"
            :item-title="locale === 'ar' ? 'label_ar' : 'label_en'"
            item-value="key"
            @update:model-value="setTheme"
            style="max-width: 6.5rem"
            variant="outlined"
          />
        </div>
  
        <v-divider class="mt-8 text-primary" />

        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { usePreferences } from '~/composables/usePreferences'

const { locale, theme, setLanguage, setTheme } = usePreferences()
const { t } = useI18n()

const languages = [
  { code: 'en', name: 'English' },
  { code: 'ar', name: 'العربية' },
]

const themes = [
  { key: 'dark', label_ar: 'ليلي', label_en: 'Dark' },
  { key: 'light', label_ar: 'نهاري', label_en: 'Light' },
]
</script>

<style lang="scss" scoped>
.v-locale--is-ltr {
  direction: ltr;
}

.v-locale--is-rtl {
  direction: rtl;
}

:deep(.v-input__details) {
  display: none;
}

.v-text-field {
  width: 100%;
  max-width: 10rem;
  height: 2.5rem;

  :deep(.v-field) {
    --v-field-padding-start: .75rem !important;
    --v-field-padding-end: 0 !important;
    --v-field-padding-top: 0 !important;
    --v-field-padding-bottom: 0 !important;

    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 600px) {
    width: fit-content;
    // max-width: 100%;
  }
}
</style>