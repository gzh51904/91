import Vue from 'vue'
import Vuex from 'vuex'
import { log } from 'util';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tor:true
  },
  mutations: {
add2(state){
 state.tor=!state.tor;console.log(1);
 
}
  },
  actions: {

  }
})
