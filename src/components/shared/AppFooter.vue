<script setup lang="ts">
import { computed } from 'vue'
import { Separator } from '@/components/ui/separator'

const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <footer class="mt-auto border-t bg-white dark:bg-gray-800 dark:border-gray-700">
    <div
      class="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-600 dark:text-gray-400"
    >
      <p>&copy; {{ currentYear }} Modular Vue App. All rights reserved.</p>
      <div class="flex justify-center space-x-4 mt-2">
        <RouterLink to="/privacy-policy" class="hover:text-blue-600 dark:hover:text-blue-400"
          >Privacy Policy</RouterLink
        >
        <Separator orientation="vertical" class="h-4" />
        <RouterLink to="/terms-of-service" class="hover:text-blue-600 dark:hover:text-blue-400"
          >Terms of Service</RouterLink
        >
      </div>
    </div>
  </footer>
</template>
