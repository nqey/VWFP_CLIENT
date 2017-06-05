export default [
  {
      path: '/about/',
      component: require('./pages/about.vue')
  },
  {
      path: '/form/',
      component: require('./pages/form.vue')
  },
  {
      path: '/dynamic-route/blog/:blogId/post/:postId/',
      //path: '/dynamic-route/',
      component: require('./pages/dynamic-route.vue')
  }
  ,
  {
      path: '/basicInformation/',
      //path: '/dynamic-route/',
      component: require('./pages/basicInformation.vue')
  }
]