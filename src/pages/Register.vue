<template>
    <div class="flex items-center justify-center flex-grow my-14">
      <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <RegisterTitle />
        <RegisterForm />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import RegisterTitle from '../components/common/RegisterTitle.vue'
  import RegisterForm from '../components/common/RegisterForm.vue'
  </script>
  
  <style scoped>
  </style>
  