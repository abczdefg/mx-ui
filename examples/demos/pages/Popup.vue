<template>
  <demo-page title="弹出层">
    <section class="demo-section demo-section__popup">
      <p class="demo-section__title">中部弹出</p>
      <div class="demo-section__body padding">
        <mx-popup v-model="middle.show">内容</mx-popup>
        <mx-button @click="middle.show = true">中部弹出</mx-button>
      </div>
    </section>
    <section class="demo-section demo-section__popup">
      <p class="demo-section__title">底部弹出</p>
      <div class="demo-section__body padding">
        <mx-popup v-model="bottom.show" position="bottom">
          <mx-picker
            :data="picker.data"
            v-model="picker.value"
          >
          </mx-picker>
        </mx-popup>
        <mx-button @click="bottom.show = true">底部弹出</mx-button>
      </div>
    </section>
    <section class="demo-section demo-section__popup">
      <p class="demo-section__title">顶部弹出</p>
      <div class="demo-section__body padding">
        <mx-popup v-model="top.show" position="top">列表</mx-popup>
        <mx-button @click="top.show = true">顶部弹出</mx-button>
      </div>
    </section>
  </demo-page>
</template>
<script>
import DemoPage from '@examples/demos/base/DemoPage.vue';
export default {
  name: 'PopupPage',
  components: {
    DemoPage
  },
  data() {
    return {
      middle: {
        show: false
      },
      bottom: {
        show: false
      },
      top: {
        show: false
      },
      picker: {
        data: [[1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]],
        value: []
      }
    };
  }
};
</script>
<style lang="less">
  .demo-section__popup {
    .mx-popup--bottom {
      padding: 0;
    }
  }
</style>
