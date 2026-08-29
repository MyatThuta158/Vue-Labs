<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const isDropdownOpen = ref(false)
const isMobileMenuOpen = ref(false)
const dropdownRef = ref(null)

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const closeDropdown = () => {
  isDropdownOpen.value = false
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeAllMenus = () => {
  isDropdownOpen.value = false
  isMobileMenuOpen.value = false
}

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isDropdownOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('click', handleClickOutside)
})

const pageLinks = [
  { name: 'Home', path: '/', icon: '⌂', desc: 'Main landing dashboard' },
  { name: 'Simple Page', path: '/SimplePage/SimplePageView', icon: '📄', desc: 'Basic page demonstration' },
  { name: 'Quote Generator', path: '/QuoteGenerator/QuoteGeneraorView', icon: '💬', desc: 'Interactive quote maker' },
  { name: 'About', path: '/about', icon: 'ℹ', desc: 'Project & course information' }
]
</script>

<template>
  <header class="navbar">
    <div class="navbar-container">
      <!-- Brand Logo -->
      <RouterLink to="/" class="brand" @click="closeAllMenus">
        <div class="brand-icon">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="12 2 2 22 22 22" fill="#ffffff" stroke="#000000" />
            <polygon points="12 8 6 20 18 20" fill="#09090b" stroke="#ffffff" stroke-width="1.5" />
          </svg>
        </div>
        <div class="brand-text">
          <span class="brand-title">VUE<span class="brand-dot">.</span>LABS</span>
          <span class="brand-badge">PRO</span>
        </div>
      </RouterLink>

      <!-- Desktop Navigation -->
      <nav class="nav-desktop">
        <RouterLink to="/" class="nav-item" :class="{ active: route.path === '/' }">
          Home
        </RouterLink>

        <!-- Dropdown Menu for Pages -->
        <div class="dropdown-wrapper" ref="dropdownRef">
          <button
            type="button"
            class="dropdown-trigger"
            :class="{ active: isDropdownOpen || route.path !== '/' }"
            @click.stop="toggleDropdown"
            aria-expanded="isDropdownOpen"
            aria-haspopup="true"
          >
            <span>Pages Menu</span>
            <svg
              class="chevron-icon"
              :class="{ rotate: isDropdownOpen }"
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>

          <!-- Dropdown Card -->
          <transition name="dropdown-fade">
            <div v-if="isDropdownOpen" class="dropdown-menu">
              <div class="dropdown-header">
                <span class="dropdown-header-title">All Application Pages</span>
              </div>
              <ul class="dropdown-list">
                <li v-for="page in pageLinks" :key="page.path">
                  <RouterLink
                    :to="page.path"
                    class="dropdown-item"
                    :class="{ 'item-active': route.path === page.path }"
                    @click="closeDropdown"
                  >
                    <span class="page-icon">{{ page.icon }}</span>
                    <div class="page-meta">
                      <span class="page-name">{{ page.name }}</span>
                      <span class="page-desc">{{ page.desc }}</span>
                    </div>
                    <span v-if="route.path === page.path" class="active-dot">•</span>
                  </RouterLink>
                </li>
              </ul>
            </div>
          </transition>
        </div>

        <RouterLink to="/about" class="nav-item" :class="{ active: route.path === '/about' }">
          About
        </RouterLink>
      </nav>

      <!-- Mobile Hamburger Toggle -->
      <button
        class="mobile-toggle"
        @click="toggleMobileMenu"
        aria-label="Toggle navigation menu"
      >
        <span class="bar" :class="{ 'bar-top': isMobileMenuOpen }"></span>
        <span class="bar" :class="{ 'bar-mid': isMobileMenuOpen }"></span>
        <span class="bar" :class="{ 'bar-bot': isMobileMenuOpen }"></span>
      </button>
    </div>

    <!-- Mobile Drawer -->
    <transition name="mobile-slide">
      <div v-if="isMobileMenuOpen" class="mobile-drawer">
        <div class="mobile-links">
          <RouterLink
            v-for="page in pageLinks"
            :key="page.path"
            :to="page.path"
            class="mobile-link-item"
            :class="{ active: route.path === page.path }"
            @click="closeAllMenus"
          >
            <span class="mobile-icon">{{ page.icon }}</span>
            <span>{{ page.name }}</span>
          </RouterLink>
        </div>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: rgba(9, 9, 11, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border-subtle);
  transition: border-color var(--transition-fast);
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.85rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Brand */
.brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: var(--text-primary);
  transition: opacity var(--transition-fast);
}

.brand:hover {
  opacity: 0.9;
}

.brand-icon {
  width: 34px;
  height: 34px;
  background: var(--bg-card);
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
}

.brand-text {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.brand-title {
  font-size: 1.15rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  color: #ffffff;
}

.brand-dot {
  color: #a1a1aa;
}

.brand-badge {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  background: #ffffff;
  color: #000000;
  padding: 2px 6px;
  border-radius: var(--radius-sm);
}

/* Desktop Nav */
.nav-desktop {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-item {
  padding: 0.5rem 1rem;
  font-size: 0.92rem;
  font-weight: 500;
  color: var(--text-secondary);
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
}

.nav-item:hover {
  color: var(--text-primary);
  background-color: var(--bg-card);
}

.nav-item.active {
  color: #000000;
  background-color: #ffffff;
  font-weight: 600;
}

/* Dropdown */
.dropdown-wrapper {
  position: relative;
}

.dropdown-trigger {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  font-size: 0.92rem;
  font-weight: 500;
  color: var(--text-secondary);
  background: transparent;
  border: 1px solid transparent;
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
}

.dropdown-trigger:hover,
.dropdown-trigger.active {
  color: var(--text-primary);
  background-color: var(--bg-card);
  border-color: var(--border-subtle);
}

.chevron-icon {
  transition: transform var(--transition-normal);
}

.chevron-icon.rotate {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 0.6rem);
  right: 0;
  min-width: 260px;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-dropdown);
  padding: 0.5rem;
  z-index: 1100;
}

.dropdown-header {
  padding: 0.4rem 0.6rem 0.6rem;
  border-bottom: 1px solid var(--border-subtle);
  margin-bottom: 0.35rem;
}

.dropdown-header-title {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 700;
  color: var(--text-muted);
}

.dropdown-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.6rem 0.75rem;
  border-radius: var(--radius-sm);
  color: var(--text-secondary);
  transition: all var(--transition-fast);
  text-decoration: none;
}

.dropdown-item:hover {
  background-color: var(--bg-card-hover);
  color: #ffffff;
}

.dropdown-item.item-active {
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-weight: 600;
}

.page-icon {
  font-size: 1.1rem;
  width: 22px;
  text-align: center;
}

.page-meta {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.page-name {
  font-size: 0.9rem;
  font-weight: 500;
  color: inherit;
}

.page-desc {
  font-size: 0.72rem;
  color: var(--text-muted);
}

.active-dot {
  font-size: 1.2rem;
  color: #ffffff;
}

/* Animations */
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* Mobile Toggle */
.mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: transparent;
  padding: 6px;
  border-radius: var(--radius-sm);
}

.bar {
  width: 22px;
  height: 2px;
  background-color: #ffffff;
  transition: all var(--transition-fast);
}

.bar-top {
  transform: translateY(7px) rotate(45deg);
}

.bar-mid {
  opacity: 0;
}

.bar-bot {
  transform: translateY(-7px) rotate(-45deg);
}

.mobile-drawer {
  display: none;
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border-subtle);
  padding: 1rem 1.5rem;
}

.mobile-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.mobile-link-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: var(--radius-sm);
  color: var(--text-secondary);
  font-weight: 500;
}

.mobile-link-item:hover,
.mobile-link-item.active {
  background: var(--bg-card);
  color: #ffffff;
}

@media (max-width: 768px) {
  .nav-desktop {
    display: none;
  }

  .mobile-toggle {
    display: flex;
  }

  .mobile-drawer {
    display: block;
  }
}
</style>