import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import { registerModules } from './module-register'
import { createAppRouter } from './router'
import { registerModuleStores } from './stores'
import { applyMiddleware } from './router/middleware'

const app = createApp(App)

// 1️⃣ Load modules dynamically
const {
  moduleRoutes,
  moduleStores,
  moduleServices,
  moduleValidations,
  moduleComposables,
  modulePermissions,
  moduleConfigs,
  moduleMiddleware,
  moduleLayouts,
} = registerModules(app)

// 2️⃣ Pinia
const pinia = createPinia()
app.use(pinia)

// Register dynamic stores
registerModuleStores(pinia, moduleStores)

// 3️⃣ Router
const router = createAppRouter(moduleRoutes)
applyMiddleware(router, moduleMiddleware)
app.use(router)

// 4️⃣ Provide globals
app.provide('services', moduleServices)
app.provide('validations', moduleValidations)
app.provide('permissions', modulePermissions)
app.provide('configs', moduleConfigs)
app.provide('composables', moduleComposables)
app.provide('layouts', moduleLayouts)

app.mount('#app')
