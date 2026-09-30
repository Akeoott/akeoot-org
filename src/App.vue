<script setup lang="ts">
import { useRouter } from 'vue-router'

import MainLayout from '@/layouts/MainLayout.vue'

const router = useRouter()
</script>

<template>
  <component :is="$route.meta.layout || MainLayout">
    <router-view />
  </component>
</template>
