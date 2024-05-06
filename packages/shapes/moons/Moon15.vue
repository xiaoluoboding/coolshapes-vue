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
          d="M56.359 100C22.997 83.793 0 49.582 0 10h50c0 27.614 22.386 50 50 50s50-22.386 50-50h50c0 39.582-22.997 73.793-56.359 90C177.003 116.207 200 150.418 200 190h-50c0-27.614-22.386-50-50-50s-50 22.386-50 50H0c0-39.582 22.997-73.793 56.359-90z"
        >
        </path>
      </mask>
      <g :mask="`url(#${maskId})`">
        <path fill="#fff" d="M200 0H0v200h200V0z"></path>
        <path fill="#FFF500" fill-opacity="0.44" d="M200 0H0v200h200V0z"></path>
        <g filter="url(#filter0_f_748_4418)">
          <ellipse
            cx="106"
            cy="22.5"
            fill="#FF00D6"
            rx="88"
            ry="49.5"
          ></ellipse>
          <ellipse
            cx="64.5"
            cy="155"
            fill="#07FFE1"
            rx="64.5"
            ry="45"
          ></ellipse>
          <path fill="#06F" d="M218 126H100v120h118V126z"></path>
        </g>
      </g>
    </template>
    <template v-slot:defs>
      <filter
        id="filter0_f_748_4418"
        width="378"
        height="433"
        x="-80"
        y="-107"
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
          result="effect1_foregroundBlur_748_4418"
          stdDeviation="40"
        ></feGaussianBlur>
      </filter>
    </template>
  </ShapeBase>
</template>

<script lang="ts" setup>
import ShapeBase from '@/ShapeBase.vue'

const shapeId = 'moon-15'
const maskId = `cs_mask_1_${shapeId}`
</script>
