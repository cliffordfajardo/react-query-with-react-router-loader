import React from "react";
import { Layout } from "antd";

type AppLayoutProps = {
  topNav: React.ReactNode;
  sideNavigation: React.ReactNode;
  content: React.ReactNode;
};

const AppLayout = ({ topNav, content, sideNavigation }: AppLayoutProps) => {
  return (
    <>
      {topNav}
      <Layout style={{ minHeight: "100vh" }}>
        <Layout>
          {sideNavigation}
          <Layout.Content>{content}</Layout.Content>
        </Layout>
      </Layout>
    </>
  );
};

export default AppLayout;
