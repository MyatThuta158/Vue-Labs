<script setup>
import { ref } from 'vue'

const quotes = [
  { text: 'First, solve the problem. Then, write the code.', author: 'John Johnson' },
  { text: 'Simplicity is prerequisite for reliability.', author: 'Edsger W. Dijkstra' },
  { text: 'Make it work, make it right, make it fast.', author: 'Kent Beck' },
  { text: 'Code is like humor. When you have to explain it, it’s bad.', author: 'Cory House' },
  { text: 'Clean code always looks like it was written by someone who cares.', author: 'Robert C. Martin' },
  { text: 'The best error message is the one that never shows up.', author: 'Thomas Fuchs' }
]

const currentIndex = ref(0)
const copied = ref(false)

const getRandomQuote = () => {
  let nextIndex
  do {
    nextIndex = Math.floor(Math.random() * quotes.length)
  } while (nextIndex === currentIndex.value && quotes.length > 1)
  currentIndex.value = nextIndex
  copied.value = false
}

const copyQuote = async () => {
  const current = quotes[currentIndex.value]
  const textToCopy = `"${current.text}" - ${current.author}`
  try {
    await navigator.clipboard.writeText(textToCopy)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (e) {
    console.error('Failed to copy', e)
  }
}
</script>

<template>
  <div class="quote-page-wrapper">
    <div class="quote-card">
      <div class="quote-header">
        <span class="quote-badge">QUOTE GENERATOR</span>
        <span class="quote-count">Quote #{{ currentIndex + 1 }} of {{ quotes.length }}</span>
      </div>

      <div class="quote-body">
        <div class="quote-mark">“</div>
        <blockquote class="quote-text">
          {{ quotes[currentIndex].text }}
        </blockquote>
        <cite class="quote-author">— {{ quotes[currentIndex].author }}</cite>
      </div>

      <div class="quote-actions">
        <button class="btn-generate" @click="getRandomQuote">
          <span>Another Quote!</span>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="23 4 23 10 17 10"></polyline>
            <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
          </svg>
        </button>

        <button class="btn-copy" @click="copyQuote" :title="copied ? 'Copied!' : 'Copy to Clipboard'">
          <span v-if="copied">✓ Copied</span>
          <span v-else>Copy Quote</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.quote-page-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1.5rem 0;
}

.quote-card {
  width: 100%;
  max-width: 640px;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-md);
  padding: 2.5rem;
  box-shadow: var(--shadow-card);
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.quote-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid var(--border-subtle);
}

.quote-badge {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  background-color: #ffffff;
  color: #000000;
  padding: 3px 8px;
  border-radius: var(--radius-sm);
}

.quote-count {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.quote-body {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem 0;
}

.quote-mark {
  font-size: 5rem;
  line-height: 1;
  font-family: Georgia, serif;
  color: var(--border-strong);
  margin-bottom: -1.5rem;
  opacity: 0.4;
  user-select: none;
}

.quote-text {
  font-size: 1.45rem;
  font-weight: 600;
  color: #ffffff;
  line-height: 1.45;
  margin-bottom: 1.25rem;
}

.quote-author {
  font-size: 1rem;
  color: var(--text-secondary);
  font-style: normal;
  font-weight: 500;
}

.quote-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  padding-top: 1rem;
  border-top: 1px solid var(--border-subtle);
}

.btn-generate {
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
}

.btn-generate:hover {
  background-color: #e4e4e7;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
}

.btn-copy {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background-color: var(--bg-card);
  color: var(--text-primary);
  border: 1px solid var(--border-strong);
  font-weight: 500;
  font-size: 0.95rem;
  padding: 0.75rem 1.2rem;
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
}

.btn-copy:hover {
  background-color: var(--bg-card-hover);
  border-color: #ffffff;
}

@media (max-width: 640px) {
  .quote-card {
    padding: 1.75rem;
  }

  .quote-text {
    font-size: 1.25rem;
  }

  .quote-actions {
    flex-direction: column;
  }

  .btn-generate,
  .btn-copy {
    width: 100%;
    justify-content: center;
  }
}
</style>