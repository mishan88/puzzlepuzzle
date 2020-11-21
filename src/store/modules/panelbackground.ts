import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({ namespaced: true, name: 'panel' })
export default class PanelBackgoundModule extends VuexModule {
  panelBackground = ''

  @Mutation
  add (newBackground: string) {
    this.panelBackground = newBackground
  }

  @Mutation
  delete () {
    this.panelBackground = ''
  }
}
