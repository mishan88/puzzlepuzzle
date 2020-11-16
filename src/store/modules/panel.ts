import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

type Panel = {
  id: number;
  asset: string;
}

@Module({ namespaced: true, name: 'panel' })
export default class PanelModule extends VuexModule {
  panel: Panel[] = []

  @Mutation
  add (newPanel: Panel) {
    this.panel.push(newPanel)
  }

  @Mutation
  delete (deletePanel: Panel) {
    this.panel = this.panel.filter(panel => panel.id !== deletePanel.id)
  }
}
