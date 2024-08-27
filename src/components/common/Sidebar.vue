<template>
    <div>
      <ul>
        <li v-for="link in links" :key="link.name">
          <router-link :to="link.path" class="sidebar-link" active-class="active-link">
            <i :class="link.icon"></i>
            <span>{{ link.name }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  interface Link {
    name: string;
    path: string;
    icon: string;
  }
  
  defineProps<{ links: Link[] }>();
  </script>
  
  <style scoped>
  /* Sidebar Styles */
  .sidebar-link {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    color: #e2e8f0;
    text-decoration: none;
    border-radius: 8px;
    transition: background-color 0.3s, transform 0.3s;
  }
  
  .sidebar-link:hover {
    background-color: #334155;
    transform: translateX(5px);
  }
  
  .active-link {
    background-color: #0ea5e9;
    color: white;
  }
  </style>
  