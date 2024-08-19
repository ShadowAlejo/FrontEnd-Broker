<template>
  <div>
    <!-- Slider Section -->
    <Slider>
      <SliderItem>
        <img src="/src/assets/slider1.svg" alt="Slider Image 1">
      </SliderItem>
      <SliderItem>
        <img src="/src/assets/slider2.svg" alt="Slider Image 2">
      </SliderItem>
      <SliderItem>
        <img src="/src/assets/slider3.svg" alt="Slider Image 3">
      </SliderItem>
      <SliderItem>
        <img src="/src/assets/slider4.svg" alt="Slider Image4">
      </SliderItem>
    </Slider>

    <!-- Client Section -->
    <ClientSection />

    <!-- Product Section -->
    <ProductSection />
  </div>
</template>

<script setup lang="ts">
import Slider from '../components/common/slider.vue'
import SliderItem from '../components/common/sliderItem.vue'
import ClientSection from '../components/common/ClientSection.vue'
import ProductSection from '../components/common/ProductSection.vue'

</script>

<style scoped>
</style>
