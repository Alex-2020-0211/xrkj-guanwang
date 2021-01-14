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
import ajax from './api/ajax'
import {get,post} from './api/api'

Vue.use(Image);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Popover);
Vue.use(Button);
Vue.use(Input);
Vue.use(Loading);
Vue.use(Message);

Vue.prototype.$message = Message;
Vue.prototype.$ajax = ajax;
Vue.prototype.$get = ajax.get;
Vue.prototype.$post = ajax.post;
Vue.prototype.ajaxGet = get;
Vue.prototype.ajaxPost = post;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')