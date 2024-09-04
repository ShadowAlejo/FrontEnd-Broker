<template>
    <div class="admin-page flex flex-col lg:flex-row min-h-screen">
      <!-- Botón para mostrar el Sidebar en pantallas pequeñas -->
      <button @click="isSidebarOpen = !isSidebarOpen" class="lg:hidden p-4 fixed top-4 left-4 z-50 bg-gray-800 text-white">
        <i class="fas fa-bars"></i>
      </button>
  
      <!-- Sidebar -->
      <div :class="['sidebar', isSidebarOpen ? 'block' : 'hidden', 'lg:block']" class="lg:w-1/4">
        <Sidebar :links="navLinks" />
      </div>
  
      <!-- Contenido principal -->
      <div class="flex-grow bg-gray-100 p-4">
        <!-- Aquí se cargarán los componentes hijos -->
        <router-view />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import Sidebar from '../components/common/Sidebar.vue';
  import { ref } from 'vue';
  
  const navLinks = [
    { name: 'Agregar Cliente', path: '/adminpage/add-client', icon: 'fas fa-user-plus' },
    { name: 'Lista de Clientes', path: '/adminpage/client-list', icon: 'fas fa-users' },
    { name: 'Atender Solicitudes', path: '/adminpage/handle-requests', icon: 'fas fa-envelope-open-text' },
  ];
  
  // Controla la visibilidad del Sidebar en pantallas pequeñas
  const isSidebarOpen = ref(false);
  </script>
  
  <style scoped>
  .admin-page {
    background-color: #f1f5f9;
  }
  
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  
  .sidebar {
    background-color: #1e293b;
    color: #f1f5f9;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  }
  </style>
  