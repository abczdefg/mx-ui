import Vue from 'vue';
import '@mx-ui/styles/index.less';
import App from '@docs/App.vue';
import router from '@docs/router';
import Bus from '@docs/bus';

Vue.use(Bus);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<app></app>',
  router,
  components: {
    App
  }
});
