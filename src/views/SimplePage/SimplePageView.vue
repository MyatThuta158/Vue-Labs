<script setup>
import { ref } from 'vue'

const name = ref('John')
const year = ref(new Date().getFullYear())
</script>

<template>
  <div class="simple-page-wrapper">
    <div class="page-container">
      <div class="page-header">
        <span class="badge">SAMPLE VIEW</span>
        <span class="header-desc">Simple Page Demonstration</span>
      </div>

      <div class="page-body">
        <h1 class="greeting-title">Hello, <span class="highlight">{{ name }}</span>!</h1>
        <p class="intro-text">
          Welcome to your Vue.js journey. Explore documentation on
          <a href="https://vuejs.org/" target="_blank" rel="noopener" class="vue-link">Vue.js Official Guide</a>.
        </p>

        <div class="input-card">
          <label for="name-input" class="input-label">Change your name:</label>
          <input
            id="name-input"
            v-model="name"
            type="text"
            placeholder="Type your name..."
            class="name-input"
          />
        </div>
      </div>

      <div class="page-footer">
        <p>&copy; {{ year }} Vue-Labs. Interactive Reactive State.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.simple-page-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1.5rem 0;
}

.page-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 580px;
  padding: 2.5rem;
  background-color: var(--bg-secondary);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-strong);
  box-shadow: var(--shadow-card);
  transition: border-color var(--transition-fast);
}

.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid var(--border-subtle);
  margin-bottom: 1.5rem;
}

.badge {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  background-color: #ffffff;
  color: #000000;
  padding: 3px 8px;
  border-radius: var(--radius-sm);
}

.header-desc {
  font-size: 0.82rem;
  color: var(--text-muted);
}

.page-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.25rem;
  padding: 1rem 0 2rem;
}

.greeting-title {
  font-size: 2.2rem;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.02em;
}

.highlight {
  color: #ffffff;
  text-decoration: underline;
  text-underline-offset: 6px;
  text-decoration-color: var(--border-strong);
}

.intro-text {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

.vue-link {
  color: #ffffff;
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.vue-link:hover {
  opacity: 0.8;
}

.input-card {
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;
  margin-top: 1rem;
  background-color: var(--bg-card);
  border: 1px solid var(--border-subtle);
  padding: 1.25rem;
  border-radius: var(--radius-sm);
}

.input-label {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.name-input {
  width: 100%;
  background: var(--bg-primary);
  border: 1px solid var(--border-strong);
  color: #ffffff;
  padding: 0.65rem 0.85rem;
  font-size: 0.95rem;
  font-family: inherit;
  border-radius: var(--radius-sm);
  outline: none;
  transition: border-color var(--transition-fast);
}

.name-input:focus {
  border-color: #ffffff;
}

.page-footer {
  font-size: 0.8rem;
  color: var(--text-muted);
  text-align: center;
  padding-top: 1.25rem;
  border-top: 1px solid var(--border-subtle);
}
</style>