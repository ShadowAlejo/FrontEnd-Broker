<template>
    <div class="bg-gray-100 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl w-full space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            <i class="fas fa-file-alt"></i> Detalles de Mi Póliza
          </h2>
          <p class="mt-2 text-center text-sm text-gray-600">
            Revisa los detalles de tu póliza, coberturas y estado de pago.
          </p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-xl">
          <PolizaDetails />
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import PolizaDetails from '../components/common/PolizaDetails.vue'
  </script>
  
  <style scoped>
  </style>
  