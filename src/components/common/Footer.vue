<template>
  <footer class="bg-black text-white py-4">
    <div class="container mx-auto flex flex-col lg:flex-row justify-between items-center">
      <div class="social-icons flex space-x-6 mb-4 lg:mb-0">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" class="hover:text-gray-400">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" class="hover:text-gray-400">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" class="hover:text-gray-400">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
      <div class="contact-info text-sm text-center lg:text-right">
        Para contactarnos con nuestro servicio al cliente<br>
        +593 96 279 6998
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
footer {
  background-color: #000;
  color: #fff;
  padding: 1rem 0;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
@media (min-width: 1024px) {
  .container {
    flex-direction: row;
  }
}
.social-icons a {
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.3s;
}
.social-icons a:hover {
  color: #bbb;
}
.contact-info {
  text-align: center;
}
@media (min-width: 1024px) {
  .contact-info {
    text-align: right;
  }
}
</style>
