<template>
  <demo-page title="单元格">
    <section class="demo-section demo-section__cell">
      <p class="demo-section__title">Cell</p>
      <div class="demo-section__body">
        <mx-cell title="i am title" value="i am value"></mx-cell>
        <mx-cell>
          <span slot="title">
            <a href="javascript:;">title's slot</a>
          </span>
          <span slot="value">
            <a href="javascript:;">value's slot</a>
          </span>
        </mx-cell>
      </div>
    </section>
  </demo-page>
</template>
<script>
import DemoPage from '@examples/demos/base/DemoPage.vue';
export default {
  name: 'CellPage',
  components: {
    DemoPage
  },
  data() {
    return {};
  }
};
</script>
<style lang="less">

</style>
