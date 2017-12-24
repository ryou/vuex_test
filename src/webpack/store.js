import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  count: 0,
};

const getters = {
  isMinus: function(state) {
    return state.count < 0;
  },
};

const mutations = {
  increment: function() {
    this.state.count++;
  },
  decrement: function() {
    this.state.count--;
  },
};

export default new Vuex.Store({
  state: state,
  getters: getters,
  mutations: mutations,
});
