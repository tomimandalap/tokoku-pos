import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Index.vue'
import Menu from '../views/Cashier/Menu.vue'
import Admin from '../views/Admin/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/cashier/menu',
    name: 'Menu',
    component: Menu,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
  },
  {
    path: '*',
    beforeEnter: (to, from, next) => {
      next('/404')
    },
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
