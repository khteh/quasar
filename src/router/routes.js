
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/firestore', component: () => import('pages/FireStore.vue') },
      { path: '/fibonacci', component: () => import('pages/Fibonacci.vue') },
      { path: '/autogenerate', component: () => import('pages/AutoGenerate.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
