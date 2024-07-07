import {
  DashboardOutlined,
  FileProtectOutlined,
  HomeOutlined,
  TableOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { MenuProps } from "antd";
import Link from "next/link";
import { USER_ROLE } from "./role";

export const sidebarItems = (data: string) => {
  const role = data === "ADMIN" ? "admin" : "user";

  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={"/"}>Home</Link>,
      key: "home",
      icon: <HomeOutlined />,
    },
  ];

  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/dashboard`}>Dashboard</Link>,
      key: "dashboard",
      icon: <DashboardOutlined />,
    },
    {
      label: <Link href={`/${role}/quizzes`}>Quizzes</Link>,
      key: "quizzes",
      icon: <TableOutlined />,
    },
    {
      label: <Link href={`/${role}/categories`}>Categories</Link>,
      key: "categories",
      icon: <TableOutlined />,
    },
    {
      label: <Link href={`/${role}/users`}>Users List</Link>,
      key: "users_list",
      icon: <UserOutlined />,
    },
    {
      label: <Link href={`/${role}/admins`}>Admins List</Link>,
      key: "admins_list",
      icon: <UserOutlined />,
    },
  ];

  const userSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,

    {
      label: <Link href={`/${role}/start_quiz`}>Start Quiz</Link>,
      key: "start_quiz",
      icon: <UnorderedListOutlined />,
    },
    {
      label: <Link href={`/${role}/my_performance`}>My Performance</Link>,
      key: "my_performance",
      icon: <FileProtectOutlined />,
    },
  ];

  if (data === USER_ROLE.ADMIN) return adminSidebarItems;
  else if (data === USER_ROLE.USER) return userSidebarItems;
  else {
    return defaultSidebarItems;
  }
};
