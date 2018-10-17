export default [
  {
    path: '/',
    name: 'index',
    meta: {
      title: 'index - data',
      hideInMenu: true
    },
    component: () => import('@/view/data-page/index.vue')
  },
  {
    path: '/test',
    name: 'test',
    meta: {
      title: 'test',
      des: 'test info'
    },
    component: () => import('@/view/data-page/test.vue')

  },
  {
    path: '/401',
    name: 'error_401',
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    component: () => import('@/view/error-page/404.vue')
  }
]
