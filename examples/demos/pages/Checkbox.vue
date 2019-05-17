<template>
  <demo-page title="多选框">
    <section class="demo-section demo-section__checkbox">
      <p class="demo-section__title">Checkbox</p>
      <div class="demo-section__body">
        <mx-checkbox :options="checkbox.options" v-model="checkbox.value"></mx-checkbox>
        <mx-cell title="选中值" :value="checkbox.value"></mx-cell>
      </div>
    </section>
  </demo-page>
</template>
<script>
import DemoPage from '@examples/demos/base/DemoPage.vue';
export default {
  name: 'CheckboxPage',
  components: {
    DemoPage
  },
  data() {
    return {
      checkbox: {
        value: ['选项1'],
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
