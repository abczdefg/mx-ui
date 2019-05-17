<template>
  <div class="mx-cell">
    <div class="mx-cell__title">
      <slot name="title">
        <span v-text="title"></span>
      </slot>
    </div>
    <div class="mx-cell__value">
      <slot name="value">
        <span v-text="value"></span>
      </slot>
    </div>
  </div>
</template>
<script>
import create from '../../utils/create-component';
export default create({
  name: 'mx-cell',
  props: {
    title: String,
    value: {}
  }
});
</script>
