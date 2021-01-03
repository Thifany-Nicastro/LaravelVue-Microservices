import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/auth/Login.vue'
import Orders from '@/views/orders/Index.vue'
import Products from '@/views/products/Index.vue'
import Roles from '@/views/roles/Index.vue'
import Users from '@/views/users/Index.vue'
import UserDetails from '@/views/users/Details.vue'

// import { getUser } from '@/composables/getUser.js';

const requireAuth = (to, from, next) => {
  // let user = getUser()
  let user = localStorage.getItem('user-token')
  if (!user) {
    next({ name: 'Login' })
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders
  },
  {
    path: '/users',
    name: 'Users',
    component: Users,
    beforeEnter: requireAuth
  },
  {
    path: '/users/:id',
    name: 'UserDetails',
    component: UserDetails,
    props: true,
    beforeEnter: requireAuth
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
    beforeEnter: requireAuth
  },
  {
    path: '/roles',
    name: 'Roles',
    component: Roles,
    beforeEnter: requireAuth
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
