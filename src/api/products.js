// src/api/products.js
import api from './index'

export const productApi = {
  /** Fetches all products */
  fetchProducts: async () => {
    try {
      const response = await api.get('/products')
      // dummyjson returns { products: [...], total: ... }
      return response.data.products
    } catch (error) {
      console.error('Error fetching products:', error)
      throw error
    }
  },

  /** Fetches a single product by ID */
  getProductById: async (id) => {
    const response = await api.get(`/products/${id}`)
    return response.data
  },
}
