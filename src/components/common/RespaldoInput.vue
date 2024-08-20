<template>
  <div class="mb-4">
    <label :for="id" class="block text-gray-700 font-bold mb-2">{{ label }}</label>
    <input 
      :type="type" 
      :id="id" 
      :name="name" 
      :placeholder="placeholder" 
      :value="modelValue" 
      @input="updateValue" 
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

defineProps({
  id: String,
  type: String,
  name: String,
  label: String,
  placeholder: String,
  modelValue: String
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement | null;
  if (target) {
    emit('update:modelValue', target.value);
  }
}
</script>

<style scoped>
</style>
