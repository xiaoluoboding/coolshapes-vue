<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 200 200"
    width="400"
    height="400"
    class="coolshapes moon-4"
  >
    <g clip-path="url(#cs_clip_1_moon-4)">
      <mask
        id="cs_mask_1_moon-4"
        style="mask-type: alpha"
        width="200"
        height="200"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path
          fill="#fff"
          d="M27 199.999c-17.334-27.301-27-62.937-27-100C0 62.937 9.666 27.301 27 0v199.999zM200 200a100.003 100.003 0 01-100-100A100.003 100.003 0 01200 0v200zM60.29 175.485C70.51 186.396 82.715 194.701 96 200V0C82.716 5.299 70.51 13.604 60.29 24.515 41.535 44.535 31 71.687 31 100c0 28.312 10.536 55.465 29.29 75.485z"
        ></path>
      </mask>
      <g mask="url(#cs_mask_1_moon-4)">
        <path fill="#07FFE1" d="M200 0H0v200h200V0z"></path>
        <path
          fill="url(#paint0_linear_748_5008)"
          d="M200 0H0v200h200V0z"
        ></path>
      </g>
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_748_5008"
        x1="38"
        x2="119"
        y1="14.5"
        y2="181.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FFE500"></stop>
        <stop offset="1" stop-color="#07FFE1"></stop>
      </linearGradient>
      <clipPath id="cs_clip_1_moon-4">
        <path fill="#fff" d="M0 0H200V200H0z"></path>
      </clipPath>
    </defs>
    <g style="mix-blend-mode: overlay" mask="url(#cs_mask_1_moon-4)">
      <path
        fill="gray"
        stroke="transparent"
        d="M200 0H0v200h200V0z"
        filter="url(#cs_noise_1_moon-4)"
      ></path>
    </g>
    <defs>
      <filter
        id="cs_noise_1_moon-4"
        width="100%"
        height="100%"
        x="0%"
        y="0%"
        filterUnits="objectBoundingBox"
      >
        <feTurbulence
          baseFrequency="0.6"
          numOctaves="5"
          result="out1"
          seed="4"
        ></feTurbulence>
        <feComposite
          in="out1"
          in2="SourceGraphic"
          operator="in"
          result="out2"
        ></feComposite>
        <feBlend
          in="SourceGraphic"
          in2="out2"
          mode="overlay"
          result="out3"
        ></feBlend>
      </filter>
    </defs>
  </svg>
</template>
