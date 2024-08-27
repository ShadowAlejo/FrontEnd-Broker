<template>
  <div class="slider-container">
    <div class="slider-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const currentSlide = ref(0)
let slides = ref([])

function next() {
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
  width: 60%; /* Reduce el ancho del slider al 60% del contenedor padre */
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  border-radius: 15px; /* Redondea los bordes del slider */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra sutil */
  margin: 0 auto; /* Centra el slider horizontalmente */
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
  border-radius: 15px; /* Aplica el redondeo a los elementos del slider */
  overflow: hidden; /* Asegura que el contenido no se desborde de los bordes redondeados */
}
</style>
