/**
 * Endpoints for the dummyjson blog posts API.
 */
export const BLOG_ENDPOINTS = {
  // Path to fetch all blog posts
  ALL_POSTS: '/posts',

  // Function to generate the path for a single post by ID (optional)
  POST_BY_ID: (id) => `/posts/${id}`,
}
