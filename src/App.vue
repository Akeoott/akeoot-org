<script setup lang="ts">
import { useLenis } from '@/composables/useLenis';
import { useLoader } from '@/composables/useLoader';
import MainLayout from '@/layouts/MainLayout.vue';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const { hideLoader } = useLoader();
const router = useRouter();

useLenis();

onMounted(async () => {
  await router.isReady();
  hideLoader();
});
</script>

<template>
  <MainLayout>
    <router-view />
  </MainLayout>
</template>