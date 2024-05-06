<template>
  <a class="link-button" v-bind="$props">
    <slot />
  </a>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.link-button {
  display: flex;
  align-items: center;
  color: #ffffff;
  text-decoration: none;
  justify-content: center;
  cursor: pointer;
  outline: none;
  gap: 8px;
  background: linear-gradient(
    180deg,
    rgba(65, 65, 65, 0.22) 0%,
    rgba(35, 35, 35, 0) 100%
  );
  box-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, 0.12);
  padding: 12px 24px;
  border-radius: 24px;
  font-size: 16px;
  span {
    line-height: 24px;
    font-size: 18px;
    font-weight: 500;
  }
  &.blue {
    background: linear-gradient(274.9deg, #5418ff -37.07%, #451fd9 78.43%);
    box-shadow: inset 0px 2px 3.1px rgba(255, 255, 255, 0.2);
    &:hover {
      background: linear-gradient(274.9deg, #5418ff -37.07%, #451fd9 78.43%);
      box-shadow: inset 0px 3px 4px rgba(255, 255, 255, 0.2);
    }
  }
  &:hover {
    background: linear-gradient(
      180deg,
      rgba(65, 65, 65, 0.42) 0%,
      rgba(35, 35, 35, 0) 100%
    );
    color: rgba(255, 255, 255, 0.8);
  }
  @media screen and (max-width: 768px) {
    min-width: 250px;
    font-size: 14px;
    padding: 10px 24px;
  }
}
</style>
