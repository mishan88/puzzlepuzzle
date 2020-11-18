<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <AppBar/>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      fixed
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            PuzzlePuzzle
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list>
        <v-list-item>
          How to use
        </v-list-item>
        <v-list-item>
          About
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <Puzzle/>
      </v-container>
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
    const drawer = ref(false)
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
