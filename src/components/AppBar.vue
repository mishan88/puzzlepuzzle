<template>
  <div>
    <AppBarPanel />
    <AppBarBackground />
    <AppBarGrid />
    <AppBarSave />
    <AppBarClear />
  </div>
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
