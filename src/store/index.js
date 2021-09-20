import Vue from 'vue';
import Vuex from 'vuex';
import empty from '@/store/modules/empt';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    empty,
  },
});
