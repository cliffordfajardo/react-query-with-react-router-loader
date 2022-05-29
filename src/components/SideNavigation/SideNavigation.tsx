import React from "react";
import { Layout, Menu } from "antd";
import {
  HddOutlined,
  QuestionCircleOutlined,
  RobotOutlined,
} from "@ant-design/icons";
import "./SideNavigation.css";
import { Link } from "react-router-dom";
import { HELP_NAV_ITEMS } from "../HelpMenu/HelpMenu";
import "./SideNavigation.css";

const { Sider } = Layout;

export const SideNavigation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Sider
      className="SideNavigation"
      collapsible
      collapsed={isSidebarOpen}
      onCollapse={toggleSidebar}
      collapsedWidth={64}
    >
      <div
        data-testid="side-navbar"
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          marginTop: 30,
        }}
      >
        <Menu mode="inline">
          <Menu.Item key="1" icon={<HddOutlined style={{ fontSize: 20 }} />}>
            <Link to="__TODO__">Route 1</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<RobotOutlined style={{ fontSize: 20 }} />}>
            <Link to="__TODO__">Route 2</Link>
          </Menu.Item>
          <Menu.SubMenu
            key="sub1"
            icon={<QuestionCircleOutlined />}
            title="Help"
          >
            {HELP_NAV_ITEMS.map(({ path, icon, name }) => (
              <Menu.Item key={path} icon={icon}>
                <a target="_blank" rel="noreferrer" href={path}>
                  {name}
                </a>
              </Menu.Item>
            ))}
          </Menu.SubMenu>
        </Menu>
      </div>
    </Sider>
  );
};

export default SideNavigation;
