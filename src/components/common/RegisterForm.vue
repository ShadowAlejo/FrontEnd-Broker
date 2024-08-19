<template>
    <form action="#" method="POST">
      <RegisterInput id="username" name="username" label="Nombre de usuario:" type="text" placeholder="Nombre de usuario" />
      <RegisterInput id="email" name="email" label="Correo electrónico:" type="email" placeholder="Correo electrónico" />
      <RegisterInput id="password" name="password" label="Contraseña:" type="password" placeholder="Contraseña" />
      <RegisterInput id="confirm_password" name="confirm_password" label="Confirmar contraseña:" type="password" placeholder="Confirmar contraseña" />
      <RegisterButton />
    </form>
  </template>
  
  <script setup lang="ts">
  import RegisterInput from './RegisterInput.vue'
  import RegisterButton from './RegisterButton.vue'
  </script>
  
  <style scoped>
  </style>
  