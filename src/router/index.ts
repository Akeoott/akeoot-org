import MainView from '@/views/MainView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: MainView },
  { path: "/:pathMatch(.*)*", component: NotFoundView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
