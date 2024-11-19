---
id: eslint
slug: /eslint
title: eslint
authors: baikaishui
keywords: ["code-specification", "eslint"]
---

:::tip

1. TypeScript 的代码检查工具主要有 TSLint 和 ESLint 两种
2. 为了在 TypeScript 中复用 ESLint 对于 JavaScript 的生态支持，TypeScript 团队在 2019 年宣布全 面转向 ESLint
   :::

### ESLint 安装

```bash
# ESLint 是开发态的工具，因此使用 --save-dev 进行开发态依赖安装
# 以eslint@8.0.1为例
yarn add eslint@8.0.1  @typescript-eslint/parser@7.2.0 @typescript-eslint/eslint-plugin@6.4.0 eslint-plugin-jsx-a11y eslint-config-airbnb eslint-config-prettier@9.1.0  eslint-plugin-compat eslint-plugin-import eslint-plugin-react-hooks -D
```

### 新建.eslintrc.js 配置文件

```js
module.exports = {
  // 共享配置：配置 TypeScript 推荐的校验规则
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  // 解析器：将 TypeScript 的 AST 转换成兼容 ESLint 的 AST
  parser: "@typescript-eslint/parser",
  // 插件：提供 TypeScript 校验规则的实现
  plugins: ["@typescript-eslint"],
  // 层叠配置：停止向上遍历 ESLint 配置文件
  root: true,
};
```

### 新建.eslintignore 文件

```bash
lib
node_modules
.eslintrc.js
```

### 配置 package.json 命令

```json
"scripts": {
  // 新增 ESLint 校验，校验 src 目录下的 TypeScript 源代码
  // eslint [options] [file|dir|glob]*
  "lint": "eslint --ext .ts src"
},
```

### 共享配置

:::tip
在开发的过程中根据安装的 ESLint 插件进行规则设置是非常麻烦的
ESLint 提供了共享配置的功能，可以将.eslintrc.js 发布成一个 npm 包，减轻开发负担
常用的配置包：eslint-config-standard、eslint-config-airbnb、eslint-config-prettier、eslint-plugin-import、eslint-plugin-react-hooks 等
:::
直接在 eslintrc.js 中配置

```js
{
  // 类似于插件，可以省略 eslint-config 前缀
  "extends": ["airbnb",'prettier']
}
```

:::caution
运行指令查看 eslint 是否生效

```bash
npx eslint src/index.tsx
```

:::

### 参考配置

> 安装： 以eslint@8.0.1为例

```bash
yarn add eslint@8.0.1  @typescript-eslint/parser@7.2.0 @typescript-eslint/eslint-plugin@6.4.0 eslint-plugin-jsx-a11y eslint-config-airbnb eslint-config-prettier@9.1.0  eslint-plugin-compat eslint-plugin-import eslint-plugin-react-hooks -D
```

> eslintrc.js

```javascript
module.exports = {
  // 指定 ESLint 使用 @typescript-eslint/parser 作为解析器
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb", // 使用 Airbnb 的 ESLint 配置
    "prettier", // 主要解决一下prettier 打架的问题
    "plugin:compat/recommended", // 检查 JavaScript 代码兼容性
    "eslint:recommended", // 使用 ESLint 的推荐配置，包括一些基本的错误检查
    "plugin:@typescript-eslint/recommended", //使用 @typescript-eslint 插件的推荐配置，适用于 TypeScript 项目
    "plugin:import/errors", // import 插件的错误和警告规则，确保模块导入的正确性和最佳实践
    "plugin:import/warnings", // import 插件的错误和警告规则，确保模块导入的正确性和最佳实践
    "plugin:react-hooks/recommended", // 确保 React Hooks 的正确使用
  ],
  plugins: ["@typescript-eslint"], // 声明项目中使用的 ESLint 插件
  env: {
    browser: true, // 项目代码将在浏览器环境中运行
    node: true, // 项目代码将在 Node.js 环境中运行
    es6: true, // 项目代码使用 ES6+ 语法
    mocha: true, // 项目中使用 Mocha 测试框架 好像没啥用
    jest: true, // 项目中使用 Jest 测试框架
    jasmine: true, // 项目中使用 Jasmine 测试框架
  },
  // 全局变量
  globals: {
    APP_TYPE: true,
    page: true,
  },
  // 一些规则的使用，可以关闭和修改一些规则，懂得都懂
  rules: {},
};
```
