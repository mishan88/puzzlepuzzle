<template>
  <span>
    <v-list-item @click="buttonClick">
      <v-list-item-icon>
        <v-icon>mdi-flip-to-back</v-icon>
      </v-list-item-icon>
      <v-list-item-title>Background</v-list-item-title>
    </v-list-item>
    <input type="file" accept="image/*" label="File input" ref="backgroundInputRef" @change="backgroundChange"/>
  </span>
</template>
<script lang="ts">
import { defineComponent, ref, inject } from '@vue/composition-api'

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

export default defineComponent({
  name: 'AppBarBackGround',
  setup () {
    const backgroundInputRef = ref()
    const store: any = inject('vuex-store')
    function buttonClick () {
      backgroundInputRef.value.click()
    }

    function backgroundChange (event: HTMLInputEvent) {
      if (event.target.files !== null && event.target.files.length !== 0) {
        const src = URL.createObjectURL(event.target.files[0])
        store.commit('panelBackground/add', src, { root: true })
      }
    }

    return {
      backgroundInputRef,
      buttonClick,
      backgroundChange
    }
  }
})
</script>
<style scoped>
input {
  display: none;
}
</style>
