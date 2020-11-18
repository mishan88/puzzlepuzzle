<template>
  <v-btn @click="showGrid">Grid</v-btn>
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
