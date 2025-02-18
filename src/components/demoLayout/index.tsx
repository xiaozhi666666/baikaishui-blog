import React, { FC } from "react";
import Layout from "@theme/Layout";

interface IDemoLayoutProps {
  children: React.ReactNode;
}

const DemoLayout: FC<IDemoLayoutProps> = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default DemoLayout;
