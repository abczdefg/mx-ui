<template>
  <demo-page title="单选框">
    <section class="demo-section demo-section__radio">
      <p class="demo-section__title">Radio</p>
      <div class="demo-section__body">
        <mx-radio :options="radio.options" v-model="radio.value"></mx-radio>
        <mx-cell title="选中值" :value="radio.value"></mx-cell>
      </div>
    </section>
  </demo-page>
</template>
<script>
import DemoPage from '@examples/demos/base/DemoPage.vue';
export default {
  name: 'RadioPage',
  components: {
    DemoPage
  },
  data() {
    return {
      radio: {
        value: '选项2',
        options: [{
          label: '选项1',
          value: '选项1'
        }, {
          label: '选项2-禁用',
          value: '选项2',
          disabled: true
        }, {
          label: '选项3',
          value: '选项3'
        }, {
          label: '选项4',
          value: '选项4'
        }]
      }
    };
  }
};
</script>
<style lang="less">

</style>
