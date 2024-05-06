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
          d="M200 100c0 55.228-44.772 100-100 100 37.555 0 68-30.445 68-68s-30.445-68-68-68-68 30.445-68 68 30.445 68 68 68C44.772 200 0 155.228 0 100S44.772 0 100 0s100 44.772 100 100z"
        >
        </path>
        <path
          fill="#fff"
          d="M100 200c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48z"
        ></path>
      </mask>
      <g :mask="`url(#${maskId})`">
        <path fill="#fff" d="M200 0H0v200h200V0z"></path>
        <path fill="#907CFF" fill-opacity="0.6" d="M200 0H0v200h200V0z"></path>
        <g filter="url(#filter0_f_748_4753)">
          <path fill="#18A0FB" d="M212.25-15H100v139.75h112.25V-15z"></path>
          <path fill="#907CFF" d="M133.875-7H15v128.25h118.875V-7z"></path>
          <path fill="#EE46D3" d="M223 68H81v146h142V68z"></path>
        </g>
      </g>
    </template>
    <template v-slot:defs>
      <filter
        id="filter0_f_748_4753"
        width="368"
        height="389"
        x="-65"
        y="-95"
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
          result="effect1_foregroundBlur_748_4753"
          stdDeviation="40"
        ></feGaussianBlur>
      </filter>
    </template>
  </ShapeBase>
</template>

<script lang="ts" setup>
import ShapeBase from '@/ShapeBase.vue'

const shapeId = 'ellipse-7'
const maskId = `cs_mask_1_${shapeId}`
</script>
