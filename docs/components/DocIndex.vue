<template>
  <div class="doc-index">
    <doc-header class="doc-index__header" title="Mx-UI 文档"></doc-header>
    <div class="doc-index__body">
      <doc-sidebar class="doc-index__sidebar" :menuItems="menu"></doc-sidebar>
      <doc-content class="doc-index__content">
        <router-view slot="content"></router-view>
        <iframe ref="simulator" slot="simulator" :src="examplesLink" style="width:100%;height:100%;"></iframe>
      </doc-content>
    </div>
  </div>
</template>
<script>
import DocHeader from '@docs/components/DocHeader.vue';
import DocSidebar from '@docs/components/DocSidebar.vue';
import DocContent from '@docs/components/DocContent.vue';
import { getDocsMenu } from '@utils/get-components-helper.js';

export default {
  name: 'DocIndex',
  components: {
    DocHeader,
    DocSidebar,
    DocContent
  },
  computed: {
    examplesLink() {
      return `./examples#/${this.$route.name}`;
    }
  },
  data() {
    return {
      menu: getDocsMenu()
    };
  },
  methods: {
  }
};
</script>
<style lang="less">
  @import '~@mx-ui/styles/var.less';
  @header-height: 60px;
  .doc-index {
    position: relative;
    min-width: 1024px;
    height: 100vh;
    background: @white;

    &__header {
      position: absolute;
      top: 0;
      width: 100%;
    }
    &__body {
      position: relative;
      padding-top: @header-height;
      height: 100%;
      box-sizing: border-box;
    }
    &__sidebar {
      position: absolute;
      top: @header-height;
      left: 0;
      bottom: 0;
      overflow-y: auto;
    }
    &__content {
      height: 100%;
      overflow-y: auto;
    }
  }
</style>
