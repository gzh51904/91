import Vue from 'vue'
import App from './App.vue'
import router from './routers'

import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://localhost:1904';
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
