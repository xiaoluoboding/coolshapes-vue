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
          d="M200.001 100L100 0 0 100l100 100.001L200.001 100zM140 64a4 4 0 00-4-4H64a4 4 0 00-4 4v72a4 4 0 004 4h72a4 4 0 004-4V64z"
          clip-rule="evenodd"
        ></path>
      </mask>
      <g :mask="`url(#${maskId})`">
        <path fill="#fff" d="M200 0H0v200h200V0z"></path>
        <path fill="#FFF500" fill-opacity="0.23" d="M200 0H0v200h200V0z"></path>
        <g filter="url(#filter0_f_748_5099)">
          <path fill="#06F" d="M189 120H41v120h148V120z"></path>
          <ellipse cx="56" cy="92" fill="#07FFE1" rx="84" ry="56"></ellipse>
          <ellipse
            cx="112"
            cy="32.5"
            fill="#FF00D6"
            fill-opacity="0.7"
            rx="88"
            ry="49.5"
          ></ellipse>
        </g>
      </g>
    </template>
    <template v-slot:defs>
      <filter
        id="filter0_f_748_5099"
        width="388"
        height="417"
        x="-108"
        y="-97"
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
          result="effect1_foregroundBlur_748_5099"
          stdDeviation="40"
        ></feGaussianBlur>
      </filter>
    </template>
  </ShapeBase>
</template>

<script lang="ts" setup>
import ShapeBase from '../../ShapeBase.vue'

const shapeId = 'rectangle-4'
const maskId = `cs_mask_1_${shapeId}`
</script>
