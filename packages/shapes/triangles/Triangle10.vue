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
        <path fill="#fff" d="M100 13l100 174H0L100 13z"></path>
      </mask>
      <g :mask="`url(#${maskId})`">
        <path fill="#fff" d="M200 0H0v200h200V0z"></path>
        <path fill="#FF6C02" fill-opacity="0.19" d="M200 0H0v200h200V0z"></path>
        <g filter="url(#filter0_f_748_4905)">
          <path fill="#FF58E4" d="M160 0H39v89h121V0z"></path>
          <path fill="#FFE500" d="M158 115H41v105h117V115z"></path>
          <path
            fill="url(#paint0_linear_748_4905)"
            d="M156-9H45v121h111V-9z"
          ></path>
        </g>
      </g>
    </template>
    <template v-slot:defs>
      <filter
        id="filter0_f_748_4905"
        width="246"
        height="354"
        x="-23.5"
        y="-71.5"
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
          result="effect1_foregroundBlur_748_4905"
          stdDeviation="31.25"
        ></feGaussianBlur>
      </filter>
      <linearGradient
        id="paint0_linear_748_4905"
        x1="132.967"
        x2="48.334"
        y1="-1.438"
        y2="88.212"
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

const shapeId = 'triangle-10'
const maskId = `cs_mask_1_${shapeId}`
</script>
