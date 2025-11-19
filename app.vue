<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">

</script>

<style>
/* Global styles */
body {
  font-family: 'Roboto', sans-serif;
}

/* Custom toast styles */
:deep(.custom-toast) {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

:deep(.vuetify-toast) {
  min-width: 320px;
}
</style>