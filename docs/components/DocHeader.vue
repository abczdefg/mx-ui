<template>
  <header
    class="doc-header"
  >
    <span
      class="doc-header__title"
    >
      {{title}}
    </span>
  </header>
</template>
<script>
export default {
  name: 'doc-header',
  props: {
    title: String
  }
};
</script>
<style lang="less">
  @import '~@mx-ui/styles/var.less';
  .doc-header {
    height: 60px;
    line-height: 60px;
    padding: 0 40px;
    background: @white;
    border-bottom: 1px solid @gray-light;
    box-sizing: border-box;

    &__title {
      font-size: 18px;
      color: @black;
    }
  }
</style>
