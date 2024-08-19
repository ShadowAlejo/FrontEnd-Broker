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
  import { defineProps, defineEmits } from 'vue'
  
  const props = defineProps({
    id: String,
    label: String,
    type: String,
    name: String,
    placeholder: String,
    modelValue: [String, Number]
  })
  
  const emits = defineEmits(['update:modelValue'])
  
  const updateValue = (event: Event) => {
    const target = event.target as HTMLInputElement
    emits('update:modelValue', target.value)
  }
  </script>
  
  <style scoped>
  </style>
  