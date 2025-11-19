<!-- pages/demo.vue -->
<template>
  <div>
    <div class="content-wrapper">
      <div>
        <v-btn @click="applyOptions" class="bg-primary" style="box-shadow: none; font-size: 1rem; height: fit-content; padding: .75rem 1.25rem; text-transform: capitalize;">
          {{ t('options.apply') }}
        </v-btn>
      </div>

      <v-row>
        <!-- 🎨 Theme -->
        <v-col cols="6" sm="3">
          <v-label>🎨 / {{ t('options.theme') }}</v-label>

          <v-select v-model="theme" :items="isAppRtl
            ? themeSelect.map(item => ({ title: item.title_ar, value: item.key }))
            : themeSelect.map(item => ({ title: item.title_en, value: item.key }))
            " item-title="title" item-value="value" variant="outlined">
            <template #item="{ props, item }">
              <v-list-item v-bind="props" title="" class="custom-item">
                <template #prepend>
                  <v-icon size="18" color="primary" v-if="item.value === 'dark'">mdi-weather-night</v-icon>
                  <v-icon size="18" color="amber" v-else-if="item.value === 'light'">mdi-white-balance-sunny</v-icon>
                  <v-icon size="18" color="purple" v-else>mdi-palette</v-icon>
                </template>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </template>
          </v-select>
        </v-col>

        <!-- 💡 Type -->
        <v-col cols="6" sm="3">
          <v-label>💡 / {{ t('options.type') }}</v-label>

          <v-select v-model="type" :items="isAppRtl
            ? typeSelect.map(item => ({ title: item.title_ar, value: item.key }))
            : typeSelect.map(item => ({ title: item.title_en, value: item.key }))
            " item-title="title" item-value="value" variant="outlined">
            <template #item="{ props, item }">
              <v-list-item v-bind="props" title="" class="custom-item">
                <template #prepend>
                  <v-icon color="info" v-if="item.value === 'info'">mdi-information-outline</v-icon>
                  <v-icon color="success" v-else-if="item.value === 'success'">mdi-check-circle-outline</v-icon>
                  <v-icon color="error" v-else-if="item.value === 'error'">mdi-alert-circle-outline</v-icon>
                  <v-icon color="warning" v-else-if="item.value === 'warning'">mdi-alert-outline</v-icon>
                  <v-icon color="grey" v-else>mdi-dots-horizontal</v-icon>
                </template>

                <v-list-item-title :style="`color: rgb(var(--v-theme-${item.value}))`">{{ item.title }}</v-list-item-title>
              </v-list-item>
            </template>
          </v-select>
        </v-col>

        <!-- 📡 Position -->
        <v-col cols="6" sm="3">
          <v-label>📡 / {{ t('options.position') }}</v-label>

          <v-select v-model="position" :items="isAppRtl
            ? positionSelect.map(item => ({ title: item.title_ar, value: item.key }))
            : positionSelect.map(item => ({ title: item.title_en, value: item.key }))
            " item-title="title" item-value="value" variant="outlined">
            <template #item="{ props, item }">
              <v-list-item v-bind="props" title="" class="custom-item">
                <template #prepend>
                  <v-icon v-if="item.value.includes('top')" color="primary">mdi-arrow-up</v-icon>
                  <v-icon v-else color="primary">mdi-arrow-down</v-icon>
                </template>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </template>
          </v-select>
        </v-col>

        <!-- 🎉 Transition -->
        <v-col cols="6" sm="3">
          <v-label>🎉 / {{ t('options.transition') }}</v-label>

          <v-select v-model="transition" :items="isAppRtl
            ? transitionSelect.map(item => ({ title: item.title_ar, value: item.key }))
            : transitionSelect.map(item => ({ title: item.title_en, value: item.key }))
            " item-title="title" item-value="value" variant="outlined">
            <template #item="{ props, item }">
              <v-list-item v-bind="props" title="" class="custom-item">
                <template #prepend>
                  <v-icon color="deep-purple" v-if="item.value === 'bounce'">mdi-arrow-collapse</v-icon>
                  <v-icon color="blue" v-else-if="item.value === 'slide'">mdi-swap-horizontal</v-icon>
                  <v-icon color="green" v-else-if="item.value === 'zoom'">mdi-magnify-plus-outline</v-icon>
                  <v-icon color="orange" v-else>mdi-flip-horizontal</v-icon>
                </template>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </template>
          </v-select>
        </v-col>
      </v-row>

      <div class="other-props">
        <div class="container">
          <v-label>{{ t('options.autoCloseLabel') }}</v-label>
          <v-text-field v-model="autoClose" variant="outlined" />
          <span>{{ t('options.autoCloseUnit') }}</span>
        </div>

        <v-checkbox v-model="supportMultiple" :label="t('options.multiple')" />

        <div class="container">
          <v-label>{{ t('options.limit') }}</v-label>
          <v-text-field v-model="limit" type="number" variant="outlined" />
        </div>

        <v-checkbox v-model="dangerouslyHTMLString" :label="t('options.dangerouslyHTMLString')" />
        <v-checkbox v-model="hideProgressBar" :label="t('options.hideProgressBar')" />
        <v-checkbox v-model="disableAutoClose" :label="t('options.disableAutoClose')" />
        <v-checkbox v-model="closeOnClick" :label="t('options.closeOnClick')" />
        <v-checkbox v-model="supportRTL" :label="t('options.rtl')" />
        <v-checkbox v-model="pauseOnHover" :label="t('options.pauseOnHover')" />
        <v-checkbox v-model="pauseOnFocusLoss" :label="t('options.pauseOnFocusLoss')" />
        <v-checkbox v-model="newestOnTop" :label="t('options.newestOnTop')" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCustomToast } from '~/composables/useToast'

const {
  success,
  error,
  info,
  warning,
  custom,
  loading,
  clearAll,
  dismiss,
  update,
  isActive,
  done,
} = useCustomToast()

const { locale, t } = useI18n()

const isAppRtl = computed(() => locale.value === 'ar' ? true : false)

const toastMap = {
  success,
  error,
  info,
  warning,
  default: custom, // or whatever your default handler is
}

const toastOptions = computed(() => ({
  position: position.value,
  theme: theme.value,
  transition: transition.value,
  autoClose: !disableAutoClose ? disableAutoClose : autoClose.value, // default 3s
  pauseOnHover: pauseOnHover.value,
  pauseOnFocusLoss: pauseOnFocusLoss.value,
  closeOnClick: closeOnClick.value,
  rtl: isAppRtl.value,
  multiple: supportMultiple.value,
  limit: limit.value,
  newestOnTop: newestOnTop.value,
  dangerouslyHTMLString: dangerouslyHTMLString.value,
  icon: showIcon.value,
  hideProgressBar: hideProgressBar.value,
}))

const theme = ref('dark')
const themeSelect = [
  // light, dark, colored
  { key: 'dark', title_ar: 'ليلي', title_en: 'Dark' },
  { key: 'light', title_ar: 'نهاري', title_en: 'Light' },
  { key: 'colored', title_ar: 'ملون', title_en: 'Colored' },
]

const type = ref('default')
const typeSelect = [
  // default, success, error, info, warning
  { key: 'default', title_ar: 'افتراضي', title_en: 'Default' },
  { key: 'success', title_ar: 'ناجح', title_en: 'Success' },
  { key: 'error', title_ar: 'خطأ', title_en: 'Error' },
  { key: 'info', title_ar: 'معلومة', title_en: 'Info' },
  { key: 'warning', title_ar: 'تحذير', title_en: 'Warning' },
]

const position = ref('top-right')
const positionSelect = [
  // top-left, top-center, top-right, bottom-left, bottom-center, bottom-right
  { key: 'top-left', title_ar: 'أعلى اليسار', title_en: 'Top Left' },
  { key: 'top-center', title_ar: 'أعلى الوسط', title_en: 'Top Center' },
  { key: 'top-right', title_ar: 'أعلى اليمين', title_en: 'Top Right' },
  { key: 'bottom-left', title_ar: 'أسفل اليسار', title_en: 'Bottom Left' },
  { key: 'bottom-center', title_ar: 'أسفل الوسط', title_en: 'Bottom Center' },
  { key: 'bottom-right', title_ar: 'أسفل اليمين', title_en: 'Bottom Right' },
]

const transition = ref('bounce')
const transitionSelect = [
  // bounce, flip, slide, zoom
  { key: 'bounce', title_ar: 'ارتداد', title_en: 'Bounce' },
  { key: 'flip', title_ar: 'انعكاس', title_en: 'Flip' },
  { key: 'slide', title_ar: 'انزلاق', title_en: 'Slide' },
  { key: 'zoom', title_ar: 'تكبير', title_en: 'Zoom' },
]

const autoClose = ref(3000)
const disableAutoClose = ref(false)
const supportMultiple = ref(true)
const limit = ref(5)
const dangerouslyHTMLString = ref(false)
const hideProgressBar = ref(false)
const closeOnClick = ref(false)
const supportRTL = ref(false)
const pauseOnHover = ref(true)
const pauseOnFocusLoss = ref(true)
const newestOnTop = ref(true)
const showIcon = ref(true)

const applyOptions = () => {
  const typeKey = type.value || 'default'
  const toastFn = toastMap[typeKey]

  if (!toastFn) {
    console.warn(`Unknown toast type: ${typeKey}`)
    return
  }

  const msg = t(`toast.${typeKey}`, { defaultValue: `This is a ${typeKey} message!` })

  toastFn(msg, toastOptions.value)
}
</script>

<style lang="scss" scoped>
.content-wrapper {
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.v-col {
  .v-label {
    margin-bottom: .5rem;
    font-size: .875rem;
  }
}

.v-col-6 {
  .v-text-field {
    width: 100%;
    max-width: 100%;
    
    @media screen and (max-width: 600px) {
      width: 100%;
      max-width: 100%;
    }
  }
}

:deep(.custom-item) {
  .v-list-item-title {
    font-size: 0.875rem !important;
    font-weight: 500;
    color: var(--v-theme-on-surface);
  }
}

:deep(.v-list-item__prepend) {
  margin-right: 8px !important;
}

:deep(.v-select__selection-text) {
  font-size: 1rem;

  @media screen and (max-width: 960px) {
    font-size: .875rem;
  }
}

.other-props {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  :deep(label) {
    font-size: .875rem;
  }

  .container {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  @media screen and (max-width: 600px) {
    span,
    :deep(input) {
      font-size: .875rem;
    }
  }
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

:deep(.v-input__details) {
  display: none;
}

:deep(.v-checkbox) {
  // background-color: red;
  height: fit-content;
  min-height: fit-content;
  --v-input-control-height: fit-content;

  .v-selection-control__wrapper {
    height: 1.25rem !important;
    width: 1.25rem !important;
    margin-inline-end: .75rem;
  }

  i {
    height: 1rem;
    width: 1rem;
    color: rgb(var(--v-theme-primary));
  }
}

@media screen and (max-width: 600px) {
  :deep(label) {
    font-size: .75rem;
  }
}
</style>