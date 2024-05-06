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
        <path fill="#fff" d="M0 0H200V200H0z"></path>
      </mask>
      <g :mask="`url(#${maskId})`">
        <path fill="#fff" d="M200 0H0v200h200V0z"></path>
        <path fill="#FFF9C5" fill-opacity="0.2" d="M200 0H0v200h200V0z"></path>
        <g filter="url(#filter0_f_748_5130)">
          <path
            fill="#00F0FF"
            fill-opacity="0.85"
            d="M154-14H11V94h143V-14z"
          ></path>
          <ellipse
            cx="175"
            cy="69"
            fill="#FFE500"
            fill-opacity="0.79"
            rx="83"
            ry="57"
          ></ellipse>
          <ellipse
            cx="24.5"
            cy="174"
            fill="#0E6FFF"
            rx="88.5"
            ry="61"
          ></ellipse>
          <path fill="#FF58E4" d="M228 143H67v84h161v-84z"></path>
        </g>
      </g>
    </template>
    <template v-slot:defs>
      <filter
        id="filter0_f_748_5130"
        width="442"
        height="369"
        x="-124"
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
          result="effect1_foregroundBlur_748_5130"
          stdDeviation="30"
        ></feGaussianBlur>
      </filter>
    </template>
  </ShapeBase>
</template>

<script lang="ts" setup>
import ShapeBase from '@/ShapeBase.vue'

const shapeId = 'rectangle-1'
const maskId = `cs_mask_1_${shapeId}`
</script>
