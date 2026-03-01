<template>
    <main>
        <slot />
    </main>
    <CompFooter />
</template>

<script lang="ts">
import CompFooter from '@/components/CompFooter.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MainLayout',
    components: { CompFooter }
})
</script>

<style scoped />
