import Vue from "vue";
import Vuex from "vuex";
import home from './modules/home'
import login from './modules/login'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    home,
    login
  }
})

export default store