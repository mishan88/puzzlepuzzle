<template>
  <div>
    <p>id: {{ state.id }}</p>
    <v-img :src="state.asset" width="50" height="50"></v-img>
    <v-btn @click="panelAdd">Add</v-btn>
    <v-btn @click="panelCandidateDelete">DELETE</v-btn>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, computed } from '@vue/composition-api'

interface Props {
  id: number;
  asset: Blob;
}

export default defineComponent({
  name: 'PanelListItem',
  props: {
    id: Number,
    asset: Blob
  },
  setup (props, { root }) {
    const state = reactive({
      id: props.id,
      asset: props.asset
    })
    function panelAdd () {
      root.$store.commit('addPanelQueue', state.asset)
    }
    function panelCandidateDelete () {
      console.log('delete')
    }

    return {
      state,
      panelAdd,
      panelCandidateDelete
    }
  }
})
</script>
