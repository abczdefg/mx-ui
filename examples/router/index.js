import Vue from 'vue';
import Router from 'vue-router';
import DemoList from '@examples/demos/DemoList.vue';
import { dasherize } from '@utils';

Vue.use(Router);

const componentRouters = require.context('@examples/demos/pages/', true, /\.vue$/).keys().map(url => {
  let name = /([^\\/]+)\.\w+$/.exec(url)[1];

  return {
    path: `/${dasherize(name)}`,
    name: `${name}Page`,
    component: require(`@examples/demos/pages/${name}.vue`).default
  };
});
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
