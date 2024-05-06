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
          d="M170.71 170.711A100.001 100.001 0 01100 200v-99.775C99.877 127.736 77.54 150 50 150c-27.614 0-50-22.386-50-50s22.386-50 50-50c27.54 0 49.878 22.264 50 49.775V0a99.999 99.999 0 0170.71 170.711z"
        >
        </path>
      </mask>
      <g :mask="`url(#${maskId})`">
        <path fill="#fff" d="M200 0H0v200h200V0z"></path>
        <path fill="#907CFF" fill-opacity="0.6" d="M200 0H0v200h200V0z"></path>
        <g filter="url(#filter0_f_748_4488)">
          <path fill="#18A0FB" d="M212.25-20H100v139.75h112.25V-20z"></path>
          <path fill="#907CFF" d="M129.875 0H11v128.25h118.875V0z"></path>
          <path fill="#EE46D3" d="M84 75v142h136V75H84z"></path>
        </g>
      </g>
    </template>
    <template v-slot:defs>
      <filter
        id="filter0_f_748_4488"
        width="369"
        height="397"
        x="-69"
        y="-100"
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
          result="effect1_foregroundBlur_748_4488"
          stdDeviation="40"
        ></feGaussianBlur>
      </filter>
    </template>
  </ShapeBase>
</template>

<script lang="ts" setup>
import ShapeBase from '../../ShapeBase.vue'

const shapeId = 'moon-8'
const maskId = `cs_mask_1_${shapeId}`
</script>
