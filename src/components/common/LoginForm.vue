<template>
  <form @submit.prevent="submitForm">
     <LoginInput id="username" name="username" label="Nombre de usuario:" type="text" placeholder="Nombre de usuario" v-model="form.username"/>
     <LoginInput id="password" name="password" label="Contraseña:" type="password" placeholder="Contraseña" v-model="form.password"/>
     <div class="flex items-center justify-between mb-4">
        <label class="inline-flex items-center">
           <input type="checkbox" class="form-checkbox text-gray-700">
           <span class="ml-2 text-gray-700">Recuérdame</span>
        </label>
        <a href="#" class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">¿Olvidaste tu contraseña?</a>
     </div>
     <div class="flex items-center justify-center">
        <button type="submit" class="bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-gray-700">Iniciar Sesión</button>
     </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import LoginInput from './LoginInput.vue'

const router = useRouter()

// Datos quemados para simular el login
const correctUsername = 'admin';
const correctPassword = '1234';

const form = ref({
  username: '',
  password: ''
})

const submitForm = () => {

  console.log(`Ingresado - Usuario: ${form.value.username}, Contraseña: ${form.value.password}`);
  console.log(`Correcto - Usuario: ${correctUsername}, Contraseña: ${correctPassword}`);

  if (form.value.username === correctUsername && form.value.password === correctPassword) {
    router.push('/'); // Redirige al Home
  } else {
    alert('Usuario o contraseña incorrectos');
  }
}

</script>

<style scoped>
</style>
