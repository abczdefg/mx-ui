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
