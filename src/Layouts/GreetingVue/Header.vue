<script setup>
import { ref } from 'vue'

const name = ref('Vue')
</script>

<template>
  <header class="greeting-header">
    <div class="logo-wrapper">
      <img alt="Vue logo" class="vue-logo" src="@/assets/logo.svg" width="90" height="90" />
    </div>
    <h1 class="greeting-title">
      Hi, I'm <span class="highlight">{{ name }}</span>
    </h1>
  </header>
</template>

<style scoped>
.greeting-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.25rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border-subtle);
  width: 100%;
}

.logo-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-full);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
  transition: transform var(--transition-fast);
}

.logo-wrapper:hover {
  transform: scale(1.05);
}

.vue-logo {
  display: block;
  filter: drop-shadow(0 2px 8px rgba(255, 255, 255, 0.1));
}

.greeting-title {
  font-size: 2.2rem;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.highlight {
  color: #ffffff;
  text-decoration: underline;
  text-underline-offset: 6px;
  text-decoration-color: var(--border-strong);
}
</style>