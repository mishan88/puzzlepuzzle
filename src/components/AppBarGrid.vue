<template>
  <v-list-item @click="showGrid">
    <v-list-item-icon>
      <v-icon>
        mdi-grid
      </v-icon>
    </v-list-item-icon>
    <v-list-item-title>
      Grid
    </v-list-item-title>
  </v-list-item>
</template>
<script lang="ts">
import { defineComponent, inject } from '@vue/composition-api'

export default defineComponent({
  name: 'AppBarGrid',
  setup () {
    const store: any = inject('vuex-store')
    function showGrid () {
      store.commit('panelGrid/show')
    }

    return {
      showGrid
    }
  }
})
</script>
