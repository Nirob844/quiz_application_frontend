"use client";
import { Layout } from "antd";
import AppFooter from "./Footer";
import Banner from "./banner";
import Navbar from "./navbar";
const { Content } = Layout;

const Home = () => {
  return (
    <Layout className="layout" style={{ minHeight: "100vh" }}>
      <Navbar />
      <Content>
        <Banner />
      </Content>
      <AppFooter />
    </Layout>
  );
};

export default Home;
