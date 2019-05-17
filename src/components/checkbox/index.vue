<template>
  <div class="mx-checkbox-group">
    <mx-cell
      v-for="(option, index) in options"
      :key="index"
    >
      <label
        slot="title"
        class="mx-checkbox"
      >
        <span
          class="mx-checkbox__label"
          v-text="option.label"
        >
        </span>
        <span
          class="mx-checkbox__input"
          slot="value"
        >
          <input
            type="checkbox"
            class="mx-checkbox__control"
            :value="option.value"
            :disabled="option.disabled"
            v-model="currentValue"
          >
          <i
            class="mx-checkbox__icon mx-icon"
            :class="{
              'mx-icon-checkbox': !currentValue.includes(option.value),
              'mx-icon-checkbox-checked': currentValue.includes(option.value)
            }"
          >
          </i>
        </span>
      </label>
    </mx-cell>
  </div>
</template>
<script>
import create from '../../utils/create-component';
export default create({
  name: 'mx-checkbox',
  props: {
    options: {
      validator(options) {
        let toString = Object.prototype.toString;
        if (toString.call(options) !== '[object Array]') {
          return false;
        }
        return options.every(item => {
          return toString.call(item === '[object Array]') &&
              item.label !== void 0 &&
              item.value !== void 0;
        });
      }
    },
    value: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    val(val, oldVal) {
      this.currentValue = val;
    },
    currentValue(val, oldVal) {
      if (val !== oldVal) {
        this.$emit('input', val);
      }
    }
  },
  data() {
    return {
      currentValue: this.value
    };
  }
});
</script>
