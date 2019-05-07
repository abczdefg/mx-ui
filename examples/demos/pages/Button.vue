<template>
  <demo-page title="按钮">
    <section class="demo-section demo-section__button demo-section__button--type">
      <p class="demo-section__title">按钮类型</p>
      <div class="demo-section__body padding">
        <mx-button type="default">Default</mx-button>
        <mx-button type="primary">Primary</mx-button>
        <mx-button type="warning">Warning</mx-button>
        <mx-button type="danger">Danger</mx-button>
      </div>
    </section>
    <section class="demo-section demo-section__button demo-section__button--block">
      <p class="demo-section__title">块状按钮</p>
      <div class="demo-section__body padding">
        <mx-button type="default" :block="true">Default</mx-button>
        <mx-button type="primary" :block="true">Primary</mx-button>
      </div>
    </section>
    <section class="demo-section demo-section__button demo-section__button--type demo-section__button--disabled">
      <p class="demo-section__title">禁用按钮</p>
      <div class="demo-section__body padding">
        <mx-button type="default" :disabled="true">Default</mx-button>
        <mx-button type="primary" :disabled="true">Primary</mx-button>
      </div>
    </section>
    <section class="demo-section demo-section__button demo-section__button--type demo-section__button--disabled">
      <p class="demo-section__title">加载状态</p>
      <div class="demo-section__body padding">
        <mx-button type="default" :loading="true">Default</mx-button>
        <mx-button type="primary" :loading="true">Primary</mx-button>
        <mx-button type="primary" :block="true" :loading="true">Primary</mx-button>
      </div>
    </section>
  </demo-page>
</template>
<script>
import DemoPage from '@examples/demos/base/DemoPage.vue';
export default {
  name: 'ButtonPage',
  components: {
    DemoPage
  },
  data() {
    return {};
  },
  methods: {
  }
};
</script>
<style lang="less">
  .mx-button + .mx-button--block {
    margin-top: 12px;
  }
  .mx-button:not(.mx-button--block) + .mx-button:not(.mx-button--block) {
    margin-left: 12px;
  }
</style>
