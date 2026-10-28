<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <div class="absolute top-[100vh] w-full">
    <footer class="bg-bg-800 text-text-muted text-center px-10 py-15">
      <p class="flex flex-wrap justify-center items-center gap-x-2">
        <span>
          Copyright 2025-<time :datetime="String(currentYear)">{{ currentYear }}</time> Ame
        </span>
        <span>
          &lt;<a href="mailto:ame@akeoot.org" class="hover:underline">ame@akeoot.org</a>&gt;
        </span>
      </p>
      <p>By Ame (Akeoot/Akeoott)</p>
    </footer>
  </div>
</template>

<style scoped />
