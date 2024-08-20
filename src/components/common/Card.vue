<template>
  <div class="card">
    <div class="card-header">
      <div class="card-title">{{ title }}</div>
      <div class="card-description">{{ description }}</div>
    </div>
    <div class="card-content">
      <slot></slot>
    </div>
    <div class="card-footer">
      <RouterLink :to="link || ''" class="font-medium hover:underline">View {{ title }}</RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">

import { RouterLink } from 'vue-router';

const props = defineProps<{
  title: string;
  description: string;
  link?: string;
}>();

const { title, description, link } = props;
</script>

<style scoped>
/* Aquí puedes agregar los estilos específicos de este componente */
</style>
