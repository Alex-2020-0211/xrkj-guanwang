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
import axios from "axios"
import { fetch, post, patch, put} from './utils/http'

Vue.use(Image);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Popover);
Vue.use(Button);
Vue.use(Input);
Vue.use(Loading);
Vue.use(Message);

Vue.prototype.$message = Message;
Vue.prototype.$fetch = fetch;
Vue.prototype.$post = post;
Vue.prototype.$patch = patch;
Vue.prototype.$put = put;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')