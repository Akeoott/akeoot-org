<template>
    <Teleport to="body">
        <div ref="followerRef" class="cursor-follower" :style="{
            transform: `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`,
            width: CONFIG.SIZE + 'px',
            height: CONFIG.SIZE + 'px',
            opacity: computedOpacity,
        }" />
    </Teleport>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';

const CONFIG = {
    TIME_CONSTANT_MS: 100,
    SIZE: 40,
    HIDE_ON_LEAVE: true,
};

const isMobile = computed(() => {
    return 'ontouchstart' in window || window.innerWidth < 768;
});

const followerRef = ref<HTMLElement | null>(null);
const currentX = ref(0);
const currentY = ref(0);
const visible = ref(false);
const hoveringLink = ref(false);

const computedOpacity = computed(() => {
    if (CONFIG.HIDE_ON_LEAVE && !visible.value) return 0;
    if (hoveringLink.value) return 0;
    return 1;
});

let targetX = 0;
let targetY = 0;
let lastClientX = 0;
let lastClientY = 0;
let rafId: number | null = null;
let lastTimestamp = 0;
let originalBodyPosition: string | null = null;

function updateTargetFromLastClient() {
    targetX = lastClientX + window.scrollX;
    targetY = lastClientY + window.scrollY;
}

function animate(timestamp: number) {
    if (!lastTimestamp) {
        lastTimestamp = timestamp;
        rafId = requestAnimationFrame(animate);
        return;
    }

    const delta = Math.min(33, timestamp - lastTimestamp);
    if (delta > 0) {
        const tau = CONFIG.TIME_CONSTANT_MS;
        const lerpFactor = 1 - Math.exp(-delta / tau);
        currentX.value += (targetX - currentX.value) * lerpFactor;
        currentY.value += (targetY - currentY.value) * lerpFactor;
    }

    lastTimestamp = timestamp;
    rafId = requestAnimationFrame(animate);
}

function onMouseMove(e: MouseEvent) {
    lastClientX = e.clientX;
    lastClientY = e.clientY;
    targetX = lastClientX + window.scrollX;
    targetY = lastClientY + window.scrollY;

    if (!visible.value) {
        currentX.value = targetX;
        currentY.value = targetY;
        visible.value = true;
    }
}

function onScroll() {
    if (!visible.value) return;
    updateTargetFromLastClient();
}

function onMouseLeave() {
    visible.value = false;
}

function onMouseEnter(e: MouseEvent) {
    lastClientX = e.clientX;
    lastClientY = e.clientY;
    updateTargetFromLastClient();
    if (!visible.value) {
        currentX.value = targetX;
        currentY.value = targetY;
    }
    visible.value = true;
}

function onGlobalMouseOver(e: MouseEvent) {
    const target = e.target as HTMLElement;
    const link = target.closest('a');
    if (link && !hoveringLink.value) {
        hoveringLink.value = true;
    }
}

function onGlobalMouseOut(e: MouseEvent) {
    const target = e.target as HTMLElement;
    const link = target.closest('a');
    if (link && !link.contains(e.relatedTarget as Node)) {
        const newTarget = e.relatedTarget as HTMLElement;
        if (!newTarget || !newTarget.closest('a')) {
            hoveringLink.value = false;
        }
    }
}

onMounted(() => {
    if (isMobile.value) return;

    const body = document.body;
    originalBodyPosition = window.getComputedStyle(body).position;
    if (originalBodyPosition === 'static') {
        body.style.position = 'relative';
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    window.addEventListener('scroll', onScroll);
    document.addEventListener('mouseover', onGlobalMouseOver);
    document.addEventListener('mouseout', onGlobalMouseOut);

    lastTimestamp = 0;
    rafId = requestAnimationFrame(animate);
});

onUnmounted(() => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseleave', onMouseLeave);
    document.removeEventListener('mouseenter', onMouseEnter);
    window.removeEventListener('scroll', onScroll);
    document.removeEventListener('mouseover', onGlobalMouseOver);
    document.removeEventListener('mouseout', onGlobalMouseOut);

    if (rafId !== null) {
        cancelAnimationFrame(rafId);
    }

    if (originalBodyPosition !== null && document.body.style.position === 'relative') {
        document.body.style.position = originalBodyPosition;
    }
});
</script>

<style scoped>
.cursor-follower {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    will-change: transform, opacity;

    background: radial-gradient(circle at 50% 50%, rgba(255, 141, 186, 0.15) 100%, transparent 80%);
    backdrop-filter: blur(12px) contrast(1.15) brightness(1.1);
    -webkit-backdrop-filter: blur(12px) contrast(1.15) brightness(1.1);
    border: 1px solid rgba(255, 205, 225, 0.55);
    box-shadow: 0 0 16px rgba(255, 205, 225, 0.3), inset 0 0 12px rgba(255, 255, 255, 0.12);
    transition: opacity 0.15s ease-out;
}
</style>