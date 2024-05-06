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
          d="M85.087 196v-80.513L9.223 140.369 0 111.717l75.86-24.881L28.98 21.7 53.114 4 100 69.14 146.886 4l24.135 17.7-46.882 65.136L200 111.717l-9.223 28.652-75.864-24.882V196H85.087z"
        >
        </path>
      </mask>
      <g :mask="`url(#${maskId})`">
        <path fill="#fff" d="M200 0H0v200h200V0z"></path>
        <path fill="#06F" d="M200 0H0v200h200V0z"></path>
        <g filter="url(#filter0_f_844_2790)">
          <path fill="#FFE500" d="M150 56H-15v129h165V56z"></path>
          <ellipse
            cx="107.987"
            cy="146.246"
            fill="#FF58E4"
            rx="79.158"
            ry="47.123"
            transform="rotate(-33.875 107.987 146.246)"
          ></ellipse>
        </g>
      </g>
    </template>
    <template v-slot:defs>
      <filter
        id="filter0_f_844_2790"
        width="353.782"
        height="309.216"
        x="-95"
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
          result="effect1_foregroundBlur_844_2790"
          stdDeviation="40"
        ></feGaussianBlur>
      </filter>
    </template>
  </ShapeBase>
</template>

<script lang="ts" setup>
import ShapeBase from '../../ShapeBase.vue'

const shapeId = 'wheel-7'
const maskId = `cs_mask_1_${shapeId}`
</script>
