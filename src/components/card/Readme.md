# Card

> 卡片组件

## 基本用法

`body`属性传入数组，元素为包含`label`和`value`的对象，左右两边分布

```html
  <mx-card
    header="标题"
    :body="[{
      label: '姓名',
      value: '张三'
    }, {
      label: '学号',
      value: '19990101'
    }]"
    footer="开始"
  >
  </mx-card>
```

`header`和`footer`可作为`slot`使用
```html
  <mx-card :body="[{ label: '价格', value: '2元' }]">
    <a href="javascript:;" slot="header">苹果</a>
    <button slot="footer">立刻购买</button>
  </mx-card>
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| header | 标题内容 | `String` | `''` |
| body | 中部内容，`label`和`value`左右分布排列 | `Array` | `[]` |
| footer | 底部内容 | `String` | `''` |

## Slot

| 名称 | 说明 |
| --- | --- |
| header | 自定义标题内容 |
| footer | 自定义底部内容 |

