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
          d="M193.481 31.456c13.436 23.267 5.44 52.966-17.886 66.43l-1.522.88c-15.647 9.031-25.278 25.67-25.278 43.672v2.001c0 26.82-21.845 48.561-48.793 48.561s-48.794-21.741-48.794-48.561v-1.998c0-18.002-9.631-34.642-25.278-43.674l-1.525-.88C1.079 84.423-6.917 54.723 6.519 31.456 20.031 8.058 50.078.046 73.534 13.586l1.205.695a50.559 50.559 0 0050.522 0l1.205-.696c23.456-13.54 53.503-5.527 67.015 17.87z"
        >
        </path>
      </mask>
      <g :mask="`url(#${maskId})`">
        <path fill="#fff" d="M200 0H0v200h200V0z"></path>
        <path fill="#FFF500" fill-opacity="0.44" d="M200 0H0v200h200V0z"></path>
        <g filter="url(#filter0_f_748_4574)">
          <ellipse
            cx="17.5"
            cy="80.5"
            fill="#FF00D6"
            rx="74.5"
            ry="49.5"
          ></ellipse>
          <ellipse
            cx="157.5"
            cy="105"
            fill="#07FFE1"
            rx="64.5"
            ry="45"
          ></ellipse>
          <path fill="#06F" d="M131 131H13v79h118v-79z"></path>
        </g>
      </g>
    </template>
    <template v-slot:defs>
      <filter
        id="filter0_f_748_4574"
        width="439"
        height="339"
        x="-137"
        y="-49"
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
          result="effect1_foregroundBlur_748_4574"
          stdDeviation="40"
        ></feGaussianBlur>
      </filter>
    </template>
  </ShapeBase>
</template>

<script lang="ts" setup>
import ShapeBase from '../../ShapeBase.vue'

const shapeId = 'flower-15'
const maskId = `cs_mask_1_${shapeId}`
</script>
