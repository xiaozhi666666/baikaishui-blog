import React, { FC, useMemo, useState } from "react";
import Layout from "@theme/Layout";
import router from "../../../routers/demo";
import styles from "./index.module.less";
import Link from "@docusaurus/Link";

interface DemoLayoutProps {
  children: React.ReactNode;
}
const DemoLayout: FC<DemoLayoutProps> = ({ children }) => {
  const linkMap = useMemo(() => router, []);
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.leftList}>
          {linkMap.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.path}
                className={styles.leftListItem}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
        <div className={styles.rightContent}>{children}</div>
      </div>
    </Layout>
  );
};

export default DemoLayout;
