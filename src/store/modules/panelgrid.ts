import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({ namespaced: true, name: 'panelGrid' })
export default class PanelGridModule extends VuexModule {
  panelGrid = true

  @Mutation
  show () {
    this.panelGrid = !this.panelGrid
  }
}
