<script setup>
import { RouterLink } from 'vue-router'

const features = [
  {
    title: 'Simple Page',
    path: '/SimplePage/SimplePageView',
    icon: '📄',
    tag: 'Component Demo',
    description: 'Explore reactive data binding with dynamic user greeting, custom styling, and layout structure.'
  },
  {
    title: 'Quote Generator',
    path: '/QuoteGenerator/QuoteGeneraorView',
    icon: '💬',
    tag: 'Interactive Tool',
    description: 'Generate inspiring programming and life quotes dynamically with instant state updates.'
  },
  {
    title: 'About View',
    path: '/about',
    icon: 'ℹ️',
    tag: 'Information',
    description: 'Learn more about the application architecture, course objectives, and design principles.'
  }
]

const stackHighlights = [
  { label: 'Framework', value: 'Vue 3 (Composition API)' },
  { label: 'Build Tool', value: 'Vite 8' },
  { label: 'Router', value: 'Vue Router 5' },
  { label: 'Theme', value: 'Monochrome B&W' }
]
</script>

<template>
  <div class="home-container">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-badge">
        <span class="pulse-dot"></span>
        <span>VUE.JS CLASS PROJECT</span>
      </div>

      <h1 class="hero-title">
        Clean<span class="text-dim">.</span> Minimalist<span class="text-dim">.</span> Dynamic<span class="text-dim">.</span>
      </h1>

      <p class="hero-subtitle">
        A modern monochrome application built with Vue 3 and Vite. Use the top navigation dropdown to navigate across pages or explore the interactive modules below.
      </p>

      <div class="hero-actions">
        <RouterLink to="/SimplePage/SimplePageView" class="btn-primary">
          Explore Simple Page
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </RouterLink>
        <RouterLink to="/QuoteGenerator/QuoteGeneraorView" class="btn-secondary">
          Quote Generator
        </RouterLink>
      </div>
    </section>

    <!-- Page Cards Grid -->
    <section class="modules-section">
      <div class="section-header">
        <h2 class="section-title">Application Pages</h2>
        <p class="section-desc">Select any view to preview the layout and functionality</p>
      </div>

      <div class="cards-grid">
        <div v-for="item in features" :key="item.path" class="card">
          <div class="card-top">
            <div class="card-icon">{{ item.icon }}</div>
            <span class="card-tag">{{ item.tag }}</span>
          </div>

          <h3 class="card-title">{{ item.title }}</h3>
          <p class="card-desc">{{ item.description }}</p>

          <RouterLink :to="item.path" class="card-link">
            <span>Launch Page</span>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Tech Stack Highlights -->
    <section class="tech-section">
      <div class="tech-grid">
        <div v-for="stack in stackHighlights" :key="stack.label" class="tech-item">
          <span class="tech-label">{{ stack.label }}</span>
          <span class="tech-val">{{ stack.value }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  width: 100%;
}

/* Hero */
.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 3rem 1rem 1rem;
  max-width: 800px;
  margin: 0 auto;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--bg-card);
  border: 1px solid var(--border-strong);
  padding: 0.35rem 0.85rem;
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
}

.pulse-dot {
  width: 6px;
  height: 6px;
  background-color: #ffffff;
  border-radius: 50%;
  box-shadow: 0 0 8px #ffffff;
}

.hero-title {
  font-size: clamp(2.2rem, 5vw, 3.4rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-bottom: 1.25rem;
}

.text-dim {
  color: var(--text-muted);
}

.hero-subtitle {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 650px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #ffffff;
  color: #000000;
  font-weight: 600;
  font-size: 0.95rem;
  padding: 0.75rem 1.4rem;
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
  text-decoration: none;
}

.btn-primary:hover {
  background-color: #e4e4e7;
  color: #000000;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--bg-card);
  color: var(--text-primary);
  font-weight: 500;
  font-size: 0.95rem;
  padding: 0.75rem 1.4rem;
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
  text-decoration: none;
}

.btn-secondary:hover {
  background-color: var(--bg-card-hover);
  border-color: #ffffff;
  transform: translateY(-2px);
}

/* Modules Grid */
.modules-section {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.section-header {
  text-align: center;
}

.section-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.01em;
}

.section-desc {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-top: 0.25rem;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.card {
  display: flex;
  flex-direction: column;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 1.75rem;
  transition: all var(--transition-normal);
}

.card:hover {
  border-color: var(--border-strong);
  background-color: var(--bg-card);
  transform: translateY(-4px);
  box-shadow: var(--shadow-card);
}

.card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
}

.card-icon {
  font-size: 1.75rem;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-primary);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
}

.card-tag {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-weight: 700;
  color: var(--text-muted);
  background: var(--bg-primary);
  border: 1px solid var(--border-subtle);
  padding: 3px 8px;
  border-radius: var(--radius-sm);
}

.card-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.card-desc {
  font-size: 0.88rem;
  color: var(--text-secondary);
  line-height: 1.5;
  margin-bottom: 1.5rem;
  flex: 1;
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.88rem;
  font-weight: 600;
  color: #ffffff;
  text-decoration: none;
  transition: gap var(--transition-fast);
}

.card-link:hover {
  gap: 0.65rem;
  text-decoration: underline;
  text-underline-offset: 4px;
}

/* Tech Highlights */
.tech-section {
  border-top: 1px solid var(--border-subtle);
  padding-top: 2rem;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.25rem;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 1.25rem 1.75rem;
}

.tech-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.tech-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-muted);
  font-weight: 700;
}

.tech-val {
  font-size: 0.95rem;
  font-weight: 600;
  color: #ffffff;
}

@media (max-width: 640px) {
  .hero-section {
    padding: 1.5rem 0.5rem 0.5rem;
  }

  .hero-actions {
    flex-direction: column;
    width: 100%;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    justify-content: center;
  }
}
</style>
