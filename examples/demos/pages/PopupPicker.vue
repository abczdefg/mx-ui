<template>
  <demo-page title="弹出选择器">
    <section class="demo-section demo-section--popup-picker">
      <p class="demo-section__title">PopupPicker</p>
      <div class="demo-section__body">
        <mx-popup-picker
          :data="picker.data"
          v-model="picker.value"
          :default-selected="[3]"
        >
        </mx-popup-picker>
      </div>
    </section>
  </demo-page>
</template>
<script>
import DemoPage from '@examples/demos/base/DemoPage.vue';
export default {
  name: 'PopupPickerPage',
  components: {
    DemoPage
  },
  data() {
    return {
      picker: {
        data: [[1, 2, 3, 4, 5, 6]],
        value: []
      }
    };
  }
};
</script>
<style lang="less">

</style>
