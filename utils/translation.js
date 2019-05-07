const tString = {
  'intro': '介绍',
  'cell': '单元格',
  'button': '按钮',
  'card': '卡片',
  'loading': '加载',
  'nav-bar': '导航栏',
  'picker': '选择器',
  'popup-picker': '弹出选择器',
  'popup': '弹出层',
  'radio': '单选框'
};

const t = (en) => {
  return tString[en.toLowerCase()];
};

export {
  t
};
