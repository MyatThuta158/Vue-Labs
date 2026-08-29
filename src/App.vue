<script setup>
import Header from '@/Layouts/MainPage/Header.vue'
import Footer from '@/Layouts/MainPage/Footer.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app-layout">
    <Header />
    <main class="main-content">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  width: 100%;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem;
}

@media (max-width: 768px) {
  .main-content {
    padding: 1.5rem 1rem;
  }
}
</style>
