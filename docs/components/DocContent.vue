<template>
  <div
    class="doc-content"
    :class="{
      'doc-content-with-simulator': simulator
    }"
  >
    <div class="doc-content__main">
      <doc-markdown>
        <slot name="content"></slot>
      </doc-markdown>
    </div>
    <div
      v-if="simulator"
      class="doc-content__simulator"
    >
      <slot name="simulator"></slot>
    </div>
  </div>
</template>
<script>
import DocMarkdown from './DocMarkdown.vue';
export default {
  name: 'doc-content',
  components: {
    DocMarkdown
  },
  props: {},
  data() {
    return {
      simulator: false
    };
  },
  mounted() {
    if (this.$slots.simulator) {
      this.simulator = true;
    }
  }
};
</script>
<style lang="less">
  .doc-content {
    position: relative;
    padding-left: 250px;

    &-with-simulator {
      padding-right: 400px;
    }

    &__main {
      padding: 20px 40px;
    }

    &__simulator {
      position: fixed;
      top: 80px;
      right: 40px;
      width: 360px;
      height: 640px;
      box-shadow: 0 0 5px @gray;
    }
  }
</style>
