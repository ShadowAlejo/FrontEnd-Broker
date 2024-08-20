<template>
    <div class="mb-4">
      <label :for="id" class="block text-gray-700 font-bold mb-2">{{ label }}</label>
      <input 
        :type="type" 
        :id="id" 
        :name="name" 
        :placeholder="placeholder" 
        :value="modelValue" 
        @input="updateValue($event)" 
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  </template>
  
  <script setup lang="ts">
import { defineEmits } from 'vue'

// Define los props sin asignarlos a una variable
defineProps({
  id: String,
  label: String,
  type: String,
  name: String,
  placeholder: String,
  modelValue: [String, Number]
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>
  
  <style scoped>
  </style>
  