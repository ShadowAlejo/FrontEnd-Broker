<template>
  <div class="avatar-fallback">{{ fallbackText }}</div>
</template>

<script setup lang="ts">


const props = defineProps<{
  fallbackText: string
}>();

const { fallbackText } = props;
</script>

<style scoped>
/* Aquí puedes agregar los estilos específicos de este componente */
</style>
