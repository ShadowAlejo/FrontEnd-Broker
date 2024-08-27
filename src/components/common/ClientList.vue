<template>
    <div class="p-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Lista de Clientes Actuales</h2>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white rounded-lg shadow-lg overflow-hidden">
          <thead class="bg-gray-200 text-gray-600 text-sm uppercase font-semibold">
            <tr>
              <th class="py-3 px-4 md:px-6 text-left">Nombre</th>
              <th class="py-3 px-4 md:px-6 text-left">Cédula</th>
              <th class="py-3 px-4 md:px-6 text-left">Email</th>
              <th class="py-3 px-4 md:px-6 text-left">Teléfono</th>
              <th class="py-3 px-4 md:px-6 text-left">Dirección</th>
              <th class="py-3 px-4 md:px-6 text-left">Edad</th>
              <th class="py-3 px-4 md:px-6 text-left">Tipo de Contrato</th>
            </tr>
          </thead>
          <tbody class="text-gray-700">
            <tr v-for="client in clients" :key="client.id" class="border-b">
              <td class="py-4 px-4 md:px-6">{{ client.name }}</td>
              <td class="py-4 px-4 md:px-6">{{ client.cedula }}</td>
              <td class="py-4 px-4 md:px-6">{{ client.email }}</td>
              <td class="py-4 px-4 md:px-6">{{ client.phone }}</td>
              <td class="py-4 px-4 md:px-6">{{ client.address }}</td>
              <td class="py-4 px-4 md:px-6">{{ client.age }}</td>
              <td class="py-4 px-4 md:px-6">{{ client.contractType }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>  
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const clients = ref([
    {
      id: 1,
      name: 'Juan Pérez',
      cedula: '0123456789',
      email: 'juanperez@example.com',
      phone: '555-1234',
      address: 'Calle Falsa 123',
      age: 30,
      contractType: 'Básico'
    },
    {
      id: 2,
      name: 'María Gómez',
      cedula: '9876543210',
      email: 'mariagomez@example.com',
      phone: '555-5678',
      address: 'Avenida Siempre Viva 742',
      age: 28,
      contractType: 'Premium'
    },
    // Agrega más clientes aquí
  ]);
  </script>
  