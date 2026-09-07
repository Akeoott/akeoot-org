<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()

const goHome = () => router.push('/')
</script>

<template>
  <button class="return-button" @click="goHome">
    Return to Homepage
  </button>
</template>

<style scoped>
@import "tailwindcss";
@import "@/styles/theme.css";

.return-button {
  @apply mt-5 px-8 py-3 rounded-xl font-semibold transition-transform duration-300;
  background-color: var(--color-primary);
  color: var(--color-bg-900);
}

.return-button:hover {
  transform: scale(1.05);
}
</style>
