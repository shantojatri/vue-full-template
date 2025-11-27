<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { RouterLink } from 'vue-router'
</script>

<template>
  <header
    class="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="container mx-auto h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8">
      <!-- Logo/Brand -->
      <RouterLink to="/" class="text-xl font-bold text-blue-600 dark:text-blue-400 tracking-wider">
        MODULAR APP
      </RouterLink>

      <!-- Navigation Links -->
      <nav class="hidden md:flex items-center space-x-6">
        <RouterLink
          to="/"
          class="text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 text-gray-700 dark:text-gray-300"
        >
          Home
        </RouterLink>
        <RouterLink
          to="/blogs"
          class="text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 text-gray-700 dark:text-gray-300"
        >
          Blog
        </RouterLink>
        <RouterLink
          to="/about"
          class="text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 text-gray-700 dark:text-gray-300"
        >
          About
        </RouterLink>
      </nav>

      <!-- Action Button -->
      <div>
        <Button class="bg-blue-600 hover:bg-blue-700 text-white transition duration-150 shadow-md">
          Login
        </Button>
      </div>
    </div>
  </header>
</template>
