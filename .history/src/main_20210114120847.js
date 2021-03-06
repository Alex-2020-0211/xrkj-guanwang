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
import {getRequest,postRequest} from './utils/http'

Vue.use(Image);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Popover);
Vue.use(Button);
Vue.use(Input);
Vue.use(Loading);
Vue.use(Message);

Vue.prototype.$message = Message;
Vue.prototype.get = getRequest;
Vue.prototype.get = getRequest;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')