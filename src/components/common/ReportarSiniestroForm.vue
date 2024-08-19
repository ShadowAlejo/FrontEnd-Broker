<template>
    <div class="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg mx-auto my-10">
      <h2 class="text-2xl font-bold mb-4 text-center"><i class="fas fa-exclamation-triangle"></i> Reportar Siniestro</h2>
      
      <form @submit.prevent="submitForm">
        <ReportarSiniestroInput id="name" type="text" name="name" label="Nombre Completo:" placeholder="Escribe tu nombre completo" v-model="form.name" />
        <ReportarSiniestroInput id="id" type="text" name="id" label="Número de Póliza:" placeholder="Escribe tu número de póliza" v-model="form.id" />
        <ReportarSiniestroInput id="date" type="date" name="date" label="Fecha del Siniestro:" placeholder="Selecciona la fecha del siniestro" v-model="form.date" />
        <ReportarSiniestroInput id="location" type="text" name="location" label="Ubicación del Siniestro:" placeholder="Escribe la ubicación del siniestro" v-model="form.location" />
        <ReportarSiniestroInput id="description" type="text" name="description" label="Descripción del Siniestro:" placeholder="Describe el siniestro" v-model="form.description" />
  
        <div class="mb-4">
          <label for="additional_info" class="block text-gray-700 font-bold mb-2"><i class="fas fa-info-circle"></i> Información Adicional:</label>
          <textarea id="additional_info" name="additional_info" placeholder="Añade cualquier información adicional" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="form.additional_info"></textarea>
        </div>
  
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Enviar Reporte
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import ReportarSiniestroInput from './ReportarSiniestroInput.vue'
  
  const form = ref({
    name: '',
    id: '',
    date: '',
    location: '',
    description: '',
    additional_info: ''
  })
  
  const submitForm = () => {
    console.log('Formulario enviado:', form.value)
    // Aquí puedes manejar el envío de datos, por ejemplo, enviarlos a una API
  }
  </script>
  
  <style scoped>
  </style>
  