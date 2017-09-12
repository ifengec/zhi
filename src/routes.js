export default [
  {
      path: '/about/',
      component: require('./pages/about.vue')
  },
  {
      path: '/media/:mediaId/',
      component: require('./pages/media.vue')
  },
  {
      path: '/dynamic-route/blog/:blogId/post/:postId/',
      component: require('./pages/dynamic-route.vue')
  }
]
