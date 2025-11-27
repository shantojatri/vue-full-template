// This file defines all static API endpoints (paths) for the Products feature.

/**
 * Endpoints for the dummyjson products API.
 */
export const PRODUCT_API_ENDPOINTS = {
  // Path to fetch all products
  ALL_PRODUCTS: '/products',

  // Function to generate the path for a single product by ID
  PRODUCT_BY_ID: (id) => `/products/${id}`,
}
