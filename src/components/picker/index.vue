<template>
  <div class="mx-picker">
    <div
      class="mx-picker__columns"
      :style="columnStyle"
    >
      <mx-picker-column
        v-for="(options, i) in data"
        :key="i"
        :options="options"
        :itemHeight="itemHeight"
        :defaultIndex="defaultSelectedIndex[i]"
        @change="onChange(i)"
      >
      </mx-picker-column>
    </div>
    <div
      class="mx-picker__highlight"
      :style="highlightStyle"
    >
    </div>
  </div>
</template>
<script>
import create from '../../utils/create-component';
import MxPickerColumn from './picker-column.vue';
export default create({
  name: 'mx-picker',
  components: {
    MxPickerColumn
  },
  model: {
    event: 'change'
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    value: {
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
    defaultSelected: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    value(newVal, oldVal) {
      this.currentValue = newVal;
    },
    currentValue(newVal, oldVal) {
      if (newVal.length > 0) {
        this.setValues(newVal);
      }
    }
  },
  computed: {
    // defaultSelectedIndex() {
    //   return this.defaultSelected.map((val, i) => {
    //     return this.getColumn(i) && this.getColumn(i).findIndex(val);
    //   });
    // },
    columnStyle() {
      return {
        'height': this.itemHeight * this.visibleItemCount + 'px'
      };
    },
    highlightStyle() {
      return {
        'height': this.itemHeight + 'px',
        'margin-top': -this.itemHeight / 2 + 'px'
      };
    }
  },
  data() {
    return {
      currentValue: [],
      defaultSelectedIndex: []
    };
  },
  mounted() {
    // this.currentValue = this.value;
    this.defaultSelectedIndex = this.defaultSelected.map((val, i) => {
      return this.getColumn(i).findIndex(val);
    });
  },
  methods: {
    getColumn(index) {
      return this.$children[index];
    },
    getColumnValue(index) {
      return this.getColumn(index).getValue();
    },
    setColumnValue(index, columnValue) {
      this.getColumn(index).setValue(columnValue);
    },
    getValues() {
      return this.$children.map(child => child.getValue());
    },
    setValues(val) {
      this.$children.forEach((child, i) => child.setValue(val[i]));
    },
    onChange(index) {
      const values = this.getValues();
      this.$emit('change', values);
    }
  }
});
</script>
<style lang="less">
  .mx-picker {
    position: relative;
    background: @white;

    &__columns {
      display: flex;
      flex-direction: row;
      overflow: hidden;
    }
    &__highlight {
      position: absolute;
      top: 50%;
      margin-top: -18px;
      width: 100%;
      background: transparent;
      border-top: 1px solid @blue;
      border-bottom: 1px solid @blue;
      pointer-events: none;
    }
  }
</style>
