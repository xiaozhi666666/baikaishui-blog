"use strict";(self.webpackChunkbaikaishui_blog=self.webpackChunkbaikaishui_blog||[]).push([[661],{2031:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"skill/code-specification/prettier","title":"prettier","description":"Prettier \u662f\u4e00\u4e2a\u7edf\u4e00\u4ee3\u7801\u683c\u5f0f\u98ce\u683c\u7684\u5de5\u5177\uff0c Prettier \u66f4\u6ce8\u91cd\u683c\u5f0f\u89c4\u5219\uff0c\u800c ESLint \u66f4\u6ce8\u91cd\u8d28\u91cf\u89c4\u5219","source":"@site/docs/skill/code-specification/prettier.md","sourceDirName":"skill/code-specification","slug":"/prettier","permalink":"/baikaishui-blog/docs/prettier","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"prettier","slug":"/prettier","title":"prettier","authors":"baikaishui","keywords":["code-specification","prettier"]},"sidebar":"skill","previous":{"title":"eslint","permalink":"/baikaishui-blog/docs/eslint"},"next":{"title":"stylelint","permalink":"/baikaishui-blog/docs/stylelint"}}');var r=i(4848),s=i(8453);const c={id:"prettier",slug:"/prettier",title:"prettier",authors:"baikaishui",keywords:["code-specification","prettier"]},o=void 0,a={},l=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u8fd0\u884c\u4ee5\u4e0b\u6307\u4ee4\u68c0\u6d4b\u662f\u5426\u6709\u91cd\u590d\u7684\u683c\u5f0f\u89c4\u5219\u96c6\u5728\u751f\u6548",id:"\u8fd0\u884c\u4ee5\u4e0b\u6307\u4ee4\u68c0\u6d4b\u662f\u5426\u6709\u91cd\u590d\u7684\u683c\u5f0f\u89c4\u5219\u96c6\u5728\u751f\u6548",level:3},{value:"\u914d\u7f6e .prettierrc \u6587\u4ef6 \uff08\u5168\u90e8\u914d\u7f6e\uff09",id:"\u914d\u7f6e-prettierrc-\u6587\u4ef6-\u5168\u90e8\u914d\u7f6e",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"Prettier \u662f\u4e00\u4e2a\u7edf\u4e00\u4ee3\u7801\u683c\u5f0f\u98ce\u683c\u7684\u5de5\u5177\uff0c Prettier \u66f4\u6ce8\u91cd\u683c\u5f0f\u89c4\u5219\uff0c\u800c ESLint \u66f4\u6ce8\u91cd\u8d28\u91cf\u89c4\u5219\n\u4f46\u662f ESlint \u4e2d\u4e5f\u6709\u4e00\u4e9b\u683c\u5f0f\u89c4\u5219\uff0c\u5c31\u4f1a\u51fa\u73b0\u795e\u4ed9\u6253\u67b6\u7684\u60c5\u51b5\uff0ceslint-config-prettier \u5c31\u662f\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u7684\uff0c\u5c31\u662f\u628a\u4e00\u4e9b\u51b2\u7a81\u7684\u89c4\u5219\u5173\u4e86 \ud83d\ude13"})}),"\n",(0,r.jsx)(t.h3,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn add prettier@3.2.5 --save-dev\n"})}),"\n",(0,r.jsx)(t.h3,{id:"\u8fd0\u884c\u4ee5\u4e0b\u6307\u4ee4\u68c0\u6d4b\u662f\u5426\u6709\u91cd\u590d\u7684\u683c\u5f0f\u89c4\u5219\u96c6\u5728\u751f\u6548",children:"\u8fd0\u884c\u4ee5\u4e0b\u6307\u4ee4\u68c0\u6d4b\u662f\u5426\u6709\u91cd\u590d\u7684\u683c\u5f0f\u89c4\u5219\u96c6\u5728\u751f\u6548"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# eslint-config-prettier 7.0 \u4e4b\u524d\u7684\u7248\u672c\nnpx eslint --print-config src/index.ts | npx eslint-config-prettier-check\n# eslint-config-prettier 7.0 \u4e4b\u540e\u7684\u7248\u672c\nnpx eslint-config-prettier src/index.ts\n"})}),"\n",(0,r.jsxs)(t.h3,{id:"\u914d\u7f6e-prettierrc-\u6587\u4ef6-\u5168\u90e8\u914d\u7f6e",children:["\u914d\u7f6e .prettierrc \u6587\u4ef6 \uff08",(0,r.jsx)(t.a,{href:"https://prettier.io/docs/en/configuration.html",children:"\u5168\u90e8\u914d\u7f6e"}),"\uff09"]}),"\n",(0,r.jsx)(t.p,{children:"\u53c2\u8003\u914d\u7f6e"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'{\n  // \u4f7f\u7528\u5355\u5f15\u53f7\u4ee3\u66ff\u53cc\u5f15\u53f7\n  "singleQuote": true,\n  // \u5728\u5bf9\u8c61\u548c\u6570\u7ec4\u7684\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u540e\u9762\u6dfb\u52a0\u9017\u53f7\uff0c\u9009\u62e9\'es5\'\u4ee5\u652f\u6301\u6240\u6709JavaScript\u73af\u5883\n  "trailingComma": "es5",\n  // \u6bcf\u884c\u6253\u5370\u7684\u6700\u5927\u5bbd\u5ea6\u8bbe\u7f6e\u4e3a100\u4e2a\u5b57\u7b26\n  "printWidth": 100,\n  // \u914d\u7f6e\u6587\u4ef6\u8986\u76d6\u8bbe\u7f6e\n  "overrides": [\n    {\n      // \u6307\u5b9a\u4ec5\u5e94\u7528\u4e8e.prettierc\u6587\u4ef6\u7684\u914d\u7f6e\n      "files": ".prettierrc",\n      "options": {\n        // \u4f7f\u7528JSON\u89e3\u6790\u5668\uff0c\u56e0\u4e3a.prettierc\u6587\u4ef6\u662fJSON\u683c\u5f0f\n        "parser": "json"\n      }\n    }\n  ]\n}\n'})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>c,x:()=>o});var n=i(6540);const r={},s=n.createContext(r);function c(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);