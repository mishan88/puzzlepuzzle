<template>
  <div>
    <div data-testid="panelcandidates">
      <div v-if="panelCandidates.length === 0">
        Add Panel!
      </div>
      <div v-else>
        <v-row class="mb-8">
          <PanelListItem v-for="panelCandidate in panelCandidates" v-bind:id="panelCandidate.id" v-bind:asset="panelCandidate.asset" :key="panelCandidate.id" />
        </v-row>
      </div>
    </div>
    <v-file-input multiple accept="image/*" label="File input" ref="fileInputRef" v-on:change="addPanelCandidate"></v-file-input>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, inject } from '@vue/composition-api'
import PanelListItem from '@/components/PanelListItem.vue'

export default defineComponent({
  name: 'PanelList',
  setup () {
    const store: any = inject('vuex-store')
    function addPanelCandidate (files: File[]) {
      if (event !== null) {
        let nextId: number = store.state.panel.panel.length

        for (const file of files) {
          const src = URL.createObjectURL(file)
          store.commit('panel/add', { id: nextId++, asset: src }, { root: true })
        }
      }
    }
    const panelCandidates = computed(() => {
      return store.state.panel.panel
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
