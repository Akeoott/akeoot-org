<template>
    <div class="pt-[20vh]">
        <div class="container text-center">
            <h1 class="font-bold text-5xl text-primary mb-5">
                404
            </h1>
            <h2 class="font-bold text-2xl text-primary-dark mb-5 no-line">
                Page Not Found
            </h2>
            <p>
                The page you requested could not be found.<br>
                It may have been moved, deleted,<br>
                or you might have mistyped the address.
            </p>

            <div class="my-10">
                <a class="text-bg-700 font-bold no-underline inline-block bg-primary rounded-xl px-5 py-2.5 transition-transform duration-300 hover:transform-[scale(1.1)]" href="/">
                    Return to Homepage
                </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ViewNotFound',
})
</script>

<style scoped />
