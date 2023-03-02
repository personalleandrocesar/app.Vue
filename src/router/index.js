import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/index.vue'
/* import Home from '../views/home.vue'*/

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: 
  [
    {
      path: '/',
      name: 'login',
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
      path: '/user/leandro-cesar', 
      name: 'feed', 
      component: () => import('../components/feed.vue'),
      meta: { requiresAuth: true },      
      // children: 
      // [
      //   { path: 'treino', component: () => import('../views/recuperar.vue')},
      //   {path: 'avaliacao', component: () => import('../views/user/leandro-cesar/avaliacao/index.vue')}, 
      // ]
    },
  ],
  })

export default router
