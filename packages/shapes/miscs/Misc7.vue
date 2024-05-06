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
          d="M0 0h40v40H0V0zM40 40h40v40H40V40zM0 80h40v40H0V80zM40 120h40v40H40v-40zM120 40h40v40h-40V40zM80 80h40v40H80V80zM0 160h40v40H0v-40zM160 80h40v40h-40V80zM80 0h40v40H80V0zM120 120h40v40h-40v-40zM80 160h40v40H80v-40zM160 0h40v40h-40V0zM160 160h40v40h-40v-40z"
        >
        </path>
      </mask>
      <g :mask="`url(#${maskId})`">
        <path fill="#fff" d="M200 0H0v200h200V0z"></path>
        <path
          fill="url(#paint0_linear_748_5013)"
          fill-opacity="0.55"
          d="M200 0H0v200h200V0z"
        ></path>
        <g filter="url(#filter0_f_748_5013)">
          <path fill="#FF58E4" d="M190 109H0v116h190V109z"></path>
          <path fill="#00C5DF" d="M106-37H-33v150h139V-37z"></path>
          <ellipse
            cx="151.215"
            cy="65.167"
            fill="#FFD749"
            rx="94.157"
            ry="64.662"
            transform="rotate(-33.875 151.215 65.167)"
          ></ellipse>
        </g>
      </g>
    </template>
    <template v-slot:defs>
      <filter
        id="filter0_f_748_5013"
        width="390.318"
        height="382"
        x="-93"
        y="-97"
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
          result="effect1_foregroundBlur_748_5013"
          stdDeviation="30"
        ></feGaussianBlur>
      </filter>
      <linearGradient
        id="paint0_linear_748_5013"
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
import ShapeBase from '../../ShapeBase.vue'

const shapeId = 'misc-7'
const maskId = `cs_mask_1_${shapeId}`
</script>
