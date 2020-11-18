<template>
  <v-btn @click="panelClear">Clear</v-btn>
</template>
<script lang="ts">
import { defineComponent, inject } from '@vue/composition-api'

export default defineComponent({
  name: 'AppBarClear',
  setup () {
    const store: any = inject('vuex-store')
    function panelClear () {
      store.commit('panelClear/clear')
    }
    return {
      panelClear
    }
  }
})
</script>
