import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

interface State {
  panels: Panel[];
  panelQueue: null | string;
}

type Panel = {
  id: number;
  asset: string;
}

export default new Vuex.Store({
  state: {
    panels: [],
    panelQueue: null
  },
  getters: {
  },
  mutations: {
    addPanel (state, payload: Panel) {
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
