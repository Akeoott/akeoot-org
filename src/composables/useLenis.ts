import Lenis from 'lenis';
import { nextTick, onMounted, onUnmounted } from 'vue';

export function useLenis() {
    let lenis: Lenis | null = null;
    let rafId: number | null = null;

    onMounted(async () => {
        await nextTick();

        lenis = new Lenis({
            duration: 1,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        function raf(time: number) {
            lenis?.raf(time);
            rafId = requestAnimationFrame(raf);
        }

        rafId = requestAnimationFrame(raf);

    });

    onUnmounted(() => {
        if (rafId) cancelAnimationFrame(rafId);
        lenis?.destroy();
    });

    return {
        lenis,
    };
}