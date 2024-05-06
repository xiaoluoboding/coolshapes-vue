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
        <rect width="200" height="200" fill="#fff" rx="32"></rect>
      </mask>
      <g :mask="`url(#${maskId})`">
        <path fill="#fff" d="M200 0H0v200h200V0z"></path>
        <path fill="#0E6FFF" d="M200 0H0v200h200V0z"></path>
        <g filter="url(#filter0_f_748_5121)">
          <path fill="#FF58E4" d="M196 148H0v104h196V148z"></path>
          <ellipse
            cx="125.54"
            cy="65.794"
            fill="#00C5DF"
            rx="89.568"
            ry="61.511"
            transform="rotate(-26.262 125.54 65.794)"
          ></ellipse>
        </g>
      </g>
    </template>
    <template v-slot:defs>
      <filter
        id="filter0_f_748_5121"
        width="370.372"
        height="414.134"
        x="-80"
        y="-82.134"
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
          result="effect1_foregroundBlur_748_5121"
          stdDeviation="40"
        ></feGaussianBlur>
      </filter>
    </template>
  </ShapeBase>
</template>

<script lang="ts" setup>
import ShapeBase from '../../ShapeBase.vue'

const shapeId = 'rectangle-2'
const maskId = `cs_mask_1_${shapeId}`
</script>
