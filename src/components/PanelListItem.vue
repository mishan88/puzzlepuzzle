<template>
  <div>
    <v-img :src="state.asset" width="50" height="50" @click="addPanelToCanvas"></v-img>
    <v-icon @click="deletePanelCandidate">mdi-delete</v-icon>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, inject } from '@vue/composition-api'

interface Props {
  id: number;
  asset: string;
}

export default defineComponent({
  name: 'PanelListItem',
  props: {
    id: Number,
    asset: String
  },
  setup (props) {
    const store: any = inject('vuex-store')
    const state = reactive({
      id: props.id,
      asset: props.asset
    })
    function addPanelToCanvas () {
      store.commit('panelQueue/push', state.asset, { root: true })
    }
    function deletePanelCandidate () {
      store.commit('panel/delete', state, { root: true })
    }

    return {
      state,
      addPanelToCanvas,
      deletePanelCandidate
    }
  }
})
</script>
