<template>
  <div class="slider-container mx-auto rounded-2xl">
    <div class="slider-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const currentSlide = ref(0)
const slides = ref([])

const next = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length
}

onMounted(() => {
  slides.value = Array.from(document.querySelectorAll('.slider-track > *'))
  const interval = setInterval(() => {
    next()
  }, 6000)
  onUnmounted(() => {
    clearInterval(interval)
  })
})
</script>

<style scoped>
.slider-container {
  width: 62%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
}

.slider-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
}

.slider-track > * {
  flex-shrink: 0;
  width: 100%;
  height: auto;
}
</style>
