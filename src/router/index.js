import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import ProductDetail from '../views/ProductDetail.vue'
import signIn from '../views/SignIn.vue'
import signUp from '../views/SignUp.vue'
import products from '../views/products.vue'
import checkout from '../views/checkout.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/productdetail/:id',
      component: ProductDetail
    },
    {
      path: '/signin',
      component: signIn
    },
    {
      path: '/signup',
      component: signUp
    },
    {
      path: '/products/:type',
      component: products
    },
    {
      path: '/checkout',
      component: checkout
    },
  ]
})

export default router
