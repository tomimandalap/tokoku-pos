import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Index.vue'
import Menu from '../views/Cashier/Menu.vue'
import Admin from '../views/Admin/Index.vue'
import ProdukAll from '../views/Admin/Produk/All.vue'
import ProdukAdd from '../views/Admin/Produk/Add.vue'
import UserAll from '../views/Admin/Users/All.vue'
import UserAdd from '../views/Admin/Users/Add.vue'
import Setting from '../views/Admin/Setting.vue'

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
    path: '/admin/produk/all',
    name: 'ProdukAll',
    component: ProdukAll,
  },
  {
    path: '/admin/produk/add',
    name: 'ProdukAll',
    component: ProdukAdd,
  },
  {
    path: '/admin/user/all',
    name: 'UserAll',
    component: UserAll,
  },
  {
    path: '/admin/user/add',
    name: 'UserAdd',
    component: UserAdd,
  },
  {
    path: '/admin/setting',
    name: 'Setting',
    component: Setting,
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
