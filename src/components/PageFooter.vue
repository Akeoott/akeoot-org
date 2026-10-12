<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <div class="absolute top-[100vh] w-full">
    <footer class="bg-bg-800 text-text-muted text-center px-10 py-15">
      <p class="flex flex-wrap justify-center items-center gap-x-2">
        <span>
          Copyright <time :datetime="String(currentYear)">{{ currentYear }}</time> Akeoott
        </span>
        <span>
          &lt;<a href="mailto:akeoot@pm.me" class="hover:underline">akeoot@pm.me</a>&gt;
        </span>
      </p>
      <p>By Ame (Akeoot/Akeoott)</p>
    </footer>
  </div>
</template>

<style scoped />
