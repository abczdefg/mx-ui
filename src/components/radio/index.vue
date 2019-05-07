<template>
  <div class="mx-radio-group">
    <mx-cell
      v-for="(option, index) in options"
      :key="index"
    >
      <label
        slot="title"
        class="mx-radio"
      >
        <span
          class="mx-radio__label"
          v-text="option.label"
        >
        </span>
        <span
          class="mx-radio__input"
          slot="value"
        >
          <input
            type="radio"
            class="mx-radio__control"
            :value="option.value"
            :disabled="option.disabled"
            v-model="currentValue"
          >
          <i
            class="mx-radio__icon mx-icon"
            :class="{
              'mx-icon-radio': option.value !== currentValue,
              'mx-icon-radio-checked': option.value === currentValue
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
  name: 'mx-radio',
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
    value: [Number, String]
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
<style lang="less">
  @mx-radio-size: 20px;
  .mx-radio {
    display: flex;

    &__input {
      display: inline-block;
      line-height: @mx-radio-size;
    }
    &__control {
      display: none;
    }
    &__icon {
      font-size: @mx-radio-size;

      .mx-radio__control + & {
        &:before {
          // &:extend(.icon-radio:before);
          color: @gray;
        }
      }
      .mx-radio__control:checked + & {
        &:before {
          // &:extend(.icon-radio-checked:before);
          color: @blue;
        }
      }
      .mx-radio__control[disabled] + & {
        border-radius: 50%;
        &:before {
          color: @gray;
          opacity: 0.3;
        }
      }
    }
    &__label {
      flex: 1;
      line-height: @mx-radio-size;
    }
  }
</style>
