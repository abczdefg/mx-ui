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
