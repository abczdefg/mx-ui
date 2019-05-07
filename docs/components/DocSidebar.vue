<template>
  <div
    class="doc-sidebar"
  >
    <div class="doc-sidebar__wrap">
      <router-link
        class="doc-sidebar__item"
        :class="{
          'active': activeName === item.name
        }"
        v-for="(item, i) in menuItems"
        :key="i"
        :to="`./${item.name}`"
        @click.native="menuClickHandler(item)"
      >
        <div
          class="doc-sidebar__text"
        >
          <span class="doc-sidebar__zh">{{item.zh}}</span>
          <span class="doc-sidebar__en">{{item.en}}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'doc-sidebar',
  props: {
    menuItems: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    activeName() {
      return this.$route.name;
    }
  },
  data() {
    return {};
  },
  methods: {
    menuClickHandler(menuItem) {
      this.$emit('nav-click', menuItem);
    }
  }
};
</script>
<style lang="less">
  .doc-sidebar {
    width: 250px;
    background: @white;
    border-right: 1px solid @gray-light;
    box-sizing: border-box;
    z-index: 1;

    &__wrap {
      padding: 20px 0;
    }

    &__item {
      display: block;
      padding: 10px 20px 10px 40px;
      cursor: pointer;
    }

    &__item.active &__zh,
    &__item:hover &__zh {
      color: @blue;
    }

    &__zh {
      font-size: 14px;
      color: @black;
    }

    &__en {
      margin-left: 5px;
      font-size: 10px;
      color: @gray;
    }
  }
</style>
