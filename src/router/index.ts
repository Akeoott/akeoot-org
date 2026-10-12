import { createRouter, createWebHistory } from 'vue-router'

import MainLayout from '@/layouts/MainLayout.vue'
import MainView from '@/views/MainView.vue'

const routes = [
  { path: '/', component: MainView, meta: { layout: MainLayout } },
  { path: '/:pathMatch(.*)*', component: MainView, meta: { layout: MainLayout } },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
