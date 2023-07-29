import React from "react";
import HeaderSearchBar from "../../Component/Header/HeaderSearchBar";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div className="">
      <div className=" sticky top-0">
        <HeaderSearchBar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Header;
