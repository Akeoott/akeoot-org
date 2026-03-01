import Home from '@/views/ViewHome.vue';
import NotFound from '@/views/ViewNotFound.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', component: Home },

    { path: "/:pathMatch(.*)*", component: NotFound },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router
