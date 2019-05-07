import Vue from 'vue';
import Mxui from '@mx-ui';
import '@mx-ui/styles/index.less';
import App from '@examples/App.vue';
import router from '@examples/router/index.js';

Vue.use(Mxui);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<app></app>',
  router,
  components: {
    App
  }
});
