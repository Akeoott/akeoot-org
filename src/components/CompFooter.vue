<template>
    <footer class="bg-bg-800 mt-10">
        <div class="container">
            <div class="flex justify-between py-15">
                <p class="text-primary">
                    &copy; 2026 Akeoott
                </p>
                <p>
                    <a href="./privacy" aria-label="Privacy policy" target="_self" class="no-underline font-bold">
                        Privacy policy
                    </a> -
                    <a href="https://github.com/Akeoott" aria-label="GitHub: Akeoott" target="_blank" class="no-underline"
                       referrerpolicy="strict-origin-when-cross-origin">
                        GitHub
                    </a>
                </p>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CompFooter',
})
</script>

<style scoped />