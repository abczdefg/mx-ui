<template>
  <div class="demo-page">
    <mx-nav-bar
      :title="title"
      :arrow="arrow"
      @click-left="onLeftClick"
      @click-right="onRightClick"
    >
    </mx-nav-bar>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'DemoPage',
  props: {
    title: String,
    arrow: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onLeftClick() {
      this.$router.go(-1);
    },
    onRightClick() {
      console.log('right');
    }
  }
};
</script>
<style lang="less">
.demo-page {
  .demo-section {
    padding: 20px 0;
    &__title {
      font-size: 12px;
      margin-bottom: 12px;
      padding: 0 15px;
      display: block;
      color: #888;
    }
    &__body.padding {
      padding: 0 12px;
    }
  }
}
</style>
