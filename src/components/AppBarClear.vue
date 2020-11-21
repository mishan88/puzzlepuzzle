<template>
  <v-list-item @click="panelClear">
    <v-list-item-icon>
      <v-icon>mdi-close</v-icon>
    </v-list-item-icon>
    <v-list-item-title>
      Clear
    </v-list-item-title>
  </v-list-item>
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
