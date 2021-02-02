import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { ROUTES } from '@/constants'
import Home from '@/views/home/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: ROUTES.HOME.path,
    name: ROUTES.HOME.name,
    component: Home
  },
  {
    path: ROUTES.ADD.path,
    name: ROUTES.ADD.name,
    component: () => import('@/views/add/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
