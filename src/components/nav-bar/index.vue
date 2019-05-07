<template>
  <div
    class="mx-nav-bar"
    :class="{
      'mx-nav-bar--fixed': fixed
    }"
  >
    <div class="mx-nav-bar__left" @click="$emit('click-left')">
      <slot name="left">
        <i
          v-if="arrow"
          class="mx-icon mx-icon-back mx-nav-bar__arrow"
        >
        </i>
        <span
          v-if="leftText"
          class="mx-nav-bar__text"
        >
        {{leftText}}
        </span>
      </slot>
    </div>
    <div class="mx-nav-bar__title mx-ellipsis">{{title}}</div>
    <div class="mx-nav-bar__right" @click="$emit('click-right')">
      <slot name="right">
        <span
          v-if="rightText"
          class="mx-nav-bar__text"
        >
        {{rightText}}
        </span>
      </slot>
    </div>
  </div>
</template>
<script>
import create from '../../utils/create-component';
export default create({
  name: 'mx-nav-bar',
  props: {
    title: String,
    fixed: Boolean,
    arrow: {
      type: Boolean,
      default: false
    },
    leftText: String,
    rightText: String
  }
});
</script>
<style lang="less">
  .mx-nav-bar {
    position: relative;
    height: 45px;
    line-height: 45px;
    text-align: center;
    background-color: @white;
    font-size: 16px;
    border-bottom: 1px solid @gray-light;
    box-shadow: 0 2px 5px @gray-light;

    &--fixed {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
    }
    &__title {
      margin: 0 auto;
      width: 60%;
    }
    &__left,
    &__right {
      position: absolute;
      top: 0;
      padding: 0 10px;
      font-size: 14px;
    }
    &__left {
      left: 5px;
    }
    &__right {
      right: 5px;
    }
    &__text {
      color: @blue;
      vertical-align: middle;
    }
    &__arrow {
      line-height: normal;
      font-size: 18px;
      color: @blue;
      vertical-align: middle;
    }
  }
</style>
