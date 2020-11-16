import Vue from 'vue'
import Vuex from 'vuex'

import PanelModule from './modules/panel'
import PanelQueueModule from './modules/panelqueue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    panel: PanelModule,
    panelQueue: PanelQueueModule
  }
})
