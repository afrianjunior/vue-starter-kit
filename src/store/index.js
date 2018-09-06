import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import actions from './actions'
import mutations from './mutations'

export default new Vuex.Store({
  state: {
    planets: {
      items: [],
      pagination: {},
      status: 'standby'
    }
  },
  getters: {
    planets (state) {
      return state.planets
    }
  },
  actions: actions,
  mutations: mutations
})
