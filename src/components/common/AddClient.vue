<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div class="w-full max-w-xl bg-white rounded-lg shadow-lg p-8 md:p-10">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-6">Agregar Nuevo Cliente</h2>
        <form @submit.prevent="addClient">
          <div class="mb-4">
            <label for="name" class="block text-gray-700 font-bold mb-2">Nombre:</label>
            <input type="text" id="name" v-model="name" required
                   class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div class="mb-4">
            <label for="cedula" class="block text-gray-700 font-bold mb-2">Cédula:</label>
            <input type="text" id="cedula" v-model="cedula" required
                   class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-gray-700 font-bold mb-2">Email:</label>
            <input type="email" id="email" v-model="email" required
                   class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div class="mb-4">
            <label for="phone" class="block text-gray-700 font-bold mb-2">Teléfono:</label>
            <input type="tel" id="phone" v-model="phone" required
                   class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div class="mb-4">
            <label for="dob" class="block text-gray-700 font-bold mb-2">Fecha de Nacimiento:</label>
            <input type="date" id="dob" v-model="dob" required
                   class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div class="mb-6">
            <label for="contractType" class="block text-gray-700 font-bold mb-2">Tipo de Contrato:</label>
            <select id="contractType" v-model="contractType" required
                    class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="basic">Básico</option>
              <option value="premium">Premium</option>
              <option value="vip">VIP</option>
            </select>
          </div>
          <button type="submit"
                  class="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
            Agregar Cliente
          </button>
        </form>
      </div>
    </div>
  </template>  
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const name = ref('');
  const cedula = ref('');
  const email = ref('');
  const phone = ref('');
  const dob = ref('');
  const contractType = ref('basic');
  
  const addClient = () => {
    console.log('Cliente agregado:', { 
      name: name.value, 
      cedula: cedula.value,
      email: email.value, 
      phone: phone.value,
      dob: dob.value,
      contractType: contractType.value 
    });
  };
  </script>
  