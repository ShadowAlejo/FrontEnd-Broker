<template>
  <div class="bg-white p-4 sm:p-6 rounded-xl shadow-2xl text-center h-full w-full sm:max-w-xs lg:max-w-sm mx-auto">
    <img :src="image" alt="Product Image" class="w-full object-cover rounded-t-lg mb-4 rounded-3xl h-48 sm:h-56 lg:h-64">
    <h3 class="text-lg sm:text-xl font-bold mb-2">{{ title }}</h3>
    <p class="text-gray-700 text-sm sm:text-base mb-4">{{ description }}</p>
    <button @click="goToProductPage" class="bg-sky-400 text-white font-bold py-2 px-4 rounded-full hover:bg-sky-700 transition-colors duration-300 ease-in-out">
      Ver más
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const props = defineProps<{
  image: string;
  title: string;
  description: string;
  routeName: string;
}>();

const router = useRouter();

const goToProductPage = () => {
  router.push({ name: props.routeName });
};
</script>

<style scoped>
</style>