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
          d="M0 0c0 55.228 44.772 100 100 100C44.772 100 0 144.772 0 200c55.228 0 100-44.772 100-100 0 55.228 44.772 100 100 100 0-55.22-44.758-99.987-99.976-100C155.242 99.987 200 55.22 200 0c-55.228 0-100 44.772-100 100C100 44.772 55.228 0 0 0z"
        >
        </path>
      </mask>
      <g :mask="`url(#${maskId})`">
        <path fill="#fff" d="M200 0H0v200h200V0z"></path>
        <path fill="#FFF500" fill-opacity="0.44" d="M200 0H0v200h200V0z"></path>
        <g filter="url(#filter0_f_748_4444)">
          <ellipse
            cx="106"
            cy="22.5"
            fill="#FF00D6"
            rx="88"
            ry="49.5"
          ></ellipse>
          <ellipse
            cx="64.5"
            cy="155"
            fill="#07FFE1"
            rx="64.5"
            ry="45"
          ></ellipse>
          <path fill="#06F" d="M218 126H100v120h118V126z"></path>
        </g>
      </g>
    </template>
    <template v-slot:defs>
      <filter
        id="filter0_f_748_4444"
        width="378"
        height="433"
        x="-80"
        y="-107"
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
          result="effect1_foregroundBlur_748_4444"
          stdDeviation="40"
        ></feGaussianBlur>
      </filter>
    </template>
  </ShapeBase>
</template>

<script lang="ts" setup>
import ShapeBase from '../../ShapeBase.vue'

const shapeId = 'moon-13'
const maskId = `cs_mask_1_${shapeId}`
</script>
