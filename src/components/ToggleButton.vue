<template>
  <div class="toggle-button">
    <input
      type="checkbox"
      className="checkbox"
      :checked="isNoise"
      @change="handleToggleChange"
    />
    <div className="knobs">
      <span>Noise</span>
    </div>
    <div className="layer"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isNoise = ref(false)

const emit = defineEmits<{
  toggle: [value: boolean]
}>()

const handleToggleChange = () => {
  isNoise.value = !isNoise.value
  emit('toggle', isNoise.value)
}
</script>

<style scoped lang="scss">
.toggle-button {
  position: relative;
  width: 132px;
  height: 36px;
  overflow: hidden;
  .layer {
    width: 100%;
    background-color: transparent;
    box-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, 0.1);
    transition: 0.3s ease all;
    z-index: 1;
    border-radius: 18px;
  }

  .knobs {
    z-index: 2;
  }

  .knobs,
  .layer {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .checkbox {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    cursor: pointer;
    z-index: 3;
  }

  .knobs:before,
  .knobs:after,
  .knobs span {
    position: absolute;
    top: 0;
    width: 50%;
    height: 36px;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    line-height: 1;
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s ease all;
  }

  .knobs:before {
    content: '';
    left: 0;
    background: linear-gradient(
      180deg,
      rgba(65, 65, 65, 0.22) 0%,
      rgba(35, 35, 35, 0) 100%
    );
    box-shadow: inset 0px 0px 0px 1px #35353b;
  }

  .knobs:after {
    content: 'Solid';
    right: 0;
    color: #4e4e4e;
  }

  .knobs span {
    display: flex;
    color: #fff;
    z-index: 1;
  }

  .checkbox:checked + .knobs span {
    color: #4e4e4e;
  }

  .checkbox:checked + .knobs:before {
    left: 66px;
    background: linear-gradient(
      180deg,
      rgba(65, 65, 65, 0.22) 0%,
      rgba(35, 35, 35, 0) 100%
    );
    box-shadow: inset 0px 0px 0px 1px #35353b;
  }

  .checkbox:checked + .knobs:after {
    color: #fff;
  }
}
</style>
