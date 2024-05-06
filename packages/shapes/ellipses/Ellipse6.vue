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
          d="M200 25c0 13.807-11.193 25-25 25s-25-11.193-25-25 11.193-25 25-25 25 11.193 25 25zM200 175c0 13.807-11.193 25-25 25s-25-11.193-25-25 11.193-25 25-25 25 11.193 25 25zM175 125c13.807 0 25-11.193 25-25s-11.193-25-25-25-25 11.193-25 25 11.193 25 25 25zM125 175c0 13.807-11.193 25-25 25s-25-11.193-25-25 11.193-25 25-25 25 11.193 25 25zM100 50c13.807 0 25-11.193 25-25S113.807 0 100 0 75 11.193 75 25s11.193 25 25 25zM50 175c0 13.807-11.193 25-25 25S0 188.807 0 175s11.193-25 25-25 25 11.193 25 25zM100 125c13.807 0 25-11.193 25-25s-11.193-25-25-25-25 11.193-25 25 11.193 25 25 25zM50 25c0 13.807-11.193 25-25 25S0 38.807 0 25 11.193 0 25 0s25 11.193 25 25zM25 125c13.807 0 25-11.193 25-25S38.807 75 25 75 0 86.193 0 100s11.193 25 25 25z"
        >
        </path>
      </mask>
      <g :mask="`url(#${maskId})`">
        <path fill="#fff" d="M200 0H0v200h200V0z"></path>
        <path fill="#FFFDEA" d="M200 0H0v200h200V0z"></path>
        <path
          fill="url(#paint0_radial_748_4763)"
          d="M200 0H0v200h200V0z"
        ></path>
        <path
          fill="url(#paint1_radial_748_4763)"
          d="M200 0H0v200h200V0z"
        ></path>
        <path
          fill="url(#paint2_radial_748_4763)"
          d="M200 0H0v200h200V0z"
        ></path>
        <path
          fill="url(#paint3_radial_748_4763)"
          d="M200 0H0v200h200V0z"
        ></path>
      </g>
    </template>
    <template v-slot:defs>
      <radialGradient
        id="paint0_radial_748_4763"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="matrix(81.99998 6 -6 81.99998 11.5 100)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#00C5DF"></stop>
        <stop offset="1" stop-color="#0CE548" stop-opacity="0"></stop>
      </radialGradient>
      <radialGradient
        id="paint1_radial_748_4763"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="rotate(73.352 43.022 75.99) scale(162.304)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FF58E4"></stop>
        <stop offset="0.383" stop-color="#FF7776"></stop>
        <stop offset="1" stop-color="#FFE500" stop-opacity="0"></stop>
      </radialGradient>
      <radialGradient
        id="paint2_radial_748_4763"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="rotate(-86.927 139.95 32.493) scale(74.6073)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.355" stop-color="#00F0FF"></stop>
        <stop offset="1" stop-color="#FFD977" stop-opacity="0"></stop>
      </radialGradient>
      <radialGradient
        id="paint3_radial_748_4763"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="rotate(-123.011 105.927 34.745) scale(93.6122)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FFE500"></stop>
        <stop offset="1" stop-color="#FFE927" stop-opacity="0"></stop>
      </radialGradient>
    </template>
  </ShapeBase>
</template>

<script lang="ts" setup>
import ShapeBase from '../../ShapeBase.vue'

const shapeId = 'ellipse-6'
const maskId = `cs_mask_1_${shapeId}`
</script>
