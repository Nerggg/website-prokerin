import React from "react";
import { Outlet } from "react-router-dom";

const SideBar = () => {
  return (
    <div className=" w-full grid grid-cols-5">
      <div className="col-span-1">asd</div>
      <div className="col-span-3">
        <Outlet />
      </div>
      <div className="col-span-1">asd</div>
    </div>
  );
};

export default SideBar;
