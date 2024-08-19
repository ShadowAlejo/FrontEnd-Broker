<!-- src/components/common/AvatarFallback.vue -->
<template>
    <div class="avatar-fallback">{{ fallbackText }}</div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue'
  
  const props = defineProps({
    fallbackText: String
  })
  
  const { fallbackText } = props
  </script>
  
  <style scoped>
  /* Aquí puedes agregar los estilos específicos de este componente */
  </style>
  