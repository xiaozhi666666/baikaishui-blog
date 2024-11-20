import React, { FC, Fragment, useCallback, useMemo } from "react";
import Layout from "@theme/Layout";
import styles from "./less/index.module.less";
const About: FC = () => {
  const myAbout = useMemo(
    () => [
      {
        key: "introductionList",
        title: null,
        values: [
          "作为一名资深的cv工程师",
          "本科毕业后已经做了5年🐮🐎",
          "目前在杭州的一家普通的教育公司",
          "平时比较逛吃逛吃，后续可以考虑在这上面写一写逛吃攻略",
          "本人之前平时比较喜欢用语雀去总结一些东西，慢慢搬到这里",
          "希望自己能坚持下去，把所有的东西都记录下来，方便自己以后翻看",
        ],
      },
      {
        key: "mySkills",
        title: "技术偏好",
        values: [
          "目前以react + ts为主",
          "我对象的技术栈是以vue为主，所以vue一直有写（懂得都懂）",
          "后端方面目前以node为主，早些时候写过php都忘没了，玩过express和koa2，nextjs还没尝试",
          "小程序，写过原生小程序和taro，上手基本上都是对着文档写👀，感觉太依赖三方，个人还是比较喜欢 vue，react",
          "electron参与过一些迭代，没有从0-1搞过，有需求干就完了，感觉对react选手很友好",
          "数据库方面：redis, mongodb, mysql",
        ],
      },
      {
        key: "myProjects",
        title: "项目偏好",
        values: [
          "搞过整个代码规范流程，包括ci流程，并在团队分享",
          "写过简单的低代码项目",
          "写过大型的CRM后台项目",
          "写过官网社区等toC项目",
          "写过AI聊天工具，对接阿里云百炼大模型，支持sse通信，复杂markdown自定义",
          "写过代码编辑器相关项目",
          "写过wsSDK，及简单的IM通信",
          "写过电商相关活动页，购物车，订单，商详，sku选择器等",
        ],
      },
      {
        key: "myDevice",
        title: "我的设备",
        values: [
          "MacBook Pro M1 14(刚出买的，血亏一个耳机😭)",
          "iPhone 16 pro",
          "红米4k显示器(好用)",
          "索尼WH-1000XM5",
          "西昊C300人体工学座椅（被大哥洗脑, 类比公司时间和睡觉时间，超值的🤣）",
        ],
      },
    ],
    []
  );
  const li = useCallback((i) => <li key={i}>{i}</li>, []);
  return (
    <Layout>
      <main className={styles.aboutContainer}>
        <article>
          <header>
            <h1>你好 👋，我是白开水。</h1>
          </header>
          {myAbout.map((it) => (
            <Fragment key={it.key}>
              <h2>{it.title}</h2>
              <ul>{it.values.map(li)}</ul>
            </Fragment>
          ))}
        </article>
      </main>
    </Layout>
  );
};

export default About;
