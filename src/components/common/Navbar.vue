<template>
  <nav class="bg-black text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <RouterLink to="/">
        <div class="flex items-center">
          <span class="text-2xl font-bold">V&F Seguros</span>
        </div>
      </RouterLink>

      <div class="hidden lg:flex space-x-6">
        <RouterLink to="/" class="hover:text-gray-400">Inicio</RouterLink>
        <RouterLink to="/about" class="hover:text-gray-400">Acerca</RouterLink>
        <RouterLink to="/contact" class="hover:text-gray-400">Contactarnos</RouterLink>
        
        <!-- Mostrar la opción de Administradores solo si el usuario es admin -->
        <RouterLink v-if="state.userRole === 'admin'" to="/adminpage" class="hover:text-gray-400">Administradores</RouterLink>

        <!-- Mostrar las opciones de login/register solo si no hay sesión activa -->
        <RouterLink v-if="!state.isLoggedIn" to="/login" class="hover:text-gray-400">Iniciar Sesión</RouterLink>
        <RouterLink v-if="!state.isLoggedIn" to="/register" class="hover:text-gray-400">Registrarse</RouterLink>

        <!-- Mostrar la opción de cerrar sesión si el usuario está logueado -->
        <button v-if="state.isLoggedIn" @click="logout" class="hover:text-gray-400">Cerrar Sesión</button>
      </div>

      <div class="lg:hidden">
        <button @click="toggleMenu" class="text-white focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </div>

    <div :class="{'block': isMenuOpen, 'hidden': !isMenuOpen}" class="lg:hidden mt-4">
      <RouterLink to="/" class="block mt-2 hover:text-gray-400">Inicio</RouterLink>
      <RouterLink to="/about" class="block mt-2 hover:text-gray-400">Acerca</RouterLink>
      <RouterLink to="/contact" class="block mt-2 hover:text-gray-400">Contactarnos</RouterLink>

      <RouterLink v-if="state.userRole === 'admin'" to="/adminpage" class="block mt-2 hover:text-gray-400">Administradores</RouterLink>
      <RouterLink v-if="!state.isLoggedIn" to="/login" class="block mt-2 hover:text-gray-400">Iniciar Sesión</RouterLink>
      <RouterLink v-if="!state.isLoggedIn" to="/register" class="block mt-2 hover:text-gray-400">Registrarse</RouterLink>
      <button v-if="state.isLoggedIn" @click="logout" class="block mt-2 hover:text-gray-400">Cerrar Sesión</button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { state } from '../../store'; // Importar el estado global con TS

const router = useRouter();
const isMenuOpen = ref(false);

// Función para alternar el menú en dispositivos móviles
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Función de logout
const logout = (): void => {
  state.isLoggedIn = false;
  state.userRole = '';
  router.push('/login');
};

</script>

<style scoped>
/* Estilos específicos */
</style>
