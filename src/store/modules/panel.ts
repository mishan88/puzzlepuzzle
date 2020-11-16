import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

type Panel = {
  id: number;
  asset: string;
}

@Module({ namespaced: true, name: 'panel' })
export default class PanelModule extends VuexModule {
  panel: Panel[] = []

  @Mutation
  add (payload: Panel) {
    this.panel.push(payload)
  }
}
