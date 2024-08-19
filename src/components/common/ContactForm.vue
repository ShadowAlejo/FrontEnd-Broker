<template>
  <div class="contact-form-container bg-white p-8 rounded-lg w-full max-w-md mx-auto my-10">
    <h2 class="text-2xl font-bold mb-4 text-center">Escribenos</h2>
    <p class="mb-6 text-center">Déjanos tu información y te escribiremos</p>
    <form action="#" method="POST">
      <div class="mb-4">
        <label for="name" class="block text-gray-700 font-bold mb-2">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Campo a llenar"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-gray-700 font-bold mb-2">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Campo a llenar"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div class="mb-6">
        <label for="message" class="block text-gray-700 font-bold mb-2">Mensaje:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Campo a llenar"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"
        ></textarea>
      </div>
      <div class="flex items-center justify-center">
        <button
          type="submit"
          class="bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-gray-700"
        >
          Enviar
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
