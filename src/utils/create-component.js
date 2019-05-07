export default function(sfc) {
  sfc.install = function(Vue) {
    Vue.component(this.name, this);
  };
  return sfc;
}
