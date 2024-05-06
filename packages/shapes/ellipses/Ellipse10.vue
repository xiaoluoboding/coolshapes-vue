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
          d="M100 200c55.228 0 100-44.772 100-100S155.228 0 100 0 0 44.772 0 100s44.772 100 100 100zm55-151a4 4 0 00-4-4H49a4 4 0 00-4 4v102a4 4 0 004 4h102a4 4 0 004-4V49z"
          clip-rule="evenodd"
        ></path>
      </mask>
      <g :mask="`url(#${maskId})`">
        <path
          fill="url(#paint0_linear_748_4733)"
          d="M200 0H0v200h200V0z"
        ></path>
        <g filter="url(#filter0_f_748_4733)">
          <ellipse
            cx="155.777"
            cy="159.535"
            fill="#FF58E4"
            rx="91.994"
            ry="58.126"
            transform="rotate(-33.875 155.777 159.535)"
          ></ellipse>
          <ellipse
            cx="58.482"
            cy="26.587"
            fill="#00F0FF"
            rx="69.531"
            ry="47.75"
            transform="rotate(-26.262 58.482 26.587)"
          ></ellipse>
        </g>
      </g>
    </template>
    <template v-slot:defs>
      <filter
        id="filter0_f_748_4733"
        width="406.137"
        height="416.095"
        x="-87.372"
        y="-106.145"
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
          result="effect1_foregroundBlur_748_4733"
          stdDeviation="40"
        ></feGaussianBlur>
      </filter>
      <linearGradient
        id="paint0_linear_748_4733"
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

const shapeId = 'ellipse-10'
const maskId = `cs_mask_1_${shapeId}`
</script>
