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
          d="M196.516 87.01a25.96 25.96 0 010 25.98l-36.997 64.02A26.012 26.012 0 01136.997 190H63.003a26.011 26.011 0 01-22.522-12.99L3.484 112.99a25.958 25.958 0 010-25.98l36.997-64.02A26.01 26.01 0 0163.003 10h73.994a26.011 26.011 0 0122.522 12.99l36.997 64.02z"
        >
        </path>
      </mask>
      <g :mask="`url(#${maskId})`">
        <path fill="#fff" d="M200 0H0v200h200V0z"></path>
        <path
          fill="url(#paint0_linear_748_4407)"
          d="M200 0H0v200h200V0z"
        ></path>
        <g filter="url(#filter0_f_748_4407)">
          <path fill="#FF4921" d="M161 0H40v113h121V0z"></path>
          <path fill="#FF58E4" d="M200 44H87v113h113V44z"></path>
          <path
            fill="#0CE548"
            fill-opacity="0.35"
            d="M196 91H82v102h114V91z"
          ></path>
          <path
            fill="#FFE500"
            fill-opacity="0.74"
            d="M129 59H27v120h102V59z"
          ></path>
        </g>
      </g>
    </template>
    <template v-slot:defs>
      <filter
        id="filter0_f_748_4407"
        width="283"
        height="303"
        x="-28"
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
          result="effect1_foregroundBlur_748_4407"
          stdDeviation="27.5"
        ></feGaussianBlur>
      </filter>
      <linearGradient
        id="paint0_linear_748_4407"
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

const shapeId = 'polygon-1'
const maskId = `cs_mask_1_${shapeId}`
</script>
