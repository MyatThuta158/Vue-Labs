<script setup>
import { ref } from 'vue'

const year = ref(new Date().getFullYear())
</script>

<template>
  <div class="footer">
    <p>&copy; {{ year }} Vue-labs App. All rights reserved.</p>
  </div>
</template>

<style scoped>
.footer {
  text-align: center;
  padding: 1rem;
  font-size: 0.85rem;
  color: var(--color-text);
  width: 100%;
}
</style>