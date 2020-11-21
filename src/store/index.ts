import Vue from 'vue'
import Vuex from 'vuex'

import PanelModule from './modules/panel'
import PanelQueueModule from './modules/panelqueue'
import PanelGridModule from './modules/panelgrid'
import PanelClearModule from './modules/panelclear'
import PanelSaveModule from './modules/panelsave'
import PanelBackgroundModule from './modules/panelbackground'

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
    panelQueue: PanelQueueModule,
    panelGrid: PanelGridModule,
    panelClear: PanelClearModule,
    panelSave: PanelSaveModule,
    panelBackground: PanelBackgroundModule
  }
})
