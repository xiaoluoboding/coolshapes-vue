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
          d="M130 0H70v70H0v60h70v70h60v-70h70V70h-70V0z"
        ></path>
      </mask>
      <g :mask="`url(#${maskId})`">
        <path fill="#fff" d="M200 0H0v200h200V0z"></path>
        <path fill="#fff" d="M200 0H0v200h200V0z"></path>
        <path
          fill="url(#paint0_radial_748_5088)"
          d="M200 0H0v200h200V0z"
        ></path>
        <path
          fill="url(#paint1_radial_748_5088)"
          d="M200 0H0v200h200V0z"
        ></path>
        <g filter="url(#filter0_f_748_5088)">
          <path fill="#00F0FF" d="M151 82H49v110h102V82z"></path>
        </g>
      </g>
    </template>
    <template v-slot:defs>
      <filter
        id="filter0_f_748_5088"
        width="262"
        height="270"
        x="-31"
        y="2"
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
          result="effect1_foregroundBlur_748_5088"
          stdDeviation="40"
        ></feGaussianBlur>
      </filter>
      <radialGradient
        id="paint0_radial_748_5088"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="rotate(116.694 71.023 87.946) scale(199.234)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FFF500"></stop>
        <stop offset="1" stop-color="#FF00D6" stop-opacity="0"></stop>
      </radialGradient>
      <radialGradient
        id="paint1_radial_748_5088"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="rotate(48.452 -12.085 35.502) scale(223.143)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FF00D6"></stop>
        <stop offset="0.461" stop-color="#FF7171" stop-opacity="0.84"></stop>
        <stop offset="1" stop-color="#FFF500" stop-opacity="0"></stop>
      </radialGradient>
    </template>
  </ShapeBase>
</template>

<script lang="ts" setup>
import ShapeBase from '../../ShapeBase.vue'

const shapeId = 'rectangle-5'
const maskId = `cs_mask_1_${shapeId}`
</script>
