import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/index.vue'
import Home from '../views/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      redirect: '/',
    },
    {
      path: '/',
      name: 'login',
      alias: '/login',
      component: Index
    },
    {
      path: '/recuperar',
      name: 'recuperar',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/recuperar.vue')
    },
    {
      path: '/:id',
      name: 'home',
      alias: '/:id',
      component: Home,
      meta: { requiresAuth: true },
    },
    {
      path: '/:id/index',
      name: 'indexCamillaDimas',
      component: () => import('../views/camilla-dimas/index.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/leandro',
      name: 'Leandro Cesar',
      component: () => import('../views/leandro-cesar/index.vue'),
      meta: { requiresAuth: true },
    }
  ]
})

export default router
