# PopupPicker

> 弹出选择器组件

## 基本用法

通过`v-model`绑定选中值

```html
  <mx-popup-picker
    :data="[[1, 2, 3, 4, 5, 6]]"
    v-model="value"
  >
  </mx-popup-picker>
```

通过`data`属性传入选择列表，列数根据`data`的长度决定

```html
  <mx-popup-picker
    :data="[[1, 2, 3], [4, 5, 6]]"
    v-model="value"
  >
  </mx-popup-picker>
```

`default-selected`属性可控制点开弹出框时默认选中项
```html
  <mx-popup-picker
    :data="[[1, 2, 3], [4, 5, 6]]"
    v-model="value"
    :default-selected="[3]"
  >
  </mx-popup-picker>
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 绑定选中值 | `Array` | `[]` |
| data | 数据列表 | `Array` | `[]` |
| defaultSelected | 初始化时默认选中项 | `Array` | `[]` |
