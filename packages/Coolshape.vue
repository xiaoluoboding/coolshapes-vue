<template>
  <component :is="shape" v-bind="props" />
</template>

<script lang="ts" setup>
import { computed } from 'vue'

import { getRandomShape, shapeTypes } from './shapes'
import { ShapeProps } from './types'

import Ellipse from './shapes/Ellipse.vue'
import Flower from './shapes/Flower.vue'
import Misc from './shapes/Misc.vue'
import Moon from './shapes/Moon.vue'
import Number from './shapes/Number.vue'
import Polygon from './shapes/Polygon.vue'
import Rectangle from './shapes/Rectangle.vue'
import Star from './shapes/Star.vue'
import Triangle from './shapes/Triangle.vue'
import Wheel from './shapes/Wheel.vue'

interface ShapeOptions extends /* @vue-ignore */ ShapeProps {
  type?: shapeTypes
  index?: number
  random?: boolean
}

const props = defineProps<ShapeOptions>()

const {
  type = 'star',
  index = 1,
  random = false,
  size = 128,
  noise = false
} = props

const shapes = {
  ellipse: Ellipse,
  flower: Flower,
  misc: Misc,
  moon: Moon,
  number: Number,
  polygon: Polygon,
  rectangle: Rectangle,
  star: Star,
  triangle: Triangle,
  wheel: Wheel
}

const shape = computed(() => {
  if (random) {
    return getRandomShape({
      type
    })
  }
  return shapes[type]
})
</script>
