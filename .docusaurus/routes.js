import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/baikaishui-blog/about/',
    component: ComponentCreator('/baikaishui-blog/about/', '9ed'),
    exact: true
  },
  {
    path: '/baikaishui-blog/demo/',
    component: ComponentCreator('/baikaishui-blog/demo/', 'c2e'),
    exact: true
  },
  {
    path: '/baikaishui-blog/demo/aircraft/',
    component: ComponentCreator('/baikaishui-blog/demo/aircraft/', 'dd5'),
    exact: true
  },
  {
    path: '/baikaishui-blog/demo/exp/',
    component: ComponentCreator('/baikaishui-blog/demo/exp/', '8b0'),
    exact: true
  },
  {
    path: '/baikaishui-blog/docs',
    component: ComponentCreator('/baikaishui-blog/docs', '51c'),
    routes: [
      {
        path: '/baikaishui-blog/docs',
        component: ComponentCreator('/baikaishui-blog/docs', 'daa'),
        routes: [
          {
            path: '/baikaishui-blog/docs',
            component: ComponentCreator('/baikaishui-blog/docs', 'edb'),
            routes: [
              {
                path: '/baikaishui-blog/docs/code-specification',
                component: ComponentCreator('/baikaishui-blog/docs/code-specification', 'f0e'),
                exact: true,
                sidebar: "skill"
              },
              {
                path: '/baikaishui-blog/docs/eslint',
                component: ComponentCreator('/baikaishui-blog/docs/eslint', 'd64'),
                exact: true,
                sidebar: "skill"
              },
              {
                path: '/baikaishui-blog/docs/husky',
                component: ComponentCreator('/baikaishui-blog/docs/husky', '543'),
                exact: true,
                sidebar: "skill"
              },
              {
                path: '/baikaishui-blog/docs/prettier',
                component: ComponentCreator('/baikaishui-blog/docs/prettier', '1fa'),
                exact: true,
                sidebar: "skill"
              },
              {
                path: '/baikaishui-blog/docs/skill',
                component: ComponentCreator('/baikaishui-blog/docs/skill', '5ec'),
                exact: true,
                sidebar: "skill"
              },
              {
                path: '/baikaishui-blog/docs/source-code',
                component: ComponentCreator('/baikaishui-blog/docs/source-code', 'ec4'),
                exact: true,
                sidebar: "skill"
              },
              {
                path: '/baikaishui-blog/docs/stylelint',
                component: ComponentCreator('/baikaishui-blog/docs/stylelint', 'bc8'),
                exact: true,
                sidebar: "skill"
              },
              {
                path: '/baikaishui-blog/docs/vscode',
                component: ComponentCreator('/baikaishui-blog/docs/vscode', '5e8'),
                exact: true,
                sidebar: "skill"
              },
              {
                path: '/baikaishui-blog/docs/webpack',
                component: ComponentCreator('/baikaishui-blog/docs/webpack', '2a4'),
                exact: true,
                sidebar: "skill"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/baikaishui-blog/',
    component: ComponentCreator('/baikaishui-blog/', '51b'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
