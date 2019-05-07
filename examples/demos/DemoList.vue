<template>
  <demo-page title="组件" :arrow="false">
    <section class="demo-section demo-section__demo">
      <mx-cell
        v-for="(item, i) in Components"
        :key="i"
        :title="item.name"
        @click.native="goto(item)"
      >
      </mx-cell>
    </section>
  </demo-page>
</template>
<script>
import DemoPage from '@examples/demos/base/DemoPage.vue';
import { getComponentList } from '@utils/get-components-helper.js';
export default {
  name: 'DemoList',
  components: {
    DemoPage
  },
  data() {
    return {
      Components: getComponentList()
    };
  },
  methods: {
    goto(item) {
      this.$router.push(`/${item.path}`);
    }
  }
};
</script>
<style lang="less">
.component-list {

}
</style>
