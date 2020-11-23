import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({ namespaced: true, name: 'panel' })
export default class PanelBackgoundModule extends VuexModule {
  panelBackground: null | string = null

  @Mutation
  add (newBackground: string) {
    this.panelBackground = newBackground
  }
}
