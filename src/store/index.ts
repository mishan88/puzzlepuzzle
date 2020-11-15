import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    panels: [
      { id: 1, asset: 'https://picsum.photos/id/11/10/6' },
      { id: 2, asset: 'https://picsum.photos/id/11/500/300' }
    ],
    panelQueue: null
  },
  getters: {
  },
  mutations: {
    addPanel (state, payload) {
      state.panels.push(payload)
    },
    addPanelQueue (state, payload) {
      state.panelQueue = payload
    },
    deletePanelQueue (state) {
      state.panelQueue = null
    }
  },
  actions: {
  },
  modules: {
  }
})
