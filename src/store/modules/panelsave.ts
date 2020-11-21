import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({ namespaced: true, name: 'panelSave' })
export default class PanelSvaeModule extends VuexModule {
  panelSave = false

  @Mutation
  save () {
    this.panelSave = !this.panelSave
  }
}
