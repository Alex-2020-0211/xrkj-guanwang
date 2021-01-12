import Vue from 'vue'
import { Image, Carousel } from 'element-ui'
import App from './App.vue'
import router from './router'
import store from './store'

import "../src/assets/css/reset.css"

Vue.use( Image ) 
Vue.use( Carousel ) 

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
