import React, { useState } from "react";
import Logo from "../../Assets/General/logo.svg";
import SearchIcon from "../../Assets/Header/searchIcon.svg";
import HomeIcon from "../../Assets/Header/homeIcon.svg";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import {
  mdiAccountCircle,
  mdiAccountGroup,
  mdiHome,
  mdiMagnify,
  mdiMessageText,
} from "@mdi/js";

const HeaderSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    // You can add further logic here if needed (e.g., perform search operation).
  };

  return (
    <div className="bg-darkblue w-full h-[100px] flex gap-x-16 items-center px-[4%] ">
      <img src={Logo} alt="logo" className=" w-[139px] h-[48px]" />
      <div className="h-[50px] w-[40%] bg-white border-black border rounded-full items-center flex">
        {/* <img
          src={SearchIcon}
          className="my-[3px] ml-[15px] w-[36px] h-[36px]"
        /> */}
        <Icon className="text-black ml-3" path={mdiMagnify} size={1.5} />

        <input
          value={searchQuery}
          onChange={handleSearchChange}
          className="ml-[5px] h-[45px] w-[82%] text-[16px] outline-none"
          placeholder="Cari Proker"
        />
      </div>
      <div className="flex items-center gap-x-16">
        <Link to="/dashboard">
          <Icon className="text-white" path={mdiHome} size={2.5} />
        </Link>
        <Link to="/">
          <Icon className="text-white" path={mdiAccountGroup} size={2.5} />
        </Link>
        <Link to="/">
          <Icon className="text-white" path={mdiMessageText} size={2.5} />
        </Link>
      </div>
      <div className="ml-auto">
        <Link to="/">
          <Icon className="text-white" path={mdiAccountCircle} size={2.5} />
        </Link>
      </div>
    </div>
  );
};

export default HeaderSearchBar;
