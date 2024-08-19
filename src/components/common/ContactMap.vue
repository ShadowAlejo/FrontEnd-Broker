<template>
    <div class="text-4xl text-center font-bold p-3">
      Dónde Estamos
    </div>
    <div class="map-container">
      <iframe class="rounded-xl shadow-md" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.2254443908378!2d-78.6256529715521!3d-1.2281339999221825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d381b2f9fb09e9%3A0x1ef9483bddd7e9ea!2sA%20La%20Costa%20%26%20Himno%20Nacional%2C%20180101%20Ambato!5e0!3m2!1ses!2sec!4v1722367811261!5m2!1ses!2sec" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style scoped>
  .map-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  iframe {
    max-width: 100%;
    height: 450px;
    border: 0;
  }
  </style>
  