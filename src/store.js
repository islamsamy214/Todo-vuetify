import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    snackbar: false,
  },
  mutations: {
    triggerSnackbar(state) {
      state.snackbar = true;
    },
    endSnackbar(state) {
      state.snackbar = false;
    },
  },
  getters: {
    getSnackbar(state){
      return state.snackbar;
    }
  }
});
export default store;
