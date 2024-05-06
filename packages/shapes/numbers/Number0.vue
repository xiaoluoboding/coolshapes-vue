<template>
  <ShapeBase :shapeName="shapeId" v-bind="$props">
    <g :clipPath="`url(#${clipId})`">
      <mask
        :id="maskId"
        :style="{ maskType: 'alpha' }"
        width="200"
        height="200"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path
          fill="#fff"
          fill-rule="evenodd"
          d="M100 110c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm0 90c55.228 0 100-44.772 100-100S155.228 0 100 0 0 44.772 0 100s44.772 100 100 100z"
          clip-rule="evenodd"
        ></path>
      </mask>
      <g :mask="`url(#${maskId})`">
        <path fill="#fff" d="M200 0H0v200h200V0z"></path>
        <path
          fill="url(#paint0_linear_880_3290)"
          fill-opacity="0.55"
          d="M200 0H0v200h200V0z"
        ></path>
        <g filter="url(#filter0_f_880_3290)">
          <path fill="#06F" d="M115-19H-13V94h128V-19z"></path>
          <path fill="#FF00D6" d="M87 91H-20v99H87V91z"></path>
          <path fill="#FFD749" d="M168 125H87v75h81v-75z"></path>
          <path fill="#07FFE1" d="M200-22H93v99h107v-99z"></path>
        </g>
      </g>
    </g>
    <defs>
      <filter
        id="filter0_f_880_3290"
        width="360"
        height="362"
        x="-90"
        y="-92"
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
          result="effect1_foregroundBlur_880_3290"
          stdDeviation="35"
        ></feGaussianBlur>
      </filter>
      <linearGradient
        id="paint0_linear_880_3290"
        x1="200"
        x2="0"
        y1="0"
        y2="200"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FF1F00"></stop>
        <stop offset="1" stop-color="#FFD600"></stop>
      </linearGradient>
      <clipPath :id="clipId">
        <path fill="#fff" d="M0 0H200V200H0z"></path>
      </clipPath>
    </defs>
  </ShapeBase>
</template>

<script lang="ts" setup>
import ShapeBase from '@/ShapeBase.vue'

const shapeId = 'number-0'
const clipId = `cs_clip_1_${shapeId}`
const maskId = `cs_mask_1_${shapeId}`
</script>
