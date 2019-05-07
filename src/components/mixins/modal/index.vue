<template>
  <transition name="mx-fade">
    <div
      v-show="visible"
      class="mx-modal"
      :style="modalStyle"
      @click="$emit('click', $event)"
    ></div>
  </transition>
</template>
<script>
export default {
  name: 'mx-modal',
  props: {
    zIndex: {
      type: Number,
      default: 2000
    }
  },
  computed: {
    modalStyle() {
      return {
        'z-index': this.zIndex
      };
    }
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    show() {
      this.visible = true;
    },
    hide() {
      this.visible = false;
    }
  }
};
</script>
<style lang="less">
  .mx-modal {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
  }
</style>
