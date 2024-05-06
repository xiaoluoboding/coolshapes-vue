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
          d="M100 0c-5.406 0-9.68 4.583-9.302 9.976l5.692 81.308-53.47-61.518c-3.546-4.08-9.808-4.3-13.63-.477-3.823 3.823-3.604 10.085.476 13.631l61.518 53.47-81.308-5.692C4.583 90.321 0 94.594 0 100s4.583 9.679 9.976 9.302l81.308-5.692-61.518 53.47c-4.08 3.546-4.3 9.808-.477 13.631 3.823 3.822 10.085 3.603 13.631-.477l53.47-61.518-5.692 81.308C90.321 195.417 94.594 200 100 200s9.679-4.583 9.302-9.976l-5.692-81.308 53.47 61.518c3.546 4.08 9.808 4.299 13.631.477 3.822-3.823 3.603-10.085-.477-13.631l-61.519-53.47 81.309 5.692c5.393.377 9.976-3.896 9.976-9.302s-4.583-9.68-9.976-9.302l-81.308 5.692 61.518-53.47c4.08-3.546 4.299-9.808.477-13.63-3.823-3.823-10.085-3.604-13.631.476l-53.47 61.518 5.692-81.308C109.679 4.583 105.406 0 100 0z"
        >
        </path>
      </mask>
      <g :mask="`url(#${maskId})`">
        <path fill="#07FFE1" d="M200 0H0v200h200V0z"></path>
        <path
          fill="url(#paint0_linear_748_4849)"
          d="M200 0H0v200h200V0z"
        ></path>
      </g>
    </template>
    <template v-slot:defs>
      <linearGradient
        id="paint0_linear_748_4849"
        x1="38"
        x2="119"
        y1="14.5"
        y2="181.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FFE500"></stop>
        <stop offset="1" stop-color="#07FFE1"></stop>
      </linearGradient>
    </template>
  </ShapeBase>
</template>

<script lang="ts" setup>
import ShapeBase from '@/ShapeBase.vue'

const shapeId = 'wheel-2'
const maskId = `cs_mask_1_${shapeId}`
</script>
