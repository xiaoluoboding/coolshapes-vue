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
          d="M100 0c12.424 62.382 37.256 87.456 100 100-62.759 12.544-87.591 37.618-100 100-12.424-62.382-37.256-87.471-100-100C62.758 87.456 87.591 62.382 100 0z"
        >
        </path>
      </mask>
      <g :mask="`url(#${maskId})`">
        <path fill="#fff" d="M200 0H0v200h200V0z"></path>
        <path
          fill="url(#paint0_linear_star-8)"
          fill-opacity="0.55"
          d="M200 0H0v200h200V0z"
        ></path>
        <g filter="url(#filter0_f_748_star-8)">
          <path fill="#06F" d="M213 69H93v141h120V69z"></path>
        </g>
      </g>
    </template>
    <template v-slot:defs>
      <filter
        id="filter0_f_748_star-8"
        width="245"
        height="266"
        x="30.5"
        y="6.5"
        color-interpolation-filters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
        <feBlend
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        ></feBlend>
        <feGaussianBlur
          result="effect1_foregroundBlur_748_star-8"
          stdDeviation="31.25"
        ></feGaussianBlur>
      </filter>
      <linearGradient
        id="paint0_linear_star-8"
        x1="162"
        x2="49.5"
        y1="38"
        y2="150.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FF1F00"></stop>
        <stop offset="1" stop-color="#FF58E4"></stop>
      </linearGradient>
    </template>
  </ShapeBase>
</template>

<script lang="ts" setup>
import ShapeBase from '@/ShapeBase.vue'

const shapeId = 'star-8'
const maskId = `cs_mask_1_${shapeId}`
</script>
