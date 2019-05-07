<template>
  <demo-page title="导航栏">
    <section class="demo-section demo-section__nav-bar">
      <p class="demo-section__title">Nav Bar</p>
      <div class="demo-section__body">
        <mx-nav-bar
          title="标题"
          :arrow="true"
          left-text="返回"
          right-text="弹框"
          @click-left="onLeftClick"
          @click-right="onRightClick"
        >
        </mx-nav-bar>
      </div>
    </section>
  </demo-page>
</template>
<script>
import DemoPage from '@examples/demos/base/DemoPage.vue';
export default {
  name: 'NavBarPage',
  components: {
    DemoPage
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
