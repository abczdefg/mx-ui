<template>
  <div
    class="mx-loading"
    :style="{
      'width': size,
      'height': size,
      'color': color
    }"
  >
    <span class="mx-loading__spinner">
      <svg class="mx-loading__circular" viewBox="5 5 50 50">
        <circle cx="30" cy="30" r="20" fill="none"/>
      </svg>
    </span>
  </div>
</template>
<script>
import create from '../../utils/create-component';
export default create({
  name: 'mx-loading',
  props: {
    size: {
      type: String,
      default: '30px'
    },
    color: {
      type: String,
      default: '#c9c9c9'
    }
  }
});
</script>
<style lang="less">
  .mx-loading {
    font-size: 0;
    display: inline-block;
    vertical-align: middle;

    &__spinner {
      width: 100%;
      height: 100%;
      display: inline-block;
      animation: mx-rotate 2s linear infinite;
    }

    &__circular {
      width: 100%;
      height: 100%;
      vertical-align: top;

      circle {
        stroke: currentColor;
        stroke-width: 3;
        stroke-linecap: round;
        animation: mx-circular 1.5s ease-in-out infinite;

      }
    }
  }

  @keyframes mx-circular {
    // 周长40pi < 150
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -40;
    }

    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -120;
    }
  }
</style>
