<template>
  <div
    class="doc-markdown"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'doc-markdown'
};
</script>
<style lang="less">
  @import (optional, reference, less) '~@docs/assets/css/markdown.css';
  .doc-markdown {
    &:extend(.markdown-body all);
    @import (optional, less) '~@docs/assets/css/highlight.js.css';
  }
</style>
