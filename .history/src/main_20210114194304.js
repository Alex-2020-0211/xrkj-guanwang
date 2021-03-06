import Vue from 'vue'
import {
  Image,
  Carousel,
  CarouselItem,
  Popover,
  Button,
  Input,
  Loading,
  Message,
} from 'element-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import "../src/assets/css/reset.css"
import {
  GET,
  POST
} from './api/api'

Vue.use(Image);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Popover);
Vue.use(Button);
Vue.use(Input);
Vue.use(Loading);
Vue.use(Message);

Vue.prototype.$message = Message;
Vue.prototype.$ajaxGet = GET;
Vue.prototype.$ajaxPost = POST;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')