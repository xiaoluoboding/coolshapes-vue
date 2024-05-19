<template>
  <div class="shape-wrap">
    <slot />
    <div class="shape-btn-wrap copy-btn">
      <div v-if="isCopy" class="notify">
        <h4>{{ infoText }}</h4>
      </div>
      <div class="copy-row">
        <button class="svg-btn" @click="handleCopySvg">
          <CopyIcon :size="16" />
          svg
        </button>
        <button class="vue-btn" @click="handleCopyVue">
          <CopyIcon :size="16" />
          vue
        </button>
      </div>
      <div class="dwn-row">
        <button class="svg-line-btn" @click="handleDownloadSVG">
          <DownloadIcon :size="16" />
          svg
        </button>
        <button class="vue-line-btn" @click="handleSvgToPng">
          <DownloadIcon :size="16" />
          PNG
        </button>
      </div>
    </div>
    <canvas ref="canvasRef" style="display: none" />
    <img ref="imgRef" style="display: none" />
    <img ref="pngRef" style="display: none" />
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, useSlots, createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import copy from 'copy-to-clipboard'
import { CopyIcon, DownloadIcon } from '~/components/icons'
import {
  convertToCamelCase,
  encodeImage,
  getImageData,
  loadImage,
  svgBase64,
  unit8toPng
} from '~/utils/helper'

const slots = useSlots()

const props = withDefaults(
  defineProps<{
    type: string
    noise: boolean
    index: number
  }>(),
  {
    type: 'star',
    noise: false,
    index: 1
  }
)

const infoText = ref('')
const isCopy = ref(false)
const svgName = ref('')
const svg = ref<string>('')
const imgRef = ref<HTMLImageElement | null>(null)
const canvasRef = ref<HTMLCanvasElement | null>(null)
const imageSrc = ref('')
const pngRef = ref<HTMLImageElement | null>(null)

const templatfy = (svg: string) => {
  return `<template>
  ${svg}
<\/template>

<script lang="ts" setup>
<\/script>

<style scoped>
<\/style>
`
}

const handleCopySvg = () => {
  try {
    copy(svg.value)
    isCopy.value = true
    infoText.value = 'SVG Copied!'
    setTimeout(() => {
      isCopy.value = false
    }, 1400)
  } catch (error) {
    console.error('Copy failed:', error)
  }
}

watch(
  () => props.noise,
  async () => {
    // https://vuejs.org/api/ssr#rendertostring
    const svgSlot = slots[`default`]?.()
    const app = createSSRApp({
      render: () => svgSlot
    })
    const appString = await renderToString(app)
    svg.value = appString
      .replaceAll(/<!--\[-->/g, '')
      .replaceAll(/<!--]-->/g, '')
    let name = `${props.type}_${props.index}`
    svgName.value = convertToCamelCase(name)
  },
  {
    immediate: true,
    deep: true
  }
)

const handleCopyVue = () => {
  const component = templatfy(svg.value)
  try {
    copy(component)
    isCopy.value = true
    infoText.value = 'Vue Component Copied!'
    setTimeout(() => {
      isCopy.value = false
    }, 1400)
  } catch (error) {
    console.error('Copy failed:', error)
  }
}

const handleSvgToPng = async () => {
  const imgSource = svgBase64(svg.value)

  if (imgRef.value && pngRef.value && canvasRef.value) {
    const svgImg = await loadImage(imgSource, imgRef.value)
    const { imageData, canvas, context } = getImageData(svgImg, canvasRef.value)

    const imageEncoded = await encodeImage(canvas, context!!, imageData!!)
    const dataUrl = unit8toPng(imageEncoded)
    imageSrc.value = dataUrl
    const a = document.createElement('a')
    a.href = dataUrl
    a.download = 'CS_' + svgName.value + '.png'
    document.body.appendChild(a)

    a.click()
    document.body.removeChild(a)
  }
}

const handleDownloadSVG = async () => {
  try {
    const svgData = svg.value
    const blob = new Blob([svgData], { type: 'image/svg+xml' })
    const url = URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = 'CS_' + svgName.value + '.svg'
    document.body.appendChild(a)

    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  } catch (error) {
    console.error('Error downloading SVG:', error)
  }
}
</script>

<style scoped lang="scss">
.shape-wrap {
  border-radius: 36px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 40px;
  justify-content: center;
  align-items: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  cursor: pointer;
  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: inherit;
    z-index: -1;
  }
  &::before {
  }
  &::after {
    inset: 0;
    box-shadow: inset 0 0px 0px 1px rgba(255, 255, 255, 0.04);
  }
}
.shape-wrap:hover,
.shape-wrap.active {
  background: radial-gradient(
      76% 25% at 50% -15%,
      rgba(32, 88, 233, 0.3) 0%,
      rgba(12, 12, 12, 0) 100%
    ),
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.02) 100%
    );
  .copy-btn {
    opacity: 1;
  }
  .dwn-row {
    transform: translateY(0);
  }
  .copy-row {
    transform: translateY(0);
  }
  &::before {
  }
  &::after {
    inset: 0;
    box-shadow: inset 0 0px 0px 1px rgba(255, 255, 255, 0.04);
  }
}
.shape-btn-wrap {
  border-radius: 36px;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  overflow: hidden;
  height: 100%;
  width: 100%;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) !important;
  gap: 12px;
  background: radial-gradient(
      76% 25% at 50% -15%,
      rgba(32, 88, 233, 0.4) 0%,
      rgba(12, 12, 12, 0.3) 100%
    ),
    linear-gradient(
      180deg,
      rgba(12, 12, 12, 0.1) 0%,
      rgba(12, 12, 12, 0.2) 100%
    );
  backdrop-filter: blur(22px) !important;
  -webkit-backdrop-filter: blur(22px) !important;
  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: inherit;
    z-index: -1;
  }
  &::before {
  }
  &::after {
    inset: 0;
    box-shadow: inset 0 0px 0px 1px rgba(255, 255, 255, 0.04);
  }
  .dwn-row,
  .copy-row {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    gap: 16px;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) !important;
    @media screen and (max-width: 768px) {
      gap: 12px;
    }
  }
  .dwn-row {
    transform: translateY(20px);
  }
  .copy-row {
    transform: translateY(-20px);
  }
}
.svg-btn,
.vue-btn,
.svg-line-btn,
.vue-line-btn {
  position: relative;
  font-weight: 600;
  font-size: 14px;
  line-height: 114.1%;
  display: inline-flex;
  align-items: center;
  padding: 8px 14px;
  border-radius: 20px;
  text-transform: uppercase;
  gap: 2px;
  min-width: 78px;
  justify-content: center;
  color: rgba(255, 255, 255, 0.92);
  background: transparent;
}
.svg-btn {
  background: linear-gradient(
      284.15deg,
      #ffc83a -201.13%,
      #ff008a -108.68%,
      #ffd600 -16.22%,
      #17bde1 76.23%
    ),
    rgba(44, 47, 58, 0.44);
}
.svg-line-btn::before,
.vue-line-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 20px;
  padding: 10px;
  border: 2px solid transparent;
  background: linear-gradient(
      284.15deg,
      #ffc83a -201.13%,
      #ff008a -108.68%,
      #ffd600 -16.22%,
      #17bde1 76.23%
    )
    border-box;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}
.vue-btn {
  background: linear-gradient(
      284.86deg,
      #ffc83a -8.52%,
      #ff008a 77.46%,
      #6100ff 163.44%,
      #178ce1 249.41%
    ),
    rgba(44, 47, 58, 0.44);
}
.vue-line-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 20px;
  padding: 10px;
  border: 2px solid transparent;
  background: linear-gradient(
      284.86deg,
      #ffc83a -8.52%,
      #ff008a 77.46%,
      #6100ff 163.44%,
      #178ce1 249.41%
    )
    border-box;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}
.copy-row,
.dwn-row {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 16px;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.dwn-row {
  transform: translateY(20px);
}
.copy-row {
  transform: translateY(-20px);
}
.notify {
  position: absolute;
  top: 20px;
}
.notify h4 {
  background: rgba(12, 12, 12, 0.4);
  border-radius: 6px;
  font-weight: 500;
  color: #70fff6;
  padding: 6px 18px;
}
</style>
