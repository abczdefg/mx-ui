<template>
  <demo-page title="卡片">
    <section class="demo-section demo-section__card">
      <p class="demo-section__title">Card</p>
      <div class="demo-section__body padding">
        <mx-card
          header="标题"
          :body="[{
            label: '姓名',
            value: '猫西'
          }, {
            label: '学号',
            value: '19950612'
          }]"
          footer="开始"
        >
        </mx-card>
        <mx-card :body="[{ label: '价格', value: '2元' }]">
          <a href="javascript:;" slot="header">苹果</a>
          <button slot="footer">立刻购买</button>
        </mx-card>
      </div>
    </section>
  </demo-page>
</template>
<script>
import DemoPage from '@examples/demos/base/DemoPage.vue';
export default {
  name: 'CardPage',
  components: {
    DemoPage
  }
};
</script>
<style lang="less">
  .demo-section__card {
    .mx-card {
      margin-bottom: 12px;
    }
  }
</style>
