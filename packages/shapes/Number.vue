<template>
  <component :is="currentShape" :iconName="`number-${props.index}`" />
</template>

<script lang="ts" setup>
import { computed, withDefaults } from 'vue'
import { shapes } from './index'

const props = withDefaults(
  defineProps<{
    index: number
  }>(),
  {
    index: 0
  }
)

const currentShape = computed(() => {
  if (props.index < 1) return
  return shapes.number[props.index]
})
</script>
