import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Orders from '@/views/orders/Index.vue'
import Products from '@/views/products/Index.vue'
import Roles from '@/views/roles/Index.vue'
import Users from '@/views/users/Index.vue'
import UserDetails from '@/views/users/Details.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/users/:id',
    name: 'UserDetails',
    component: UserDetails,
    props: true,
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/roles',
    name: 'Roles',
    component: Roles
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
