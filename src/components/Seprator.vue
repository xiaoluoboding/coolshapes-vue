<template>
  <div class="separator">
    <slot />
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.separator {
  position: relative;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  &::before {
    content: '';
    height: 1px;
    position: absolute;
    width: calc(50% - 80px);
    bottom: 50%;
    background: #1c1f21;
  }
  &::after {
    content: '';
    height: 1px;
    position: absolute;
    width: calc(50% - 80px);
    right: 0;
    bottom: 50%;
    background: #1c1f21;
  }
}
</style>
