import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({ namespaced: true, name: 'panelClear' })
export default class PanelClearModule extends VuexModule {
  panelClear = true

  @Mutation
  clear () {
    this.panelClear = !this.panelClear
  }
}
