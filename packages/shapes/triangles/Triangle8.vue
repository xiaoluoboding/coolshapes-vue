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
          d="M200 100L100 0 0 100h100L0 200h200L100 100h100z"
        ></path>
      </mask>
      <g :mask="`url(#${maskId})`">
        <path fill="#fff" d="M200 0H0v200h200V0z"></path>
        <path
          fill="url(#paint0_linear_748_4918)"
          fill-opacity="0.55"
          d="M200 0H0v200h200V0z"
        ></path>
        <g filter="url(#filter0_f_748_4918)">
          <path fill="#06F" d="M220 56H100v155h120V56z"></path>
        </g>
      </g>
    </template>
    <template v-slot:defs>
      <filter
        id="filter0_f_748_4918"
        width="280"
        height="315"
        x="20"
        y="-24"
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
          result="effect1_foregroundBlur_748_4918"
          stdDeviation="40"
        ></feGaussianBlur>
      </filter>
      <linearGradient
        id="paint0_linear_748_4918"
        x1="162"
        x2="49.5"
        y1="38"
        y2="150.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FF1F00"></stop>
        <stop offset="1" stop-color="#FF58E4"></stop>
      </linearGradient>
    </template>
  </ShapeBase>
</template>

<script lang="ts" setup>
import ShapeBase from '@/ShapeBase.vue'

const shapeId = 'triangle-8'
const maskId = `cs_mask_1_${shapeId}`
</script>
