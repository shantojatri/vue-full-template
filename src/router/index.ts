import { createRouter, createWebHistory } from 'vue-router'
import baseRoutes from './baseRoutes'

export function createAppRouter(moduleRoutes: any[]) {
  return createRouter({
    history: createWebHistory(),
    routes: [...baseRoutes, ...moduleRoutes],
  })
}
