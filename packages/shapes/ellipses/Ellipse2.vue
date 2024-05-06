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
          fill-rule="evenodd"
          d="M100 72c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28zM0 100C0 44.772 44.772 0 100 0s100 44.772 100 100-44.772 100-100 100S0 155.228 0 100z"
          clip-rule="evenodd"
        ></path>
      </mask>
      <g :mask="`url(#${maskId})`">
        <path fill="#fff" d="M200 0H0v200h200V0z"></path>
        <path
          fill="url(#paint0_linear_748_4798)"
          fill-opacity="0.55"
          d="M200 0H0v200h200V0z"
        ></path>
        <g filter="url(#filter0_f_748_4798)">
          <path
            fill="#FFE500"
            fill-opacity="0.74"
            d="M117 77H-22v130h139V77z"
          ></path>
          <path fill="#EE46D3" d="M174-60H-17V78h191V-60z"></path>
          <ellipse
            cx="107.531"
            cy="168.75"
            fill="#00F0FF"
            rx="69.531"
            ry="47.75"
          ></ellipse>
        </g>
      </g>
    </template>
    <template v-slot:defs>
      <filter
        id="filter0_f_748_4798"
        width="324.062"
        height="401.5"
        x="-84.5"
        y="-122.5"
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
          result="effect1_foregroundBlur_748_4798"
          stdDeviation="31.25"
        ></feGaussianBlur>
      </filter>
      <linearGradient
        id="paint0_linear_748_4798"
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
import ShapeBase from '@/ShapeBase.vue'

const shapeId = 'ellipse-2'
const maskId = `cs_mask_1_${shapeId}`
</script>
