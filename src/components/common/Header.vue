<!-- src/components/common/Header.vue -->
<template>
    <header class="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
      <div class="flex items-center gap-4">
        <RouterLink to="/" class="text-xl font-bold">
          Insurance Broker
        </RouterLink>
        <nav class="hidden md:flex gap-4">
          <RouterLink to="/policies" class="hover:underline">Policies</RouterLink>
          <RouterLink to="/clients" class="hover:underline">Clients</RouterLink>
          <RouterLink to="/commissions" class="hover:underline">Commissions</RouterLink>
        </nav>
      </div>
      <div class="flex items-center gap-4">
        <button class="btn btn-outline btn-sm">New Policy</button>
        <button class="btn btn-primary btn-sm">Dashboard</button>
        <div class="avatar">
          
          <div class="avatar-fallback">JD</div>
        </div>
      </div>
    </header>
  </template>
  
  <script setup lang="ts">
  import { RouterLink } from 'vue-router'

  </script>
  
  <style scoped>
  /* Aquí puedes agregar los estilos específicos de este componente */
  </style>
  