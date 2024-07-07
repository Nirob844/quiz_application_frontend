"use client";
import { sidebarItems } from "@/constants/sidebarItems";
import { getUserInfo } from "@/services/auth.service";
import { Layout, Menu } from "antd";
import { useState } from "react";
const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const { role } = getUserInfo() as any;

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={240}
      style={{
        height: "100vh",
        overflow: "auto",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
        backgroundColor: "#673AB7",
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: collapsed ? "1rem" : "2rem",
          fontWeight: "bold",
          textAlign: "center",
          margin: "1rem 0",
        }}
      >
        Quiz
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sidebarItems(role)}
      />
    </Sider>
  );
};

export default Sidebar;
