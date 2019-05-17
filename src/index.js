import MxCell from './components/cell/index';
import MxRadio from './components/radio/index';
import MxPicker from './components/picker/index';
import MxPopup from './components/popup/index';
import MxButton from './components/button/index';
import MxLoading from './components/loading/index';
import MxPopupPicker from './components/popup-picker/index';
import MxNavBar from './components/nav-bar/index';
import MxCard from './components/card/index';
import MxCheckbox from './components/checkbox/index';

const Components = [
  MxCell,
  MxRadio,
  MxPicker,
  MxPopup,
  MxButton,
  MxLoading,
  MxPopupPicker,
  MxNavBar,
  MxCard,
  MxCheckbox
];

function install(Vue) {
  Components.forEach(Component => {
    Vue.component(Component.name, Component);
  });
}

// 在检测到 Vue 是可访问的全局变量时会自动调用 Vue.use()
// 然而在例如 CommonJS 的模块环境中，你应该始终显式地调用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  Components,
  MxCell,
  MxRadio,
  MxPicker,
  MxPopup,
  MxButton,
  MxLoading,
  MxPopupPicker,
  MxNavBar,
  MxCard,
  MxCheckbox
};

export default {
  install
};
