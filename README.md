# 白开水的博客

这是一个使用 [Docusaurus](https://docusaurus.io/) 构建的现代静态网站。Docusaurus 是一个现代化的静态网站生成器，支持 React、TypeScript 和 Less。

## 安装

```sh
yarn install
```
## 本地开发
```sh
yarn start
```
此命令将启动一个本地开发服务器并打开浏览器窗口。大多数更改会实时反映，无需重启服务器。

## 构建
```sh
yarn build
```
## 部署
该项目使用github的workflows进行自动化部署，推送到main分支后，会执行整个ci流程，并部署到gh-pages分支，使用github托管

## 技术栈
1. React: 前端库，用于构建用户界面。
2. Docusaurus: 现代静态网站生成器，提供强大的文档和博客功能。
3. TypeScript: 静态类型检查的 JavaScript 超集，提高代码质量和可维护性。
4. Less: CSS 预处理器，提供变量、混合等高级功能，使样式管理更加灵活。
## 项目结构
- src/: 包含所有源代码文件。
- src/pages/: 包含页面组件。
- src/components/: 包含可复用的组件。
- src/styles/: 包含全局样式和 Less 文件。
- static/: 包含静态资源文件，如图片和字体。
- docusaurus.config.js: Docusaurus 配置文件。
## 贡献
欢迎任何形式的贡献！如果你有任何建议或发现任何问题，请提交一个 issue 或者 pull request。

## 许可证
本项目采用 MIT 许可证，详情请参见 LICENSE 文件。

感谢你的关注和支持！

白开水