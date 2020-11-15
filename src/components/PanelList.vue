<template>
  <div>
    <v-file-input multiple accept="image/*" label="File input" ref="fileInputRef" v-on:change="addPanelCandidate"></v-file-input>
    <div v-if="!panelCandidates">
      Add Panel!
    </div>
    <div v-else>
      <PanelListItem v-for="panelCandidate in panelCandidates" v-bind:id="panelCandidate.id" v-bind:asset="panelCandidate.asset" :key="panelCandidate.id" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import PanelListItem from '@/components/PanelListItem.vue'

export default defineComponent({
  name: 'PanelList',
  setup (props, { root }) {
    function addPanelCandidate (files: File[]) {
      if (event !== null) {
        let nextId = root.$store.state.panels.length

        for (const file of files) {
          const src = URL.createObjectURL(file)
          root.$store.commit('addPanel', { id: nextId++, asset: src })
        }
      }
    }
    const panelCandidates = computed(() => {
      return root.$store.state.panels
    })
    return {
      addPanelCandidate,
      panelCandidates
    }
  },
  components: {
    PanelListItem
  }
})
</script>
