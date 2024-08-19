<template>
  <div class="mb-4">
     <label :for="id" class="block text-gray-700 font-bold mb-2">{{ label }}</label>
     <input 
        :type="type" 
        :id="id" 
        :name="name" 
        :placeholder="placeholder" 
        v-bind:value="modelValue"
        v-on:input="$emit('update:modelValue', $event.target.value)"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  id: String,
  label: String,
  type: String,
  name: String,
  placeholder: String,
  modelValue: String // Este prop permite el binding con `v-model`
})
</script>

<style scoped>
</style>
