import Vue from 'vue';
import Router from 'vue-router';
import DocIndex from '@docs/components/DocIndex.vue';
import { getDocsRoutes } from '@utils/get-components-helper.js';

Vue.use(Router);

const componentRouters = getDocsRoutes();

const router = new Router({
  base: '/',
  routes: [
    {
      path: '/',
      redirect: `/${componentRouters[0].path}`,
      name: 'DocIndex',
      component: DocIndex,
      children: componentRouters
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});

export default router;
