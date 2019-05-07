<template>
  <div class="mx-popup-picker">
    <mx-cell
      @click.native="showPopup"
    >
      <span slot="title">点击选择</span>
      <template slot="value">
        <span>{{this.value.join(',')}}</span>
        <i class="mx-icon mx-icon-enter"></i>
      </template>
    </mx-cell>
    <mx-popup
      v-model="popupShow"
      position="bottom"
    >
      <div class="mx-header">
        <div
          class="mx-header__left"
          @click="onCancel"
        >
          <span>取消</span>
        </div>
        <div class="mx-header__title"></div>
        <div
          class="mx-header__right"
          @click="onConfirm"
        >
          <span>确定</span>
        </div>
      </div>
      <mx-picker
        :data="data"
        :default-selected="defaultSelected"
        v-model="selectedValue"
      >
      </mx-picker>
    </mx-popup>
  </div>
</template>
<script>
import create from '../../utils/create-mixins-component';
import deepClone from '../../utils/deep-clone';
import MxPopup from '../popup';
import MxPicker from '../picker';
export default create({
  name: 'mx-popup-picker',
  components: {
    MxPopup,
    MxPicker
  },
  model: {
    event: 'change'
  },
  props: {
    data: {
      type: Array,
      default: () => [[1, 2, 3, 4, 5, 6]]
    },
    value: {
      type: Array,
      default: () => []
    },
    defaultSelected: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    selectedValue(newVal, oldVal) {
      this.currentValue = deepClone(newVal);
      this.$emit('change', this.currentValue);
    }
  },
  data() {
    return {
      confirm: false,
      popupShow: false,
      currentValue: deepClone(this.value),
      selectedValue: deepClone(this.defaultSelected)
    };
  },
  mounted() {
    // this.selectedValue = deepClone(this.defaultSelected)
  },
  methods: {
    showPopup() {
      this.popupShow = true;
    },
    onCancel() {
      this.popupShow = false;
    },
    onConfirm() {
      this.popupShow = false;
    }
  }
});
</script>
<style lang="less">
  .mx-popup-picker {
    .mx-popup {
      padding: 0;
    }

    .mx-header {
      display: flex;

      &__left,
      &__right {
        padding: 10px;
      }
      &__title {
        flex: 1;
      }
    }
  }
</style>
