import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/SimplePage/SimplePageView',
      name: 'SimplePageView',
      component: () => import('../views/SimplePage/SimplePageView.vue'),
    },
    {
      path: '/QuoteGenerator/QuoteGeneraorView',
      name: 'QuoteGeneraorView',
      component: () => import('../views/QuoteGenerator/QuoteGeneraorView.vue'),
    },
    {
      path: '/quote-generator',
      redirect: '/QuoteGenerator/QuoteGeneraorView',
    },
  ],
})

export default router
