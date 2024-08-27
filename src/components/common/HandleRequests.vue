<template>
    <div class="p-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Solicitudes Pendientes</h2>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white rounded-lg shadow-lg overflow-hidden">
          <thead class="bg-gray-200 text-gray-600 text-sm uppercase font-semibold">
            <tr>
              <th class="py-3 px-4 md:px-6 text-left">Cliente</th>
              <th class="py-3 px-4 md:px-6 text-left">Cédula</th>
              <th class="py-3 px-4 md:px-6 text-left">Dirección</th>
              <th class="py-3 px-4 md:px-6 text-left">Tipo de Contrato</th>
              <th class="py-3 px-4 md:px-6 text-left">Solicitud</th>
              <th class="py-3 px-4 md:px-6 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody class="text-gray-700">
            <tr v-for="request in requests" :key="request.id" class="border-b">
              <td class="py-4 px-4 md:px-6">{{ request.client }}</td>
              <td class="py-4 px-4 md:px-6">{{ request.cedula }}</td>
              <td class="py-4 px-4 md:px-6">{{ request.address }}</td>
              <td class="py-4 px-4 md:px-6">{{ request.contractType }}</td>
              <td class="py-4 px-4 md:px-6">{{ request.description }}</td>
              <td class="py-4 px-4 md:px-6">
                <button @click="handleRequest(request.id)"
                        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                  Atender Solicitud
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const requests = ref([
    {
      id: 1,
      client: 'Juan Pérez',
      cedula: '0123456789',
      address: 'Calle Falsa 123',
      contractType: 'Básico',
      description: 'Solicitud de cambio de dirección.'
    },
    {
      id: 2,
      client: 'María Gómez',
      cedula: '9876543210',
      address: 'Avenida Siempre Viva 742',
      contractType: 'Premium',
      description: 'Revisión de términos de contrato.'
    },
    // Agrega más solicitudes aquí
  ]);
  
  const handleRequest = (id: number) => {
    // Lógica para atender la solicitud
    console.log('Solicitud atendida:', id);
  };
  </script>
  