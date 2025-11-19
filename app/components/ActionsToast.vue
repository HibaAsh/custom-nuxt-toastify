<template>
  <v-card max-width="400" elevation="8">
    <v-card-item>
      <v-card-title class="text-h6">
        Action Required
      </v-card-title>
      <v-card-subtitle>You have a new message from the system.</v-card-subtitle>
    </v-card-item>
    <v-card-actions>
      <v-spacer />
      <v-btn color="primary" variant="text" size="small" @click="onView">View</v-btn>
      <v-btn color="secondary" variant="text" size="small" @click="onDismiss">Dismiss</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
const onView = () => console.log('View clicked!')
const onDismiss = () => console.log('Dismiss clicked!')
</script>