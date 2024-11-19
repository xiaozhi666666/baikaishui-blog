---
id: stylelint
slug: /stylelint
title: stylelint
authors: baikaishui
keywords: ["code-specification", "stylelint"]
---

:::tip
StyleLint 作为一个样式表的静态分析工具，可以帮助发现和纠正样式表中的问题，提高项目的代码质量和规范。
stylelint-config-prettier 也是为了解决打架问题
:::

### 安装

```bash
# 以16.2.1为例
yarn add stylelint@16.2.1 stylelint-config-prettier stylelint-config-rational-order stylelint-config-standard@36.0.0 stylelint-declaration-block-no-ignored-properties@2.8.0 stylelint-order stylelint-less stylelint-prettier@5.0.0  --save-dev
```

### 新建 .stylelintrc.js 文件（类比 ESLint，共享配置，使用常用配置包）

```js
module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-rational-order",
    "prettier",
    "stylelint-less",
  ],
  plugins: [
    "stylelint-declaration-block-no-ignored-properties",
    "stylelint-prettier",
  ],

  overrides: [
    {
      files: ["**/*.less"],
      customSyntax: "postcss-less",
    },
  ],
  // 规则配置
  rules: {
    // 提示我们写的矛盾样式
    "plugin/declaration-block-no-ignored-properties": true,
    // 禁用注释前的空行规则
    "comment-empty-line-before": null,
    // 禁用声明前的空行规则
    "declaration-empty-line-before": null,
    // 指定函数名的大小写为小写
    "function-name-case": "lower",
    // 禁用选择器特异性递减规则
    "no-descending-specificity": null,
    // 禁用无效的双斜杠注释规则
    "no-invalid-double-slash-comments": null,
    // 指定规则前需要空行
    "rule-empty-line-before": "always",
  },
  // 忽略检查的文件或文件夹
  ignoreFiles: ["node_modules/**/*", "dist/**/*"],
};
```

### 配置 package.json 命令

```json
"scripts": {
  "lint-eslint": "eslint -c .eslintrc.js  src",
  "lint-style-lint": "stylelint --config .stylelintrc.js src/**/*.{less,css,scss}",
  "lint": "npm run lint-eslint && npm run lint-style-lint",
},
```
