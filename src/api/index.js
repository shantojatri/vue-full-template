import axios from 'axios'

// Create a global instance configured for your base URL
const api = axios.create({
  baseURL: 'https://dummyjson.com', // The base URL
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add global request/response interceptors here for loading indicators,
// automatic error logging, or authentication handling.

export default api
