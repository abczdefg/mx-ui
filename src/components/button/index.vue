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
