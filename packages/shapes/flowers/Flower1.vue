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
          d="M150.005 128.863c66.681 38.481-49.997 105.828-49.997 28.861 0 76.967-116.658 9.62-49.997-28.861-66.681 38.481-66.681-96.207 0-57.727-66.681-38.48 49.997-105.827 49.997-28.86 0-76.967 116.657-9.62 49.997 28.86 66.66-38.48 66.66 96.208 0 57.727z"
        >
        </path>
      </mask>
      <g :mask="`url(#${maskId})`">
        <path fill="#fff" d="M200 0H0v200h200V0z"></path>
        <path
          fill="url(#paint0_linear_748_4711)"
          d="M200 0H0v200h200V0z"
        ></path>
        <g filter="url(#filter0_f_748_4711)">
          <path fill="#FF58E4" d="M130 0H69v113h61V0z"></path>
          <path
            fill="#0CE548"
            fill-opacity="0.35"
            d="M196 91H82v102h114V91z"
          ></path>
          <path
            fill="#FFE500"
            fill-opacity="0.74"
            d="M113 80H28v120h85V80z"
          ></path>
        </g>
      </g>
    </template>
    <template v-slot:defs>
      <filter
        id="filter0_f_748_4711"
        width="278"
        height="310"
        x="-27"
        y="-55"
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
          result="effect1_foregroundBlur_748_4711"
          stdDeviation="27.5"
        ></feGaussianBlur>
      </filter>
      <linearGradient
        id="paint0_linear_748_4711"
        x1="186.5"
        x2="37"
        y1="37"
        y2="186.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#0E6FFF" stop-opacity="0.51"></stop>
        <stop offset="1" stop-color="#00F0FF" stop-opacity="0.59"></stop>
      </linearGradient>
    </template>
  </ShapeBase>
</template>

<script lang="ts" setup>
import ShapeBase from '@/ShapeBase.vue'

const shapeId = 'flower-1'
const maskId = `cs_mask_1_${shapeId}`
</script>
