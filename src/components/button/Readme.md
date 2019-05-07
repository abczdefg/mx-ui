# Button

> 按钮组件

## 基本用法

```html
  <mx-button>Button</mx-button>
```

## 按钮类型
根据`type`属性定义不同类型的按钮

```html
  <mx-button type="default">Default</mx-button>
  <mx-button type="primary">Primary</mx-button>
  <mx-button type="warning">Warning</mx-button>
  <mx-button type="danger">Danger</mx-button>
```

## 块状按钮
使用`block`属性
```html
  <mx-button type="default" :block="true">Block</mx-button>
```

## 禁用按钮
使用`disabled`属性
```html
  <mx-button type="default" :disabled="true">Disabled</mx-button>
```

## 加载状态
使用`loading`属性
```html
  <mx-button type="default" :loading="true">Loading</mx-button>
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型，可选值 `default` `primary` `warning` `danger` | `String` | `default` |
| tag | HTML 标签 | `String` | `button` |
| block | 是否为块级元素 | `Boolean` | `false` |
| disabled | 是否禁用 | `Boolean` | `false` |
| loading | 是否为加载状态 | `Boolean` | `false` |

## Slot

| 名称 | 说明 |
| --- | --- |
| - | 自定义button内容 |
