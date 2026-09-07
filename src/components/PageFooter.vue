<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <footer class="bg-bg-800 bg-full-width mt-10">
    <div class="flex justify-between py-15">
      <p class="text-primary">
        &copy; {{ new Date().getFullYear() }} Akeoott. All rights reserved.
      </p>
      <nav aria-label="Footer navigation">
        <RouterLink to="/" aria-label="Homepage" class="no-underline font-bold">
          Homepage
        </RouterLink>
        <span aria-hidden="true"> - </span>
        <RouterLink to="/privacy" aria-label="Privacy policy" class="no-underline">
          Privacy policy
        </RouterLink>
        <span aria-hidden="true"> - </span>
        <a href="https://github.com/Akeoott" aria-label="GitHub: Akeoott" target="_blank" class="no-underline" referrerpolicy="strict-origin-when-cross-origin" rel="noopener noreferrer">
          GitHub
        </a>
      </nav>
    </div>
  </footer>
</template>

<style scoped />
