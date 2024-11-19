---
id: prettier
slug: /prettier
title: prettier
authors: baikaishui
keywords: ["code-specification", "prettier"]
---

:::tip
Prettier 是一个统一代码格式风格的工具， Prettier 更注重格式规则，而 ESLint 更注重质量规则
但是 ESlint 中也有一些格式规则，就会出现神仙打架的情况，eslint-config-prettier 就是为了解决这个问题的，就是把一些冲突的规则关了 😓
:::

### 安装

```bash
yarn add prettier@3.2.5 --save-dev
```

### 运行以下指令检测是否有重复的格式规则集在生效

```bash
# eslint-config-prettier 7.0 之前的版本
npx eslint --print-config src/index.ts | npx eslint-config-prettier-check
# eslint-config-prettier 7.0 之后的版本
npx eslint-config-prettier src/index.ts
```

### 配置 .prettierrc 文件 （[全部配置](https://prettier.io/docs/en/configuration.html)）

参考配置

```javascript
{
  // 使用单引号代替双引号
  "singleQuote": true,
  // 在对象和数组的最后一个元素后面添加逗号，选择'es5'以支持所有JavaScript环境
  "trailingComma": "es5",
  // 每行打印的最大宽度设置为100个字符
  "printWidth": 100,
  // 配置文件覆盖设置
  "overrides": [
    {
      // 指定仅应用于.prettierc文件的配置
      "files": ".prettierrc",
      "options": {
        // 使用JSON解析器，因为.prettierc文件是JSON格式
        "parser": "json"
      }
    }
  ]
}
```
