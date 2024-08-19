<template>
    <div class="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg mx-auto my-10">
      <h2 class="text-2xl font-bold mb-4 text-center"><i class="fas fa-car"></i> Formulario de Seguro de Vehículos</h2>
      <form @submit.prevent="submitForm">
        <SeguroVehiculosInput id="name" type="text" name="name" label="Nombre Completo:" placeholder="Escribe tu nombre completo" v-model="form.name" />
        <SeguroVehiculosInput id="id" type="text" name="id" label="Número de Identificación:" placeholder="Escribe tu número de identificación" v-model="form.id" />
        <SeguroVehiculosInput id="dob" type="date" name="dob" label="Fecha de Nacimiento:" placeholder="Selecciona tu fecha de nacimiento" v-model="form.dob" />
        <SeguroVehiculosInput id="phone" type="text" name="phone" label="Número de Teléfono:" placeholder="Escribe tu número de teléfono" v-model="form.phone" />
        <SeguroVehiculosInput id="email" type="email" name="email" label="Correo Electrónico:" placeholder="Escribe tu correo electrónico" v-model="form.email" />
        
        <SeguroVehiculosInput id="vehicle_make" type="text" name="vehicle_make" label="Marca del Vehículo:" placeholder="Escribe la marca de tu vehículo" v-model="form.vehicle_make" />
        <SeguroVehiculosInput id="vehicle_model" type="text" name="vehicle_model" label="Modelo del Vehículo:" placeholder="Escribe el modelo de tu vehículo" v-model="form.vehicle_model" />
        <SeguroVehiculosInput id="vehicle_year" type="number" name="vehicle_year" label="Año del Vehículo:" placeholder="Escribe el año de tu vehículo" v-model="form.vehicle_year" />
        <SeguroVehiculosInput id="vehicle_vin" type="text" name="vehicle_vin" label="Número VIN del Vehículo:" placeholder="Escribe el número VIN de tu vehículo" v-model="form.vehicle_vin" />
  
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
  import SeguroVehiculosInput from '../common/SeguroVehiculosInput.vue'
  
  const form = ref({
    name: '',
    id: '',
    dob: '',
    phone: '',
    email: '',
    vehicle_make: '',
    vehicle_model: '',
    vehicle_year: '',
    vehicle_vin: '',
    comments: ''
  })
  
  const submitForm = () => {
    console.log('Formulario de Seguro de Vehículos enviado:', form.value)
    // Aquí puedes manejar el envío de datos, por ejemplo, enviarlos a una API
  }
  </script>
  
  <style scoped>
  </style>
  