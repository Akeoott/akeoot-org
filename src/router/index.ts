import MainLayout from '@/layouts/MainLayout.vue';
import NotFoundLayout from '@/layouts/NotFoundLayout.vue';
import MainView from '@/views/MainView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import PrivacyPolicyView from '@/views/PrivacyPolicyView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: MainView, meta: { layout: MainLayout } },
  { path: '/privacy', component: PrivacyPolicyView, meta: { layout: MainLayout } },
  { path: "/:pathMatch(.*)*", component: NotFoundView, meta: { layout: NotFoundLayout } },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
