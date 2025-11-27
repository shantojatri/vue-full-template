import { createRouter, createWebHistory } from 'vue-router'
import baseRoutes from './baseRoutes'
import productRoutes from '@/modules/products/router'

const routes = [
  ...baseRoutes,
  ...productRoutes,
  // ... other feature routes
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
