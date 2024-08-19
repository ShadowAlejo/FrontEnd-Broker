<template>
    <div class="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg mx-auto my-10">
      <h2 class="text-2xl font-bold mb-4 text-center"><i class="fas fa-hands-helping"></i> Solicitar Asistencia</h2>
      
      <form @submit.prevent="submitForm">
        <SolicitarAsistenciaInput id="name" type="text" name="name" label="Nombre Completo:" placeholder="Escribe tu nombre completo" v-model="form.name" />
        <SolicitarAsistenciaInput id="policy_number" type="text" name="policy_number" label="Número de Póliza:" placeholder="Escribe tu número de póliza" v-model="form.policy_number" />
        <SolicitarAsistenciaInput id="assistance_type" type="text" name="assistance_type" label="Tipo de Asistencia:" placeholder="Escribe el tipo de asistencia que necesitas" v-model="form.assistance_type" />
        <SolicitarAsistenciaInput id="location" type="text" name="location" label="Ubicación:" placeholder="Escribe tu ubicación actual" v-model="form.location" />
        
        <div class="mb-4">
          <label for="details" class="block text-gray-700 font-bold mb-2"><i class="fas fa-info-circle"></i> Detalles de la Asistencia:</label>
          <textarea id="details" name="details" placeholder="Describe la situación y el tipo de ayuda que necesitas" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="form.details"></textarea>
        </div>
  
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Enviar Solicitud
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import SolicitarAsistenciaInput from './SolicitarAsistenciaInput.vue'
  
  const form = ref({
    name: '',
    policy_number: '',
    assistance_type: '',
    location: '',
    details: ''
  })
  
  const submitForm = () => {
    console.log('Formulario enviado:', form.value)
    // Aquí puedes manejar el envío de datos, por ejemplo, enviarlos a una API
  }
  </script>
  
  <style scoped>
  </style>
  