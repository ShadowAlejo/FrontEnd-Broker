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
        <RouterLink to="/adminpage" class="hover:text-gray-400">Administradores</RouterLink>
        <RouterLink to="/login" class="hover:text-gray-400">Iniciar Sesión</RouterLink>
        <RouterLink to="/register" class="hover:text-gray-400">Registrarse</RouterLink>
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
      <RouterLink to="/adminpage" class="block mt-2 hover:text-gray-400">Administradores</RouterLink>
      <RouterLink to="/login" class="block mt-2 hover:text-gray-400">Iniciar Sesión</RouterLink>
      <RouterLink to="/register" class="block mt-2 hover:text-gray-400">Registrarse</RouterLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
nav {
  background-color: #000;
  color: #fff;
  padding: 1rem;
}
nav a {
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: color 0.3s;
}
nav a:hover {
  color: #bbb;
}
nav button {
  background: none;
  border: none;
}
</style>
