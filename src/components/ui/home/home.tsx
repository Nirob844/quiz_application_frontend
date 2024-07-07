"use client";
import { Layout } from "antd";
import Banner from "./Banner";
import AppFooter from "./Footer";
import Navbar from "./Navbar";
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
