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
          d="M100 150c27.614 0 50-22.386 50-50s-22.386-50-50-50-50 22.386-50 50 22.386 50 50 50zm0 50c55.228 0 100-44.772 100-100S155.228 0 100 0 0 44.772 0 100s44.772 100 100 100z"
          clip-rule="evenodd"
        ></path>
      </mask>
      <g :mask="`url(#${maskId})`">
        <path fill="#fff" d="M200 0H0v200h200V0z"></path>
        <path fill="#FAFF02" fill-opacity="0.33" d="M200 0H0v200h200V0z"></path>
        <g filter="url(#filter0_f_844_2811)">
          <path fill="#FFE500" d="M110 32H18v68h92V32z"></path>
          <path fill="#FF001F" d="M188-24H15v98h173v-98z"></path>
          <path fill="#18A0FB" d="M175 70H5v156h170V70z"></path>
          <path fill="#FF00D6" d="M230 51H100v103h130V51z"></path>
        </g>
      </g>
    </template>
    <template v-slot:defs>
      <filter
        id="filter0_f_844_2811"
        width="385"
        height="410"
        x="-75"
        y="-104"
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
          result="effect1_foregroundBlur_844_2811"
          stdDeviation="40"
        ></feGaussianBlur>
      </filter>
    </template>
  </ShapeBase>
</template>

<script lang="ts" setup>
import ShapeBase from '@/ShapeBase.vue'

const shapeId = 'ellipse-12'
const maskId = `cs_mask_1_${shapeId}`
</script>
