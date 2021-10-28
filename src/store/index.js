import Vue from "vue";
import Vuex from "vuex";

import categories from "./modules/categories";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    categories,
  },
});

export default store;
