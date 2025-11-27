// src/store/blogStore.ts

import { defineStore } from 'pinia'
import api from '@/api'
import { BLOG_ENDPOINTS } from '@/api/blog.js'
import type { AxiosResponse } from 'axios'

// --- Interface Definitions ---
interface Post {
  id: number
  title: string
  body: string
  tags: string[]
  userId: number
  // dummyjson posts also include 'reactions'
}

interface BlogState {
  list: Post[]
  singleBlog: Post
  isLoading: boolean
  error: string | null
}

interface AllPostsResponse {
  posts: Post[]
  total: number
  skip: number
  limit: number
}

export const useBlogStore = defineStore('blog', {
  state: (): BlogState => ({
    list: [],
    singleBlog: {} as Post,
    isLoading: false,
    error: null,
  }),
  actions: {
    /**
     * Fetches all blog posts from the API and updates the state (Promise Chaining Style).
     */
    fetchPosts(): Promise<void> {
      this.isLoading = true
      this.error = null

      return api
        .get<AllPostsResponse>(BLOG_ENDPOINTS.ALL_POSTS)
        .then((response: AxiosResponse<AllPostsResponse>) => {
          // Success handler: Update state with the list of posts
          this.list = response.data.posts
        })
        .catch((error: any) => {
          // Error handler: Set error state
          this.error = 'Failed to load blog posts. Please check your network connection.'
          console.error('API Error:', error)
        })
        .finally(() => {
          // Cleanup: Always set loading to false
          this.isLoading = false
        })
    },

    /**
     * Fetches a single product by ID (Promise Chaining Style).
     * @param id The ID of the product to fetch. Typed as number.
     */
    async fetchBlogById(id: number): Promise<void> {
      this.isLoading = true
      this.singleBlog = {} as Post
      this.error = null

      await api
        .get<Product>(BLOG_ENDPOINTS.POST_BY_ID(id))
        .then((response: AxiosResponse<Post>) => {
          this.singleBlog = response.data
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
