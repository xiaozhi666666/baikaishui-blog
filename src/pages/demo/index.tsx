import React, { FC, useMemo, useState } from "react";
import Layout from "@theme/Layout";
import router from "./router";
import styles from "./less/index.module.less";
import Link from "@docusaurus/Link";
const Demo: FC = () => {
  const linkMap = useMemo(() => router, []);
  return (
    <Layout>
      <div className={styles.container}>
        <h2>示例代码库</h2>
        <div className={styles.linkList}>
          {linkMap.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.path}
                className={styles["gradient-border"]}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Demo;
