# Picker

> 选择器组件

## 基本用法

通过`v-model`绑定选中值

```html
  <mx-picker
    :data="[[1, 2, 3, 4, 5, 6]]"
    v-model="value"
  >
  </mx-picker>
```

通过`data`属性传入选择列表，列数根据`data`的长度决定

```html
  <mx-picker
    :data="[[1, 2, 3], [4, 5, 6]]"
    v-model="value"
  >
  </mx-picker>
```

`default-selected`属性可控制点开弹出框时默认选中项
```html
  <mx-picker
    :data="[[1, 2, 3], [4, 5, 6]]"
    v-model="value"
    :default-selected="[3]"
  >
  </mx-picker>
```
## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 绑定选中值 | `Array` | `[]` |
| data | 数据列表 | `Array` | `[]` |
| visibleItemCount | 列表显示行数 | `Number` | `5` |
| itemHeight | 列表项高度，单位`px` | `Number` | `36` |
| defaultSelected | 初始化时默认选中项 | `Array` | `[]` |
