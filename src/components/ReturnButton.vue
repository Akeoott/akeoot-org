<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()

const goHome = () => router.push('/')
</script>

<template>
  <button @click="goHome" class="
    bg-primary text-bg-900 mt-5 px-8 py-3 rounded-xl font-semibold
    transition-transform duration-300 hover:scale-105">
    Return to Homepage
  </button>
</template>

<style scoped>
button {
  outline: 2px solid var(--color-primary-dark);
  outline-offset: 2px;
}
</style>
