import Vue from 'vue';
import Vuex from 'vuex';
import collection from './collection.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    collection,
  },
});
