<template>
  <ShapeBase :shapeName="shapeId" v-bind="$props">
    <template v-slot:mask>
      <mask
        :id="maskId"
        style="mask-type: alpha"
        width="200"
        height="200"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path
          fill="#fff"
          d="M108 0H92v80.686L34.946 23.632 23.632 34.946 80.686 92H0v16h80.686l-57.054 57.054 11.314 11.314L92 119.314V200h16v-80.686l57.053 57.053 11.314-11.313L119.313 108H200V92h-80.686l57.053-57.054-11.313-11.313L108 80.686V0z"
        >
        </path>
      </mask>
      <g :mask="`url(#${maskId})`">
        <path fill="#fff" d="M200 0H0v200h200V0z"></path>
        <path
          fill="url(#paint0_linear_748_4824)"
          fill-opacity="0.75"
          d="M200 0H0v200h200V0z"
        ></path>
      </g>
    </template>
    <template v-slot:defs>
      <linearGradient
        id="paint0_linear_748_4824"
        x1="200"
        x2="0"
        y1="0"
        y2="200"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FF1F00"></stop>
        <stop offset="1" stop-color="#FFD600"></stop>
      </linearGradient>
    </template>
  </ShapeBase>
</template>

<script lang="ts" setup>
import ShapeBase from '@/ShapeBase.vue'

const shapeId = 'wheel-5'
const maskId = `cs_mask_1_${shapeId}`
</script>
