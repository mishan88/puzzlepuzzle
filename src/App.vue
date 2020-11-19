<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      :permanent="true"
      expand-on-hover
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            PuzzlePuzzle
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <AppBar/>
    </v-navigation-drawer>
    <v-main>
      <Puzzle/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import Puzzle from '@/views/Puzzle.vue'
import AppBar from '@/components/AppBar.vue'

export default defineComponent({
  name: 'App',
  setup () {
    const drawer = ref(true)
    return {
      drawer
    }
  },
  components: {
    Puzzle,
    AppBar
  }
})

</script>
