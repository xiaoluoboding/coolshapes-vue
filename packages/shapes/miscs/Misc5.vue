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
          d="M145 8c30.376 0 55 25 55 60 0 70-75 110-100 125C75 178 0 138 0 68 0 33 25 8 55 8c18.6 0 35 10 45 20 10-10 26.4-20 45-20z"
        >
        </path>
      </mask>
      <g :mask="`url(#${maskId})`">
        <path fill="#fff" d="M200 0H0v200h200V0z"></path>
        <path
          fill="url(#paint0_radial_748_5033)"
          d="M200 0H0v200h200V0z"
        ></path>
        <path
          fill="url(#paint1_radial_748_5033)"
          d="M200 0H0v200h200V0z"
        ></path>
      </g>
    </template>
    <template v-slot:defs>
      <radialGradient
        id="paint0_radial_748_5033"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="rotate(116.694 71.023 87.946) scale(199.234)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FFF500"></stop>
        <stop offset="1" stop-color="#FF00D6" stop-opacity="0"></stop>
      </radialGradient>
      <radialGradient
        id="paint1_radial_748_5033"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="rotate(48.452 -12.085 35.502) scale(223.143)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FF00D6"></stop>
        <stop offset="0.461" stop-color="#FF7171" stop-opacity="0.84"></stop>
        <stop offset="1" stop-color="#FFF500" stop-opacity="0"></stop>
      </radialGradient>
    </template>
  </ShapeBase>
</template>

<script lang="ts" setup>
import ShapeBase from '../../ShapeBase.vue'

const shapeId = 'misc-5'
const maskId = `cs_mask_1_${shapeId}`
</script>
