import { Components } from '@mx-ui';
import { toComponentName, dasherize } from './index.js';
import { t } from './translation.js';

export function getExamplesRoutes() {
  return require.context('@examples/demos/pages/', true, /\.vue$/).keys().map(url => {
    let name = /([^\\/]+)\.\w+$/.exec(url)[1];

    return {
      path: `/${dasherize(name)}`,
      name: `${name}Page`,
      component: require(`@examples/demos/pages/${name}.vue`).default
    };
  });
}

export function getComponentList() {
  return Components.map(Component => {
    let name = Component.name.slice(3);
    return {
      name: toComponentName(name),
      path: dasherize(name)
    };
  });
}


export function getDocsRoutes() {
  return [
    {
      path: 'intro',
      name: 'intro',
      component: require(`@docs/pages/intro.md`).default,
      meta: {
        component: true
      }
    },
    ...require.context('@mx-ui/components', true, /Readme\.md$/).keys()
      .map(url => {
        let name = /[\\/]([^\\/]+)[\\/]/.exec(url)[1];
        return {
          path: name,
          name: name,
          component: require(`@mx-ui/components/${url.slice(2)}`).default,
          meta: {
            component: true
          }
        }
      })
  ]
}

export function getDocsMenu() {
  return [
    {
      name: `intro`,
      zh: `${t('Intro')}`
    },
    ...require.context('@mx-ui/components', true, /Readme\.md$/).keys()
      .sort((a, b) => {
        const nameReg = /[\\/]([^\\/]+)[\\/]/;
        const names = Components.map(item => item.name.replace('mx-', ''));
        return names.indexOf(nameReg.exec(a)[1]) - names.indexOf(nameReg.exec(b)[1]);
      })
      .map(url => {
        let name = /[\\/]([^\\/]+)[\\/]/.exec(url)[1];
        return {
          name,
          en: toComponentName(name),
          zh: `${t(name)}`
        };
      })
  ]
}
