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
