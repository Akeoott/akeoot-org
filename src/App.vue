<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <component :is="$route.meta.layout || MainLayout">
    <router-view />
  </component>
</template>
