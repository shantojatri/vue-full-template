<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavbar from './components/shared/AppNavbar.vue'
import AppFooter from './components/shared/AppFooter.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
    <!-- Navigation Bar -->
    <AppNavbar />

    <!-- Main Content Area -->
    <main class="flex-grow">
      <!-- Renders the component based on the current route (e.g., ProductsPage, LoginPage) -->
      <RouterView />
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>
