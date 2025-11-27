<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <!-- Header Section -->
      <div class="text-center mb-12">
        <h1 class="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
          About Modular App
        </h1>
        <p class="text-xl text-gray-500 dark:text-gray-400">
          Building scalable, maintainable, and robust applications with Vue 3 and a Feature-Based
          Architecture.
        </p>
      </div>

      <!-- Core Philosophy Section -->
      <div
        class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl mb-12 border-l-4 border-blue-500"
      >
        <h2 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Our Core Philosophy: Modularity
        </h2>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          The Modular App project is a demonstration of best practices in modern front-end
          development. Our architecture is based on separating concerns into self-contained feature
          modules (like Products, Blog, and Auth). This pattern ensures that the application remains
          scalable, easily testable, and allows large teams to work on independent parts without
          conflicts.
        </p>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          We leverage the power of **Vue 3**, **Pinia** for centralized state management, **Vue
          Router** for navigation, and **shadcn-vue** combined with **Tailwind CSS** for an
          accessible and beautiful user interface.
        </p>
      </div>

      <!-- Key Components Section -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <!-- Card 1: Pinia -->
        <div
          class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <svg
            class="w-12 h-12 text-blue-600 mx-auto mb-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.192-2.058-.562-3.04z"
            ></path>
          </svg>
          <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Pinia State</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Robust, typed state management for predictive data flow across modules.
          </p>
        </div>

        <!-- Card 2: Modular Routing -->
        <div
          class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <svg
            class="w-12 h-12 text-green-600 mx-auto mb-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6V4m0 2a2 2 1 002 2h-4a2 2 0 002-2m0 2v10m0 0a2 2 0 002 2h-4a2 2 0 002-2m-6 3h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
          <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
            Dynamic Routes
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Routes are dynamically registered, enabling seamless feature module integration.
          </p>
        </div>

        <!-- Card 3: shadcn-vue -->
        <div
          class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <svg
            class="w-12 h-12 text-purple-600 mx-auto mb-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 20l4-16m4 4l4 4-4 4M6 4l-4 4 4 4"
            ></path>
          </svg>
          <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Styled UI</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Customizable, accessible UI components built on Tailwind CSS for a polished look.
          </p>
        </div>
      </div>

      <!-- Next Steps/Contact -->
      <div class="mt-16 text-center">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Want to See More?</h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
          Explore the Product Catalog to see how the Products module fetches and renders data using
          our defined architectural pattern.
        </p>
        <RouterLink to="/blogs">
          <Button
            size="lg"
            class="bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition duration-200"
          >
            View Blogs
          </Button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
