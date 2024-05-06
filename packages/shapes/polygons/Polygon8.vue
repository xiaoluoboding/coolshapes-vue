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
          d="M100.397 0l87 50v100l-87 50-87-50V50l87-50z"
        ></path>
      </mask>
      <g :mask="`url(#${maskId})`">
        <path fill="#00B2FF" d="M200 0H0v200h200V0z"></path>
        <path
          fill="url(#paint0_radial_748_4346)"
          d="M200 0H0v200h200V0z"
        ></path>
      </g>
    </template>
    <template v-slot:defs>
      <radialGradient
        id="paint0_radial_748_4346"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="rotate(-83.01 163.01 43.495) scale(184.874)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#F7C617"></stop>
        <stop offset="1" stop-color="#FFF500" stop-opacity="0"></stop>
      </radialGradient>
    </template>
  </ShapeBase>
</template>

<script lang="ts" setup>
import ShapeBase from '../../ShapeBase.vue'

const shapeId = 'polygon-8'
const maskId = `cs_mask_1_${shapeId}`
</script>
