<template>
  <div class="slider-item">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.slider-item {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slider-item img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
