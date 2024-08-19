<template>
    <div class="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg mx-auto my-10">
      <h2 class="text-2xl font-bold mb-4 text-center"><i class="fas fa-heartbeat"></i> Formulario de Seguro de Salud</h2>
      <form @submit.prevent="submitForm">
        <SeguroSaludInput id="name" type="text" name="name" label="Nombre Completo:" placeholder="Escribe tu nombre completo" v-model="form.name" />
        <SeguroSaludInput id="id" type="text" name="id" label="Número de Identificación:" placeholder="Escribe tu número de identificación" v-model="form.id" />
        <SeguroSaludInput id="dob" type="date" name="dob" label="Fecha de Nacimiento:" placeholder="Selecciona tu fecha de nacimiento" v-model="form.dob" />
        <SeguroSaludInput id="phone" type="text" name="phone" label="Número de Teléfono:" placeholder="Escribe tu número de teléfono" v-model="form.phone" />
        <SeguroSaludInput id="email" type="email" name="email" label="Correo Electrónico:" placeholder="Escribe tu correo electrónico" v-model="form.email" />
        <SeguroSaludInput id="address" type="text" name="address" label="Dirección:" placeholder="Escribe tu dirección" v-model="form.address" />
  
        <div class="mb-4">
          <label for="health_conditions" class="block text-gray-700 font-bold mb-2"><i class="fas fa-notes-medical"></i> Condiciones de Salud:</label>
          <textarea id="health_conditions" name="health_conditions" placeholder="Describe cualquier condición de salud relevante" v-model="form.health_conditions" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
        </div>
  
        <div class="mb-6">
          <label for="comments" class="block text-gray-700 font-bold mb-2"><i class="fas fa-comment"></i> Comentarios Adicionales:</label>
          <textarea id="comments" name="comments" placeholder="Escribe cualquier comentario adicional" v-model="form.comments" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
        </div>
  
        <div class="flex items-center justify-center">
          <button type="submit" class="bg-sky-400 text-white font-bold py-2 px-4 rounded-full hover:bg-sky-700">
            <i class="fas fa-paper-plane"></i> Enviar Solicitud
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import SeguroSaludInput from '../common/SeguroSaludInput.vue'
  
  const form = ref({
    name: '',
    id: '',
    dob: '',
    phone: '',
    email: '',
    address: '',
    health_conditions: '',
    comments: ''
  })
  
  const submitForm = () => {
    console.log('Formulario de Seguro de Salud enviado:', form.value)
    // Aquí puedes manejar el envío de datos, por ejemplo, enviarlos a una API
  }
  </script>
  
  <style scoped>
  </style>
  