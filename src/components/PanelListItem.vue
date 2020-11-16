<template>
  <div>
    <v-img :src="state.asset" width="50" height="50" @click="panelAdd"></v-img>
    <v-btn @click="panelCandidateDelete">DELETE</v-btn>
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
    function panelAdd () {
      root.$store.commit('panelQueue/push', state.asset)
    }
    function panelCandidateDelete () {
      root.$store.commit('panel/delete', state)
    }

    return {
      state,
      panelAdd,
      panelCandidateDelete
    }
  }
})
</script>
