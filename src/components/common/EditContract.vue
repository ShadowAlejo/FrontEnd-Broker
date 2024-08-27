<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div class="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8 md:p-10">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-6">Modificar Contrato</h2>
        <form @submit.prevent="editContract">
          <div class="mb-4">
            <label for="contract-id" class="block text-gray-700 font-bold mb-2">ID del Contrato:</label>
            <input type="text" id="contract-id" v-model="contractId" required
                   class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div class="mb-4">
            <label for="contractType" class="block text-gray-700 font-bold mb-2">Tipo de Contrato:</label>
            <select id="contractType" v-model="contractType" required
                    class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="basic">Básico</option>
              <option value="premium">Premium</option>
              <option value="vip">VIP</option>
            </select>
          </div>
          <div class="mb-4">
            <label for="cedula" class="block text-gray-700 font-bold mb-2">Cédula:</label>
            <input type="text" id="cedula" v-model="cedula" required
                   class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div class="mb-4">
            <label for="address" class="block text-gray-700 font-bold mb-2">Dirección:</label>
            <input type="text" id="address" v-model="address" required
                   class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div class="mb-6">
            <label for="new-terms" class="block text-gray-700 font-bold mb-2">Nuevos Términos:</label>
            <textarea id="new-terms" v-model="newTerms" required
                      class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none"></textarea>
          </div>
          <button type="submit"
                  class="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
            Modificar Contrato
          </button>
        </form>
      </div>
    </div>
  </template>  
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const contractId = ref('');
  const contractType = ref('basic');
  const cedula = ref('');
  const address = ref('');
  const newTerms = ref('');
  
  const editContract = () => {
    console.log('Contrato modificado:', { 
      contractId: contractId.value,
      contractType: contractType.value,
      cedula: cedula.value,
      address: address.value,
      newTerms: newTerms.value 
    });
  };
  </script>
  