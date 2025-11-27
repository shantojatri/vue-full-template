export default [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/Home.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../pages/About.vue'),
  },
  {
    path: '/blogs',
    name: 'blog',
    component: () => import('../pages/Blog.vue'),
  },
  {
    path: '/blogs/:id',
    name: 'BlogDetails',
    component: () => import('../pages/blog/BlogDetails.vue'),
    props: true, // Pass route params as props to the component
  },
  {
    path: '/privacy-policy',
    name: 'privacy',
    component: () => import('../pages/Privacy.vue'),
  },
  {
    path: '/terms-of-service',
    name: 'terms',
    component: () => import('../pages/TermsOfService.vue'),
  },
  {
    path: '/:catchAll(.*)', // The catch-all path that matches any unmatched URL
    name: 'NotFound',
    component: import('../pages/404.vue'),
  },
]
