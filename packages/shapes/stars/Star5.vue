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
          d="M115.13 60.52L100 0 84.87 60.52 46.26 46.26l14.262 38.61L0 100l60.521 15.13-14.26 38.61 38.609-14.261L100 200l15.13-60.522 38.611 14.262-14.261-38.61L200 100l-60.521-15.13 14.261-38.61-38.61 14.26z"
        >
        </path>
      </mask>
      <g :mask="`url(#${maskId})`">
        <path fill="#fff" d="M200 0H0v200h200V0z"></path>
        <path
          fill="url(#paint0_radial_748_4249)"
          d="M200 0H0v200h200V0z"
        ></path>
        <path
          fill="url(#paint1_radial_748_4249)"
          d="M200 0H0v200h200V0z"
        ></path>
      </g>
    </template>
    <template v-slot:defs>
      <radialGradient
        id="paint0_radial_748_4249"
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
        id="paint1_radial_748_4249"
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
      <clipPath id="cs_clip_1_star-5">
        <path fill="#fff" d="M0 0H200V200H0z"></path>
      </clipPath>
    </template>
  </ShapeBase>
</template>

<script lang="ts" setup>
import ShapeBase from '../../ShapeBase.vue'

const shapeId = 'star-5'
const maskId = `cs_mask_1_${shapeId}`
</script>
