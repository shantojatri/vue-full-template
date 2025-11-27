<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useProductStore } from '@/modules/products/store/product.store.ts' // Import your Pinia store
import ProductCard from '@/modules/products/components/ProductCard.vue' // Import the specific component

// Import shadcn-vue components
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'

const store = useProductStore()
// You can use storeToRefs for reactive destructuring if needed, but not strictly necessary here.
const { productList, isLoading, error } = storeToRefs(store)

onMounted(() => {
  // Only fetch if the list is empty (prevents unnecessary re-fetches on route navigation)
  if (productList.value.length === 0) {
    store.fetchProducts()
  }
})
</script>

<template>
  <div class="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
        Product Catalog
      </h1>
      <!-- Shadcn Button for refreshing the list -->
      <Button
        @click="store.fetchProducts"
        :disabled="store.isLoading"
        class="bg-blue-600 hover:bg-blue-700 transition duration-150"
      >
        <span v-if="store.isLoading">
          <svg
            class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Loading...
        </span>
        <span v-else>Refresh Products</span>
      </Button>
    </div>

    <!-- Error State Display -->
    <div
      v-if="store.error"
      class="mb-6 p-4 rounded-lg bg-red-100 border border-red-400 text-red-700"
    >
      <p class="font-semibold">Error:</p>
      <p>{{ store.error }}</p>
    </div>

    <!-- Loading State: Use Shadcn Skeleton -->
    <div
      v-if="store.isLoading && store.productList.length === 0"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      <Skeleton v-for="n in 8" :key="n" class="h-[300px] w-full" />
    </div>

    <!-- Product List Grid -->
    <div
      v-if="!store.isLoading || store.productList.length > 0"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      <ProductCard v-for="product in store.productList" :key="product.id" :product="product" />
    </div>

    <!-- No Products Found -->
    <div
      v-if="!store.isLoading && store.productList.length === 0 && !store.error"
      class="text-center py-12"
    >
      <p class="text-xl text-gray-500">No products found.</p>
    </div>
  </div>
</template>
