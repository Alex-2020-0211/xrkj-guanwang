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
      {
        path: '/solutions/huoke',//以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
        name: 'HuoKe',
        component: () => import()
      },
      {
        path: 'trace',
        name: 'Trace',
        component: Trace
      }
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
