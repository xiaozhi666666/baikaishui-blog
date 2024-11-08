import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/baikaishui-blog/blog',
    component: ComponentCreator('/baikaishui-blog/blog', '0ea'),
    exact: true
  },
  {
    path: '/baikaishui-blog/blog/archive',
    component: ComponentCreator('/baikaishui-blog/blog/archive', 'cd9'),
    exact: true
  },
  {
    path: '/baikaishui-blog/blog/authors',
    component: ComponentCreator('/baikaishui-blog/blog/authors', '31a'),
    exact: true
  },
  {
    path: '/baikaishui-blog/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/baikaishui-blog/blog/authors/all-sebastien-lorber-articles', 'a8e'),
    exact: true
  },
  {
    path: '/baikaishui-blog/blog/authors/yangshun',
    component: ComponentCreator('/baikaishui-blog/blog/authors/yangshun', 'bd3'),
    exact: true
  },
  {
    path: '/baikaishui-blog/blog/first-blog-post',
    component: ComponentCreator('/baikaishui-blog/blog/first-blog-post', 'f26'),
    exact: true
  },
  {
    path: '/baikaishui-blog/blog/long-blog-post',
    component: ComponentCreator('/baikaishui-blog/blog/long-blog-post', '804'),
    exact: true
  },
  {
    path: '/baikaishui-blog/blog/mdx-blog-post',
    component: ComponentCreator('/baikaishui-blog/blog/mdx-blog-post', '7b3'),
    exact: true
  },
  {
    path: '/baikaishui-blog/blog/tags',
    component: ComponentCreator('/baikaishui-blog/blog/tags', 'b54'),
    exact: true
  },
  {
    path: '/baikaishui-blog/blog/tags/docusaurus',
    component: ComponentCreator('/baikaishui-blog/blog/tags/docusaurus', '414'),
    exact: true
  },
  {
    path: '/baikaishui-blog/blog/tags/facebook',
    component: ComponentCreator('/baikaishui-blog/blog/tags/facebook', 'ecc'),
    exact: true
  },
  {
    path: '/baikaishui-blog/blog/tags/hello',
    component: ComponentCreator('/baikaishui-blog/blog/tags/hello', 'a74'),
    exact: true
  },
  {
    path: '/baikaishui-blog/blog/tags/hola',
    component: ComponentCreator('/baikaishui-blog/blog/tags/hola', '42d'),
    exact: true
  },
  {
    path: '/baikaishui-blog/blog/welcome',
    component: ComponentCreator('/baikaishui-blog/blog/welcome', '39d'),
    exact: true
  },
  {
    path: '/baikaishui-blog/markdown-page',
    component: ComponentCreator('/baikaishui-blog/markdown-page', 'ac6'),
    exact: true
  },
  {
    path: '/baikaishui-blog/docs',
    component: ComponentCreator('/baikaishui-blog/docs', '6f0'),
    routes: [
      {
        path: '/baikaishui-blog/docs',
        component: ComponentCreator('/baikaishui-blog/docs', '993'),
        routes: [
          {
            path: '/baikaishui-blog/docs',
            component: ComponentCreator('/baikaishui-blog/docs', 'bfa'),
            routes: [
              {
                path: '/baikaishui-blog/docs/category/tutorial---basics',
                component: ComponentCreator('/baikaishui-blog/docs/category/tutorial---basics', '02e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/baikaishui-blog/docs/category/tutorial---extras',
                component: ComponentCreator('/baikaishui-blog/docs/category/tutorial---extras', '29b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/baikaishui-blog/docs/intro',
                component: ComponentCreator('/baikaishui-blog/docs/intro', '942'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/baikaishui-blog/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/baikaishui-blog/docs/tutorial-basics/congratulations', 'cb3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/baikaishui-blog/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/baikaishui-blog/docs/tutorial-basics/create-a-blog-post', 'dfb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/baikaishui-blog/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/baikaishui-blog/docs/tutorial-basics/create-a-document', '9de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/baikaishui-blog/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/baikaishui-blog/docs/tutorial-basics/create-a-page', 'c77'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/baikaishui-blog/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/baikaishui-blog/docs/tutorial-basics/deploy-your-site', '5c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/baikaishui-blog/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/baikaishui-blog/docs/tutorial-basics/markdown-features', '6c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/baikaishui-blog/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/baikaishui-blog/docs/tutorial-extras/manage-docs-versions', 'f2a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/baikaishui-blog/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/baikaishui-blog/docs/tutorial-extras/translate-your-site', 'c36'),
                exact: true,
                sidebar: "tutorialSidebar"
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
