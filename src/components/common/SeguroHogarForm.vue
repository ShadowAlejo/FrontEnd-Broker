<template>
    <div class="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg mx-auto my-10">
      <h2 class="text-2xl font-bold mb-4 text-center"><i class="fas fa-home"></i> Formulario de Solicitud de Seguro de Hogar</h2>
      <form @submit.prevent="submitForm">
        <SeguroHogarInput id="name" type="text" name="name" label="Nombre Completo:" placeholder="Escribe tu nombre completo" v-model="form.name" />
        <SeguroHogarInput id="id" type="text" name="id" label="Número de Identificación:" placeholder="Escribe tu número de identificación" v-model="form.id" />
        <SeguroHogarInput id="phone" type="text" name="phone" label="Número de Teléfono:" placeholder="Escribe tu número de teléfono" v-model="form.phone" />
        <SeguroHogarInput id="email" type="email" name="email" label="Correo Electrónico:" placeholder="Escribe tu correo electrónico" v-model="form.email" />
        <SeguroHogarInput id="address" type="text" name="address" label="Dirección de la Propiedad:" placeholder="Escribe la dirección de la propiedad" v-model="form.address" />
        <SeguroHogarInput id="property_value" type="number" name="property_value" label="Valor de la Propiedad:" placeholder="Escribe el valor de la propiedad" v-model="form.property_value" />
        <SeguroHogarInput id="coverage_type" type="text" name="coverage_type" label="Tipo de Cobertura:" placeholder="Escribe el tipo de cobertura" v-model="form.coverage_type" />
        
        <div class="mb-4">
          <label for="comments" class="block text-gray-700 font-bold mb-2"><i class="fas fa-comment"></i> Comentarios Adicionales:</label>
          <textarea id="comments" name="comments" placeholder="Escribe cualquier comentario adicional" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="form.comments"></textarea>
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
  import SeguroHogarInput from '../common/SeguroHogarInput.vue'
  
  const form = ref({
    name: '',
    id: '',
    phone: '',
    email: '',
    address: '',
    property_value: '',
    coverage_type: '',
    comments: ''
  })
  
  const submitForm = () => {
    console.log('Formulario de Seguro de Hogar enviado:', form.value)
  }
  </script>
  
  <style scoped>
  </style>
  