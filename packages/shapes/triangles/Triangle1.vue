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
          d="M-.028.003l100 100v-100h-100zm100 0l100 100v-100h-100zm100 100h-100l100 99.994v-99.994zm-100 0h-100l100 99.994v-99.994z"
        >
        </path>
      </mask>
      <g :mask="`url(#${maskId})`">
        <path fill="#fff" d="M200 0H0v200h200V0z"></path>
        <path fill="#FFF9C5" fill-opacity="0.44" d="M200 0H0v200h200V0z"></path>
        <g filter="url(#filter0_f_748_4979)">
          <path
            fill="#00F0FF"
            fill-opacity="0.85"
            d="M135-8H-8v108h143V-8z"
          ></path>
          <path fill="#FF58E4" d="M227 115H123v116h104V115z"></path>
          <ellipse
            cx="157"
            cy="43"
            fill="#FFE500"
            fill-opacity="0.79"
            rx="83"
            ry="57"
          ></ellipse>
        </g>
      </g>
    </template>
    <template v-slot:defs>
      <filter
        id="filter0_f_748_4979"
        width="368"
        height="365"
        x="-68"
        y="-74"
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
          result="effect1_foregroundBlur_748_4979"
          stdDeviation="30"
        ></feGaussianBlur>
      </filter>
    </template>
  </ShapeBase>
</template>

<script lang="ts" setup>
import ShapeBase from '@/ShapeBase.vue'

const shapeId = 'triangle-1'
const maskId = `cs_mask_1_${shapeId}`
</script>
