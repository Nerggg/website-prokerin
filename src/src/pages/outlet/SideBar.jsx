import React from "react";
import { Outlet } from "react-router-dom";
import SideBarMain from "../../components/sidebar/SidebarMain";

const SideBar = () => {
  return (
    <div className="flex h-screen w-screen bg-gray-100">
      <SideBarMain />
      <div className="w-full flex justify-center overflow-x-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default SideBar;
