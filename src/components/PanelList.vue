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
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, inject } from '@vue/composition-api'
import PanelListItem from '@/components/PanelListItem.vue'

export default defineComponent({
  name: 'PanelList',
  setup () {
    const store: any = inject('vuex-store')
    const panelCandidates = computed(() => {
      return store.state.panel.panel
    })
    return {
      panelCandidates
    }
  },
  components: {
    PanelListItem
  }
})
</script>
