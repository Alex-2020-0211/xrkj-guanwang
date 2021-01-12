import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/productintroduction',
    name: 'ProductIntroduction',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductIntroduction.vue')
  },
  {
    path: '/solutions',
    name: 'Solutions',
    component: () => import(/* webpackChunkName: "about" */ '../views/solutions/Solutions.vue'),
    children: [
      
    ],
  },
  {
    path: '/customercase',
    name: 'CustomerCase',
    component: () => import(/* webpackChunkName: "about" */ '../views/CustomerCase.vue')
  },
  {
    path: '/aboutus',
    name: 'AboutUs',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutUs.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
