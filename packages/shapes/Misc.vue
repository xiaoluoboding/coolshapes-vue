<template>
  <component :is="currentShape" />
</template>

<script lang="ts" setup>
import { computed, withDefaults } from 'vue'
import { shapes } from './index'

const props = withDefaults(
  defineProps<{
    index: number
  }>(),
  {
    index: () => 1
  }
)

const currentShape = computed(() => {
  if (props.index < 1) return
  return shapes.misc[props.index - 1]
})
</script>
