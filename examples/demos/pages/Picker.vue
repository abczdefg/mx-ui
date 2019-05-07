<template>
  <demo-page title="选择器">
    <section class="demo-section demo-section__picker">
      <p class="demo-section__title">单列Picker</p>
      <div class="demo-section__body">
        <mx-picker
          :data="picker1.data"
          v-model="picker1.value"
        >
        </mx-picker>
        <mx-cell title="选中值" :value="picker1.value.join(',')"></mx-cell>
      </div>
    </section>
    <section class="demo-section demo-section--picker">
      <p class="demo-section__title">多列Picker</p>
      <div class="demo-section__body">
        <mx-picker
          :data="picker2.data"
          v-model="picker2.value"
        >
        </mx-picker>
        <mx-cell title="选中值" :value="picker2.value.join(',')"></mx-cell>
      </div>
    </section>
  </demo-page>
</template>
<script>
import DemoPage from '@examples/demos/base/DemoPage.vue';
export default {
  name: 'PickerPage',
  components: {
    DemoPage
  },
  data() {
    return {
      picker1: {
        data: [[1, 2, 3, 4, 5, 6]],
        value: []
      },
      picker2: {
        data: [[1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]],
        value: []
      }
    };
  }
};
</script>
<style lang="less">

</style>
