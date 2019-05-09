import Vue from 'vue';
import Router from 'vue-router';
import DemoList from '@examples/demos/DemoList.vue';
import { getExamplesRoutes } from '@utils/get-components-helper.js';

Vue.use(Router);

const componentRouters = getExamplesRoutes();

export default new Router({
  base: '/',
  routes: [
    {
      path: '/',
      name: 'DemoList',
      component: DemoList
    },
    ...componentRouters,
    {
      path: '*',
      redirect: '/'
    }
  ]
});
