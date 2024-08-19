<template>
    <div class="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg mx-auto my-10">
      <h2 class="text-2xl font-bold mb-4 text-center"><i class="fas fa-file-contract"></i> Formulario de Solicitud de Fianza</h2>
      <form @submit.prevent="submitForm">
        <FianzaInput id="name" type="text" name="name" label="Nombre Completo:" placeholder="Escribe tu nombre completo" v-model="form.name" />
        <FianzaInput id="id" type="text" name="id" label="Número de Identificación:" placeholder="Escribe tu número de identificación" v-model="form.id" />
        <FianzaInput id="phone" type="text" name="phone" label="Número de Teléfono:" placeholder="Escribe tu número de teléfono" v-model="form.phone" />
        <FianzaInput id="email" type="email" name="email" label="Correo Electrónico:" placeholder="Escribe tu correo electrónico" v-model="form.email" />
        
        <div class="mb-4">
          <label for="fianzaType" class="block text-gray-700 font-bold mb-2"><i class="fas fa-list-alt"></i> Tipo de Fianza:</label>
          <select id="fianzaType" name="fianzaType" v-model="form.fianzaType" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option value="" disabled>Seleccione un tipo de fianza</option>
            <option value="judicial">Fianza Judicial</option>
            <option value="fidelidad">Fianza de Fidelidad</option>
            <option value="licitación">Fianza de Licitación</option>
            <!-- Otros tipos de fianzas -->
          </select>
        </div>
  
        <FianzaInput id="amount" type="number" name="amount" label="Monto de la Fianza:" placeholder="Escribe el monto" v-model="form.amount" />
        <FianzaInput id="term" type="text" name="term" label="Plazo de la Fianza:" placeholder="Escribe el plazo de la fianza" v-model="form.term" />
        <FianzaInput id="purpose" type="text" name="purpose" label="Propósito de la Fianza:" placeholder="Escribe el propósito de la fianza" v-model="form.purpose" />
        
        <div class="mb-4">
          <label for="documents" class="block text-gray-700 font-bold mb-2"><i class="fas fa-upload"></i> Documentos Adjuntos:</label>
          <input type="file" id="documents" name="documents" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" @change="handleFileUpload">
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
  import FianzaInput from '../common/FianzaInput.vue'
  
  const form = ref({
    name: '',
    id: '',
    phone: '',
    email: '',
    fianzaType: '',
    amount: '',
    term: '',
    purpose: '',
    documents: null,
    comments: ''
  })
  
  const submitForm = () => {
    console.log('Formulario de Fianza enviado:', form.value)
  }
  
  const handleFileUpload = (event) => {
    form.value.documents = event.target.files[0]
  }
  </script>
  
  <style scoped>
  </style>
  