<template>
    <div class="bg-gray-100 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            <i class="fas fa-hands-helping"></i> Solicitar Asistencia
          </h2>
          <p class="mt-2 text-center text-sm text-gray-600">
            Completa el formulario para solicitar asistencia. Indica el tipo de ayuda que necesitas y dónde te encuentras.
          </p>
        </div>
        <SolicitarAsistenciaForm />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import SolicitarAsistenciaForm from '../components/common/SolicitarAsistenciaForm.vue'
  </script>
  
  <style scoped>
  </style>
  