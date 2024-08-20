<template>
  <div class="bg-white p-6 rounded-xl shadow-2xl text-center h-full w-96">
    <img :src="image" alt="Product Image" class="w-full object-cover rounded-t-lg mb-4 rounded-3xl">
    <h3 class="text-xl font-bold mb-2">{{ title }}</h3>
    <p class="text-gray-700 mb-4">{{ description }}</p>
    <button @click="goToProductPage" class="bg-sky-400 text-white font-bold py-2 px-4 rounded-full hover:bg-sky-700">
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
