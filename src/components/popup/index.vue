<template>
  <transition :name="transition">
    <div
      v-show="show"
      class="mx-popup"
      :class="classObject"
    >
      <slot></slot>
    </div>
  </transition>
</template>
<script>
import create from '../../utils/create-component';
import manager from '../mixins/modal/manager.js';
export default create({
  name: 'mx-popup',
  model: {
    prop: 'show'
  },
  props: {
    show: Boolean,
    position: String,
    mask: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    classObject() {
      let cls = {};
      if (this.position) {
        cls[`mx-popup--${this.position}`] = true;
      }
      return cls;
    }
  },
  watch: {
    show(val) {
      val ? this.open() : this.close();
    }
  },
  data() {
    return {
      transition: this.position ? `mx-popup-slide-${this.position}` : 'mx-fade'
    };
  },
  mounted() {
    if (this.show) {
      this.open(this);
    }
  },
  methods: {
    open() {
      this.renderMask();
    },
    close() {
      manager.close(this);
    },
    renderMask() {
      if (this.mask) {
        manager.open(this);
        this.$el.style.zIndex = ++manager.zIndex;
      } else {
        manager.close(this);
      }
    }
  }
});
</script>
