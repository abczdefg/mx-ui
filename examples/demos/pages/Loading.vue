<template>
  <demo-page title="加载">
    <section class="demo-section demo-section__loading">
      <p class="demo-section__title">Loading</p>
      <div class="demo-section__body padding">
        <mx-loading></mx-loading>
      </div>
    </section>
  </demo-page>
</template>
<script>
import DemoPage from '@examples/demos/base/DemoPage.vue';
export default {
  name: 'LoadingPage',
  components: {
    DemoPage
  },
  data() {
    return {
    };
  }
};
</script>
<style lang="less">
  .demo-section__loading {
  }
</style>
