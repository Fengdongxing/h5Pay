import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/goldBi',
    name: 'goldBi',
    component: () => import('@/views/goldBi/index.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('@/views/detail/index.vue')
  },
  {
    path: '/alipayDetail',
    name: 'alipayDetail',
    component: () => import('@/views/alipayDetail/index.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
