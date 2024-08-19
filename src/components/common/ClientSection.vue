<template>
  <div class="py-12 bg-color">
    <div class="container mx-auto flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
      <!-- Quiero ser Cliente Section -->
      <div class="flex-1 bg-white rounded-lg shadow-lg">
        <h3 class="text-center text-white bg-blue-500 rounded-t-lg py-2">QUIERO SER CLIENTE</h3>
        <div class="flex justify-around py-4">
          <div @click="scrollToSection('product-section')" class="text-center cursor-pointer">
            <img src="/src/assets/products.svg" alt="Productos" class="w-16 h-16 mx-auto mb-2">
            <p>Servicios</p>
          </div>
          <RouterLink to="/About" class="text-center">
          <div class="text-center">
            <img src="/src/assets/abaout.svg" alt="Conócenos" class="w-16 h-16 mx-auto mb-2">
            <p>Conócenos</p>
          </div>
        </RouterLink>
        <RouterLink to="/Contact" class="text-center">
          <div class="text-center">
            <img src="/src/assets/contact.svg" alt="Contáctenos" class="w-16 h-16 mx-auto mb-2">
            <p>Contáctenos</p>
          </div>
        </RouterLink>
        </div>
      </div>
      <!-- Ya Soy Cliente Section -->
      <div class="flex-1 bg-white rounded-lg shadow-lg">
        <h3 class="text-center text-white bg-blue-900 rounded-t-lg py-2">YA SOY CLIENTE</h3>
        <div class="flex justify-around py-4">
          <RouterLink to="/ReportarSiniestro" class="text-center">
          <div class="text-center">
            <img src="/src/assets/report.svg" alt="Reportar Siniestro" class="w-16 h-16 mx-auto mb-2">
            <p>Reportar siniestro</p>
          </div>
          </RouterLink>
          <RouterLink to="/SolicitarAsistencia" class="text-center">
          <div class="text-center">
            <img src="/src/assets/asist.svg" alt="Asistencias" class="w-16 h-16 mx-auto mb-2">
            <p>Asistencias</p>
          </div>
          </RouterLink>
          <RouterLink to="/MiPoliza" class="text-center">
          <div class="text-center">
            <img src="/src/assets/vitalidad.svg" alt="Vitality" class="w-16 h-16 mx-auto mb-2">
            <p>Mi Póliza</p>
          </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
