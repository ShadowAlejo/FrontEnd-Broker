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
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import LoginInput from './LoginInput.vue';
import { state } from '../../store'; // Importar el estado global con TS

interface User {
  username: string;
  password: string;
  role: string;
}

const router = useRouter();

const users: User[] = [
  { username: 'admin', password: 'admin123', role: 'admin' },
  { username: 'user', password: 'user123', role: 'user' }
];

const form = ref({
  username: '',
  password: ''
});

const submitForm = (): void => {
  const user = users.find(u => u.username === form.value.username && u.password === form.value.password);

  if (user) {
    state.isLoggedIn = true;
    state.userRole = user.role;

    if (user.role === 'admin') {
      alert('Bienvenido Administrador');
      router.push('/adminpage'); // Redirige a la página de administrador
    } else if (user.role === 'user') {
      alert('Bienvenido Usuario');
      router.push('/'); // Usa la ruta correcta
    }
  } else {
    alert('Usuario o contraseña incorrectos');
  }
};
</script>

<style scoped>
</style>
