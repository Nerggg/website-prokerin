import React from "react";
import { Outlet } from "react-router-dom";

const SideBar = () => {
  return (
    <div class="flex h-screen">
      <div class="w-1/4 bg-gray-200">Left part of the screen</div>

      <div class="flex-1 bg-gray-100 overflow-hidden">
        <div class="h-full overflow-y-auto scrollbar-none">
          <Outlet />
        </div>
      </div>

      <div class="w-1/4 bg-gray-200">rige</div>
    </div>
  );
};

export default SideBar;
