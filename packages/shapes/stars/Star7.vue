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
          d="M149.921 50C122.336 50.086 100 72.44 100 100c0-27.561-22.336-49.915-49.921-50C77.664 49.915 100 27.562 100 0c0 27.562 22.336 49.915 49.921 50zM99.842 100c-27.585.086-49.921 22.439-49.921 50 0-27.561-22.336-49.915-49.921-50 27.585-.085 49.921-22.438 49.921-50 0 27.562 22.336 49.915 49.921 50zM200 100c-27.585.086-49.921 22.439-49.921 50 0-27.561-22.336-49.915-49.921-50 27.585-.085 49.921-22.438 49.921-50 0 27.562 22.336 49.915 49.921 50zM149.921 150c-27.585.086-49.921 22.439-49.921 50 0-27.561-22.336-49.915-49.921-50C77.664 149.915 100 127.562 100 100c0 27.562 22.336 49.915 49.921 50z"
        ></path>
      </mask>
      <g :mask="`url(#${maskId})`">
        <path fill="#fff" d="M200 0H0v200h200V0z"></path>
        <path fill="#EE46D3" d="M200 0H0v200h200V0z"></path>
        <g filter="url(#filter0_f_748_4262)">
          <path fill="#F2371F" d="M121 15H15v92h106V15z"></path>
          <path fill="#00F0FF" d="M173 90H58v86h115V90z"></path>
        </g>
      </g>
    </template>
    <template v-slot:defs>
      <filter
        id="filter0_f_748_4262"
        width="283"
        height="286"
        x="-47.5"
        y="-47.5"
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
          result="effect1_foregroundBlur_748_4262"
          stdDeviation="31.25"
        ></feGaussianBlur>
      </filter>
    </template>
  </ShapeBase>
</template>

<script lang="ts" setup>
import ShapeBase from '@/ShapeBase.vue'

const shapeId = 'star-7'
const maskId = `cs_mask_1_${shapeId}`
</script>
