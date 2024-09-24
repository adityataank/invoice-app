import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../logo";
import Header from "../header";
import SideNav from "../side-nav/side-nav";

function Layout() {
  return (
    <div className="h-dvh grid grid-cols-[280px_auto] grid-rows-[80px_auto] gap-[2px]">
      <Logo />
      <Header />
      <SideNav />
      <div className="p-8 h-full">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
