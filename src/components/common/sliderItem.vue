<template>
  <div class="slider-item">
    <slot></slot>
  </div>
</template>

<style scoped>
.slider-item {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slider-item img {
  width: 80%; /* Reduce el tamaño de las imágenes al 80% del contenedor */
  max-width: 80%; /* Limita el tamaño máximo al 80% del contenedor */
  height: auto;
  max-height: 80%; /* Limita la altura máxima al 80% del contenedor */
  object-fit: cover;
  border-radius: 10px; /* Opción adicional para redondear las esquinas */
}
</style>
