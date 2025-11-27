// src/store/productStore.ts
import { defineStore } from 'pinia'
import type { AxiosResponse } from 'axios' // Used for typing the response object
import api from '@/api' // Assuming api returns AxiosPromise
import { PRODUCT_API_ENDPOINTS } from '@/modules/products/api/products.api.js' // Import the endpoint constants

// --- 1. Interface Definitions ---

// Define the expected structure of a single product item
interface Product {
  id: number
  title: string
  description: string
  price: number
  thumbnail: string
  // Add other properties from dummyjson as needed
}

// Define the overall structure of the Pinia state
interface ProductState {
  productList: Product[]
  singleProduct: Product | null
  isLoading: boolean
  error: string | null
}

// Define the response type for the ALL_PRODUCTS endpoint
interface AllProductsResponse {
  products: Product[]
  total: number
  // other meta fields like skip, limit
}

export const useProductStore = defineStore('product', {
  // Use ProductState interface for strong typing the state
  state: (): ProductState => ({
    productList: [],
    singleProduct: null,
    isLoading: false,
    error: null,
  }),

  actions: {
    /**
     * Fetches all products from the API and updates the state (Promise Chaining Style).
     */
    async fetchProducts(): Promise<void> {
      this.isLoading = true
      this.error = null

      await api
        .get<AllProductsResponse>(PRODUCT_API_ENDPOINTS.ALL_PRODUCTS)
        .then((response: AxiosResponse<AllProductsResponse>) => {
          this.productList = response.data.products
        })
        .catch((error: any) => {
          this.error = 'Failed to load product catalog. Please check your network connection.'
          console.error('API Error:', error)
        })
        .finally(() => {
          this.isLoading = false
        })
    },

    /**
     * Fetches a single product by ID (Promise Chaining Style).
     * @param id The ID of the product to fetch. Typed as number.
     */
    async fetchProductById(id: number): Promise<void> {
      this.isLoading = true
      this.singleProduct = null
      this.error = null

      await api
        .get<Product>(PRODUCT_API_ENDPOINTS.PRODUCT_BY_ID(id))
        .then((response: AxiosResponse<Product>) => {
          this.singleProduct = response.data
        })
        .catch((error: any) => {
          this.error = `Could not find product with ID: ${id}.`
          console.error('API Error:', error)
        })
        .finally(() => {
          this.isLoading = false
        })
    },
  },
})
