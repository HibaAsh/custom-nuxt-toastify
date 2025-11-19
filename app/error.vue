<template>
  <v-app class="error-page">
    <v-main class="d-flex flex-column align-center justify-center">
      <!-- Animated error icon -->
      <v-icon size="96" color="error" class="bounce">mdi-alert-circle-outline</v-icon>

      <!-- Error message -->
      <h1 class="mt-4">{{ t('error.title', { defaultValue: 'Oops! Something went wrong.' }) }}</h1>
      <p class="mt-2 text-center">
        {{ errorMessage }}
      </p>

      <!-- Back home button -->
      <v-chip color="error" class="mt-6" @click="$router.push('/')">
        {{ t('error.backHome', { defaultValue: 'Go Back Home' }) }}
      </v-chip>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const route = useRoute()
const { t } = useI18n()

// Display route error message if available
const errorMessage = route?.meta?.errorMessage || t('error.defaultMessage', { defaultValue: 'An unexpected error occurred.' })
</script>

<style scoped>
.error-page {
  height: 100vh;
  background-color: var(--v-theme-surface);
  color: var(--v-theme-on-surface);
  text-align: center;
}

.bounce {
  animation: bounce 1.5s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-20px); }
  60% { transform: translateY(-10px); }
}

h1 {
  font-size: 2rem;
  font-weight: 700;
}

p {
  font-size: 1.125rem;
  max-width: 400px;
  margin: 0 auto;
}

.v-chip {
  padding: .75rem 1.5rem;
  height: fit-content;
  font-size: 1rem;
}
</style>
