<template>
  <div>
    <v-file-input label="File input" ref="fileInputRef" v-on:change="addPanelCandidate"></v-file-input>
    <PanelListItem v-for="panelCandidate in panelCandidates" v-bind:id="panelCandidate.id" v-bind:asset="panelCandidate.asset" :key="panelCandidate.id" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import PanelListItem from '@/components/PanelListItem.vue'

export default defineComponent({
  name: 'PanelList',
  setup (props, { root }) {
    function addPanelCandidate (payloads: Blob[]) {
      const reader = new FileReader()
      reader.addEventListener('load', () => {
        console.log('hoge')
      })
      for (const payload of payloads) {
        root.$store.commit('addPanel', payload)
      }
    }

    return {
      addPanelCandidate
    }
  },
  computed: {
    panelCandidates () {
      return this.$store.state.panels
    }
  },
  components: {
    PanelListItem
  }
})
</script>
