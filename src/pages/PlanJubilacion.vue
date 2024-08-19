<template>
    <div class="bg-gray-100 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900"><i class="fas fa-user-clock"></i> Plan de Jubilación</h2>
          <p class="mt-2 text-center text-sm text-gray-600">
            Solución para cumplir tu meta y llegar a la edad de retiro sin preocupaciones.
          </p>
        </div>
        <PlanJubilacionForm />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import PlanJubilacionForm from '../components/common/PlanJubilacionForm.vue'
  </script>
  
  <style scoped>
  </style>
  