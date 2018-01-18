import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  mutations: {
    log: (state, user) => {
      console.log('criating user', user);
    },
  },
  actions: {
    salvar: ({ commit }, user) => {
      commit('log', user);
    },
  },
});
