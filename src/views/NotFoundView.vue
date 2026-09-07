<script setup lang="ts">
import ReturnButton from '@/components/ReturnButton.vue';
</script>

<template>
  <div class="bg-bg-900 flex items-center justify-center min-h-screen px-4">
    <div class="text-center max-w-lg">

      <h1 class="text-primary text-8xl sm:text-9xl font-bold" aria-hidden="true">
        404
      </h1>

      <h2 class="text-primary-dark text-2xl sm:text-3xl font-semibold mt-4 no-line">
        Page Not Found
      </h2>

      <p class="text-text mt-3 text-base sm:text-lg leading-relaxed opacity-70">
        The page you requested could not be found.<br>
        It may have been moved, deleted,<br>
        or you might have mistyped the address.
      </p>

      <ReturnButton />
    </div>
  </div>
</template>

<style scoped />
