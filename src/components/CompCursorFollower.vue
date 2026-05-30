<template>
    <Teleport to="body">
        <div ref="followerRef" class="cursor-follower" :style="{
            transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
            width: CONFIG.SIZE + 'px',
            height: CONFIG.SIZE + 'px',
            opacity: CONFIG.HIDE_ON_LEAVE && !visible ? 0 : 1,
        }" />
    </Teleport>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';

const CONFIG = {
    LERP_SPEED: 0.08,
    SIZE: 40,
    HIDE_ON_LEAVE: true,
};

const isMobile = computed(() => {
    return 'ontouchstart' in window || window.innerWidth < 768;
});

const followerRef = ref<HTMLElement | null>(null);
const x = ref(0);
const y = ref(0);
const visible = ref(false);

let mouseX = 0;
let mouseY = 0;
let rafId: number | null = null;

function animate() {
    x.value += (mouseX - x.value) * CONFIG.LERP_SPEED;
    y.value += (mouseY - y.value) * CONFIG.LERP_SPEED;

    rafId = requestAnimationFrame(animate);
}

function onMouseMove(e: MouseEvent) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!visible.value) {
        // Snap instantly to cursor on first move to avoid a jump from (0, 0)
        x.value = mouseX;
        y.value = mouseY;
        visible.value = true;
    }
}

function onMouseLeave() {
    visible.value = false;
}

function onMouseEnter() {
    visible.value = true;
}

onMounted(() => {
    if (isMobile.value) return;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    rafId = requestAnimationFrame(animate);
});

onUnmounted(() => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseleave', onMouseLeave);
    document.removeEventListener('mouseenter', onMouseEnter);
    if (rafId !== null) {
        cancelAnimationFrame(rafId);
    }
});
</script>

<style scoped>
.cursor-follower {
    position: fixed;
    top: 0;
    left: 0;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    will-change: transform, opacity;

    background:
        radial-gradient(circle at 50% 50%, rgba(255, 141, 186, 0.15) 100%, transparent 80%);

    backdrop-filter: blur(12px) contrast(1.15) brightness(1.1);
    -webkit-backdrop-filter: blur(12px) contrast(1.15) brightness(1.1);

    border: 1.5px solid rgba(255, 205, 225, 0.55);

    box-shadow:
        0 0 16px rgba(255, 205, 225, 0.3),
        inset 0 0 12px rgba(255, 255, 255, 0.12);

    transition: opacity 0.15s ease-out;
}
</style>