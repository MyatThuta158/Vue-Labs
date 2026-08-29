<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const year = ref(new Date().getFullYear())
</script>

<template>
  <footer class="app-footer">
    <div class="footer-container">
      <div class="footer-brand">
        <span class="brand-title">VUE<span class="brand-dot">.</span>LABS</span>
        <span class="footer-tagline">Clean Monochrome Architecture</span>
      </div>

      <nav class="footer-nav">
        <RouterLink to="/" class="footer-link">Home</RouterLink>
        <RouterLink to="/GreetingVuePage/GreetingVuePage" class="footer-link">Greeting Vue</RouterLink>
        <RouterLink to="/SimplePage/SimplePageView" class="footer-link">Simple Page</RouterLink>
        <RouterLink to="/QuoteGenerator/QuoteGeneraorView" class="footer-link">Quote Generator</RouterLink>
        <RouterLink to="/about" class="footer-link">About</RouterLink>
      </nav>

      <div class="footer-divider"></div>

      <div class="footer-bottom">
        <p class="copyright">&copy; {{ year }} Vue-labs App. Built with Vue 3 &amp; Vite.</p>
        <p class="credit">Designed with Black &amp; White Aesthetic</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  width: 100%;
  background-color: var(--bg-secondary);
  border-top: 1px solid var(--border-subtle);
  padding: 3rem 1.5rem 2rem;
  margin-top: auto;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.brand-title {
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: #ffffff;
}

.brand-dot {
  color: #a1a1aa;
}

.footer-tagline {
  font-size: 0.8rem;
  color: var(--text-muted);
  letter-spacing: 0.04em;
}

.footer-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}

.footer-link {
  font-size: 0.88rem;
  color: var(--text-secondary);
  transition: color var(--transition-fast);
}

.footer-link:hover {
  color: #ffffff;
  text-decoration: underline;
  text-underline-offset: 4px;
}

.footer-divider {
  width: 100%;
  max-width: 400px;
  height: 1px;
  background: var(--border-subtle);
  margin: 0.5rem 0;
}

.footer-bottom {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  font-size: 0.8rem;
  color: var(--text-muted);
}

.copyright {
  font-weight: 400;
}

.credit {
  font-size: 0.75rem;
  opacity: 0.7;
}

@media (max-width: 640px) {
  .app-footer {
    padding: 2.5rem 1rem 1.5rem;
  }

  .footer-nav {
    gap: 1rem;
  }
}
</style>