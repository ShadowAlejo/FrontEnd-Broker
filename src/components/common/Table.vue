<!-- src/components/common/Table.vue -->
<template>
    <table class="table">
      <thead>
        <tr>
          <th>Client</th>
          <th>Policy</th>
          <th>Commission</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in rows" :key="index">
          <td>
            <div class="flex items-center gap-2">
              <Avatar>
                <img :src="row.avatar" alt="Client Avatar" />
                <AvatarFallback :fallbackText="row.initials" />
              </Avatar>
              <div>
                <div class="font-medium">{{ row.clientName }}</div>
                <div class="text-gray-500">{{ row.clientEmail }}</div>
              </div>
            </div>
          </td>
          <td>
            <div class="font-medium">{{ row.policyType }}</div>
            <div class="text-gray-500">{{ row.policyNumber }}</div>
          </td>
          <td>
            <div class="font-medium">{{ row.commission }}</div>
          </td>
          <td>
            <div class="text-gray-500">{{ row.date }}</div>
          </td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue'
  import Avatar from './Avatar.vue'
  import AvatarFallback from './AvatarFallback.vue'
  
  // Define el tipo de las filas
  interface TableRow {
    avatar: string;
    initials: string;
    clientName: string;
    clientEmail: string;
    policyType: string;
    policyNumber: string;
    commission: string;
    date: string;
  }
  
  const props = defineProps<{
    rows: TableRow[]
  }>()

  const {rows}=props
  </script>
  
  <style scoped>
  /* Aquí puedes agregar los estilos específicos de este componente */
  </style>
  