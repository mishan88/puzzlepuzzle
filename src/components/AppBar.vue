<template>
  <span>
    <v-list>
      <AppBarPanel />
      <AppBarBackground />
      <AppBarGrid />
      <AppBarSave />
      <AppBarClear />
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-help-circle</v-icon>
        </v-list-item-icon>
        <v-list-item-title>How to use</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-information</v-icon>
        </v-list-item-icon>
        <v-list-item-title>
          About
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </span>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import AppBarPanel from '@/components/AppBarPanel.vue'
import AppBarBackground from '@/components/AppBarBackground.vue'
import AppBarGrid from '@/components/AppBarGrid.vue'
import AppBarSave from '@/components/AppBarSave.vue'
import AppBarClear from '@/components/AppBarClear.vue'

export default defineComponent({
  name: 'AppBar',
  components: {
    AppBarPanel,
    AppBarBackground,
    AppBarGrid,
    AppBarSave,
    AppBarClear
  }
})
</script>
