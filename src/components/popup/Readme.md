# Popup

> 弹出层组件

## 基本用法

通过`v-model`绑定显示状态
```html
<mx-popup v-model="show">内容</mx-popup>
```

可通过`position`控制弹出层类型，默认`middle`，另有`bottom`，`top`
```html
<mx-popup v-model="show" position="bottom"></mx-popup>
<mx-popup v-model="show" position="top">顶部</mx-popup>
```

可通过`slot`自定义内容
```html
<mx-popup v-model="show" position="bottom">
  <mx-picker
    :data="pickerData"
    v-model="pickerValue"
  >
  </mx-picker>
</mx-popup>
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 是否显示组件 | `Boolean` | `false` |
| position | 弹出层位置，有`middle`，`bottom`和`top` | `String` | `middle` |
| mask | 是否显示蒙层 | `Boolean` | `true` |

## Slot

| 名称 | 说明 |
| --- | --- |
| -- | 自定义弹出内容 |

