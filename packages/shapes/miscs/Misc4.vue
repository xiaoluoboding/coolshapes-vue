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
          d="M82 124H44.017c-9.288 0-15.054-10.119-10.334-18.135l58.26-98.942C99.186-5.377 118-.23 118 14.053V76h37.982c9.288 0 15.054 10.12 10.334 18.135l-58.26 98.942C100.813 205.377 82 200.23 82 185.948V124z"
        >
        </path>
      </mask>
      <g :mask="`url(#${maskId})`">
        <path fill="#fff" d="M200 0H0v200h200V0z"></path>
        <path
          fill="url(#paint0_linear_748_5038)"
          d="M200 0H0v200h200V0z"
        ></path>
        <g filter="url(#filter0_f_748_5038)">
          <path fill="#18A0FB" d="M216 79H96v135h120V79z"></path>
        </g>
      </g>
    </template>
    <template v-slot:defs>
      <filter
        id="filter0_f_748_5038"
        width="245"
        height="260"
        x="33.5"
        y="16.5"
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
          result="effect1_foregroundBlur_748_5038"
          stdDeviation="31.25"
        ></feGaussianBlur>
      </filter>
      <linearGradient
        id="paint0_linear_748_5038"
        x1="38"
        x2="119"
        y1="14.5"
        y2="181.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FFE500"></stop>
        <stop offset="1" stop-color="#07FFE1"></stop>
      </linearGradient>
    </template>
  </ShapeBase>
</template>

<script lang="ts" setup>
import ShapeBase from '@/ShapeBase.vue'

const shapeId = 'misc-4'
const maskId = `cs_mask_1_${shapeId}`
</script>
