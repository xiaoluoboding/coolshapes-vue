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
          d="M34.315 0A117.157 117.157 0 10200 165.685L34.315 0z"
        ></path>
      </mask>
      <g :mask="`url(#${maskId})`">
        <path fill="#000" d="M200 0H0v200h200V0z"></path>
        <path fill="#EE46D3" fill-opacity="0.79" d="M200 0H0v200h200V0z"></path>
        <g filter="url(#filter0_f_748_4428)">
          <path fill="#FFC700" d="M137 60H26v140h111V60z"></path>
          <path fill="#1BC47D" d="M236 106H78v136h158V106z"></path>
        </g>
      </g>
    </template>
    <template v-slot:defs>
      <filter
        id="filter0_f_748_4428"
        width="335"
        height="307"
        x="-36.5"
        y="-2.5"
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
          result="effect1_foregroundBlur_748_4428"
          stdDeviation="31.25"
        ></feGaussianBlur>
      </filter>
    </template>
  </ShapeBase>
</template>

<script lang="ts" setup>
import ShapeBase from '../../ShapeBase.vue'

const shapeId = 'moon-14'
const maskId = `cs_mask_1_${shapeId}`
</script>
