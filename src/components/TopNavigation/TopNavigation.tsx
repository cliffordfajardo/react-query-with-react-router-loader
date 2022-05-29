import React from "react";
import { Avatar, Card, Drawer } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { HelpMenu } from "../HelpMenu";

/**
 * @description
 * The Navigation at the top of our app.
 */
const TopNavigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav
      data-testid="TopNavigation"
      style={{
        display: "flex",
        alignItems: "center",
        padding: "8px 16px",
        zIndex: 1000,
        borderBottom: "1px solid lightgrey",
        position: "sticky",
      }}
    >
      <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
        <HelpMenu />

        {/* User Profile Avatar */}
        <>
          <button
            type="button"
            onClick={toggleDrawer}
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
              width: "fit-content",
            }}
          >
            <Avatar src={`https://i.pravatar.cc?img=3`} size={40} />
          </button>

          <Drawer
            width={350}
            placement="right"
            onClose={toggleDrawer}
            visible={isDrawerOpen}
            key="right"
            style={{ padding: "24 !important" }}
          >
            <p style={{ marginBottom: 24 }}>User Profile</p>

            <Card hoverable style={{ width: 300 }}>
              <Card.Meta
                avatar={
                  <Avatar
                    icon={<UserOutlined />}
                    size={100}
                    src={`https://i.pravatar.cc?img=3`}
                  />
                }
                title={"Example_First_Name Example_Last_Name"}
              />
            </Card>
          </Drawer>
        </>
      </div>
    </nav>
  );
};

export default TopNavigation;
