<template>
  <div>
    <v-row align-content="center">
      <v-col cols=12 sm=10 md=8 lg=4 xl=3>
        <PanelPlace />
      </v-col >
      <v-col cols=12 sm=10 md=8 lg=4 xl=3>
        <PanelList />
      </v-col>
    </v-row>
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
