<script setup>
import Header from '@/Layouts/GreetingVue/Header.vue'
import Footer from '@/Layouts/GreetingVue/Footer.vue'
import { ref } from 'vue'
const facts = ref([
  {
    title: "Reactive",
    desc: "Vue automatically updates the UI when reactive data changes."
  },
  {
    title: "Component-Based",
    desc: "Vue applications are built using reusable and independent components."
  },
  {
    title: "Easy to Learn",
    desc: "Vue has a simple syntax and is beginner-friendly, especially for web developers."
  },
  {
    title: "Fast Performance",
    desc: "Vue uses a virtual DOM to efficiently update only the parts of the page that change."
  },
  {
    title: "Single-File Components",
    desc: "Vue components can combine HTML, CSS, and JavaScript in a single .vue file."
  },
  {
    title: "Flexible",
    desc: "Vue can be used for small interactive features or complete single-page applications."
  }
])
</script>

<template>
  <div class="greeting-page">
    <div class="greeting-card">
      <Header />

      <main class="greeting-main">
        <p class="greeting-text">
          Welcome to the Greeting Vue Page. This project features a clean, focused card layout with reactive Vue 3 components centered on the page.
        </p>

        <div v-for="fact in facts"
        :key:="fact.title"
        class="fact">
            <h4>{{ fact.title }}</h4>
            <p>{{fact.desc}}</p>
        </div>
      </main>

      <Footer />
    </div>
  </div>
</template>

<style scoped>
.greeting-page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1.5rem 0;
  margin: auto;
}

.greeting-card {
  width: 100%;
  max-width: 520px;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-md);
  padding: 2.5rem;
  box-shadow: var(--shadow-card);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.75rem;
  transition: transform var(--transition-normal), border-color var(--transition-normal);
}

.greeting-card:hover {
  border-color: #ffffff;
  transform: translateY(-2px);
  box-shadow: var(--shadow-card), 0 0 24px rgba(255, 255, 255, 0.05);
}

.greeting-main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0;
}

.greeting-text {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
  max-width: 420px;
  margin: 0 auto;
}

@media (max-width: 580px) {
  .greeting-card {
    padding: 2rem 1.5rem;
  }

  .greeting-text {
    font-size: 0.92rem;
  }
}
</style>