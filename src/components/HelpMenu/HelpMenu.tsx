import React from "react";
import {
  SlackOutlined,
  BugOutlined,
  QuestionCircleOutlined,
  BookOutlined,
} from "@ant-design/icons";
import { Button, Menu, Popover } from "antd";

export const HELP_NAV_ITEMS = [
  {
    key: "slack-support",
    name: "Slack Support",
    path: "https://www.google.com/search?q=this+is+an+example+url1",
    icon: <SlackOutlined />,
    group: "Help",
  },
  {
    key: "report-bug",
    name: "Report Bug",
    path: "https://www.google.com/search?q=this+is+an+example+url2",
    icon: <BugOutlined />,
  },
  {
    key: "api-documentation",
    name: "MY_APP API Docs",
    path: "https://www.google.com/search?q=this+is+an+example+url3",
    icon: <BookOutlined />,
  },
] as const;

export const MenuItems = () => {
  return (
    <>
      <Menu>
        {HELP_NAV_ITEMS.map(({ path, icon, name }) => (
          <Menu.Item key={path} icon={icon}>
            <a target="_blank" rel="noreferrer" href={path}>
              {name}
            </a>
          </Menu.Item>
        ))}
      </Menu>
    </>
  );
};

const HelpMenu = () => {
  const [isPopoverMenuOpen, setIsPopoverMenuOpen] = React.useState(false);
  const togglePopOverMenu = () => {
    setIsPopoverMenuOpen(!isPopoverMenuOpen);
  };
  return (
    <>
      <Popover
        content={MenuItems}
        trigger="click"
        visible={isPopoverMenuOpen}
        onVisibleChange={togglePopOverMenu}
      >
        <Button
          key="dropdown"
          icon={<QuestionCircleOutlined />}
          size="large"
          style={{ border: "none" }}
        />
      </Popover>
    </>
  );
};

export default HelpMenu;
