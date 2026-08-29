<template>
  <div class="about-container">
    <div class="about-card">
      <div class="about-header">
        <span class="about-badge">ABOUT PROJECT</span>
        <span class="about-meta">Vue.js Course Workspace</span>
      </div>

      <div class="about-body">
        <h1 class="about-title">About Vue-Labs</h1>
        <p class="about-text">
          This web application is built as part of the Vue.js curriculum, demonstrating modern front-end concepts using Vue 3, Vite, and Vue Router.
        </p>

        <div class="about-features">
          <div class="feature-item">
            <span class="feature-icon">✦</span>
            <div>
              <h4>Monochrome Minimalist Theme</h4>
              <p>Tailored black and white aesthetic with high-contrast typography and subtle glassmorphism.</p>
            </div>
          </div>

          <div class="feature-item">
            <span class="feature-icon">✦</span>
            <div>
              <h4>Dropdown Navigation</h4>
              <p>Top navigation bar with responsive dropdown menu rendering links to all pages.</p>
            </div>
          </div>

          <div class="feature-item">
            <span class="feature-icon">✦</span>
            <div>
              <h4>Modular Architecture</h4>
              <p>Well-organized layouts, views, and reusable components powered by Vue 3 Composition API.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1.5rem 0;
}

.about-card {
  width: 100%;
  max-width: 680px;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-md);
  padding: 2.5rem;
  box-shadow: var(--shadow-card);
}

.about-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid var(--border-subtle);
  margin-bottom: 1.5rem;
}

.about-badge {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  background-color: #ffffff;
  color: #000000;
  padding: 3px 8px;
  border-radius: var(--radius-sm);
}

.about-meta {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.about-title {
  font-size: 2rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 0.75rem;
  letter-spacing: -0.01em;
}

.about-text {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.about-features {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  border-top: 1px solid var(--border-subtle);
  padding-top: 1.5rem;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.feature-icon {
  color: #ffffff;
  font-size: 1rem;
  margin-top: 2px;
}

.feature-item h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.25rem;
}

.feature-item p {
  font-size: 0.88rem;
  color: var(--text-muted);
  line-height: 1.45;
}

@media (max-width: 640px) {
  .about-card {
    padding: 1.75rem;
  }
}
</style>
