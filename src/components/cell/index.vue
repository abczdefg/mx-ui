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
    value: String
  }
});
</script>
<style lang="less">
  .mx-cell {
    font-size: 16px;
    line-height: 24px;
    padding: 10px 15px;
    background: @white;
    border-top: 1px solid @border-color;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    &:last-child {
      border-bottom: 1px solid @border-color;
    }
    &__title {
      flex: 1;
      color: @black;
    }
    &__value {
      color: @gray;
      vertical-align: middle;
    }
  }
</style>
