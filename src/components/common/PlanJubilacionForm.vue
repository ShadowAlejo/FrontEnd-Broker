<template>
    <div class="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg mx-auto my-10">
      <h2 class="text-2xl font-bold mb-4 text-center"><i class="fas fa-user-clock"></i> Formulario de Plan de Jubilación</h2>
      <form @submit.prevent="submitForm">
        <PlanInput id="name" type="text" name="name" label="Nombre Completo:" placeholder="Escribe tu nombre completo" v-model="form.name" />
        <PlanInput id="id" type="text" name="id" label="Número de Identificación:" placeholder="Escribe tu número de identificación" v-model="form.id" />
        <PlanInput id="dob" type="date" name="dob" label="Fecha de Nacimiento:" placeholder="Selecciona tu fecha de nacimiento" v-model="form.dob" />
        <PlanInput id="phone" type="text" name="phone" label="Número de Teléfono:" placeholder="Escribe tu número de teléfono" v-model="form.phone" />
        <PlanInput id="email" type="email" name="email" label="Correo Electrónico:" placeholder="Escribe tu correo electrónico" v-model="form.email" />
        <PlanInput id="monthly_income" type="number" name="monthly_income" label="Ingresos Mensuales Actuales:" placeholder="Escribe tus ingresos mensuales actuales" v-model="form.monthly_income" />
        <PlanInput id="years_contribution" type="number" name="years_contribution" label="Años de Aportación:" placeholder="Escribe tus años de aportación" v-model="form.years_contribution" />
        
        <div class="mb-4">
          <label for="investment_funds" class="block text-gray-700 font-bold mb-2"><i class="fas fa-piggy-bank"></i> Fondos de Inversión Actuales:</label>
          <textarea id="investment_funds" name="investment_funds" placeholder="Describe tus fondos de inversión actuales (opcional)" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="form.investment_funds"></textarea>
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
  import PlanInput from '../common/PlanInput.vue';
  
  const form = ref({
    name: '',
    id: '',
    dob: '',
    phone: '',
    email: '',
    monthly_income: '',
    years_contribution: '',
    investment_funds: '',
    comments: ''
  })
  
  const submitForm = () => {
    console.log('Formulario de Plan de Jubilación enviado:', form.value)
    // Aquí puedes manejar el envío de datos, por ejemplo, enviarlos a una API
  }
  </script>
  
  <style scoped>
  </style>
  