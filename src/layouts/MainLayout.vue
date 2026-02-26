<template>
    <div class="text-text">
        <main>
            <slot />
        </main>
        <CompFooter />
    </div>
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
