import Vue from 'vue'
import {
  Image,
  Carousel,
  CarouselItem,
  Popover,
  Button,
  Input,
  Loading,
} from 'element-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import "../src/assets/css/reset.css"

Vue.use(Image)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Popover)
Vue.use(Button)
Vue.use(Input)
Vue.use(Input)
Vue.use(Loading)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')