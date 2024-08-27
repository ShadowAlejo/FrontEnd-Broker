<template>
    <div class="board p-4">
      <!-- Header del Board -->
      <div class="board-header flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0">
        <h1 class="text-xl font-bold">Board</h1>
        <input type="text" placeholder="Quick Filters" class="filter-input p-2 border rounded w-full md:w-64" />
      
    </div>

      
  
      <!-- Aquí es donde los componentes dinámicos se cargarán -->
      <router-view />
  
      <!-- Si deseas que haya contenido estático adicional -->
      <div class="columns grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 overflow-x-auto">
        <div v-for="column in columns" :key="column.id" class="column flex-shrink-0 w-full md:w-auto">
          <h2 class="text-lg font-semibold mb-2">{{ column.name }}</h2>
          <div class="task p-4 bg-white rounded shadow mb-2" v-for="task in column.tasks" :key="task.id">
            <p>{{ task.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const columns = ref([
    { id: 1, name: 'To Do', tasks: [{ id: 1, name: 'Task 1' }, { id: 2, name: 'Task 2' }] },
    { id: 2, name: 'In Progress', tasks: [{ id: 3, name: 'Task 3' }] },
    { id: 3, name: 'Code Review', tasks: [{ id: 4, name: 'Task 4' }] },
    { id: 4, name: 'Done', tasks: [{ id: 5, name: 'Task 5' }] },
  ]);
  </script>
  
  <style scoped>
  .board {
    background-color: #f8fafc;
  }
  
  .filter-input {
    width: 100%;
  }
  
  .columns {
    display: grid;
    gap: 16px;
  }
  
  .column {
    width: 100%;
    flex-shrink: 0;
  }
  
  .task {
    background-color: #fff;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  </style>
  