<template>
  <div>
    <PanelPlace />
    <PanelList />
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import PanelList from '@/components/PanelList.vue'
import PanelPlace from '@/components/PanelPlace.vue'

export default defineComponent({
  name: 'Puzzle',
  components: {
    PanelPlace,
    PanelList
  }
})

</script>
