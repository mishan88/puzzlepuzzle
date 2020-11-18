<template>
  <div>
    <div width="960" height="480" ref="panelRef"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, watchEffect, inject } from '@vue/composition-api'
import * as PIXI from 'pixi.js'

class Panel extends PIXI.Sprite {
  panelSize: number
  texture: PIXI.Texture
  dragging: boolean
  data: PIXI.InteractionData
  constructor (
    panelSize: number,
    texture: PIXI.Texture
  ) {
    super()
    this.panelSize = panelSize
    this.texture = texture
    this.width = this.panelSize
    this.height = this.panelSize
    this.interactive = true
    this.buttonMode = true
    this.anchor.set(0.5)
    this.dragging = false
    this.x = 40
    this.y = 40
    this.data = new PIXI.InteractionData()
    this
      .on('pointerdown', this.onDragStart)
      .on('pointerup', this.onDragEnd)
      .on('pointerupoutside', this.onDragEnd)
      .on('pointermove', this.onDragMove)
  }

  onDragStart (event: PIXI.InteractionEvent) {
    this.data = event.data
    this.alpha = 0.5
    this.dragging = true
  }

  onDragEnd () {
    this.alpha = 1.0
    this.dragging = false
    // x and y should > 0
    this.x = Math.trunc(this.x / this.width) * this.width + this.width / 2
    this.y = Math.trunc(this.y / this.height) * this.height + this.height / 2
    if (this.x < 0 || this.x > this.parent.parent.width || this.y < 0 || this.y > this.parent.parent.height) {
      this.destroy()
    }
  }

  onDragMove () {
    if (this.dragging) {
      const newPosition = this.data.getLocalPosition(this.parent)
      this.x = newPosition.x
      this.y = newPosition.y
    }
  }
}

class LineContainer extends PIXI.Container {
  width: number
  height: number
  numRow: number
  numColumn: number
  panelSize: number
  constructor (
    width: number,
    height: number,
    numRow: number,
    numColumn: number,
    panelSize: number
  ) {
    super()
    this.width = width
    this.height = height
    this.numRow = numRow
    this.numColumn = numColumn
    this.panelSize = panelSize
    this.addChild(this.createLine(this.numRow, this.numColumn, this.panelSize))
  }

  createLine (numRow: number, numColumn: number, panelSize: number): PIXI.Graphics {
    const board = new PIXI.Graphics()
    const boardHeight = numRow * panelSize
    const boardWidth = numColumn * panelSize

    board.lineStyle(2, 0xFFFFF, 1)

    // column line
    for (let columnLine = 0; columnLine < numColumn + 1; columnLine++) {
      board.beginFill()
      board.moveTo(columnLine * panelSize, 0)
      board.lineTo(columnLine * panelSize, boardHeight)
      board.endFill()
    }

    // row line
    for (let rowLine = 0; rowLine < numRow + 1; rowLine++) {
      board.beginFill()
      board.moveTo(0, rowLine * panelSize)
      board.lineTo(boardWidth, rowLine * panelSize)
      board.endFill()
    }

    return board
  }
}

export default defineComponent({
  name: 'PanelPlace',
  setup () {
    const store: any = inject('vuex-store')
    const panelRef = ref()
    const puzzleApp = new PIXI.Application({
      autoDensity: true,
      width: 480,
      height: 960,
      backgroundColor: 0x1099bb,
      resolution: window.devicePixelRatio || 1
    })
    const numColumn = 6
    const numRow = 12
    const panelSize = 80

    const backgroundContainer = new PIXI.Container()
    backgroundContainer.width = puzzleApp.stage.width
    backgroundContainer.height = puzzleApp.stage.height

    const lineContainer = new LineContainer(puzzleApp.stage.width, puzzleApp.stage.height, numRow, numColumn, panelSize)
    const panelContainer = new PIXI.Container()
    panelContainer.width = puzzleApp.stage.width
    panelContainer.height = puzzleApp.stage.height
    puzzleApp.stage.addChild(backgroundContainer)
    puzzleApp.stage.addChild(lineContainer)
    puzzleApp.stage.addChild(panelContainer)

    onMounted(() => {
      panelRef.value.appendChild(puzzleApp.view)
    })
    watchEffect(() => {
      const panelQueue = store.state.panelQueue.panelQueue
      if (panelQueue !== null) {
        // should instance texture
        // Error: new Panel(80, panelQueue)
        const texture = PIXI.Texture.from(panelQueue)
        const panel = new Panel(80, texture)
        panelContainer.addChild(panel)
        store.commit('panelQueue/pop', { root: true })
      }
    })
    watchEffect(() => {
      const panelGrid = store.state.panelGrid.panelGrid
      if (panelGrid === true) {
        lineContainer.visible = true
      } else {
        lineContainer.visible = false
      }
    })
    watchEffect(() => {
      const panelClear = store.state.panelClear.panelClear
      if (panelClear === true) {
        panelContainer.removeChildren()
        store.commit('panelClear/clear', { root: true })
      }
    })
    return {
      panelRef
    }
  }
})
</script>
