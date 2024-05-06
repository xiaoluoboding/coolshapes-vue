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
          d="M58.579 0L100 31.485 141.421 0l7.027 51.552L200 58.58 168.515 100 200 141.421l-51.552 7.027L141.421 200 100 168.515 58.579 200l-7.027-51.552L0 141.421 31.485 100 0 58.579l51.552-7.027L58.58 0z"
        >
        </path>
      </mask>
      <g :mask="`url(#${maskId})`">
        <path fill="#fff" d="M200 0H0v200h200V0z"></path>
        <path fill="#FFF500" fill-opacity="0.44" d="M200 0H0v200h200V0z"></path>
        <g filter="url(#filter0_f_748_4229)">
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
        id="filter0_f_748_4229"
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
          result="effect1_foregroundBlur_748_4229"
          stdDeviation="40"
        ></feGaussianBlur>
      </filter>
    </template>
  </ShapeBase>
</template>

<script lang="ts" setup>
import ShapeBase from '../../ShapeBase.vue'

const shapeId = 'star-3'
const maskId = `cs_mask_1_${shapeId}`
</script>
