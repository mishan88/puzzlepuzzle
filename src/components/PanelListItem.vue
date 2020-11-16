<template>
  <div>
    <v-img :src="state.asset" width="50" height="50" @click="addPanelToCanvas"></v-img>
    <v-btn @click="deletePanelCandidate">DELETE</v-btn>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'

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
  setup (props, { root }) {
    const state = reactive({
      id: props.id,
      asset: props.asset
    })
    function addPanelToCanvas () {
      root.$store.commit('panelQueue/push', state.asset)
    }
    function deletePanelCandidate () {
      root.$store.commit('panel/delete', state)
    }

    return {
      state,
      addPanelToCanvas,
      deletePanelCandidate
    }
  }
})
</script>
