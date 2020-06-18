import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Products from '../views/Products.vue'
import Cart from '../views/Cart.vue'
import About from '../views/static/About.vue'
import Imprint from '../views/static/Imprint.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/about/imprint',
    name: 'Imprint',
    component: Imprint
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
