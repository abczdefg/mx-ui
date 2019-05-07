import Vue from 'vue';
import Modal from './index.vue';
let context = {};
export default {
  zIndex: 2000,
  open(vm) {
    context.vm = vm;
    const el = vm.$el;
    const parent = el && el.parentNode ? el.parentNode : document.body;
    const modal = this.create();
    modal.$on('click', this.onClick);
    parent.appendChild(modal.$el);
    modal.show();
  },
  close() {
    const modal = context.instance;
    if (!modal) {
      return;
    }
    const el = modal.$el;
    modal.hide();
    el.parentNode.removeChild(el);
  },
  create() {
    let modal = context.instance;
    if (!modal) {
      let ModalConstructor = Vue.extend(Modal);
      modal = context.instance = new ModalConstructor();
      modal.$mount();
    }
    return modal;
  },
  onClick() {
    context.vm.$emit('input', false);
  }
};
