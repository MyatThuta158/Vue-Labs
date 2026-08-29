<script setup>
import Header from '@/Layouts/Header.vue'
import Footer from '@/Layouts/Footer.vue'
</script>

<template>
  <div class="header-container">
    <Header />
  </div>

  <div class="main-container">
    <RouterView />
  </div>

  <footer class="footer-container">
    <Footer />
  </footer>
</template>

<style scoped>
.footer-container {
  grid-column: 1 / -1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}
</style>
