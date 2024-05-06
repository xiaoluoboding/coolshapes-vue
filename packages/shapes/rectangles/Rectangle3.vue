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
        <path fill="#fff" d="M100 0l100 100-100 100.001L0 100 100 0z"></path>
      </mask>
      <g :mask="`url(#${maskId})`">
        <path fill="#fff" d="M200 0H0v200h200V0z"></path>
        <path fill="#FFF2AF" d="M200 0H0v200h200V0z"></path>
        <g filter="url(#filter0_f_748_5109)">
          <path
            fill="#EE46D3"
            d="M163.125 45.75H28.375v148.5h134.75V45.75z"
          ></path>
          <path
            fill="#FFC700"
            d="M121.25 13.625H8V144.75h113.25V13.625z"
          ></path>
          <path fill="#F2371F" d="M174.875 5h-120v146.375h120V5z"></path>
          <path
            fill="#FFC700"
            d="M164.25 43.125H20.625v112H164.25v-112z"
          ></path>
          <path fill="#00C5DF" d="M200 85H61v105h139V85z"></path>
        </g>
      </g>
    </template>
    <template v-slot:defs>
      <filter
        id="filter0_f_748_5109"
        width="317"
        height="314.25"
        x="-54.5"
        y="-57.5"
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
          result="effect1_foregroundBlur_748_5109"
          stdDeviation="31.25"
        ></feGaussianBlur>
      </filter>
    </template>
  </ShapeBase>
</template>

<script lang="ts" setup>
import ShapeBase from '@/ShapeBase.vue'

const shapeId = 'rectangle-3'
const maskId = `cs_mask_1_${shapeId}`
</script>
