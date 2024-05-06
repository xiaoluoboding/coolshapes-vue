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
          d="M136 0l-36 36L64 0H0v64l36 36-36 36v64h64l36-36 36 36h64v-64l-36-36 36-36V0h-64z"
        ></path>
      </mask>
      <g :mask="`url(#${maskId})`">
        <path fill="#fff" d="M200 0H0v200h200V0z"></path>
        <path fill="#FF6C02" fill-opacity="0.19" d="M200 0H0v200h200V0z"></path>
        <g filter="url(#filter0_f_748_4989)">
          <ellipse
            cx="30.742"
            cy="164.544"
            fill="#FFC700"
            rx="79.5"
            ry="64.116"
            transform="rotate(-33.875 30.742 164.544)"
          ></ellipse>
          <path
            fill="url(#paint0_linear_748_4989)"
            d="M220-35H109V86h111V-35z"
          ></path>
          <path fill="#FF37BB" d="M256 122H122v121h134V122z"></path>
        </g>
      </g>
    </template>
    <template v-slot:defs>
      <filter
        id="filter0_f_748_4989"
        width="460.331"
        height="438"
        x="-124.331"
        y="-115"
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
          result="effect1_foregroundBlur_748_4989"
          stdDeviation="40"
        ></feGaussianBlur>
      </filter>
      <linearGradient
        id="paint0_linear_748_4989"
        x1="196.967"
        x2="112.334"
        y1="-27.438"
        y2="62.212"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#0E6FFF"></stop>
        <stop offset="1" stop-color="#00F0FF"></stop>
      </linearGradient>
    </template>
  </ShapeBase>
</template>

<script lang="ts" setup>
import ShapeBase from '../../ShapeBase.vue'

const shapeId = 'misc-10'
const maskId = `cs_mask_1_${shapeId}`
</script>
