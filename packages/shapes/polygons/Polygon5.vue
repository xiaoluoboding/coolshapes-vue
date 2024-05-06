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
          d="M83.997 8.23a27.096 27.096 0 0132.006 0l72.752 53.16c9.56 6.986 13.561 19.378 9.907 30.687l-27.777 85.977C167.235 189.352 156.776 197 144.976 197H55.024c-11.8 0-22.259-7.648-25.91-18.946L1.339 92.077c-3.654-11.31.347-23.701 9.907-30.687L83.996 8.23z"
        >
        </path>
      </mask>
      <g :mask="`url(#${maskId})`">
        <path fill="#fff" d="M200 0H0v200h200V0z"></path>
        <path
          fill="url(#paint0_radial_748_4374)"
          d="M200 0H0v200h200V0z"
        ></path>
        <path
          fill="url(#paint1_radial_748_4374)"
          d="M200 0H0v200h200V0z"
        ></path>
      </g>
    </template>
    <template v-slot:defs>
      <radialGradient
        id="paint0_radial_748_4374"
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
        id="paint1_radial_748_4374"
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
import ShapeBase from '@/ShapeBase.vue'

const shapeId = 'polygon-5'
const maskId = `cs_mask_1_${shapeId}`
</script>
