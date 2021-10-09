import Vue from 'vue'
import Vuex from 'vuex'
import photos from './modules/photo'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    mPhotos: photos,
  },
})
