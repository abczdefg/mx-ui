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
