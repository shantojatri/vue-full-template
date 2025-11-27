// src/modules/products/routes.js
import ProductsPage from './views/Product.vue'
import ProductDetailsPage from './views/Details.vue'

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
