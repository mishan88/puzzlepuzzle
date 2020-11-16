import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({ namespaced: true, name: 'panelQueue' })
export default class PanelQueueModule extends VuexModule {
  panelQueue: null | string = null

  @Mutation
  push (payload: string) {
    this.panelQueue = payload
  }

  @Mutation
  pop () {
    this.panelQueue = null
  }
}
