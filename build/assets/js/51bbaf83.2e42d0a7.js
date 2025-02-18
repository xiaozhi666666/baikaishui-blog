"use strict";(self.webpackChunkbaikaishui_blog=self.webpackChunkbaikaishui_blog||[]).push([[75],{7512:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>t,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"skill/webpack/source-code","title":"webpack\u6e90\u7801","description":"webpack \u5f15\u4ee5\u4e3a\u50b2\u7684\u51e0\u4e2a\u4e1c\u897f\uff0c\u90fd\u662f\u6284\u7684\uff0c\u54c8\u54c8\u54c8","source":"@site/docs/skill/webpack/webpack\u6e90\u7801.md","sourceDirName":"skill/webpack","slug":"/source-code","permalink":"/baikaishui-blog/docs/source-code","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"source-code","slug":"/source-code","title":"webpack\u6e90\u7801","authors":"baikaishui","keywords":["webpack","source-code"]},"sidebar":"skill","previous":{"title":"webpack","permalink":"/baikaishui-blog/docs/webpack"}}');var o=s(4848),r=s(8453);const a={id:"source-code",slug:"/source-code",title:"webpack\u6e90\u7801",authors:"baikaishui",keywords:["webpack","source-code"]},l=void 0,t={},c=[{value:"1. js \u7f16\u8bd1\u8fc7\u7a0b",id:"1-js-\u7f16\u8bd1\u8fc7\u7a0b",level:2},{value:"2. webpack5 \u5f15\u5165\u4e86 prepack\uff0c\u53ef\u4ee5\u5f88\u597d\u7684\u7b80\u5316\u4ee3\u7801",id:"2-webpack5-\u5f15\u5165\u4e86-prepack\u53ef\u4ee5\u5f88\u597d\u7684\u7b80\u5316\u4ee3\u7801",level:2},{value:"3. webpack \u6e90\u7801",id:"3-webpack-\u6e90\u7801",level:2},{value:"3.1 webpack \u5de5\u4f5c\u6d41\u7a0b",id:"31-webpack-\u5de5\u4f5c\u6d41\u7a0b",level:3},{value:"3.2 webpack \u6e90\u7801\u5206\u6790",id:"32-webpack-\u6e90\u7801\u5206\u6790",level:3},{value:"3.3 \u600e\u4e48\u53bb\u5199\u4e00\u4e2a plugin",id:"33-\u600e\u4e48\u53bb\u5199\u4e00\u4e2a-plugin",level:3},{value:"3.4 \u600e\u4e48\u53bb\u624b\u5199\u4e00\u4e2a loader",id:"34-\u600e\u4e48\u53bb\u624b\u5199\u4e00\u4e2a-loader",level:3},{value:"3.5 \u624b\u5199\u4e00\u4e2a webpack",id:"35-\u624b\u5199\u4e00\u4e2a-webpack",level:3},{value:"3.6 AST \u9759\u6001\u8bed\u6cd5\u5206\u6790\u6811",id:"36-ast-\u9759\u6001\u8bed\u6cd5\u5206\u6790\u6811",level:3}];function p(n){const e={admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.admonition,{type:"tip",children:[(0,o.jsx)(e.p,{children:"webpack \u5f15\u4ee5\u4e3a\u50b2\u7684\u51e0\u4e2a\u4e1c\u897f\uff0c\u90fd\u662f\u6284\u7684\uff0c\u54c8\u54c8\u54c8"}),(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"treeshaking rollup \u6284\u7684"}),"\n",(0,o.jsx)(e.li,{children:"\u7f13\u5b58\u4f53\u7cfb cache-loader \u7684"}),"\n",(0,o.jsx)(e.li,{children:"\u628a\u751f\u6001\u91cc\u9762\u505a\u7684\u597d\u7684\u63d2\u4ef6\u76f4\u63a5\u63c9\u8fdb\u6765\uff0c\u592a\u574f\u4e86"}),"\n"]})]}),"\n",(0,o.jsx)(e.h2,{id:"1-js-\u7f16\u8bd1\u8fc7\u7a0b",children:"1. js \u7f16\u8bd1\u8fc7\u7a0b"}),"\n",(0,o.jsx)(e.admonition,{type:"tip",children:(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsx)(e.li,{children:"\ud83d\udca1js \u4f1a\u5148\u7f16\u8bd1\u6210\u5b57\u8282\u7801\uff0c\u5b57\u8282\u7801\u901a\u8fc7 V8 \u8f6c\u6362\u6210\u673a\u5668\u7801"}),"\n",(0,o.jsx)(e.li,{children:"\ud83d\udca1webpack \u5f15\u5165 v8-complie-cache \u505a\u673a\u5668\u7801\u7f13\u5b58\u4f18\u5316\uff0c\u4e0d\u8fc7\u540e\u9762\u53bb\u6389\u4e86\uff0cwebpack \u5185\u7f6e\u4e86\u4e00\u4e2a\u7f16\u8f91\u5668"}),"\n"]})}),"\n",(0,o.jsx)(e.h2,{id:"2-webpack5-\u5f15\u5165\u4e86-prepack\u53ef\u4ee5\u5f88\u597d\u7684\u7b80\u5316\u4ee3\u7801",children:"2. webpack5 \u5f15\u5165\u4e86 prepack\uff0c\u53ef\u4ee5\u5f88\u597d\u7684\u7b80\u5316\u4ee3\u7801"}),"\n",(0,o.jsx)(e.admonition,{type:"tip",children:(0,o.jsx)(e.p,{children:"\u5f00\u53d1\u73af\u5883\u4e0d\u4f1a\u6267\u884c prepack \u7684\nprepack \u5c06\u4ee3\u7801\u8f6c\u6362\u6210 AST \u62bd\u8c61\u8bed\u6cd5\u6811\uff0c\u5bf9\u4f60\u7684\u4ee3\u7801\u505a\u4e00\u6b21\u9884\u6267\u884c\uff0c\u5e76\u5bf9\u4f60\u7684\u4ee3\u7801\u505a\u4e00\u4e9b\u5408\u5e76"})}),"\n",(0,o.jsx)(e.h2,{id:"3-webpack-\u6e90\u7801",children:"3. webpack \u6e90\u7801"}),"\n",(0,o.jsx)(e.h3,{id:"31-webpack-\u5de5\u4f5c\u6d41\u7a0b",children:"3.1 webpack \u5de5\u4f5c\u6d41\u7a0b"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Locale Dropdown",src:s(5639).A+"",width:"1540",height:"828"})}),"\n",(0,o.jsxs)(e.admonition,{type:"tip",children:[(0,o.jsx)(e.p,{children:"\u80fd\u8bf4\u4e00\u4e0b webpack \u539f\u7406\u548c\u65b0\u7684\u6a21\u5757\u4e48\uff1f"}),(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsx)(e.li,{children:"Compiler \u662f webpack \u7684\u603b\u8c03\u5ea6\u5668 Complier.run \u6267\u884c\u540e\uff0c\u5f00\u59cb\u6784\u5efa"}),"\n",(0,o.jsx)(e.li,{children:"complier \u8c03\u7528 compilation \u5f00\u59cb\u521b\u5efa Chunk"}),"\n",(0,o.jsx)(e.li,{children:"compilation \u901a\u8fc7 perser \u89e3\u6790 Chunk \u751f\u6210 AST \u8bed\u6cd5\u6811\uff0c\u901a\u8fc7 Template \u751f\u6210\u7ed3\u679c\u4ee3\u7801"}),"\n",(0,o.jsx)(e.li,{children:"\u901a\u8fc7 Module \u548c Dependency \u7ba1\u7406\u4ee3\u7801\u6a21\u5757\u5173\u7cfb\uff0c"}),"\n",(0,o.jsx)(e.li,{children:"\u9012\u5f52\u89e3\u6790\u4f9d\u8d56\u6839\u636e Template \u6a21\u5757\uff0c\u751f\u6210\u7ed3\u679c\u4ee3\u7801"}),"\n"]})]}),"\n",(0,o.jsx)(e.h3,{id:"32-webpack-\u6e90\u7801\u5206\u6790",children:"3.2 webpack \u6e90\u7801\u5206\u6790"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"webpack \u8fd0\u884c\u65f6\u4f1a\u627e\u5230 node_module \u4e2d webpack \u4e2d\u7684 bin \u6587\u4ef6"}),"\n",(0,o.jsx)(e.li,{children:"webpack.js \u6587\u4ef6\uff0c\u9996\u5148\u4f1a\u5224\u65ad webpack-cli \u662f\u5426\u5b89\u88c5\uff0c\u5982\u679c\u6ca1\u5b89\u88c5\u5c31\u4f1a\u63d0\u793a\u4f60\u662f\u5426\u4f7f\u7528 xxx \u5b89\u88c5"}),"\n",(0,o.jsx)(e.li,{children:"\u5982\u679c\u5b89\u88c5\u4e86 webpack-cli \u7684\u5c31\u4f1a\u6267\u884c runCli"}),"\n",(0,o.jsx)(e.li,{children:"runCli \u9996\u5148\u4f1a\u62ff\u5230 package.json \u7684\u5305\uff0c\u5f97\u5230\u9879\u76ee\u7684\u8def\u5f84"}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-javascript",children:'#!/usr/bin/env node\n\n/**\n * @param {string} command process to run\n * @param {string[]} args command line arguments\n * @returns {Promise<void>} promise\n */\nconst runCommand = (command, args) => {\n  const cp = require("child_process");\n  return new Promise((resolve, reject) => {\n    const executedCommand = cp.spawn(command, args, {\n      stdio: "inherit",\n      shell: true,\n    });\n\n    executedCommand.on("error", (error) => {\n      reject(error);\n    });\n\n    executedCommand.on("exit", (code) => {\n      if (code === 0) {\n        resolve();\n      } else {\n        reject();\n      }\n    });\n  });\n};\n\n/**\n * @param {string} packageName name of the package\n * @returns {boolean} is the package installed?\n */\nconst isInstalled = (packageName) => {\n  if (process.versions.pnp) {\n    return true;\n  }\n\n  const path = require("path");\n  const fs = require("graceful-fs");\n\n  let dir = __dirname;\n\n  do {\n    try {\n      if (\n        fs.statSync(path.join(dir, "node_modules", packageName)).isDirectory()\n      ) {\n        return true;\n      }\n    } catch (_error) {\n      // Nothing\n    }\n  } while (dir !== (dir = path.dirname(dir)));\n\n  // https://github.com/nodejs/node/blob/v18.9.1/lib/internal/modules/cjs/loader.js#L1274\n  // eslint-disable-next-line no-warning-comments\n  // @ts-ignore\n  for (const internalPath of require("module").globalPaths) {\n    try {\n      if (fs.statSync(path.join(internalPath, packageName)).isDirectory()) {\n        return true;\n      }\n    } catch (_error) {\n      // Nothing\n    }\n  }\n\n  return false;\n};\n\n/**\n * @param {CliOption} cli options\n * @returns {void}\n */\nconst runCli = (cli) => {\n  const path = require("path");\n  const pkgPath = require.resolve(`${cli.package}/package.json`);\n  // eslint-disable-next-line node/no-missing-require\n  const pkg = require(pkgPath);\n\n  if (pkg.type === "module" || /\\.mjs/i.test(pkg.bin[cli.binName])) {\n    // eslint-disable-next-line node/no-unsupported-features/es-syntax\n    import(path.resolve(path.dirname(pkgPath), pkg.bin[cli.binName])).catch(\n      (error) => {\n        console.error(error);\n        process.exitCode = 1;\n      }\n    );\n  } else {\n    // eslint-disable-next-line node/no-missing-require\n    require(path.resolve(path.dirname(pkgPath), pkg.bin[cli.binName]));\n  }\n};\n\n/**\n * @typedef {Object} CliOption\n * @property {string} name display name\n * @property {string} package npm package name\n * @property {string} binName name of the executable file\n * @property {boolean} installed currently installed?\n * @property {string} url homepage\n */\n\n/** @type {CliOption} */\nconst cli = {\n  name: "webpack-cli",\n  package: "webpack-cli",\n  binName: "webpack-cli",\n  installed: isInstalled("webpack-cli"),\n  url: "https://github.com/webpack/webpack-cli",\n};\n\nif (!cli.installed) {\n  const path = require("path");\n  const fs = require("graceful-fs");\n  const readLine = require("readline");\n\n  const notify =\n    "CLI for webpack must be installed.\\n" + `  ${cli.name} (${cli.url})\\n`;\n\n  console.error(notify);\n\n  let packageManager;\n\n  if (fs.existsSync(path.resolve(process.cwd(), "yarn.lock"))) {\n    packageManager = "yarn";\n  } else if (fs.existsSync(path.resolve(process.cwd(), "pnpm-lock.yaml"))) {\n    packageManager = "pnpm";\n  } else {\n    packageManager = "npm";\n  }\n\n  const installOptions = [packageManager === "yarn" ? "add" : "install", "-D"];\n\n  console.error(\n    `We will use "${packageManager}" to install the CLI via "${packageManager} ${installOptions.join(\n      " "\n    )} ${cli.package}".`\n  );\n\n  const question = `Do you want to install \'webpack-cli\' (yes/no): `;\n\n  const questionInterface = readLine.createInterface({\n    input: process.stdin,\n    output: process.stderr,\n  });\n\n  // In certain scenarios (e.g. when STDIN is not in terminal mode), the callback function will not be\n  // executed. Setting the exit code here to ensure the script exits correctly in those cases. The callback\n  // function is responsible for clearing the exit code if the user wishes to install webpack-cli.\n  process.exitCode = 1;\n  questionInterface.question(question, (answer) => {\n    questionInterface.close();\n\n    const normalizedAnswer = answer.toLowerCase().startsWith("y");\n\n    if (!normalizedAnswer) {\n      console.error(\n        "You need to install \'webpack-cli\' to use webpack via CLI.\\n" +\n          "You can also install the CLI manually."\n      );\n\n      return;\n    }\n    process.exitCode = 0;\n\n    console.log(\n      `Installing \'${\n        cli.package\n      }\' (running \'${packageManager} ${installOptions.join(" ")} ${\n        cli.package\n      }\')...`\n    );\n\n    runCommand(packageManager, installOptions.concat(cli.package))\n      .then(() => {\n        runCli(cli);\n      })\n      .catch((error) => {\n        console.error(error);\n        process.exitCode = 1;\n      });\n  });\n} else {\n  runCli(cli);\n}\n'})}),"\n",(0,o.jsx)(e.h3,{id:"33-\u600e\u4e48\u53bb\u5199\u4e00\u4e2a-plugin",children:"3.3 \u600e\u4e48\u53bb\u5199\u4e00\u4e2a plugin"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"plugin \u901a\u5e38\u662f\u4e00\u4e2a\u7c7b\u3002\u8fd9\u4e2a\u7c7b\u5305\u542b\u4e00\u4e2a apply \u65b9\u6cd5"}),"\n",(0,o.jsx)(e.li,{children:"apply \u65b9\u6cd5\u662f\u63d2\u4ef6\u7684\u5165\u53e3\u70b9\u3002webpack \u4f1a\u5728\u5b89\u88c5\u63d2\u4ef6\u65f6\u8c03\u7528\u8fd9\u4e2a\u65b9\u6cd5\u3002\u5b83\u63a5\u6536\u4e00\u4e2a complier \u5bf9\u8c61\u7684\u5f15\u7528\uff0c\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a\u5bf9\u8c61\u8bbf\u95ee webpack \u73af\u5883"}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-javascript",children:'class MyExamplePlugin {\n  // apply \u662f\u7ed9 webpack \u8c03\u7528\u7684\n  apply(compiler) {\n    // \u7ed1\u5b9a\u5230 \'done\' \u94a9\u5b50\uff0c\u6784\u4ef6\u5b8c\u6210\u65f6\u89e6\u53d1\n    compiler.hooks.done.tap("MyExamplePlugin", (compilation) => {\n      console.log("Hello from MyExamplePlugin");\n    });\n  }\n}\nmodule.exports = MyExamplePlugin;\n'})}),"\n",(0,o.jsx)(e.h3,{id:"34-\u600e\u4e48\u53bb\u624b\u5199\u4e00\u4e2a-loader",children:"3.4 \u600e\u4e48\u53bb\u624b\u5199\u4e00\u4e2a loader"}),"\n",(0,o.jsx)(e.admonition,{type:"tip",children:(0,o.jsx)(e.p,{children:"webpack \u5185\u7f6e\u4e86\u4e00\u4e9b loader \u6bd4\u5982 cache-loader \uff0cwebpack5 \u4e0d\u9700\u8981\u518d\u53bb\u4f7f\u7528 file-loader\uff0c\u6709\u5173\u6587\u4ef6\u7684\u5185\u5bb9\uff0c\u90fd\u4e0d\u9700\u8981\u53bb\u989d\u5916\u5904\u7406"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"loader \u672c\u8d28\u4e0a\u662f\u4e00\u4e2a\u5bfc\u51fa\u4e3a\u51fd\u6570\u7684 JavaScript \u6a21\u5757\uff0c\u8fd9\u4e2a\u51fd\u6570\u4f1a\u5728 webpack \u5904\u7406\u6587\u4ef6\u65f6\u8c03\u7528"}),"\n",(0,o.jsx)(e.li,{children:"\u5b83\u5bfc\u51fa\u4e86\u4e00\u4e2a\u51fd\u6570\uff0c\u8be5\u51fd\u6570\u63a5\u6536\u4e00\u4e2a\u53c2\u6570 source\uff0c\u8fd9\u4e2a\u662f\u6587\u4ef6\u7684\u539f\u59cb\u5185\u5bb9"}),"\n",(0,o.jsx)(e.li,{children:"\u5229\u7528 source \u5904\u7406\u6587\u4ef6"}),"\n",(0,o.jsx)(e.li,{children:"\u6700\u540e return"}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-javascript",children:'module.exports = function (source) {\n  const reversed = source.split("").reverse().join("");\n\n  return `module.exports = ${JSON.stringify(reversed)}`;\n};\n'})}),"\n",(0,o.jsx)(e.h3,{id:"35-\u624b\u5199\u4e00\u4e2a-webpack",children:"3.5 \u624b\u5199\u4e00\u4e2a webpack"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"index.js"}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-javascript",children:'const webpack = require("./webpack");\nconst options = require("../webpack.config.js");\nconst compiler = webpack(options);\n\ncompiler.run((err) => {\n  if (err) {\n    console.log("\u7f16\u8bd1\u51fa\u9519", err);\n  }\n});\n'})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"webpack.js"}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-javascript",children:'const Compiler = require("./Compiler.js");\nconst webpack = function (options) {\n  const compiler = new Compiler(options);\n  if (Array.isArray(options.plugins)) {\n    for (const plugin of options.plugins) {\n      plugin.apply(compiler);\n    }\n  }\n  return compiler;\n};\nmodule.exports = webpack;\n'})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Compiler.js"}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-javascript",children:"const { SyncHook } = require('tapable');\nconst Compilation require('./Compilation.js');\nconst { join } = require('path');\nconst fs = require('fs');\n\nclass Compiler = {\n  constructor(options) {\n    this.options = options;\n    this.entry = options.entry;\n    this.output = options.output;\n    this.modules = [];\n    this.hooks = {\n      run: new SyncHook(['compilation'])\n    }\n  }\n  run(callback) {\n    console.log('\u5f00\u59cb\u6784\u5efa')\uff1b\n    const onCompiled = (err, compilation) => {\n      // \u751f\u6210\u9759\u6001\u6587\u4ef6\n      this.emitAssets(compilation, err =>{});\n    };\n    this.compile(onCompiled)\n  }\n  compile(callback) {\n    const compilation = this.newCompilation();\n    // \u8981\u628a\u4e4b\u524d\u63d2\u4ef6\u6ce8\u518c\u7684\u751f\u547d\u5468\u671f\u5f00\u59cb\u8c03\u5ea6\n    this.hooks.run.call(compilation)\n    compilation.seal(callback)\n  }\n  newCompilation() {\n    const compilation = this.createCompilation();\n    return compilation\n  }\n  createCompilation() {\n    return new Compilation(this)\n  }\n  emitAssets(compilation) {\n    console.log('[\u751f\u6210dist main.js\u6587\u4ef6]');\n    console.log('\u63a5\u6536\u7684\u6587\u4ef6', compilation);\n    const outputPath = join(this.output.path, this.output.filename);\n    let _modules = '';\n    this.modules.map((_module) => {\n      _modules += `\"${_module.filename}\":(module, exports, require) => {\n                    ${_module.transformCode}\n                  }`;\n    })\n    console.log('[modules \u5b8c\u6210]')\n    // \u751f\u6210\u7684\u6a21\u7248\uff0c\u592a\u957f\u6ca1\u641e, \u53ef\u4ee5\u53c2\u8003lib\u4e0b\u7684ChunkTemplate.js\u6587\u4ef6\n    const template = '';\n    fs.writefileSync(outputPath, template, 'utf-8')\n  }\n}\nmodule.exports = Compiler\n"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Compilation.js"}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-javascript",children:'const { join } = require("path");\nconst Parser = require("./Parser.js");\n\nclass Compilation {\n  constructor(Compiler) {\n    const { options, modules } = compiler;\n    this.options = options;\n    this.modules = modules;\n  }\n  seal(callback) {\n    const entryModule = this.buildModule(this.option.entry, true);\n    console.log("[\u5c01\u88c5\u5bf9\u5e94\u7684entry \u548c chunk]");\n    this.modules.push(entryModule);\n    // \u9012\u5f52\n    this.modules.map((_module) => {\n      _modules.dependencies.map((dependency) => {\n        this.modules.push(this.buildModule(dependency, false));\n      });\n    });\n    console.log("[\u5c01\u88c5\u5bf9\u5e94\u7684entry \u548c chunk\u5b8c\u6210]");\n    callback(null, this);\n  }\n  buildModule(filename, isEntry) {\n    console.log("____filename___", filename);\n    let absolutePath = "";\n    let ast = "";\n    if (!isEntry) {\n      absolutePath = join(process.cwd(), "./src/", filename);\n      ast = Parser.parse(absolutePath);\n    } else {\n      ast = Parser.parse(filename);\n    }\n\n    const dependencies = Parser.getDependencies(ast);\n    const transformCode = Parser.transform(ast);\n    return {\n      filename,\n      dependencies,\n      transformCode,\n    };\n  }\n}\nmodule.exports = Compilation;\n'})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Parser.js \u6e90\u7801\u4f7f\u7528\u7684\u662f acorn \uff0c\u6211\u8fd9\u91cc\u4f7f\u7528 babylon"}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-javascript",children:"// \u904d\u5386ast\u6811\u7684\nconst babylon = require('babylon');\nconst traverse = require('babel-traverse').default;\nconst fs = reuqire('fs');\nconst { transformFromAstSync } = require('@babel/core')\n\nclass Perser {\n  static parse(path) {\n    const content = fs.readFileSync(path, 'utf8');\n    return babylon.parse(content, {\n      sourceType: 'module'\n    })\n  }\n  // \u83b7\u53d6\u6a21\u5757\u4f9d\u8d56\n  static getDependencies(ast) {\n    const dependencies = [];\n    traverse(ast, {\n      ImportDeclaration({node}) {\n        dependencies.push(node.source.value)\n      }\n    })\n    return dependencies\n  }\n  static transform(ast) {\n    const { code } = transformFromAstSync(ast, null, {\n      parsets: ['@babel/preset-env']\n    });\n    return code\n  }\n}\nmodule.exports = Parser;\n\t```\n"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"@babel/core \u8981\u9501\u4e0b\u7248\u672c 7.12.3 @babel/preset-env \u9501 7.15.6"}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-javascript",children:'const { join } = require("path");\nconst ConsoleLogOnBuildWebpackPlugin = require("./plugins/ConsoleLogOnBuildWebpackPlugin");\n\nmodule.exports = {\n  entry: join(__dirname, "./src/index.js"),\n  output: {\n    path: join(__dirname, "./dist"),\n    filename: "main.js",\n  },\n  plugins: [new ConsoleLogOnBuildWebpackPlugin()],\n};\n'})}),"\n",(0,o.jsx)(e.h3,{id:"36-ast-\u9759\u6001\u8bed\u6cd5\u5206\u6790\u6811",children:"3.6 AST \u9759\u6001\u8bed\u6cd5\u5206\u6790\u6811"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"local Dropdown",src:s(1872).A+"",width:"509",height:"273"})})]})}function d(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(p,{...n})}):p(n)}},1872:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/ast-ec8a6995971ab5f4336adccd55af2be4.png"},5639:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/webapck-process-b0e6f324d736f3fb9ee6e7c7a65546f0.png"},8453:(n,e,s)=>{s.d(e,{R:()=>a,x:()=>l});var i=s(6540);const o={},r=i.createContext(o);function a(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:a(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);