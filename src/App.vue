<!-- src/App.vue -->
<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex-1 py-8 px-6">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from './components/common/Navbar.vue'
import Footer from './components/common/Footer.vue'
</script>

<style scoped>
/* Aquí puedes agregar los estilos específicos de este componente */
</style>
