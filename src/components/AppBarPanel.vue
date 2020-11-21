<template>
  <span>
    <v-list-item @click="buttonClick">
      <v-list-item-icon>
        <v-icon>mdi-upload</v-icon>
      </v-list-item-icon>
      <v-list-item-title>Add Panel</v-list-item-title>
    </v-list-item>
    <input type="file" multiple accept="image/*" label="File input" ref="fileInputRef" @change="addPanelCandidate"/>
  </span>
</template>
<script lang="ts">
import { defineComponent, inject, ref } from '@vue/composition-api'

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

export default defineComponent({
  name: 'AppBarPanel',
  setup () {
    const fileInputRef = ref()
    const store: any = inject('vuex-store')
    function addPanelCandidate (event: HTMLInputEvent) {
      if (event.target.files !== null && event.target.files.length !== 0) {
        let nextId: number = store.state.panel.panel.length

        for (const file of event.target.files) {
          const src = URL.createObjectURL(file)
          store.commit('panel/add', { id: nextId++, asset: src }, { root: true })
        }
      }
      // same files input repeatly
      event.target.value = ''
    }
    function buttonClick () {
      fileInputRef.value.click()
    }
    return {
      addPanelCandidate,
      buttonClick,
      fileInputRef
    }
  }
})
</script>
<style scoped>
input {
  display: none;
}
</style>
