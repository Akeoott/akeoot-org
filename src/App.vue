<script setup lang="ts">
import { useLenis } from '@/composables/useLenis';
import { useLoader } from '@/composables/useLoader';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

import CursorFollower from '@/components/CursorFollower.vue';
import MainLayout from '@/layouts/MainLayout.vue';

const { hideLoader } = useLoader();
const router = useRouter();

useLenis();

onMounted(async () => {
  await router.isReady();
  hideLoader();
});
</script>

<template>
  <component :is="$route.meta.layout || MainLayout">
    <router-view />
  </component>
  <CursorFollower />
</template>
