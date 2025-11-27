// src/modules/products/routes.js
import ProductsPage from '@/modules/products/views/Product.vue'
import ProductDetailsPage from '@/modules/products/views/Details.vue'

export default [
  {
    path: '/products',
    name: 'Products',
    component: ProductsPage,
  },
  {
    path: '/products/:id',
    name: 'ProductDetails',
    component: ProductDetailsPage,
    props: true, // Pass route params as props to the component
  },
]
