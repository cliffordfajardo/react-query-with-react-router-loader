import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { AppLayout, SideNavigation, TopNavigation } from "../components";

export async function loader() {
  return [];
}

export default function Root() {
  const data = useLoaderData();

  return (
    <>
      <AppLayout
        topNav={<TopNavigation />}
        sideNavigation={<SideNavigation />}
        content={
          <>
            <Outlet />
          </>
        }
      />
    </>
  );
}
