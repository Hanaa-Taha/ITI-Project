import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import COUNTRY from '../components/COUNTRY'
import menpage from '../views/menpage.vue'
import prodact from '../views/prodact.vue'
import cart from '../views/cart.vue'
import checkout from '../views/checkout.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path:"/COUNTRY",
    name:"COUNTRY",
    component: COUNTRY
  }, {
    path:"/menpage",
    name:"menpage",
    component: menpage
  },
  {
    path:"/prodact",
    name:"prodact",
    component: prodact
  },  {
    path:"/cart",
    name:"cart",
    component: cart
  },  {
    path:"/checkout",
    name:"checkout",
    component: checkout
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
