<template>
  <div class="mb-6">
    <label :for="id" class="block text-gray-700 font-bold mb-2">{{ label }}</label>
    <textarea :id="id" :name="name" :placeholder="placeholder" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"></textarea>
  </div>
</template>

<script setup lang="ts">
defineProps({
  id: String,
  label: String,
  name: String,
  placeholder: String
});
</script>

<style scoped>
</style>
