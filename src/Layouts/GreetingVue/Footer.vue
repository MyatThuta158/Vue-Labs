<script setup>
import { ref } from 'vue'

const year = ref(new Date().getFullYear())
</script>

<template>
  <footer class="greeting-footer">
    <p>&copy; {{ year }} Greeting Vue Project. All rights reserved.</p>
  </footer>
</template>

<style scoped>
.greeting-footer {
  width: 100%;
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-subtle);
  font-size: 0.82rem;
  color: var(--text-muted);
}
</style>
