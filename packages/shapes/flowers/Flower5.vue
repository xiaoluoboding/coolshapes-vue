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
          d="M140.395 59.605C175.502 64.644 200 77.28 200 100c0 22.72-24.498 35.356-59.605 40.395C135.356 175.502 122.72 200 100 200c-22.72 0-35.356-24.498-40.395-59.605C24.498 135.356 0 122.72 0 100c0-22.72 24.498-35.356 59.605-40.395C64.644 24.498 77.28 0 100 0c22.72 0 35.356 24.498 40.395 59.605z"
        >
        </path>
      </mask>
      <g :mask="`url(#${maskId})`">
        <path fill="#fff" d="M200 0H0v200h200V0z"></path>
        <path fill="#FF6C02" fill-opacity="0.19" d="M200 0H0v200h200V0z"></path>
        <g filter="url(#filter0_f_748_4670)">
          <path fill="#FFC700" d="M194 128H41v118h153V128z"></path>
          <path fill="#FFE500" d="M106 13H21v87h85V13z"></path>
          <path fill="#00C5DF" d="M95 56H-23v87H95V56z"></path>
        </g>
      </g>
    </template>
    <template v-slot:defs>
      <filter
        id="filter0_f_748_4670"
        width="342"
        height="358"
        x="-85.5"
        y="-49.5"
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
          result="effect1_foregroundBlur_748_4670"
          stdDeviation="31.25"
        ></feGaussianBlur>
      </filter>
    </template>
  </ShapeBase>
</template>

<script lang="ts" setup>
import ShapeBase from '../../ShapeBase.vue'

const shapeId = 'flower-5'
const maskId = `cs_mask_1_${shapeId}`
</script>
