import Vue from "vue";
import Vuex from "vuex";
import home from "./modules/home";
import auth from "./modules/auth";
import menu from "./modules/menu";
import festival from "./modules/festival"

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    home,
    auth,
    menu,
    festival
  }
});

export default store;
