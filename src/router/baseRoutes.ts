export default [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/HomeView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../pages/AboutView.vue'),
  },
]
