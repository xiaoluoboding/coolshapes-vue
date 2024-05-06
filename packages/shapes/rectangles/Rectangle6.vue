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
          d="M150 0v50H50V0h100zM50 150V50H0v100h50zM150 150V50h50v100h-50zM150 150H50v50h100v-50z"
        >
        </path>
      </mask>
      <g :mask="`url(#${maskId})`">
        <path fill="#07FFE1" d="M200 0H0v200h200V0z"></path>
        <path
          fill="url(#paint0_linear_748_5083)"
          d="M200 0H0v200h200V0z"
        ></path>
      </g>
    </template>
    <template v-slot:defs>
      <linearGradient
        id="paint0_linear_748_5083"
        x1="38"
        x2="119"
        y1="14.5"
        y2="181.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FFE500"></stop>
        <stop offset="1" stop-color="#07FFE1"></stop>
      </linearGradient>
    </template>
  </ShapeBase>
</template>

<script lang="ts" setup>
import ShapeBase from '@/ShapeBase.vue'

const shapeId = 'rectangle-6'
const maskId = `cs_mask_1_${shapeId}`
</script>
