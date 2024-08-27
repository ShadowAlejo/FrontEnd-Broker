<template>
  <div class="py-8 sm:py-12 bg-color">
    <div class="container mx-auto px-4 md:px-6 flex flex-col md:flex-row flex-wrap justify-center items-center space-y-6 md:space-y-4 md:space-x-8">
      <!-- Quiero ser Cliente Section -->
      <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 bg-white rounded-lg shadow-lg">
        <h3 class="text-center text-white bg-blue-500 text-sm md:text-base lg:text-lg rounded-t-lg py-3">QUIERO SER CLIENTE</h3>
        <div class="flex justify-around py-6">
          <div @click="scrollToSection('product-section')" class="text-center cursor-pointer">
            <img src="/src/assets/products.svg" alt="Productos" class="w-12 h-12 sm:w-16 md:w-20 mx-auto mb-2">
            <p class="text-xs md:text-sm lg:text-base">Servicios</p>
          </div>
          <RouterLink to="/About" class="text-center">
            <div class="text-center">
              <img src="/src/assets/abaout.svg" alt="Conócenos" class="w-12 h-12 sm:w-16 md:w-20 mx-auto mb-2">
              <p class="text-xs md:text-sm lg:text-base">Conócenos</p>
            </div>
          </RouterLink>
          <RouterLink to="/Contact" class="text-center">
            <div class="text-center">
              <img src="/src/assets/contact.svg" alt="Contáctenos" class="w-12 h-12 sm:w-16 md:w-20 mx-auto mb-2">
              <p class="text-xs md:text-sm lg:text-base">Contáctenos</p>
            </div>
          </RouterLink>
        </div>
      </div>
      <!-- Ya Soy Cliente Section -->
      <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 bg-white rounded-lg shadow-lg">
        <h3 class="text-center text-white bg-blue-900 text-sm md:text-base lg:text-lg rounded-t-lg py-3">YA SOY CLIENTE</h3>
        <div class="flex justify-around py-6">
          <RouterLink to="/ReportarSiniestro" class="text-center">
            <div class="text-center">
              <img src="/src/assets/report.svg" alt="Reportar Siniestro" class="w-12 h-12 sm:w-16 md:w-20 mx-auto mb-2">
              <p class="text-xs md:text-sm lg:text-base">Reportar siniestro</p>
            </div>
          </RouterLink>
          <RouterLink to="/SolicitarAsistencia" class="text-center">
            <div class="text-center">
              <img src="/src/assets/asist.svg" alt="Asistencias" class="w-12 h-12 sm:w-16 md:w-20 mx-auto mb-2">
              <p class="text-xs md:text-sm lg:text-base">Asistencias</p>
            </div>
          </RouterLink>
          <RouterLink to="/MiPoliza" class="text-center">
            <div class="text-center">
              <img src="/src/assets/vitalidad.svg" alt="Vitality" class="w-12 h-12 sm:w-16 md:w-20 mx-auto mb-2">
              <p class="text-xs md:text-sm lg:text-base">Mi Póliza</p>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const scrollToSection = (sectionId: string) => {
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
