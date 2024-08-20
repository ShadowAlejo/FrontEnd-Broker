<template>
  <section id="product-section" class="py-12 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-8">Nuestros Servicios</h2>
      <p class="text-center text-gray-600 mb-12">Conoce nuestras soluciones para ti</p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProductCard
          v-for="(product, index) in products"
          :key="index"
          :image="product.image"
          :title="product.title"
          :description="product.description"
          :routeName="product.routeName"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProductCard from './ProductCard.vue'

const products = [
  {
    image: '/src/assets/respaldoFamiliar.svg',
    title: 'Respaldo Familiar',
    description: 'Un seguro que te ayuda a planificar tu futuro en el caso de cualquier eventualidad.',
    routeName: 'Respaldo' // Nombre de la ruta correspondiente
  },
  {
    image: '/src/assets/fianzas.svg',
    title: 'Fianzas',
    description: 'Te acompañamos en el cumplimiento de tus obligaciones con un servicio ágil y una asesoría especializada.',
    routeName: 'Fianzas' // Nombre de la ruta correspondiente
  },
  {
    image: '/src/assets/planJubilacion.svg',
    title: 'Plan de jubilación',
    description: 'Solución para cumplir tu meta y llegar a la edad de retiro sin preocupaciones.',
    routeName: 'PlanJubilacion' // Nombre de la ruta correspondiente
  },
  {
    image: '/src/assets/seguroSalud.svg',
    title: 'Seguro de Salud',
    description: 'Cubre tus necesidades médicas y las de tu familia con el mejor servicio de salud.',
    routeName: 'SeguroSalud' // Nombre de la ruta correspondiente
  },
  {
    image: '/src/assets/seguroVehiculos.svg',
    title: 'Seguro de Vehículos',
    description: 'Protege tu vehículo contra accidentes y robos con nuestro seguro integral.',
    routeName: 'SeguroVehiculos' // Nombre de la ruta correspondiente
  },
  {
    image: '/src/assets/seguroHogar.svg',
    title: 'Seguro de Hogar',
    description: 'Asegura tu hogar contra cualquier eventualidad con nuestras coberturas completas.',
    routeName: 'SeguroHogar' // Nombre de la ruta correspondiente
  }
]
</script>

<style scoped>
</style>
