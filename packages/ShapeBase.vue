<template>
  <svg
    ref="svgRef"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 200 200"
    :width="size || defaultWidth"
    :height="size || defaultHeight"
    :class="svgClass"
    v-bind="attrs"
  >
    <slot />
    <g :clipPath="`url(#${clipId})`">
      <slot name="mask" />
    </g>
    <defs>
      <slot name="defs" />
      <clipPath :id="clipId">
        <path fill="#fff" d="M0 0H200V200H0z"></path>
      </clipPath>
    </defs>
    <NoiseMask :id="shapeName" v-if="noise" />
  </svg>
</template>

<script lang="ts" setup>
import { computed, ref, useAttrs, withDefaults } from 'vue'

import NoiseMask from './NoiseMask.vue'

const attrs = useAttrs()

const props = withDefaults(
  defineProps<{
    defaultWidth?: number
    defaultHeight?: number
    defaultClassName?: string
    className?: string
    size?: number
    noise?: boolean
    shapeName: string
  }>(),
  {
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'none',
    viewBox: '0 0 200 200',
    defaultWidth: 200,
    defaultHeight: 200,
    defaultClassName: 'coolshapes-vue',
    className: '',
    size: 128,
    noise: true,
    shapeName: 'star-1'
  }
)

const svgClass = computed(() => {
  return `${props.defaultClassName} ${props.shapeName} ${props.className || ''}`
})

const clipId = `cs_clip_1_${props.shapeName}`
const maskId = `cs_mask_1_${props.shapeName}`

const svgRef = ref<SVGSVGElement>()
</script>

<style scoped></style>
