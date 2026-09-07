<script setup lang="ts">
import ReturnButton from '@/components/ReturnButton.vue';
</script>

<template>
  <div class="notfound-wrapper">
    <div class="notfound-container">
      <h1 class="notfound-code" aria-hidden="true">404</h1>
      <h2 class="notfound-title no-line">Page Not Found</h2>
      <p class="notfound-description">
        The page you requested could not be found.<br>
        It may have been moved, deleted,<br>
        or you might have mistyped the address.
      </p>
      <ReturnButton />
    </div>
  </div>
</template>

<style scoped>
@import "tailwindcss";
@import "@/styles/theme.css";

.notfound-wrapper {
  @apply flex items-center justify-center min-h-screen px-4;
  background-color: var(--color-bg-900);
}

.notfound-container {
  @apply text-center max-w-lg;
}

.notfound-code {
  @apply text-8xl sm:text-9xl font-bold;
  color: var(--color-primary);
}

.notfound-title {
  @apply text-2xl sm:text-3xl font-semibold mt-4;
  color: var(--color-primary-dark);
}

.notfound-description {
  @apply mt-3 text-base sm:text-lg leading-relaxed;
  color: var(--color-text);
  opacity: 0.7;
}
</style>
