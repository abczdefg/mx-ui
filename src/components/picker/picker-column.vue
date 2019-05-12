<template>
  <div
    class="mx-picker-column"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
    @touchcancel="onTouchEnd"
  >
    <ul
      class="mx-picker-column__wrapper"
      :style="wrapperStyle"
    >
      <li
        v-for="value in options"
        class="mx-picker-column__option"
        :class="{ 'mx-picker-column__option--selected': getValue() === value }"
        :style="optionStyle"
        v-text="value"
      >
      </li>
    </ul>
  </div>
</template>
<script>
import create from '../../utils/create-component';
const DEFAULT_DURATION = 200;
export default create({
  name: 'mx-picker-column',
  props: {
    options: {
      type: Array,
      default: () => []
    },
    visibleItemCount: {
      type: Number,
      default: 5
    },
    itemHeight: {
      type: Number,
      default: 36
    },
    defaultIndex: {
      type: Number,
      default: 0
    }
  },
  watch: {
    defaultIndex(newVal) {
      this.currentIndex = newVal;
    },
    currentIndex(newVal, oldValue) {
      if (newVal !== oldValue) {
        this.$emit('change', newVal);
      }
    }
  },
  computed: {
    count() {
      return this.options.length;
    },
    baseOffset() {
      return this.itemHeight * Math.floor(this.visibleItemCount / 2);
    },
    wrapperStyle() {
      return {
        'transition': `${this.duration}ms`,
        'top': this.baseOffset + 'px',
        'transform': `translate3d(0, ${this.offset}px, 0)`,
        'lineHeight': this.itemHeight + 'px'
      };
    },
    optionStyle() {
      return {
        'line-height': this.itemHeight + 'px',
        'height': this.itemHeight + 'px'
      };
    }
  },
  data() {
    return {
      startSelect: false,
      startOffset: 0,
      offset: 0,
      startY: 0,
      duration: 0,
      currentIndex: this.defaultIndex,
      tmpIndex: 0
    };
  },
  methods: {
    onTouchStart(event) {
      this.startY = event.touches[0].clientY;
      this.startOffset = this.offset;
      this.duration = 0;
    },
    onTouchMove(event) {
      const deltaY = event.touches[0].clientY - this.startY;
      this.offset = this.startOffset + deltaY;
    },
    onTouchEnd() {
      if (this.offset !== this.startOffset) {
        this.duration = DEFAULT_DURATION;
        let index = this.adjustIndex(Math.round(-this.offset / this.itemHeight));
        this.setIndex(index);
      }
    },
    adjustIndex(index = 0) {
      if (index < 0) return 0;
      if (index > this.count - 1) return this.count - 1;
      return index;
    },
    setIndex(index = 0) {
      this.duration = DEFAULT_DURATION;
      this.offset = -index * this.itemHeight;
      this.currentIndex = index;
    },
    findIndex(value) {
      return this.options.indexOf(value);
    },
    setValue(val) {
      let index = this.options.indexOf(val);
      this.setIndex(index);
    },
    getValue() {
      return this.options[this.currentIndex];
    }
  }
});
</script>
