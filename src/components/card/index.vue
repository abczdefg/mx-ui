<template>
  <div class="mx-card">
    <div class="mx-card__header">
      <slot name="header">
        <span v-text="header"></span>
      </slot>
    </div>
    <div class="mx-card__body">
      <div class="mx-card__item" v-for="(item, i) in body" :key="i">
        <label class="mx-card__label">{{item.label}}</label>
        <span class="mx-card__value">{{item.value}}</span>
      </div>
    </div>
    <div class="mx-card__footer">
      <slot name="footer">
        <span v-text="footer"></span>
      </slot>
    </div>
  </div>
</template>
<script>
import create from '../../utils/create-component';
export default create({
  name: 'mx-card',
  props: {
    header: String,
    body: {
      type: Array,
      default: () => []
    },
    footer: String
  }
});
</script>
<style lang="less">
  @border-bottom: {
    position: absolute;
    content: " ";
    left: 0;
    bottom: 0;
    right: 0;
    border-bottom: 1px solid @gray-light;
  }
  .mx-card {
    border: 1px solid @gray-light;
    background: @white;
    &__header {
      position: relative;
      padding: 10px 15px;
      line-height: 30px;
      &:after {
        @border-bottom();
      }
    }
    &__body {
      position: relative;
      padding: 10px 15px;
      line-height: 30px;
      &:after {
        @border-bottom();
      }
    }
    &__footer {
      position: relative;
      padding: 10px 15px;
      text-align: center;
      line-height: 20px;
    }
    &__item {
      display: flex;
      justify-content: space-between;
    }
    &__label {
      display: inline-block;
      width: 40%;
      color: @black;
    }
    &__value {
      display: inline-block;
      color: @gray;
    }
  }
</style>
