# Radio

> 单选框组件

## 基本用法

通过`v-model`绑定选中值，通过`options`控制单选框选项，包含`label`, `value`, `disabled`属性

```html
<mx-radio
  :options="[{
    label: '选项1',
    value: '选项1'
  }, {
    label: '选项2-禁用',
    value: '选项2',
    disabled: true
  }, {
    label: '选项3',
    value: '选项3'
  }, {
    label: '选项4',
    value: '选项4'
  }]"
  v-model="value"
>
</mx-radio>
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 绑定选中值 | `Boolean` | `false` |
| options | 选项列表 | `Array` | `[]` |
