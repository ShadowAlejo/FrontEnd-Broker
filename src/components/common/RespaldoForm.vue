<template>
  <div class="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg mx-auto my-10">
    <h2 class="text-2xl font-bold mb-4 text-center"><i class="fas fa-users"></i> Formulario de Respaldo Familiar</h2>
    <form @submit.prevent="submitForm">
      <RespaldoInput id="name" type="text" name="name" label="Nombre Completo:" placeholder="Escribe tu nombre completo" v-model="form.name" />
      <RespaldoInput id="id" type="text" name="id" label="Número de Identificación:" placeholder="Escribe tu número de identificación" v-model="form.id" />
      <RespaldoInput id="dob" type="date" name="dob" label="Fecha de Nacimiento:" placeholder="Selecciona tu fecha de nacimiento" v-model="form.dob" />
      <RespaldoInput id="phone" type="text" name="phone" label="Número de Teléfono:" placeholder="Escribe tu número de teléfono" v-model="form.phone" />
      <RespaldoInput id="email" type="email" name="email" label="Correo Electrónico:" placeholder="Escribe tu correo electrónico" v-model="form.email" />
      <RespaldoInput id="address" type="text" name="address" label="Dirección:" placeholder="Escribe tu dirección" v-model="form.address" />
      <RespaldoInput id="family_members" type="number" name="family_members" label="Número de Miembros de la Familia:" placeholder="Escribe el número de miembros de la familia" v-model="form.family_members" />
      
      <div class="mb-4">
        <label for="plan_details" class="block text-gray-700 font-bold mb-2"><i class="fas fa-info-circle"></i> Detalles del Plan:</label>
        <textarea id="plan_details" name="plan_details" placeholder="Describe los detalles del plan" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="form.plan_details"></textarea>
      </div>

      <div class="mb-6">
        <label for="comments" class="block text-gray-700 font-bold mb-2"><i class="fas fa-comment"></i> Comentarios Adicionales:</label>
        <textarea id="comments" name="comments" placeholder="Escribe cualquier comentario adicional" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="form.comments"></textarea>
      </div>

      <div class="flex items-center justify-center">
        <button type="submit" class="bg-sky-400 text-white font-bold py-2 px-4 rounded-full hover:bg-sky-700 w-full sm:w-auto"><i class="fas fa-paper-plane"></i> Enviar Solicitud</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import RespaldoInput from './RespaldoInput.vue';

const form = ref({
  name: '',
  id: '',
  dob: '',
  phone: '',
  email: '',
  address: '',
  family_members: '',
  plan_details: '',
  comments: ''
})

const submitForm = () => {
  console.log('Formulario enviado:', form.value)
  // Aquí puedes manejar el envío de datos, por ejemplo, enviarlos a una API
}
</script>

<style scoped>
</style>
