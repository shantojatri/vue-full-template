// src/api/index.js
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://dummyjson.com/', // Base URL for the entire API
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add request/response interceptors here for error handling, token refresh, etc.

export default api
