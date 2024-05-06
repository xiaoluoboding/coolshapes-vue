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
          d="M149.999 50c0 27.614-22.386 50-50 50s-50-22.386-50-50 22.386-50 50-50 50 22.386 50 50zM149.999 150c0 27.615-22.386 50-50 50s-50-22.385-50-50c0-27.614 22.386-50 50-50s50 22.386 50 50z"
        >
        </path>
        <path
          fill="#fff"
          d="M0 200.001a50 50 0 000-100v100zM200 200.001a49.997 49.997 0 01-50-50 49.997 49.997 0 0150-50v100zM0 100.001A50 50 0 000 0v100.001z"
        >
        </path>
        <path fill="#fff" d="M200 100.001A50 50 0 11200 0v100.001z"></path>
      </mask>
      <g :mask="`url(#${maskId})`">
        <path fill="#fff" d="M200 0H0v200h200V0z"></path>
        <path fill="#0E6FFF" d="M200 0H0v200h200V0z"></path>
        <g filter="url(#filter0_f_748_4779)">
          <path fill="#8F5BFF" d="M211 127H-11v116h222V127z"></path>
          <ellipse
            cx="88"
            cy="23.5"
            fill="#00F0FF"
            rx="112"
            ry="45.5"
          ></ellipse>
        </g>
      </g>
    </template>
    <template v-slot:defs>
      <filter
        id="filter0_f_748_4779"
        width="355"
        height="385"
        x="-84"
        y="-82"
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
          result="effect1_foregroundBlur_748_4779"
          stdDeviation="30"
        ></feGaussianBlur>
      </filter>
    </template>
  </ShapeBase>
</template>

<script lang="ts" setup>
import ShapeBase from '@/ShapeBase.vue'

const shapeId = 'ellipse-4'
const maskId = `cs_mask_1_${shapeId}`
</script>
