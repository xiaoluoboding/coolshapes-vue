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
          d="M200 9V0H0v9c0 39.994 23.478 74.504 57.403 90.5C23.478 115.496 0 150.006 0 190v10h200v-10c0-39.994-23.478-74.504-57.403-90.5C176.522 83.504 200 48.994 200 9z"
        >
        </path>
      </mask>
      <g :mask="`url(#${maskId})`">
        <path fill="#fff" d="M199.75.5h-200v200h200V.5z"></path>
        <path
          fill="#F2371F"
          fill-opacity="0.181"
          d="M199.75.5h-200v200h200V.5z"
        ></path>
        <g filter="url(#filter0_f_748_4536)">
          <path fill="#FFE500" d="M120 41H15v119h105V41z"></path>
          <path fill="#FF28DD" d="M223.25-15H100v140.875h123.25V-15z"></path>
        </g>
      </g>
    </template>
    <template v-slot:defs>
      <filter
        id="filter0_f_748_4536"
        width="333.25"
        height="300"
        x="-47.5"
        y="-77.5"
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
          result="effect1_foregroundBlur_748_4536"
          stdDeviation="31.25"
        ></feGaussianBlur>
      </filter>
    </template>
  </ShapeBase>
</template>

<script lang="ts" setup>
import ShapeBase from '../../ShapeBase.vue'

const shapeId = 'moon-3'
const maskId = `cs_mask_1_${shapeId}`
</script>
