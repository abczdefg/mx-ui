# Cell

> 单元格组件

## 基本用法

```html
<mx-cell title="i am title" value="i am value"></mx-cell>
```

`title`和`value`可作为`slot`使用

```html
  <mx-cell>
    <span slot="title">
      <a href="javascript:;">title's slot</a>
    </span>
    <span slot="value">
      <a href="javascript:;">value's slot</a>
    </span>
  </mx-cell>
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 左侧内容 | `String` | `''` |
| value | 右侧内容 | `String` | `''` |

## Slot

| 名称 | 说明 |
| --- | --- |
| title | 自定义左侧内容 |
| value | 自定义右侧内容 |
