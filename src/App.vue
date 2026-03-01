<template>
    <MainLayout>
        <router-view />
    </MainLayout>
</template>

<script lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'App',
    components: { MainLayout },
})
</script>

<style scoped />
