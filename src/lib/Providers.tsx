"use client";

import { ConfigProvider } from "antd";
import { AliasToken } from "antd/es/theme/internal";
import StyledComponentsRegistry from "./AntdRegistry";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const customTheme = {
    token: {
      colorPrimary: "#673AB7",
      colorInfo: "#ff9800",
    } as Partial<AliasToken>,
    components: {
      Layout: {
        triggerBg: "#3c2f80",
        colorBgBody: "#f1efff",
      },
      Menu: {
        darkItemBg: "#673AB7",
        darkSubMenuItemBg: "#3c2f80",
      },
    },
  };

  return (
    <ConfigProvider theme={customTheme}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </ConfigProvider>
  );
};

export default Providers;
