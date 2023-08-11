import Logo from "../../assets/general/prokerinLogo.png";
import Icon from "@mdi/react";
import {
  mdiHome,
  mdiMagnify,
  mdiAccountCircleOutline,
  mdiPlusBox,
} from "@mdi/js";
import { useNavigate } from "react-router-dom";
import useStore from "../../pages/Store";
import { useState } from "react";
import { Popover } from "@headlessui/react";

function SideBarMain() {
  const { user } = useStore();
  const navigate = useNavigate();
  const [page, setPage] = useState({
    home: false,
    profile: false,
    proker: false,
  });

  const handleAddProker = () => {
    setPage({
      home: false,
      profile: false,
      proker: true,
    });
    navigate("/addproker");
  };

  const handleHomeClick = () => {
    setPage({
      home: true,
      profile: false,
      proker: false,
    });
    navigate("/main");
  };
  const handleProfileClick = () => {
    setPage({
      home: false,
      profile: true,
      proker: false,
    });
    navigate("/profile");
  };

  return (
    <div className=" h-screen flex flex-col  w-[14%] bg-white border-red-400 border-r z-50">
      <img src={Logo} className="px-[15%] pt-[50px]" />
      <div className="hidden 2xl:flex 2xl:flex-col pt-[60%] space-y-7 px-[15%] ">
        <div className="flex items-center">
          <Icon
            path={mdiHome}
            className={`cursor-pointer ${
              page?.home ? "text-red-400" : "text-gray-500"
            }`}
            onClick={handleHomeClick}
            size={2}
          />
          <div
            className={`text-xl ml-3 cursor-pointer ${
              page?.home ? "text-red-400 font-bold" : "text-gray-500"
            }`}
            onClick={handleHomeClick}
          >
            Home
          </div>
        </div>

        <div className="flex items-center">
          <Icon
            path={mdiAccountCircleOutline}
            className={`cursor-pointer ${
              page?.profile ? "text-red-400" : "text-gray-500"
            }`}
            size={2}
            onClick={handleProfileClick}
          />
          <div
            className={`text-xl ml-3 cursor-pointer ${
              page?.profile ? "text-red-400 font-bold" : "text-gray-500"
            }`}
            onClick={handleProfileClick}
          >
            Profile
          </div>
        </div>
        <div className="flex items-center">
          <Icon
            size={2}
            path={mdiPlusBox}
            className={`cursor-pointer ${
              page?.proker ? "text-red-400" : "text-gray-500"
            }`}
            onClick={handleAddProker}
          />
          <div
            className={`text-xl ml-3 cursor-pointer ${
              page?.proker ? "text-red-400 font-bold" : "text-gray-500"
            }`}
            onClick={handleAddProker}
          >
            Add Proker
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center pt-[60%] space-y-7 px-[15%] 2xl:hidden">
        <div className="flex items-center">
          <Icon
            path={mdiHome}
            className={`cursor-pointer ${
              page?.home ? "text-red-400" : "text-gray-500"
            }`}
            onClick={handleHomeClick}
            size={2}
          />
        </div>

        <div className="flex items-center">
          <Icon
            path={mdiAccountCircleOutline}
            size={2}
            className={`cursor-pointer ${
              page?.profile ? "text-red-400" : "text-gray-500"
            }`}
            onClick={handleProfileClick}
          />
        </div>
        <div className="flex items-center">
          <Icon
            size={2}
            path={mdiPlusBox}
            className={`cursor-pointer ${
              page?.proker ? "text-red-400" : "text-gray-500"
            }`}
            onClick={handleAddProker}
          />
        </div>
      </div>
      <div className="flex flex-col items-center mt-auto mb-4 outline-none">
        <Popover className="relative">
          <Popover.Button>
            <div className="flex items-center space-x-3 ">
              <Icon
                path={mdiAccountCircleOutline}
                className="w-auto h-[60px]"
              />
              <div className="">{user.user.nick_name}</div>
            </div>
          </Popover.Button>

          <Popover.Panel
            className={`absolute z-10 ${
              false ? "top-0" : "-top-full"
            } right-0 mt-2`}
          >
            <div className="grid grid-cols-2">
              <a href="/analytics">Analytics</a>
              <a href="/engagement">Engagement</a>
              <a href="/security">Security</a>
              <a href="/integrations">Integrations</a>
            </div>

            <img src="/solutions.jpg" alt="" />
          </Popover.Panel>
        </Popover>
      </div>
    </div>
  );
}

export default SideBarMain;
