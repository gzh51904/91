import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './store'
import axios from 'axios'

Vue.prototype.$axios=axios;
axios.defaults.baseURL = 'http://localhost:1904';
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
