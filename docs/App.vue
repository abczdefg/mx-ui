<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import DocIndex from './components/DocIndex.vue';
export default {
  name: 'App',
  components: {
    DocIndex
  },
  data() {
    return {};
  }
};
</script>
<style lang="less">
</style>
