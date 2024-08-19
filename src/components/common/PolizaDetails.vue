<template>
    <div>
      <h3 class="text-xl font-bold mb-4">Detalles de la Póliza</h3>
      <div class="mb-4">
        <p class="text-gray-700"><strong>Número de Póliza:</strong> {{ poliza.numero }}</p>
        <p class="text-gray-700"><strong>Nombre del Titular:</strong> {{ poliza.titular }}</p>
        <p class="text-gray-700"><strong>Fecha de Inicio:</strong> {{ poliza.fechaInicio }}</p>
        <p class="text-gray-700"><strong>Fecha de Vencimiento:</strong> {{ poliza.fechaVencimiento }}</p>
      </div>
      <h3 class="text-xl font-bold mb-4">Coberturas</h3>
      <ul class="list-disc list-inside mb-4">
        <li v-for="(cobertura, index) in poliza.coberturas" :key="index" class="text-gray-700">
          {{ cobertura }}
        </li>
      </ul>
      <h3 class="text-xl font-bold mb-4">Estado de Pago</h3>
      <div class="mb-4">
        <p class="text-gray-700"><strong>Estado:</strong> {{ poliza.estadoPago }}</p>
        <p class="text-gray-700"><strong>Último Pago:</strong> {{ poliza.ultimoPago }}</p>
        <p class="text-gray-700"><strong>Próximo Pago:</strong> {{ poliza.proximoPago }}</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  // Simulación de datos de la póliza
  const poliza = ref({
    numero: '123456789',
    titular: 'Juan Pérez',
    fechaInicio: '01/01/2023',
    fechaVencimiento: '31/12/2023',
    coberturas: ['Cobertura de Daños', 'Cobertura de Salud', 'Cobertura de Vida'],
    estadoPago: 'Al día',
    ultimoPago: '01/08/2023',
    proximoPago: '01/09/2023'
  })
  </script>
  
  <style scoped>
  </style>
  