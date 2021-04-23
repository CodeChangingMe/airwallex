import React from 'react';
import { Layout } from "antd";
import styles from "./index.module.scss";

const { Header, Footer, Content } = Layout;

const PageLayout = ({ children }) => {
  return (
    <Layout className={styles.container}>
      <Header className={styles.header}>
        <span className={styles.title}>BROCCOLI & CO.</span>
      </Header>

      <Content>{children}</Content>

      <Footer className={styles.footer}>
        <div>
          <div>Made with in Melbourne.</div>
          <div>@ 2016 Broccoli & Co. All rights reserved</div>
        </div>
      </Footer>
    </Layout>
  );
};

export default PageLayout;
