import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "白开水的博客",
  favicon: "img/avatar.png",
  url: "https://xiaozhi666666.github.io",
  baseUrl: "/baikaishui-blog/",

  organizationName: "facebook",
  projectName: "白开水咕咕",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "白开水",
      logo: {
        alt: "白开水",
        src: "img/avatar.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "文档",
        },
        { to: "/blog", label: "博客", position: "left" },
        {
          href: "https://github.com/xiaozhi666666/baikaishui-blog",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "学习",
          items: [
            {
              label: "文档",
              to: "/docs/intro",
            },
            {
              label: "博客",
              to: "/blog",
            },
          ],
        },
        {
          title: "工具网站",
          items: [
            {
              label: "quicktype",
              href: "https://app.quicktype.io/",
            },
            {
              label: "excalidraw",
              href: "https://excalidraw.com/",
            },
            {
              label: "时间戳转换",
              href: "https://tool.chinaz.com/tools/unixtime.aspx",
            },
            {
              label: "json在线工具",
              href: "https://www.sojson.com/",
            },
            {
              label: "SVG转DataURL",
              href: "https://www.fengjs.com/tools/svg2path.html/",
            },
          ],
        },
        {
          title: "一些有趣的网站",
          items: [
            {
              label: "特殊符号",
              href: "https://cn.piliapp.com/symbol/",
            },
            {
              label: "新闻热榜",
              href: "https://tophub.today/",
            },
          ],
        },
        {
          title: "其他",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/xiaozhi666666/baikaishui-blog",
            },
          ],
        },
      ],
      copyright: `Copyright © 2024-${new Date().getFullYear()} baikaishui-blog.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  plugins: ["docusaurus-plugin-less"],
};

export default config;
