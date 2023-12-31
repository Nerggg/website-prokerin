import Logo from "../../assets/general/prokerinLogo.png";
import Icon from "@mdi/react";
import {
  mdiHome,
  mdiMagnify,
  mdiAccountCircleOutline,
  mdiPlusBox,
} from "@mdi/js";
import { useNavigate } from "react-router-dom";

function SideBar() {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleAddProker = () => {
    navigate("/addproker");
  };
  const handleHomeClick = () => {
    navigate("/main");
  };

  return (
    <div className="fixed h-screen w-[10%] bg-white border-red-400 border-r z-50">
      <img src={Logo} className="px-[15%] pt-[50px]" />
      <div className="flex flex-col pt-[60%] items-center">
        <Icon
          path={mdiHome}
          onClick={handleHomeClick}
          className="px-[37%] text-red-400"
        />
        <div
          className="pb-[40px] font-bold text-red-400 text-[14px]"
          onClick={handleHomeClick}
        >
          Home
        </div>
        <Icon path={mdiMagnify} className="px-[37%] text-gray-500" />
        <div className="pb-[40px] text-gray-500 text-[14px]">Search</div>
        <Icon
          path={mdiAccountCircleOutline}
          className="mx-[37%] text-gray-500 cursor-pointer"
          onClick={handleProfileClick}
        />
        <div
          className="mb-[40px] text-gray-500 cursor-pointer text-[14px]"
          onClick={handleProfileClick}
        >
          Profile
        </div>
        <Icon
          path={mdiPlusBox}
          className="mx-[37%] text-gray-500 cursor-pointer"
          onClick={handleAddProker}
        />
        <div
          className="text-gray-500 text-[14px] cursor-pointer"
          onClick={handleAddProker}
        >
          Add Proker
        </div>
      </div>
    </div>
  );
}

export default SideBar;
