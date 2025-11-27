<script setup lang="ts">
import { Button } from '@/components/ui/button'
// RouterLink is globally available
</script>

<template>
  <div
    class="container mx-auto py-24 px-4 sm:px-6 lg:px-8 text-center min-h-[70vh] flex flex-col justify-center items-center"
  >
    <!-- Large, expressive 404 code -->
    <h1
      class="text-9xl font-extrabold text-blue-600 dark:text-blue-500 mb-6 drop-shadow-lg animate-pulse"
    >
      404
    </h1>

    <!-- Headline -->
    <h2 class="text-4xl font-semibold text-gray-800 dark:text-gray-200 mb-4 tracking-tight">
      Page Not Found
    </h2>

    <!-- Description -->
    <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-md">
      Oops! The content you're looking for might have moved or doesn't exist yet.
    </p>

    <!-- Call to Action Button (using RouterLink and Shadcn Button styling) -->
    <RouterLink to="/">
      <Button
        size="lg"
        class="bg-blue-600 hover:bg-blue-700 text-white transition duration-200 shadow-xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2.586l.293.293a1 1 0 001.414 0l7-7a1 1 0 000-1.414l-7-7z"
          />
        </svg>
        Return to Homepage
      </Button>
    </RouterLink>
  </div>
</template>
