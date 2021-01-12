import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
 
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  }, 
  {
    path: '/productintroduction',
    name: 'ProductIntroduction',
    component: () => import( /* webpackChunkName: "about" */ '../views/ProductIntroduction.vue')
  },
  {
    path: '/solutions',
    name: 'Solutions',
    component: () => import( /* webpackChunkName: "about" */ '../views/solutions/Solutions.vue'),
  },
  {
    path: '/connect',
    name: 'Connect',
    component: () => import( /* webpackChunkName: "about" */ '../views/solutions/Connect.vue')
  },
  {
    path: '/transform',
    name: 'Transform',
    component: () => import( /* webpackChunkName: "about" */ '../views/solutions/Transform.vue')
  },
  {
    path: '/manage',
    name: 'Manage',
    component: () => import( /* webpackChunkName: "about" */ '../views/solutions/Manage.vue')
  },
  {
    path: '/customercase',
    name: 'CustomerCase',
    component: () => import( /* webpackChunkName: "about" */ '../views/CustomerCase.vue')
  },
  {
    path: '/aboutus',
    name: 'AboutUs',
    component: () => import( /* webpackChunkName: "about" */ '../views/AboutUs.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import( /* webpackChunkName: "about" */ '../views/Blog.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import( /* webpackChunkName: "about" */ '../views/NotFound.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router