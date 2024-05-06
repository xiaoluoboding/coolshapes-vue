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
          d="M100 200a100.001 100.001 0 000-200v200zM0 200a100.002 100.002 0 00100-100A100 100 0 000 0v200z"
        ></path>
      </mask>
      <g :mask="`url(#${maskId})`">
        <path fill="#fff" d="M200 0H0v200h200V0z"></path>
        <path
          fill="url(#paint0_linear_748_4479)"
          d="M200 0H0v200h200V0z"
        ></path>
        <g filter="url(#filter0_f_748_4479)">
          <path fill="#FFE500" d="M180-41H-11v141h191V-41z"></path>
          <path fill="#18A0FB" d="M256 63H113v157h143V63z"></path>
        </g>
      </g>
    </template>
    <template v-slot:defs>
      <filter
        id="filter0_f_748_4479"
        width="407"
        height="401"
        x="-81"
        y="-111"
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
          result="effect1_foregroundBlur_748_4479"
          stdDeviation="35"
        ></feGaussianBlur>
      </filter>
      <linearGradient
        id="paint0_linear_748_4479"
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
import ShapeBase from '@/ShapeBase.vue'

const shapeId = 'moon-9'
const maskId = `cs_mask_1_${shapeId}`
</script>
