<template>
  <ShapeBase :shapeName="shapeId" v-bind="$props">
    <template v-slot:mask>
      <mask
        :id="maskId"
        style="mask-type: alpha"
        width="200"
        height="190"
        x="0"
        y="5"
        maskUnits="userSpaceOnUse"
      >
        <path
          fill="#fff"
          d="M106.086 101.973c125.219 40.51 75.067 109.249-2.324 3.183C181.153 211.222 100 237.478 100 106.372c0 131.106-81.146 104.85-3.762-1.216-77.384 106.066-127.543 37.327-2.324-3.183-125.219 40.51-125.219-44.478 0-3.94-125.219-40.517-75.06-109.257 2.324-3.184C18.854-11.224 100-37.48 100 93.633c0-131.113 81.153-104.857 3.762 1.216 77.391-106.073 127.543-37.333 2.324 3.183 125.219-40.516 125.219 44.451 0 3.941z"
        >
        </path>
      </mask>
      <g :mask="`url(#${maskId})`">
        <path fill="#fff" d="M200 0H0v200h200V0z"></path>
        <path
          fill="url(#paint0_linear_748_4701)"
          d="M200 0H0v200h200V0z"
        ></path>
        <g filter="url(#filter0_f_748_4701)">
          <ellipse
            cx="143.611"
            cy="184.18"
            fill="#FF58E4"
            rx="114.679"
            ry="58.126"
            transform="rotate(-33.875 143.611 184.18)"
          ></ellipse>
          <ellipse
            cx="68.482"
            cy="38.587"
            fill="#00F0FF"
            rx="69.531"
            ry="47.75"
            transform="rotate(-26.262 68.482 38.587)"
          ></ellipse>
        </g>
      </g>
    </template>
    <template v-slot:defs>
      <filter
        id="filter0_f_748_4701"
        width="401.584"
        height="438.421"
        x="-77.372"
        y="-94.144"
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
          result="effect1_foregroundBlur_748_4701"
          stdDeviation="40"
        ></feGaussianBlur>
      </filter>
      <linearGradient
        id="paint0_linear_748_4701"
        x1="158.5"
        x2="29"
        y1="12.5"
        y2="200"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#0E6FFF"></stop>
        <stop offset="1" stop-color="#00F0FF"></stop>
      </linearGradient>
    </template>
  </ShapeBase>
</template>

<script lang="ts" setup>
import ShapeBase from '../../ShapeBase.vue'

const shapeId = 'flower-2'
const maskId = `cs_mask_1_${shapeId}`
</script>
