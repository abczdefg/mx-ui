<template>
  <component
    :is="tag"
    class="mx-button"
    :disabled="disabled"
    :class="[
      `mx-button--${type}`,
      { 'mx-button--block': block },
      { 'mx-button--disabled': disabled },
      { 'mx-button--loading': loading }
    ]"
    @click="onClick"
  >
    <span
      v-if="loading"
      class="mx-button__loading"
    >
      <mx-loading
        :color="type === 'default' ? void 0 : ''"
        size="24px"
      ></mx-loading>
    </span>
    <span
      class="mx-button__text"
      :style="{
        'opacity': loading ? 0 : void 0
      }"
    >
      <slot></slot>
    </span>
  </component>
</template>
<script>
import create from '../../utils/create-mixins-component';
export default create({
  name: 'mx-button',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    tag: {
      type: String,
      default: 'button'
    },
    block: Boolean,
    disabled: Boolean,
    loading: Boolean
  },
  methods: {
    onClick(e) {
      if (!this.loading && !this.disabled) {
        this.$emit('click', e);
      }
    }
  }
});
</script>
<style lang="less">
  .mx-button {
    position: relative;
    padding: 0 12px;
    max-width: 100%;
    height: 44px;
    line-height: 42px;
    border-radius: 4px;
    overflow: hidden;
    font-size: 14px;
    outline: none;

    &::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      opacity: 0;
      background: @black;
      content: " ";
    }

    &:active::after {
      opacity: .15;
    }

    &--disabled::after, &--loading::after {
      display: none;
    }

    &--block {
      width: 100%;
      display: block;
    }

    &--default {
      color: @button-default-color;
      border: 1px solid @button-default-border-color;
      background: @button-default-background-color;
    }
    &--primary {
      color: @button-primary-color;
      border: 1px solid @button-primary-border-color;
      background: @button-primary-background-color;
    }
    &--warning {
      color: @button-warning-color;
      border: 1px solid @button-warning-border-color;
      background: @button-warning-background-color;
    }
    &--danger {
      color: @button-danger-color;
      border: 1px solid @button-danger-border-color;
      background: @button-danger-background-color;
    }

    &--disabled {
      opacity: 0.5;
    }

    &__text {
      display: inline-block;
      max-width: 100%;
      overflow: hidden;
    }

    &__loading {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  }
</style>
