<template>
  <v-list-item @click="panelSave">
    <v-list-item-icon>
      <v-icon>mdi-content-save</v-icon>
    </v-list-item-icon>
    <v-list-item-title>
      Save
    </v-list-item-title>
  </v-list-item>
</template>
<script lang="ts">
import { defineComponent, inject } from '@vue/composition-api'

export default defineComponent({
  name: 'AppBarSave',
  setup () {
    const store: any = inject('vuex-store')
    function panelSave () {
      store.commit('panelSave/save')
    }
    return {
      panelSave
    }
  }
})
</script>
