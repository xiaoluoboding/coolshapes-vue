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
          d="M91.317 6.8l.028-.098c2.483-8.71 14.826-8.71 17.31 0l.027.098.083.293a122 122 0 0084.142 84.142l.293.082.098.028c8.709 2.484 8.709 14.826 0 17.31a5.593 5.593 0 01-.098.028l-.293.082c-40.751 11.541-72.602 43.391-84.142 84.142l-.083.293-.027.098c-2.484 8.709-14.827 8.709-17.31 0a21.647 21.647 0 01-.028-.098l-.082-.293a122.002 122.002 0 00-84.143-84.142l-.292-.082-.098-.028c-8.71-2.484-8.71-14.826 0-17.31l.098-.028.292-.082A122 122 0 0091.235 7.093l.082-.293z"
        >
        </path>
      </mask>
      <g :mask="`url(#${maskId})`">
        <path fill="#fff" d="M200 0H0v200h200V0z"></path>
        <path
          fill="url(#paint0_radial_748_4283)"
          d="M200 0H0v200h200V0z"
        ></path>
        <path
          fill="url(#paint1_radial_748_4283)"
          d="M200 0H0v200h200V0z"
        ></path>
      </g>
    </template>
    <template v-slot:defs>
      <radialGradient
        id="paint0_radial_748_4283"
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
        id="paint1_radial_748_4283"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="rotate(-20.037 348.972 -25.908) scale(135.715)"
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

const shapeId = 'star-10'
const maskId = `cs_mask_1_${shapeId}`
</script>
