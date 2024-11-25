import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  skill: [
    "skill/introduction",
    {
      label: "代码规范",
      type: "category",
      link: {
        type: "doc",
        id: "skill/code-specification/code-specification-guides",
      },
      items: [
        "skill/code-specification/eslint",
        "skill/code-specification/prettier",
        "skill/code-specification/stylelint",
        "skill/code-specification/vscode",
        "skill/code-specification/husky",
      ],
    },
    {
      label: "webpack",
      type: "category",
      link: {
        type: "doc",
        id: "skill/webpack/webpack-guides",
      },
      items: ["skill/webpack/source-code"],
    },
  ],
};

export default sidebars;
