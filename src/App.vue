<template>
  <v-app>
    <v-main>
      <Puzzle/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Puzzle from '@/views/Puzzle.vue'

export default defineComponent({
  name: 'App',
  components: {
    Puzzle
  }
})

</script>
