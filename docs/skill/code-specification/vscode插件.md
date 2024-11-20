---
id: vscode
slug: /vscode
title: vscode配置
authors: baikaishui
keywords: ["code-specification", "vscode"]
---

:::tip
不想每次都运行 npm run lint 给我把 VS Code 插件都装好 ESLint，其他的 Prettier-Code-formatter、 Stylelint、Code Spell Checker 等
:::

### 内置.vscode 文件

```bash
├── .vscode
│   └── settings.json  # 工作区的 ESLint Auto Fix 放在此文件中
├── .eslintignore
├── eslintrc.js
├── .gitignore
├── README.md
├── package-lock.json
├── package.json
└── tsconfig.json
```

### 保存自动格式化

```json
// .vscode/settings.json
{
  // ESLint stylelint 保存自动 Fix
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": "explicit",
    "source.fixAll": "explicit"
  },
  // 设置 Prettier 为 VS Code 的默认格式工具
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  // Prettier 保存自动格式化
  "editor.formatOnSave": true
}
```
