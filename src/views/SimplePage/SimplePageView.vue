<script setup>
import { ref } from 'vue';
const name = ref('John');
const year = ref('2026');
</script>

<template>
  <div class="page-container">
    <header class="page-header">
      <span>This is Vue new Simple Page.</span>
    </header>

    <main class="page-body">
      <h1>Hello, {{ name }}!</h1>
      <p>I'm about to learn <a href="https://vuejs.org/" target="_blank">Vue.js</a></p>
    </main>

    <footer class="page-footer">
      <p>&copy; {{ year }} My App. All rights reserved.</p>
    </footer>
  </div>
</template>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.page-header {
  font-size: 0.9rem;
  opacity: 0.8;
  margin-bottom: 1.5rem;
}

.page-body {
  text-align: center;
  padding: 2rem 0;
}

.page-body h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.page-footer {
  font-size: 0.85rem;
  opacity: 0.6;
  text-align: center;
  margin-top: 1.5rem;
}

a {
  color: #42b883;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>